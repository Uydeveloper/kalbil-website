// DataProcessingTest.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DataProcessingTest = () => {
  const [expandedChapter, setExpandedChapter] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const chapters = [
    { 
      id: 1, 
      ja: 'データ加工概論', 
      en: 'Introduction to Data Processing', 
      ug: 'دېتا قايتا ئىشلەشنىڭ ئومۇمىي تۇنۇشتۇرۇشى', 
      count: 2, 
      rate: 5.0, 
      note: '',
      topics: [
        { name: 'ETL/ELT جەريانى', importance: 'high', description: 'دېتا چىقىرىش، ئۆزگەرتىش، يۈكلەش' },
        { name: 'دېتا پاكىزلاش', importance: 'high', description: 'دېتادىكى قۇرۇق قىممەتلەر، خاتالىقلار' },
        { name: 'دېتا ئۆلچىمى', importance: 'medium', description: 'ستروكتۇرلىق، يېرىم-ستروكتۇرلىق، ستروكتۇرلىق ئەمەس دېتا' }
      ],
      color: 'from-blue-500 to-cyan-500',
      tools: ['Pandas', 'NumPy', 'SQL'],
      difficulty: 'يېڭى باشلىغۇچى'
    },
    { 
      id: 2, 
      ja: 'データの種類と読み込み', 
      en: 'Data Types and Loading', 
      ug: 'دېتا تۈرلىرى ۋە ئوقۇش', 
      count: 7, 
      rate: 17.5, 
      note: '',
      topics: [
        { name: 'CSV/Excel ئوقۇش', importance: 'high', code: 'df = pd.read_csv("data.csv")' },
        { name: 'JSON/XML', importance: 'medium', code: 'import json\ndata = json.load(file)' },
        { name: 'SQL دىن دېتا چىقىرىش', importance: 'high', code: 'pd.read_sql("SELECT * FROM table", conn)' },
        { name: 'API بىلەن دېتا يىغىش', importance: 'medium', description: 'REST API ئارقىلىق دېتا يىغىش' }
      ],
      color: 'from-green-500 to-emerald-500',
      tools: ['pandas', 'SQLAlchemy', 'Requests'],
      difficulty: 'ئوتتۇرا'
    },
    { 
      id: 3, 
      ja: '表形式データの加工', 
      en: 'Tabular Data Processing', 
      ug: 'جەدۋەل شەكلىدىكى دېتالارنى قايتا ئىشلەش', 
      count: 6, 
      rate: 15.0, 
      note: '',
      topics: [
        { name: 'DataFrame مەنزىرىسى', importance: 'high', code: 'df.rename(columns={"old":"new"})' },
        { name: 'سۈزگۈچ ۋە سىرتلا', importance: 'high', code: 'df[df["age"] > 18]' },
        { name: 'گۇرۇپپىلاش ۋە ئومۇمىيلاشتۇرۇش', importance: 'high', code: 'df.groupby("category").agg({"value":"mean"})' },
        { name: 'قوشۇش ۋە بىرلەشتۈرۈش', importance: 'medium', code: 'pd.merge(df1, df2, on="id")' }
      ],
      color: 'from-purple-500 to-pink-500',
      tools: ['pandas', 'NumPy'],
      difficulty: 'ئوتتۇرا'
    },
    { 
      id: 4, 
      ja: '数値データの扱い', 
      en: 'Handling Numerical Data', 
      ug: 'سانلىق دېتالار بىلەن ئىشلىش', 
      count: 4, 
      rate: 10.0, 
      note: '',
      topics: [
        { name: 'سانلىق تەڭشەش', importance: 'high', description: 'مىنىمۇم-مەكسىمۇم تەڭشەش، ستاندارتلىش' },
        { name: 'قۇرۇق قىممەت تولدۇرۇش', importance: 'high', code: 'df.fillna(df.mean())' },
        { name: 'ئايرىم سانلارنى بىر تەرەپ قىلىش', importance: 'medium', description: 'IQR ئۇسۇلى بىلەن ئايرىم سانلارنى بايقاش' }
      ],
      color: 'from-amber-500 to-orange-500',
      tools: ['NumPy', 'scikit-learn'],
      difficulty: 'ئوتتۇرا'
    },
    { 
      id: 5, 
      ja: 'データの評価', 
      en: 'Data Evaluation', 
      ug: 'دېتانى باھالاش', 
      count: 8, 
      rate: 20.0, 
      note: '',
      topics: [
        { name: 'دېتا سۈپىتى باھالاش', importance: 'high', description: 'تەڭسىزلىك، قۇرۇقلۇق، دەلىللۈكلۈك' },
        { name: 'ئىستاتىستىكىلىق تەھلىل', importance: 'high', code: 'df.describe()' },
        { name: 'دېتا ۋىزۇئاللاشتۇرۇش', importance: 'medium', description: 'ھىستوگرامما، سىتاتېرپلوت، بوكسپلوت' },
        { name: 'كورېلياتسىيە ھېسابلاش', importance: 'medium', code: 'df.corr()' }
      ],
      color: 'from-red-500 to-rose-500',
      tools: ['pandas', 'Matplotlib', 'Seaborn'],
      difficulty: 'ئالىي'
    },
    { 
      id: 6, 
      ja: '時系列データの処理', 
      en: 'Time Series Data Processing', 
      ug: 'ۋاقىتلىق سىرىيە دېتالىرىنى قايتا ئىشلەش', 
      count: 4, 
      rate: 10.0, 
      note: '',
      topics: [
        { name: 'ۋاقىت بەلگىسى تەڭشەش', importance: 'high', code: 'df["date"] = pd.to_datetime(df["date"])' },
        { name: 'ئۆز-ئارا ۋاقىت سىزىقى', importance: 'medium', description: 'ئاي، ھەپتە، كۈن بويىچە سىزىق' },
        { name: 'ۋاقىت سىزىقلىق دېتادىكى قۇرۇقلۇق', importance: 'high', code: 'df.resample("D").mean()' }
      ],
      color: 'from-teal-500 to-cyan-500',
      tools: ['pandas', 'statsmodels'],
      difficulty: 'ئالىي'
    },
    { 
      id: 7, 
      ja: 'テキスト情報の処理', 
      en: 'Text Data Processing', 
      ug: 'تېكىست دېتالىرىنى قايتا ئىشلەش', 
      count: 2, 
      rate: 5.0, 
      note: '',
      topics: [
        { name: 'تېكىست پاكىزلاش', importance: 'high', code: 'text.lower().strip()' },
        { name: 'سۆز پارچىلاش', importance: 'medium', code: 'from sklearn.feature_extraction.text import CountVectorizer' },
        { name: 'تۇيغۇ تەھلىلى', importance: 'medium', description: 'تېكىستتىكى پوزىتىپ/نېگاتىپ تۇيغۇلار' }
      ],
      color: 'from-indigo-500 to-blue-500',
      tools: ['NLTK', 'spaCy', 'scikit-learn'],
      difficulty: 'ئوتتۇرا'
    },
    { 
      id: 8, 
      ja: '画像データの処理', 
      en: 'Image Data Processing', 
      ug: 'رەسىم دېتالىرىنى قايتا ئىشلەش', 
      count: 2, 
      rate: 5.0, 
      note: '',
      topics: [
        { name: 'رەسىم يۈكلەش ۋە ئۆزگەرتىش', importance: 'medium', code: 'from PIL import Image\nimg = Image.open("image.jpg")' },
        { name: 'رەسىم ئۆلچىمى', importance: 'medium', description: 'پىكسىللارنى ماترىتسا شەكلىگە ئايلاندۇرۇش' },
        { name: 'رەسىم پاكىزلاش', importance: 'low', description: 'رەڭ تەڭشەش، چېكىنچىلىكنى ياخشىلاش' }
      ],
      color: 'from-lime-500 to-green-500',
      tools: ['PIL/Pillow', 'OpenCV', 'scikit-image'],
      difficulty: 'ئالىي'
    },
    { 
      id: 9, 
      ja: 'グラフデータの処理', 
      en: 'Graph Data Processing', 
      ug: 'گىرافىك دېتالىرىنى قايتا ئىشلەش', 
      count: 3, 
      rate: 7.5, 
      note: 'pyvis چىقىرىلمىدى، 9.2 گىرافىك دېتالىرىنى ئەمەلىي تەھلىل قىلىش چىقىرىلمىدى',
      topics: [
        { name: 'گىرافىك قۇرۇلمىسى', importance: 'medium', description: 'تۇغۇن، قىر، ئېغىرلىق' },
        { name: 'گىرافىك ئالگورىتمى', importance: 'medium', examples: ['PageRank', 'تۇتقۇچى ئېنىقلىما', 'كلاستېرلاش'] }
      ],
      color: 'from-violet-500 to-purple-500',
      tools: ['NetworkX', 'igraph'],
      difficulty: 'ئىختىساسلىق'
    },
    { 
      id: 10, 
      ja: '地理空間データの処理', 
      en: 'Geospatial Data Processing', 
      ug: 'جۇغراپىيىلىك دېتالارنى قايتا ئىشلەش', 
      count: 2, 
      rate: 5.0, 
      note: '',
      topics: [
        { name: 'GIS دېتاسى', importance: 'medium', description: 'شەكىل (Shapefile)، GeoJSON' },
        { name: 'جۇغراپىيىلىك ھېسابلاش', importance: 'medium', code: 'from geopy.distance import geodesic' },
        { name: 'خەرىتە كۆرسىتىش', importance: 'low', description: 'folium بىلەن خەرىتە سىزىش' }
      ],
      color: 'from-sky-500 to-blue-500',
      tools: ['geopandas', 'folium', 'geopy'],
      difficulty: 'ئىختىساسلىق'
    },
    { 
      id: 11, 
      ja: 'データ加工のための線形代数', 
      en: 'Linear Algebra for Data Processing', 
      ug: 'دېتا قايتا ئىشلەش ئۈچۈن سىزىقلىق ئالگېبرا', 
      count: 0, 
      rate: 0.0, 
      note: 'چىقىرىلمىدى',
      topics: [],
      color: 'from-gray-400 to-gray-500',
      tools: [],
      difficulty: 'چىقىرىلمىدى'
    }
  ];

  const total = chapters.reduce((sum, ch) => sum + ch.count, 0);
  const totalRate = chapters.reduce((sum, ch) => sum + ch.rate, 0);

  const DetailModal = ({ chapter, onClose }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <div className={`bg-gradient-to-r ${chapter.color} text-white p-6`}>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold">{chapter.id}-باب: {chapter.ug}</h3>
                <p className="text-blue-100">{chapter.ja} • {chapter.en}</p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-black hover:bg-opacity-20"
              >
                &times;
              </button>
            </div>
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">ئاساسىي چۈشەنچىلەر</h4>
                  <div className="space-y-3">
                    {chapter.topics.length > 0 ? (
                      chapter.topics.map((topic, idx) => (
                        <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{topic.name}</span>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              topic.importance === 'high' ? 'bg-red-100 text-red-800' :
                              topic.importance === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {topic.importance === 'high' ? 'يۇقىرى' :
                               topic.importance === 'medium' ? 'ئوتتۇرا' : 'تۆۋەن'}
                            </span>
                          </div>
                          {topic.description && (
                            <p className="text-sm text-gray-600">{topic.description}</p>
                          )}
                          {topic.code && (
                            <pre className="mt-2 bg-gray-800 text-gray-100 p-2 rounded text-xs overflow-x-auto">
                              <code>{topic.code}</code>
                            </pre>
                          )}
                          {topic.examples && (
                            <div className="mt-2">
                              <span className="text-xs text-gray-500">مىساللار:</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {topic.examples.map((example, exIdx) => (
                                  <span key={exIdx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                                    {example}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        بۇ بابقا چۈشەنچىلەر قوشۇلمىغان ياكى چىقىرىلمىغان.
                      </div>
                    )}
                  </div>
                </div>
                
                {chapter.note && (
                  <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
                    <h5 className="font-bold text-red-800 mb-2">چەكلىمىلەر</h5>
                    <p className="text-red-700">{chapter.note}</p>
                  </div>
                )}
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">قوراللار ۋە كۇتۇبخانىلەر</h4>
                  <div className="flex flex-wrap gap-2">
                    {chapter.tools.length > 0 ? (
                      chapter.tools.map((tool, idx) => (
                        <span key={idx} className="px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-lg flex items-center">
                          <span className="mr-2">{getToolIcon(tool)}</span>
                          {tool}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500">قورال كۆرسىتىلمىدى</span>
                    )}
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-bold text-blue-800 mb-2">باب ئۇچۇرلىرى</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">سۇئال سانى</div>
                      <div className="text-2xl font-bold text-gray-800">{chapter.count}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">نىسبەت</div>
                      <div className="text-2xl font-bold text-gray-800">{chapter.rate.toFixed(1)}%</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">قىيىنچىلىق</div>
                      <div className="font-bold text-gray-800">{chapter.difficulty}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">مۇھىملىق</div>
                      <div className="font-bold text-gray-800">
                        {chapter.rate >= 15 ? '🔥 يۇقىرى' :
                         chapter.rate >= 8 ? '⚠️ ئوتتۇرا' : '✅ تۆۋەن'}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-emerald-50 p-4 rounded-xl">
                  <h4 className="font-bold text-emerald-800 mb-2">ئەمەلىي كود مىسالى</h4>
                  {getChapterExample(chapter.id) ? (
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">
                      <code>{getChapterExample(chapter.id)}</code>
                    </pre>
                  ) : (
                    <p className="text-gray-600 text-sm">بۇ بابقا مىسال كود قوشۇلمىغان.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const getToolIcon = (tool) => {
    const icons = {
      'pandas': '📊', 'NumPy': '🔢', 'SQL': '🗄️', 'PIL/Pillow': '🖼️',
      'OpenCV': '👁️', 'scikit-learn': '🤖', 'Matplotlib': '📈', 'Seaborn': '🎨',
      'NLTK': '📝', 'spaCy': '🧠', 'NetworkX': '🕸️', 'geopandas': '🌍',
      'folium': '🗺️', 'geopy': '📍', 'statsmodels': '📊', 'Requests': '🌐',
      'SQLAlchemy': '⚡', 'igraph': '🔄'
    };
    return icons[tool] || '⚙️';
  };

  const getChapterExample = (chapterId) => {
    const examples = {
      1: `# دېتا قايتا ئىشلەش ئاساسىي جەريانى
import pandas as pd

# دېتا يۈكلەش
df = pd.read_csv('data.csv')

# دېتا پاكىزلاش
df_clean = df.dropna()  # قۇرۇق قىممەتلەرنى چىقىرىۋېتىش
df_clean = df_clean.drop_duplicates()  # تەكرارلارنى چىقىرىۋېتىش

# دېتا ئۆزگەرتىش
df_clean['new_column'] = df_clean['old_column'] * 2

# دېتا ساقلاش
df_clean.to_csv('cleaned_data.csv', index=False)`,
      
      2: `# ھەر خىل دېتا فورماتلىرىنى ئوقۇش
import pandas as pd
import json
import sqlite3

# CSV ئوقۇش
csv_data = pd.read_csv('data.csv', encoding='utf-8')

# Excel ئوقۇش
excel_data = pd.read_excel('data.xlsx', sheet_name='Sheet1')

# JSON ئوقۇش
with open('data.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
    json_df = pd.DataFrame(json_data)

# SQL دىن دېتا ئوقۇش
conn = sqlite3.connect('database.db')
sql_data = pd.read_sql('SELECT * FROM users', conn)
conn.close()`,
      
      3: `# جەدۋەل دېتاسىنى قايتا ئىشلەش
import pandas as pd
import numpy as np

# دېتا قۇرۇش
df = pd.DataFrame({
    'name': ['ئەلى', 'ئەخمەت', 'زەينەپ', 'سارا'],
    'age': [25, 30, 22, 35],
    'salary': [50000, 65000, 48000, 72000],
    'department': ['IT', 'IT', 'HR', 'Finance']
})

# 1. سۈزگۈچ
it_employees = df[df['department'] == 'IT']
high_salary = df[df['salary'] > 60000]

# 2. گۇرۇپپىلاش
dept_stats = df.groupby('department').agg({
    'age': 'mean',
    'salary': ['mean', 'min', 'max', 'count']
})

# 3. قوشۇش
df2 = pd.DataFrame({
    'name': ['ئەلى', 'زەينەپ'],
    'bonus': [5000, 3000]
})
merged = pd.merge(df, df2, on='name', how='left')
merged['total_comp'] = merged['salary'] + merged['bonus'].fillna(0)`,
      
      5: `# دېتا باھالاش ۋە تەھلىل
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# ئىستاتىستىكىلىق ئۇچۇرلار
print("ئاساسىي ئىستاتىستىكا:")
print(df.describe())

print("\\nقۇرۇق قىممەتلەر:")
print(df.isnull().sum())

print("\\nكورېلياتسىيە ماترىتسىسى:")
correlation = df.corr()
print(correlation)

# ۋىزۇئاللاشتۇرۇش
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# ھىستوگرامما
axes[0,0].hist(df['age'], bins=20, edgecolor='black')
axes[0,0].set_title('ياش تارقىلىشى')

# بوكسپلوت
axes[0,1].boxplot(df['salary'])
axes[0,1].set_title('ماھىيەت تارقىلىشى')

# سىتاتېرپلوت
axes[1,0].scatter(df['age'], df['salary'])
axes[1,0].set_xlabel('ياش')
axes[1,0].set_ylabel('ماھىيەت')

# كورېلياتسىيە خەرىتىسى
sns.heatmap(correlation, annot=True, ax=axes[1,1])
axes[1,1].set_title('كورېلياتسىيە خەرىتىسى')

plt.tight_layout()
plt.show()`
    };
    
    return examples[chapterId] || null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              دېتا قايتا ئىشلەش سىناق تارقىلىشى
            </h1>
            <p className="text-gray-600 text-lg">
              11 باب، 40 سۇئال، ھەر خىل دېتا تىپلىرى بىلەن ئىشلەش
            </p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-emerald-700">{total}</div>
              <div className="text-sm text-emerald-600">جەمئىي سۇئال</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-700">{totalRate.toFixed(1)}%</div>
              <div className="text-sm text-blue-600">ئومۇمىي نىسبەت</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-red-700">5-باب</div>
              <div className="text-sm text-red-600">ئەڭ مۇھىم باب</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-purple-700">20.0%</div>
              <div className="text-sm text-purple-600">ئەڭ يۇقىرى نىسبەت</div>
            </div>
          </div>
          
          {/* Progress Bars */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>دېتا قايتا ئىشلەش بىلىمى:</span>
                <span>{totalRate.toFixed(1)}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${totalRate}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center">
                <div className="font-medium">جەدۋەل دېتا</div>
                <div className="text-gray-600">15.0%</div>
              </div>
              <div className="text-center">
                <div className="font-medium">سانلىق دېتا</div>
                <div className="text-gray-600">10.0%</div>
              </div>
              <div className="text-center">
                <div className="font-medium">ۋاقىت سىزىقى</div>
                <div className="text-gray-600">10.0%</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-6 justify-center">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">ئاساسىي تېما</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">ئوتتۇرا ھەجىملىك</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">ئالىي دەرىجىلىك</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">چىقىرىلمىغان</span>
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: chapter.id * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border ${
                chapter.count === 0 
                  ? 'border-gray-300 bg-gray-100' 
                  : chapter.rate >= 15
                    ? 'border-emerald-300'
                    : chapter.rate >= 8
                      ? 'border-blue-300'
                      : 'border-purple-300'
              }`}
            >
              {/* Chapter Header */}
              <div 
                className={`p-6 cursor-pointer ${chapter.count === 0 ? 'bg-gradient-to-r from-gray-200 to-gray-300' : `bg-gradient-to-r ${chapter.color} text-white`}`}
                onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-2xl font-bold">باب {chapter.id}</div>
                    <h3 className="text-xl font-bold mt-1">{chapter.ug}</h3>
                    <p className={`text-sm ${chapter.count === 0 ? 'text-gray-700' : 'text-blue-100'}`}>
                      {chapter.ja}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{chapter.count}</div>
                    <div className="text-sm">سۇئال</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm mr-4">
                      نىسبەت: <span className="font-bold">{chapter.rate.toFixed(1)}%</span>
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      chapter.difficulty === 'يېڭى باشلىغۇچى' ? 'bg-green-100 text-green-800' :
                      chapter.difficulty === 'ئوتتۇرا' ? 'bg-yellow-100 text-yellow-800' :
                      chapter.difficulty === 'ئالىي' ? 'bg-orange-100 text-orange-800' :
                      chapter.difficulty === 'ئىختىساسلىق' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {chapter.difficulty}
                    </span>
                  </div>
                  <div className="text-sm">
                    {expandedChapter === chapter.id ? '▲ يىغىش' : '▼ تەپسىلاتلار'}
                  </div>
                </div>
              </div>

              {/* Chapter Content */}
              <AnimatePresence>
                {expandedChapter === chapter.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6">
                      {/* Topics Preview */}
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-800 mb-3">ئاساسىي تېمىلار</h4>
                        <div className="space-y-2">
                          {chapter.topics.slice(0, 3).map((topic, idx) => (
                            <div key={idx} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                              <div className="flex items-center">
                                <div className={`w-2 h-2 rounded-full mr-3 ${
                                  topic.importance === 'high' ? 'bg-red-500' :
                                  topic.importance === 'medium' ? 'bg-yellow-500' :
                                  'bg-green-500'
                                }`}></div>
                                <span>{topic.name}</span>
                              </div>
                              <span className="text-xs text-gray-500">
                                {topic.importance === 'high' ? 'يۇقىرى' :
                                 topic.importance === 'medium' ? 'ئوتتۇرا' : 'تۆۋەن'}
                              </span>
                            </div>
                          ))}
                          {chapter.topics.length > 3 && (
                            <div className="text-center text-sm text-gray-500">
                              + {chapter.topics.length - 3} تېما بار
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Tools */}
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-800 mb-2">قوراللار</h4>
                        <div className="flex flex-wrap gap-2">
                          {chapter.tools.slice(0, 3).map((tool, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              {getToolIcon(tool)} {tool}
                            </span>
                          ))}
                          {chapter.tools.length > 3 && (
                            <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm">
                              +{chapter.tools.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex gap-3">
                        <button
                          onClick={() => setSelectedDetail(chapter)}
                          className="flex-1 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition"
                        >
                          تەپسىلاتلارنى كۆرۈش
                        </button>
                        {chapter.count > 0 && (
                          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition">
                            سىناق باشلاش
                          </button>
                        )}
                      </div>
                      
                      {chapter.note && (
                        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-sm text-red-700">⚠️ {chapter.note}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">مۇھىم ئۇچۇرلار</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-3xl font-bold mb-2">5-باب</div>
              <div className="font-medium">دېتانى باھالاش</div>
              <div className="text-xl font-bold mt-2">20.0%</div>
              <div className="text-sm opacity-90">ئەڭ يۇقىرى نىسبەت</div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-3xl font-bold mb-2">2-باب</div>
              <div className="font-medium">دېتا تۈرلىرى ۋە ئوقۇش</div>
              <div className="text-xl font-bold mt-2">17.5%</div>
              <div className="text-sm opacity-90">ئىككىنچى يۇقىرى</div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-3xl font-bold mb-2">3-باب</div>
              <div className="font-medium">جەدۋەل دېتاسىنى قايتا ئىشلەش</div>
              <div className="text-xl font-bold mt-2">15.0%</div>
              <div className="text-sm opacity-90">ئۈچىنچى يۇقىرى</div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-block bg-white/30 backdrop-blur-sm p-4 rounded-xl">
              <h4 className="font-bold mb-2">ئەڭ مۇھىم 3 باب:</h4>
              <p className="text-sm opacity-90">
                1. <strong>دېتا باھالاش (20%)</strong> → ئىستاتىستىكا ۋە ۋىزۇئاللاشتۇرۇش<br/>
                2. <strong>دېتا ئوقۇش (17.5%)</strong> → CSV, JSON, SQL, Excel<br/>
                3. <strong>جەدۋەل دېتا (15%)</strong> → pandas DataFrame
              </p>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm opacity-90">
            <p className="mb-2">📊 <strong>جەمئىي 40 سۇئال</strong> • 100% نىسبىتىگە يېتەلەيدۇ</p>
            <p>⚠️ 11-باب (سىزىقلىق ئالگېبرا) چىقىرىلمىغان</p>
          </div>
        </motion.div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedDetail && (
            <DetailModal
              chapter={selectedDetail}
              onClose={() => setSelectedDetail(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DataProcessingTest;