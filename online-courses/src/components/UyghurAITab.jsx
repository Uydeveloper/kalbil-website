// src/components/UyghurAITab.jsx
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const UyghurAITab = ({
  messages: propMessages = [],
  currentMessage: propCurrentMessage = '',
  isTyping: propIsTyping = false,
  connectionStatus: propConnectionStatus = 'connected',
  setCurrentMessage: propSetCurrentMessage,
  handleSendMessage: propHandleSendMessage,
  handleKeyPress: propHandleKeyPress,
  messagesEndRef: propMessagesEndRef,
  progress = { lessonsCompleted: 0, totalScore: 0, phrasesLearned: 0, quizzesTaken: 0 }
}) => {
  // ============ AI مودېل سەپلىمىلىرى ============
  const API_CONFIG = {
    // 1-ئۇسۇل: Hugging Face Inference API (تەۋسىيە)
    HUGGINGFACE: {
      URL: 'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-3B-Instruct',
      // TOKEN: 'hf_YOUR_HUGGINGFACE_TOKEN', // بۇ يەرگە ئۆزىڭىزنىڭ توكنىنى قويۇڭ
    },
    
    // 2-ئۇسۇل: Qwen مودېلى
    QWEN: {
      URL: 'https://api-inference.huggingface.co/models/Qwen/Qwen2.5-7B-Instruct',
    },
    
    // 3-ئۇسۇل: ئەسكەرتىش ئۈچۈن
    REMINDER: "ھەقىقىي API ئۇلاش ئۈچۈن .env فايىلىغا HUGGINGFACE_TOKEN قوشۇڭ"
  };

  // API توكنى (بۇنى .env فايىلىدىن ئوقۇڭ)
  const HF_TOKEN = process.env.REACT_APP_HF_TOKEN || 'hf_YOUR_TOKEN_HERE';
  
  // ============ ئاساسىي ئەھۋاللار ============
  const [internalMessages, setInternalMessages] = useState(propMessages.length > 0 ? propMessages : [
    {
      id: 1,
      sender: 'ai',
      text: 'ياخشىمۇسىز! مەن قۇتادغۇ AI ياردەمچىسى. مەن Meta Llama 3.2 مودېلى ئاساسىدا ئىشلەيدۇ. سىزگە قانداق ياردەم قىلالايمەن؟',
      timestamp: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
      type: 'text',
      emotion: 'happy'
    }
  ]);
  
  const [internalCurrentMessage, setInternalCurrentMessage] = useState(propCurrentMessage);
  const [internalIsTyping, setInternalIsTyping] = useState(propIsTyping);
  const [internalConnectionStatus, setInternalConnectionStatus] = useState(propConnectionStatus);
  const [isListening, setIsListening] = useState(false);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [activeFeature, setActiveFeature] = useState('chat');
  const [aiVoice, setAiVoice] = useState(true);
  const [theme, setTheme] = useState('light');
  const [backgroundMusic, setBackgroundMusic] = useState(false);
  const [aiPersonality, setAiPersonality] = useState('friendly');
  const [voiceInput, setVoiceInput] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [apiError, setApiError] = useState('');
  const [currentModel, setCurrentModel] = useState('llama'); // llama, qwen

  const internalMessagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const recognitionRef = useRef(null);
  const abortControllerRef = useRef(null);

  // ئىختىيارىي فونكتسىيەلەر
  const messages = propMessages.length > 0 ? propMessages : internalMessages;
  const currentMessage = propCurrentMessage || internalCurrentMessage;
  const isTyping = propIsTyping || internalIsTyping;
  const connectionStatus = propConnectionStatus || internalConnectionStatus;
  const messagesEndRef = propMessagesEndRef || internalMessagesEndRef;
  const setCurrentMessage = propSetCurrentMessage || setInternalCurrentMessage;

  // ============ ھەقىقىي AI API چاقىرىش ============
  const callAIModel = async (userMessage) => {
    // ئالدىنقى چاقىرىشنى توختات
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    try {
      setApiError('');
      setInternalIsTyping(true);
      setInternalConnectionStatus('connecting');

      // سۆھبەت تارىخىنى تەييارلاش
      const conversationHistory = messages.slice(-6).map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));

      // يېڭى ئۇچۇرنى قوشۇش
      conversationHistory.push({
        role: 'user',
        content: userMessage
      });

      // AI شەخسىيىتىگە قاراپ سىستېما ئۇچۇرى
      const systemPrompts = {
        friendly: "سىز قۇتادغۇ AI - دوستانە، ياردەمچى، ئۇيغۇر تىلىدا سۆزلىشىدىغان ئەقىللىق ياردەمچى. قىسقا، ئېنىق، دوستانە جاۋاب بېرىڭ.",
        professional: "سىز قۇتادغۇ AI - كەسپىي، ئىلمىي، ئۇيغۇر تىلىدا چۈشەندۈرۈش بېرىدىغان ياردەمچى. دەلىللەنگەن ئۇچۇرلارنى تەمىنلەڭ.",
        humorous: "سىز قۇتادغۇ AI - كۈلكىلىك، ھەزىلچان، ئۇيغۇر تىلىدا قىزىقارلىق جاۋاب بېرىدىغان ياردەمچى.",
        wise: "سىز قۇتادغۇ AI - ھېكمەتلىك، چوڭقۇر پىكىرلىك، ئۇيغۇر مەدەنىيىتى ۋە تارىخى توغرىسىدا جاۋاب بېرىدىغان ياردەمچى."
      };

      // API غا تەييارلىق
      let apiUrl, payload;
      
      if (currentModel === 'llama') {
        apiUrl = API_CONFIG.HUGGINGFACE.URL;
        payload = {
          inputs: `<|begin_of_text|><|start_header_id|>system<|end_header_id|>\n\n${systemPrompts[aiPersonality]}<|eot_id|><|start_header_id|>user<|end_header_id|>\n\n${userMessage}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n`,
          parameters: {
            max_new_tokens: 500,
            temperature: 0.7,
            top_p: 0.95,
            do_sample: true,
            return_full_text: false
          }
        };
      } else {
        apiUrl = API_CONFIG.QWEN.URL;
        payload = {
          inputs: `<|im_start|>system\n${systemPrompts[aiPersonality]}<|im_end|>\n<|im_start|>user\n${userMessage}<|im_end|>\n<|im_start|>assistant\n`,
          parameters: {
            max_new_tokens: 500,
            temperature: 0.7,
            top_p: 0.95,
            do_sample: true
          }
        };
      }

      // API چاقىرىش
      const response = await axios.post(
        apiUrl,
        payload,
        {
          headers: {
            'Authorization': `Bearer ${HF_TOKEN}`,
            'Content-Type': 'application/json'
          },
          signal: abortControllerRef.current.signal,
          timeout: 30000 // 30 سېكۇنت
        }
      );

      setInternalConnectionStatus('connected');

      // جاۋابنى پىششىقلاپ ئېلىش
      let aiResponse = '';
      if (response.data && response.data[0] && response.data[0].generated_text) {
        aiResponse = response.data[0].generated_text.trim();
        
        // Llama مودېلىنىڭ جاۋابىنى تازىلاش
        if (currentModel === 'llama') {
          aiResponse = aiResponse
            .replace(/<\|eot_id\|>.*$/, '')
            .replace(/<\|start_header_id\|>.*?<\|end_header_id\|>/g, '')
            .trim();
        }
        
        // Qwen مودېلىنىڭ جاۋابىنى تازىلاش
        if (currentModel === 'qwen') {
          aiResponse = aiResponse
            .replace(/<\|im_end\|>.*$/, '')
            .replace(/<\|im_start\|>.*?<\|im_end\|>/g, '')
            .trim();
        }
      }

      // ئەگەر جاۋاب قانائەتلىك بولمىسا، ئەسكەرتىش بېرىش
      if (!aiResponse || aiResponse.length < 2) {
        aiResponse = "كەچۈرۈڭ، ھازىر جاۋاب بېرەلمەيمەن. قايتا سوراپ بېقىڭ.";
      }

      return aiResponse;

    } catch (error) {
      console.error('AI مودېل خاتالىقى:', error);
      setInternalConnectionStatus('disconnected');
      
      // خاتالىق تۈرىگە قاراپ جاۋاب بېرىش
      if (error.code === 'ECONNABORTED') {
        return "جاۋاب بېرىش ۋاقتى ئېشىپ كەتتى. تور ئۇلىنىشىڭىزنى تەكشۈرۈپ قايتا سوراڭ.";
      } else if (error.response && error.response.status === 503) {
        return "مودېل ھازىر يۈكلەنمەكتە. بىر ئاز ساقلاپ قايتا سوراڭ.";
      } else if (error.response && error.response.status === 401) {
        setApiError('API توكنى خاتا ياكى ئىناۋىتى ئۆتكەن. .env فايىلىنى تەكشۈرۈڭ.');
        return "API ئۇلىنىشىدا خاتالىق بار. تەڭشەكلەرنى تەكشۈرۈڭ.";
      } else {
        return "تېخنىكىلىق خاتالىق يۈز بەردى. بىر ئاز ساقلاپ قايتا سوراڭ.";
      }
    } finally {
      setInternalIsTyping(false);
    }
  };

  // ============ رەسىم ھاسىل قىلىش (Stable Diffusion) ============
  const generateImage = async (prompt) => {
    if (!prompt.trim()) return;
    
    setIsGeneratingImage(true);
    setApiError('');
    
    try {
      // ئۇيغۇرچە تەسۋىرنى ئىنگلىزچىغا تەرجىمە قىلىش (Hugging Face Translation)
      // ياكى ئۇيغۇرچە تەسۋىر بىلەن ئىشلىتىش
      
      // مىسال: Stable Diffusion API
      const imageApiUrl = 'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0';
      
      const response = await axios.post(
        imageApiUrl,
        { inputs: prompt + ", Uyghur culture, Central Asian style" },
        {
          headers: {
            'Authorization': `Bearer ${HF_TOKEN}`,
            'Content-Type': 'application/json'
          },
          responseType: 'blob',
          timeout: 45000
        }
      );

      // بىنانى URL غا ئايلاندۇرۇش
      const imageUrl = URL.createObjectURL(response.data);
      
      const newMessage = {
        id: Date.now(),
        sender: 'ai',
        text: `سىز تەلەپ قىلغان رەسىم: "${prompt}"`,
        imageUrl: imageUrl,
        type: 'image',
        timestamp: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
      };

      if (propMessages.length === 0) {
        setInternalMessages(prev => [...prev, newMessage]);
      }
      
      if (aiVoice) {
        speakText(`رەسىم ھاسىل قىلىندى`);
      }
    } catch (error) {
      console.error('رەسىم ھاسىل قىلىشتا خاتالىق:', error);
      setApiError('رەسىم ھاسىل قىلىش مودېلىغا ئۇلىنىش مەسىلىسى');
      
      // مىقى رەسىم (API ئىشلىمىسە)
      const fallbackImageUrl = `https://picsum.photos/400/300?random=${Date.now()}`;
      
      const newMessage = {
        id: Date.now(),
        sender: 'ai',
        text: `تەلەپ: "${prompt}" (ئەسلى رەسىم ھاسىل قىلىنمىدى)`,
        imageUrl: fallbackImageUrl,
        type: 'image',
        timestamp: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
      };
      
      if (propMessages.length === 0) {
        setInternalMessages(prev => [...prev, newMessage]);
      }
    } finally {
      setIsGeneratingImage(false);
    }
  };

  // ============ چوڭقۇر ئىزدەش (يېڭى) ============
  const performDeepSearch = async (query) => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    setApiError('');
    
    try {
      // Wikipedia API ئارقىلىق ئىزدەش
      const searchUrl = `https://ug.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*`;
      
      const response = await axios.get(searchUrl, { timeout: 10000 });
      
      const searchResults = response.data.query.search.slice(0, 3).map(item => ({
        title: item.title,
        summary: item.snippet.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
        source: 'Wikipedia'
      }));
      
      // ئەگەر ھېچقانداق نەتىجە چىقمىسا
      if (searchResults.length === 0) {
        searchResults.push({
          title: 'ئۇچۇر تېپىلمىدى',
          summary: 'سىز ئىزدىگەن مەزمۇن بويىچە ھازىرچە ئۇچۇر يوق',
          source: 'قۇتادغۇ AI'
        });
      }
      
      const resultMessage = {
        id: Date.now(),
        sender: 'ai',
        text: `«${query}» توغرىسىدىكى ئىزدەش نەتىجىلىرى:`,
        type: 'search',
        results: searchResults,
        timestamp: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
      };

      if (propMessages.length === 0) {
        setInternalMessages(prev => [...prev, resultMessage]);
      }
      
      if (aiVoice) {
        speakText(`${searchResults.length} خىل ئۇچۇر تېپىلدى`);
      }
    } catch (error) {
      console.error('ئىزدەشتە خاتالىق:', error);
      setApiError('ئىزدەش مۇلازىمېتىرىغا ئۇلىنىش مەسىلىسى');
      
      // مىقى ئىزدەش نەتىجىسى
      const mockResults = [
        {
          title: 'ئۇيغۇر مەدەنىيىتى',
          summary: 'ئۇيغۇر مەدەنىيىتى ئۇزۇن تارىخقا ئىگە...',
          source: 'قۇتادغۇ AI (ئەسلىھە)'
        }
      ];
      
      const resultMessage = {
        id: Date.now(),
        sender: 'ai',
        text: `«${query}» توغرىسىدىكى ئۇچۇرلار:`,
        type: 'search',
        results: mockResults,
        timestamp: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
      };
      
      if (propMessages.length === 0) {
        setInternalMessages(prev => [...prev, resultMessage]);
      }
    } finally {
      setIsSearching(false);
    }
  };

  // ============ ئاۋاز تونى ============
  const speakText = (text) => {
    if (!aiVoice || isMuted || !('speechSynthesis' in window)) return;
    
    speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ug-CN';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = volume / 100;
    
    // ئۇيغۇرچە ئاۋازنى تاللاش
    const voices = speechSynthesis.getVoices();
    const uyghurVoice = voices.find(v => v.lang.includes('ug') || v.lang.includes('zh'));
    if (uyghurVoice) {
      utterance.voice = uyghurVoice;
    }
    
    speechSynthesis.speak(utterance);
  };

  // ============ ئاۋاز كىرگۈزۈش ============
  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'ug-CN';

      recognitionRef.current.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join('');
        setVoiceInput(transcript);
        setCurrentMessage(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  // ============ ئەۋەتىش فونكتسىيەسى ============
  const handleSendMessageWithFeature = async () => {
    if (!currentMessage.trim() || isTyping || isGeneratingImage || isSearching) return;

    // 1. ئىشلەتكۈچى ئۇچۇرىنى قوشۇش
    const userMessage = currentMessage.trim();
    setCurrentMessage('');

    const newUserMessage = {
      id: Date.now(),
      sender: 'user',
      text: userMessage,
      timestamp: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
      type: 'text'
    };

    setInternalMessages(prev => [...prev, newUserMessage]);

    // 2. ئىقتىدارغا قاراپ ئىشلەش
    if (activeFeature === 'image') {
      await generateImage(userMessage);
    } else if (activeFeature === 'search') {
      await performDeepSearch(userMessage);
    } else {
      // 3. AI مودېلىنى چاقىرىش
      const aiResponse = await callAIModel(userMessage);
      
      const newAiMessage = {
        id: Date.now() + 1,
        sender: 'ai',
        text: aiResponse,
        timestamp: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
        type: 'text',
        emotion: aiPersonality
      };

      setInternalMessages(prev => [...prev, newAiMessage]);
      
      if (aiVoice) {
        speakText(aiResponse);
      }
    }
  };

  // ============ Enter نۇسكىسى ============
  const handleKeyPressWithFeature = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessageWithFeature();
    }
  };

  // ============ ئاۋاز كىرگۈزۈشنى باشلاش/توختىتىش ============
  const toggleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert('ئاۋاز كىرگۈزۈش قوللىمايدۇ. Chromium ئاساسىدىكى تور كۆرگۈچلەرنى ئىشلىتىڭ.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        setVoiceInput('');
      } catch (error) {
        console.error('ئاۋاز كىرگۈزۈشتە خاتالىق:', error);
        alert('ئاۋاز كىرگۈزۈش مەسىلىسى. تور كۆرگۈچ ئىزنىنى تەكشۈرۈڭ.');
      }
    }
  };

  // ============ پاراڭ تېمىسى ============
  const startTopicConversation = (topic) => {
    const topicMessage = `«${topic}» توغرىسىدا سۆزلىشەيلى. مەن بۇ تېمىدا نېمىلەرنى بىلىمەن؟`;
    setCurrentMessage(topicMessage);
  };

  // ============ AI شەخسىيىتىنى ئۆزگەرتىش ============
  const changeAiPersonality = (personality) => {
    setAiPersonality(personality);
    
    const personalityMessages = {
      friendly: 'دوستانە ھالەتكە ئۆزگەردىم!',
      professional: 'كەسپىي ھالەتكە ئۆزگەردىم',
      humorous: 'كۈلكىلىك ھالەتكە ئۆزگەردىم 😄',
      wise: 'ھېكمەتلىك ھالەتكە ئۆزگەردىم'
    };

    const newMessage = {
      id: Date.now(),
      sender: 'ai',
      text: personalityMessages[personality],
      timestamp: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
      type: 'system',
      emotion: 'info'
    };

    if (propMessages.length === 0) {
      setInternalMessages(prev => [...prev, newMessage]);
    }
  };

  // ============ سۆھبەتنى تازىلاش ============
  const resetChat = () => {
    if (propMessages.length === 0) {
      setInternalMessages([
        {
          id: 1,
          sender: 'ai',
          text: 'سۆھبەت تازىلاندى. يەنە قانداق ياردەم لازىم؟',
          timestamp: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
          type: 'text',
          emotion: 'neutral'
        }
      ]);
    }
    
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
    setApiError('');
  };

  // ============ ئۇلاش ھالىتى ============
  const getConnectionStatus = () => {
    switch (internalConnectionStatus) {
      case 'connected': 
        return { 
          color: 'bg-gradient-to-r from-green-400 to-emerald-500',
          text: 'مودېل ئۇلاندى',
          icon: '🟢'
        };
      case 'connecting': 
        return { 
          color: 'bg-gradient-to-r from-yellow-400 to-amber-500',
          text: 'مودېل يۈكلەنمەكتە...',
          icon: '🟡'
        };
      default: 
        return { 
          color: 'bg-gradient-to-r from-red-400 to-pink-500',
          text: 'مودېل ئۇلانمىدى',
          icon: '🔴'
        };
    }
  };

  // ============ ئۇيغۇرچە تېكىست تەكشۈرۈش ============
  const isUyghurText = (text) => /[\u0626-\u06D5]/.test(text);

  const status = getConnectionStatus();

  // ============ ئالاھىدە ئىقتىدارلار ============
  const specialFeatures = [
    {
      id: 'chat',
      icon: '💬',
      title: 'AI سۆھبەت',
      description: 'Llama 3.2 مودېلى بىلەن سۆزلىشىڭ',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      id: 'voice',
      icon: '🎤',
      title: 'ئاۋازلىق سۆھبەت',
      description: 'ئاۋاز ئارقىلىق سۆھبەتلىشىڭ',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      id: 'image',
      icon: '🖼️',
      title: 'رەسىم ھاسىل قىلىش',
      description: 'تەسۋىرلەپ رەسىم ھاسىل قىلىڭ',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'search',
      icon: '🔍',
      title: 'چوڭقۇر ئىزدەش',
      description: 'Wikipedia ئارقىلىق ئىزدەڭ',
      color: 'from-green-500 to-emerald-400'
    }
  ];

  const conversationTopics = [
    'ئۇيغۇر مەدەنىيىتى',
    'ھازىرقى زامان تېخنىكىسى',
    'ساغلام تۇرۇش',
    'مائارىپ ۋە ئۆگىنىش',
    'ساياھەت ۋە مەدەنىيەت',
    'ئىجتىمائىي مەسىلىلەر'
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    } py-6 px-4 sm:px-6`}>
      <div className="max-w-6xl mx-auto">
        {/* API توكن ئەسكەرتىشى */}
        {!process.env.REACT_APP_HF_TOKEN && (
          <div className="mb-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg">
            <p className="font-bold">⚠️ API توكن تەڭشەلمىگەن</p>
            <p className="text-sm">.env فايىلىغا REACT_APP_HF_TOKEN قوشۇڭ. ھازىر مىقى جاۋاب بېرىدۇ.</p>
          </div>
        )}

        {/* ئاساسىي پانېل */}
        <div className={`rounded-3xl shadow-2xl overflow-hidden border transition-all ${
          theme === 'dark' 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
        } mb-8`}>
          {/* باشقۇرۇش بالداق */}
          <div className={`p-6 transition-all ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-gray-900 to-gray-800' 
              : 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700'
          }`}>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                    : 'bg-gradient-to-br from-white/20 to-white/10'
                } backdrop-blur-lg`}>
                  <span className="text-3xl">🤖</span>
                </div>
                <div>
                  <h1 className={`text-3xl font-bold mb-1 flex items-center gap-2 ${
                    theme === 'dark' ? 'text-white' : 'text-white'
                  }`}>
                    قۇتادغۇ AI
                    <span className="text-sm bg-blue-500 px-2 py-1 rounded-full">
                      Llama 3.2
                    </span>
                  </h1>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-blue-200' : 'text-blue-100'
                  }`}>
                    Meta/Facebook AI مودېلى ئاساسىدا • 3B پارامېتىر
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* مودېل تاللاش */}
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-1">
                  <button
                    onClick={() => setCurrentModel('llama')}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      currentModel === 'llama'
                        ? 'bg-white text-blue-600'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    Llama 3.2
                  </button>
                  <button
                    onClick={() => setCurrentModel('qwen')}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      currentModel === 'qwen'
                        ? 'bg-white text-purple-600'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    Qwen 2.5
                  </button>
                </div>

                {/* ئۇلاش ھالىتى */}
                <div className={`rounded-full px-4 py-2 flex items-center gap-2 shadow-lg ${status.color} text-white`}>
                  <span className="animate-pulse">●</span>
                  <span className="font-medium">{status.text}</span>
                </div>

                {/* تېما ئالماشتۇرۇش */}
                <button
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className={`p-2 rounded-full ${
                    theme === 'dark' 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-white/20 hover:bg-white/30'
                  } text-white transition-colors`}
                  title="تېما ئالماشتۇرۇش"
                >
                  <span className="text-xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
                </button>

                {/* ئاۋاز كونترولى */}
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1 hover:bg-white/20 rounded-full"
                    title={isMuted ? 'ئاۋازنى قوزغات' : 'ئاۋازنى توختات'}
                  >
                    <span className="text-lg">{isMuted ? '🔇' : '🔊'}</span>
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-20 accent-white"
                    title="ئاۋاز ھەجىمى"
                  />
                  <span className="text-xs text-white">{volume}%</span>
                </div>

                {/* تازىلاش توپچىسى */}
                <button
                  onClick={resetChat}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    theme === 'dark'
                      ? 'bg-red-500/20 hover:bg-red-500/30 text-red-300'
                      : 'bg-white/20 hover:bg-white/30 text-white'
                  }`}
                >
                  تازىلاش
                </button>
              </div>
            </div>

            {/* API خاتالىقى */}
            {apiError && (
              <div className="mt-4 bg-red-500/20 backdrop-blur-sm rounded-lg p-3 text-white">
                <p className="text-sm">{apiError}</p>
              </div>
            )}
          </div>

          {/* ئاساسىي مەزمۇن رايونى */}
          <div className="p-4 md:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* سۆھبەت رايونى */}
              <div className="lg:col-span-3">
                <div className={`rounded-2xl p-4 sm:p-6 border shadow-inner min-h-[500px] max-h-[70vh] overflow-y-auto ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700'
                    : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100'
                }`}>
                  <div className="space-y-6">
                    {messages.map((message) => {
                      const isUyghur = isUyghurText(message.text);
                      const isUser = message.sender === 'user';

                      return (
                        <div key={message.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
                          <div
                            className={`max-w-[80%] rounded-2xl shadow-lg transition-all transform hover:scale-[1.02] ${
                              isUser
                                ? theme === 'dark'
                                  ? 'bg-gradient-to-r from-blue-700 to-purple-700 text-white rounded-br-none'
                                  : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-none'
                                : theme === 'dark'
                                  ? 'bg-gray-700 text-white rounded-bl-none border border-gray-600'
                                  : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
                            }`}
                            dir={isUyghur ? 'rtl' : 'ltr'}
                          >
                            <div className="p-4">
                              <div className={`flex items-start gap-3 ${isUyghur ? 'flex-row-reverse' : ''}`}>
                                
                                {/* AI ئاۋاتارى */}
                                {!isUser && (
                                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r from-purple-500 to-pink-500">
                                    <span className="text-white font-bold">
                                      🤖
                                    </span>
                                  </div>
                                )}

                                <div className="flex-1" dir={isUyghur ? 'rtl' : 'ltr'}>
                                  {/* رەسىم بولسا */}
                                  {message.type === 'image' && message.imageUrl && (
                                    <div className="mb-3">
                                      <img 
                                        src={message.imageUrl} 
                                        alt={message.text}
                                        className="rounded-lg w-full max-w-sm shadow-md"
                                      />
                                      <p className="text-sm mt-2 opacity-75">
                                        {message.text}
                                      </p>
                                    </div>
                                  )}

                                  {/* ئىزدەش نەتىجىلىرى */}
                                  {message.type === 'search' && message.results && (
                                    <div className="mb-3">
                                      <p className="font-semibold mb-2">{message.text}</p>
                                      <div className="space-y-2">
                                        {message.results.map((result, idx) => (
                                          <div key={idx} className={`p-3 rounded-lg ${
                                            theme === 'dark' ? 'bg-gray-600' : 'bg-blue-50'
                                          }`}>
                                            <h4 className="font-medium">{result.title}</h4>
                                            <p className="text-sm opacity-90">{result.summary}</p>
                                            {result.source && (
                                              <span className="text-xs opacity-75">مەنبە: {result.source}</span>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* ئادەتتىكى تېكىست */}
                                  {(message.type === 'text' || !message.type) && (
                                    <p className="text-base leading-relaxed whitespace-pre-wrap break-words">
                                      {message.text}
                                    </p>
                                  )}

                                  {/* ۋاقىت ۋە ھەرىكەتلەر */}
                                  <div className={`mt-3 flex items-center justify-between text-sm ${
                                    isUser 
                                      ? 'text-blue-100' 
                                      : theme === 'dark' 
                                        ? 'text-gray-400' 
                                        : 'text-gray-500'
                                  }`}>
                                    <span>{message.timestamp}</span>
                                    {!isUser && (
                                      <div className="flex gap-2">
                                        <button
                                          onClick={() => speakText(message.text)}
                                          className="hover:opacity-80 transition-opacity"
                                          title="ئاۋازلىق ئوقۇش"
                                        >
                                          <span className="text-lg">🔊</span>
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {/* ئىشلەتكۈچى ئاۋاتارى */}
                                {isUser && (
                                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r from-green-400 to-teal-500">
                                    <span className="text-white font-bold">
                                      👤
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* يازما ئىندىكاتورى */}
                    {(isTyping || isGeneratingImage || isSearching) && (
                      <div className="flex justify-start">
                        <div className={`rounded-2xl rounded-bl-none px-5 py-4 shadow-lg ${
                          theme === 'dark'
                            ? 'bg-gray-700 border border-gray-600'
                            : 'bg-white border border-gray-200'
                        }`}>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xl">🤖</span>
                            </div>
                            <div className="flex gap-2">
                              {isGeneratingImage ? (
                                <div className="flex items-center gap-2">
                                  <span className="text-lg">🎨</span>
                                  <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    رەسىم ھاسىل قىلىنىۋاتىدۇ...
                                  </span>
                                </div>
                              ) : isSearching ? (
                                <div className="flex items-center gap-2">
                                  <span className="text-lg">🔍</span>
                                  <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Wikipedia دىن ئىزدەۋاتىدۇ...
                                  </span>
                                </div>
                              ) : (
                                <>
                                  <div className={`w-2 h-2 rounded-full animate-bounce ${
                                    theme === 'dark' ? 'bg-gray-400' : 'bg-gray-500'
                                  }`}></div>
                                  <div className={`w-2 h-2 rounded-full animate-bounce delay-100 ${
                                    theme === 'dark' ? 'bg-gray-400' : 'bg-gray-500'
                                  }`}></div>
                                  <div className={`w-2 h-2 rounded-full animate-bounce delay-200 ${
                                    theme === 'dark' ? 'bg-gray-400' : 'bg-gray-500'
                                  }`}></div>
                                  <span className={`ml-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {currentModel === 'llama' ? 'Llama 3.2' : 'Qwen 2.5'} جاۋاب بېرىۋاتىدۇ...
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </div>

                {/* كىرگۈزۈش رايونى */}
                <div className={`mt-6 rounded-2xl p-5 shadow-xl border ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700'
                    : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100'
                }`}>
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* ئاۋاز كىرگۈزۈش */}
                    <button
                      onClick={toggleVoiceInput}
                      className={`p-4 rounded-xl flex-shrink-0 transition-all ${
                        isListening
                          ? 'bg-gradient-to-r from-red-500 to-pink-600 animate-pulse'
                          : theme === 'dark'
                            ? 'bg-gray-700 hover:bg-gray-600'
                            : 'bg-white hover:bg-blue-50 border border-gray-300'
                      }`}
                      title={isListening ? 'ئاۋاز كىرگۈزۈشنى توختات' : 'ئاۋاز كىرگۈزۈش'}
                    >
                      <span className="text-2xl">{isListening ? '🎤🔴' : '🎤'}</span>
                    </button>

                    {/* ئاساسىي تېكىست سۆزى */}
                    <textarea
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      onKeyDown={handleKeyPressWithFeature}
                      placeholder={
                        activeFeature === 'image' 
                          ? 'رەسىم تەسۋىرىنى كىرگۈزۈڭ... (مەسىلەن: "ئۇيغۇر توران تېغى")' 
                          : activeFeature === 'search'
                          ? 'ئىزدەيدىغان مەزمۇنىڭىزنى كىرگۈزۈڭ...'
                          : 'Llama 3.2 AI بىلەن ئۇيغۇرچە سۆزلىشىڭ ياكى سوئال سوراڭ...'
                      }
                      className={`flex-1 rounded-xl px-5 py-4 text-lg placeholder-opacity-70 focus:outline-none focus:ring-3 resize-none ${
                        theme === 'dark'
                          ? 'bg-gray-700 text-white border-gray-600 focus:ring-purple-500 placeholder-gray-400'
                          : 'bg-white text-gray-800 border-gray-300 focus:ring-blue-400 placeholder-gray-500'
                      }`}
                      rows="2"
                      disabled={isTyping || isGeneratingImage || isSearching}
                      style={{
                        direction: isUyghurText(currentMessage) ? 'rtl' : 'ltr',
                        minHeight: '80px'
                      }}
                    />

                    {/* ئەۋەتىش توپچىسى */}
                    <button
                      onClick={handleSendMessageWithFeature}
                      disabled={!currentMessage.trim() || isTyping || isGeneratingImage || isSearching}
                      className={`rounded-xl px-6 py-4 font-semibold transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 ${
                        theme === 'dark'
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                      } text-white min-w-[120px]`}
                    >
                      {isGeneratingImage ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>ھاسىل قىلىنىۋاتىدۇ...</span>
                        </>
                      ) : isSearching ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>ئىزدەۋاتىدۇ...</span>
                        </>
                      ) : (
                        <>
                          <span>{activeFeature === 'image' ? 'رەسىم ھاسىل قىل' : 'ئەۋەت'}</span>
                          <span className="text-xl">📤</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* ئىقتىدار توپچىلىرى */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    {specialFeatures.map((feature) => (
                      <button
                        key={feature.id}
                        onClick={() => setActiveFeature(feature.id)}
                        className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                          activeFeature === feature.id
                            ? `bg-gradient-to-r ${feature.color} text-white shadow-lg`
                            : theme === 'dark'
                              ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                              : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'
                        }`}
                      >
                        <span className="text-lg">{feature.icon}</span>
                        <span className="text-sm font-medium">{feature.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* ئىقتىدار ۋە كونتروللار پانېلى */}
              <div className={`rounded-2xl p-5 ${
                theme === 'dark'
                  ? 'bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700'
                  : 'bg-gradient-to-b from-white to-blue-50 border border-blue-100'
              }`}>
                <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                  <span className="text-xl">⚡</span>
                  AI مودېل كونترولى
                </h3>

                <div className="space-y-4">
                  {/* پاراڭ تېمىلىرى */}
                  <div>
                    <h4 className={`text-sm font-semibold mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      پاراڭ تېمىلىرى
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {conversationTopics.map((topic, idx) => (
                        <button
                          key={idx}
                          onClick={() => startTopicConversation(topic)}
                          className={`p-3 rounded-lg text-sm transition-all hover:transform hover:scale-105 ${
                            theme === 'dark'
                              ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                              : 'bg-blue-50 hover:bg-blue-100 text-gray-700'
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* AI شەخسىيىتى */}
                  <div>
                    <h4 className={`text-sm font-semibold mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      AI شەخسىيىتى
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['friendly', 'professional', 'humorous', 'wise'].map((personality) => (
                        <button
                          key={personality}
                          onClick={() => changeAiPersonality(personality)}
                          className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                            aiPersonality === personality
                              ? theme === 'dark'
                                ? 'bg-purple-600 text-white'
                                : 'bg-purple-500 text-white'
                              : theme === 'dark'
                                ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                          }`}
                        >
                          {personality === 'friendly' && 'دوستانە'}
                          {personality === 'professional' && 'كەسپىي'}
                          {personality === 'humorous' && 'كۈلكىلىك'}
                          {personality === 'wise' && 'ھېكمەتلىك'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* مودېل ئۇچۇرى */}
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'
                  }`}>
                    <h4 className={`text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      ھازىرقى مودېل
                    </h4>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🤖</span>
                      </div>
                      <div>
                        <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                          {currentModel === 'llama' ? 'Llama 3.2 3B' : 'Qwen 2.5 7B'}
                        </p>
                        <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {currentModel === 'llama' ? 'Meta / Facebook' : 'Alibaba'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* تېخنىكىلىق سەپلەر */}
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        ئاۋازلىق سۆھبەت
                      </span>
                      <button
                        onClick={() => setAiVoice(!aiVoice)}
                        className={`w-12 h-6 rounded-full transition-all relative ${
                          aiVoice
                            ? theme === 'dark' ? 'bg-purple-600' : 'bg-blue-500'
                            : theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${
                          aiVoice ? 'left-7' : 'left-0.5'
                        }`}></div>
                      </button>
                    </div>
                    <p className={`text-xs ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      AI جاۋابلىرىنى ئاۋازلىق ئوقۇش
                    </p>
                  </div>

                  {/* ئاۋازلىق قايتىلاش */}
                  <button
                    onClick={() => {
                      if (messages.length > 1) {
                        const lastAiMessage = messages.filter(m => m.sender === 'ai').slice(-1)[0];
                        if (lastAiMessage) speakText(lastAiMessage.text);
                      }
                    }}
                    className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white'
                        : 'bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 text-gray-800'
                    }`}
                  >
                    <span className="text-lg">🔊</span>
                    ئاخىرقى جاۋابنى ئاڭلاش
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ئىقتىدارلار كۆرسىتىش */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              icon: '🧠',
              title: 'Llama 3.2 AI',
              desc: 'Meta/Facebook نىڭ 3B پارامېتىرلىق مودېلى',
              color: 'from-blue-500 to-cyan-400'
            },
            {
              icon: '🌐',
              title: 'Wikipedia ئىزدەش',
              desc: 'تور بويىچە دەلىللەنگەن مەنبەلەردىن ئىزدەيدۇ',
              color: 'from-green-500 to-emerald-400'
            },
            {
              icon: '🎨',
              title: 'Stable Diffusion',
              desc: 'تەسۋىرلەپ رەسىم ھاسىل قىلىدۇ',
              color: 'from-purple-500 to-pink-500'
            },
            {
              icon: '🎤',
              title: 'ئاۋازلىق سۆھبەت',
              desc: 'ئاۋاز ئارقىلىق تولۇق سۆھبەتلىشىش',
              color: 'from-orange-500 to-yellow-400'
            }
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                <span className="text-3xl">{item.icon}</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* تۆۋەندىكى ئۇچۇرلار */}
        <div className={`rounded-2xl p-6 text-center ${
          theme === 'dark'
            ? 'bg-gray-800/50 border border-gray-700'
            : 'bg-white/80 border border-blue-100'
        } backdrop-blur-sm`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-xl">⭐</span>
              </div>
              <div className="text-left">
                <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  قۇتادغۇ AI • Meta Llama 3.2
                </h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  ھەقىقىي AI مودېلى ئاساسىدىكى ئۇيغۇرچە ياردەمچى
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className={`px-4 py-2 rounded-full ${
                theme === 'dark'
                  ? 'bg-gray-700 text-gray-300'
                  : 'bg-blue-100 text-blue-700'
              }`}>
                <span className="text-sm">© 2025 قۇتادغۇ AI</span>
              </div>
              <div className={`px-4 py-2 rounded-full ${
                theme === 'dark'
                  ? 'bg-gray-700 text-gray-300'
                  : 'bg-blue-100 text-blue-700'
              }`}>
                <span className="text-sm">ھوقۇقلۇق Llama 3.2 ئىشلىتىلىشى</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default UyghurAITab;