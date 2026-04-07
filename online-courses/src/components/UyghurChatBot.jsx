// KeLBiLAgent.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './KeLBiLAgent.css';

// ===== KeLBiL Agent - GROQ Llama 3.3 70B ئۇيغۇرچە AI ياردەمچىسى =====

class KeLBiLGroq {
  constructor() {
    this.apiKey = '';
    this.baseURL = 'https://api.groq.com/openai/v1';
    this.model = 'llama-3.3-70b-versatile';
    this.context = [];
    this.tokenCount = 0;
    this.lastReset = Date.now().toString();
  }

  loadFromStorage() {
    this.apiKey = localStorage.getItem('GROQ_API_KEY') || '';
    this.tokenCount = parseInt(localStorage.getItem('groq_token_count') || '0');
    this.lastReset = localStorage.getItem('groq_token_reset') || Date.now().toString();
    this.checkTokenReset();
  }

  checkTokenReset() {
    const now = Date.now();
    const lastReset = parseInt(this.lastReset);
    if (now - lastReset > 24 * 60 * 60 * 1000) {
      this.tokenCount = 0;
      localStorage.setItem('groq_token_count', '0');
      localStorage.setItem('groq_token_reset', now.toString());
    }
  }

  setApiKey(key) {
    this.apiKey = key;
    localStorage.setItem('GROQ_API_KEY', key);
  }

  async streamChat(message, onToken, onComplete, onSpeed) {
    if (!this.apiKey) {
      throw new Error('API ئاچقۇچى تەلەپ قىلىنىدۇ');
    }

    this.context.push({ role: 'user', content: message });
    const startTime = performance.now();
    let tokenCount = 0;

    try {
      const response = await fetch(`${this.baseURL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            {
              role: 'system',
              content: `سىز KeLBiL Agent — ئۇيغۇرچە سۆزلىشىدىغان سۈنئىي ئەقىل ياردەمچىسى.

مۇھىم قائىدىلەر:
1. پەقەت ئۇيغۇرچە جاۋاب بېرىڭ
2. قىسقا ۋە ئېنىق جاۋاب بېرىڭ
3. ياردەمچىل ۋە دوستانە بولۇڭ
4. ئەگەر بىلمىسىڭىز، "كەچۈرۈڭ، مەن ھازىرچە بۇ سوئالغا جاۋاب بېرەلمەيمەن" دەڭ

سىز GROQ سۇپىسىدا 800+ توكېن/سېكۇنت تېزلىكتە ئىشلەيدىغان Llama 3.3 70B مودېلى`
            },
            ...this.context.slice(-6)
          ],
          temperature: 0.7,
          max_tokens: 1024,
          stream: true
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'API خاتالىق');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullResponse = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');
        
        for (const line of lines) {
          if (line.startsWith('data: ') && !line.includes('[DONE]')) {
            try {
              const data = JSON.parse(line.slice(6));
              const token = data.choices[0]?.delta?.content || '';
              fullResponse += token;
              tokenCount++;
              
              onToken(token, fullResponse);
              
              const elapsed = (performance.now() - startTime) / 1000;
              const speed = Math.round(tokenCount / elapsed);
              if (speed > 0 && onSpeed) onSpeed(speed);
            } catch (e) {}
          }
        }
      }

      this.tokenCount += tokenCount;
      localStorage.setItem('groq_token_count', this.tokenCount.toString());
      
      this.context.push({ role: 'assistant', content: fullResponse });
      onComplete(fullResponse);
      return fullResponse;
      
    } catch (error) {
      console.error('GROQ API خاتالىق:', error);
      throw error;
    }
  }

  getTokenUsage() {
    return { used: this.tokenCount, limit: 6000 };
  }

  clearContext() {
    this.context = [];
  }
}

// ===== ئاساسلىق Component =====
const KeLBiLAgent = () => {
  // State'لەر
  const [apiKey, setApiKey] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState('تەييار');
  const [speed, setSpeed] = useState(800);
  const [tokenUsed, setTokenUsed] = useState(0);
  const [tokenLimit, setTokenLimit] = useState(6000);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingResponse, setTypingResponse] = useState('');
  
  const chatEndRef = useRef(null);
  const agentRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // Agentنى قوزغىتىش
  useEffect(() => {
    agentRef.current = new KeLBiLGroq();
    agentRef.current.loadFromStorage();
    
    const savedKey = localStorage.getItem('GROQ_API_KEY');
    if (savedKey) {
      agentRef.current.setApiKey(savedKey);
      setApiKey(savedKey);
      setIsModalOpen(false);
      
      // خۇش كەلدىڭىز ئۇچۇرى
      setMessages([
        {
          id: Date.now(),
          text: 'KeLBiL گە خۇش كەلدىڭىز! 👋\n\nمەن GROQ Llama 3.3 70B مودېلى بىلەن ئىشلەيدىغان ئۇيغۇرچە AI Agent. 800+ توكېن/سېكۇنت تېزلىكتە جاۋاب بېرەلەيمەن.\n\nسوئال سوراڭ:',
          sender: 'agent',
          time: new Date().toLocaleTimeString('ug', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      
      const tokenData = agentRef.current.getTokenUsage();
      setTokenUsed(tokenData.used);
      setTokenLimit(tokenData.limit);
    } else {
      setIsModalOpen(true);
    }
  }, []);

  // سۆزلىشىش ئاخىرىغا ئاپتوماتىك يۆتكەش
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // توكېن كۆرسىتىشىنى يېڭىلاش
  const updateTokenDisplay = useCallback(() => {
    if (agentRef.current) {
      const tokenData = agentRef.current.getTokenUsage();
      setTokenUsed(tokenData.used);
      setTokenLimit(tokenData.limit);
    }
  }, []);

  // ئۇچۇر قوشۇش
  const addMessage = useCallback((text, sender) => {
    const newMessage = {
      id: Date.now(),
      text,
      sender,
      time: new Date().toLocaleTimeString('ug', { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newMessage]);
  }, []);

  // API ئاچقۇچىنى ساقلاش
  const saveApiKey = useCallback(() => {
    const keyInput = document.getElementById('apiKeyInput')?.value.trim();
    if (!keyInput) {
      alert('GROQ API ئاچقۇچىنى يېزىڭ!');
      return;
    }
    
    if (!keyInput.startsWith('gsk_')) {
      alert('GROQ API ئاچقۇچى "gsk_" بىلەن باشلىنىشى كېرەك!');
      return;
    }
    
    agentRef.current.setApiKey(keyInput);
    setApiKey(keyInput);
    setIsModalOpen(false);
    
    addMessage('KeLBiL گە خۇش كەلدىڭىز! 👋\n\nمەن GROQ Llama 3.3 70B مودېلى بىلەن ئىشلەيدىغان ئۇيغۇرچە AI Agent. 800+ توكېن/سېكۇنت تېزلىكتە جاۋاب بېرەلەيمەن.\n\nسوئال سوراڭ:', 'agent');
    
    updateTokenDisplay();
  }, [addMessage, updateTokenDisplay]);

  // API ئاچقۇچىنى ئالماشتۇرۇش
  const resetApiKey = useCallback(() => {
    localStorage.removeItem('GROQ_API_KEY');
    setApiKey('');
    setIsModalOpen(true);
  }, []);

  // ئۇچۇر يوللاش
  const sendMessage = useCallback(async () => {
    if (isProcessing) return;
    
    const message = inputValue.trim();
    if (!message) return;
    
    addMessage(message, 'user');
    setInputValue('');
    setIsProcessing(true);
    setStatusText('ئىشلەۋاتىدۇ...');
    setIsTyping(true);
    setTypingResponse('');
    
    try {
      let currentResponse = '';
      
      await agentRef.current.streamChat(
        message,
        (token, fullText) => {
          currentResponse = fullText;
          setTypingResponse(fullText);
        },
        (finalResponse) => {
          setIsTyping(false);
          addMessage(finalResponse, 'agent');
          setIsProcessing(false);
          setStatusText('تەييار');
          updateTokenDisplay();
        },
        (currentSpeed) => {
          setSpeed(currentSpeed);
        }
      );
    } catch (error) {
      setIsTyping(false);
      addMessage(`كەچۈرۈڭ، خاتالىق يۈز بەردى: ${error.message}`, 'agent');
      setIsProcessing(false);
      setStatusText('خاتالىق');
    }
  }, [isProcessing, inputValue, addMessage, updateTokenDisplay]);

  // ئاۋازلىق كىرگۈزۈش
  const startVoiceInput = useCallback(async () => {
    if (!navigator.mediaDevices || !window.MediaRecorder) {
      alert('ئاۋازلىق كىرگۈزۈش قوللانمايدۇ');
      return;
    }
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];
      
      mediaRecorderRef.current.ondataavailable = e => audioChunksRef.current.push(e.data);
      
      mediaRecorderRef.current.onstop = async () => {
        try {
          const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
          recognition.lang = 'ug-CN';
          recognition.continuous = false;
          recognition.interimResults = false;
          
          recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            setInputValue(text);
            setTimeout(() => sendMessage(), 100);
          };
          
          recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            alert(`ئاۋازلىق كىرگۈزۈش خاتالىق: ${event.error}`);
          };
          
          recognition.start();
        } catch (e) {
          console.error('Speech recognition not supported:', e);
          alert('ئاۋازلىق كىرگۈزۈش تور كۆرگۈچىڭىزدا قوللانمايدۇ');
        }
      };
      
      mediaRecorderRef.current.start();
      setTimeout(() => {
        if (mediaRecorderRef.current?.state === 'recording') {
          mediaRecorderRef.current.stop();
        }
      }, 5000);
    } catch (e) {
      alert('مىكروفون رۇخسىتى تەلەپ قىلىنىدۇ');
    }
  }, [sendMessage]);

  // Enter كۇنۇپكىسى
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey && !isProcessing) {
      e.preventDefault();
      sendMessage();
    }
  }, [sendMessage, isProcessing]);

  // توكېن پىرسەنتى
  const tokenPercent = Math.min(100, (tokenUsed / tokenLimit) * 100);

  return (
    <div className="kelbil-container">
      {/* API Key Modal */}
      {isModalOpen && (
        <div className="kelbil-modal">
          <div className="kelbil-modal-content">
            <div className="kelbil-modal-icon">⚡</div>
            <h2 className="kelbil-modal-title">KeLBiL Agent</h2>
            <p className="kelbil-modal-desc">
              GROQ API + Llama 3.3 70B<br />
              رېئال ۋاقىت • ھەقسىز • ئەڭ تېز
            </p>
            
            <a 
              href="https://console.groq.com/keys" 
              target="_blank" 
              rel="noopener noreferrer"
              className="kelbil-get-key-btn"
            >
              <i className="fas fa-key"></i> GROQ API ئاچقۇچى ئېلىش
            </a>
            
            <input 
              id="apiKeyInput"
              type="text" 
              className="kelbil-api-input" 
              placeholder="GROQ API ئاچقۇچىنى يېزىڭ: gsk_..."
              dir="ltr"
            />
            
            <button onClick={saveApiKey} className="kelbil-save-btn">
              <i className="fas fa-check-circle"></i> قوزغىتىش
            </button>
            
            <p className="kelbil-modal-note">
              <i className="fas fa-info-circle"></i> ھەقسىز 6000 توكېن/24h • Llama 3.3 70B
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="kelbil-header">
        <div className="kelbil-logo">
          <div className="kelbil-quantum-logo">
            <span>K</span>
          </div>
          <div>
            <span className="kelbil-logo-text">KeLBiL Agent</span>
            <div className="kelbil-logo-subtitle">
              <span className="kelbil-badge-green">⚡ GROQ + Llama 3.3 70B</span>
              <span className="kelbil-badge-yellow">رېئال ۋاقىت</span>
            </div>
          </div>
        </div>
        
        <div className="kelbil-status-badge">
          <span className="kelbil-status-dot"></span>
          <span>{statusText}</span>
        </div>
      </header>

      {/* Main Container */}
      <div className="kelbil-main">
        {/* Left Panel - Agent Info */}
        <div className="kelbil-agent-panel">
          <div className="kelbil-agent-icon">
            <div className="kelbil-agent-3d">
              <span>K</span>
            </div>
            <h2 className="kelbil-agent-name">KeLBiL</h2>
            <p className="kelbil-agent-model">GROQ Llama 3.3 70B</p>
          </div>
          
          <div className="kelbil-stats">
            <div className="kelbil-stat-item">
              <span className="kelbil-stat-label">مودېل</span>
              <span className="kelbil-stat-value">Llama 3.3 70B</span>
            </div>
            <div className="kelbil-stat-item">
              <span className="kelbil-stat-label">تېزلىك</span>
              <span className="kelbil-stat-value">{speed}+ توكېن/سېكۇنت</span>
            </div>
            <div className="kelbil-stat-item">
              <span className="kelbil-stat-label">بۈگۈن ئىشلىتىلگەن</span>
              <span className="kelbil-stat-value">{tokenUsed} / {tokenLimit}</span>
            </div>
            <div className="kelbil-stat-item">
              <span className="kelbil-stat-label">تىل</span>
              <span className="kelbil-stat-value">ئۇيغۇرچە</span>
            </div>
          </div>
          
          <button onClick={resetApiKey} className="kelbil-reset-key-btn">
            <i className="fas fa-key"></i> API ئاچقۇچىنى ئالماشتۇرۇش
          </button>
        </div>

        {/* Chat Panel */}
        <div className="kelbil-chat-panel">
          <div className="kelbil-chat-header">
            <div className="kelbil-chat-title">
              <i className="fas fa-comments"></i>
              <h2>KeLBiL بىلەن سۆزلىشىش</h2>
            </div>
            <div className="kelbil-model-badge">
              <i className="fas fa-bolt"></i> Llama 3.3 70B • {speed}+ tok/s
            </div>
          </div>
          
          <div className="kelbil-chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`kelbil-message ${msg.sender}`}>
                <div className="kelbil-message-avatar">
                  {msg.sender === 'user' ? '👤' : '🤖'}
                </div>
                <div className="kelbil-message-content">
                  <div className="kelbil-message-text">
                    {msg.text.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < msg.text.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                  <span className="kelbil-message-time">{msg.time}</span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="kelbil-message agent">
                <div className="kelbil-message-avatar">🤖</div>
                <div className="kelbil-message-content">
                  {typingResponse ? (
                    <>
                      <div className="kelbil-message-text">
                        {typingResponse.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < typingResponse.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                        <span className="kelbil-cursor">▌</span>
                      </div>
                      <span className="kelbil-message-time">
                        {new Date().toLocaleTimeString('ug', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </>
                  ) : (
                    <div className="kelbil-typing-indicator">
                      <span className="kelbil-typing-dot"></span>
                      <span className="kelbil-typing-dot"></span>
                      <span className="kelbil-typing-dot"></span>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          
          <div className="kelbil-chat-input-area">
            <div className="kelbil-input-wrapper">
              <input 
                type="text" 
                className="kelbil-user-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="KeLBiL گە سوئال يېزىڭ... (ئۇيغۇرچە)" 
                autoComplete="off"
                disabled={isProcessing}
              />
              <button 
                className="kelbil-send-btn"
                onClick={sendMessage}
                disabled={isProcessing}
              >
                <i className="fas fa-paper-plane"></i>
              </button>
              <button 
                className="kelbil-voice-btn"
                onClick={startVoiceInput}
                disabled={isProcessing}
              >
                <i className="fas fa-microphone"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel - Tools */}
        <div className="kelbil-tools-panel">
          <div className="kelbil-tools-header">
            <i className="fas fa-bolt"></i>
            <h3>GROQ Llama 3.3 70B</h3>
          </div>
          
          <div className="kelbil-tool-item">
            <div className="kelbil-tool-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            <div>
              <h4 className="kelbil-tool-title">{speed}+ توكېن/سېكۇنت</h4>
              <p className="kelbil-tool-desc">دۇنيادىكى ئەڭ تېز AI</p>
            </div>
          </div>
          
          <div className="kelbil-tool-item">
            <div className="kelbil-tool-icon yellow">
              <i className="fas fa-language"></i>
            </div>
            <div>
              <h4 className="kelbil-tool-title yellow">ئۇيغۇرچە</h4>
              <p className="kelbil-tool-desc">Llama 3.3 ئۇيغۇرچە قوللايدۇ</p>
            </div>
          </div>
          
          <div className="kelbil-token-count">
            <div className="kelbil-token-header">
              <span>بۈگۈن ئىشلىتىلگەن توكېن</span>
              <span className="kelbil-token-value">{tokenUsed} / {tokenLimit}</span>
            </div>
            <div className="kelbil-progress-bar">
              <div 
                className="kelbil-progress-fill" 
                style={{ width: `${tokenPercent}%` }}
              />
            </div>
            <p className="kelbil-token-note">
              <i className="fas fa-info-circle"></i> ھەقسىز 6000 توكېن/24h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeLBiLAgent;