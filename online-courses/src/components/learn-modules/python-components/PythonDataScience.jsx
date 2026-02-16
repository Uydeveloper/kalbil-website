// src/components/learn-modules/python-components/PythonDataScience.jsx
import React from 'react';
import { BarChart, LineChart, PieChart, Database, TrendingUp } from 'lucide-react';

const PythonDataScience = ({ onComplete }) => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100">
        <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <BarChart className="w-5 h-5 text-teal-500" />
          سانلىق مەلۇمات تەھلىلى زەنجىرى
        </h5>
        <div className="grid grid-cols-5 gap-4">
          {['سانلىق مەلۇمات توپلاش', 'پاكلىشىش', 'تەھلىل', 'كۆرسىتىش', 'نەتىجە'].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                {index + 1}
              </div>
              <div className="text-xs text-gray-700">{step}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-6 h-6 text-blue-500" />
            <h6 className="font-semibold text-gray-800">سانلىق مەلۇمات مەنبەلىرى</h6>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• CSV، Excel ھۆججەتلىرى</li>
            <li>• SQL سانلىق مەلۇمات بازىسى</li>
            <li>• API ئارقىلىق</li>
            <li>• تور بېتىدىن</li>
            <li>• Sensor ۋە ئۈسكۈنىلەر</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <LineChart className="w-6 h-6 text-green-500" />
            <h6 className="font-semibold text-gray-800">تەھلىل قىلىش</h6>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• ئىستاتىستىكىلىق تەھلىل</li>
            <li>• ماشىنا ئۆگىنىش</li>
            <li>• ۋاقىت قاتارى تەھلىلى</li>
            <li>• كۆرۈنۈش تەھلىلى</li>
            <li>• تېكىست تەھلىلى</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <PieChart className="w-6 h-6 text-purple-500" />
            <h6 className="font-semibold text-gray-800">كۆرسىتىش</h6>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• گرافىك ۋە رەسىم</li>
            <li>• ھەرەكەتلىك كۆرسىتىش</li>
            <li>• 3D گرافىك</li>
            <li>• Interactive Dashboard</li>
            <li>• Report ۋە PDF</li>
          </ul>
        </div>
      </div>

      {/* ماتېرىيال مىسالى */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h5 className="font-bold text-gray-800 mb-4">مىسال: سودا سانلىق مەلۇمات تەھلىلى</h5>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# سانلىق مەلۇمات يۈكلەش
سودا = pd.read_csv('سودا_سانلىق_مەلۇمات.csv')

# ئاساسىي ئۇچۇرلار
print(سودا.info())
print("\\nئالدىنقى 5 قۇر:")
print(سودا.head())

# تەھلىل
ھەجىم_سۇممىسى = سودا.groupby('مەھسۇلات')['سۇمما'].sum()
ئوتتۇرا_باھا = سودا['باھا'].mean()
ئومۇمىي_كىرىم = سودا['سۇمما'].sum()

print(f"\\nئومۇمىي كىرىم: {ئومۇمىي_كىرىم}")
print(f"ئوتتۇرا باھا: {ئوتتۇرا_باھا}")`}
            </pre>
          </div>
          
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border border-teal-200">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-teal-500" />
              <h6 className="font-semibold text-gray-800">تەھلىل نەتىجىسى:</h6>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">ئومۇمىي كىرىم</span>
                  <span className="text-sm font-semibold">₩1,234,567</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">ئوتتۇرا باھا</span>
                  <span className="text-sm font-semibold">₩45.67</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">ئەڭ كۆپ ساتقان مەھسۇلات</span>
                  <span className="text-sm font-semibold">ئېلېكتىرلىك ماتور</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* تاماملا */}
      <div className="flex justify-end">
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-300"
        >
          <BarChart className="w-5 h-5" />
          سانلىق مەلۇمات تەھلىلىنى تاماملا
        </button>
      </div>
    </div>
  );
};

export default PythonDataScience;