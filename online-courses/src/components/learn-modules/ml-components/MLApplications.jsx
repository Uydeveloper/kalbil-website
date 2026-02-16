// src/components/learn-modules/ml-components/MLApplications.jsx
import React from 'react';
import { Globe, Camera, MessageSquare, Shield, Car, Stethoscope } from 'lucide-react';

const MLApplications = ({ onComplete }) => {
  const applications = [
    {
      icon: Camera,
      title: 'رەسىم تەھلىلى',
      description: 'رەسىملەردىكى نەرسىلەرنى تونۇش ۋە تەھلىل قىلىش',
      examples: ['يۈز تونۇش', 'نەرسە تونۇش', 'رەسىم تەقسىملەش'],
      accuracy: '98%'
    },
    {
      icon: MessageSquare,
      title: 'تىل بىر تەرەپ قىلىش',
      description: 'تىل ۋە تېكىستلارنى ئۆگىنىش ۋە بىر تەرەپ قىلىش',
      examples: ['تەرجىمە', 'ھېس-ھال تەھلىلى', 'چاتبوت'],
      accuracy: '95%'
    },
    {
      icon: Car,
      title: 'ئاپتوماتىك ھەيدەش',
      description: 'ماشىنىنى ئاپتوماتىك ھەيدەش ۋە يول تاللاش',
      examples: ['يول تونۇش', 'توققانلاردىن ساقلىنىش', 'پاركىڭ'],
      accuracy: '99.9%'
    },
    {
      icon: Stethoscope,
      title: 'تېببىي تەشخىس',
      description: 'تېببىي رەسىم ۋە سانلىق مەلۇماتلارنى تەھلىل قىلىش',
      examples: ['تۇمور بايقاش', 'ئىكەن ئالدىن بىلىش', 'دورا تەكشۈرۈش'],
      accuracy: '96%'
    },
    {
      icon: Shield,
      title: 'خەۋپسىزلىك',
      description: 'خەۋپ ۋە ئالدامچىلىقنى بايقاش',
      examples: ['ئالدامچىلىق بايقاش', 'خەۋپ تەھلىلى', 'سىستېما كۆزىتىش'],
      accuracy: '97%'
    },
    {
      icon: Globe,
      title: 'تەۋسىيە سىستېمىسى',
      description: 'ئىشلەتكۈچىگە ماس كېلىدىغان مەزمۇن تەۋسىيە قىلىش',
      examples: ['فىلىم تەۋسىيە', 'مەھسۇلات تەۋسىيە', 'مەزمۇن تەۋسىيە'],
      accuracy: '92%'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
        <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5 text-indigo-500" />
          ماشىنا ئۆگىنىشنىڭ ھەقىقىي دۇنيادىكى ئىشلىتىشى
        </h5>
        <p className="text-gray-700">
          ماشىنا ئۆگىنىش ھازىر كۈندىلىك تۇرمۇشىمىزنىڭ ھەر ساھەسىدە ئىشلىتىلىۋاتىدۇ
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg">
                <app.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h6 className="font-bold text-gray-800 mb-1">{app.title}</h6>
                <p className="text-sm text-gray-600">{app.description}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="text-xs font-medium text-gray-500 mb-2">مىساللار:</div>
              <div className="flex flex-wrap gap-1">
                {app.examples.map((example, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {example}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500">ئىنچىكە</div>
                <div className="font-bold text-indigo-600">{app.accuracy}</div>
              </div>
              <div className="w-16">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-blue-500 h-1.5 rounded-full"
                    style={{ width: app.accuracy }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h5 className="font-bold text-gray-800 mb-4">كەلگۈسىدىكى تېخنىكىلار:</h5>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
            <div className="font-semibold text-gray-800 mb-2">ئەقىللىق ماشىنا</div>
            <p className="text-sm text-gray-600">
              ئىنسانلارغا ئوخشاش چۈشىنىش ۋە قارار چىقىرىش
            </p>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-100">
            <div className="font-semibold text-gray-800 mb-2">كىۋانىت ماشىنا ئۆگىنىش</div>
            <p className="text-sm text-gray-600">
              كىۋانىت كومپيۇتىر بىلەن تېخىمۇ تېز ئۆگىنىش
            </p>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-100">
            <div className="font-semibold text-gray-800 mb-2">تەبىئىي تىل بىر تەرەپ قىلىش</div>
            <p className="text-sm text-gray-600">
              تىلنى ئىنسانلارغا ئوخشاش چۈشىنىش ۋە جاۋاب قايتۇرۇش
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          <span className="font-semibold">{applications.length}</span> ئەمەلىي ئىشلىتىش ساھەسى
        </div>
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300"
        >
          <Globe className="w-5 h-5" />
          ئەمەلىي ئىشلىتىشنى تاماملا
        </button>
      </div>
    </div>
  );
};

export default MLApplications;