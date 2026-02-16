import React, { useState, useEffect, useRef } from "react";
import { 
  Send, Bot, User, Sparkles, Brain, 
  Zap, History, Settings, Download, 
  Upload, MessageSquare, Trash2, Plus,
  Save, Share2, Search, Filter,
  Clock, Hash, Star, Bookmark,
  Image as ImageIcon, FileText, Link
} from 'lucide-react';

export default function UyghurQuantumChat() {
  // ئاساسىي ھالەتلەر
  const [messages, setMessages] = useState([
    { 
      id: 1,
      role: "assistant", 
      content: "ئەسسالامۇ ئەلەيكۇم! ☪ مەن Uyghur Quantum AI. سوئالىڭىزنى سوراڭ.",
      time: "10:32",
      avatar: "🧠",
      date: "بۈگۈن"
    }
  ]);
  
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [typingEffect, setTypingEffect] = useState("");
  
  // يېڭى ھالەتلەر
  const [chatHistory, setChatHistory] = useState([
    { id: 1, title: "بىرىنچى سۆھبەت", date: "بۈگۈن", messageCount: 1, preview: "ئەسسالامۇ ئەلەيكۇم!" }
  ]);
  
  const [activeChatId, setActiveChatId] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("ug");
  const [aiMode, setAiMode] = useState("quantum");
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);

  // ئاخىرقى خەۋەرگە ئاپتوماتىك سۈرۈش
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // كىرگۈزۈش رامكىسىغا فوكۇس
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeChatId]);

  // تىپلاش ئەففېكتى
  useEffect(() => {
    if (loading) {
      const text = "Quantum AI ئويلىنىۋاتىدۇ...";
      let i = 0;
      const typing = setInterval(() => {
        if (i < text.length) {
          setTypingEffect(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typing);
        }
      }, 100);
      return () => clearInterval(typing);
    }
  }, [loading]);

  // يېڭى سۆھبەت باشلاش
  const startNewChat = () => {
    const newChatId = Date.now();
    const newChat = {
      id: newChatId,
      title: `سۆھبەت ${chatHistory.length + 1}`,
      date: "بۈگۈن",
      messageCount: 0,
      preview: "يېڭى سۆھبەت"
    };
    
    setChatHistory([newChat, ...chatHistory]);
    setActiveChatId(newChatId);
    setMessages([]);
    setInput("");
  };

  // سۆھبەت يادرو قىلىش
  const saveChat = () => {
    const chatTitle = prompt("سۆھبەت نامىنى كىرگۈزۈڭ:", `سۆھبەت ${activeChatId}`);
    if (chatTitle) {
      const blob = new Blob([JSON.stringify(messages, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${chatTitle}.json`;
      a.click();
      URL.revokeObjectURL(url);
      
      // بەلگىلەش
      setChatHistory(prev => prev.map(chat => 
        chat.id === activeChatId 
          ? { ...chat, title: chatTitle, saved: true } 
          : chat
      ));
    }
  };

  // ھۆججەت چىقىرىش
  const exportChat = (format = 'txt') => {
    const content = messages.map(msg => 
      `${msg.role === 'user' ? '👤 سىز' : '🤖 AI'}: ${msg.content}\n`
    ).join('\n');
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `سۆھبەت_${activeChatId}.${format}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ھۆججەت ئاپلاش
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = JSON.parse(e.target.result);
        if (Array.isArray(content)) {
          const newChatId = Date.now();
          const newChat = {
            id: newChatId,
            title: file.name.replace('.json', ''),
            date: "بۈگۈن",
            messageCount: content.length,
            preview: content[0]?.content?.substring(0, 50) || "ئاپلانغان سۆھبەت",
            saved: true
          };
          
          setChatHistory([newChat, ...chatHistory]);
          setActiveChatId(newChatId);
          setMessages(content);
        }
      } catch (err) {
        alert('ھۆججەت پىشۇرۇلمىدى!');
      }
    };
    reader.readAsText(file);
  };

  // رەسىم ياساش (سۇنئىي)
  const generateImage = () => {
    const userMessage = { 
      id: Date.now(),
      role: "user", 
      content: "رەسىم ياساش",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: "🎨",
      date: "بۈگۈن"
    };
    
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);
    
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: "رەسىم سىزگە ياسالدى! بۇ سۇنئىي رەسىم كۋانتۇم AI تەرىپىدىن ياسالدى.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: "🖼️",
        date: "بۈگۈن",
        imageUrl: "https://via.placeholder.com/400x200/4F46E5/FFFFFF?text=Quantum+AI+Generated+Image"
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setLoading(false);
    }, 2000);
  };

  // خەۋەر يوللاش
  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { 
      id: Date.now(),
      role: "user", 
      content: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: "👤",
      date: "بۈگۈن"
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // سۇنئىي كۈتۈش
      await new Promise(resolve => setTimeout(resolve, 1500));

      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userMessage.content, mode: aiMode })
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { 
          id: Date.now(),
          role: "assistant", 
          content: data.response || "سوئالىڭىزغا جاۋاب بېرىش ئۈچۈن مەن بۇ يەردە.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          avatar: "🤖",
          date: "بۈگۈن"
        }
      ]);
      
      // سۆھبەت تارىخىنى يېڭىلاش
      updateChatPreview();
      
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { 
          id: Date.now(),
          role: "assistant", 
          content: "Backend بىلەن ئۇلىنىش مەغلۇپ بولدى.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          avatar: "⚠️",
          date: "بۈگۈن"
        }
      ]);
    }

    setLoading(false);
    setTypingEffect("");
  };

  // سۆھبەت تارىخىنى يېڭىلاش
  const updateChatPreview = () => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      setChatHistory(prev => prev.map(chat => 
        chat.id === activeChatId 
          ? { 
              ...chat, 
              preview: lastMessage.content.substring(0, 50) + "...",
              messageCount: messages.length,
              lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            } 
          : chat
      ));
    }
  };

  // سۆھبەت تارىخىنى سىستۇرۇش
  const deleteChat = (chatId) => {
    if (window.confirm("بۇ سۆھبەتنى چىڭ سىلماقچىمۇ؟")) {
      setChatHistory(prev => prev.filter(chat => chat.id !== chatId));
      if (chatId === activeChatId && chatHistory.length > 1) {
        setActiveChatId(chatHistory[1].id);
        setMessages([]);
      }
    }
  };

  // تېز سوئاللار
  const quickQuestions = [
    { text: "كوانتۇم كومپيۇتېر نېمە؟", icon: "⚛️" },
    { text: "يېزا ئىگىلىك توغرىسىدا مەلۇمات بېرىڭ", icon: "🌾" },
    { text: "ئۇيغۇر تىلى قانداق تەرەققىي قىلىۋاتىدۇ؟", icon: "📚" },
    { text: "بۈگۈنكى ھاۋارايى قانداق؟", icon: "☁️" },
    { text: "رەسىم ياساش", icon: "🎨", action: generateImage }
  ];

  // AI ھالىتى
  const aiModes = [
    { id: "quantum", name: "كۋانتۇم", icon: "⚛️", color: "from-purple-500 to-pink-500" },
    { id: "creative", name: "ئىجادىي", icon: "🎨", color: "from-blue-500 to-cyan-500" },
    { id: "analytical", name: "تەھلىلىي", icon: "📊", color: "from-green-500 to-emerald-500" },
    { id: "simple", name: "ئاددىي", icon: "💬", color: "from-gray-500 to-slate-500" }
  ];

  return (
    <div dir="rtl" className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} text-white flex overflow-hidden`}>
      {/* سول يان تەرەپ - سۆھبەت تارىخى */}
      <div className={`${sidebarOpen ? 'w-80' : 'w-0'} ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border-l ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300 flex flex-col overflow-hidden`}>
        {sidebarOpen && (
          <>
            {/* سۆھبەت تارىخى باش بېتى */}
            <div className={`p-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <History className="w-5 h-5" />
                  سۆھبەت تارىخى
                </h2>
                <button 
                  onClick={startNewChat}
                  className="p-2 rounded-lg bg-gradient-to-l from-cyan-500 to-blue-600 hover:opacity-90 transition"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              
              {/* ئىزدەش */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="سۆھبەت ئىزدەش..."
                  className={`w-full pl-10 pr-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} ${theme === 'dark' ? 'text-white' : 'text-gray-900'} outline-none`}
                />
              </div>
            </div>

            {/* سۆھبەت تىزىملىكى */}
            <div className="flex-1 overflow-y-auto p-2">
              {chatHistory
                .filter(chat => 
                  chat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  chat.preview.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map(chat => (
                  <div
                    key={chat.id}
                    onClick={() => {
                      setActiveChatId(chat.id);
                      // بۇ يەردە ھەقىقىي سۆھبەت يۈكلەش كېرەك
                    }}
                    className={`p-3 rounded-lg mb-2 cursor-pointer transition-all ${chat.id === activeChatId 
                      ? 'bg-gradient-to-l from-cyan-500/20 to-blue-500/20 border border-cyan-500/30' 
                      : `${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold truncate">{chat.title}</h3>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} truncate`}>
                          {chat.preview}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          {chat.messageCount}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteChat(chat.id);
                          }}
                          className="p-1 hover:bg-red-500/20 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                        {chat.date} • {chat.lastUpdated || chat.time}
                      </span>
                      {chat.saved && <Bookmark className="w-3 h-3 text-yellow-500" />}
                    </div>
                  </div>
                ))}
            </div>

            {/* تۆۋەندىكى ئىقتىدارلار */}
            <div className={`p-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="space-y-2">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-700/50 transition"
                >
                  <span className="flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    ھۆججەت ئاپلاش
                  </span>
                </button>
                
                <button
                  onClick={saveChat}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-700/50 transition"
                >
                  <span className="flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    ساقلاش
                  </span>
                </button>
                
                <button
                  onClick={() => exportChat('txt')}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-700/50 transition"
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    چىقىرىش
                  </span>
                </button>
              </div>
              
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept=".json,.txt"
                className="hidden"
              />
            </div>
          </>
        )}
      </div>

      {/* ئاساسىي مەزمۇن */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* ئۇستى بەت */}
        <header className={`p-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex items-center justify-between`}>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-700/50"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-l from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center animate-spin-slow">
                  <div className={`w-8 h-8 rounded-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center`}>
                    <span className="text-lg">☪</span>
                  </div>
                </div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
              </div>
              
              <div>
                <h1 className="text-xl font-bold">ئۇيغۇر كۋانتۇم AI</h1>
                <p className="text-sm opacity-70">ئەقىللىق سۆھبەت سىستېمىسى</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* AI ھالىتى تاللاش */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-l from-purple-500/20 to-pink-500/20">
                <Brain className="w-4 h-4" />
                <span>كۋانتۇم</span>
              </button>
              
              <div className="absolute left-0 top-full mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {aiModes.map(mode => (
                  <button
                    key={mode.id}
                    onClick={() => setAiMode(mode.id)}
                    className={`w-full flex items-center justify-between p-3 hover:bg-gray-700 ${aiMode === mode.id ? 'bg-gray-700/50' : ''}`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{mode.icon}</span>
                      {mode.name}
                    </span>
                    {aiMode === mode.id && <div className="w-2 h-2 rounded-full bg-green-500"></div>}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => setSettingsOpen(!settingsOpen)}
              className="p-2 rounded-lg hover:bg-gray-700/50"
            >
              <Settings className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-sm opacity-70">
                {new Date().toLocaleDateString('ug-CN', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <Clock className="w-4 h-4 opacity-70" />
            </div>
          </div>
        </header>

        {/* سۆھبەت مەزمۇنى */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            {/* باشلانغۇچ خەۋەر */}
            {messages.length === 0 && (
              <div className="flex justify-center mb-10 animate-fadeInUp">
                <div className={`rounded-3xl p-8 text-center max-w-2xl border shadow-2xl relative overflow-hidden group ${theme === 'dark' 
                  ? 'bg-gradient-to-l from-gray-800/70 via-purple-900/50 to-gray-800/70 border-purple-500/20' 
                  : 'bg-gradient-to-l from-white via-purple-50 to-white border-purple-200'}`}>
                  <div className="relative z-10">
                    <div className="text-6xl mb-4 animate-bounce-slow">☪</div>
                    <h2 className="text-2xl font-bold mb-3">ئەسسالامۇ ئەلەيكۇم!</h2>
                    <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      مەن <span className="text-cyan-300 font-semibold">Uyghur Quantum AI</span>. 
                      سىزنىڭ ھەر قانداق سوئالىڭىزغا كۋانتۇم ھېسابلاش كۈچى بىلەن جاۋاب بېرىشكە تەييارمەن.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      {["يېڭى تېخنىكا", "ئۇيغۇرچە", "كۋانتۇم", "ياساما ئەقىل"].map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="px-4 py-2 bg-gradient-to-l from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-full text-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* خەۋەرلەر */}
            <div className="space-y-6">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-start" : "justify-end"} animate-messageIn`}
                  dir="rtl"
                >
                  <div className={`max-w-2xl rounded-3xl p-6 shadow-2xl relative group transform transition-all duration-300 hover:scale-[1.02] ${theme === 'dark'
                    ? msg.role === "user"
                      ? "bg-gradient-to-l from-blue-800/90 via-blue-900/80 to-cyan-900/90 rounded-bl-none border-r-4 border-blue-400/80"
                      : "bg-gradient-to-l from-gray-800/90 via-gray-900/80 to-purple-900/90 rounded-br-none border-l-4 border-cyan-400/80"
                    : msg.role === "user"
                      ? "bg-gradient-to-l from-blue-100 via-blue-50 to-cyan-50 rounded-bl-none border-r-4 border-blue-300"
                      : "bg-gradient-to-l from-gray-50 via-white to-purple-50 rounded-br-none border-l-4 border-cyan-300"
                  }`}>
                    {/* ئاۋاتار ۋە ئىسىم */}
                    <div className="flex items-center gap-4 mb-4">
                      {msg.role === "user" ? (
                        <>
                          <div className="relative">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-l from-blue-400 to-cyan-300 flex items-center justify-center shadow-lg ${theme === 'dark' ? '' : 'shadow-md'}`}>
                              <User className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <span className={`font-bold text-xl ${theme === 'dark' ? 'text-cyan-200' : 'text-blue-700'}`}>سىز</span>
                            <span className="text-sm opacity-70 flex items-center gap-2">
                              <Clock className="w-3 h-3" />
                              {msg.time} • {msg.date}
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex flex-col items-end flex-1">
                            <span className={`font-bold text-xl ${theme === 'dark' ? 'text-cyan-300' : 'text-purple-700'}`}>
                              Uyghur Quantum AI
                            </span>
                            <span className="text-sm opacity-70 flex items-center gap-2">
                              <Clock className="w-3 h-3" />
                              {msg.time} • {msg.date}
                              {msg.imageUrl && <ImageIcon className="w-3 h-3" />}
                            </span>
                          </div>
                          <div className="relative">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-l from-cyan-400 to-purple-300 flex items-center justify-center shadow-lg ${theme === 'dark' ? '' : 'shadow-md'}`}>
                              <Bot className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* خەۋەر مەزمۇنى */}
                    <div className={`text-lg leading-relaxed whitespace-pre-wrap ${theme === 'dark' 
                      ? msg.role === "user" ? "text-white" : "text-gray-100"
                      : msg.role === "user" ? "text-gray-800" : "text-gray-700"
                    } text-right`}>
                      {msg.content}
                    </div>

                    {/* رەسىم بولسا */}
                    {msg.imageUrl && (
                      <div className="mt-4 rounded-xl overflow-hidden border border-gray-700/50">
                        <img 
                          src={msg.imageUrl} 
                          alt="AI Generated" 
                          className="w-full h-auto"
                        />
                        <div className="p-2 bg-gray-800/50 text-center text-sm">
                          AI تەرىپىدىن ياسالغان رەسىم
                        </div>
                      </div>
                    )}

                    {/* ھەرىكەت كۇنۇپكىلىرى */}
                    <div className="flex justify-end gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-gray-700/50 rounded-lg">
                        <Star className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-gray-700/50 rounded-lg">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-gray-700/50 rounded-lg">
                        <FileText className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* يۈكلەش ئەھۋالى */}
              {loading && (
                <div className="flex justify-end animate-fadeIn">
                  <div className={`rounded-3xl rounded-br-none p-6 max-w-md border-l-4 border-cyan-400/50 shadow-xl ${theme === 'dark'
                    ? 'bg-gradient-to-l from-gray-800/90 via-gray-900/80 to-purple-900/90'
                    : 'bg-gradient-to-l from-gray-50 via-white to-purple-50'
                  }`}>
                    <div className="flex items-center gap-4 justify-end">
                      <div className="text-right">
                        <div className={`font-bold text-lg mb-1 ${theme === 'dark' ? 'text-cyan-300' : 'text-purple-700'}`}>
                          Uyghur Quantum AI
                        </div>
                        <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {typingEffect}
                        </div>
                      </div>
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-l from-cyan-400 to-purple-300 flex items-center justify-center">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div ref={messagesEndRef} className="h-8" />
          </div>
        </main>

        {/* كىرگۈزۈش رايونى */}
        <footer className={`p-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
          <div className="max-w-4xl mx-auto">
            {/* تېز سوئال كۇنۇپكىلىرى */}
            <div className="mb-4">
              <div className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                تېز سوئاللار:
              </div>
              <div className="flex flex-wrap gap-2 justify-end">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => q.action ? q.action() : setInput(q.text)}
                    className="px-4 py-2 bg-gradient-to-l from-gray-800/70 to-gray-900/70 backdrop-blur-sm rounded-xl text-sm hover:from-gray-700/80 hover:to-gray-800/80 active:scale-95 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50 flex items-center gap-2 group"
                  >
                    <span>{q.text}</span>
                    <span className="text-lg opacity-70 group-hover:scale-110 transition-transform">
                      {q.icon}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* كىرگۈزۈش فورمىسى */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm flex items-center gap-2">
                  <span className={`${input.length > 450 ? 'text-red-400' : 'text-gray-500'}`}>
                    {input.length}/500
                  </span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                  <FileText className="w-4 h-4" />
                </div>
                
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  placeholder="سوئالىڭىزنى بۇ يەردە يېزىڭ... (Shift+Enter بېسىپ يېڭى قۇر، Enter بېسىپ يوللاڭ)"
                  rows={3}
                  className={`w-full p-4 pl-16 rounded-2xl outline-none resize-none ${theme === 'dark'
                    ? 'bg-gradient-to-l from-gray-800/80 to-gray-900/80 border-2 border-purple-700/30 focus:border-cyan-500/50 placeholder-gray-500'
                    : 'bg-gradient-to-l from-white to-gray-50 border-2 border-purple-200 focus:border-cyan-300 placeholder-gray-400'
                  } shadow-xl transition-all duration-300 text-right`}
                  dir="rtl"
                  disabled={loading}
                />
                
                {input.length === 0 && (
                  <div className="absolute right-4 top-4 text-gray-600 animate-pulse">
                    سوئالىڭىزنى كىرگۈزۈڭ...
                  </div>
                )}
              </div>
              
              <div className="flex flex-col gap-2">
                <button
                  onClick={sendMessage}
                  disabled={loading || !input.trim()}
                  className="px-8 py-4 bg-gradient-to-l from-cyan-600/90 via-cyan-700/90 to-blue-800/90 rounded-2xl hover:from-cyan-700 hover:via-cyan-800 hover:to-blue-900 active:scale-95 transition-all duration-300 font-bold text-lg shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-white/10 to-cyan-500/0 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  {loading ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="relative">ساقلىنىۋاتىدۇ...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative">يوللا</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
                
                <div className="flex gap-2">
                  <button
                    onClick={generateImage}
                    className="flex-1 p-3 bg-gradient-to-l from-purple-600/90 to-pink-600/90 rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2"
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span className="text-sm">رەسىم</span>
                  </button>
                  
                  <button
                    onClick={saveChat}
                    className="flex-1 p-3 bg-gradient-to-l from-green-600/90 to-emerald-600/90 rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    <span className="text-sm">ساقلاش</span>
                  </button>
                </div>
              </div>
            </div>

            {/* ئاستىنقى ئۇچۇرلار */}
            <div className="mt-4 pt-4 border-t border-gray-800/50">
              <div className="flex flex-wrap justify-between items-center text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span>AI ئاكتىپ</span>
                  </span>
                  <span>•</span>
                  <span>ھالىتى: {aiModes.find(m => m.id === aiMode)?.name}</span>
                  <span>•</span>
                  <span>{messages.length} خەۋەر</span>
                </div>
                <div>
                  <span>v3.0.0 • © 2026 ئۇيغۇر كۋانتۇم AI</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* تەڭشەش پەنىرى */}
      {settingsOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className={`w-full max-w-md rounded-2xl p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">تەڭشەش</h2>
              <button onClick={() => setSettingsOpen(false)} className="p-2 hover:bg-gray-700/50 rounded-lg">
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block mb-2">تېما</label>
                <div className="flex gap-2">
                  {['dark', 'light', 'auto'].map(t => (
                    <button
                      key={t}
                      onClick={() => setTheme(t)}
                      className={`flex-1 p-3 rounded-lg ${theme === t 
                        ? 'bg-gradient-to-l from-cyan-500 to-blue-600' 
                        : theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}
                    >
                      {t === 'dark' ? 'قاراڭغۇ' : t === 'light' ? 'ئېچىق' : 'ئاپتوماتىك'}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block mb-2">تىل</label>
                <div className="flex gap-2">
                  {['ug', 'en', 'zh'].map(lang => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`flex-1 p-3 rounded-lg ${language === lang 
                        ? 'bg-gradient-to-l from-purple-500 to-pink-600' 
                        : theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}
                    >
                      {lang === 'ug' ? 'ئۇيغۇرچە' : lang === 'en' ? 'ئىنگلىزچە' : 'خەنزۇچە'}
                    </button>
                  ))}
                </div>
              </div>
              
              <button className="w-full p-3 bg-gradient-to-l from-red-500/90 to-red-600/90 rounded-xl hover:opacity-90 transition">
                بارلىق سۆھبەتلەرنى تازىلاش
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS ئۇسلۇبلىرى */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes messageIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-messageIn {
          animation: messageIn 0.4s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(30, 30, 46, 0.1);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #7e22ce);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #6d28d9);
        }
      `}</style>
    </div>
  );
}