// src/components/learn-modules/GeographyModule.jsx
import React, { useState } from 'react';
import { MapPin, Navigation, Mountain, Users, Building, Landmark } from 'lucide-react';
import uyghurRegionsData from './uyghurRegionsData';

const GeographyModule = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [selectedTown, setSelectedTown] = useState(null);

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setSelectedCity(null);
    setSelectedCounty(null);
    setSelectedTown(null);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSelectedCounty(null);
    setSelectedTown(null);
  };

  const handleCountySelect = (county) => {
    setSelectedCounty(county);
    setSelectedTown(null);
  };

  const handleTownSelect = (town) => {
    setSelectedTown(town);
  };

  const getGeographyDescription = (location) => {
    const descriptions = {
      kashgar: "قەشقەر — تەڭرىتاغنىڭ جەنۇبىي ئېتىكىگىدە، تارىم ئويمانلىقىنىڭ غەربىي چېتىدە جايلاشقان. دېڭىز يۈزىدىن ئېگىزلىكى 1280 مېتىر.",
      urumqi: "ئۈرۈمچى — تەڭرىتاغنىڭ شىمالىي ئېتىكىگىدە، جۇڭغار ئويمانلىقىنىڭ جەنۇبىي چېتىدە. دېڭىز يۈزىدىن ئېگىزلىكى 800 مېتىر.",
      turpan: "تۇرپان — دۇنيادىكى ئەڭ تۆۋەن نۇقتىلارنىڭ بىرى، دېڭىز يۈزىدىن ئېگىزلىكى -154 مېتىر. قۇرۇق ئىقلىملىق ھەرىزە رايونى.",
      korla: "كورلا — تەڭرىتاغ ۋە كۇرۇكتاغ ئارىلىقىدىكى بوسىتېڭ كۆلى ھاۋزىسىدا جايلاشقان. دېڭىز يۈزىدىن ئېگىزلىكى 930 مېتىر.",
      karamay: "قاراماي — جۇڭغار ئويمانلىقىنىڭ غەربىي قىسمىدا، قاراماي چۆلۈنىڭ ئوتتۇرىسىدا. دېڭىز يۈزىدىن ئېگىزلىكى 400 مېتىر.",
      hotan: "خوتەن — تەڭرىتاغ ۋە كۇڭلۇنتاغ ئارىلىقىدىكى خوتەن ۋادىسىدا. دېڭىز يۈزىدىن ئېگىزلىكى 1375 مېتىر.",
      aksu: "ئاقسۇ — تەڭرىتاغنىڭ جەنۇبىي ئېتىكىگىدە، ئاقسۇ دەرياسى بويىدا. دېڭىز يۈزىدىن ئېگىزلىكى 1100 مېتىر.",
      gulja: "غۇلجا — ئىلى ۋادىسىنىڭ ئوتتۇرىسىدا، ئىلى دەرياسى بويىدا. دېڭىز يۈزىدىن ئېگىزلىكى 670 مېتىر.",
      artux: "ئاتۇش — پامىر يېزىسىنىڭ شىمالىي ئېتىكىگىدە، قىزىلسۇ دەرياسى بويىدا. دېڭىز يۈزىدىن ئېگىزلىكى 1300 مېتىر.",
      hami: "قۇمۇل — تەڭرىتاغنىڭ شەرقىي ئۇچىدا، قۇمۇل ئويمانلىقىدا. دېڭىز يۈزىدىن ئېگىزلىكى 760 مېتىر.",
      altay: "ئالتاي — ئالتاي تېغىنىڭ جەنۇبىي ئېتىكىگىدە، ئالتاي ۋادىسىدا. دېڭىز يۈزىدىن ئېگىزلىكى 880 مېتىر."
    };
    return descriptions[location] || `${location} — مۇھىم جۇغراپىيىلىك ئورۇن`;
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-5 rounded-xl border border-emerald-200">
        <h3 className="text-2xl font-bold text-emerald-800">ئۇيغۇر جۇغراپىيىسى</h3>
        <p className="text-gray-700 mt-2">
          شىنجاڭ — تاغ (تىيانشان)، چۆل (تاكلاماقان)، كۆل (باغراش كۆلى) بار. ئىقلىمى قۇرۇق، قىش سوغۇق، ياز ئىسسىق.
        </p>
        <div className="mt-2 text-sm text-gray-600">مەركىزى: ئۈرۈمچى</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* رايونلار تىزىملىكى */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
              <Building className="w-5 h-5 text-blue-600" />
              رايونلار ({uyghurRegionsData.length})
            </h4>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {uyghurRegionsData.map((region) => (
                <button
                  key={region.id}
                  onClick={() => handleRegionSelect(region)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    selectedRegion?.id === region.id
                      ? 'bg-blue-100 border border-blue-300 shadow-sm'
                      : 'bg-white border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-semibold text-gray-800">{region.name}</div>
                  <div className="text-sm text-gray-600 mt-1">{region.description}</div>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {region.population}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mountain className="w-3 h-3" />
                      {region.area}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* تاللانغان رايون تەپسىلاتى */}
        <div className="lg:col-span-3 space-y-4">
          {selectedRegion ? (
            <>
              {/* رايون ئۇچۇرى */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">{selectedRegion.name}</h4>
                    <p className="text-gray-700">{selectedRegion.description}</p>
                    <p className="text-gray-600 mt-2">{getGeographyDescription(selectedRegion.id)}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>نوپۇس: {selectedRegion.population}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Mountain className="w-4 h-4" />
                        <span>يەر كۆلىمى: {selectedRegion.area}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* رايون ئالاھىدىلىكلىرى */}
                <div className="mt-4">
                  <h5 className="font-semibold text-gray-700 mb-2">ئالاھىدىلىكلىرى:</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedRegion.features.map((feature, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* شەھەرلەر */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h5 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-green-600" />
                  شەھەرلەر ۋە ناھىيىلەر ({selectedRegion.cities.length})
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedRegion.cities.map((city) => (
                    <button
                      key={city.id}
                      onClick={() => handleCitySelect(city)}
                      className={`p-4 rounded-lg border transition-all text-left ${
                        selectedCity?.id === city.id
                          ? 'bg-green-50 border-green-300 shadow-sm'
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <div className="font-semibold text-gray-800">{city.name}</div>
                      <div className="text-sm text-gray-600 mt-1">{city.description}</div>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <Users className="w-3 h-3" />
                        <span>نوپۇس: {city.population}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* تاللانغان شەھەر تەپسىلاتى */}
              {selectedCity && (
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="font-bold text-lg text-gray-800">{selectedCity.name} تەپسىلاتى</h5>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Navigation className="w-4 h-4" />
                      <span>جۇغراپىيىلىك ئورنى: {getGeographyDescription(selectedCity.id)}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h6 className="font-semibold text-gray-700 mb-3">ئاساسىي ئۇچۇرلار</h6>
                      <div className="space-y-2 text-sm text-gray-600">
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
                      <h6 className="font-semibold text-gray-700 mb-3">ناھىيىلەر ({selectedCity.counties.length})</h6>
                      <div className="space-y-2">
                        {selectedCity.counties.map((county, index) => (
                          <button
                            key={index}
                            onClick={() => handleCountySelect(county)}
                            className={`w-full text-left p-3 rounded-lg border transition-all ${
                              selectedCounty?.name === county.name
                                ? 'bg-yellow-50 border-yellow-300'
                                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                            }`}
                          >
                            <div className="font-medium text-gray-800">{county.name}</div>
                            <div className="text-xs text-gray-600 mt-1">
                              نوپۇس: {county.population}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* تاللانغان ناھىيە تەپسىلاتى */}
              {selectedCounty && (
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="font-bold text-lg text-gray-800">{selectedCounty.name}</h5>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>نوپۇس: {selectedCounty.population}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h6 className="font-semibold text-gray-700 mb-2">ئاساسىي ئۇچۇرلار</h6>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>نوپۇس:</span>
                          <span className="font-medium">{selectedCounty.population}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>جۇغراپىيىلىك ئورنى:</span>
                          <span className="font-medium text-right">{selectedRegion.name} ئىچىدە</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h6 className="font-semibold text-gray-700 mb-2">ئالاھىدىلىكلىرى</h6>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {selectedCounty.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
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
            // رايون تاللانمىغان بولسا
            <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-700 mb-2">رايون تاللاڭ</h4>
              <p className="text-gray-600">سول تەرەپتىكى رايونلار تىزىملىكىدىن بىر رايوننى تاللاڭ</p>
            </div>
          )}
        </div>
      </div>

      <div className="text-center">
        <button className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-lg hover:from-emerald-700 hover:to-green-600 shadow-md transition-all">
          جۇغراپىيە تېستىنى باشلاش
        </button>
        <p className="text-gray-500 text-sm mt-2">8 سۇئال • 10 دەقىقە</p>
      </div>
    </div>
  );
};

export default GeographyModule;