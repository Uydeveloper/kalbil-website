// src/components/learn-modules/python-components/PythonBasics.jsx
import React from 'react';
import { Code, Zap, CheckCircle, Play } from 'lucide-react';

const PythonBasics = ({ onComplete }) => {
  return (
    <div className="space-y-6">
      {/* ئاساسىي ئۇچۇرلار */}
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
        <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-blue-500" />
          پايسوننىڭ ئالاھىدىلىكلىرى
        </h5>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-3 rounded-lg border border-blue-200">
            <div className="text-blue-600 font-bold mb-1">يۇمشاق</div>
            <div className="text-xs text-gray-600">قىيىنچىلىقسىز سىنتاكس</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-green-200">
            <div className="text-green-600 font-bold mb-1">كەڭ</div>
            <div className="text-xs text-gray-600">كۆپ خىل ساھەلەر</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-purple-200">
            <div className="text-purple-600 font-bold mb-1">ھەمكار</div>
            <div className="text-xs text-gray-600">جۇمھۇرىيەتچىلىك</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-red-200">
            <div className="text-red-600 font-bold mb-1">تېز</div>
            <div className="text-xs text-gray-600">تېخىمۇ تېز تەرەققىي قىلىش</div>
          </div>
        </div>
      </div>

      {/* مىسال كود */}
      <div>
        <h5 className="font-bold text-gray-800 mb-4">ئاساسىي سىنتاكس:</h5>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
            <div className="text-sm text-gray-400 mb-2">ئۆزگەرگۈچى ۋە تىپلار:</div>
            <pre className="text-sm overflow-x-auto">
{`# ئۆزگەرگۈچىلەر
ئىسىم = "ئەخمەد"
يېشى = 25
باھا = 98.5
ھەقىقىي = True

# تىپلار
print(type(ئىسىم))  # <class 'str'>
print(type(يېشى))   # <class 'int'>
print(type(باھا))   # <class 'float'>
print(type(ھەقىقىي)) # <class 'bool'>`}
            </pre>
          </div>
          
          <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
            <div className="text-sm text-gray-400 mb-2">ھېسابلاش ۋە تەڭلىك:</div>
            <pre className="text-sm overflow-x-auto">
{`# ھېسابلاش
a = 10
b = 3

قوشۇش = a + b        # 13
ئېلىش = a - b        # 7
كۆپەيتىش = a * b    # 30
بۆلۈش = a / b       # 3.333
پۈتۈن بۆلۈش = a // b # 3
قالدۇق = a % b      # 1
دارەجە = a ** b     # 1000

# تەڭلىك
نەتىجە = a > b      # True
نەتىجە = a == b     # False
نەتىجە = a != b     # True`}
            </pre>
          </div>
        </div>
      </div>

      {/* تەكشۈرۈش قىسىمى */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
        <h5 className="font-bold text-gray-800 mb-4">تەكشۈرۈڭ:</h5>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <input type="checkbox" id="check1" className="mt-1" />
            <label htmlFor="check1" className="text-gray-700">
              پايسون قانداق تىپ ئۆزگەرگۈچىلەرنى قوبۇل قىلىدۇ؟
            </label>
          </div>
          <div className="flex items-start gap-3">
            <input type="checkbox" id="check2" className="mt-1" />
            <label htmlFor="check2" className="text-gray-700">
              پايسوننىڭ ئاساسىي ھېسابلاش ئامىللىرىنى چۈشەندىڭىزمۇ؟
            </label>
          </div>
          <div className="flex items-start gap-3">
            <input type="checkbox" id="check3" className="mt-1" />
            <label htmlFor="check3" className="text-gray-700">
              پايسون كودىنى قانداق يازىدىغانلىقىڭىزنى بىلىسىز؟
            </label>
          </div>
        </div>
      </div>

      {/* تاماملا كونۇپكىسى */}
      <div className="flex justify-end">
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
        >
          <CheckCircle className="w-5 h-5" />
          بۇ بۆلۈمنى تاماملا
        </button>
      </div>
    </div>
  );
};

export default PythonBasics;