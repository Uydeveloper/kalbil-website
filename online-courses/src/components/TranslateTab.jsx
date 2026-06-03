import React, { useContext, useRef, useState } from 'react';
import { ArrowLeftRight, RotateCcw, Mic, Volume2, Languages } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const TranslateTab = ({ 
  inputText, 
  setInputText, 
  outputText, 
  setOutputText, 
  loading, 
  sourceLang, 
  setSourceLang, 
  targetLang, 
  setTargetLang, 
  handleTranslate 
}) => {
  // تېما كۇنتېكىستىنى بىخەتەر ئوقۇش
  let darkMode = false;
  try {
    const themeContext = useTheme();
    darkMode = themeContext?.darkMode;
  } catch (e) {
    darkMode = false;
  }

  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  // تىل ئالماشتۇرۇش فۇنكسىيەسى
  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setInputText(outputText);
    setOutputText(inputText);
  };

  const clearAll = () => {
    setInputText('');
    setOutputText('');
  };

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'ug', label: 'ئۇيغۇرچە' },
    { value: 'zh', label: '中文' }
  ];

  // ئاۋاز كىرگۈزۈش (STT)
  const startListening = () => {
    if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
      alert(sourceLang === 'ug' ? 'ئاۋاز كىرگۈزۈش ئۈچۈن بۇ براۋزېر ئىشلىتىلمەيدۇ.' : 'Speech recognition is not supported in this browser.');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = false;
    recognitionRef.current.lang = sourceLang === 'ug' ? 'ug' : sourceLang === 'zh' ? 'zh-CN' : 'en-US';

    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
    };

    recognitionRef.current.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current.start();
    setIsListening(true);
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  // ئاۋاز بېرىش (TTS)
  const speakText = (text, lang) => {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'ug' ? 'ug' : lang === 'zh' ? 'zh-CN' : 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  // زامانىۋى دىزاين رەڭلىرى
  const bgClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100';
  const textClass = darkMode ? 'text-white' : 'text-gray-800';
  const labelClass = darkMode ? 'text-gray-300' : 'text-gray-600';
  const inputClass = darkMode 
    ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:ring-teal-500' 
    : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-teal-500';

  const isRtl = sourceLang === 'ug';

  return (
    <div className={`w-full max-w-4xl mx-auto rounded-2xl shadow-xl p-5 md:p-8 border ${bgClass} transition-all duration-300`} dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* 1. باشلىق قىسمى */}
      <div className="flex items-center gap-3 mb-6 border-b pb-4 border-gray-100 dark:border-gray-700">
        <div className={`p-2.5 rounded-xl ${darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-50 text-teal-600'}`}>
          <Languages className="w-6 h-6" />
        </div>
        <div>
          <h2 className={`text-xl md:text-2xl font-bold font-uyghur tracking-wide ${textClass}`}>
            {isRtl ? 'AI تەرجىمان' : 'AI-Powered Translation'}
          </h2>
          <p className="text-xs text-gray-400 mt-0.5">KelBiL Smart Translation System</p>
        </div>
      </div>

      {/* 2. تىل تاللاش بارلىق قوراللار بىلەن */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        {/* ئەسلى تىل */}
        <div className="flex-1">
          <label className={`block text-sm font-medium mb-2 font-uyghur ${labelClass}`}>
            {isRtl ? 'مەنبە تىل' : 'Source Language'}
          </label>
          <select
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
            className={`w-full p-3 font-uyghur rounded-xl border focus:outline-none focus:ring-2 shadow-xs transition-all ${inputClass}`}
          >
            {languageOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* ئالماشتۇرۇش كۇنۇپكىسى */}
        <div className="flex justify-center items-center pt-4 sm:pt-6">
          <button
            onClick={swapLanguages}
            className={`p-3 rounded-xl hover:scale-105 bg-gray-100 dark:bg-gray-700/50 hover:bg-teal-500/10 ${darkMode ? 'text-teal-400' : 'text-teal-600'} transition-all shadow-xs cursor-pointer`}
            title="Swap Languages"
          >
            <ArrowLeftRight className="w-5 h-5 max-sm:rotate-90" />
          </button>
        </div>

        {/* نىشان تىل */}
        <div className="flex-1">
          <label className={`block text-sm font-medium mb-2 font-uyghur ${labelClass}`}>
            {isRtl ? 'نىشان تىل' : 'Target Language'}
          </label>
          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className={`w-full p-3 font-uyghur rounded-xl border focus:outline-none focus:ring-2 shadow-xs transition-all ${inputClass}`}
          >
            {languageOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* 3. كىرگۈزۈش رايونى ۋە ياردەمچى كۇنۇپكىلار */}
      <div className="mb-5 relative">
        <div className="flex justify-between items-center mb-2">
          <label className={`text-sm font-medium font-uyghur ${labelClass}`}>
            {isRtl ? 'تېكىست كىرگۈزۈڭ' : 'Enter Text'}
          </label>
          
          {/* قوراللار بىر قۇردا رەتلىك تۇرىدۇ */}
          <div className="flex gap-2">
            {/* مىكىروفون كۇنۇپكىسى */}
            <button
              onClick={isListening ? stopListening : startListening}
              className={`p-2 rounded-lg transition-all cursor-pointer ${
                isListening 
                  ? 'bg-red-500 text-white animate-pulse shadow-md' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-250'
              }`}
              title={isListening ? "Stop Listening" : "Voice Input"}
            >
              <Mic className="w-4 h-4" />
            </button>

            {/* تازىلاش كۇنۇپكىسى */}
            <button
              onClick={clearAll}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all cursor-pointer"
              title="Clear Input"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={isRtl ? 'بۇ يەرگە مەزمۇن يېزىڭ...' : 'Type or paste your text here...'}
          className={`w-full min-h-[150px] p-4 rounded-xl border focus:outline-none focus:ring-2 text-lg shadow-inner resize-none font-uyghur ${inputClass}`}
        />
      </div>

      {/* 4. تەرجىمە قىلىش كۇنۇپكىسى */}
      <button
        onClick={handleTranslate}
        disabled={loading || !inputText.trim()}
        className={`w-full py-4 rounded-xl font-bold font-uyghur text-lg text-white flex items-center justify-center gap-2 transition-all cursor-pointer ${
          loading || !inputText.trim()
            ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed shadow-none'
            : 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 shadow-md hover:shadow-xl transform hover:-translate-y-0.5'
        }`}
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>{isRtl ? 'تەرجىمە قىلىنىۋاتىدۇ...' : 'Translating...'}</span>
          </>
        ) : (
          <span>{isRtl ? 'تەرجىمە قىلىش' : 'Translate'}</span>
        )}
      </button>

      {/* 5. نىشان جاۋاب رايونى (پەقەت جاۋاب كەلگەندە چىقىدۇ) */}
      {outputText && (
        <div 
          className={`mt-6 p-5 rounded-xl border transition-all duration-300 ${
            darkMode ? 'bg-gray-900/40 border-gray-700/80' : 'bg-teal-50/20 border-teal-100'
          }`}
          dir={targetLang === 'ug' ? 'rtl' : 'ltr'}
        >
          <div className="flex justify-between items-center mb-3">
            <label className={`text-sm font-medium font-uyghur ${labelClass}`}>
              {targetLang === 'ug' ? 'تەرجىمە نەتىجىسى' : 'Translation Result'}
            </label>
            <span className={`text-xs px-2.5 py-1 rounded-md font-medium ${
              targetLang === 'ug' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
              targetLang === 'zh' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' :
              'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
            }`}>
              {languageOptions.find(l => l.value === targetLang)?.label}
            </span>
          </div>
          
          <div className={`whitespace-pre-wrap leading-relaxed text-lg font-uyghur min-h-[60px] ${textClass}`}>
            {outputText}
          </div>

          {/* ئوقۇپ بېرىش كۇنۇپكىسى */}
          <div className="mt-3 flex justify-end border-t pt-3 border-gray-100 dark:border-gray-800">
            <button
              onClick={() => speakText(outputText, targetLang)}
              className={`p-2 rounded-lg hover:bg-teal-500/10 ${darkMode ? 'text-teal-400' : 'text-teal-600'} transition-all cursor-pointer`}
              title="Listen Translation"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TranslateTab;