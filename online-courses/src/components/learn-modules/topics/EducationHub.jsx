// src/components/learn-modules/EducationHub.jsx
import React, { useState } from 'react';

// ئىمپورت — توغرا
// src/components/learn-modules/topics/EducationHub.jsx

import UyghurEduModule from './UyghurEduModule';
import ChinaEduModule from './ChinaEduModule';
import JapanEduModule from './JapanEduModule';
import ArabEduModule from './ArabEduModule';
import AmericaEduModule from './AmericaEduModule';

// ⚠️ بۇ يەردىكى كومپونېنت ئىسمى — "EducationHub" بولۇشى كېرەك!
const EducationHub = () => {  // ✅ "EducationHub", NOT "UyghurEduModule"
  const [activeModule, setActiveModule] = useState(null);

  const modules = {
    uyghur: <UyghurEduModule />,
    china: <ChinaEduModule />,
    japan: <JapanEduModule />,
    arab: <ArabEduModule />,
    america: <AmericaEduModule />,
  };

  const handleSelect = (key) => {
    setActiveModule(key === activeModule ? null : key);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 p-6 md:p-10">
      {/* باشلىق ۋە باشقا ئىچىكارا — ئوخشاش قاچىلىنىدۇ */}
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-indigo-700 text-white rounded-full text-lg font-bold mb-4">
            مائارىپ
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
            دۇنيا مائارىپ سىستېمىلىرى
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            بۇ يەردىن ئۇيغۇر، خەنزۇ، ياپون، ئەرەب ۋە ئامېرىكا مائارىپ قۇرۇلۇشى، ئىقتىدارى ۋە ئالاھىدىلىكىنى كۆرۈڭ.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
          {[
            { id: 'uyghur', label: 'ئۇيغۇر مائارىپى', color: 'bg-amber-500' },
            { id: 'china', label: 'خەنزۇ مائارىپى', color: 'bg-red-500' },
            { id: 'japan', label: 'ياپون مائارىپى', color: 'bg-pink-500' },
            { id: 'arab', label: 'ئەرەب مائارىپى', color: 'bg-green-600' },
            { id: 'america', label: 'ئامېرىكا مائارىپى', color: 'bg-blue-600' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className={`${item.color} text-white font-bold py-4 rounded-xl shadow-md hover:opacity-90 transition-all transform hover:scale-105`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-500 ease-in-out">
          {activeModule ? (
            modules[activeModule]
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">يۇقىرىدىكى بىر مائارىپ سىستېمىسىنى تاللاڭ</p>
              <p className="text-sm mt-2">ئۇچۇرلار بۇ يەرگە كۆرۈنەيدۇ</p>
            </div>
          )}
        </div>

        <footer className="text-center text-gray-500 text-sm mt-12">
          © 2025 — زامانىۋى تەلىم-تەربىيە مەلۇمات بازىسى
        </footer>
      </div>
    </div>
  );
};

// Export — ئىسمى ماس كەلدى
export default EducationHub;