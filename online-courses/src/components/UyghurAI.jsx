import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, GraduationCap, Star, Award, TrendingUp, Zap, Languages, Book,  
  Navigation, MessageSquare, FileText, Pencil, Brain, Plus, Settings, Edit3, 
  Trash2, Save, X, MapPin, Heart 
} from 'lucide-react';

// Component imports
import UyghurAITab from './UyghurAITab';
import TranslateTab from './TranslateTab';
import LearnTab from './LearnTab';
import PhrasesTab from './PhrasesTab';
import CultureTab from './CultureTab';
import PracticeTab from './PracticeTab';
import ModelsTab from './ModelsTab';
import UyghurAlphabetTab from './UyghurAlphabetTab';
import UyghurRegionsTab from './UyghurRegionsTab';
import UyghurTab from './UyghurTab'; // ← يېڭى كومپونېنت
import UyghurLetterFinder from './UyghurLetterFinder';
import Ballada from './ballada';
import Uyghurchatbot from './UyghurChatBot'; 
import QuantumUyghurAi from './QuantumUyghurAi'; 


// Default data
const defaultUyghurPhrases = [
  { id: 1, uyghur: "ياخشىمۇسىز", english: "Hello", pronunciation: "Yakhshimusi z", category: "greetings" },
  { id: 2, uyghur: "خەيرلىك كەچ", english: "Good evening", pronunciation: "Kheyirlik kech", category: "greetings" },
  { id: 3, uyghur: "رەھمەت", english: "Thank you", pronunciation: "Rakhmet", category: "courtesy" }
];

const defaultLearningModules = [
  { id: "basics", title: "ئاساسىي سۆزلەر", description: "كۈندىلىك ئىشلىتىدىغان ئاساسىي سۆزلەر", level: "beginner" },
  { id: "grammar", title: "گرامماتىكا", description: "ئۇيغۇر تىلى گرامماتىكىسى", level: "intermediate" },
  { id: "conversation", title: "سۆزلىشىش", description: "كۈندىلىك سۆزلىشىش ئىپادىلىرى", level: "advanced" }
];

const defaultCulturalTopics = [
  { id: "history", title: "ئۇيغۇر تارىخى", description: "ئۇيغۇر خەلقىنىڭ باي تارىخى", image: "https://cdn-icons-png.flaticon.com/128/1995/1995518.png" },
  { id: "music", title: "مۇزىكا", description: "ئۇيغۇر مۇزىكىسى ۋە ناخشىلىرى", image: "https://cdn-icons-png.flaticon.com/128/2933/2933907.png" },
  { id: "cuisine", title: "ئاشپەزلىك", description: "ئۇيغۇر تائاملىرى", image: "https://cdn-icons-png.flaticon.com/128/1134/1134083.png" },
  { id: "festivals", title: "بايراملار", description: "ئۇيغۇر بايراملىرى", image: "https://cdn-icons-png.flaticon.com/128/1076/1076984.png" }
];

const defaultAvailableModels = [
  { id: "gpt4o-mini", name: "GPT-4o Mini", provider: "OpenAI", description: "Advanced AI model for text generation", endpoint: "https://api.openai.com/v1/chat/completions", requestFormat: "openai" },
  { id: "claude", name: "Claude", provider: "Anthropic", description: "Conversational AI model", endpoint: "https://api.anthropic.com/v1/messages", requestFormat: "anthropic" },
  { id: "gemini", name: "Gemini", provider: "Google", description: "Google's AI model", endpoint: "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent", requestFormat: "google" }
];

const UyghurAI = () => {
  // === بارلىق State لار — دەلىل ئۆزگەرتىلمىدى ===
  const [activeTab, setActiveTab] = useState('uyghur-ai');
  const [activeSubTab, setActiveSubTab] = useState('');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('ug');
  const [selectedCategory, setSelectedCategory] = useState('greetings');
  const [writingText, setWritingText] = useState('');
  const [quizScore, setQuizScore] = useState(0);
  const [quizTotal, setQuizTotal] = useState(0);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [progress, setProgress] = useState({
    lessonsCompleted: 0,
    phrasesLearned: 0,
    quizzesTaken: 0,
    totalScore: 0
  });
  const [savedPhrases, setSavedPhrases] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [modelsInput, setModelsInput] = useState('');
  const [modelsOutput, setModelsOutput] = useState([]);
  const [apiKeys, setApiKeys] = useState({
    openai: '',
    google: '',
    anthropic: '',
    perplexity: '',
    xai: ''
  });
  const [savedCodeHistory, setSavedCodeHistory] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAddTabModal, setShowAddTabModal] = useState(false);
  const [customTabs, setCustomTabs] = useState([]);
  const [newTabName, setNewTabName] = useState('');
  const [newTabComponent, setNewTabComponent] = useState('');
  const [newTabIcon, setNewTabIcon] = useState('Plus');
  const [editingTab, setEditingTab] = useState(null);
  const [currentMessage, setCurrentMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "سالام! مەن سىزنىڭ ئۇيغۇر تىلىدىكى سورسىڭز. سىزگە قانداق ياردەم بېرەي؟",
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString('zh-CN', { hour12: false })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('connected');
  const messagesEndRef = useRef(null);
  const [showSupportBanner, setShowSupportBanner] = useState(false);
  const [uyghurPhrases, setUyghurPhrases] = useState(defaultUyghurPhrases);
  const [learningModules, setLearningModules] = useState(defaultLearningModules);
  const [culturalTopics, setCulturalTopics] = useState(defaultCulturalTopics);
  const [availableModels, setAvailableModels] = useState(defaultAvailableModels);

  // ✅ تۈزىتىش 1: بەت ئاچىلغاندا ئۈستىگە قايتۇر
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // Support banner
  useEffect(() => {
    const timer1 = setTimeout(() => setShowSupportBanner(true), 1000);
    const timer2 = setTimeout(() => setShowSupportBanner(false), 60000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // ✅ تۈزىتىش 2: messagesEndRef نى بىرىنچى ئۇچۇردىن كېيىنلا ئىشلىت
  useEffect(() => {
    if (messages.length > 1) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Data fallback
  useEffect(() => {
    try {
      if (!uyghurPhrases || uyghurPhrases.length === 0) setUyghurPhrases(defaultUyghurPhrases);
      if (!learningModules || learningModules.length === 0) setLearningModules(defaultLearningModules);
      if (!culturalTopics || culturalTopics.length === 0) setCulturalTopics(defaultCulturalTopics);
      if (!availableModels || availableModels.length === 0) setAvailableModels(defaultAvailableModels);
    } catch (error) {
      console.log('مەلۇماتلارنى ئۇلاشتا خاتالىق:', error);
      setUyghurPhrases(defaultUyghurPhrases);
      setLearningModules(defaultLearningModules);
      setCulturalTopics(defaultCulturalTopics);
      setAvailableModels(defaultAvailableModels);
    }
  }, []);

  // === Handlers (ئۆزگەرتىلمىدى) ===
  const saveCurrentCode = (code) => {
    if (code.trim()) {
      setSavedCodeHistory(prev => [code, ...prev.slice(0, 9)]);
    }
  };
  const clearHistory = () => setSavedCodeHistory([]);
  const handleAddTab = () => {
    if (newTabName.trim() && newTabComponent.trim()) {
      const newTab = {
        id: `custom-${Date.now()}`,
        name: newTabName,
        component: newTabComponent,
        icon: newTabIcon,
        isCustom: true
      };
      setCustomTabs([...customTabs, newTab]);
      setNewTabName('');
      setNewTabComponent('');
      setNewTabIcon('Plus');
      setShowAddTabModal(false);
    }
  };
  const handleEditTab = (tab) => {
    setEditingTab(tab);
    setNewTabName(tab.name);
    setNewTabComponent(tab.component);
    setNewTabIcon(tab.icon);
    setShowAddTabModal(true);
  };
  const handleUpdateTab = () => {
    if (editingTab && newTabName.trim() && newTabComponent.trim()) {
      setCustomTabs(customTabs.map(t => t.id === editingTab.id 
        ? { ...t, name: newTabName, component: newTabComponent, icon: newTabIcon } 
        : t
      ));
      setEditingTab(null);
      setNewTabName('');
      setNewTabComponent('');
      setNewTabIcon('Plus');
      setShowAddTabModal(false);
    }
  };
  const handleDeleteTab = (tabId) => {
    const newTabs = customTabs.filter(t => t.id !== tabId);
    setCustomTabs(newTabs);
    if (activeTab === tabId) setActiveTab('uyghur-ai');
  };
  const renderCustomTab = (tabId) => {
    const tab = customTabs.find(t => t.id === tabId);
    if (!tab) return null;
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{tab.name}</h2>
          {isAdmin && (
            <div className="flex space-x-2">
              <button onClick={() => handleEditTab(tab)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Edit3 className="w-4 h-4" /></button>
              <button onClick={() => handleDeleteTab(tab.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
            </div>
          )}
        </div>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">بۇ تەپنىڭ كومپونېنتى: <code>{tab.component}</code></p>
          <div className="bg-gray-50 rounded-lg p-4 border">
            <p className="text-sm text-gray-500">كومپونېنت ئادىرىسىنى كىرگۈزۈپ، بۇ تەپنى تولۇق ئىشلەتكىلى بولىدۇ.</p>
          </div>
        </div>
      </div>
    );
  };

  // === Chat & API Handlers (ئۆزگەرتىلمىدى) ===
  const handleSendMessage = async () => {
    if (!currentMessage.trim() || isTyping) return;
    const userMessage = {
      id: Date.now(),
      text: currentMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('zh-CN', { hour12: false })
    };
    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsTyping(true);
    try {
      setTimeout(() => {
        const aiMessage = {
          id: Date.now() + 1,
          text: getSimulatedAIResponse(currentMessage),
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString('zh-CN', { hour12: false })
        };
        setMessages(prev => [...prev, aiMessage]);
        setIsTyping(false);
      }, 1500);
    } catch (error) {
      setIsTyping(false);
      const errorMessage = {
        id: Date.now() + 1,
        text: "ئۇچۇر ئالماشتۇرۇش جەريانىدا خاتالىق كۆرۈلدى. تور ئۇلىنىشىنى تەكشۈرۈڭ.",
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString('zh-CN', { hour12: false })
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };
  const getSimulatedAIResponse = (userMessage) => {
    const responses = [
      "بۇ سوئالغا جاۋاب بېرىش ئۈچۈن مەن QutadguAI  API نى ئىشلىتىشىمنى سىزنىڭ Node.js سېرىۋىرىڭىز قىلىدۇ.",
      "ئۇيغۇر تىلىنىڭ چوڭقۇرلىقى ۋە گۈزەللىكىنى تەكشۈرۈش ئۈچۈن مەن QutadguAI نى ئىشلىتىمەن.",
      "سىزنىڭ سۆزىڭىزنى تۈزۈك چۈشىنىش ئۈچۈن مەن كۆپ چالغۇلۇق ئۇيغۇر تىلىنى ئۆگىنىۋاتىمەن.",
      "بۇ سۆزلىشىش مۇھىتى سىزنىڭ Node.js سېرىۋىرىڭىز بىلەن QutadguAI API نى ئىشلىتىش ئارقىلىق ئىشلەيدۇ."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setOutputText('Please enter text to translate.');
      return;
    }
    setLoading(true);
    try {
      setTimeout(() => {
        setOutputText(`Translated text for: "${inputText}"\n\nThis would be the actual translation from ${sourceLang} to ${targetLang} using the translation service.`);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setOutputText(`Translation error: ${error.message}\nPlease try again or rephrase your text.`);
      setLoading(false);
    }
  };
  const handleModelQuery = async () => {
    if (!modelsInput.trim()) {
      setModelsOutput([{ modelId: 'error', response: 'Please enter a query.' }]);
      return;
    }
    if (selectedModels.length === 0) {
      setModelsOutput([{ modelId: 'error', response: 'Please select at least one model.' }]);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const results = selectedModels.map(modelId => ({
        modelId,
        response: `Simulated response for "${modelsInput}" from model ${modelId}`
      }));
      setModelsOutput(results);
      setLoading(false);
    }, 1500);
  };
  const handleLearn = async (moduleId) => {
    setLoading(true);
    setActiveSubTab(moduleId);
    try {
      setTimeout(() => {
        const module = learningModules.find(m => m.id === moduleId) || { title: moduleId };
        setOutputText(`Comprehensive lesson about ${module.title} for learning Uyghur.\n\nThis would include vocabulary, grammar, cultural context, and practice examples.`);
        setProgress(prev => ({ ...prev, lessonsCompleted: prev.lessonsCompleted + 1 }));
        setLoading(false);
      }, 1000);
    } catch (error) {
      setOutputText(`Error loading lesson: ${error.message}`);
      setLoading(false);
    }
  };
  const handleCulture = async (topicId) => {
    setLoading(true);
    setActiveSubTab(topicId);
    try {
      setTimeout(() => {
        const topic = culturalTopics.find(t => t.id === topicId) || { title: topicId };
        setOutputText(`Cultural information about ${topic.title} in Uyghur culture.\n\nThis would include historical background, cultural significance, and interesting facts.`);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setOutputText(`Error loading cultural information: ${error.message}`);
      setLoading(false);
    }
  };
  const generateQuiz = async () => {
    setLoading(true);
    try {
      setTimeout(() => {
        const quiz = {
          question: "What does ياخشىمۇسىز mean?",
          options: ["Hello", "Goodbye", "Thank you", "Yes"],
          correct: 0,
          explanation: "ياخشىمۇسىز means Hello in Uyghur"
        };
        setCurrentQuizQuestion(quiz);
        setUserAnswer('');
        setLoading(false);
      }, 1000);
    } catch (error) {
      setOutputText(`Error generating quiz: ${error.message}`);
      setLoading(false);
    }
  };
  const checkQuizAnswer = () => {
    if (currentQuizQuestion && userAnswer !== '') {
      const isCorrect = parseInt(userAnswer) === currentQuizQuestion.correct;
      if (isCorrect) {
        setQuizScore(quizScore + 1);
        setProgress(prev => ({ ...prev, totalScore: prev.totalScore + 10 }));
      }
      setQuizTotal(quizTotal + 1);
      setProgress(prev => ({ ...prev, quizzesTaken: prev.quizzesTaken + 1 }));
      const result = isCorrect
        ? `✅ Correct! ${currentQuizQuestion.explanation}`
        : `❌ Incorrect. ${currentQuizQuestion.explanation}`;
      setOutputText(result);
      setCurrentQuizQuestion(null);
    }
  };
  const practiceWriting = async () => {
    if (!writingText.trim()) return;
    setLoading(true);
    try {
      setTimeout(() => {
        setOutputText(`Writing analysis for: "${writingText}"\n\nThis would provide accuracy check, transliteration, translation, and constructive feedback.`);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setOutputText(`Error analyzing writing: ${error.message}`);
      setLoading(false);
    }
  };
  const savePhrase = (phrase) => {
    if (!savedPhrases.find(p => p.uyghur === phrase.uyghur)) {
      setSavedPhrases([...savedPhrases, { ...phrase, savedAt: new Date().toISOString() }]);
      setProgress(prev => ({ ...prev, phrasesLearned: prev.phrasesLearned + 1 }));
    }
  };

  const renderIcon = (iconName, className = "w-4 h-4") => {
    const icons = {
      Plus, Settings, Edit3, Trash2, Save, X,
      Sparkles, GraduationCap, Star, Award, TrendingUp, Zap, 
      Languages, Book, MessageSquare, FileText, Pencil, Brain, MapPin, Heart
    };
    const IconComponent = icons[iconName] || Plus;
    return <IconComponent className={className} />;
  };

  const PAYPAL_DONATE_URL = "https://www.paypal.com/paypalme/KawulAbduryim";

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Header */}
        <div className="text-center mb-8 relative">
          <div className="absolute top-0 right-0 z-10">
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className={`p-2 rounded-lg transition-all ${
                isAdmin 
                  ? 'bg-teal-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 shadow-sm hover:shadow-md'
              }`}
              title={isAdmin ? 'باشقۇرغۇچى ھالىتى: ئىشلەۋاتىدۇ' : 'باشقۇرغۇچى ھالىتىنى ئاچ'}
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-teal-600" />
            <h1 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent"
              dir="ltr"
            >
              {"\u200E"}AI{"\u200E"} قۇتئادغۇ
            </h1>
          </div>
          <p className="text-gray-700  font-uyghur text-3xl">Complete Language Learning & Cultural Preservation Suite</p>
          <p className="font-uyghur text-3xl  text-gray-600 mt-1">ئۇيغۇر تىل ئۆگىنىش ۋە مەدەنىيەت ساقلاش تولۇق سىستېمىسى</p>
          
          {/* Progress Stats */}
          <div className=" flex flex-wrap justify-center gap-4 mt-6">
            {[
              { icon: GraduationCap, label: 'Lessons', value: progress.lessonsCompleted, color: 'teal' },
              { icon: Star, label: 'Points', value: progress.totalScore, color: 'yellow' },
              { icon: Award, label: 'Phrases', value: progress.phrasesLearned, color: 'purple' },
              { icon: TrendingUp, label: 'Quiz', value: quizTotal > 0 ? Math.round((quizScore / quizTotal) * 100) : 0 + '%', color: 'green' }
            ].map((item, i) => {
              const Icon = item.icon;
              const colorClass = {
                teal: 'text-teal-600',
                yellow: 'text-yellow-500',
                purple: 'text-purple-600',
                green: 'text-green-600'
              }[item.color];
              return (
                <div key={i} className="bg-white rounded-lg px-4 py-2.5 shadow-sm hover:shadow-md transition-shadow border">
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${colorClass}`} />
                    <span className="text-sm font-semibold text-gray-700">{item.value} {item.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
                     
        {/* Navigation Tabs */}
        <div className="font-uyghur text-2xl flex flex-wrap gap-3 mb-8 bg-gradient-to-r from-indigo-50 to-teal-50 rounded-2xl p-4 shadow-lg border border-gray-200 relative">
          {[
            { id: 'uyghur-ai', name: 'AI\u200E\u2000قۇتئادغۇ', icon: 'Zap' },
            { id: 'translate', name: 'تەرجىمە', icon: 'Languages' },
            { id: 'learn', name: 'ئۈگنىش', icon: 'Book' },
            { id: 'phrases', name: 'جۇمىلە', icon: 'MessageSquare' },
            { id: 'culture', name: 'كۈلتۈر', icon: 'FileText' },
            { id: 'practice', name: 'مەشىق', icon: 'Pencil' },
            { id: 'models', name: 'مودىللار', icon: 'Brain' },
            { id: 'alphabet', name: 'ھەرىپلەر', icon: 'Book' },
            { id: 'regions', name: 'ئۇيغۇر رايونلىرى', icon: 'MapPin' },
            { id: 'uyghur', name: 'ئۇيغۇر', icon: 'Star' },
            { id: 'letter-finder', name: 'ھەرپ ئۈگنىش', icon: 'Search' },
            { id: 'ballada', name: 'باللادا', icon: 'Book' },
            { id: 'chatbot', name: 'پاراڭچى ', icon: 'Zap' },
            { id: 'quantum-uyghur-ai', name: 'Quantum Uyghur AI', icon: 'Zap' }
           

          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.03] whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-teal-600 to-indigo-700 text-white shadow-lg shadow-teal-500/30'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm border border-transparent hover:border-teal-200'
              }`}
            >
              {renderIcon(tab.icon, "w-5 h-5")}
              {tab.name}
            </button>
          ))}

          {customTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 group relative whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'
              }`}
            >
              {renderIcon(tab.icon, "w-5 h-5")}
              {tab.name}
              {isAdmin && (
                <span className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDeleteTab(tab.id); }}
                    className="bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </button>
          ))}

          {isAdmin && (
            <button
              onClick={() => setShowAddTabModal(true)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium shadow-md hover:shadow-lg transition-all transform hover:scale-[1.03]"
            >
              <Plus className="w-5 h-5" />
              تەپ قوشۇش
            </button>
          )}
        </div>

        {/* Support Banner */}
        {showSupportBanner && (
          <div 
            className="fixed bottom-6 right-6 z-50"
            style={{
              animation: 'fadeInUp 0.6s ease-out, fadeOut 0.6s ease-out 59.4s forwards'
            }}
          >
            <a
              href={PAYPAL_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <Heart className="w-5 h-5 fill-white" />
              <span className="font-bold">بىزنى قوللىشىڭىزنى قارشى ئالمىز ❤️</span>
            </a>
          </div>
        )}

        {/* Add Tab Modal */}
        {showAddTabModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {editingTab ? 'تەپ تەھرىرلەش' : 'يېڭى تەپ قوشۇش'}
                </h3>
                <button
                  onClick={() => {
                    setShowAddTabModal(false);
                    setEditingTab(null);
                    setNewTabName('');
                    setNewTabComponent('');
                    setNewTabIcon('Plus');
                  }}
                  className="p-1 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">تەپ نامى</label>
                  <input
                    type="text"
                    value={newTabName}
                    onChange={(e) => setNewTabName(e.target.value)}
                    placeholder="تەپنىڭ نامىنى كىرگۈزۈڭ"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">كومپونېنت ئادىرىسى</label>
                  <input
                    type="text"
                    value={newTabComponent}
                    onChange={(e) => setNewTabComponent(e.target.value)}
                    placeholder="./components/MyComponent"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ئىكون تاللاش</label>
                  <select
                    value={newTabIcon}
                    onChange={(e) => setNewTabIcon(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {Object.keys({ Plus, Settings, Star, Award, Book, MessageSquare }).map(icon => (
                      <option key={icon} value={icon}>{icon}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={editingTab ? handleUpdateTab : handleAddTab}
                  className="flex-1 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {editingTab ? 'يېڭىلاش' : 'قوشۇش'}
                </button>
                <button
                  onClick={() => {
                    setShowAddTabModal(false);
                    setEditingTab(null);
                    setNewTabName('');
                    setNewTabComponent('');
                    setNewTabIcon('Plus');
                  }}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  بىكار قىلىش
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Render Active Tab */}
        {activeTab === 'uyghur-ai' && <UyghurAITab {...{ progress, connectionStatus, isTyping, currentMessage, messages, setCurrentMessage, handleSendMessage, handleKeyPress, messagesEndRef }} />}
        {activeTab === 'translate' && <TranslateTab {...{ inputText, setInputText, outputText, setOutputText, loading, sourceLang, setSourceLang, targetLang, setTargetLang, handleTranslate }} />}
        {activeTab === 'learn' && <LearnTab {...{ learningModules, activeSubTab, setActiveSubTab, outputText, setOutputText, loading, handleLearn, progress }} />}
        {activeTab === 'phrases' && <PhrasesTab {...{ uyghurPhrases, selectedCategory, setSelectedCategory, savedPhrases, savePhrase }} />}
        {activeTab === 'culture' && <CultureTab {...{ culturalTopics, activeSubTab, setActiveSubTab, outputText, setOutputText, loading, handleCulture }} />}
        {activeTab === 'practice' && <PracticeTab {...{ writingText, setWritingText, outputText, setOutputText, loading, practiceWriting, quizScore, quizTotal, currentQuizQuestion, userAnswer, setUserAnswer, generateQuiz, checkQuizAnswer, savedCodeHistory, saveCurrentCode, clearHistory }} />}
        {activeTab === 'models' && <ModelsTab {...{ availableModels, selectedModels, setSelectedModels, modelsInput, setModelsInput, modelsOutput, setModelsOutput, loading, handleModelQuery, apiKeys, setApiKeys }} />}
        {activeTab === 'alphabet' && <UyghurAlphabetTab />}
        {activeTab === 'regions' && <UyghurRegionsTab />}
        {activeTab === 'uyghur' && <UyghurTab />}
        {activeTab === 'letter-finder' && <UyghurLetterFinder />}
        {activeTab === 'ballada' && <Ballada />}
        {activeTab === 'chatbot' && <Uyghurchatbot />}
        {activeTab === 'quantum-uyghur-ai' && <QuantumUyghurAi />}
        {customTabs.some(tab => tab.id === activeTab) && renderCustomTab(activeTab)}
        
        <div className="mt-8 text-center text-sm text-gray-500 space-y-1">
          <p className="font-medium">Built with respect for Uyghur language and culture</p>
          <p className="font-serif" dir="rtl">ئۇيغۇر تىلى ۋە مەدەنىيىتىگە ھۆرمەت بىلەن ياسالغان</p>
          <p className="text-xs mt-2">Powered by Qutadgu AI • Educational & Cultural Preservation Tool</p>
        </div>
      </div>

      {/* ✅ تۈزىتىش 3: scroll-behavior نى html/global دىن ئۆچۈرۈش */}
      <style jsx global>{`
        html, body {
          overflow-x: hidden;
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default UyghurAI;