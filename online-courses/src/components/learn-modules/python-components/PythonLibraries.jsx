// src/components/learn-modules/python-components/PythonLibraries.jsx
import React from 'react';
import { Package, Download, Star, Code } from 'lucide-react';

const PythonLibraries = ({ onComplete }) => {
  const libraries = [
    { name: 'Pandas', description: 'سانلىق مەلۇمات بىر تەرەپ قىلىش', color: 'bg-blue-100 text-blue-800', install: 'pip install pandas' },
    { name: 'NumPy', description: 'سانلىق ھېسابلاش', color: 'bg-green-100 text-green-800', install: 'pip install numpy' },
    { name: 'Matplotlib', description: 'رەسىم ۋە گرافىك', color: 'bg-purple-100 text-purple-800', install: 'pip install matplotlib' },
    { name: 'Scikit-learn', description: 'ماشىنا ئۆگىنىش', color: 'bg-red-100 text-red-800', install: 'pip install scikit-learn' },
    { name: 'TensorFlow', description: 'چوڭقۇر ئۆگىنىش', color: 'bg-yellow-100 text-yellow-800', install: 'pip install tensorflow' },
    { name: 'PyTorch', description: 'ئىلمىي تەتقىقات', color: 'bg-pink-100 text-pink-800', install: 'pip install torch' },
    { name: 'Django', description: 'تور بېكەت', color: 'bg-indigo-100 text-indigo-800', install: 'pip install django' },
    { name: 'Flask', description: 'يېڭى كىچىك تور', color: 'bg-teal-100 text-teal-800', install: 'pip install flask' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
        <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Package className="w-5 h-5 text-purple-500" />
          كۇتۇپخانىلارنى قانداق ئورنىتىش
        </h5>
        <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Download className="w-4 h-4" />
            <span className="text-sm font-mono">Terminal</span>
          </div>
          <code className="text-sm block">pip install كۇتۇپخانا-ئىسمى</code>
          <code className="text-sm block mt-2"># مىسال: pip install pandas numpy matplotlib</code>
        </div>
      </div>

      <div>
        <h5 className="font-bold text-gray-800 mb-4">ئاساسىي كۇتۇپخانىلار:</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {libraries.map((lib, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${lib.color} text-sm font-medium mb-2`}>
                    <Star className="w-3 h-3" />
                    {lib.name}
                  </div>
                  <p className="text-gray-600 text-sm">{lib.description}</p>
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">★ {Math.floor(Math.random() * 5000) + 10000}k</span>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <code className="text-xs text-gray-700 font-mono">{lib.install}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* مىسال كود */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h5 className="font-bold text-gray-800 mb-4">مىسال: Pandas ئىشلىتىش</h5>
        <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
          <pre className="text-sm overflow-x-auto">
{`import pandas as pd
import numpy as np

# سانلىق مەلۇمات قۇرۇش
سانلىق_مەلۇمات = {
    'ئىسىم': ['ئەخمەد', 'مەرىيەم', 'ھەسەن', 'زەينەپ'],
    'يېشى': [25, 30, 35, 28],
    'باھا': [85, 92, 78, 95]
}

# DataFrame قۇرۇش
df = pd.DataFrame(سانلىق_مەلۇمات)

# كۆرۈش
print(df)
print("\\nئوتتۇرا باھا:", df['باھا'].mean())
print("ئەڭ يۇقىرى باھا:", df['باھا'].max())
print("ئەڭ تۆۋەن باھا:", df['باھا'].min())`}
          </pre>
        </div>
      </div>

      {/* تەكشۈرۈش */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-600">
          <span className="font-semibold">{libraries.length}</span> كۇتۇپخانىنى تونۇشتۇرۇلدى
        </div>
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
        >
          <Package className="w-5 h-5" />
          كۇتۇپخانىلارنى تاماملا
        </button>
      </div>
    </div>
  );
};

export default PythonLibraries;