// KeLBiLAgent.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';

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
    if (!this.apiKey) throw new Error('API ئاچقۇچى تەلەپ قىلىنىدۇ');

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
}

const KeLBiLAgent = () => {
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
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);
  
  const chatEndRef = useRef(null);
  const agentRef = useRef(null);
  const leftPanelTimeout = useRef(null);
  const rightPanelTimeout = useRef(null);

  useEffect(() => {
    agentRef.current = new KeLBiLGroq();
    agentRef.current.loadFromStorage();
    
    const savedKey = localStorage.getItem('GROQ_API_KEY');
    if (savedKey) {
      agentRef.current.setApiKey(savedKey);
      setIsModalOpen(false);
      setMessages([{
        id: Date.now(),
        text: 'KeLBiL گە خۇش كەلدىڭىز! 👋\n\nمەن GROQ Llama 3.3 70B مودېلى بىلەن ئىشلەيدىغان ئۇيغۇرچە AI Agent. 800+ توكېن/سېكۇنت تېزلىكتە جاۋاب بېرەلەيمەن.\n\nسوئال سوراڭ:',
        sender: 'agent',
        time: new Date().toLocaleTimeString('ug', { hour: '2-digit', minute: '2-digit' })
      }]);
      const tokenData = agentRef.current.getTokenUsage();
      setTokenUsed(tokenData.used);
      setTokenLimit(tokenData.limit);
    } else {
      setIsModalOpen(true);
    }
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const updateTokenDisplay = useCallback(() => {
    if (agentRef.current) {
      const tokenData = agentRef.current.getTokenUsage();
      setTokenUsed(tokenData.used);
      setTokenLimit(tokenData.limit);
    }
  }, []);

  const addMessage = useCallback((text, sender) => {
    const newMessage = {
      id: Date.now(),
      text,
      sender,
      time: new Date().toLocaleTimeString('ug', { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newMessage]);
  }, []);

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
    setIsModalOpen(false);
    addMessage('KeLBiL گە خۇش كەلدىڭىز! 👋\n\nمەن GROQ Llama 3.3 70B مودېلى بىلەن ئىشلەيدىغان ئۇيغۇرچە AI Agent. 800+ توكېن/سېكۇنت تېزلىكتە جاۋاب بېرەلەيمەن.\n\nسوئال سوراڭ:', 'agent');
    updateTokenDisplay();
  }, [addMessage, updateTokenDisplay]);

  const resetApiKey = useCallback(() => {
    localStorage.removeItem('GROQ_API_KEY');
    setIsModalOpen(true);
  }, []);

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
        (currentSpeed) => setSpeed(currentSpeed)
      );
    } catch (error) {
      setIsTyping(false);
      addMessage(`كەچۈرۈڭ، خاتالىق يۈز بەردى: ${error.message}`, 'agent');
      setIsProcessing(false);
      setStatusText('خاتالىق');
    }
  }, [isProcessing, inputValue, addMessage, updateTokenDisplay]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey && !isProcessing) {
      e.preventDefault();
      sendMessage();
    }
  }, [sendMessage, isProcessing]);

  const handleMouseEnterLeft = () => {
    if (leftPanelTimeout.current) clearTimeout(leftPanelTimeout.current);
    setIsLeftPanelOpen(true);
  };

  const handleMouseLeaveLeft = () => {
    leftPanelTimeout.current = setTimeout(() => setIsLeftPanelOpen(false), 300);
  };

  const handleMouseEnterRight = () => {
    if (rightPanelTimeout.current) clearTimeout(rightPanelTimeout.current);
    setIsRightPanelOpen(true);
  };

  const handleMouseLeaveRight = () => {
    rightPanelTimeout.current = setTimeout(() => setIsRightPanelOpen(false), 300);
  };

  const tokenPercent = Math.min(100, (tokenUsed / tokenLimit) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0c14] via-[#030712] to-[#020617] text-gray-100 font-sans" dir="rtl">
      {/* API Key Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-2xl flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-indigo-950 to-slate-950 p-12 rounded-3xl border-2 border-yellow-400 shadow-2xl shadow-yellow-400/30 max-w-lg w-full mx-4 text-center">
            <div className="text-7xl mb-5">⚡</div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">KeLBiL Agent</h2>
            <p className="text-indigo-200 text-xl mb-8 leading-relaxed">
              GROQ API + Llama 3.3 70B<br />رېئال ۋاقىت • ھەقسىز • ئەڭ تېز
            </p>
            <a href="https://console.groq.com/keys" target="_blank" rel="noopener noreferrer" className="inline-block bg-lime-400 text-slate-900 px-6 py-3 rounded-full text-lg font-bold mb-6 hover:scale-105 transition-transform">
              <i className="fas fa-key ml-2"></i> GROQ API ئاچقۇچى ئېلىش
            </a>
            <input id="apiKeyInput" type="text" className="w-full px-6 py-4 bg-slate-900/80 border-2 border-purple-600 rounded-full text-white text-lg mb-5 focus:border-yellow-400 focus:outline-none transition-all" placeholder="GROQ API ئاچقۇچىنى يېزىڭ: gsk_..." dir="ltr" />
            <button onClick={saveApiKey} className="bg-yellow-400 text-slate-900 px-10 py-4 rounded-full text-xl font-bold hover:scale-105 transition-transform">
              <i className="fas fa-check-circle ml-2"></i> قوزغىتىش
            </button>
            <p className="text-slate-400 mt-6 text-sm"><i className="fas fa-info-circle ml-1"></i> ھەقسىز 6000 توكېن/24h • Llama 3.3 70B</p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b-2 border-yellow-400 px-4 md:px-10 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-purple-600 rounded-2xl rotate-45 flex items-center justify-center animate-spin-slow">
            <span className="-rotate-45 text-2xl font-black text-slate-900">K</span>
          </div>
          <div>
            <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-yellow-400 to-lime-400 bg-clip-text text-transparent">KeLBiL Agent</span>
            <div className="flex gap-3 text-sm">
              <span className="text-lime-400">⚡ GROQ + Llama 3.3 70B</span>
              <span className="text-yellow-400">رېئال ۋاقىت</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-lime-400/10 px-5 py-2 rounded-full border border-lime-400">
          <span className="w-3 h-3 bg-lime-400 rounded-full animate-pulse"></span>
          <span className="text-sm md:text-base">{statusText}</span>
        </div>
      </header>

      {/* Main Container */}
      <div className="relative h-[calc(100vh-100px)] overflow-hidden">
        
        {/* Left Panel - Hover from right side (RTL) */}
        <div 
          className={`fixed right-0 top-[100px] bottom-0 z-30 transition-all duration-300 ease-in-out ${isLeftPanelOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onMouseEnter={handleMouseEnterLeft}
          onMouseLeave={handleMouseLeaveLeft}
        >
          <div className="h-full w-80 bg-slate-900/90 backdrop-blur-xl border-r border-yellow-400/30 shadow-2xl p-6 overflow-y-auto">
            {/* Left Panel Content */}
            <div className="text-center mb-6">
              <div className="w-28 h-28 bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl rotate-12 flex items-center justify-center border-2 border-yellow-400 mx-auto mb-4 animate-float">
                <span className="-rotate-12 text-6xl font-black text-yellow-400">K</span>
              </div>
              <h2 className="text-3xl font-bold text-yellow-400">KeLBiL</h2>
              <p className="text-slate-400">GROQ Llama 3.3 70B</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-5 space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-400">مودېل</span>
                <span className="text-yellow-400 font-bold">Llama 3.3 70B</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">تېزلىك</span>
                <span className="text-yellow-400 font-bold">{speed}+ توكېن/سېكۇنت</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">بۈگۈن ئىشلىتىلگەن</span>
                <span className="text-yellow-400 font-bold">{tokenUsed} / {tokenLimit}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">تىل</span>
                <span className="text-yellow-400 font-bold">ئۇيغۇرچە</span>
              </div>
            </div>

            <button onClick={resetApiKey} className="w-full mt-6 bg-transparent border border-purple-600 text-white py-3 rounded-full hover:bg-purple-600/20 transition-colors">
              <i className="fas fa-key ml-2"></i> API ئاچقۇچىنى ئالماشتۇرۇش
            </button>
          </div>
        </div>

        {/* Left Trigger Handle */}
        <div 
          className="fixed right-0 top-1/2 -translate-y-1/2 z-20 bg-yellow-400/20 hover:bg-yellow-400/40 backdrop-blur rounded-l-xl py-8 px-1 cursor-pointer transition-all"
          onMouseEnter={handleMouseEnterLeft}
        >
          <div className="w-1 h-16 bg-yellow-400 rounded-full"></div>
        </div>

        {/* Right Panel - Hover from left side (RTL) */}
        <div 
          className={`fixed left-0 top-[100px] bottom-0 z-30 transition-all duration-300 ease-in-out ${isRightPanelOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onMouseEnter={handleMouseEnterRight}
          onMouseLeave={handleMouseLeaveRight}
        >
          <div className="h-full w-80 bg-slate-900/90 backdrop-blur-xl border-l border-lime-400/30 shadow-2xl p-6 overflow-y-auto">
            {/* Right Panel Content */}
            <div className="flex items-center gap-3 pb-4 border-b-2 border-lime-400 mb-5">
              <i className="fas fa-bolt text-lime-400 text-2xl"></i>
              <h3 className="text-xl font-bold">GROQ Llama 3.3 70B</h3>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-4 flex items-center gap-4 mb-3 hover:bg-lime-400/10 transition-all">
              <div className="bg-lime-400/10 p-3 rounded-xl">
                <i className="fas fa-tachometer-alt text-lime-400 text-2xl"></i>
              </div>
              <div>
                <h4 className="text-lime-400 font-bold">{speed}+ توكېن/سېكۇنت</h4>
                <p className="text-slate-400 text-sm">دۇنيادىكى ئەڭ تېز AI</p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-4 flex items-center gap-4 mb-3 hover:bg-yellow-400/10 transition-all">
              <div className="bg-yellow-400/10 p-3 rounded-xl">
                <i className="fas fa-language text-yellow-400 text-2xl"></i>
              </div>
              <div>
                <h4 className="text-yellow-400 font-bold">ئۇيغۇرچە</h4>
                <p className="text-slate-400 text-sm">Llama 3.3 ئۇيغۇرچە قوللايدۇ</p>
              </div>
            </div>

            <div className="mt-6 bg-yellow-400/5 rounded-xl p-5">
              <div className="flex justify-between mb-2">
                <span className="text-yellow-400">بۈگۈن ئىشلىتىلگەن توكېن</span>
                <span className="text-lime-400 font-bold">{tokenUsed} / {tokenLimit}</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-400 to-lime-400 transition-all duration-300" style={{ width: `${tokenPercent}%` }}></div>
              </div>
              <p className="text-slate-400 mt-3 text-sm"><i className="fas fa-info-circle ml-1"></i> ھەقسىز 6000 توكېن/24h</p>
            </div>
          </div>
        </div>

        {/* Right Trigger Handle */}
        <div 
          className="fixed left-0 top-1/2 -translate-y-1/2 z-20 bg-lime-400/20 hover:bg-lime-400/40 backdrop-blur rounded-r-xl py-8 px-1 cursor-pointer transition-all"
          onMouseEnter={handleMouseEnterRight}
        >
          <div className="w-1 h-16 bg-lime-400 rounded-full"></div>
        </div>

        {/* Main Chat Panel - Full width */}
        <div className="h-full max-w-4xl mx-auto px-4 md:px-6 py-4 flex flex-col">
          {/* Chat Header */}
          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-4 mb-4 flex flex-wrap justify-between items-center border border-purple-600">
            <div className="flex items-center gap-3">
              <i className="fas fa-comments text-yellow-400 text-xl"></i>
              <h2 className="text-xl md:text-2xl font-bold text-yellow-400">KeLBiL بىلەن سۆزلىشىش</h2>
            </div>
            <div className="bg-gradient-to-r from-purple-700 to-indigo-800 px-4 py-2 rounded-full text-sm">
              <i className="fas fa-bolt ml-1"></i> Llama 3.3 70B • {speed}+ tok/s
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto bg-slate-900/40 backdrop-blur rounded-2xl p-4 space-y-4 border border-purple-600/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''} max-w-[85%] ${msg.sender === 'user' ? 'mr-auto' : 'ml-auto'}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${msg.sender === 'user' ? 'bg-purple-600' : 'bg-gradient-to-br from-yellow-400 to-purple-600'}`}>
                  {msg.sender === 'user' ? '👤' : '🤖'}
                </div>
                <div className={`p-4 rounded-xl ${msg.sender === 'user' ? 'bg-purple-600/20 border border-purple-600' : 'bg-slate-800/80 border border-yellow-400'}`}>
                  <div className="text-gray-200 text-base md:text-lg leading-relaxed whitespace-pre-wrap">
                    {msg.text}
                  </div>
                  <span className="text-xs text-slate-400 mt-2 block">{msg.time}</span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-yellow-400 to-purple-600">🤖</div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-yellow-400">
                  {typingResponse ? (
                    <>
                      <div className="text-gray-200 text-base md:text-lg leading-relaxed whitespace-pre-wrap">
                        {typingResponse}<span className="animate-pulse">▌</span>
                      </div>
                      <span className="text-xs text-slate-400 mt-2 block">{new Date().toLocaleTimeString('ug', { hour: '2-digit', minute: '2-digit' })}</span>
                    </>
                  ) : (
                    <div className="flex gap-1 py-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="mt-4 bg-slate-800/50 backdrop-blur rounded-2xl p-3 border border-purple-600">
            <div className="flex gap-3">
              <input 
                type="text" 
                className="flex-1 bg-slate-900/80 rounded-full px-6 py-4 text-gray-200 text-base md:text-lg outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="KeLBiL گە سوئال يېزىڭ... (ئۇيغۇرچە)"
                disabled={isProcessing}
              />
              <button 
                onClick={sendMessage}
                disabled={isProcessing}
                className="w-14 h-14 rounded-full bg-purple-600 text-white hover:bg-yellow-400 hover:text-slate-900 transition-all disabled:opacity-50"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
              <button 
                onClick={() => {
                  if (!isProcessing && navigator.mediaDevices) {
                    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
                    recognition.lang = 'ug-CN';
                    recognition.onresult = (e) => setInputValue(e.results[0][0].transcript);
                    recognition.start();
                  }
                }}
                disabled={isProcessing}
                className="w-14 h-14 rounded-full bg-yellow-400 text-slate-900 hover:bg-lime-400 transition-all disabled:opacity-50"
              >
                <i className="fas fa-microphone"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s infinite linear;
        }
        @keyframes float {
          0%, 100% { transform: rotate(12deg) translateY(0px); }
          50% { transform: rotate(12deg) translateY(-10px); }
        }
        .animate-float {
          animation: float 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default KeLBiLAgent;