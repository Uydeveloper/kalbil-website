// src/components/learn-modules/python-components/PythonML.jsx
import React, { useState } from 'react';
import { Cpu, Brain, Target, TrendingUp, Play, Check } from 'lucide-react';

const PythonML = ({ onComplete }) => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('linear');

  const algorithms = [
    { id: 'linear', name: 'خەت رەگىرېسىيەسى', description: 'سانلىق مەلۇماتنىڭ خەت مۇناسىۋىتىنى بايقاش', color: 'from-blue-500 to-cyan-500' },
    { id: 'decision', name: 'قارار دارىخىتى', description: 'قارار قۇرۇلمىسى بويىچە تەقسىملەش', color: 'from-green-500 to-emerald-500' },
    { id: 'svm', name: 'ياردەملىك ۋېكتور ماشىنىسى', description: 'چېگرا بىلەن تەقسىملەش', color: 'from-purple-500 to-violet-500' },
    { id: 'neural', name: 'نېرۋا تورى', description: 'مۇرەككەپ مۇناسىۋەتلەرنى ئۆگىنىش', color: 'from-pink-500 to-rose-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-100">
        <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Brain className="w-5 h-5 text-red-500" />
          ماشىنا ئۆگىنىش جەريانى
        </h5>
        <div className="grid grid-cols-5 gap-4">
          {['سانلىق مەلۇمات', 'پاكلىشىش', 'مودېل قۇرۇش', 'تەربىيە', 'بەھالىش'].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                {index + 1}
              </div>
              <div className="text-xs text-gray-700">{step}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {algorithms.map((algo) => (
          <button
            key={algo.id}
            onClick={() => setSelectedAlgorithm(algo.id)}
            className={`p-4 rounded-xl border transition-all duration-300 ${
              selectedAlgorithm === algo.id 
                ? `bg-gradient-to-br ${algo.color} text-white border-transparent transform scale-105` 
                : 'bg-white border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <Cpu className="w-6 h-6 mb-2" />
              <div className="font-semibold">{algo.name}</div>
              <div className="text-xs mt-1 opacity-80">{algo.description}</div>
            </div>
          </button>
        ))}
      </div>

      {/* مىسال كود */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h5 className="font-bold text-gray-800 mb-4">
          مىسال: {algorithms.find(a => a.id === selectedAlgorithm)?.name}
        </h5>
        
        <div className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.${selectedAlgorithm === 'linear' ? 'linear_model import LinearRegression' : 
                 selectedAlgorithm === 'decision' ? 'tree import DecisionTreeClassifier' :
                 selectedAlgorithm === 'svm' ? 'svm import SVC' :
                 'neural_network import MLPClassifier'}

# سانلىق مەلۇمات ئەھۋالى
X = [[1], [2], [3], [4], [5]]
y = [2, 4, 6, 8, 10]

# سانلىق مەلۇماتنى بۆلۈش
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# مودېل قۇرۇش
model = ${selectedAlgorithm === 'linear' ? 'LinearRegression()' :
                selectedAlgorithm === 'decision' ? 'DecisionTreeClassifier()' :
                selectedAlgorithm === 'svm' ? 'SVC()' :
                'MLPClassifier(hidden_layer_sizes=(100,))'}

# مودېلنى ئۆگىتىش
model.fit(X_train, y_train)

# ئالدىن بىلىش
predictions = model.predict([[6], [7], [8]])
print("ئالدىن بىلىش نەتىجىسى:", predictions)`}
          </pre>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border border-red-100">
          <div className="flex items-center gap-3 mb-3">
            <Target className="w-5 h-5 text-red-500" />
            <h6 className="font-semibold text-gray-800">مودېل ئىنچىكەلىكى:</h6>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">94%</div>
              <div className="text-xs text-gray-600">تەربىيە</div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">ئىنچىكە</span>
                <span className="text-sm font-semibold">94%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* تەجرىبە قىلىش */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <Play className="w-5 h-5 text-blue-500" />
            <h6 className="font-semibold text-gray-800">كود ئىجرا قىلىش</h6>
          </div>
          <p className="text-sm text-gray-600">يۇقىرىدىكى كودنى توردا ئىجرا قىلىپ سىناڭ</p>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <h6 className="font-semibold text-gray-800">مودېلنى تەربىيەلەش</h6>
          </div>
          <p className="text-sm text-gray-600">سانلىق مەلۇماتنى ئۆزگەرتىپ مودېلنى تەربىيەلەڭ</p>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <Check className="w-5 h-5 text-purple-500" />
            <h6 className="font-semibold text-gray-800">بەھالىش</h6>
          </div>
          <p className="text-sm text-gray-600">مودېلنىڭ ئىنچىكەلىكىنى تەكشۈرۈڭ</p>
        </div>
      </div>

      {/* تاماملا */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-600">
          <span className="font-semibold">{algorithms.length}</span> ئالگورىزىمنى تونۇشتۇرۇلدى
        </div>
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg hover:from-red-600 hover:to-pink-700 transition-all duration-300"
        >
          <Brain className="w-5 h-5" />
          ماشىنا ئۆگىنىشنى تاماملا
        </button>
      </div>
    </div>
  );
};

export default PythonML;