import React, { useContext, useRef, useState } from 'react';
import { ArrowDown, Languages, RotateCcw, Mic, Volume2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext'; // ئەگەر تېما كۇنتېكىستى بولمىسا، بۇ قۇرۇلمىنى ئۆچۈرۈڭ

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
  // تېما ئۈچۈن (ئىختىيارى)
  const { darkMode } = useTheme ? useTheme() : { darkMode: false };

  // مىكىروفون ئۈچۈن state
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  // تىل ئالماشتۇرۇش
  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setInputText(outputText);
    setOutputText(inputText);
  };

  // تازىلاش
  const clearAll = () => {
    setInputText('');
    setOutputText('');
  };

  // تىل تاللانمىلىرى
  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'ug', label: 'ئۇيغۇرچە' },
    { value: 'zh', label: '中文' }
  ];

  // مىكىروفون بىلەن ئاۋاز كىرگۈزۈش
  const startListening = () => {
    if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
      alert('ئاۋاز كىرگۈزۈش ئۈچۈن بۇ براۋزېر ئىشلىتىلمەيدۇ.');
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
      console.error('ئاۋاز كىرگۈزۈش خاتالىقى:', event.error);
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

  // خەتنى ئاۋازغا ئايلاندۇرۇش (TTS)
  const speakText = (text, lang) => {
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'ug' ? 'ug' : lang === 'zh' ? 'zh-CN' : 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  };

  // دىزاين ئۈچۈن رەڭ كىلاس
  const bgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-white' : 'text-gray-800';
  const labelClass = darkMode ? 'text-gray-300' : 'text-gray-700';
  const inputClass = darkMode 
    ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500' 
    : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500';

  return (
    <div className={`${bgClass} rounded-2xl shadow-xl p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all`}>
      {/* باشلىق */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 rounded-lg ${darkMode ? 'bg-teal-900/50' : 'bg-teal-100'}`}>
          <Languages className="w-6 h-6 text-teal-600 dark:text-teal-400" />
        </div>
        <h2 className={`text-2xl font-bold ${textClass}`}>AI-Powered Translation</h2>
      </div>

      {/* تىل تاللاش — يانمۇ يان */}
      <div className="flex items-end gap-4 mb-6">
        <div className="flex-1">
          <label className={`block text-sm font-medium mb-2 ${labelClass}`}>From</label>
          <select
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
            className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-teal-500 ${inputClass}`}
          >
            {languageOptions.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* ئاۋۇ ئالماشتۇرۇش ئىسترىلكىسى */}
        <button
          onClick={swapLanguages}
          className={`p-3 rounded-full hover:bg-teal-500/10 ${darkMode ? 'text-teal-400' : 'text-teal-600'} transition-colors`}
          title="Swap languages"
        >
          <ArrowDown className="w-5 h-5 rotate-90" />
        </button>

        <div className="flex-1">
          <label className={`block text-sm font-medium mb-2 ${labelClass}`}>To</label>
          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-teal-500 ${inputClass}`}
          >
            {languageOptions.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* مىكىروفون قوشۇش */}
        <button
          onClick={isListening ? stopListening : startListening}
          className={`p-3 rounded-full ${
            isListening 
              ? 'bg-red-500 text-white animate-pulse' 
              : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'}`
          } hover:bg-red-600 transition-colors`}
          title={isListening ? "Stop Listening" : "Start Voice Input"}
        >
          <Mic className="w-5 h-5" />
        </button>

        {/* تازىلاش */}
        <button
          onClick={clearAll}
          className={`p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors`}
          title="Clear all"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* كىرگۈزۈش مەيدانى */}
      <div className="mb-6">
        <label className={`block text-sm font-medium mb-2 ${labelClass}`}>Enter text</label>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={`e.g., "Hello, how are you?" → "ياخشىمۇسىز؟"`}
          className={`w-full min-h-[140px] p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none ${inputClass}`}
          dir={sourceLang === 'ug' ? 'rtl' : 'ltr'}
        />
      </div>

      {/* سوئال يوللاش كۇنۇپكىسى */}
      <button
        onClick={handleTranslate}
        disabled={loading || !inputText.trim()}
        className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${
          loading || !inputText.trim()
            ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
            : 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
        }`}
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Translating...
          </>
        ) : (
          'Translate'
        )}
      </button>

      {/* جاۋاب مەيدانى */}
      {outputText && (
        <div className={`mt-8 p-5 rounded-xl border ${darkMode ? 'bg-gray-900/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
          <div className="flex justify-between items-center mb-3">
            <label className={`block text-sm font-medium ${labelClass}`}>Translation</label>
            <span className={`text-xs px-2 py-1 rounded-full ${
              targetLang === 'ug' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
              targetLang === 'zh' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' :
              'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
            }`}>
              {languageOptions.find(l => l.value === targetLang)?.label}
            </span>
          </div>
          <div 
            className={`whitespace-pre-wrap leading-relaxed ${textClass}`}
            dir={targetLang === 'ug' ? 'rtl' : 'ltr'}
          >
            {outputText}
          </div>
          {/* خەتنى ئاۋازغا ئايلاندۇرۇش كۇنۇپكىسى */}
          <div className="mt-3 flex justify-end">
            <button
              onClick={() => speakText(outputText, targetLang)}
              className={`p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 ${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}
              title="Speak translation"
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