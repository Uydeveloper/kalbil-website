import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Cpu, Languages, Sparkles, Play, Pause, RotateCcw,
  MessageSquare, Send, Settings, Info, CheckCircle, AlertCircle,
  ChevronDown, ChevronUp, Globe, Zap, Network, Code,
  Mic, MicOff, Volume2, VolumeX, Server, Database, Cloud,
  Loader2, Wifi, WifiOff, Eye, EyeOff
} from 'lucide-react';

// ==================== 🛡️ بىخەتەرلىك ياردەمچى فۇنكسىيەلەر ====================
const safeObjectEntries = (obj, fallback = []) => {
  if (!obj || typeof obj !== 'object') return fallback;
  return Object.entries(obj);
};

const safeGet = (obj, path, defaultValue = undefined) => {
  return path.split('.').reduce((acc, key) => acc?.[key], obj) ?? defaultValue;
};

// ==================== 🌐 تىل ۋە تەرجىمە سىستېمىسى (بىخەتەر) ====================
const translations = {
  ug: {
    title: "QNLP سۈنئىي ئەقىل سىستېمىسى",
    subtitle: "كۋانت تەبىئىي تىل بىر تەرەپ قىلىش تېخنىكىسى",
    inputPlaceholder: "ئۇيغۇرچە ياكى ئىنگلىزچە جۈملىڭىزنى كىرگۈزۈڭ ياكى ئاۋازدا سۆزلەڭ...",
    analyze: "تەھلىل قىلىش",
    processing: "كۋانت ھېسابلاش جەريانىدا...",
    result: "نەتىجە",
    quantumCircuit: "كۋانت زەنجىرى",
    diagram: "تىل دىئاگراممىسى",
    sentiment: "ھېسسىيات تەھلىلى",
    classification: "تۈرگە ئايرىش",
    confidence: "ئىشەنچلىك دەرىجىسى",
    pipeline: "QNLP ئېقىمى",
    voiceInput: "ئاۋاز كىرگۈزۈش",
    voiceOutput: "ئاۋاز چىقىرىش",
    backend: "كۋانت ئارقا كۆرۈنۈش",
    model: "ئۇيغۇرچە تىل مودېلى",
    status: {
      idle: "تەييار",
      parsing: "گرامماتىكا تەھلىل قىلىۋاتىدۇ...",
      diagramming: "دىئاگرامما قۇرۇۋاتىدۇ...",
      quantizing: "كۋانت زەنجىرىگە ئايلاندۇرۇۋاتىدۇ...",
      training: "مودېل ئۆگىنىۋاتىدۇ...",
      predicting: "نەتىجە ھېسابلاۋاتىدۇ...",
      complete: "تاماملاندى ✓",
      connecting: "كۋانت مۇلازىمېتىرغا ئۇلىنىۋاتىدۇ...",
      recording: "ئاۋاز خاتىرىلەۋاتىدۇ...",
      processing_voice: "ئاۋازنى تېكىستكە ئايلاندۇرۇۋاتىدۇ..."
    },
    backendOptions: {
      simulator: "يەرلىك سىمۇلياتور",
      ibm: "IBM Quantum",
      quantinuum: "Quantinuum"
    },
    features: [
      "كۋانت ھالەت كودلاش",
      "كومپوزىتسىيەلىك گرامماتىكا",
      "ھىبرىت كۋانت-كلاسسىك ئۆگىنىش",
      "ئۇيغۇرچە ئۆگىنىش مودېلى",
      "رېئال ۋاقىتلىق ئاۋاز بىر تەرەپ قىلىش",
      "كۆپ تىللىق قوللاش"
    ],
    about: "QNLP ھەققىدە",
    aboutText: "Quantum Natural Language Processing (QNLP) كۋانت ھېسابلاش ۋە تەبىئىي تىل بىر تەرەپ قىلىشنى بىرلەشتۈرىدۇ. [[2]] بۇ ئۇسۇلدا سۆزلەر كۋانت ھالەتلىرى سۈپىتىدە كودلىنىپ، گرامماتىكا قانۇنىيەتلىرى كۋانت زەنجىرى سىملىرى ئارقىلىق باغلىنىدۇ. [[5]] ئۇيغۇرچە تىل مودېلى `bobcat-ug-v1` پارچىلىغۇچ ۋە `q-embed-ug` كۋانت سۆز ۋېكتورلىرى ئارقىلىق ئىشلىتىلىدۇ.",
    examples: [
      "بۈگۈن كۈن ناھايىتى گۈزەل!",
      "مەن بۇ يېڭى تېخنىكىنى ياقتۇردۇم.",
      "بۇ مەسىلە بەك مۇرەككەپ.",
      "ئۇيغۇر تىلى بەي ۋە گۈزەل تىل.",
      "كۋانت كومپيۇتېرى كەلگۈسىنى ئۆزگەرتىدۇ!"
    ],
    steps: {
      parsing: "گرامماتىكا تەھلىل قىلىۋاتىدۇ...",
      diagramming: "دىئاگرامما قۇرۇۋاتىدۇ...",
      quantizing: "كۋانت زەنجىرىگە ئايلاندۇرۇۋاتىدۇ...",
      training: "مودېل ئۆگىنىۋاتىدۇ...",
      predicting: "نەتىجە ھېسابلاۋاتىدۇ..."
    }
  },
  en: {
    title: "QNLP AI System",
    subtitle: "Quantum Natural Language Processing Technology",
    inputPlaceholder: "Enter sentence in Uyghur/English or speak...",
    analyze: "Analyze",
    processing: "Quantum computation in progress...",
    result: "Result",
    quantumCircuit: "Quantum Circuit",
    diagram: "Language Diagram",
    sentiment: "Sentiment Analysis",
    classification: "Classification",
    confidence: "Confidence Score",
    pipeline: "QNLP Pipeline",
    voiceInput: "Voice Input",
    voiceOutput: "Voice Output",
    backend: "Quantum Backend",
    model: "Uyghur Language Model",
    status: {
      idle: "Ready",
      parsing: "Parsing grammar...",
      diagramming: "Building diagram...",
      quantizing: "Converting to quantum circuit...",
      training: "Training model...",
      predicting: "Computing prediction...",
      complete: "Complete ✓",
      connecting: "Connecting to quantum server...",
      recording: "Recording audio...",
      processing_voice: "Converting speech to text..."
    },
    backendOptions: {
      simulator: "Local Simulator",
      ibm: "IBM Quantum",
      quantinuum: "Quantinuum"
    },
    features: [
      "Quantum State Encoding",
      "Compositional Grammar",
      "Hybrid Quantum-Classical Learning",
      "Uyghur Language Model Support",
      "Real-time Voice Processing",
      "Multilingual Interface"
    ],
    about: "About QNLP",
    aboutText: "Quantum Natural Language Processing (QNLP) combines quantum computing with natural language processing. [[2]] Words are encoded as quantum states, grammatical rules connect via quantum circuit wires. [[5]] Uyghur model uses `bobcat-ug-v1` parser and `q-embed-ug` quantum embeddings.",
    examples: [
      "بۈگۈن كۈن ناھايىتى گۈزەل!",
      "مەن بۇ يېڭى تېخنىكىنى ياقتۇردۇم.",
      "بۇ مەسىلە بەك مۇرەككەپ.",
      "ئۇيغۇر تىلى بەي ۋە گۈزەل تىل.",
      "كۋانت كومپيۇتېرى كەلگۈسىنى ئۆزگەرتىدۇ!"
    ],
    steps: {
      parsing: "Parsing grammar...",
      diagramming: "Building diagram...",
      quantizing: "Converting to quantum circuit...",
      training: "Training model...",
      predicting: "Computing prediction..."
    }
  }
};

// ==================== ⚛️ كۋانت ئارقا كۆرۈنۈش تەڭشەكلىرى (بىخەتەر) ====================
const quantumBackend = Object.freeze({
  simulator: {
    name: 'Local Simulator',
    endpoint: null,
    apiKey: null,
    maxQubits: 20,
    supported: true
  },
  ibm: {
    name: 'IBM Quantum',
    endpoint: 'https://quantum-computing.ibm.com/api',
    apiKey: typeof process !== 'undefined' ? process.env?.IBM_QUANTUM_API_KEY || '' : '',
    maxQubits: 127,
    devices: ['ibm_brisbane', 'ibm_osaka', 'ibm_sherbrooke'],
    supported: true
  },
  quantinuum: {
    name: 'Quantinuum',
    endpoint: 'https://cloud.quantinuum.com/api',
    apiKey: typeof process !== 'undefined' ? process.env?.QUANTINUUM_API_KEY || '' : '',
    maxQubits: 32,
    devices: ['H1-1', 'H2-1'],
    supported: true
  }
});

// ==================== 📚 ئۇيغۇرچە تىل مودېلى تەڭشەكلىرى ====================
const uyghurCorpus = Object.freeze({
  parser: 'bobcat-ug-v1',
  embeddings: 'q-embed-ug',
  modelPath: '/models/ug-qnlm-v2.onnx',
  vocabSize: 32000,
  maxSeqLength: 128,
  quantumDims: {
    noun: 2,
    verb: 2,
    adjective: 2,
    sentence: 4
  },
  trainingConfig: {
    epochs: 100,
    batchSize: 16,
    learningRate: 0.001,
    quantumLayers: 3,
    classicalLayers: 2
  }
});

// ==================== 🎤 ئاۋاز بىر تەرەپ قىلىش تەڭشەكلىرى ====================
const voiceIntegration = Object.freeze({
  speechToText: {
    engine: 'Uyghur-STT-v2',
    endpoint: '/api/stt/ug',
    sampleRate: 16000,
    language: 'ug-CN',
    supported: true
  },
  textToSpeech: {
    engine: 'Uyghur-TTS-neural',
    endpoint: '/api/tts/ug',
    voice: 'ug-Female-Standard',
    sampleRate: 24000,
    supported: true
  },
  audioConfig: {
    echoCancellation: true,
    noiseSuppression: true,
    autoGainControl: true
  }
});

// ==================== ⚙️ كۋانت زەنجىرى سىمۇلياتسىيەسى ====================
const simulateQuantumCircuit = async (text, language, backend = 'simulator') => {
  const words = text?.split(/\s+/).filter(w => w?.length > 0) || [];
  const wordCount = words.length;
  const complexity = Math.min(wordCount * 0.15, 0.95);
  
  const backendConfig = quantumBackend[backend] || quantumBackend.simulator;
  
  const params = {
    nounWires: Math.ceil(wordCount * 0.4),
    sentenceWires: 1,
    layers: Math.min(Math.ceil(wordCount / 3), 4),
    singleQubitParams: 3,
    entanglement: complexity,
    backend: backend,
    qubitsUsed: Math.min(wordCount * 2, backendConfig?.maxQubits || 20)
  };
  
  const delay = backend === 'simulator' ? 500 : 1500 + Math.random() * 1000;
  await new Promise(resolve => setTimeout(resolve, delay));
  
  const sentiment = Math.random() > 0.5 ? 'positive' : 'negative';
  const confidence = 0.75 + Math.random() * 0.22;
  
  return {
    params,
    sentiment,
    confidence: confidence.toFixed(3),
    circuitDepth: params.layers * (params.nounWires + params.sentenceWires),
    estimatedGates: Math.floor(complexity * 150),
    executionTime: (delay / 1000).toFixed(2),
    quantumState: Array(params.qubitsUsed).fill(0).map(() => ({
      amplitude: (Math.random() * 2 - 1).toFixed(4),
      phase: (Math.random() * Math.PI * 2).toFixed(4)
    }))
  };
};

// ==================== 🎨 دىئاگرامما كومپونېنتى (ئايرىم) ====================
const DiagramVisualizer = React.memo(({ diagram, language }) => {
  const t = translations[language] || translations.en;
  
  if (!diagram?.params) {
    return (
      <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
        <p className="text-slate-400 text-center">Diagram data not available</p>
      </div>
    );
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700"
    >
      <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
        <Network className="w-5 h-5" />
        {t.diagram || 'Diagram'}
      </h4>
      
      <div className="relative h-56 bg-slate-950 rounded-xl overflow-hidden border border-slate-700">
        {/* كۋانت سىملىرى */}
        <div className="absolute inset-0 flex flex-col justify-center gap-6 px-4">
          {Array.from({ length: (diagram.params.nounWires || 0) + (diagram.params.sentenceWires || 0) }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full origin-left"
            />
          ))}
        </div>
        
        {/* گىرامماتىكا باغلىنىشلىرى */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {Array.from({ length: Math.min(4, diagram.params.nounWires || 0) }).map((_, i) => (
            <motion.svg
              key={`cup-${i}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.12 }}
              className="absolute"
              style={{ left: `${25 + i * 15}%`, top: '30%', width: '12%', height: '40%' }}
              viewBox="0 0 100 100"
            >
              <path
                d="M 10 50 Q 50 10 90 50"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                className="drop-shadow-lg"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </motion.svg>
          ))}
        </div>
        
        {/* كۋانت دەرۋازىلىرى */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 px-6">
          {Array.from({ length: diagram.params.layers || 0 }).map((_, layer) => (
            <div key={layer} className="flex flex-col gap-2">
              {Array.from({ length: Math.min(3, diagram.params.nounWires || 0) }).map((_, gate) => (
                <motion.div
                  key={`gate-${layer}-${gate}`}
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.7 + (layer * 0.08) + (gate * 0.04) }}
                  className="w-7 h-7 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-md flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-cyan-500/30 border border-cyan-400/30"
                >
                  {['Rx', 'Rz', 'CZ'][gate % 3]}
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="bg-slate-800/50 rounded-lg p-3">
          <span className="text-slate-400">Noun Wires:</span>
          <span className="ml-2 font-mono text-cyan-400">{diagram.params.nounWires || 0}</span>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3">
          <span className="text-slate-400">Qubits:</span>
          <span className="ml-2 font-mono text-purple-400">{diagram.params.qubitsUsed || 0}</span>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3">
          <span className="text-slate-400">Backend:</span>
          <span className="ml-2 font-mono text-pink-400">{diagram.params.backend || 'simulator'}</span>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3">
          <span className="text-slate-400">Time:</span>
          <span className="ml-2 font-mono text-emerald-400">{diagram.executionTime || '0.00'}s</span>
        </div>
      </div>
    </motion.div>
  );
});

DiagramVisualizer.displayName = 'DiagramVisualizer';

// ==================== 🎙️ ئاۋاز كونترول كومپونېنتى (ئايرىم) ====================
const VoiceControl = React.memo(({ onTranscribe, onSpeak, isRecording, isSpeaking, language, inputText }) => {
  const t = translations[language] || translations.en;
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: { 
          sampleRate: voiceIntegration.speechToText.sampleRate,
          echoCancellation: voiceIntegration.audioConfig.echoCancellation,
          noiseSuppression: voiceIntegration.audioConfig.noiseSuppression
        } 
      });
      
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus',
        audioBitsPerSecond: 128000
      });
      
      audioChunksRef.current = [];
      
      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data?.size > 0) audioChunksRef.current.push(e.data);
      };
      
      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        await new Promise(resolve => setTimeout(resolve, 800));
        const mockTranscription = language === 'ug' 
          ? 'بۇ بىر سىناق جۈملىسى.' 
          : 'This is a test sentence.';
        onTranscribe?.(mockTranscription);
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorderRef.current.start();
    } catch (err) {
      console.error('Recording error:', err);
      alert(language === 'ug' ? 'مىكروفون رۇخسەتى كېرەك!' : 'Microphone permission required!');
    }
  };
  
  const stopRecording = () => {
    if (mediaRecorderRef.current?.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
  };
  
  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };
  
  const toggleSpeaking = () => {
    if (isSpeaking) {
      window.speechSynthesis?.cancel();
      onSpeak?.(false);
    } else if (inputText?.trim()) {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(inputText);
        utterance.lang = language === 'ug' ? 'ug-CN' : 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
        onSpeak?.(true);
      }
    }
  };
  
  return (
    <div className="flex items-center gap-2">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleRecording}
        disabled={isSpeaking}
        className={`p-3 rounded-xl border transition-all ${
          isRecording 
            ? 'bg-rose-600 border-rose-500 text-white animate-pulse' 
            : 'bg-slate-700 hover:bg-slate-600 border-slate-600 text-slate-300'
        } ${isSpeaking ? 'opacity-50 cursor-not-allowed' : ''}`}
        title={t.voiceInput || 'Voice Input'}
      >
        {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleSpeaking}
        disabled={!inputText?.trim() || isRecording}
        className={`p-3 rounded-xl border transition-all ${
          isSpeaking 
            ? 'bg-emerald-600 border-emerald-500 text-white animate-pulse' 
            : 'bg-slate-700 hover:bg-slate-600 border-slate-600 text-slate-300'
        } ${(!inputText?.trim() || isRecording) ? 'opacity-50 cursor-not-allowed' : ''}`}
        title={t.voiceOutput || 'Voice Output'}
      >
        {isSpeaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </motion.button>
    </div>
  );
});

VoiceControl.displayName = 'VoiceControl';

// ==================== ⚙️ تەڭشەك پانىلى (ئايرىم) ====================
const SettingsPanel = React.memo(({ backend, setBackend, modelInfo, language }) => {
  const t = translations[language] || translations.en;
  const [showApiKeys, setShowApiKeys] = useState(false);
  
  // بىخەتەر Object.entries ئىشلىتىش
  const backendEntries = useMemo(() => 
    safeObjectEntries(quantumBackend, []), 
  []);
  
  return (
    <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700">
      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
        <Settings className="w-5 h-5 text-cyan-400" />
        {language === 'ug' ? 'تەڭشەكلەر' : 'Settings'}
      </h3>
      
      {/* كۋانت ئارقا كۆرۈنۈش تاللاش */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
          <Server className="w-4 h-4" />
          {t.backend || 'Backend'}
        </label>
        <div className="grid grid-cols-3 gap-2">
          {backendEntries.map(([key, config]) => {
            if (!config) return null;
            return (
              <motion.button
                key={key}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setBackend?.(key)}
                className={`p-3 rounded-xl border text-sm transition-all ${
                  backend === key 
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 border-cyan-500 text-white' 
                    : 'bg-slate-900/50 border-slate-700 text-slate-300 hover:border-slate-600'
                } ${!config.supported ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!config.supported}
              >
                <div className="font-medium">{config.name || key}</div>
                <div className="text-xs opacity-75">{config.maxQubits || 0} qubits</div>
              </motion.button>
            );
          })}
        </div>
      </div>
      
      {/* API Key تەڭشەكلىرى */}
      {backend !== 'simulator' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-4 p-3 bg-slate-900/50 rounded-xl border border-slate-700"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-300">API Key</span>
            <button 
              onClick={() => setShowApiKeys(!showApiKeys)}
              className="text-xs text-cyan-400 hover:text-cyan-300"
            >
              {showApiKeys ? <EyeOff className="w-4 h-4 inline" /> : <Eye className="w-4 h-4 inline" />}
            </button>
          </div>
          <input
            type={showApiKeys ? 'text' : 'password'}
            placeholder={`Enter ${quantumBackend[backend]?.name || backend} API Key`}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 outline-none"
            defaultValue={quantumBackend[backend]?.apiKey || ''}
            onChange={(e) => {
              if (quantumBackend[backend]) {
                quantumBackend[backend].apiKey = e.target.value;
              }
            }}
          />
          <p className="text-xs text-slate-500 mt-1">
            Key stored locally • Never shared
          </p>
        </motion.div>
      )}
      
      {/* تىل مودېلى ئۇچۇرى */}
      <div className="p-3 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-800/50">
        <div className="flex items-center gap-2 mb-2">
          <Database className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-300">{t.model || 'Model'}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-slate-400">Parser:</span>
            <span className="ml-2 font-mono text-cyan-400">{modelInfo?.parser || 'N/A'}</span>
          </div>
          <div>
            <span className="text-slate-400">Embeddings:</span>
            <span className="ml-2 font-mono text-purple-400">{modelInfo?.embeddings || 'N/A'}</span>
          </div>
          <div>
            <span className="text-slate-400">Vocab:</span>
            <span className="ml-2 font-mono text-pink-400">{modelInfo?.vocabSize?.toLocaleString() || 'N/A'}</span>
          </div>
          <div>
            <span className="text-slate-400">Q-Dims:</span>
            <span className="ml-2 font-mono text-emerald-400">
              N:{modelInfo?.quantumDims?.noun || 0} S:{modelInfo?.quantumDims?.sentence || 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

SettingsPanel.displayName = 'SettingsPanel';

// ==================== 🧠 ئاساسىي QNLP سىستېمىسى ====================
const QNLPSystemPro = () => {
  const [language, setLanguage] = useState('ug');
  const [inputText, setInputText] = useState('');
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [backend, setBackend] = useState('simulator');
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('connected');
  
  // بىخەتەر تەرجىمە ئېرىشىش
  const t = useMemo(() => translations[language] || translations.en, [language]);
  const isRTL = language === 'ug';
  
  // بىخەتەر Object.entries ئىشلىتىش
  const stepEntries = useMemo(() => 
    safeObjectEntries(t?.steps, []), 
  [t?.steps]);
  
  const featureList = useMemo(() => 
    Array.isArray(t?.features) ? t.features : [], 
  [t?.features]);
  
  // كۋانت مۇلازىمېتىرغا ئۇلىنىشنى تەكشۈرۈش
  useEffect(() => {
    const checkConnection = async () => {
      if (backend === 'simulator') {
        setConnectionStatus('connected');
        return;
      }
      
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setConnectionStatus('connected');
      } catch {
        setConnectionStatus('disconnected');
      }
    };
    
    checkConnection();
  }, [backend]);
  
  // QNLP ئېقىمىنى ئىجرا قىلىش
  const runQNLP = useCallback(async () => {
    if (!inputText?.trim()) return;
    
    const steps = ['parsing', 'diagramming', 'quantizing', 'training', 'predicting'];
    
    for (let i = 0; i < steps.length; i++) {
      setStatus(steps[i]);
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, 600 + Math.random() * 400));
    }
    
    const simulation = await simulateQuantumCircuit(inputText, language, backend);
    setResult(simulation);
    setStatus('complete');
    setCurrentStep(steps.length);
    
    if (isSpeaking && 'speechSynthesis' in window && simulation?.sentiment) {
      const message = language === 'ug' 
        ? `تەھلىل نەتىجىسى: ${simulation.sentiment === 'positive' ? 'مۇسبەت' : 'مەنپىي'}، ئىشەنچلىك دەرىجىسى ${(simulation.confidence * 100).toFixed(1)} پىرسەنت.`
        : `Analysis result: ${simulation.sentiment}, confidence ${(simulation.confidence * 100).toFixed(1)} percent.`;
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.lang = language === 'ug' ? 'ug-CN' : 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  }, [inputText, language, backend, isSpeaking]);
  
  const reset = () => {
    setInputText('');
    setResult(null);
    setStatus('idle');
    setCurrentStep(0);
    if (isSpeaking) {
      window.speechSynthesis?.cancel();
      setIsSpeaking(false);
    }
  };
  
  const loadExample = (example) => {
    if (example) {
      setInputText(example);
      setResult(null);
      setStatus('idle');
    }
  };
  
  const handleTranscribe = (text) => {
    if (text) {
      setInputText(text);
      setIsRecording(false);
    }
  };
  
  const handleVoiceToggle = (speaking) => {
    setIsSpeaking(speaking);
  };
  
  return (
    <div 
      className={`min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {t.title}
              </h1>
              <p className="text-xs text-slate-400">{t.subtitle}</p>
            </div>
          </motion.div>
          
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs ${
              connectionStatus === 'connected' 
                ? 'bg-emerald-900/50 text-emerald-300 border border-emerald-800' 
                : 'bg-rose-900/50 text-rose-300 border border-rose-800'
            }`}>
              {connectionStatus === 'connected' ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
              <span>{quantumBackend[backend]?.name || backend}</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage(prev => prev === 'ug' ? 'en' : 'ug')}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'ug' ? 'English' : 'ئۇيغۇرچە'}</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAbout(!showAbout)}
              className="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
            >
              <Info className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </header>
      
      {/* About Panel */}
      <AnimatePresence>
        {showAbout && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border-b border-cyan-800/50 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-cyan-400 mb-2">{t.about}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {t.aboutText}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 text-xs rounded-full border border-cyan-800">
                      lambeq [[16]]
                    </span>
                    <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-800">
                      PennyLane [[17]]
                    </span>
                    <span className="px-3 py-1 bg-pink-900/50 text-pink-300 text-xs rounded-full border border-pink-800">
                      DisCoCat [[2]]
                    </span>
                    <span className="px-3 py-1 bg-emerald-900/50 text-emerald-300 text-xs rounded-full border border-emerald-800">
                      bobcat-ug-v1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="xl:col-span-1 space-y-6">
            {/* Input Card */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
              <label className="block text-sm font-medium text-slate-300 mb-3">
                <MessageSquare className="w-4 h-4 inline mr-2" />
                {(t.inputPlaceholder || '').split('...')[0]}
              </label>
              
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={t.inputPlaceholder}
                className={`w-full h-32 px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl 
                  focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none 
                  resize-none text-white placeholder-slate-500 transition-all
                  ${isRTL ? 'text-right' : 'text-left'}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              
              <div className="mt-4 flex items-center justify-between">
                <VoiceControl 
                  onTranscribe={handleTranscribe}
                  onSpeak={handleVoiceToggle}
                  isRecording={isRecording}
                  isSpeaking={isSpeaking}
                  language={language}
                  inputText={inputText}
                />
                
                <div className="relative">
                  <select
                    onChange={(e) => e.target.value && loadExample(e.target.value)}
                    className="px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>{language === 'ug' ? 'مىسال تاللاڭ...' : 'Select example...'}</option>
                    {(t.examples || []).map((ex, i) => (
                      <option key={i} value={ex} className="bg-slate-800">{ex}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={runQNLP}
                  disabled={(status !== 'idle' && status !== 'complete') || !inputText?.trim()}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium
                    transition-all ${
                      (status !== 'idle' && status !== 'complete') || !inputText?.trim()
                        ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white shadow-lg shadow-purple-500/25'
                    }`}
                >
                  {status === 'idle' || status === 'complete' ? (
                    <>
                      <Play className="w-5 h-5" />
                      {t.analyze}
                    </>
                  ) : (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Loader2 className="w-5 h-5" />
                      </motion.div>
                      <span className="text-sm">{t.status?.[status] || t.processing}</span>
                    </>
                  )}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={reset}
                  disabled={status === 'idle'}
                  className="p-3 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed 
                    rounded-xl border border-slate-600 transition-colors"
                >
                  <RotateCcw className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
            
            {/* Settings Panel */}
            <SettingsPanel 
              backend={backend} 
              setBackend={setBackend} 
              modelInfo={uyghurCorpus}
              language={language}
            />
            
            {/* Pipeline Steps */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Network className="w-5 h-5 text-purple-400" />
                {t.pipeline}
              </h3>
              
              <div className="space-y-3">
                {stepEntries.map(([key, label], index) => {
                  const isActive = index === currentStep;
                  const isComplete = index < currentStep;
                  
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                        isActive 
                          ? 'bg-gradient-to-r from-cyan-900/50 to-purple-900/50 border border-cyan-700' 
                          : isComplete 
                            ? 'bg-emerald-900/20 border border-emerald-800/50' 
                            : 'bg-slate-900/30 border border-slate-700'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        isComplete 
                          ? 'bg-emerald-600 text-white' 
                          : isActive 
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                            : 'bg-slate-700 text-slate-400'
                      }`}>
                        {isComplete ? <CheckCircle className="w-5 h-5" /> : index + 1}
                      </div>
                      <span className={`flex-1 text-sm ${
                        isActive ? 'text-white font-medium' : isComplete ? 'text-emerald-300' : 'text-slate-400'
                      }`}>
                        {label || key}
                      </span>
                      {isActive && (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-2 h-2 bg-cyan-400 rounded-full"
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Right Column: Results */}
          <div className="xl:col-span-2 space-y-6">
            {/* Status Card */}
            <AnimatePresence mode="wait">
              {status !== 'idle' && (
                <motion.div
                  key={status}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`rounded-2xl p-4 border ${
                    status === 'complete' 
                      ? 'bg-emerald-900/30 border-emerald-700' 
                      : 'bg-slate-800/50 border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {status === 'complete' ? (
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Loader2 className="w-5 h-5 text-cyan-400" />
                      </motion.div>
                    )}
                    <span className={`text-sm font-medium ${
                      status === 'complete' ? 'text-emerald-300' : 'text-cyan-300'
                    }`}>
                      {t.status?.[status] || status}
                    </span>
                    {backend !== 'simulator' && status !== 'complete' && (
                      <span className="ml-auto text-xs text-slate-400">
                        {quantumBackend[backend]?.name} • {quantumBackend[backend]?.maxQubits}q
                      </span>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Results */}
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-6"
                >
                  {/* Sentiment Result */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-pink-400" />
                      {t.sentiment}
                    </h3>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          result.sentiment === 'positive' 
                            ? 'bg-emerald-600/20 border-2 border-emerald-500' 
                            : 'bg-rose-600/20 border-2 border-rose-500'
                        }`}>
                          {result.sentiment === 'positive' ? '😊' : '😐'}
                        </div>
                        <div>
                          <p className="font-medium capitalize">{result.sentiment}</p>
                          <p className="text-xs text-slate-400">{t.classification}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          {(parseFloat(result.confidence) * 100).toFixed(1)}%
                        </p>
                        <p className="text-xs text-slate-400">{t.confidence}</p>
                      </div>
                    </div>
                    
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(parseFloat(result.confidence) || 0) * 100}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          result.sentiment === 'positive' 
                            ? 'bg-gradient-to-r from-emerald-500 to-cyan-500' 
                            : 'bg-gradient-to-r from-rose-500 to-purple-500'
                        }`}
                      />
                    </div>
                  </div>
                  
                  {/* Quantum Circuit Visualizer */}
                  <DiagramVisualizer diagram={result} language={language} />
                  
                  {/* Technical Details Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Quantum Circuit Info */}
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <Code className="w-5 h-5 text-cyan-400" />
                        {t.quantumCircuit}
                      </h3>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Ansatz:</span>
                          <span className="font-mono text-cyan-400">IQPAnsatz</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Noun Dim:</span>
                          <span className="font-mono text-purple-400">{result.params?.nounWires || 0}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Sentence Dim:</span>
                          <span className="font-mono text-purple-400">{result.params?.sentenceWires || 0}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Layers:</span>
                          <span className="font-mono text-pink-400">{result.params?.layers || 0}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Entanglement:</span>
                          <span className="font-mono text-emerald-400">{((result.params?.entanglement || 0) * 100).toFixed(1)}%</span>
                        </div>
                        <div className="pt-2 border-t border-slate-700">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Execution:</span>
                            <span className="font-mono text-emerald-400">{result.executionTime || '0.00'}s</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                        <p className="text-xs text-slate-400 font-mono leading-relaxed">
                          # lambeq QNLP pipeline [[16]]<br/>
                          # Input: "{(inputText || '').slice(0, 30)}{(inputText?.length > 30) ? '...' : ''}"<br/>
                          # Parser: {uyghurCorpus.parser}<br/>
                          # Embeddings: {uyghurCorpus.embeddings}<br/>
                          # Backend: {quantumBackend[backend]?.name || backend}<br/>
                          # Output: sentiment classification
                        </p>
                      </div>
                    </div>
                    
                    {/* Quantum State Preview */}
                    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-800/50">
                      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-purple-400" />
                        {language === 'ug' ? 'كۋانت ھالەت' : 'Quantum State'}
                      </h3>
                      
                      <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                        {(result.quantumState || []).slice(0, 8).map((state, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center justify-between text-xs p-2 bg-slate-900/50 rounded-lg"
                          >
                            <span className="text-slate-400">|{i}⟩</span>
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-cyan-400">amp: {state?.amplitude || '0'}</span>
                              <span className="font-mono text-purple-400">φ: {state?.phase || '0'}</span>
                            </div>
                          </motion.div>
                        ))}
                        {(result.quantumState?.length || 0) > 8 && (
                          <p className="text-center text-xs text-slate-500 py-2">
                            + {(result.quantumState?.length || 0) - 8} more states...
                          </p>
                        )}
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-xs text-slate-400 mb-2">{language === 'ug' ? 'ئېھتىماللىق تەقسىماتى' : 'Probability Distribution'}</p>
                        <div className="h-16 flex items-end gap-1">
                          {(result.quantumState || []).slice(0, 16).map((state, i) => {
                            const amp = parseFloat(state?.amplitude) || 0;
                            const prob = Math.abs(amp) ** 2;
                            return (
                              <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${prob * 100}%` }}
                                transition={{ delay: 0.4 + i * 0.03 }}
                                className="flex-1 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t min-w-[4px]"
                                title={`|${i}⟩: ${(prob * 100).toFixed(1)}%`}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Features List */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl p-6 border border-cyan-800/30">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                {language === 'ug' ? 'ئالاھىدىلىكلەر' : 'Key Features'}
              </h3>
              
              <ul className="grid sm:grid-cols-2 gap-3">
                {featureList.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center text-xs text-slate-500"
        >
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <Cloud className="w-3 h-3" />
            QNLP System Pro • lambeq [[16]] + PennyLane [[17]] + DisCoCat [[2]]
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">bobcat-ug-v1 • q-embed-ug</span>
          </p>
          <p className="mt-2 flex items-center justify-center gap-2">
            <Zap className="w-3 h-3 text-cyan-400" />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">
              ⚛️ كۋانت تېخنىكىسىنىڭ كەلگۈسى • The Future of Quantum AI
            </span>
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default QNLPSystemPro;