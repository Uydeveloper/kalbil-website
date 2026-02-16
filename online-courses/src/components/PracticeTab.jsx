// src/components/PracticeTab.jsx
import React, { useState, useEffect } from 'react';
import { Pencil, Award, Lightbulb, CheckCircle, XCircle, Code, Play, BookOpen, Save, RefreshCw, AlertTriangle } from 'lucide-react';

const PracticeTab = ({ 
  writingText, 
  setWritingText, 
  outputText, 
  setOutputText, 
  loading, 
  practiceWriting, 
  quizScore, 
  quizTotal, 
  currentQuizQuestion, 
  userAnswer, 
  setUserAnswer, 
  generateQuiz, 
  checkQuizAnswer,
  savedCodeHistory, // ساقلانغان كود تارىخى
  saveCurrentCode, // جەرياندىكى كودنى ساقلاش
  clearHistory,   // تارىخنى ئочۇش
}) => {
  const [activeTab, setActiveTab] = useState('writing'); // "writing" | "quiz" | "history"
  const [isCodeEditor, setIsCodeEditor] = useState(false); // كود رەدaktور ئېكرانىنى ئېچىش
  const [previewMode, setPreviewMode] = useState(false); // GUI پىششىقلىش رەجىمى

  // كودنى AI غا يوللاش ئۈچۈن ئىشلىتىلىدۇ
  const handleRunCode = async () => {
    if (!writingText.trim()) return;
    await practiceWriting(); // AI تەھلىلىگە يوللاش
    setPreviewMode(true); // نەتىجىنى كۆرۈش رەجىمىگە ئۆتۈش
  };

  // كودنى ساقلاش (تارىخىغا قوشۇش)
  const handleSaveCode = () => {
    if (writingText.trim()) {
      saveCurrentCode(writingText);
      alert("✅ كود ساقلاندى!");
    }
  };

  // تارىخنى ئوچۇش
  const handleClearHistory = () => {
    if (window.confirm("ھەممە ساقلانغان كودلارنى ئوچۇشنى ئىلگىرى سۈرۈڭ؟")) {
      clearHistory();
    }
  };

  // كود رەدaktورىنى ئېچىش
  const toggleCodeEditor = () => {
    setIsCodeEditor(!isCodeEditor);
  };

  // GUI پىششىقلىشنى ئېچىش
  const togglePreview = () => {
    setPreviewMode(!previewMode);
  };

  // كودنى ئېكراندا كۆرسىتىش (AI نەتىجىسى بولسا)
  const renderOutput = () => {
    if (!outputText) return <p className="text-gray-500 italic">نەتىجە يوق...</p>;

    // AI نىڭ نەتىجىسىنى تەرجىمە قىلىش ۋە ئېكراندا كۆرسىتىش
    try {
      const parsed = JSON.parse(outputText);
      return (
        <div className="space-y-4">
          {parsed.accuracy && (
            <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
              <strong>✅ دەقىقلىق:</strong> {parsed.accuracy}%
            </div>
          )}
          {parsed.suggestions && (
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded">
              <strong>💡 تەكلىپلەر:</strong>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                {parsed.suggestions.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          )}
          {parsed.translation && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
              <strong>🌐 تەرجىمە:</strong> {parsed.translation}
            </div>
          )}
          {parsed.executionResult && (
            <div className="bg-purple-50 border-l-4 border-purple-500 p-3 rounded">
              <strong>▶️ ئىجرا نەتىجىسى:</strong>
              <pre className="mt-2 bg-white p-3 rounded text-sm overflow-x-auto">{parsed.executionResult}</pre>
            </div>
          )}
        </div>
      );
    } catch (e) {
      // JSON ئەمەس بولسا، ئادەتتىكى مەتنى كۆرسىتىش
      return <pre className="bg-white p-4 rounded-lg border border-gray-200 whitespace-pre-wrap">{outputText}</pre>;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-7xl mx-auto">
      {/* سەرلىق */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
        <Code className="w-8 h-8 text-blue-600" />
        📝 Python پايسان مەشىقى ۋە ئىمتىھان
      </h2>

      {/* تەبلىر */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('writing')}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'writing'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          🖋️ پايسان مەشىقى
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'quiz'
              ? 'border-b-2 border-purple-600 text-purple-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          🏆 ئىمتىھان
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'history'
              ? 'border-b-2 border-green-600 text-green-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          📚 تارىخ
        </button>
      </div>

      {/* تەب مەزمۇنى */}
      {activeTab === 'writing' && (
        <div className="grid lg:grid-cols-2 gap-8">
          {/* سول تەرەپ — كود رەدaktورى */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 p-6 shadow-sm h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Pencil className="w-7 h-7 text-green-700" />
                <h3 className="text-xl font-bold text-green-800">Python كودىنى يېزىڭ</h3>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                Python كودىنى يېزىپ، AI نىڭ ياردەمى بىلەن سىن ھەرىپ، گرامماتىكا، ئىجرا نەتىجىسى ۋە GUI كۆرۈنۈشىنى تەكشۈرۈڭ.
              </p>

              <textarea
                value={writingText}
                onChange={(e) => setWritingText(e.target.value)}
                placeholder="Python كودىنى بۇ يەرگە يېزىڭ... مەسىلەن: print('Hello World')"
                className="w-full flex-1 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-lg font-mono bg-white"
                rows="10"
                spellCheck="false"
                dir="ltr"
                lang="en"
              />

              <div className="flex gap-2 mt-4">
                <button
                  onClick={handleRunCode}
                  disabled={loading || !writingText?.trim()}
                  className={`py-2 px-4 rounded-lg font-bold text-sm transition-all ${
                    loading || !writingText?.trim()
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-md'
                  }`}
                >
                  {loading ? 'ئىجرا قىلىنىۋاتىدۇ...' : <><Play className="inline mr-1 w-4 h-4" /> ئىجرا قىلىش</>}
                </button>
                <button
                  onClick={handleSaveCode}
                  disabled={!writingText?.trim()}
                  className={`py-2 px-4 rounded-lg font-bold text-sm transition-all ${
                    !writingText?.trim()
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  <Save className="inline mr-1 w-4 h-4" /> ساقلاش
                </button>
                <button
                  onClick={togglePreview}
                  className={`py-2 px-4 rounded-lg font-bold text-sm transition-all ${
                    previewMode
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Lightbulb className="inline mr-1 w-4 h-4" /> GUI كۆرۈش
                </button>
              </div>
            </div>
          </div>

          {/* ئوڭ تەرەپ — نەتىجە ۋە AI تەلىپى */}
          <div className="flex flex-col gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 p-6 shadow-sm flex-1">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-7 h-7 text-blue-700" />
                <h3 className="text-xl font-bold text-blue-800">AI نەتىجىسى</h3>
              </div>
              {loading ? (
                <div className="flex justify-center items-center py-10">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="bg-white p-4 rounded-lg border border-blue-100 min-h-[200px]">
                  {renderOutput()}
                </div>
              )}
            </div>

            {/* GUI پىششىقلىش ئېكرانى (ئەگەر ئېچىلسا) */}
            {previewMode && (
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-7 h-7 text-yellow-700" />
                  <h3 className="text-xl font-bold text-yellow-800">GUI پىششىقلىش</h3>
                </div>
                <div className="bg-white p-4 rounded-lg border border-yellow-100 min-h-[150px]">
                  {outputText ? (
                    <div className="text-center text-gray-700">
                      <AlertTriangle className="inline mr-2 text-yellow-500" />
                      GUI كۆرۈنۈشى AI نىڭ نەتىجىسىگە ئاساسەن ياسالىدۇ. شۇنداقلا، كودنى ئىجرا قىلغاندىن كېيىن GUI نى كۆرۈش مۇمكىن.
                    </div>
                  ) : (
                    <div className="text-center text-gray-500">
                      <BookOpen className="inline mr-2 w-6 h-6" />
                      كودنى يېزىپ، "ئىجرا قىلىش" نى بېسىڭ.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'quiz' && (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-7 h-7 text-purple-700" />
            <h3 className="text-xl font-bold text-purple-800">Python سۇئال-جاۋاب ئىمتىھانى</h3>
          </div>
          <p className="text-gray-700 mb-4 text-sm">
            AI تەييارلىغان سۇئاللارغا جاۋاب بېرىپ، پايسان بىلىمىڭىزنى سىناپ بېقىڭ.
          </p>

          {!currentQuizQuestion ? (
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-purple-100">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">نەتىجىڭىز:</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">{quizScore} / {quizTotal || 0}</div>
                    {quizTotal > 0 && (
                      <div className="text-sm text-gray-600 mt-1">
                        توغرا نىسبىتى: <span className="font-bold">{Math.round((quizScore / quizTotal) * 100)}%</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={generateQuiz}
                disabled={loading}
                className={`w-full py-3 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] ${
                  loading
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:shadow-lg'
                }`}
              >
                {loading ? 'سۇئال ياسىلىۋاتىدۇ...' : '➡️ يېڭى سۇئال باشلاش'}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-purple-100">
                <p className="text-gray-800 font-medium text-lg mb-4">
                  <Lightbulb className="inline mr-2 text-yellow-500" />
                  {currentQuizQuestion.question}
                </p>
                <div className="space-y-3">
                  {currentQuizQuestion.options?.map((option, idx) => (
                    <label 
                      key={idx} 
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                        userAnswer === String(idx)
                          ? 'border-purple-400 bg-purple-50'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="quiz"
                        value={idx}
                        checked={userAnswer === String(idx)}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        className="w-4 h-4 text-purple-600 accent-purple-600"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button
                onClick={checkQuizAnswer}
                disabled={userAnswer === '' || userAnswer === null}
                className={`w-full py-3 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] ${
                  userAnswer === '' || userAnswer === null
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:shadow-lg'
                }`}
              >
                جاۋابىمنى تەكشۈر
              </button>
            </div>
          )}
        </div>
      )}

      {activeTab === 'history' && (
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border-2 border-green-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-7 h-7 text-green-700" />
            <h3 className="text-xl font-bold text-green-800">ساقلانغان كود تارىخى</h3>
          </div>
          <p className="text-gray-700 mb-4 text-sm">
            ئۆتۈپ كەتكەن كودلىرىڭىزنى كۆرۈپ، قايتا ئىجرا قىلىشىڭىز مۇمكىن.
          </p>

          {savedCodeHistory.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              <BookOpen className="mx-auto w-12 h-12 mb-3 opacity-50" />
              ھىچقانداق كود ساقلانمىغان.
            </div>
          ) : (
            <div className="space-y-4">
              {savedCodeHistory.map((code, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-gray-500">Кود #{idx + 1}</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setWritingText(code);
                          setActiveTab('writing');
                        }}
                        className="text-blue-600 hover:text-blue-800 text-xs"
                      >
                        <RefreshCw className="inline w-4 h-4 mr-1" /> قايتا يېزىش
                      </button>
                      <button
                        onClick={() => {
                          setWritingText(code);
                          handleRunCode();
                        }}
                        className="text-green-600 hover:text-green-800 text-xs"
                      >
                        <Play className="inline w-4 h-4 mr-1" /> ئىجرا قىلىش
                      </button>
                    </div>
                  </div>
                  <pre className="bg-gray-50 p-3 rounded text-sm overflow-x-auto">{code}</pre>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleClearHistory}
              className="text-red-600 hover:text-red-800 text-sm font-medium"
            >
              <XCircle className="inline mr-1 w-4 h-4" /> ھەممە كودلارنى ئوچۇش
            </button>
          </div>
        </div>
      )}

      {/* قىسقىچە ئۇنۇملۇق ھىنلەتكۈچ */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        💡 نەزەردە تۇتۇڭ: AI نىڭ تەلىپ-تەكلىفى ئىشەنچلىك بولسىمۇ، ئۆز ئۆگىتۇچىڭىز بىلەن تالاشىشنى ئۇنۇتماڭ.
      </div>
    </div>
  );
};

export default PracticeTab;