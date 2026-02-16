import React, { useEffect } from 'react';

const injectFonts = () => {
  if (!document.fonts || !document.fonts.check('16px "Noto Nastaliq Uyghur"')) {
    const uyghurFont = document.createElement('link');
    uyghurFont.href = 'https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Uyghur:wght@400;600;700&display=swap';
    uyghurFont.rel = 'stylesheet';
    document.head.appendChild(uyghurFont);
  }
  const monoFont = document.createElement('link');
  monoFont.href = 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap';
  monoFont.rel = 'stylesheet';
  document.head.appendChild(monoFont);
};

const CodeBlock = ({ children }) => (
  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
    <pre className="text-emerald-300 text-sm" style={{ fontFamily: "'Fira Code', monospace", direction: 'ltr', textAlign: 'left' }}>
      {children}
    </pre>
  </div>
);

const Chapter = ({ number, uyTitle, enTitle, uyDesc, enDesc, examples, excluded = [] }) => (
  <div className="mb-14 pb-8 border-b border-gray-800/50">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-5">
      <h2 
        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400"
        style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl', textAlign: 'right' }}
      >
        {number} باب　{uyTitle}
      </h2>
      <span 
        className="text-teal-300 italic text-sm"
        style={{ direction: 'ltr', textAlign: 'left' }}
      >
        {enTitle}
      </span>
    </div>
    
    <div className="space-y-4">
      <p 
        className="text-justify text-gray-200"
        style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl' }}
      >
        {uyDesc}
      </p>
      <p 
        className="text-justify text-gray-400 text-sm italic"
        style={{ direction: 'ltr', textAlign: 'left' }}
      >
        {enDesc}
      </p>
      {excluded.length > 0 && (
        <p 
          className="text-xs text-orange-400 italic"
          style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl', textAlign: 'right' }}
        >
          چەكلىمى: {excluded.join(', ')} ئىشلىتىلمەيدۇ.
        </p>
      )}
    </div>

    <div className="mt-8 space-y-7">
      {examples.map((ex, idx) => (
        <div key={idx} className="bg-gray-800/40 p-5 rounded-xl border border-emerald-700/30">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
            <h4 
              className="font-semibold text-emerald-300"
              style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl', textAlign: 'right' }}
            >
              {idx + 1}. {ex.uyTitle}
            </h4>
            <span 
              className="text-teal-200 text-sm italic"
              style={{ direction: 'ltr', textAlign: 'left' }}
            >
              {ex.enTitle}
            </span>
          </div>
          
          <p 
            className="mb-4 text-sm text-gray-200"
            style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl', textAlign: 'justify' }}
          >
            {ex.uyExplanation}
          </p>
          <p 
            className="mb-4 text-xs text-gray-400 italic"
            style={{ direction: 'ltr', textAlign: 'left' }}
          >
            {ex.enExplanation}
          </p>
          
          <CodeBlock>{ex.code}</CodeBlock>
          
          <div className="mt-3 flex flex-col md:flex-row md:items-center gap-2">
            <span 
              className="text-xs text-gray-400"
              style={{ direction: 'rtl', textAlign: 'right', fontFamily: "'Noto Nastaliq Uyghur', serif" }}
            >
              نەتىجە:
            </span>
            <span 
              className="text-xs text-teal-300 font-mono"
              style={{ direction: 'ltr', textAlign: 'left' }}
            >
              {ex.output}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function DataProcessingCourseGuide() {
  useEffect(() => {
    injectFonts();
  }, []);

  const chapters = [
    // باب 1
    {
      number: "1",
      uyTitle: "دېتا تازىلاشنىڭ ئومۇمۇي تۇنۇشۇ",
      enTitle: "Introduction to Data Processing",
      uyDesc: "دېتا تازىلاشنىڭ ماھىيىتى، نۆۋەتلىرى، ۋە ئەھمىيىتى.",
      enDesc: "Overview of data processing: purpose, steps, and importance.",
      examples: [
        { uyTitle: "ETL جەريانى", enTitle: "ETL Process", uyExplanation: "دېتا يىغىش (Extract)، تازىلاش (Transform)، ساقلاش (Load).", enExplanation: "Extract, Transform, Load workflow.", code: `# 1. يىغىش\nraw = fetch_data()\n# 2. تازىلاش\nclean = clean_data(raw)\n# 3. ساقلاش\nsave_to_db(clean)`, output: "دېتا قانالى ئىشلىدى" },
        { uyTitle: "دېتا تازىلاش نۇقتىلىرى", enTitle: "Cleaning Checklist", uyExplanation: "توشۇپ كەتكەن قىممەتلەر، نۇسخا، يەنسىزلىك.", enExplanation: "Missing values, duplicates, bias.", code: `df.isnull().sum()  # توشۇپ كەتكەنلىرىنى ھېسابلاش\ndf.drop_duplicates()  # نۇسخىلىرىنى ئۆچۈرۈش`, output: "تازىلاش نۇقتىلىرى" },
        { uyTitle: "دېتا سۈزۈش", enTitle: "Data Filtering", uyExplanation: "كېرەكلىك بولمىغان سانلىق مەلۇماتنى ئۆچۈرۈش.", enExplanation: "Remove irrelevant records.", code: `df = df[df['age'] > 0]  # يولچىلىقنى تۈزىتىش`, output: "تازىلانغان دېتا" }
      ]
    },
    // باب 2
    {
      number: "2",
      uyTitle: "دېتا تۈرلىرى ۋە ئوقۇش",
      enTitle: "Data Types and Loading",
      uyDesc: "CSV، JSON، Excel، دېتا تورى قاتارلىق تۈرلەرنى ئوقۇش.",
      enDesc: "Loading data from CSV, JSON, Excel, DataFrames.",
      examples: [
        { uyTitle: "CSV ئوقۇش", enTitle: "Read CSV", uyExplanation: "CSV فايلنى دېتا تورىغا ئايلاندۇرۇش.", enExplanation: "Load CSV into DataFrame.", code: `import pandas as pd\ndf = pd.read_csv('data.csv')`, output: "دېتا تورى يۈكلەندى" },
        { uyTitle: "JSON ئوقۇش", enTitle: "Read JSON", uyExplanation: "JSON فايلنى ئوقۇش.", enExplanation: "Load JSON data.", code: `df = pd.read_json('data.json')`, output: "JSON دېتا يۈكلەندى" },
        { uyTitle: "API دىن دېتا ئالىش", enTitle: "Fetch from API", uyExplanation: "تېنەت API دىن دېتا يىغىش.", enExplanation: "Get data from web API.", code: `import requests\nresp = requests.get('https://api.example.com/data')\ndata = resp.json()`, output: "API دېتا يۈكلەندى" }
      ]
    },
    // باب 3
    {
      number: "3",
      uyTitle: "جەدۋەل شەكىللىك دېتا تازىلاش",
      enTitle: "Tabular Data Processing",
      uyDesc: "pandas ئىشلىتىپ جەدۋەل دېتاسىنى تازىلاش.",
      enDesc: "Cleaning tabular data with pandas.",
      examples: [
        { uyTitle: "تىزىملىك بويىچە تازىلاش", enTitle: "Column-wise Cleaning", uyExplanation: "ھەر بىر تىزىملىكنى ئايرىم تازىلاش.", enExplanation: "Clean each column individually.", code: `df['name'] = df['name'].str.strip().str.title()\ndf['email'] = df['email'].str.lower()`, output: "تىزىملىك تازىلاندى" },
        { uyTitle: "توشۇپ كەتكەن قىممەتلەرنى تولدۇرۇش", enTitle: "Handle Missing Values", uyExplanation: "توشۇپ كەتكەن قىممەتلەرنى ئوتتۇرىچە قىممەت بىلەن تولدۇرۇش.", enExplanation: "Fill missing values with mean.", code: `df['age'].fillna(df['age'].mean(), inplace=True)`, output: "توشۇپ كەتكەن قىممەتلەر تولدۇرۇلدى" },
        { uyTitle: "دېتا ئايلاندۇرۇش", enTitle: "Data Reshaping", uyExplanation: "تىزىملىك تىزىملىك قىلىش (Melt).", enExplanation: "Reshape wide to long format.", code: `df_melted = df.melt(id_vars='id', value_vars=['Q1','Q2'])`, output: "ئايلاندۇرۇلغان دېتا" }
      ]
    },
    // باب 4
    {
      number: "4",
      uyTitle: "سانلىق دېتا بىلەن ئىشلىش",
      enTitle: "Handling Numeric Data",
      uyDesc: "ساننىڭ تارقىلىشى، نورماللاشتۇرۇش، ئېنىقلىق.",
      enDesc: "Working with numeric data: distribution, scaling, precision.",
      examples: [
        { uyTitle: "نورماللاشتۇرۇش", enTitle: "Normalization", uyExplanation: "ساننى 0-1 ئارىلىققا نورماللاشتۇرۇش.", enExplanation: "Scale data to [0,1].", code: `from sklearn.preprocessing import MinMaxScaler\nscaler = MinMaxScaler()\ndf['scaled'] = scaler.fit_transform(df[['value']])`, output: "نورماللاشتۇرۇلغان قىممەت" },
        { uyTitle: "سان ئارىلىقىنى تەكشۈرۈش", enTitle: "Range Validation", uyExplanation: "ساننىڭ مەنبەسىگە مۇۋاپىقلىقىنى باشقۇرۇش.", enExplanation: "Ensure values are in valid range.", code: `df = df[(df['score'] >= 0) & (df['score'] <= 100)]`, output: "ئارىلىق تەكشۈرۈلدى" },
        { uyTitle: "ئوتتۇرىچە ۋە تارقىلىش", enTitle: "Mean and Std", uyExplanation: "ساننىڭ ئوتتۇرىچە ۋە تارقىلىشىنى ھېسابلاش.", enExplanation: "Compute mean and standard deviation.", code: `mean = df['value'].mean()\nstd = df['value'].std()`, output: "ئوتتۇرىچە: X, تارقىلىش: Y" }
      ]
    },
    // باب 5
    {
      number: "5",
      uyTitle: "دېتا باھاسى",
      enTitle: "Data Evaluation",
      uyDesc: "دېتا سۈپىتىنى باھالاش، مودېل ئۈنۈملىرىنى تەكشۈرۈش.",
      enDesc: "Evaluating data quality and model performance.",
      examples: [
        { uyTitle: "دېتا دەللىكى", enTitle: "Data Accuracy", uyExplanation: "دېتانىڭ ھەقىقىي دۇنيا بىلەن مۇناسىۋىتى.", enExplanation: "Compare with ground truth.", code: `accuracy = (df['pred'] == df['true']).mean()`, output: "دەللىك: 0.95" },
        { uyTitle: "ماترېتساى قۇرۇش", enTitle: "Confusion Matrix", uyExplanation: "تەصنىپ نەتىجىسىنى بايان قىلىش.", enExplanation: "Show classification results.", code: `from sklearn.metrics import confusion_matrix\ncm = confusion_matrix(y_true, y_pred)\nprint(cm)`, output: "[[50 2]\\n [3 45]]" },
        { uyTitle: "F1 باھاسى", enTitle: "F1 Score", uyExplanation: "دەللىك ۋە توپلىنىشنىڭ ئوتتۇرىچە باھاسى.", enExplanation: "Harmonic mean of precision and recall.", code: `from sklearn.metrics import f1_score\nf1 = f1_score(y_true, y_pred)`, output: "F1 باھاسى: 0.92" }
      ]
    },
    // باب 6
    {
      number: "6",
      uyTitle: "ۋاقىت سىرەس دېتاسى بىلەن ئىشلىش",
      enTitle: "Time Series Data Processing",
      uyDesc: "ۋاقىت سىرەس دېتاسىنى تازىلاش، تەھلىل قىلىش.",
      enDesc: "Cleaning and analyzing time series data.",
      examples: [
        { uyTitle: "ۋاقىت سىرەس ئوقۇش", enTitle: "Read Time Series", uyExplanation: "ۋاقىت سىرەس دېتاسىنى ئوقۇش.", enExplanation: "Load time series data.", code: `df = pd.read_csv('sales.csv', parse_dates=['date'], index_col='date')`, output: "ۋاقىت سىرەس يۈكلەندى" },
        { uyTitle: "تازىلاش", enTitle: "Resampling", uyExplanation: "كۈندىلىك دېتانى ئايلىققا ئايلاندۇرۇش.", enExplanation: "Resample to monthly frequency.", code: `monthly = df.resample('M').sum()`, output: "ئايلىق دېتا" },
        { uyTitle: "تىللىما-تىللىك ھېسابى", enTitle: "Rolling Window", uyExplanation: "3 كۈنلۈك ئوتتۇرىچە قىممەت.", enExplanation: "3-day moving average.", code: `df['rolling_mean'] = df['value'].rolling(window=3).mean()`, output: "تىللىما-تىللىك ئوتتۇرىچە" }
      ]
    },
    // باب 7
    {
      number: "7",
      uyTitle: "تېكىست دېتاسى بىلەن ئىشلىش",
      enTitle: "Text Data Processing",
      uyDesc: "تېكىست تازىلاش، توكېنلاش، ۋېكتورلاش.",
      enDesc: "Cleaning, tokenizing, and vectorizing text.",
      examples: [
        { uyTitle: "تېكىست تازىلاش", enTitle: "Text Cleaning", uyExplanation: "تېكىستتىكى ئاران تىكىست، ھەرپلەرنى كىچىكلەشتۈرۈش.", enExplanation: "Remove noise and lowercase.", code: `import re\ntext = re.sub(r'[^\\w\\s]', '', raw_text.lower())`, output: "تازىلانغان تېكىست" },
        { uyTitle: "توكېنلاش", enTitle: "Tokenization", uyExplanation: "تېكىستنى سۆزلەرگە ئايرىش.", enExplanation: "Split text into words.", code: `tokens = text.split()  # ياكى nltk.word_tokenize(text)`, output: "['سالام', 'دىنيا']" }
      ]
    },
    // باب 8
    {
      number: "8",
      uyTitle: "رەسىم دېتاسى بىلەن ئىشلىش",
      enTitle: "Image Data Processing",
      uyDesc: "رەسىمنى ئوقۇش، شەكىللەندۈرۈش، Feature Extraction.",
      enDesc: "Reading, resizing, and feature extraction from images.",
      examples: [
        { uyTitle: "رەسىم ئوقۇش", enTitle: "Read Image", uyExplanation: "رەسىمنى NumPy تىزىملىكىگە ئايلاندۇرۇش.", enExplanation: "Load image as array.", code: `import cv2\nimg = cv2.imread('photo.jpg')\nprint(img.shape)`, output: "(480, 640, 3)" },
        { uyTitle: "شەكىل ئۆزگەرتىش", enTitle: "Resize Image", uyExplanation: "رەسىمنى كىچىكلىتىش.", enExplanation: "Resize for processing.", code: `resized = cv2.resize(img, (224, 224))`, output: "(224, 224, 3)" }
      ]
    },
    // باب 9
    {
      number: "9",
      uyTitle: "گراف دېتاسى بىلەن ئىشلىش",
      enTitle: "Graph Data Processing",
      uyDesc: "گراف نىشانى، Node، Edge بىلەن ئىشلىش.",
      enDesc: "Working with graph structures: nodes and edges.",
      excluded: ["pyvis", "ئامالىي گراف دېتا تەھلىلى"],
      examples: [
        { uyTitle: "NetworkX ئىشلىتىش", enTitle: "Using NetworkX", uyExplanation: "گراف قۇرۇش ۋە تەھلىل قىلىش.", enExplanation: "Create and analyze graph.", code: `import networkx as nx\nG = nx.Graph()\nG.add_edge('A', 'B')\nprint(nx.degree_centrality(G))`, output: "{'A': 1.0, 'B': 1.0}" },
        { uyTitle: "گراف ساقلاش", enTitle: "Save Graph", uyExplanation: "گرافنى CSV غا ساقلاش.", enExplanation: "Export graph to CSV.", code: `import pandas as pd\nedges = list(G.edges())\ndf = pd.DataFrame(edges, columns=['source', 'target'])\ndf.to_csv('graph.csv', index=False)`, output: "graph.csv يېزىلدى" }
      ]
    },
    // باب 10
    {
      number: "10",
      uyTitle: "جۇغراپىك دېتا بىلەن ئىشلىش",
      enTitle: "Geospatial Data Processing",
      uyDesc: "جۇغراپىك دېتا ( latitude, longitude ) بىلەن ئىشلىش.",
      enDesc: "Working with geographic coordinates.",
      examples: [
        { uyTitle: "جۇغراپىك دېتا ئوقۇش", enTitle: "Read Geo Data", uyExplanation: "جۇغراپىك دېتاسىنى ئوقۇش.", enExplanation: "Load geographic data.", code: `df = pd.read_csv('locations.csv')\nprint(df[['lat', 'lon']].head())`, output: "كۆردىناتلار" },
        { uyTitle: "مەسافە ھېسابى", enTitle: "Distance Calculation", uyExplanation: "ئىككى نۇقتا ئوتتۇرىسىدىكى مەسافىنى ھېسابلاش.", enExplanation: "Compute distance between points.", code: `from math import radians, sin, cos, sqrt, atan2\nlat1, lon1 = radians(34.05), radians(-118.25)\nlat2, lon2 = radians(40.71), radians(-74.01)\ndlon = lon2 - lon1\ndlat = lat2 - lat1\na = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2\nc = 2 * atan2(sqrt(a), sqrt(1-a))\ndistance = 6371 * c  # كىلومېتىر`, output: "مەسافە: ~3940 كم" }
      ]
    },
    // باب 11 — 0%
    {
      number: "11",
      uyTitle: "دېتا تازىلاش ئۈچۈن سىزىقلىق ئالگېبرا",
      enTitle: "Linear Algebra for Data Processing",
      uyDesc: "بۇ بابتىن سوئال چىقمايدۇ، لېكىن تۇنۇشتۇرۇش بار.",
      enDesc: "No exam questions from this chapter, for reference only.",
      examples: [
        { uyTitle: "ماترىتسا كۆپەيتىش", enTitle: "Matrix Multiplication", uyExplanation: "دېتا ئۆزگەرتىش ئۈچۈن ماترىتسا كۆپەيتىش.", enExplanation: "Used in data transformation.", code: `import numpy as np\nA = np.array([[1,2],[3,4]])\nB = np.array([[5],[6]])\nC = np.dot(A, B)`, output: "[[17]\\n[39]]" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-emerald-950 to-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-14">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl' }}
          >
            دېتا تازىلاش ۋە قايتا قۇرۇش كېسپىي دەرىجىلىك دەرىسلىك
          </h1>
          <p 
            className="text-teal-300 italic"
            style={{ direction: 'ltr' }}
          >
            Professional Data Processing Certification Guide (Uyghur & English)
          </p>
        </div>

        <div className="space-y-12">
          {chapters.map((chapter, idx) => (
            <Chapter key={idx} {...chapter} />
          ))}
        </div>

        <div 
          className="mt-20 text-center text-emerald-400/70 text-sm"
          style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl' }}
        >
          — دېتا تازىلاش — بۇ سانلىق مەلۇماتنىڭ سۈزۈك سۇغا ئايلاندۇرۇش سەنئىتى —
        </div>
        <div 
          className="mt-2 text-center text-teal-400/70 text-xs italic"
          style={{ direction: 'ltr' }}
        >
          — Data Cleaning is the art of turning raw data into pure insight —
        </div>
      </div>
    </div>
  );
}