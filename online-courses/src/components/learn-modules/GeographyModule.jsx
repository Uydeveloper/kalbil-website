// src/components/learn-modules/GeographyModule.jsx
import React, { useState } from 'react';
import { MapPin, Navigation, Mountain, Users, Building, Landmark, Compass, Thermometer, Droplets, Wind } from 'lucide-react';

const GeographyModule = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [activeView, setActiveView] = useState('regions'); // 'regions', 'map', 'quiz'

  // تولۇق ئۇيغۇر رايون مەلۇماتلىرى
  const uyghurRegionsData = [
    {
      id: "kashgar",
      name: "قەشقەر ۋىلايىتى",
      description: "قەدىمىي ئىپەك يولىنىڭ مەركىزى، ئۇيغۇر مەدەنىيىتىنىڭ بېشى",
      population: "4.5 مىليون",
      area: "162,000 km²",
      capital: "قەشقەر شەھىرى",
      coordinates: { lat: 39.467, lng: 75.993 },
      climate: "قۇرۇق ئىقلىم، يىللىق يامغۇر مىقدارى 60-100mm",
      elevation: "1280m",
      features: ["ئىد قەھۋىخانىسى", "خوجا ئەپەق مەزرى", "قەشقەر كونا شەھەر", "تەڭرىتاغ"],
      cities: [
        {
          id: "kashgar-city",
          name: "قەشقەر شەھىرى",
          population: "506,000",
          description: "قەشقەر ۋىلايىتىنىڭ مەركىزى، 2000 يىللىق تارىخقا ئىگە",
          elevation: "1280m",
          climate: "قۇرۇق ئىقلىم، قىش مۇلائىم، ياز ئىسسىق",
          counties: [
            { 
              name: "قەشقەر شەھەر رايونى", 
              population: "250,000", 
              elevation: "1290m",
              features: ["ئىد قەھۋىخانىسى", "خوجا ئەپەق مەزرى", "يېڭىشەھەر بازىرى", "قەدىمىي شەھەر"] 
            },
            { 
              name: "يېڭىشەھەر رايونى", 
              population: "256,000", 
              elevation: "1270m",
              features: ["يېڭى شەھەر مەركىزى", "سودا-سانائىتى مەركىزى", "ھۆكۈمەت ئىدارىلىرى", "زامانىۋى بىنانلار"] 
            }
          ]
        },
        {
          id: "yarkand",
          name: "يەكەن ناھىيىسى",
          population: "620,000",
          description: "قەدىمىي يەكەن خانلىقىنىڭ مەركىزى، تارىخىي شەھەر",
          elevation: "1230m",
          climate: "قۇرۇق ئىقلىم، قۇملۇق ھاۋا رايونى",
          counties: [
            { 
              name: "يەكەن بازىرى", 
              population: "150,000", 
              elevation: "1220m",
              features: ["يەكەن كۆھنىە مەزرى", "ئەنەر بازىرى", "قەدىمىي شەھەر خارابىلىرى", "مېۋە باغلىرى"] 
            },
            { 
              name: "تۆۋەن يەكەن يېزىسى", 
              population: "80,000", 
              elevation: "1250m",
              features: ["مېۋە-چېۋە باغلىرى", "دىھقانچىلىق رايونى", "ئۈزۈم باغلىرى", "قوغۇن تۇزمىلىرى"] 
            }
          ]
        }
      ]
    },
    {
      id: "urumqi",
      name: "ئۈرۈمچى شەھىرى",
      description: "ئۇيغۇر مەركىزى، ئىقتىساد ۋە مەدەنىيەت پايتەختى",
      population: "4.0 مىليون",
      area: "14,577 km²",
      capital: "ئۈرۈمچى شەھىرى",
      coordinates: { lat: 43.825, lng: 87.617 },
      climate: "قۇرۇق ئىقلىم، يىللىق يامغۇر مىقدارى 250-300mm",
      elevation: "800m",
      features: ["خۇڭشان پاركى", "خۇڭشان بازىرى", "ئۇيغۇر مۇزىيى", "خۇڭشان تېغى"],
      cities: [
        {
          id: "urumqi-city",
          name: "ئۈرۈمچى شەھىرى",
          population: "3,500,000",
          description: "ئۇيغۇرنىڭ مەركىزى، سانائەت ۋە سودا شەھىرى",
          elevation: "800m",
          climate: "قۇرۇق ئىقلىم، قىش ئۇزۇن ۋە سوغۇق",
          counties: [
            { 
              name: "تۈنجىۋەن رايونى", 
              population: "700,000", 
              elevation: "780m",
              features: ["تۈنجىۋەن بازىرى", "خۇڭشان پاركى", "مەركىزىي سودا رايونى", "بىزنېس مەركىزى"] 
            },
            { 
              name: "شۇيموگۇ رايونى", 
              population: "550,000", 
              elevation: "820m",
              features: ["شۇيموگۇ بازىرى", "ئۇنىۋېرسىتېت رايونى", "مەدەنىيەت مەركىزى", "ئوقۇش رايونى"] 
            }
          ]
        }
      ]
    },
    {
      id: "turpan",
      name: "تۇرپان ۋىلايىتى",
      description: "قۇرۇق ئىقلىملىق، مەھسۇلاتلىق رايون، ئۇزۇم ۋە قەۋەت بىلەن تونۇشلۇق",
      population: "650,000",
      area: "69,000 km²",
      capital: "تۇرپان شەھىرى",
      coordinates: { lat: 42.951, lng: 89.189 },
      climate: "ئىنتايىن قۇرۇق ئىقلىم، يىللىق يامغۇر مىقدارى 16mm",
      elevation: "-154m",
      features: ["يېزەل بازىرى", "قەۋەت", "ئۇزۇم باغلىرى", "دۇنيادىكى ئەڭ تۆۋەن رايون"],
      cities: [
        {
          id: "turpan-city",
          name: "تۇرپان شەھىرى",
          population: "280,000",
          description: "تۇرپان ۋىلايىتىنىڭ مەركىزى، قەۋەت ۋە ئۇزۇم بىلەن تونۇشلۇق",
          elevation: "-154m",
          climate: "ئىنتايىن قۇرۇق، ياز ئىسسىق، قىش مۇلائىم",
          counties: [
            { 
              name: "تۇرپان شەھەر رايونى", 
              population: "150,000", 
              elevation: "-160m",
              features: ["يېزەل بازىرى", "ئۇزۇم باغلىرى", "قەۋەت كارخانىلىرى", "قەدىمىي قورۇق"] 
            },
            { 
              name: "توقسۇن ناھىيىسى", 
              population: "130,000", 
              elevation: "-140m",
              features: ["توقسۇن قەۋىتى", "قۇرۇق ئىقلىم مەنزىرىسى", "قەۋەت مەيدانى", "قۇملۇق مەنزىرىسى"] 
            }
          ]
        }
      ]
    }
  ];

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

  const startQuiz = () => {
    setActiveView('quiz');
    // بۇ يەردە تېست باشلىنىشى مۇمكىن
    alert("جۇغراپىيە تېستى باشلاندى! 8 سۇئال، 10 دەقىقە ۋاقىت");
  };

  const renderClimateInfo = (location) => (
    <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
      <div className="flex items-center gap-1">
        <Thermometer className="w-4 h-4" />
        <span>ئېگىزلىك: {location.elevation}</span>
      </div>
      <div className="flex items-center gap-1">
        <Droplets className="w-4 h-4" />
        <span>ئىقلىم: {location.climate}</span>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* يۇقىرى قىسىم */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-5 rounded-xl border border-emerald-200">
        <h3 className="text-2xl font-bold text-emerald-800">ئۇيغۇر جۇغراپىيىسى</h3>
        <p className="text-gray-700 mt-2">
          ئۇيغۇر — تاغ (تىيانشان)، چۆل (تاكلاماقان)، كۆل (باغراش كۆلى) بار. ئىقلىمى قۇرۇق، قىش سوغۇق، ياز ئىسسىق.
        </p>
        <div className="mt-2 text-sm text-gray-600">مەركىزى: ئۈرۈمچى • يەر كۆلىمى: 1.6 مىليون km² • نوپۇس: 25 مىليون</div>
      </div>

      {/* ناۋىگاتسىيە تۈگۈنلىرى */}
      <div className="flex gap-2 bg-white p-2 rounded-lg border">
        <button
          onClick={() => setActiveView('regions')}
          className={`flex-1 py-2 px-4 rounded-md transition-all ${
            activeView === 'regions' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          📍 رايونلار
        </button>
        <button
          onClick={() => setActiveView('map')}
          className={`flex-1 py-2 px-4 rounded-md transition-all ${
            activeView === 'map' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          🗺️ خەرىتە
        </button>
        <button
          onClick={startQuiz}
          className={`flex-1 py-2 px-4 rounded-md transition-all ${
            activeView === 'quiz' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          📝 تېست
        </button>
      </div>

      {activeView === 'regions' && (
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
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-800 mb-2">{selectedRegion.name}</h4>
                      <p className="text-gray-700">{selectedRegion.description}</p>
                      <p className="text-gray-600 mt-2">{getGeographyDescription(selectedRegion.id)}</p>
                      {renderClimateInfo(selectedRegion)}
                    </div>
                    <div className="text-right ml-4">
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
                        {renderClimateInfo(city)}
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
                          {renderClimateInfo(selectedCity)}
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
                                نوپۇس: {county.population} • ئېگىزلىك: {county.elevation}
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
                            <span>ئېگىزلىك:</span>
                            <span className="font-medium">{selectedCounty.elevation}</span>
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
      )}

      {activeView === 'map' && (
        <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">ئۇيغۇر جۇغراپىيىلىك خەرىتىسى</h4>
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg border-2 border-dashed border-gray-300">
            <Compass className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">بۇ يەردە ئەمەلىي خەرىتە كۆرۈنىدۇ (Google Maps ياكى خەرىتە كومپونېنتى)</p>
            <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="bg-white p-3 rounded border">
                <div className="w-4 h-4 bg-blue-500 rounded mx-auto mb-2"></div>
                تاغلىق رايون
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="w-4 h-4 bg-green-500 rounded mx-auto mb-2"></div>
                يېزەل رايون
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="w-4 h-4 bg-yellow-500 rounded mx-auto mb-2"></div>
                قۇملۇق رايون
              </div>
            </div>
          </div>
        </div>
      )}

      {activeView === 'quiz' && (
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">جۇغراپىيە تېستى</h4>
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <p className="text-gray-700 mb-4">تېست تەييارلىقى داۋام قىلىۋاتىدۇ...</p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border">
                <p className="font-semibold">1. تۇرپاننىڭ ئېگىزلىكى قانچە؟</p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">A) 800m</button>
                  <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">B) -154m</button>
                  <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">C) 1280m</button>
                  <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">D) 2000m</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* تەكشۈرۈش توپچىسى */}
      <div className="text-center">
        <button 
          onClick={startQuiz}
          className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-lg hover:from-emerald-700 hover:to-green-600 shadow-md transition-all"
        >
          جۇغراپىيە تېستىنى باشلاش
        </button>
        <p className="text-gray-500 text-sm mt-2">8 سۇئال • 10 دەقىقە</p>
      </div>
    </div>
  );
};

export default GeographyModule;