import React, { useState, useContext } from 'react';
import { MapPin, Users, Mountain, Building, Landmark, Navigation } from 'lucide-react';
import { useTheme } from '../context/ThemeContext'; // تېما ئۈچۈن ئىشلىتىلىدۇ
import uyghurRegionsData from './uyghurRegionsData';

const UyghurRegionsTab = () => {
  const { darkMode } = useTheme(); // تېما رەڭگە تەسىر كۆرسىتىدۇ
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCounty, setSelectedCounty] = useState(null);

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setSelectedCity(null);
    setSelectedCounty(null);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSelectedCounty(null);
  };

  const handleCountySelect = (county) => {
    setSelectedCounty(county);
  };

  const bgClass = darkMode
    ? "bg-gray-800 text-white border-gray-700"
    : "bg-white text-gray-800 border-gray-200";
  const panelBg = darkMode
    ? "bg-gray-900/60"
    : "bg-white";

  return (
    <div className={`${bgClass} rounded-2xl shadow-xl p-6 border transition-all`}>
      {/* باشلىق */}
      <div className="text-center mb-8">
        <div
          className={`w-18 h-18 mx-auto mb-5 rounded-full flex items-center justify-center shadow-lg ${
            darkMode ? "bg-gradient-to-r from-teal-600 to-purple-700" : "bg-gradient-to-r from-blue-500 to-purple-600"
          }`}
        >
          <Navigation className="w-9 h-9 text-white" />
        </div>
        <h2
          className={`text-3xl font-bold mb-3 bg-clip-text ${
            darkMode
              ? "text-transparent bg-gradient-to-r from-teal-300 to-purple-300"
              : "text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          }`}
        >
          ئۇيغۇر رايونلىرى
        </h2>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-lg`}>
          ئۇيغۇرلار ياشايدىغان باشلىق رايونلار ۋە شەھەرلەر
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* رايونلار تىزىملىكى */}
        <div className="lg:col-span-1">
          <div
            className={`rounded-xl p-5 border ${
              darkMode ? "bg-gray-900/50 border-gray-700" : "bg-gray-50 border-gray-200"
            }`}
          >
            <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
              <Building className="w-5 h-5 text-blue-500 dark:text-blue-400" />
              <span>رايونلار ({uyghurRegionsData.length})</span>
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              {uyghurRegionsData.map((region) => (
                <button
                  key={region.id}
                  onClick={() => handleRegionSelect(region)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                    selectedRegion?.id === region.id
                      ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-400 dark:border-blue-500 shadow-sm"
                      : `${
                          darkMode ? "bg-gray-800 border-gray-700 hover:bg-gray-700" : "bg-white border-gray-200 hover:bg-gray-50"
                        }`
                  }`}
                >
                  <div className={`font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {region.name}
                  </div>
                  <div className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {region.description}
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-xs">
                    <span className={`flex items-center gap-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                      <Users className="w-3 h-3" />
                      {region.population}
                    </span>
                    <span className={`flex items-center gap-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                      <Mountain className="w-3 h-3" />
                      {region.area}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* تاللانغان رايون/شەھەر/ناھىيە تەپسىلاتى */}
        <div className="lg:col-span-2 space-y-6">
          {selectedRegion ? (
            <>
              {/* رايون ئۇچۇرى */}
              <div
                className={`rounded-xl p-6 border ${
                  darkMode
                    ? "bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-700/50"
                    : "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h3 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"} mb-2`}>
                      {selectedRegion.name}
                    </h3>
                    <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {selectedRegion.description}
                    </p>
                  </div>
                  <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        نوپۇس: {selectedRegion.population}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mountain className="w-4 h-4" />
                        يەر كۆلىمى: {selectedRegion.area}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className={`font-semibold mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    ئالاھىدىلىكلىرى:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRegion.features.map((feature, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                          darkMode
                            ? "bg-blue-900/50 text-blue-300 border border-blue-700"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* شەھەرلەر */}
              <div className={`${panelBg} rounded-xl p-6 border ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                <h4 className="font-bold text-lg flex items-center gap-2 mb-4">
                  <Landmark className="w-5 h-5 text-green-600 dark:text-green-400" />
                  شەھەرلەر ۋە ناھىيىلەر ({selectedRegion.cities.length})
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedRegion.cities.map((city) => (
                    <button
                      key={city.id}
                      onClick={() => handleCitySelect(city)}
                      className={`p-4 rounded-xl border transition-all text-left ${
                        selectedCity?.id === city.id
                          ? "bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-400 dark:border-green-500 shadow-sm"
                          : `${
                              darkMode ? "bg-gray-800 border-gray-700 hover:bg-gray-700" : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                            }`
                      }`}
                    >
                      <div className={`font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                        {city.name}
                      </div>
                      <div className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        {city.description}
                      </div>
                      <div className={`flex items-center gap-2 mt-2 text-xs ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                        <Users className="w-3 h-3" />
                        نوپۇس: {city.population}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* شەھەر تەپسىلاتى */}
              {selectedCity && (
                <div className={`${panelBg} rounded-xl p-6 border ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                  <h4 className={`font-bold text-lg mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
                    {selectedCity.name} تەپسىلاتى
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className={`font-semibold mb-3 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>ئاساسىي ئۇچۇرلار</h5>
                      <div className={`space-y-2 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        <div className="flex justify-between">
                          <span>نوپۇس:</span>
                          <span className="font-medium">{selectedCity.population}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>تەسۋىر:</span>
                          <span className="font-medium text-right">{selectedCity.description}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className={`font-semibold mb-3 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        ناھىيىلەر ({selectedCity.counties.length})
                      </h5>
                      <div className="space-y-2">
                        {selectedCity.counties.map((county, index) => (
                          <button
                            key={index}
                            onClick={() => handleCountySelect(county)}
                            className={`w-full text-left p-3 rounded-xl border transition-all ${
                              selectedCounty?.name === county.name
                                ? "bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-400 dark:border-yellow-500"
                                : `${
                                    darkMode ? "bg-gray-800 border-gray-700 hover:bg-gray-700" : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                                  }`
                            }`}
                          >
                            <div className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>
                              {county.name}
                            </div>
                            <div className={`text-xs mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                              نوپۇس: {county.population}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ناھىيە تەپسىلاتى */}
              {selectedCounty && (
                <div
                  className={`rounded-xl p-6 border ${
                    darkMode
                      ? "bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-700/50"
                      : "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200"
                  }`}
                >
                  <h5 className={`font-bold text-lg mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
                    {selectedCounty.name}
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h6 className={`font-semibold mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>ئاساسىي ئۇچۇرلار</h6>
                      <div className={`space-y-2 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        <div className="flex justify-between">
                          <span>نوپۇس:</span>
                          <span className="font-medium">{selectedCounty.population}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h6 className={`font-semibold mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>ئالاھىدىلىكلىرى</h6>
                      <ul className={`space-y-2 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        {selectedCounty.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="mt-1 w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div
              className={`rounded-xl p-10 text-center border-dashed ${
                darkMode ? "bg-gray-900/40 border-gray-600 text-gray-400" : "bg-gray-50 border-gray-300 text-gray-500"
              }`}
            >
              <MapPin className="w-14 h-14 mx-auto mb-4 opacity-70" />
              <h3 className="text-xl font-semibold mb-2">رايون تاللاڭ</h3>
              <p>سول تەرەپتىكى رايونلار تىزىملىكىدىن بىر رايوننى تاللاڭ</p>
            </div>
          )}
        </div>
      </div>

      {/* Custom Scrollbar (ئىختىيارى) */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${darkMode ? "#4b5563" : "#cbd5e1"};
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${darkMode ? "#6b7280" : "#94a3b8"};
        }
      `}</style>
    </div>
  );
};

export default UyghurRegionsTab;