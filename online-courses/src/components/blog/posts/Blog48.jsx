import React, { useState } from 'react';

const Blog48 = () => {
  // باشلانغۇچ رەڭلەر
  const initialColors = [
    {
      id: 1,
      nameUy: 'قىزىل',
      nameEn: 'Red',
      hex: '#FF0000',
      rgb: 'rgb(255, 0, 0)',
      category: 'ئاساسىي رەڭلەر'
    },
    {
      id: 2,
      nameUy: 'كۆك',
      nameEn: 'Blue',
      hex: '#0000FF',
      rgb: 'rgb(0, 0, 255)',
      category: 'ئاساسىي رەڭلەر'
    },
    {
      id: 3,
      nameUy: 'يېشىل',
      nameEn: 'Green',
      hex: '#00FF00',
      rgb: 'rgb(0, 255, 0)',
      category: 'ئاساسىي رەڭلەر'
    },
    {
      id: 4,
      nameUy: 'سېرىق',
      nameEn: 'Yellow',
      hex: '#FFFF00',
      rgb: 'rgb(255, 255, 0)',
      category: 'ئاساسىي رەڭلەر'
    },
    {
      id: 5,
      nameUy: 'ئاق',
      nameEn: 'White',
      hex: '#FFFFFF',
      rgb: 'rgb(255, 255, 255)',
      category: 'ئاساسىي رەڭلەر'
    },
    {
      id: 6,
      nameUy: 'قارا',
      nameEn: 'Black',
      hex: '#000000',
      rgb: 'rgb(0, 0, 0)',
      category: 'ئاساسىي رەڭلەر'
    },
    {
      id: 7,
      nameUy: 'بىنەپشە',
      nameEn: 'Purple',
      hex: '#800080',
      rgb: 'rgb(128, 0, 128)',
      category: 'ئارىلاش رەڭلەر'
    },
    {
      id: 8,
      nameUy: 'پۇرتقۇل سېرىق',
      nameEn: 'Orange',
      hex: '#FFA500',
      rgb: 'rgb(255, 165, 0)',
      category: 'ئارىلاش رەڭلەر'
    },
    {
      id: 9,
      nameUy: 'كۈلرەڭ',
      nameEn: 'Gray',
      hex: '#808080',
      rgb: 'rgb(128, 128, 128)',
      category: 'ئارىلاش رەڭلەر'
    },
    {
      id: 10,
      nameUy: 'قوڭۇر',
      nameEn: 'Brown',
      hex: '#A52A2A',
      rgb: 'rgb(165, 42, 42)',
      category: 'ئارىلاش رەڭلەر'
    },
    {
      id: 11,
      nameUy: 'رەڭگارەڭ',
      nameEn: 'Pink',
      hex: '#FFC0CB',
      rgb: 'rgb(255, 192, 203)',
      category: 'يۇمشاق رەڭلەر'
    },
    {
      id: 12,
      nameUy: 'سۇس يېشىل',
      nameEn: 'Light Green',
      hex: '#90EE90',
      rgb: 'rgb(144, 238, 144)',
      category: 'يۇمشاق رەڭلەر'
    },
  ];

  const [colors, setColors] = useState(initialColors);
  const [newColor, setNewColor] = useState({
    nameUy: '',
    nameEn: '',
    hex: '#FFFFFF',
    category: 'ئۆز رەڭىڭىز'
  });
  const [selectedColor, setSelectedColor] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // يېڭى رەڭ قوشۇش
  const handleAddColor = (e) => {
    e.preventDefault();
    if (newColor.nameUy.trim() === '' || newColor.nameEn.trim() === '') {
      alert('رەڭ ئىسمىنى كىرگۈزۈڭ!');
      return;
    }
    
    const newColorObj = {
      id: colors.length + 1,
      nameUy: newColor.nameUy,
      nameEn: newColor.nameEn,
      hex: newColor.hex,
      rgb: hexToRgb(newColor.hex),
      category: newColor.category
    };
    
    setColors([...colors, newColorObj]);
    setNewColor({
      nameUy: '',
      nameEn: '',
      hex: '#FFFFFF',
      category: 'ئۆز رەڭىڭىز'
    });
  };

  // HEX نى RGB غا ئايلاندۇرۇش
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  // رەڭ كاتېگورىيىلىرى
  const categories = ['ھەممىسى', 'ئاساسىي رەڭلەر', 'ئارىلاش رەڭلەر', 'يۇمشاق رەڭلەر', 'ئۆز رەڭىڭىز'];
  const [selectedCategory, setSelectedCategory] = useState('ھەممىسى');

  // كاتېگورىيە بويىچە رەڭلەرنى سۈزۈش
  const filteredColors = selectedCategory === 'ھەممىسى' 
    ? colors 
    : colors.filter(color => color.category === selectedCategory);

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800'}`}
         style={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
      
      {/* باش تېما */}
      <header className="py-8 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2 text-blue-700 dark:text-blue-400">
          رەڭلەر دۇنياسى
        </h1>
        <p className="text-lg mb-4 dark:text-gray-300">
          ھەرخىل رەڭلەرنى ئۆگىنىڭ ۋە ئۆز رەڭىڭىزنى يارىتىڭ
        </p>
        
        <div className="flex justify-center items-center space-x-4 mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            {darkMode ? 'كۈندۈز مودى' : 'كىچە مودى'}
          </button>
          
          <div className="text-sm">
            {colors.length} خىل رەڭ تېپىلدى
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* سول تەرەپ: رەڭ قوشۇش پورتى */}
          <div className={`lg:col-span-1 p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-2xl font-bold mb-6 text-center text-green-600 dark:text-green-400">
              يېڭى رەڭ قوشۇش
            </h2>
            
            <form onSubmit={handleAddColor}>
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">رەڭ ئىسمى (ئۇيغۇرچە)</label>
                  <input
                    type="text"
                    value={newColor.nameUy}
                    onChange={(e) => setNewColor({...newColor, nameUy: e.target.value})}
                    className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'}`}
                    placeholder="مەسىلەن: گۈل رەڭ"
                    required
                  />
                </div>
                
                <div>
                  <label className="block mb-1 font-medium">Color Name (English)</label>
                  <input
                    type="text"
                    value={newColor.nameEn}
                    onChange={(e) => setNewColor({...newColor, nameEn: e.target.value})}
                    className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'}`}
                    placeholder="Example: Rose Color"
                    required
                  />
                </div>
                
                <div>
                  <label className="block mb-1 font-medium">رەڭ كودى (HEX)</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="color"
                      value={newColor.hex}
                      onChange={(e) => setNewColor({...newColor, hex: e.target.value})}
                      className="h-12 w-20 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={newColor.hex}
                      onChange={(e) => setNewColor({...newColor, hex: e.target.value})}
                      className={`flex-grow p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'}`}
                      placeholder="#FF5733"
                      pattern="^#[0-9A-Fa-f]{6}$"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block mb-1 font-medium">كاتېگورىيە</label>
                  <select
                    value={newColor.category}
                    onChange={(e) => setNewColor({...newColor, category: e.target.value})}
                    className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'}`}
                  >
                    <option value="ئۆز رەڭىڭىز">ئۆز رەڭىڭىز</option>
                    <option value="ئاساسىي رەڭلەر">ئاساسىي رەڭلەر</option>
                    <option value="ئارىلاش رەڭلەر">ئارىلاش رەڭلەر</option>
                    <option value="يۇمشاق رەڭلەر">يۇمشاق رەڭلەر</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold hover:opacity-90 transition-all"
                >
                  رەڭنى قوشۇش
                </button>
              </div>
            </form>
            
            {/* يېڭى رەڭنىڭ كۆرۈنۈشى */}
            {newColor.hex && (
              <div className="mt-8 p-4 rounded-xl" style={{backgroundColor: newColor.hex}}>
                <div className={`text-center p-3 rounded-lg ${parseInt(newColor.hex.slice(1, 3), 16) > 200 ? 'text-black' : 'text-white'}`}>
                  <div className="font-bold text-lg">{newColor.nameUy || 'يېڭى رەڭ'}</div>
                  <div className="text-sm">{newColor.nameEn || 'New Color'}</div>
                  <div className="text-sm mt-2">{newColor.hex} | {hexToRgb(newColor.hex)}</div>
                </div>
              </div>
            )}
          </div>
          
          {/* ئوڭ تەرەپ: رەڭلەر كۆرسىتىش */}
          <div className="lg:col-span-2">
            {/* كاتېگورىيە تاللاش */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-center">رەڭ كاتېگورىيىسى تاللاش</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2 rounded-full transition-all ${selectedCategory === category 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* رەڭلەر تىزىملىكى */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredColors.map((color) => (
                <div 
                  key={color.id} 
                  className={`rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] cursor-pointer ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                  onClick={() => setSelectedColor(color)}
                >
                  {/* رەڭ بۆلەكچىسى */}
                  <div 
                    className="h-40 w-full relative"
                    style={{backgroundColor: color.hex}}
                  >
                    <div className={`absolute bottom-0 left-0 right-0 p-3 ${parseInt(color.hex.slice(1, 3), 16) > 200 ? 'text-black' : 'text-white'}`}>
                      <div className="font-bold text-xl">{color.nameUy}</div>
                      <div className="text-md">{color.nameEn}</div>
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold bg-black bg-opacity-30 text-white">
                      {color.category}
                    </div>
                  </div>
                  
                  {/* رەڭ ئۇچۇرلىرى */}
                  <div className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className={`p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <div className="font-medium">HEX:</div>
                        <div className="font-mono">{color.hex}</div>
                      </div>
                      <div className={`p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <div className="font-medium">RGB:</div>
                        <div className="font-mono">{color.rgb}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* رەڭلەر تىزىملىكى قۇرۇق بولسا */}
            {filteredColors.length === 0 && (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-2">رەڭ تېپىلمىدى</h3>
                <p className="text-gray-600 dark:text-gray-400">تاللىغان كاتېگورىيىدە رەڭ يوق ياكى يېڭى رەڭ قوشۇڭ</p>
              </div>
            )}
          </div>
        </div>
        
        {/* تاللانغان رەڭ ئۇچۇرى */}
        {selectedColor && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
            <div className={`max-w-md w-full rounded-2xl overflow-hidden shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div 
                className="h-60 w-full relative flex items-center justify-center"
                style={{backgroundColor: selectedColor.hex}}
              >
                <button 
                  onClick={() => setSelectedColor(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black bg-opacity-30 text-white flex items-center justify-center hover:bg-opacity-50"
                >
                  ✕
                </button>
                <div className={`text-center p-6 rounded-xl bg-black bg-opacity-30 ${parseInt(selectedColor.hex.slice(1, 3), 16) > 200 ? 'text-black' : 'text-white'}`}>
                  <div className="font-bold text-3xl mb-2">{selectedColor.nameUy}</div>
                  <div className="text-xl mb-4">{selectedColor.nameEn}</div>
                  <div className="text-lg font-mono">{selectedColor.hex}</div>
                </div>
              </div>
              
              <div className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-xl font-bold mb-4">رەڭ ئۇچۇرلىرى</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">كاتېگورىيە:</span>
                    <span>{selectedColor.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">HEX كودى:</span>
                    <span className="font-mono">{selectedColor.hex}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">RGB قىممىتى:</span>
                    <span className="font-mono">{selectedColor.rgb}</span>
                  </div>
                  <div className="pt-4">
                    <p className="italic text-gray-600 dark:text-gray-400">
                      بۇ رەڭنى قىممەتلىك دېسىڭىز، ئۇنى ئۆز رەڭلىرىڭىز قاتارىغا قوشالايسىز!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* ئاياغ بۆلەك */}
      <footer className={`py-6 text-center ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
        <div className="container mx-auto px-4">
          <p className="mb-2">© 2023 رەڭلەر دۇنياسى - ھەممە رەڭلەرنى ئۆگىنىش بېتى</p>
          <p className="text-sm">بۇ بەت React ۋە Tailwind CSS ئىشلىتىپ ياسالدى</p>
          <div className="mt-4 flex justify-center space-x-6">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span>قىزىل</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span>كۆك</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span>يېشىل</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog48;