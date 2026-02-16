// src/components/learn-modules/MathModule.jsx
import React, { useState } from 'react';

const MathModule = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // ماتماتىكا تېستى سۇئاللىرى
  const quizQuestions = [
    {
      question: "3 + 5 × 2 نەتىجىسى قانچە؟",
      options: ["13", "16", "10", "11"],
      correct: 0,
      explanation: "ئىشلىتىش تەرتىپى: ئاۋۋال كۆپەيتىش (5×2=10)، ئاندىن قوشۇش (3+10=13)"
    },
    {
      question: "x + 7 = 15 بولسا، x نىڭ قىممىتى قانچە؟",
      options: ["6", "7", "8", "9"],
      correct: 2,
      explanation: "15 - 7 = 8، شۇڭا x = 8"
    },
    {
      question: "رادىئۇسى 4 سانتىمېتىر بولغان دۆمەنىڭ يۈزى قانچە؟ (π=3.14)",
      options: ["25.12 سم²", "50.24 سم²", "12.56 سم²", "37.68 سم²"],
      correct: 1,
      explanation: "فورمۇلا: πr² = 3.14 × 4² = 3.14 × 16 = 50.24 سم²"
    },
    {
      question: "تۆت بۇلۇڭنىڭ ئۇزۇنلۇقى 8 م، كەڭلىكى 5 م بولسا، يۈزى قانچە؟",
      options: ["13 م²", "26 م²", "40 م²", "35 م²"],
      correct: 2,
      explanation: "فورمۇلا: ئۇزۇنلۇق × كەڭلىك = 8 × 5 = 40 م²"
    },
    {
      question: "2³ + 4² نەتىجىسى قانچە؟",
      options: ["12", "20", "24", "18"],
      correct: 2,
      explanation: "2³ = 8، 4² = 16، 8 + 16 = 24"
    }
  ];

  // 🌈 كەلبىل كەر جەدۋىلى ئۈچۈن رەڭلىك تۈپلەر
  const multiplicationColors = [
    '#FF6B6B', // 1x
    '#FF9F43', // 2x
    '#FFE066', // 3x
    '#66D988', // 4x
    '#66C5FF', // 5x
    '#A366FF', // 6x
    '#FF6B6B', // 7x
    '#FF9F43', // 8x
    '#FFE066', // 9x
    '#66D988', // 10x
    '#66C5FF', // 11x
    '#A366FF'  // 12x
  ];

  // 📊 كەلبىل كەر جەدۋىلى مەلۇماتىنى ياساش (4 قىسىمدا)
  const generateMultiplicationTable = () => {
    const table = [];
    for (let i = 1; i <= 12; i++) {
      const column = {
        title: `${i}x`,
        color: multiplicationColors[i - 1],
        rows: []
      };
      for (let j = 1; j <= 12; j++) {
        column.rows.push(`${i} x ${j} = ${i * j}`);
      }
      table.push(column);
    }
    return table;
  };

  // 🧩 جەدۋەلنى 4 قىسىمدا بۆلۈش
  const splitIntoQuadrants = (table) => {
    return [
      table.slice(0, 3),   // 1x, 2x, 3x
      table.slice(3, 6),   // 4x, 5x, 6x
      table.slice(6, 9),   // 7x, 8x, 9x
      table.slice(9, 12)   // 10x, 11x, 12x
    ];
  };

  const sections = {
    intro: {
      title: '🧮 ماتماتىكا — سان ۋە مەنتىقىنىڭ دۇنياسى',
      description: 'ماتماتىكا بىلىم ئىلمىنىڭ ئاساسى بولۇپ، تۇرمۇش ۋە ئىلىم-پەندە كەڭ قوللىنىلىدۇ.',
      icon: '🎯',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border-2 border-blue-200">
              <h4 className="font-bold text-blue-800 text-lg mb-2">🔢 سانلار</h4>
              <p className="text-blue-700">بىزنىڭ دۇنيامىزنى ساناش ئۈچۈن</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border-2 border-green-200">
              <h4 className="font-bold text-green-800 text-lg mb-2">➕ ئىسپات</h4>
              <p className="text-green-700">قوشۇش، ئېلىش، كۆپەيتىش قاتارلىقلار</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border-2 border-purple-200">
              <h4 className="font-bold text-purple-800 text-lg mb-2">📊 ئەلگەبىرا</h4>
              <p className="text-purple-700">نامەلۇم سان (x، y) نى ئىشلىتىش</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-xl border-2 border-orange-200">
              <h4 className="font-bold text-orange-800 text-lg mb-2">📐 گېئومېتىرىيە</h4>
              <p className="text-orange-700">شەكىللەرنىڭ ئۇزۇنلىقى، يۈزى، ھەجمى</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-xl border-2 border-yellow-300 mt-4">
            <h4 className="font-bold text-amber-800 text-lg mb-2">💡 نېمە ئۈچۈن ماتماتىكا ئۆگىنىشىمىز كېرەك؟</h4>
            <ul className="list-none space-y-2 text-amber-700">
              <li className="flex items-center gap-2">
                <span className="bg-amber-200 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center text-sm">✓</span>
                <span>كۈندىلىك تۇرمۇشتا ھېسابلاش</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-amber-200 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center text-sm">✓</span>
                <span>مەنتىقىنى ئىشلىتىش ئىقتىدارى</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-amber-200 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center text-sm">✓</span>
                <span>مەسىلە ھەل قىلىش ماھارىتى</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    numbers: {
      title: '1. 🔢 سانلار تۈرلىرى',
      description: 'ماتماتىكىدا تۈرلۈك سانلار بار، ھەر بىرىنىڭ ئالاھىدىلىكى بار.',
      icon: '🔢',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-xl text-center">
              <div className="text-2xl mb-2">1, 2, 3...</div>
              <div className="font-bold text-blue-800">ناتۇرال سانلار</div>
              <div className="text-sm text-blue-600 mt-1">سەل سان</div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-xl text-center">
              <div className="text-2xl mb-2">-2, -1, 0, 1, 2...</div>
              <div className="font-bold text-green-800">بۈتۈن سانلار</div>
              <div className="text-sm text-green-600 mt-1">مۇسبەت ۋە مەنپىي</div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-xl text-center">
              <div className="text-2xl mb-2">½, ¾, 2.5</div>
              <div className="font-bold text-purple-800">كەسمە سانلار</div>
              <div className="text-sm text-purple-600 mt-1">بۆلەك سان</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border-2 border-gray-200">
            <h5 className="font-bold text-gray-800 text-lg mb-3">📖 تەپسىلىي چۈشەندۈرۈش:</h5>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center font-bold mt-1">1</span>
                <div>
                  <strong className="text-blue-800">ناتۇرال سانلار:</strong>
                  <p className="text-gray-700">1، 2، 3، 4... سەل سانلار. مەسىلەن: ئۆيدە 4 كىشى بار.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-green-100 text-green-800 w-8 h-8 rounded-full flex items-center justify-center font-bold mt-1">2</span>
                <div>
                  <strong className="text-green-800">بۈتۈن سانلار:</strong>
                  <p className="text-gray-700">...-2، -1، 0، 1، 2... مۇسبەت ۋە مەنپىي سانلار. مەسىلەن: تەمپېراتۇرا -5°C.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center font-bold mt-1">3</span>
                <div>
                  <strong className="text-purple-800">كەسمە سانلار:</strong>
                  <p className="text-gray-700">½، ¾، 2.5 قاتارلىق بۆلەك سانلار. مەسىلەن: 2.5 كىلوگرام گۆش.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border-2 border-amber-300">
            <h5 className="font-bold text-amber-800 mb-2">🎯 تۇرمۇشتىكى مىسال:</h5>
            <p className="text-amber-700">
              سىزنىڭ قىستىكىڭىزدا <strong>35.5 يۈەن</strong> بار — بۇ كەسمە سان. 
              بازاردا <strong>4 كىلوگرام</strong> چۆچۈرە سېتىۋالدىڭىز — بۇ ناتۇرال سان.
            </p>
          </div>
        </div>
      )
    },
    operations: {
      title: '2. ➕ ئاساسىي ئىسپاتلار',
      description: 'ھەر قانداق ماتماتىكىلىق ئىشلار ئىسپاتلارغا ئاساسلىنىدۇ.',
      icon: '➕',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { symbol: '+', name: 'قوشۇش', color: 'green', example: '3 + 2 = 5' },
              { symbol: '−', name: 'ئېلىش', color: 'red', example: '5 - 2 = 3' },
              { symbol: '×', name: 'كۆپەيتىش', color: 'blue', example: '3 × 4 = 12' },
              { symbol: '÷', name: 'بۆلۈش', color: 'purple', example: '12 ÷ 4 = 3' }
            ].map((op, index) => (
              <div key={index} className={`bg-gradient-to-br from-${op.color}-100 to-${op.color}-200 p-4 rounded-xl text-center border-2 border-${op.color}-300`}>
                <div className="text-3xl font-bold mb-2">{op.symbol}</div>
                <div className="font-bold text-gray-800">{op.name}</div>
                <div className="text-sm text-gray-600 mt-1 font-mono">{op.example}</div>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded-xl border-2 border-gray-200">
            <h5 className="font-bold text-gray-800 text-lg mb-3">📚 ئىسپات تەرتىپى (PEMDAS):</h5>
            <div className="space-y-2">
              {[
                { step: '1', operation: 'قىيىسقىچە ( )', example: 'ئاۋۋال قىيىسقىچىدىكىنى ھېسابلا' },
                { step: '2', operation: 'كۆپەيتىش × ۋە بۆلۈش ÷', example: 'سولدىن ئوڭغا' },
                { step: '3', operation: 'قوشۇش + ۋە ئېلىش −', example: 'سولدىن ئوڭغا' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <span className="bg-gray-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </span>
                  <div>
                    <strong className="text-gray-800">{item.operation}</strong>
                    <div className="text-sm text-gray-600">{item.example}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-xl border-2 border-teal-300">
            <h5 className="font-bold text-teal-800 mb-3">💡 مۇھىم مىسال:</h5>
            <div className="bg-white p-3 rounded-lg font-mono text-center">
              <div className="text-lg">4 + 3 × 2 = ?</div>
              <div className="text-sm text-gray-500 mt-1">تەرتىپ: ئاۋۋال كۆپەيتىش (3×2=6)، ئاندىن قوشۇش (4+6=10)</div>
              <div className="text-xl font-bold text-teal-700 mt-2">= 10</div>
            </div>
            <div className="text-red-600 text-sm mt-2 text-center">
              ⚠️ ئەگەر تەرتىپنى بۇزۇپ قوشۇساق: 7 × 2 = 14 — خاتا!
            </div>
          </div>
        </div>
      )
    },
    algebra: {
      title: '3. 📊 ئەلگەبىرا (نامەلۇم سان)',
      description: '"x" كىم؟ دەيدىغان بولسىڭىز — بۇ نامەلۇم سان.',
      icon: '📊',
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border-2 border-purple-300">
            <h5 className="font-bold text-purple-800 text-lg mb-3">🔍 ئەلگەبىرا نېمە؟</h5>
            <p className="text-purple-700">
              ئەلگەبىرا — نامەلۇم ساننى x، y دېگەن ھەرپ بىلەن بەلگىلەپ، ئۇنىڭ قىممىتىنى تاپىش ئىلمى.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border-2 border-blue-200">
              <h6 className="font-bold text-blue-800 mb-2">🎯 قانداق يېشىلىدۇ؟</h6>
              <ul className="list-none space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-800 w-5 h-5 rounded-full flex items-center justify-center text-xs">1</span>
                  <span>تەڭلىك تەڭسىزلىكنى تەڭ ساقلا</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-800 w-5 h-5 rounded-full flex items-center justify-center text-xs">2</span>
                  <span>x نى يالاڭ بىر قىل</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-800 w-5 h-5 rounded-full flex items-center justify-center text-xs">3</span>
                  <span>قىممەتنى تەكشۈر</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-xl border-2 border-green-200">
              <h6 className="font-bold text-green-800 mb-2">📝 مىسال يېشىش:</h6>
              <div className="font-mono text-sm space-y-1">
                <div>3x − 4 = 11</div>
                <div>3x = 11 + 4</div>
                <div>3x = 15</div>
                <div className="font-bold text-green-700">x = 5</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border-2 border-orange-300">
            <h5 className="font-bold text-orange-800 mb-3">🧩 مەشىق مىساللىرى:</h5>
            <div className="space-y-3">
              {[
                { problem: "2x + 5 = 13", solution: "x = 4" },
                { problem: "x/3 = 7", solution: "x = 21" },
                { problem: "4(x - 2) = 20", solution: "x = 7" }
              ].map((item, index) => (
                <details key={index} className="bg-white/80 p-3 rounded-lg">
                  <summary className="cursor-pointer font-mono text-orange-700">
                    {item.problem}
                  </summary>
                  <div className="mt-2 p-2 bg-orange-100 rounded text-orange-800 font-mono">
                    {item.solution}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      )
    },
    geometry: {
      title: '4. 📐 ئاساسىي گېئومېتىرىيە',
      description: 'شەكىللەرنىڭ ئۇزۇنلىقى، يۈزى، ھەجمى قانداق ھېسابلىنىدۇ؟',
      icon: '📐',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { 
                shape: '●', 
                name: 'دىئامېتىر', 
                formula: 'πr²', 
                example: 'r=4 → 50.24',
                color: 'blue'
              },
              { 
                shape: '◼️', 
                name: 'تۆت بۇلۇڭ', 
                formula: 'ل × ك', 
                example: '8×5=40',
                color: 'green'
              },
              { 
                shape: '⬜', 
                name: 'كۇب', 
                formula: 'تەرەپ³', 
                example: '3³=27',
                color: 'purple'
              }
            ].map((item, index) => (
              <div key={index} className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 p-4 rounded-xl border-2 border-${item.color}-300 text-center`}>
                <div className="text-3xl mb-2">{item.shape}</div>
                <div className="font-bold text-gray-800">{item.name}</div>
                <div className="text-sm text-gray-600 font-mono my-2">{item.formula}</div>
                <div className="text-xs text-gray-500">{item.example}</div>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded-xl border-2 border-gray-200">
            <h5 className="font-bold text-gray-800 text-lg mb-3">📏 تەپسىلىي فورمۇلالار:</h5>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <strong className="text-blue-800">دىئامېتىر يۈزى:</strong>
                  <div className="text-sm text-blue-600">πr² (r = رادىئۇس)</div>
                </div>
                <div className="bg-white px-3 py-1 rounded font-mono text-blue-700">3.14×r²</div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <strong className="text-green-800">تۆت بۇلۇڭ يۈزى:</strong>
                  <div className="text-sm text-green-600">ئۇزۇنلۇق × كەڭلىك</div>
                </div>
                <div className="bg-white px-3 py-1 rounded font-mono text-green-700">ل × ك</div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div>
                  <strong className="text-purple-800">كۇب ھەجمى:</strong>
                  <div className="text-sm text-purple-600">تەرەپ × تەرەپ × تەرەپ</div>
                </div>
                <div className="bg-white px-3 py-1 rounded font-mono text-purple-700">تەرەپ³</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border-2 border-amber-300">
            <h5 className="font-bold text-amber-800 mb-3">🔢 تۇرمۇش مىسالى:</h5>
            <div className="bg-white/80 p-3 rounded-lg">
              <p className="text-amber-700">
                <strong>مەسىلە:</strong> بولاقنىڭ رادىئۇسى 3 مېتىر بولسا، يۈزى قانچە؟ (π=3.14)
              </p>
              <div className="font-mono text-sm mt-2 text-amber-800">
                <div>فورمۇلا: πr² = 3.14 × 3²</div>
                <div>ھېسابلاش: 3.14 × 9</div>
                <div className="font-bold">نەتىجە: 28.26 م²</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    problemSolving: {
      title: '5. 💡 تۇرمۇش مەسىلىلىرىنى يېشىش',
      description: 'ماتماتىكا — پەقەت قەغەز ئۈستىدىلا ئەمەس، تۇرمۇشنى ياخشىلايدۇ.',
      icon: '💡',
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-2 border-green-300">
            <h5 className="font-bold text-green-800 text-lg mb-3">🎯 مەسىلە يېشىش باسقۇچلىرى:</h5>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-center">
              {[
                { step: '1', text: 'مەسىلىنى چۈشەن' },
                { step: '2', text: 'پىلان تۈز' },
                { step: '3', text: 'يېشىش' },
                { step: '4', text: 'تەكشۈر' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-3 rounded-lg border-2 border-green-200">
                  <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mx-auto mb-2">
                    {item.step}
                  </div>
                  <div className="text-sm text-green-800">{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border-2 border-blue-300 shadow-lg">
            <h5 className="font-bold text-blue-800 text-lg mb-3">🧩 تۇرمۇش مەسىلىسى:</h5>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 font-semibold">
                🛒 بازار مەسىلىسى: بىر كىتاب 25 يۈەن، سىز 60 يۈەن بېرىپ 2 كىتاب سېتىۋالدىڭىز. قايتۇرىم پۇلى قانچە؟
              </p>
              
              <details className="mt-3">
                <summary className="cursor-pointer text-blue-600 font-medium">👀 يەشىمنى كۆرۈش</summary>
                <div className="mt-3 bg-white p-3 rounded-lg border-2 border-blue-200">
                  <div className="space-y-2 font-mono text-blue-800">
                    <div>1. 2 كىتابنىڭ سوممىسى: 2 × 25 = 50 يۈەن</div>
                    <div>2. قايتۇرىم پۇل: 60 − 50 = 10 يۈەن</div>
                    <div className="font-bold text-green-600 text-lg">نەتىجە: 10 يۈەن قايتۇرىم</div>
                  </div>
                </div>
              </details>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border-2 border-purple-300">
              <h6 className="font-bold text-purple-800 mb-2">🏠 ئۆي مەسىلىسى:</h6>
              <p className="text-purple-700 text-sm">
                ئۆيۈڭىزنىڭ ئۇزۇنلۇقى 12 م، كەڭلىكى 8 م بولسا، پۇتۇپ قويۇش ئۈچۈن قانچە م² پۇتۇپ كېرەك؟
              </p>
              <div className="text-xs text-purple-600 mt-2">يەشىم: 12 × 8 = 96 م²</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-xl border-2 border-orange-300">
              <h6 className="font-bold text-orange-800 mb-2">⏰ ۋاقىت مەسىلىسى:</h6>
              <p className="text-orange-700 text-sm">
                سىز سائەت 60 كم بىلەن 180 كم يۇرۇش قىلدىڭىز. قانچە سائەت يۇرۇش قىلدىڭىز؟
              </p>
              <div className="text-xs text-orange-600 mt-2">يەشىم: 180 ÷ 60 = 3 سائەت</div>
            </div>
          </div>
        </div>
      )
    },
    // 🧮 يېڭى بۆلەك: كەلبىل كەر جەدۋىلى (4 قىسىمدا)
    multiplicationTable: {
      title: '6. 🧮 كەلبىل كەر جەدۋىلى',
      description: '1 دىن 12 گىچە بارلىق كۆپەيتىش جەدۋىلى. ئەستايىدىل چۈشەن! 🎯',
      icon: '🧮',
      content: (
        <div className="bg-white p-6 rounded-xl border-2 border-blue-300 shadow-lg">
          {/* بەشىك */}
          <div className="bg-gradient-to-r from-red-500 to-blue-600 text-white p-4 rounded-t-xl text-center">
            <h3 className="text-3xl font-bold">× Multiplication</h3>
          </div>
          
          {/* جەدۋەل ئىچى */}
          <div className="p-6">
            {/* 4 قىسىمدا كۆرسىتىش */}
            {splitIntoQuadrants(generateMultiplicationTable()).map((quadrant, quadIndex) => (
              <div key={quadIndex} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {quadrant.map((column, colIndex) => (
                  <div 
                    key={colIndex} 
                    className="rounded-xl overflow-hidden shadow-md"
                    style={{ backgroundColor: column.color }}
                  >
                    {/* بەشىك */}
                    <div 
                      className="bg-white p-3 text-center text-xl font-bold text-blue-800"
                      style={{ backgroundColor: column.color }}
                    >
                      {column.title}
                    </div>
                    
                    {/* جەدۋەل قىسىملىرى */}
                    <div className="p-3 space-y-1">
                      {column.rows.map((row, rowIndex) => (
                        <div 
                          key={rowIndex} 
                          className="text-center text-blue-800 font-mono text-xl py-1 rounded hover:bg-white/30 transition-colors"
                        >
                          {row}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )
    }
  };

  const sectionKeys = ['intro', 'numbers', 'operations', 'algebra', 'geometry', 'problemSolving', 'multiplicationTable'];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowQuiz(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* باش تونۇشتۇرۇش */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-8 rounded-3xl shadow-2xl mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🧮 ماتماتىكا دۇنياسى</h1>
          <p className="text-xl opacity-90">سان ۋە مەنتىقىنىڭ قىزىقارلىق دۇنياسىغا خۇش كەپسىز!</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="bg-white/20 px-4 py-2 rounded-full">🔢 سانلار</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">➕ ئىسپات</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">📊 ئەلگەبىرا</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">📐 گېئومېتىرىيە</div>
          </div>
        </div>

        {/* بۆلەك تاللاش تىزىملىكى */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {sectionKeys.slice(1).map(key => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeSection === key
                  ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              <span>{sections[key].icon}</span>
              <span>{sections[key].title.split('. ')[1]}</span>
            </button>
          ))}
        </div>

        {/* ھازىرقى بۆلەك مەزمۇنى */}
        <div className="bg-white p-8 rounded-3xl shadow-xl mb-8 border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{sections[activeSection].icon}</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{sections[activeSection].title}</h2>
              <p className="text-gray-600">{sections[activeSection].description}</p>
            </div>
          </div>
          {sections[activeSection].content}
        </div>

        {/* تېست باسقۇچى */}
        {!showQuiz ? (
          <div className="text-center bg-white p-8 rounded-3xl shadow-xl border-2 border-green-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 ماتماتىكا تېستى</h3>
            <p className="text-gray-600 mb-6">بىلىمىڭىزنى سىناپ بېقىڭ!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
                <div className="text-2xl">❓</div>
                <div className="font-bold text-green-800">5 سۇئال</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                <div className="text-2xl">⏱️</div>
                <div className="font-bold text-blue-800">15 دەقىقە</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl border-2 border-purple-200">
                <div className="text-2xl">🎓</div>
                <div className="font-bold text-purple-800">باشلانغۇچ دەرىجە</div>
              </div>
            </div>

            <button 
              onClick={() => setShowQuiz(true)}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl hover:from-green-600 hover:to-teal-600 shadow-lg transform hover:scale-105 transition-all duration-300 font-bold text-lg"
            >
              🚀 تېستىنى باشلاش
            </button>
          </div>
        ) : showResult ? (
          // تېست نەتىجىسى كۆرسىتىش بۆلەكى
          <div className="text-center bg-white p-8 rounded-3xl shadow-xl border-2 border-purple-300">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">تېستىڭىز تامام!</h3>
            
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl mb-6 inline-block">
              <div className="text-4xl font-bold text-purple-700 mb-2">
                {score} / {quizQuestions.length}
              </div>
              <div className="text-purple-600">
                {score === quizQuestions.length ? 'مۇكەممەل! 👏' : 
                 score >= quizQuestions.length * 0.7 ? 'ياخشى! 👍' : 
                 'يەنە تەكرارلاڭ 💪'}
              </div>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto text-left">
              <h4 className="font-bold text-gray-800 text-xl">نەتىجە تەھلىلى:</h4>
              {quizQuestions.map((q, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl border-2 border-gray-200">
                  <div className="font-bold text-gray-800 mb-2">{q.question}</div>
                  <div className="text-green-600 font-medium">توغرا جاۋاب: {q.options[q.correct]}</div>
                  <div className="text-blue-600 text-sm mt-1">{q.explanation}</div>
                </div>
              ))}
            </div>

            <button 
              onClick={resetQuiz}
              className="mt-6 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 shadow-lg transform hover:scale-105 transition-all duration-300 font-bold text-lg"
            >
              🔄 يەنە سىناپ بېقىش
            </button>
          </div>
        ) : (
          // تېست سۇئاللىرى كۆرسىتىش بۆلەكى
          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-blue-300">
            <div className="flex justify-between items-center mb-6">
              <div className="text-lg font-bold text-blue-600">
                سۇئال {currentQuestion + 1} / {quizQuestions.length}
              </div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold">
                نەتىجە: {score}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {quizQuestions[currentQuestion].question}
            </h3>

            <div className="space-y-3 mb-6">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                    selectedAnswer === index
                      ? index === quizQuestions[currentQuestion].correct
                        ? 'bg-green-100 border-green-500 text-green-800'
                        : 'bg-red-100 border-red-500 text-red-800'
                      : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      selectedAnswer === index
                        ? index === quizQuestions[currentQuestion].correct
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : 'bg-gray-300 text-gray-700'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-lg">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {selectedAnswer !== null && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border-2 border-amber-300 mb-4">
                <h4 className="font-bold text-amber-800 mb-2">📖 چۈشەندۈرۈش:</h4>
                <p className="text-amber-700">{quizQuestions[currentQuestion].explanation}</p>
              </div>
            )}

            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                selectedAnswer === null
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg transform hover:scale-105'
              }`}
            >
              {currentQuestion < quizQuestions.length - 1 ? '➡️ كېيىنكى سۇئال' : '✅ تېستىنى تاماملاش'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MathModule;