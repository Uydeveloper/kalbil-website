// src/components/learn-modules/quantum-components/QuantumFuture.jsx
// src/components/learn-modules/quantum-components/QuantumFuture.jsx
import React from 'react';
import { Rocket, Globe, FlaskConical, Shield, Brain, Zap } from 'lucide-react'; // Flask → FlaskConical

const QuantumFuture = ({ onComplete }) => {
  const applications = [
    {
      icon: FlaskConical, // Flask → FlaskConical
      title: 'دورا بايقاش',
      description: 'كىۋانىت سىمۇلاتسىيە بىلەن يېڭى دورىلارنى تېز بايقاش',
      timeline: '2025-2030',
      impact: 'يۇقىرى'
    },
    {
      icon: Globe,
      title: 'ماتېرىيال پەنلىرى',
      description: 'يېڭى ئۆتكۈزگۈچ ۋە ماتېرىياللارنى تەتقىق قىلىش',
      timeline: '2030-2035',
      impact: 'يۇقىرى'
    },
    {
      icon: Shield,
      title: 'كىۋانىت خەۋپسىزلىك',
      description: 'كىۋانىت خەت-بەت مەخپىيەتلىك ۋە خەۋپسىزلىك',
      timeline: '2035-2040',
      impact: 'ئىنتايىن يۇقىرى'
    },
    {
      icon: Brain,
      title: 'كىۋانىت سۈنئىي ئەقىل',
      description: 'كىۋانىت ماشىنا ئۆگىنىش بىلەن كۈچلۈك سۈنئىي ئەقىل',
      timeline: '2040-2045',
      impact: 'ئىنتايىن يۇقىرى'
    },
    {
      icon: Zap,
      title: 'كىۋانىت ئېنېرگىيە',
      description: 'كۇرېيەت ئېنېرگىيەسىنى تەتقىق قىلىش',
      timeline: '2045-2050',
      impact: 'تارىخىي'
    },
  ];

  // ... باقىقى ئوخشاش ...

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
        <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Rocket className="w-5 h-5 text-orange-500" />
          كىۋانىت تېخنىكىسىنىڭ كەلگۈسى
        </h5>
        <p className="text-gray-700">
          كىۋانىت كومپيۇتىر يېڭى بىر تېخنىكىلىق ئىنقىلابنى باشلاپ، 
          ھەر خىل ساھەلەردە ئىنتايىن چوڭ تەسىر كۆرسىتىدۇ
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-6">
        {applications.map((app, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className={`p-3 rounded-lg ${
                index === 0 ? 'bg-blue-100 text-blue-600' :
                index === 1 ? 'bg-green-100 text-green-600' :
                index === 2 ? 'bg-red-100 text-red-600' :
                index === 3 ? 'bg-purple-100 text-purple-600' :
                'bg-yellow-100 text-yellow-600'
              }`}>
                <app.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h6 className="font-bold text-gray-800 mb-1">{app.title}</h6>
                <p className="text-sm text-gray-600">{app.description}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500">ۋاقىت</div>
                <div className="font-semibold text-gray-800">{app.timeline}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">تەسىرى</div>
                <div className={`font-semibold ${
                  app.impact === 'تارىخىي' ? 'text-red-600' :
                  app.impact === 'ئىنتايىن يۇقىرى' ? 'text-orange-600' :
                  'text-green-600'
                }`}>
                  {app.impact}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h5 className="font-bold text-gray-800 mb-4">كىۋانىت ئىلگىرىلىش يولخەرىتى:</h5>
        
        <div className="relative">
          {/* ۋاقىت سىزىقى */}
          <div className="flex items-center justify-between mb-8">
            {[2023, 2030, 2040, 2050].map((year, index) => (
              <div key={year} className="text-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                  index === 0 ? 'bg-blue-500' :
                  index === 1 ? 'bg-green-500' :
                  index === 2 ? 'bg-orange-500' :
                  'bg-red-500'
                }`}>
                  <span className="text-white font-bold">{year}</span>
                </div>
                <div className="text-xs text-gray-600">
                  {index === 0 ? 'كىۋانىت ئارىلاشما' :
                   index === 1 ? 'كىۋانىت ئۈستۈنلۈك' :
                   index === 2 ? 'كىۋانىت ئىنقىلاب' :
                   'كىۋانىت دەۋر'}
                </div>
              </div>
            ))}
          </div>
          
          {/* ئىلگىرىلىش سىزىقى */}
          <div className="absolute top-5 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 via-orange-500 to-red-500 -z-10"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-100">
            <div className="font-bold text-blue-600 text-lg">1,000+</div>
            <div className="text-sm text-gray-600">كىۋانىت بىت</div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
            <div className="font-bold text-green-600 text-lg">99.9%</div>
            <div className="text-sm text-gray-600">ئىنچىكە</div>
          </div>
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-100">
            <div className="font-bold text-orange-600 text-lg">1M+</div>
            <div className="text-sm text-gray-600">كىۋانىت يول</div>
          </div>
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg border border-red-100">
            <div className="font-bold text-red-600 text-lg">100x</div>
            <div className="text-sm text-gray-600">سۈرئەت</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
        <h5 className="font-bold text-gray-800 mb-3">كىۋانىت كەلگۈسىدىكى تەسىرلىرى:</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="font-semibold text-gray-800 mb-2">پەن ۋە تېخنىكا</div>
            <p className="text-sm text-gray-600">يېڭى كەشپىياتلار ۋە ئىلمىي تەرەققىيات</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="font-semibold text-gray-800 mb-2">ئىقتىساد ۋە سانائەت</div>
            <p className="text-sm text-gray-600">يېڭى سانائەتلەر ۋە ئىقتىسادىي ئۆسۈش</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="font-semibold text-gray-800 mb-2">جەمئىيەت ۋە مەدەنىيەت</div>
            <p className="text-sm text-gray-600">تۇرمۇش ۋە مەدەنىيەتنىڭ ئۆزگىرىشى</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          <span className="font-semibold">{applications.length}</span> كەلگۈسىدىكى ئىشلىتىش ساھەسى
        </div>
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300"
        >
          <Rocket className="w-5 h-5" />
          كىۋانىت كەلگۈسىنى تاماملا
        </button>
      </div>
    </div>
  );
};

export default QuantumFuture;