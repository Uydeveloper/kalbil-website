// src/components/learn-modules/ml-components/MLSupervised.jsx
import React, { useState } from 'react';
import { Target, BarChart, CheckCircle, TrendingUp, AlertCircle } from 'lucide-react';

const MLSupervised = ({ onComplete }) => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('linear');

  const algorithms = [
    { 
      id: 'linear', 
      name: 'خەت رەگىرېسىيەسى', 
      description: 'سانلىق مەلۇماتنىڭ خەت مۇناسىۋىتىنى بايقاش',
      type: 'رەگىرېسىيە',
      example: 'باھا، سۇمما، ۋاقىت'
    },
    { 
      id: 'logistic', 
      name: 'لوجىستىك رەگىرېسىيە', 
      description: 'ئىككى خىل سەۋىيەنى تەقسىملەش',
      type: 'تەقسىملەش',
      example: 'ھەس-ھال، تاللاش، قارار'
    },
    { 
      id: 'decision', 
      name: 'قارار دارىخىتى', 
      description: 'قارار قۇرۇلمىسى بويىچە تەقسىملەش',
      type: 'تەقسىملەش',
      example: 'تۈر، دەرىجە، خەتەر'
    },
    { 
      id: 'svm', 
      name: 'ياردەملىك ۋېكتور ماشىنىسى', 
      description: 'چېگرا بىلەن تەقسىملەش',
      type: 'تەقسىملەش',
      example: 'رەسىم، تېكىست، سېلىشتۇرما'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
        <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-500" />
          نازارەتلىك ئۆگىنىش ئالگورىزىملىرى
        </h5>
        <div className="grid grid-cols-4 gap-4">
          {['سانلىق مەلۇمات', 'باھالاش', 'تەربىيە', 'ئالدىن بىلىش'].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                {index + 1}
              </div>
              <div className="text-xs text-gray-700">{step}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h5 className="font-bold text-gray-800">ئالگورىزىم تاللاش:</h5>
          <div className="space-y-3">
            {algorithms.map((algo) => (
              <button
                key={algo.id}
                onClick={() => setSelectedAlgorithm(algo.id)}
                className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                  selectedAlgorithm === algo.id 
                    ? 'bg-blue-50 border-blue-300 border-2' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">{algo.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{algo.description}</div>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {algo.type}
                      </span>
                      <span className="text-xs text-gray-500">{algo.example}</span>
                    </div>
                  </div>
                  {selectedAlgorithm === algo.id && (
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h5 className="font-bold text-gray-800 mb-4">
            مىسال: {algorithms.find(a => a.id === selectedAlgorithm)?.name}
          </h5>
          
          <div className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4">
            <pre className="text-sm overflow-x-auto">
{`from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.${selectedAlgorithm === 'linear' ? 'linear_model import LinearRegression' : 
                 selectedAlgorithm === 'logistic' ? 'linear_model import LogisticRegression' :
                 selectedAlgorithm === 'decision' ? 'tree import DecisionTreeClassifier' :
                 'svm import SVC'}

# سانلىق مەلۇمات يۈكلەش
X, y = datasets.load_iris(return_X_y=True)

# سانلىق مەلۇماتنى بۆلۈش
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# مودېل قۇرۇش
model = ${selectedAlgorithm === 'linear' ? 'LinearRegression()' :
                selectedAlgorithm === 'logistic' ? 'LogisticRegression(max_iter=1000)' :
                selectedAlgorithm === 'decision' ? 'DecisionTreeClassifier(max_depth=3)' :
                'SVC(kernel="linear")'}

# مودېلنى تەربىيەلەش
model.fit(X_train, y_train)

# ئىنچىكەلىكنى تەكشۈرۈش
accuracy = model.score(X_test, y_test)
print(f"مودېل ئىنچىكەلىكى: {accuracy:.2%}")`}
            </pre>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="font-semibold text-gray-800">ئىنچىكە</span>
              </div>
              <div className="text-2xl font-bold text-green-600">94.7%</div>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg border border-red-100">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <span className="font-semibold text-gray-800">خاتالىق</span>
              </div>
              <div className="text-2xl font-bold text-red-600">5.3%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
        >
          <Target className="w-5 h-5" />
          نازارەتلىك ئۆگىنىشنى تاماملا
        </button>
      </div>
    </div>
  );
};

export default MLSupervised;