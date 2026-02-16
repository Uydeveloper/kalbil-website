// PythonTest2.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PythonTest2 = () => {
  const [expandedChapter, setExpandedChapter] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const chapters = [
    { 
      id: 1, 
      ja: 'Pythonの環境', 
      en: 'Python Environment', 
      ug: 'Python مۇھىتى', 
      count: 1, 
      rate: 2.5, 
      note: '',
      topics: [
        { name: 'virtualenv/venv', importance: 'high', code: 'python -m venv myenv' },
        { name: 'pip/pipenv/poetry', importance: 'high', code: 'pip install numpy' },
        { name: 'conda', importance: 'medium', code: 'conda create -n myenv python=3.9' }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 2, 
      ja: 'コーディング規約', 
      en: 'Coding Conventions', 
      ug: 'كود يېزىش قانۇنى', 
      count: 2, 
      rate: 5.0, 
      note: '',
      topics: [
        { name: 'PEP 8', importance: 'high', description: 'Python كود ئۇسلۇبى' },
        { name: 'flake8/black', importance: 'medium', description: 'ئاپتوماتىك تەڭشەش' },
        { name: 'docstring', importance: 'high', code: '"""\nفۇنكسىيە چۈشەندۈرۈشى\n"""' }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    { 
      id: 3, 
      ja: 'Pythonの言語仕様', 
      en: 'Python Language Specifications', 
      ug: 'Python تىل ئىشلىتىش ئىقتىدارى', 
      count: 7, 
      rate: 17.5, 
      note: '',
      topics: [
        { name: 'Data Types', importance: 'high', examples: ['int', 'str', 'list', 'dict'] },
        { name: 'Control Flow', importance: 'high', code: 'for i in range(10):\n    if i % 2 == 0:\n        print(i)' },
        { name: 'Functions', importance: 'high', code: 'def greet(name="User"):\n    return f"Hello {name}"' },
        { name: 'Decorators', importance: 'medium', code: '@staticmethod\ndef my_method():' },
        { name: 'Context Managers', importance: 'medium', code: 'with open("file.txt") as f:' }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    { 
      id: 4, 
      ja: 'Pythonのクラス', 
      en: 'Python Classes', 
      ug: 'Python كىلاسلىرى', 
      count: 3, 
      rate: 7.5, 
      note: '',
      topics: [
        { name: 'OOP Principles', importance: 'high', concepts: ['Encapsulation', 'Inheritance', 'Polymorphism'] },
        { name: 'Magic Methods', importance: 'medium', code: '__init__, __str__, __repr__' },
        { name: 'Properties', importance: 'medium', code: '@property\ndef value(self):' }
      ],
      color: 'from-amber-500 to-orange-500'
    },
    { 
      id: 5, 
      ja: 'タイプヒント', 
      en: 'Type Hints', 
      ug: 'تىپ ئىشىراتلىرى', 
      count: 2, 
      rate: 5.0, 
      note: '5.2 mypy چىقىرىلمىدى',
      topics: [
        { name: 'Type Annotations', importance: 'medium', code: 'def add(a: int, b: int) -> int:' },
        { name: 'Type Aliases', importance: 'low', code: 'Vector = list[float]' },
        { name: 'Typing Module', importance: 'medium', code: 'from typing import List, Dict, Optional' }
      ],
      color: 'from-red-500 to-rose-500'
    },
    { 
      id: 6, 
      ja: 'テキストの処理', 
      en: 'Text Processing', 
      ug: 'تېكىستنى قايتا ئىشلەش', 
      count: 4, 
      rate: 10.0, 
      note: '',
      topics: [
        { name: 'String Methods', importance: 'high', code: 'text.split(), text.join(), text.strip()' },
        { name: 'Regular Expressions', importance: 'medium', code: 'import re\nre.search(r"\\d+", text)' },
        { name: 'Unicode', importance: 'medium', description: 'UTF-8 كودلاش' }
      ],
      color: 'from-teal-500 to-cyan-500'
    },
    { 
      id: 7, 
      ja: '数値の処理', 
      en: 'Numeric Processing', 
      ug: 'سانلىق مەلۇماتنى قايتا ئىشلەش', 
      count: 0, 
      rate: 0.0, 
      note: 'چىقىرىلمىدى',
      topics: [],
      color: 'from-gray-400 to-gray-500'
    },
    { 
      id: 8, 
      ja: '日付と時刻の処理', 
      en: 'Date and Time Handling', 
      ug: 'چېسلا ۋە ۋاقىتنى باشقۇرۇش', 
      count: 2, 
      rate: 5.0, 
      note: '8.4 dateutil چىقىرىلمىدى',
      topics: [
        { name: 'datetime', importance: 'high', code: 'from datetime import datetime, timedelta' },
        { name: 'timezone', importance: 'medium', code: 'datetime.now(pytz.UTC)' }
      ],
      color: 'from-indigo-500 to-blue-500'
    },
    { 
      id: 9, 
      ja: 'データ型とアルゴリズム', 
      en: 'Data Types and Algorithms', 
      ug: 'دېتا تىپى ۋە ئالگورىتم', 
      count: 5, 
      rate: 12.5, 
      note: '9.3 bisect ۋە 9.5 pprint چىقىرىلمىدى',
      topics: [
        { name: 'Collections Module', importance: 'high', examples: ['deque', 'Counter', 'defaultdict'] },
        { name: 'Sorting', importance: 'medium', code: 'sorted(items, key=lambda x: x[1])' },
        { name: 'Search Algorithms', importance: 'medium' }
      ],
      color: 'from-lime-500 to-green-500'
    },
    { 
      id: 10, 
      ja: '汎用OS・ランタイムサービス', 
      en: 'General OS & Runtime Services', 
      ug: 'ئورتاق تىزىملىك ۋە ئىشلىتىش مۇھىتى خىزمىتى', 
      count: 2, 
      rate: 5.0, 
      note: '',
      topics: [
        { name: 'os module', importance: 'medium', code: 'import os\nos.getcwd()' },
        { name: 'sys module', importance: 'medium', code: 'import sys\nsys.argv' }
      ],
      color: 'from-violet-500 to-purple-500'
    },
    { 
      id: 11, 
      ja: 'ファイルとディレクトリへのアクセス', 
      en: 'File and Directory Access', 
      ug: 'ھۆججەت ۋە مۇندەرىجىگە زىيارەت', 
      count: 2, 
      rate: 5.0, 
      note: '',
      topics: [
        { name: 'File I/O', importance: 'high', code: 'with open("file.txt", "r") as f:\n    data = f.read()' },
        { name: 'Path Handling', importance: 'medium', code: 'from pathlib import Path\nPath("folder/file.txt")' }
      ],
      color: 'from-sky-500 to-blue-500'
    },
    { 
      id: 12, 
      ja: 'データ圧縮とアーカイブと永続化', 
      en: 'Data Compression, Archiving & Persistence', 
      ug: 'دېتا قىستۇرۇش، ئارخىپلاش ۋە ساقلاش', 
      count: 0, 
      rate: 0.0, 
      note: 'چىقىرىلمىدى',
      topics: [],
      color: 'from-gray-400 to-gray-500'
    },
    { 
      id: 13, 
      ja: '特定のデータフォーマットを扱う', 
      en: 'Handling Specific Data Formats', 
      ug: 'مۇئەييەن دېتا فورماتلىرى بىلەن ئىشلىش', 
      count: 2, 
      rate: 5.0, 
      note: '13.3 configparser، 13.4 PyYAML، 13.5 openpyxl، 13.6 Pillow چىقىرىلمىدى',
      topics: [
        { name: 'JSON', importance: 'high', code: 'import json\njson.dumps(data)' },
        { name: 'CSV', importance: 'medium', code: 'import csv' }
      ],
      color: 'from-fuchsia-500 to-pink-500'
    },
    { 
      id: 14, 
      ja: 'インターネット上のデータを扱う', 
      en: 'Working with Internet Data', 
      ug: 'ئىنتېرنېت دېتالىرى بىلەن ئىشلىش', 
      count: 2, 
      rate: 5.0, 
      note: '14.3 Requests ۋە 14.5 email چىقىرىلمىدى',
      topics: [
        { name: 'urllib', importance: 'medium', code: 'from urllib import request' },
        { name: 'HTTP', importance: 'high' }
      ],
      color: 'from-rose-500 to-red-500'
    },
    { 
      id: 15, 
      ja: 'HTML/XMLを扱う', 
      en: 'Handling HTML/XML', 
      ug: 'HTML/XML بىلەن ئىشلىش', 
      count: 0, 
      rate: 0.0, 
      note: 'چىقىرىلمىدى',
      topics: [],
      color: 'from-gray-400 to-gray-500'
    },
    { 
      id: 16, 
      ja: 'テスト', 
      en: 'Testing', 
      ug: 'سىناق قىلىش', 
      count: 3, 
      rate: 7.5, 
      note: '16.4 pytest ۋە 16.5 pydoc چىقىرىلمىدى',
      topics: [
        { name: 'unittest', importance: 'high', code: 'import unittest' },
        { name: 'assert', importance: 'medium', code: 'assert result == expected' },
        { name: 'Mocking', importance: 'medium', code: 'from unittest.mock import Mock' }
      ],
      color: 'from-yellow-500 to-amber-500'
    },
    { 
      id: 17, 
      ja: 'デバッグ', 
      en: 'Debugging', 
      ug: 'خاتالىق تۈزىتىش', 
      count: 2, 
      rate: 5.0, 
      note: '17.3 traceback چىقىرىلمىدى',
      topics: [
        { name: 'pdb', importance: 'medium', code: 'import pdb; pdb.set_trace()' },
        { name: 'Logging', importance: 'high', code: 'import logging\nlogging.debug("message")' }
      ],
      color: 'from-cyan-500 to-teal-500'
    },
    { 
      id: 18, 
      ja: '暗号関連', 
      en: 'Cryptography', 
      ug: 'شىفىرلاش مەسلىھىتى', 
      count: 1, 
      rate: 2.5, 
      note: '18.3 cryptography چىقىرىلمىدى',
      topics: [
        { name: 'hashlib', importance: 'medium', code: 'import hashlib\nhashlib.md5(data)' },
        { name: 'secrets', importance: 'low', code: 'import secrets\nsecrets.token_hex(16)' }
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      id: 19, 
      ja: '並行処理、並列処理', 
      en: 'Concurrency and Parallelism', 
      ug: 'بىرلەشمىگەن ۋە پاراللېل ئىشلىتىش', 
      count: 0, 
      rate: 0.0, 
      note: 'چىقىرىلمىدى',
      topics: [],
      color: 'from-gray-400 to-gray-500'
    }
  ];

  const total = chapters.reduce((sum, ch) => sum + ch.count, 0);
  const totalRate = chapters.reduce((sum, ch) => sum + ch.rate, 0);

  const TopicDetailModal = ({ topic, chapter, onClose }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <div className={`bg-gradient-to-r ${chapter.color} text-white p-6`}>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold">{chapter.id}-باب: {chapter.ug}</h3>
                <p className="text-blue-100">{topic.name}</p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-black hover:bg-opacity-20"
              >
                &times;
              </button>
            </div>
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">مۇھىملىق دەرىجىسى</h4>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full ${
                    topic.importance === 'high' ? 'bg-red-100 text-red-800' :
                    topic.importance === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    <span className="mr-2">
                      {topic.importance === 'high' ? '🔥' :
                       topic.importance === 'medium' ? '⚠️' : '✅'}
                    </span>
                    {topic.importance === 'high' ? 'يۇقىرى' :
                     topic.importance === 'medium' ? 'ئوتتۇرا' : 'تۆۋەن'}
                  </div>
                </div>
                
                {topic.description && (
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">چۈشەندۈرۈش</h4>
                    <p className="text-gray-700">{topic.description}</p>
                  </div>
                )}
                
                {topic.examples && (
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">مىساللار</h4>
                    <div className="flex flex-wrap gap-2">
                      {topic.examples.map((example, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {topic.concepts && (
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">ئاساسىي چۈشەنچىلەر</h4>
                    <ul className="space-y-2">
                      {topic.concepts.map((concept, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {concept}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div>
                {topic.code && (
                  <>
                    <h4 className="font-bold text-gray-800 mb-3">Python كود مىسالى</h4>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
                      <code>{topic.code}</code>
                    </pre>
                    <p className="text-sm text-gray-600 mt-2">
                      بۇ كود ئارقىلىق {topic.name} نى قانداق ئىشلىتىشنى كۆرەلەيسىز.
                    </p>
                  </>
                )}
                
                {!topic.code && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r">
                    <p className="text-yellow-800">
                      بۇ تېمىغا ئالاقىدار كود مىسالى يوق. تېخنىكىلىق تەپسىلاتلارغا Python رەسمىي تور بېتىدىن قاراڭ.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {chapter.note && (
              <div className="mt-6 bg-red-50 border border-red-200 p-4 rounded-xl">
                <h4 className="font-bold text-red-800 mb-2">چەكلىمىلەر</h4>
                <p className="text-red-700">{chapter.note}</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Python دەرىجىلىك سىناق
            </h1>
            <p className="text-gray-600 text-lg">
              تىل ئىشلىتىش ئىقتىدارى ۋە كۇتۇبخانىلەر
            </p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-700">{total}</div>
              <div className="text-sm text-blue-600">جەمئىي سۇئال</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-indigo-700">{totalRate.toFixed(1)}%</div>
              <div className="text-sm text-indigo-600">ئومۇمىي نىسبەت</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-purple-700">3-باب</div>
              <div className="text-sm text-purple-600">ئەڭ مۇھىم باب</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-pink-700">7</div>
              <div className="text-sm text-pink-600">سۇئال سانى</div>
            </div>
          </div>
          
          {/* Progress Bars */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>ئىلگىرىلەش (تولۇق سىناق):</span>
                <span>{totalRate.toFixed(1)}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${totalRate}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>چىقىرىلمىغان تېمىلار:</span>
                <span>10+ تېما</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-400 to-orange-500" style={{ width: '35%' }} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-6 justify-center">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">چىقىرىلغان تېما</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">چىقىرىلمىغان تېما</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">قىسىمەن چىقىرىلغان</span>
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: chapter.id * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border ${
                chapter.count === 0 
                  ? 'border-red-200 bg-red-50' 
                  : chapter.note 
                    ? 'border-yellow-200 bg-yellow-50' 
                    : 'border-gray-200'
              }`}
            >
              {/* Chapter Header */}
              <div 
                className={`p-6 cursor-pointer ${
                  chapter.count === 0 
                    ? 'bg-gradient-to-r from-red-100 to-red-50' 
                    : `bg-gradient-to-r ${chapter.color} text-white`
                }`}
                onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-2xl font-bold">باب {chapter.id}</div>
                    <h3 className="text-xl font-bold mt-1">{chapter.ug}</h3>
                    <p className={`text-sm ${chapter.count === 0 ? 'text-red-100' : 'text-blue-100'}`}>
                      {chapter.ja} • {chapter.en}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{chapter.count}</div>
                    <div className="text-sm">سۇئال</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm">
                    نىسبەت: <span className="font-bold">{chapter.rate.toFixed(1)}%</span>
                  </div>
                  <div className="text-sm flex items-center">
                    {expandedChapter === chapter.id ? '▲ يىغىش' : '▼ تەپسىلاتلار'}
                  </div>
                </div>
              </div>

              {/* Chapter Content */}
              <AnimatePresence>
                {expandedChapter === chapter.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6">
                      {/* Topics */}
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-800 mb-3">مۇھىم تېمىلار</h4>
                        <div className="space-y-3">
                          {chapter.topics.length > 0 ? (
                            chapter.topics.map((topic, idx) => (
                              <div 
                                key={idx}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                                onClick={() => setSelectedTopic({ ...topic, chapter })}
                              >
                                <div className="flex items-center">
                                  <div className={`w-2 h-2 rounded-full mr-3 ${
                                    topic.importance === 'high' ? 'bg-red-500' :
                                    topic.importance === 'medium' ? 'bg-yellow-500' :
                                    'bg-green-500'
                                  }`}></div>
                                  <span className="font-medium">{topic.name}</span>
                                </div>
                                <button className="text-blue-600 hover:text-blue-800 text-sm">
                                  تەپسىلاتلار →
                                </button>
                              </div>
                            ))
                          ) : (
                            <div className="text-center py-4 text-gray-500">
                              بۇ بابقا تېما قوشۇلمىغان ياكى چىقىرىلمىغان.
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Chapter Info */}
                      <div className="space-y-4">
                        {chapter.note && (
                          <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
                            <h5 className="font-bold text-red-800 mb-1">چەكلىمىلەر</h5>
                            <p className="text-red-700 text-sm">{chapter.note}</p>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            سىناق نىسبىتى: 
                            <span className="font-bold text-gray-800 ml-2">
                              {chapter.rate.toFixed(1)}%
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">
                            مۇھىملىق:
                            <span className="font-bold text-gray-800 ml-2">
                              {chapter.rate >= 10 ? 'يۇقىرى' :
                               chapter.rate >= 5 ? 'ئوتتۇرا' : 'تۆۋەن'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">ئەڭ مۇھىم ئۇچۇرلار</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-3xl font-bold mb-2">3-باب</div>
              <div className="font-medium">Python تىل ئىشلىتىش ئىقتىدارى</div>
              <div className="text-xl font-bold mt-2">17.5%</div>
              <div className="text-sm opacity-90">ئەڭ يۇقىرى نىسبەت</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-3xl font-bold mb-2">19</div>
              <div className="font-medium">جەمئىي باب سانى</div>
              <div className="text-sm opacity-90 mt-2">
                5 باب چىقىرىلمىغان، 7 باب قىسىمەن چىقىرىلغان
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-3xl font-bold mb-2">پايدىلىنغان</div>
              <div className="font-medium">ئەڭ مۇھىم تېمىلار</div>
              <div className="text-sm opacity-90 mt-2">
                PEP 8, OOP, Testing, File I/O, JSON
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm opacity-90">
            <p className="mb-2">📌 ئەڭ مۇھىم باب: <strong>3-باب (Python تىل ئىشلىتىش ئىقتىدارى)</strong> — 7 سۇئال، 17.5%</p>
            <p>⚠️ چىقىرىلمىغان تېمىلارغا دىققەت: pytest, Requests, cryptography, HTML/XML</p>
          </div>
        </motion.div>

        {/* Topic Detail Modal */}
        <AnimatePresence>
          {selectedTopic && (
            <TopicDetailModal
              topic={selectedTopic}
              chapter={selectedTopic.chapter}
              onClose={() => setSelectedTopic(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PythonTest2;