import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Database, BarChart3, Cpu, GitBranch, TrendingUp, CheckCircle,
  Code, Users, Target, Brain, Globe, FileText, Calculator, PieChart,
  Filter, Zap, Shield, AlertCircle, Download, Play, Pause, RotateCcw,
  ChevronRight, ChevronLeft, Home, Search, Menu, X, Moon, Sun,
  Bookmark, Share2, ThumbsUp, MessageCircle, Eye, Clock, Award,
  TrendingDown, Users as UsersIcon, DollarSign, Heart, Star, 
  Navigation, Map, Radio, Camera, Activity, Thermometer, Anchor,
  LifeBuoy, Ship, Waves, Cloud, Wind, Droplets, ThermometerSun
} from 'lucide-react';

// Titanic سانلىق مەلۇمات ئۇچۇرلىرى
const TitanicData = {
  totalPassengers: 2224,
  survivors: 711,
  survivalRate: 31.8,
  maleSurvivalRate: 18.9,
  femaleSurvivalRate: 74.2,
  firstClassSurvival: 62.9,
  secondClassSurvival: 47.3,
  thirdClassSurvival: 24.2,
  childrenSurvival: 52.3,
  adultSurvival: 38.2,
  variables: [
    { name: 'passengerId', type: 'سانلىق', description: 'ساياھەتچى نومۇرى' },
    { name: 'survived', type: 'سۈپەت', description: 'ھايات قالغان (1) ياكى ھالاك بولغان (0)' },
    { name: 'pclass', type: 'سۈپەت', description: 'سىنىپ (1=بىرىنچى قەۋەت, 2=ئىككىنچى قەۋەت, 3=ئۈچىنچى قەۋەت)' },
    { name: 'name', type: 'سۈپەت', description: 'ساياھەتچى ئىسىمى' },
    { name: 'sex', type: 'سۈپەت', description: 'جىنس' },
    { name: 'age', type: 'سانلىق', description: 'يېشى' },
    { name: 'sibSp', type: 'سانلىق', description: 'كېمىدىكى قېرىنداش/ئەر-خوتۇن سانى' },
    { name: 'parch', type: 'سانلىق', description: 'كېمىدىكى ئاتا-ئانا/بالىلار سانى' },
    { name: 'ticket', type: 'سۈپەت', description: 'بىلەت نومۇرى' },
    { name: 'fare', type: 'سانلىق', description: 'بىلەت باھاسى' },
    { name: 'cabin', type: 'سۈپەت', description: 'كابىنا نومۇرى' },
    { name: 'embarked', type: 'سۈپەت', description: 'كىمەن پورتى (C=Cherbourg, Q=Queenstown, S=Southampton)' }
  ]
};

// پائالىيەت خاتىرىسى
const ActivityLog = ({ activities }) => (
  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl mb-6 border border-blue-200 dark:border-gray-700">
    <div className="flex items-center gap-2 mb-3">
      <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      <h3 className="font-bold text-lg">پائالىيەت خاتىرىسى</h3>
    </div>
    <div className="space-y-2 max-h-40 overflow-y-auto">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center gap-2 text-sm p-2 bg-white/50 dark:bg-gray-800/50 rounded">
          <Clock className="w-3 h-3 text-gray-500" />
          <span>{activity}</span>
        </div>
      ))}
    </div>
  </div>
);

// پەرەز مودېلى سىناق قورالى
const PredictionSimulator = () => {
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState('male');
  const [pclass, setPclass] = useState(2);
  const [fare, setFare] = useState(50);
  const [prediction, setPrediction] = useState(null);

  const calculateSurvivalProbability = () => {
    // ئاددىي پەرەز مودېلى
    let baseProbability = 0.3;
    
    // جىنس
    if (gender === 'female') baseProbability += 0.4;
    
    // سىنىپ
    if (pclass === 1) baseProbability += 0.3;
    if (pclass === 2) baseProbability += 0.15;
    
    // ياش
    if (age < 16) baseProbability += 0.2;
    if (age > 60) baseProbability -= 0.1;
    
    // تىكېت باھاسى
    if (fare > 100) baseProbability += 0.1;
    
    // چەكلىمىلەر
    baseProbability = Math.max(0.05, Math.min(0.95, baseProbability));
    
    setPrediction(baseProbability);
  };

  useEffect(() => {
    calculateSurvivalProbability();
  }, [age, gender, pclass, fare]);

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-green-200 dark:border-gray-700 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
        <h3 className="text-xl font-bold text-green-700 dark:text-green-400">پەرەز مودېلى سىناق قورالى</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">يېشى: {age}</label>
            <input 
              type="range" 
              min="0" 
              max="80" 
              value={age} 
              onChange={(e) => setAge(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>0</span>
              <span>20</span>
              <span>40</span>
              <span>60</span>
              <span>80</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">جىنس</label>
            <div className="flex gap-2">
              {['male', 'female'].map(g => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`flex-1 py-2 rounded-lg ${gender === g 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700'}`}
                >
                  {g === 'male' ? 'ئەر' : 'ئايال'}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">قەۋەت</label>
            <div className="flex gap-2">
              {[1, 2, 3].map(c => (
                <button
                  key={c}
                  onClick={() => setPclass(c)}
                  className={`flex-1 py-2 rounded-lg ${pclass === c 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700'}`}
                >
                  {c}. قەۋەت
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">بىلەت باھاسى: ${fare}</label>
            <input 
              type="range" 
              min="0" 
              max="500" 
              step="10"
              value={fare} 
              onChange={(e) => setFare(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          {prediction !== null && (
            <>
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {(prediction * 100).toFixed(1)}%
                </div>
                <div className="text-lg font-medium">ھايات قالغانلىق ئېھتىماللىقى</div>
              </div>
              
              <div className="w-full max-w-xs">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-400 to-emerald-600 transition-all duration-500"
                    style={{ width: `${prediction * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
              
              <div className="mt-6 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <div className="text-sm">
                  <div className="font-bold mb-1">مۇھىم ئالاھىدىلىكلەر:</div>
                  <ul className="space-y-1">
                    <li>• {gender === 'female' ? 'ئاياللار' : 'ئەرلەر'} يۇقىرى ئېھتىماللىققا ئىگە</li>
                    <li>• {pclass === 1 ? 'بىرىنچى قەۋەت' : pclass === 2 ? 'ئىككىنچى قەۋەت' : 'ئۈچىنچى قەۋەت'} سايرىغۇچىلىرى</li>
                    <li>• {age < 16 ? 'بالىلار' : 'چوڭلار'} تېخىمۇ يۇقىرى ئېھتىماللىققا ئىگە</li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// سانلىق مەلۇماتلارنى كۆرسىتىش
const DataTableDemo = () => {
  const sampleData = [
    { passengerId: 1, survived: 1, pclass: 1, name: 'Braund, Mr. Owen Harris', sex: 'male', age: 22, fare: 7.25 },
    { passengerId: 2, survived: 1, pclass: 1, name: 'Cumings, Mrs. John Bradley', sex: 'female', age: 38, fare: 71.28 },
    { passengerId: 3, survived: 0, pclass: 3, name: 'Heikkinen, Miss. Laina', sex: 'female', age: 26, fare: 7.92 },
    { passengerId: 4, survived: 0, pclass: 1, name: 'Futrelle, Mrs. Jacques Heath', sex: 'female', age: 35, fare: 53.1 },
    { passengerId: 5, survived: 0, pclass: 3, name: 'Allen, Mr. William Henry', sex: 'male', age: 35, fare: 8.05 }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
      <div className="p-4 border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h3 className="font-bold">سانلىق مەلۇماتلارنى كۆرسىتىش (ئالدىنقى 5 قۇر)</h3>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 dark:bg-gray-900">
            <tr>
              {Object.keys(sampleData[0]).map(key => (
                <th key={key} className="p-3 text-right border dark:border-gray-700">
                  {key === 'passengerId' ? 'نومۇرى' : 
                   key === 'survived' ? 'ھايات' : 
                   key === 'pclass' ? 'سىنىپ' : 
                   key === 'name' ? 'ئىسىم' : 
                   key === 'sex' ? 'جىنس' : 
                   key === 'age' ? 'يېشى' : 'باھاسى'}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sampleData.map((row, idx) => (
              <tr key={idx} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
                {Object.values(row).map((value, i) => (
                  <td key={i} className={`p-3 ${typeof value === 'number' ? 'text-center' : 'text-right'}`}>
                    {typeof value === 'number' && !['passengerId', 'survived'].includes(Object.keys(row)[i]) ? 
                      value.toFixed(2) : 
                      value === 1 ? '✅' : 
                      value === 0 ? '❌' : 
                      value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-3 bg-gray-50 dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-400 border-t dark:border-gray-700">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          <span>جەدۋەلدىكى مەلۇماتلار: ھەقىقىي Titanic سانلىق مەلۇمات توپلىمىدىكى ئالدىنقى 5 قۇر</span>
        </div>
      </div>
    </div>
  );
};

// سانلىق مەلۇماتلارنى تەھلىل قىلىش گىرافىكى
const DataVisualization = () => {
  const [chartType, setChartType] = useState('bar');
  
  const survivalData = [
    { category: 'ئومۇمىي', rate: TitanicData.survivalRate },
    { category: 'ئاياللار', rate: TitanicData.femaleSurvivalRate },
    { category: 'ئەرلەر', rate: TitanicData.maleSurvivalRate },
    { category: 'بىرىنچى قەۋەت', rate: TitanicData.firstClassSurvival },
    { category: 'ئىككىنچى قەۋەت', rate: TitanicData.secondClassSurvival },
    { category: 'ئۈچىنچى قەۋەت', rate: TitanicData.thirdClassSurvival },
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-purple-200 dark:border-gray-700 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">سانلىق مەلۇماتلارنى تەھلىل قىلىش گىرافىكى</h3>
        </div>
        <div className="flex gap-2">
          {['bar', 'pie'].map(type => (
            <button
              key={type}
              onClick={() => setChartType(type)}
              className={`px-3 py-1 rounded-lg ${chartType === type 
                ? 'bg-purple-500 text-white' 
                : 'bg-gray-100 dark:bg-gray-700'}`}
            >
              {type === 'bar' ? 'ستون گىرافىك' : 'تۈگۈنەك گىرافىك'}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold mb-4">ياشاش نىسبىتى (%)</h4>
          <div className="space-y-4">
            {survivalData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{item.category}</span>
                  <span className="font-bold">{item.rate}%</span>
                </div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-1000"
                    style={{ width: `${item.rate}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border dark:border-gray-700 mb-4">
            <h4 className="font-bold mb-3">ئىستاتىستىكىلىق خۇلاسە</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>ئاياللار ھايات قالغانلىق ئېھتىماللىقى ئەرلەردىن 4 ھەسسە يۇقىرى</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span>بىرىنچى قەەۋت ساياھەتچلەرنىڭ ياشاش نىسبىتى ئۈچىنچى قەۋەتتىكلەردىن 3 ھەسسە يۇقىرى</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>بالىلارنىڭ ياشاش نىسبىتى چوڭلاردىن 14% يۇقىرى</span>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-4 rounded-xl">
              <div className="text-3xl font-bold">{TitanicData.survivors}</div>
              <div className="text-sm">ھايات قالغانلار</div>
            </div>
            <div className="bg-gradient-to-br from-gray-600 to-gray-800 text-white p-4 rounded-xl">
              <div className="text-3xl font-bold">{TitanicData.totalPassengers - TitanicData.survivors}</div>
              <div className="text-sm">ھالاك بولغانلار</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ئەمەلىي مىساللار
const PracticalExamples = () => {
  const examples = [
    {
      title: "مىسال 1: پىتون كودى بىلەن سانلىق مەلۇماتلارنى يۈكلىش",
      code: `import pandas as pd

# Titanic سانلىق مەلۇماتلىرىنى يۈكلىش
titanic = pd.read_csv('titanic.csv')

# ئالدىنقى 5 قۇرنى كۆرسىتىش
print(titanic.head())

# ئاساسىي ئىستاتىستىكىلار
print(titanic.describe())

# قىممەت يوقاپ كېتىشلەرنى تەكشۈرۈش
print(titanic.isnull().sum())`,
      description: "بۇ كود Titanic سانلىق مەلۇمات توپلىمىنى يۈكلىپ، ئاساسىي ئۇچۇرلارنى كۆرسىتىدۇ."
    },
    {
      title: "مىسال 2: ياشاش نىسبىتىنى ھېسابلاش",
      code: `# جىنس بويىچە ياشاش نىسبىتى
survival_by_sex = titanic.groupby('sex')['survived'].mean() * 100

# سىنىپ بويىچە ياشاش نىسبىتى
survival_by_class = titanic.groupby('pclass')['survived'].mean() * 100

# ياش گۇرۇپپىسى بويىچە ياشاش نىسبىتى
titanic['age_group'] = pd.cut(titanic['age'], 
                               bins=[0, 12, 18, 30, 50, 100],
                               labels=['بالا', 'يېشى ھەسسىز', 'ياش', 'ئوتتۇرا ياش', 'قېرى'])

survival_by_age = titanic.groupby('age_group')['survived'].mean() * 100

print("جىنس بويىچە ياشاش نىسبىتى:")
print(survival_by_sex)
print("\\nسىنىپ بويىچە ياشاش نىسبىتى:")
print(survival_by_class)`,
      description: "بۇ كود ھەر خىل كاتېگورىيەلەر بويىچە ياشاش نىسبىتىنى ھېسابلايدۇ."
    },
    {
      title: "مىسال 3: لوگىكىلىق رېگرېسسىيە مودېلى",
      code: `from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# قىممەت يوقاپ كېتىشلەرنى تولدۇرۇش
titanic['age'].fillna(titanic['age'].median(), inplace=True)

# سۈپەت ئۆزگەرگۈچى مىقدارلارنى سانلىققا ئايلاندۇرۇش
titanic['sex'] = titanic['sex'].map({'male': 0, 'female': 1})

# ئالاھىدىلىكلەر ۋە نىشان
X = titanic[['pclass', 'sex', 'age', 'fare']]
y = titanic['survived']

# سانلىق مەلۇماتلارنى بۆلۈش
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# مودېلنى قۇرۇش ۋە مەشىقلەندۈرۈش
model = LogisticRegression()
model.fit(X_train, y_train)

# پەرەز قىلىش
y_pred = model.predict(X_test)

# توغرىلىق
accuracy = accuracy_score(y_test, y_pred)
print(f"مودېل توغرىلىقى: {accuracy:.2%}")`,
      description: "بۇ كود لوگىكىلىق رېگرېسسىيە مودېلى قۇرۇپ، Titanic سانلىق مەلۇماتلىرى بىلەن مەشىقلەندۈرىدۇ."
    }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Code className="w-6  h-6 text-blue-600 dark:text-blue-400" />
        <h3 className="text-2xl font-bold">ئەمەلىي مىساللار</h3>
      </div>
      
      <div className="space-y-6">
        {examples.map((example, index) => (
          <div key={index} className="bg-gray-900 text-gray-100 rounded-xl overflow-hidden border border-gray-700">
            <div className="p-4 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-lg">{example.title}</h4>
                <span className="px-2 py-1 bg-blue-600 text-xs rounded">Python + pandas</span>
              </div>
              <p className="text-gray-300 text-sm mt-2">{example.description}</p>
            </div>
            <pre className="p-4 overflow-x-auto text-left text-sm">
              <code className="language-python">{example.code}</code>
            </pre>
            <div className="p-3 bg-gray-800 border-t border-gray-700">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors">
                كودنى كۆچۈرۈش
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ئاساسىي كومپونېنت
const TitanicDataScienceCourse = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activities, setActivities] = useState([
    "تېما ئۆزگەرتىلدى: " + (darkMode ? "تۇنۇش" : "ئېنىق"),
    "0-باب ئوقۇلدى",
    "پەرەز مودېلى سىناقلاندى",
    "سانلىق مەلۇمات جەدۋىلى كۆرۈلدى"
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const addActivity = (activity) => {
    setActivities(prev => [activity, ...prev.slice(0, 4)]);
  };

  // دەرسلىك بۆلەكلىرى
  const chapters = [
    {
      id: 0,
      title: "كىرىش سۆز - سانلىق مەلۇمات ئارقىلىق دۇنيانى كۆرۈش",
      icon: <Globe className="w-6 h-6" />,
      color: "blue",
      content: (
        <div className="space-y-6">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              Titanic سانلىق مەلۇمات توپلىمى سانلىق مەلۇمات ئىلمىنى ئۆگىنىش ئۈچۈن ئىdeal ئوقۇتۇش ماتېرىيالى. 
              بۇ سانلىق مەلۇمات توپلىمى 1912-يىلى ۋاقتىدا ھالاك بولغان Titanic كېمىسىدىكى سايرىغۇچىلار ھەققىدىكى ئۇچۇرلارنى ئۆز ئىچىگە ئالىدۇ.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-blue-200 dark:border-gray-700 my-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Ship className="w-5 h-5" />
                Titanic ھەققىدە پەرەزلىك ئۇچۇرلار
              </h3>
              <ul className="space-y-2">
                <li>• ئومۇمىي ساياھەتچى سانى: 2,224</li>
                <li>• ھايات قالغانلار: 711 (31.8%)</li>
                <li>• ھالاك بولغانلار: 1,513 (68.2%)</li>
                <li>• بىرىنچى قەۋەت ساياھەتچىلەر: 324</li>
                <li>• ئىككىنچى قەۋەت ساياھەتچىلەر: 284</li>
                <li>• ئۈچىنچى قەۋەت ساياھەتچىلەر: 709</li>
                <li>• ئەڭ كىچىك ساياھەتچى: 2 ياشلىق بالا</li>
                <li>• ئەڭ چوڭ ساياھەتچى: 80 ياشلىق ئىشچى</li>
              </ul>
            </div>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">تەھلىل قىلىشقا بولىدىغان سوئاللار:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-green-200 dark:border-gray-700">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  كىم ھايات قالدى؟
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• قايسى جىنستىكىلەر كۆپرەك ھايات قالدى؟</li>
                  <li>• قايسى سىنىپتىكىلەر تېخىمۇ يۇقىرى ياشاش نىسبىتىگە ئىگە؟</li>
                  <li>• ياش ھايات قالغانلىققا قانداق تەسىر كۆرسەتتى؟</li>
                </ul>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-purple-200 dark:border-gray-700">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  قانداق تەھلىل قىلىش كېرەك؟
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• قانداق قىلىپ سانلىق مەلۇماتلارنى تەمىنلەش كېرەك؟</li>
                  <li>• قانداق قىلىپ گىرافىكلىرىنى قۇرۇش كېرەك؟</li>
                  <li>• قانداق قىلىپ ماشىنا ئۆگىنىش مودېلى قۇرۇش كېرەك؟</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-amber-200 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Award className="w-5 h-5" />
              بۇ دەرسلىكتە نېمىلەرنى ئۆگىنىمىز؟
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
                <h4 className="font-bold mb-2">سانلىق مەلۇمات تەھلىلى</h4>
                <p className="text-sm">سانلىق مەلۇماتلارنى تەمىنلەش، تەھلىل قىلىش ۋە كۆرسىتىش</p>
              </div>
              
              <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">2</div>
                <h4 className="font-bold mb-2">ستاتىستىكا</h4>
                <p className="text-sm">چاستوتا تەقسىماتى، ئېھتىماللىق ۋە مۇناسىۋەت تەھلىلى</p>
              </div>
              
              <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <h4 className="font-bold mb-2">ماشىنا ئۆگىنىش</h4>
                <p className="text-sm">مودېل قۇرۇش، مەشىقلەندۈرۈش ۋە باھالاش</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "سانلىق مەلۇمات ۋە ئۆزگەرگۈچى مىقدارلار",
      icon: <Database className="w-6 h-6" />,
      color: "blue",
      content: (
        <div className="space-y-6">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold mb-4">1.1 سانلىق مەلۇمات دېگەن نېمە؟</h3>
            <p className="mb-4">
              سانلىق مەلۇمات دېگەن دۇنيادىكى ھەقىقىي ۋەقەلەرنىڭ رەقەملىك ۋەكىللىكىدۇر. 
              Titanic سانلىق مەلۇمات توپلىمىدا ھەر بىر قۇر بىر سايرىغۇچىنى، ھەر بىر ستون بىر ئۆزگەرگۈچى مىقدارنى كۆرسىتىدۇ.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">1.2 شەخسلەر ۋە ئۆزگەرگۈچى مىقدارلار</h3>
            <p className="mb-4">
              <strong>شەخس:</strong> تەتقىقات قىلىنىۋاتقان بىرەر نەرسە (بۇ مىسالدا: بىر سايرىغۇچى)
            </p>
            <p className="mb-4">
              <strong>ئۆزگەرگۈچى مىقدار:</strong> شەخستىن شەخسكە ئوخشاش بولمايدىغان ئالاھىدىلىك (مەسىلەن: يېشى، جىنسى، سىنىپى)
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-green-200 dark:border-gray-700 my-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                مۇھىم پەرق: سۈپەت ۋە مىقدار ئۆزگەرگۈچى مىقدارلار
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">سۈپەت ئۆزگەرگۈچى مىقدارلار</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• جىنس (ئەر/ئايال)</li>
                    <li>• سىنىپ (1/2/3)</li>
                    <li>• كىمەن پورتى (C/Q/S)</li>
                    <li>• ھايات قالغان ياكى ھالاك بولغان</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">مىقدار ئۆزگەرگۈچى مىقدارلار</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• يېشى</li>
                    <li>• تىكېت باھاسى</li>
                    <li>• قېرىنداش/ئەر-خوتۇن سانى</li>
                    <li>• ئاتا-ئانا/بالىلار سانى</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">مىسال: ئۆزگەرگۈچى مىقدارلارنى تۈرگە ئايرىش</h3>
            
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border p-3 text-right">ئۆزگەرگۈچى مىقدار</th>
                    <th className="border p-3 text-right">تۈرى</th>
                    <th className="border p-3 text-right">چۈشەندۈرۈش</th>
                    <th className="border p-3 text-right">مىسال قىممىتى</th>
                  </tr>
                </thead>
                <tbody>
                  {TitanicData.variables.slice(0, 6).map((variable, index) => (
                    <tr key={index} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3 font-medium">{variable.name}</td>
                      <td className="border p-3">
                        <span className={`px-2 py-1 rounded text-xs ${variable.type === 'سانلىق' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'}`}>
                          {variable.type}
                        </span>
                      </td>
                      <td className="border p-3">{variable.description}</td>
                      <td className="border p-3 text-center">
                        {variable.name === 'survived' ? '0 ياكى 1' : 
                         variable.name === 'pclass' ? '1, 2, 3' : 
                         variable.name === 'sex' ? 'male/female' : 
                         variable.name === 'age' ? '22' : 'مەلۇم'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-blue-200 dark:border-gray-700 my-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                مەشىق: يېڭى ئۆزگەرگۈچى مىقدارنى كۆزدە تۇتۇش
              </h4>
              <p className="mb-4">
                Titanic سانلىق مەلۇماتلىرىدىن يېڭى ئۆزگەرگۈچى مىقدارلارنى قانداق قۇرالايمىز؟
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <h5 className="font-bold mb-1">1. ئائىلە چوڭلۇقى</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    sibSp (قېرىنداش/ئەر-خوتۇن سانى) + parch (ئاتا-ئانا/بالىلار سانى) = familySize
                  </p>
                </div>
                <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <h5 className="font-bold mb-1">2. ياش گۇرۇپپىسى</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    age ئۆزگەرگۈچى مىقدارىنى ئاساس قىلىپ: بالا (0-12), يېشى ھەسسىز (13-17), ياش (18-30), ...
                  </p>
                </div>
                <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <h5 className="font-bold mb-1">3. ئەۋلاد باھاسى</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    fare (تىكېت باھاسى) / familySize (ئائىلە چوڭلۇقى) = farePerPerson
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "چاستوتا تەقسىماتى ۋە ياشاش نىسبىتى",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "green",
      content: (
        <div className="space-y-6">
          <DataVisualization />
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold mb-4">2.1 چاستوتا تەقسىماتى جەدۋىلى</h3>
            <p className="mb-4">
              چاستوتا تەقسىماتى جەدۋىلى بىر ئۆزگەرگۈچى مىقدارنىڭ قانداق تەقسىملەنگەنلىكىنى كۆرسىتىدۇ.
            </p>
            
            <div className="my-6 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border p-3 text-right">قەۋەت</th>
                    <th className="border p-3 text-right">ساياھەتچى سانى</th>
                    <th className="border p-3 text-right">نسبىي چاستوتا</th>
                    <th className="border p-3 text-right">ياشاش سانى</th>
                    <th className="border p-3 text-right">ياشاش نىسبىتى</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700">
                    <td className="border p-3 font-medium">بىرىنچى قەۋەت</td>
                    <td className="border p-3 text-center">324</td>
                    <td className="border p-3 text-center">14.6%</td>
                    <td className="border p-3 text-center">204</td>
                    <td className="border p-3 text-center font-bold text-green-600">62.9%</td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <td className="border p-3 font-medium">ئىككىنچى قەۋەت</td>
                    <td className="border p-3 text-center">284</td>
                    <td className="border p-3 text-center">12.8%</td>
                    <td className="border p-3 text-center">118</td>
                    <td className="border p-3 text-center font-bold text-green-600">47.3%</td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <td className="border p-3 font-medium">ئۈچىنچى قەۋەت</td>
                    <td className="border p-3 text-center">709</td>
                    <td className="border p-3 text-center">31.9%</td>
                    <td className="border p-3 text-center">178</td>
                    <td className="border p-3 text-center font-bold text-red-600">24.2%</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900 font-bold">
                    <td className="border p-3">ئومۇمىي</td>
                    <td className="border p-3 text-center">1317</td>
                    <td className="border p-3 text-center">59.2%</td>
                    <td className="border p-3 text-center">500</td>
                    <td className="border p-3 text-center">38.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">2.2 ھىستوگرامما</h3>
            <p className="mb-4">
              گىستوگرامما سانلىق ئۆزگەرگۈچى مىقدارلارنىڭ تەقسىماتىنى كۆرسىتىدىغان ستون گىرافىكىدۇر.
            </p>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-purple-200 dark:border-gray-700 my-6">
              <h4 className="font-bold mb-3">يېشى تەقسىماتى گىستوگراممىسى</h4>
              <div className="space-y-2">
                {[
                  { range: '0-10', count: 90, percentage: 4.0 },
                  { range: '11-20', count: 178, percentage: 8.0 },
                  { range: '21-30', count: 623, percentage: 28.0 },
                  { range: '31-40', count: 445, percentage: 20.0 },
                  { range: '41-50', count: 356, percentage: 16.0 },
                  { range: '51-60', count: 267, percentage: 12.0 },
                  { range: '61+', count: 265, percentage: 12.0 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-20 text-sm">{item.range} ياش</div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div 
                          className="h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded transition-all duration-1000"
                          style={{ width: `${item.percentage * 3}%` }}
                        ></div>
                        <div className="ml-2 text-sm">{item.count} كىشى ({item.percentage}%)</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">مەشىق: جىنس بويىچە ياشاش نىسبىتى</h3>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-blue-200 dark:border-gray-700 my-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                ھېسابلاش قوللىنىشى
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="mb-2"><strong>ئايال سايرىغۇچىلار:</strong></p>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white dark:bg-gray-800 rounded">
                      <span>ھايات قالغان ئايال سانى: 233</span>
                    </div>
                    <div className="text-xl">÷</div>
                    <div className="p-2 bg-white dark:bg-gray-800 rounded">
                      <span>ئومۇمىي ئايال سانى: 314</span>
                    </div>
                    <div className="text-xl">× 100 =</div>
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded font-bold">
                      <span>74.2%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="mb-2"><strong>ئەر سايرىغۇچىلار:</strong></p>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white dark:bg-gray-800 rounded">
                      <span>ھايات قالغان ئەر سانى: 109</span>
                    </div>
                    <div className="text-xl">÷</div>
                    <div className="p-2 bg-white dark:bg-gray-800 rounded">
                      <span>ئومۇمىي ئەر سانى: 577</span>
                    </div>
                    <div className="text-xl">× 100 =</div>
                    <div className="p-2 bg-red-100 dark:bg-red-900 rounded font-bold">
                      <span>18.9%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <h5 className="font-bold mb-2">خۇلاسە:</h5>
                <p>
                  ئاياللارنىڭ ياشاش نىسبىتى ئەرلەردىن تېخىمۇ يۇقىرى بولۇپ، 
                  بۇ Titanic كېمىسىدىكى «ئاياللار ۋە بالا - ئالدىن» پرىنسىپىنى كۆرسىتىدۇ.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "ئىككى ئۆزگەرگۈچى ئوتتۇرىسىدىكى مۇناسىۋەت",
      icon: <GitBranch className="w-6 h-6" />,
      color: "purple",
      content: (
        <div className="space-y-6">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold mb-4">3.1 كېسىشمە جەدۋەللەر</h3>
            <p className="mb-4">
              كېسىشمە جەدۋىلى ئىككى ئۆزگەرگۈچى مىقدار ئوتتۇرىسىدىكى مۇناسىۋەتنى كۆرسىتىدۇ.
            </p>
            
            <div className="my-6 overflow-x-auto">
              <table className="w-full border-collapse">
                <caption className="caption-top mb-2 font-bold">جىنس ۋە سىنىپ بويىچە ياشاش نىسبىتى</caption>
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border p-3 text-right">جىنس \ سىنىپ</th>
                    <th className="border p-3 text-right">بىرىنچى سىنىپ</th>
                    <th className="border p-3 text-right">ئىككىنچى سىنىپ</th>
                    <th className="border p-3 text-right">ئۈچىنچى سىنىپ</th>
                    <th className="border p-3 text-right">ئومۇمىي</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700">
                    <td className="border p-3 font-medium">ئاياللار</td>
                    <td className="border p-3 text-center font-bold text-green-600">96.8%</td>
                    <td className="border p-3 text-center font-bold text-green-600">92.1%</td>
                    <td className="border p-3 text-center font-bold text-green-600">50.0%</td>
                    <td className="border p-3 text-center font-bold">74.2%</td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <td className="border p-3 font-medium">ئەرلەر</td>
                    <td className="border p-3 text-center font-bold text-green-600">36.8%</td>
                    <td className="border p-3 text-center font-bold text-red-600">17.4%</td>
                    <td className="border p-3 text-center font-bold text-red-600">16.2%</td>
                    <td className="border p-3 text-center font-bold">18.9%</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900 font-bold">
                    <td className="border p-3">ئومۇمىي</td>
                    <td className="border p-3 text-center">62.9%</td>
                    <td className="border p-3 text-center">47.3%</td>
                    <td className="border p-3 text-center">24.2%</td>
                    <td className="border p-3 text-center">31.8%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">3.2 شەرتلىك ئېھتىماللىق</h3>
            <p className="mb-4">
              شەرتلىك ئېھتىماللىق بىر ۋەقە يۈز بېرىش ئېھتىماللىقى، باشقا بىر ۋەقە يۈز بەرگەن شارائىتتا.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-blue-200 dark:border-gray-700 my-6">
              <h4 className="font-bold mb-3">شەرتلىك ئېھتىماللىق مىساللىرى:</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <h5 className="font-bold mb-2">ئەگەر سايرىغۇچى ئايال بولسا، ھايات قالغانلىق ئېھتىماللىقى قانچە؟</h5>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white dark:bg-gray-800 rounded">
                      <span>P(ھايات قالغان | ئايال) =</span>
                    </div>
                    <div className="text-xl">233 ÷ 314 =</div>
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded font-bold">
                      <span>0.742 (74.2%)</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <h5 className="font-bold mb-2">ئەگەر سايرىغۇچى ئۈچىنچى سىنىپتا بولسا، ھايات قالغانلىق ئېھتىماللىقى قانچە؟</h5>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white dark:bg-gray-800 rounded">
                      <span>P(ھايات قالغان | ئۈچىنچى سىنىپ) =</span>
                    </div>
                    <div className="text-xl">178 ÷ 709 =</div>
                    <div className="p-2 bg-red-100 dark:bg-red-900 rounded font-bold">
                      <span>0.242 (24.2%)</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <h5 className="font-bold mb-2">ئەگەر سايرىغۇچى بىرىنچى سىنىپ ئايال بولسا، ھايات قالغانلىق ئېھتىماللىقى قانچە؟</h5>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white dark:bg-gray-800 rounded">
                      <span>P(ھايات قالغان | بىرىنچى سىنىپ ۋە ئايال) =</span>
                    </div>
                    <div className="text-xl">91 ÷ 94 =</div>
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded font-bold">
                      <span>0.968 (96.8%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">3.4 ياش ۋە ياشاش نىسبىتى</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-green-200 dark:border-gray-700">
                <h4 className="font-bold mb-3">بالىلار (0-12 ياش)</h4>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">52.3%</div>
                  <p className="text-sm">ياشاش نىسبىتى</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>ئومۇمىي بالا سانى:</span>
                    <span>112</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>ھايات قالغان بالا:</span>
                    <span>59</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>ھالاك بولغان بالا:</span>
                    <span>53</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-blue-200 dark:border-gray-700">
                <h4 className="font-bold mb-3">چوڭلار (13+ ياش)</h4>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">38.2%</div>
                  <p className="text-sm">ياشاش نىسبىتى</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>ئومۇمىي چوڭ سانى:</span>
                    <span>2012</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>ھايات قالغان چوڭ:</span>
                    <span>769</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>ھالاك بولغان چوڭ:</span>
                    <span>1243</span>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">مەشىق: ياش سىنىپى بويىچە ياشاش نىسبىتى</h3>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-purple-200 dark:border-gray-700 my-6">
              <h4 className="font-bold mb-3">ياش گۇرۇپپىسى بويىچە ياشاش نىسبىتى:</h4>
              
              <div className="space-y-4">
                {[
                  { ageGroup: '0-10 ياش', total: 90, survived: 50, rate: 55.6 },
                  { ageGroup: '11-20 ياش', total: 178, survived: 85, rate: 47.8 },
                  { ageGroup: '21-30 ياش', total: 623, survived: 230, rate: 36.9 },
                  { ageGroup: '31-40 ياش', total: 445, survived: 165, rate: 37.1 },
                  { ageGroup: '41-50 ياش', total: 356, survived: 115, rate: 32.3 },
                  { ageGroup: '51-60 ياش', total: 267, survived: 45, rate: 16.9 },
                  { ageGroup: '61+ ياش', total: 265, survived: 25, rate: 9.4 }
                ].map((group, index) => (
                  <div key={index} className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{group.ageGroup}</span>
                      <span className={`font-bold ${group.rate > 30 ? 'text-green-600' : 'text-red-600'}`}>
                        {group.rate}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${group.rate > 30 ? 'bg-green-500' : 'bg-red-500'} transition-all duration-1000`}
                        style={{ width: `${group.rate}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>ھايات: {group.survived}</span>
                      <span>ئومۇمىي: {group.total}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-white/70 dark:bg-gray-800/70 rounded-lg">
                <h5 className="font-bold mb-2">خۇلاسە:</h5>
                <p className="text-sm">
                  ياشاش نىسبىتى يېشى كىچىكلەردە ئەڭ يۇقىرى، يېشى چوڭلاردا ئەڭ تۆۋەن بولۇپ، 
                  بۇ «ئاياللار ۋە بالا - ئالدىن» پرىنسىپىنىڭ داۋامچىسىدۇر.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "ئېھتىماللىق ۋە پەرەز قىلىش",
      icon: <Target className="w-6 h-6" />,
      color: "red",
      content: (
        <div className="space-y-6">
          <PredictionSimulator />
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold mb-4">4.1 ئېھتىماللىق دېگەن نېمە؟</h3>
            <p className="mb-4">
              ئېھتىماللىق بىر ۋەقەنىڭ يۈز بېرىش مۇمكىنچىلىكىنى ئىپادىلەيدىغان 0 دىن 1 گىچە بولغان سان.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-blue-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
                <h4 className="font-bold mb-2">مۇمكىن ئەمەس</h4>
                <p className="text-sm">ۋەقە ھەرگىز يۈز بەرمەيدۇ</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-green-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-green-600 mb-2">0.5</div>
                <h4 className="font-bold mb-2">تەڭ مۇمكىنچىلىك</h4>
                <p className="text-sm">ۋەقە يۈز بېرىش ۋە بولماسلىق ئېھتىماللىقى تەڭ</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-purple-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
                <h4 className="font-bold mb-2">قەتئىي</h4>
                <p className="text-sm">ۋەقە ھەرگىز يۈز بېرىدۇ</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">4.2 ئېھتىماللىق مودېللىرى</h3>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-green-200 dark:border-gray-700 my-6">
              <h4 className="font-bold mb-3">Titanic ئېھتىماللىق مودېلى:</h4>
              
              <div className="space-y-4">
                <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <h5 className="font-bold mb-1">ئاساسىي ئېھتىماللىق:</h5>
                  <div className="flex items-center gap-2">
                    <span>P(ھايات قالغان) =</span>
                    <div className="p-2 bg-white dark:bg-gray-800 rounded">
                      <span>711 ÷ 2224 =</span>
                    </div>
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded font-bold">
                      <span>0.318 (31.8%)</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <h5 className="font-bold mb-1">بىرىنچى سىنىپ ئايال ئېھتىماللىقى:</h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span>P(بىرىنچى سىنىپ ۋە ئايال) =</span>
                      <div className="p-2 bg-white dark:bg-gray-800 rounded">
                        <span>94 ÷ 2224 =</span>
                      </div>
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded font-bold">
                        <span>0.042 (4.2%)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>P(ھايات قالغان | بىرىنچى سىنىپ ۋە ئايال) =</span>
                      <div className="p-2 bg-white dark:bg-gray-800 rounded">
                        <span>91 ÷ 94 =</span>
                      </div>
                      <div className="p-2 bg-green-100 dark:bg-green-900 rounded font-bold">
                        <span>0.968 (96.8%)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <h5 className="font-bold mb-1">ئۈچىنچى سىنىپ ئەر ئېھتىماللىقى:</h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span>P(ئۈچىنچى سىنىپ ۋە ئەر) =</span>
                      <div className="p-2 bg-white dark:bg-gray-800 rounded">
                        <span>347 ÷ 2224 =</span>
                      </div>
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded font-bold">
                        <span>0.156 (15.6%)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>P(ھايات قالغان | ئۈچىنچى سىنىپ ۋە ئەر) =</span>
                      <div className="p-2 bg-white dark:bg-gray-800 rounded">
                        <span>47 ÷ 347 =</span>
                      </div>
                      <div className="p-2 bg-red-100 dark:bg-red-900 rounded font-bold">
                        <span>0.135 (13.5%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">4.3 پەرەز قىلىش نېمە ئىش قىلىدۇ؟</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-blue-200 dark:border-gray-700">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  ئىلمىي پەرەز قىلىش
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>سانلىق مەلۇماتلارغا ئاساسلىنىدۇ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>ماتېماتىكىلىق مودېللارنى ئىشلىتىدۇ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>سىناش ۋە دەلىللەشكە بولىدۇ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>توغرىلىقى ئۆلچىنىدۇ</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-red-200 dark:border-gray-700">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  پالچىلىق
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5" />
                    <span>سانلىق مەلۇماتسىز پەرەز</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5" />
                    <span>ئىلمىي ئاساسقا ئىگە ئەمەس</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5" />
                    <span>سىناش ۋە دەلىللەشكە بولمايدۇ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5" />
                    <span>توغرىلىقى ئۆلچىنىدۇ</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">مەشىق: پەرەز مودېلى قۇرۇش</h3>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-purple-200 dark:border-gray-700 my-6">
              <h4 className="font-bold mb-3">قانداق قىلىپ ئاددىي پەرەز مودېلى قۇرۇش كېرەك؟</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <h5 className="font-bold mb-2">1. ئاساسىي قائىدە:</h5>
                  <pre className="bg-gray-900 text-left text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`ئەگەر جىنس == "ئايال" ۋە سىنىپ == 1:
    پەرەز = "ھايات قالىدۇ" (ئېھتىماللىق: 97%)
باشقا ئەگەر جىنس == "ئايال" ۋە سىنىپ == 2:
    پەرەز = "ھايات قالىدۇ" (ئېھتىماللىق: 92%)
باشقا ئەگەر جىنس == "ئايال":
    پەرەز = "ھايات قالىدۇ" (ئېھتىماللىق: 50%)
باشقا:
    پەرەز = "ھالاك بولىدۇ" (ئېھتىماللىق: 81%)`}
                  </pre>
                </div>
                
                <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <h5 className="font-bold mb-2">2. ماتېماتىكىلىق مودېل:</h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span>logit(p) =</span>
                      <div className="p-2 bg-white dark:bg-gray-800 rounded">
                        <span>β₀ + β₁×جىنس + β₂×سىنىپ + β₃×ياش</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>p =</span>
                      <div className="p-2 bg-white dark:bg-gray-800 rounded">
                        <span>1 / (1 + e^(-logit(p)))</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm mt-2">
                    بۇ لوگىكىلىق رېگرېسسىيە مودېلى بولۇپ، ھەر بىر ئۆزگەرگۈچى مىقدارغا بىر كوئېففىتسېنت بېرىپ، 
                    ئاخىرىدا ھايات قالغانلىق ئېھتىماللىقىنى ھېسابلايدۇ.
                  </p>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-white/70 dark:bg-gray-800/70 rounded-lg">
                <h5 className="font-bold mb-2">مۇھىم نۇقتا:</h5>
                <p className="text-sm">
                  ياخشى پەرەز مودېلى دەل سانلىق مەلۇماتلارغا ئاساسلىنىدۇ ۋە يېڭى سانلىق مەلۇماتلار بىلەن سىنالالايدۇ. 
                  Titanic سانلىق مەلۇمات توپلىمى بۇنىڭ ئەڭ ياخشى مىسالى.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "سانلىق مەلۇماتلارنى ئالدىن بىر تەرەپ قىلىش",
      icon: <Cpu className="w-6 h-6" />,
      color: "orange",
      content: (
        <div className="space-y-6">
          <DataTableDemo />
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold mb-4">5.1 قىممەتلەرنىڭ يوقاپ كېتىشى نېمە؟</h3>
            <p className="mb-4">
              قىممەت يوقاپ كېتىشى دېگەن سانلىق مەلۇمات جەدۋىلىدىكى بىر قۇر ياكى ستوننىڭ قىممىتى يوقلۇقىنى كۆرسىتىدۇ.
            </p>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-red-200 dark:border-gray-700 my-6">
              <h4 className="font-bold mb-3">Titanic سانلىق مەلۇماتلىرىدىكى قىممەت يوقلۇقى:</h4>
              
              <div className="space-y-3">
                {[
                  { variable: 'يېشى (age)', missing: 177, percentage: 20.0, description: 'سايرىغۇچىلارنىڭ 20% نىڭ يېشى يوق' },
                  { variable: 'كابىنا (cabin)', missing: 687, percentage: 77.1, description: 'كۆپ سايرىغۇچىلارنىڭ كابىنا نومۇرى يوق' },
                  { variable: 'كىمەن پورتى (embarked)', missing: 2, percentage: 0.2, description: 'ئاز ساندىكى سايرىغۇچىلارنىڭ كىمەن پورتى يوق' }
                ].map((item, index) => (
                  <div key={index} className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{item.variable}</span>
                      <span className="font-bold text-red-600">{item.missing} ({item.percentage}%)</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-red-400 to-orange-500"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">5.2 چەتكە قېقىشلار</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-green-200 dark:border-gray-700">
                <h4 className="font-bold mb-3">تىكېت باھاسى چەتكە قېقىشلىرى</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>ئەڭ تۆۋەن باھا:</span>
                    <span className="font-bold">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ئوتتۇرىچە باھا:</span>
                    <span className="font-bold">$32.20</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ئەڭ يۇقىرى باھا:</span>
                    <span className="font-bold text-red-600">$512.33</span>
                  </div>
                  <div className="flex justify-between">
                    <span>75% چېكى:</span>
                    <span>$31.00</span>
                  </div>
                </div>
                <div className="mt-4 p-2 bg-white/50 dark:bg-gray-800/50 rounded">
                  <p className="text-sm">
                    <strong>تەھلىل:</strong> $512.33 تىكېت باھاسى چەتكە قېقىش بولۇپ، 
                    بۇ بىرىنچى سىنىپتىكى ئالاھىدە لۇكس كابىنىلارغا تېگىشلىك.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-blue-200 dark:border-gray-700">
                <h4 className="font-bold mb-3">يېشى چەتكە قېقىشلىرى</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>ئەڭ كىچىك يېشى:</span>
                    <span className="font-bold">2 ئاي (0.17)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ئوتتۇرىچە يېشى:</span>
                    <span className="font-bold">29.7 ياش</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ئەڭ چوڭ يېشى:</span>
                    <span className="font-bold text-red-600">80 ياش</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ئۆلچەملىك ئېغىش:</span>
                    <span>14.5 ياش</span>
                  </div>
                </div>
                <div className="mt-4 p-2 bg-white/50 dark:bg-gray-800/50 rounded">
                  <p className="text-sm">
                    <strong>تەھلىل:</strong> 2 ئايلىق بالا ۋە 80 ياشلىق ئىشچى چەتكە قېقىشلار بولۇپ، 
                    بۇ سانلىق مەلۇمات توپلىمىنىڭ كەڭ دائىرىلىكىنى كۆرسىتىدۇ.
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">5.4 تۈرگە ئايرىش ئۆزگەرگۈچى مىقدارلىرىنى مىقدارلاشتۇرۇش</h3>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-purple-200 dark:border-gray-700 my-6">
              <h4 className="font-bold mb-3">مىسال: جىنىسنى سانلىق قىممەتلەرگە ئايلاندۇرۇش</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold mb-2">1. Label Encoding (بەلگە كودلاش):</h5>
                  <pre className="bg-gray-900 text-left text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`# جىنىسنى 0 ۋە 1 گە ئايلاندۇرۇش
titanic['sex_encoded'] = titanic['sex'].map({'male': 0, 'female': 1})

# نەتىجە:
# male -> 0
# female -> 1`}
                  </pre>
                  <p className="text-sm mt-2">
                    <strong>ئارتۇقچىلىقى:</strong> ئاددىي، بىر ستونلا قوشۇلىدۇ
                  </p>
                  <p className="text-sm">
                    <strong>چەكلىمىسى:</strong> مودېل «مەن» ۋە «ئايال» دىكىپ پەرق قىلىدۇ دەپ ئويلاشى مۇمكىن
                  </p>
                </div>
                
                <div>
                  <h5 className="font-bold mb-2">2. One-Hot Encoding (بىر-قىزىل كودلاش):</h5>
                  <pre className="bg-gray-900 text-left text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`# ھەر بىر قىممەتكە ئايرىم ستون قۇرۇش
sex_dummies = pd.get_dummies(titanic['sex'], prefix='sex')

# نەتىجە:
# sex_male: 1 ئەگەر ئەر بولسا، 0 بولمىسا
# sex_female: 1 ئەگەر ئايال بولسا، 0 بولمىسا`}
                  </pre>
                  <p className="text-sm mt-2">
                    <strong>ئارتۇقچىلىقى:</strong> مودېل ھېچقانداق تەرتىپنى ئويلاشى مۇمكىن ئەمەس
                  </p>
                  <p className="text-sm">
                    <strong>چەكلىمىسى:</strong> ستونلار سانى كۆپىيىدۇ
                  </p>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-white/70 dark:bg-gray-800/70 rounded-lg">
                <h5 className="font-bold mb-2">مۇھىم ئەسكەرتىش:</h5>
                <p className="text-sm">
                  كۆپىنچە ماشىنا ئۆگىنىش مودېللىرى سانلىق قىممەتلەر بىلەنلا ئىشلەيدۇ، 
                  شۇڭا سۈپەت ئۆزگەرگۈچى مىقدارلارنى سانلىققا ئايلاندۇرۇش زۆرۈر.
                </p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">5.8 قوللىنىش: ئالاھىدىلىك قۇرۇلۇشى</h3>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-green-200 dark:border-gray-700 my-6">
              <h4 className="font-bold mb-3">يېڭى ئالاھىدىلىكلەرنى قۇرۇش:</h4>
              
              <div className="space-y-4">
                <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <h5 className="font-bold mb-1">1. ئائىلە چوڭلۇقى:</h5>
                  <pre className="bg-gray-900 text-gray-100 p-3 text-left rounded text-sm overflow-x-auto">
{`# ئائىلە چوڭلۇقى = قېرىنداش/ئەر-خوتۇن + ئاتا-ئانا/بالىلار + 1 (ئۆزى)
titanic['family_size'] = titanic['sibSp'] + titanic['parch'] + 1

# ئائىلە چوڭلۇقى بويىچە گۇرۇپپىلاشتۇرۇش
titanic['family_type'] = pd.cut(titanic['family_size'], 
                                 bins=[0, 1, 4, 11],
                                 labels=['تەنھا', 'كىچىك ئائىلە', 'چوڭ ئائىلە'])`}
                  </pre>
                </div>
                
                <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <h5 className="font-bold mb-1">2. ئىسىمدىن ماۋزۇ چىقىرىش:</h5>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm text-left overflow-x-auto">
{`# ئىسىمدىن ماۋزۇ (Mr., Mrs., Miss., Master.) چىقىرىش
import re

def extract_title(name):
    title_search = re.search(' ([A-Za-z]+)\\.', name)
    if title_search:
        return title_search.group(1)
    return ''

titanic['title'] = titanic['name'].apply(extract_title)

# كۆپ ئۇچرايدىغان ماۋزۇلار
title_mapping = {
    'Mr': 'Mr',
    'Miss': 'Miss', 
    'Mrs': 'Mrs',
    'Master': 'Master',
    'Dr': 'Rare',
    'Rev': 'Rare',
    'Col': 'Rare',
    'Major': 'Rare',
    'Mlle': 'Rare',
    'Countess': 'Rare',
    'Ms': 'Rare',
    'Lady': 'Rare',
    'Jonkheer': 'Rare',
    'Don': 'Rare',
    'Dona': 'Rare',
    'Mme': 'Rare',
    'Capt': 'Rare',
    'Sir': 'Rare'
}

titanic['title'] = titanic['title'].map(title_mapping)`}
                  </pre>
                </div>
                
                <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <h5 className="font-bold mb-1">3. ھەر كىشىلىك بىلەت باھاسى:</h5>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm text-left overflow-x-auto">
{`# ئائىلە ئەزالىرى ئارىسىدا تىكېت باھاسىنى تەقسىملەش
titanic['fare_per_person'] = titanic['fare'] / titanic['family_size']

# ھەر كىشىلىك تىكېت باھاسى بويىچە گۇرۇپپىلاشتۇرۇش
titanic['fare_category'] = pd.qcut(titanic['fare_per_person'], 
                                    4, 
                                    labels=['تۆۋەن', 'ئوتتۇرا', 'يۇقىرى', 'بەك يۇقىرى'])`}
                  </pre>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-white/70 dark:bg-gray-800/70 rounded-lg">
                <h5 className="font-bold mb-2">ئالاھىدىلىك قۇرۇلۇشىنىڭ مۇھىملىقى:</h5>
                <p className="text-sm">
                  ئالاھىدىلىك قۇرۇلۇشى سانلىق مەلۇمات تەھلىلىدىكى ئەڭ مۇھىم باسقۇچلارنىڭ بىرى. 
                  ياخشى ئالاھىدىلىكلەر مودېل توغرىلىقىنى 20% گىچە يۇقىرى كۆتۈرەلەيدۇ.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const allChapters = chapters;

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-gray-100 text-gray-800'}`} style={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
      {/* تېما تەڭشەش تۇمىسى */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow-lg transition-all duration-300`}
          title={darkMode ? "ئېنىق تېما" : "تۇنۇش تېما"}
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow-lg transition-all duration-300 lg:hidden`}
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* ماۋزۇ بۆلەك */}
        <header className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>
          <div className="relative">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <Ship className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  تىتانىك بىلەن سانلىق مەلۇمات ئىلمىنى ئۆگىنىش
                </h1>
                <p className="text-2xl mt-2 text-gray-600 dark:text-gray-300">
                  ستاتىستىكادىن ماشىنا ئۆگىنىشنى يولغا قويۇشقىچە
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium flex items-center gap-2">
                <Brain className="w-4 h-4" /> ماشىنا ئۆگىنىش
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4" /> 2026-يىلى 1-ئاينىڭ 2-كۈنى
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> تولۇق يول باشلاش قوللىنىشى
              </span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* يان تەرەپ مەزمۇن جەدۋىلى */}
          <aside className={`lg:col-span-1 ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
            <div className={`sticky top-8 rounded-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="دەرسلىكتىن ئىزدەش..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 pr-10 rounded-xl border dark:border-gray-700 dark:bg-gray-900"
                  />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                مەزمۇن جەدۋىلى
              </h2>
              
              <div className="space-y-2 max-h-[500px] overflow-y-auto">
                {allChapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => {
                      setActiveChapter(chapter.id);
                      setSidebarOpen(false);
                      addActivity(`${chapter.title} ئوقۇلدى`);
                    }}
                    className={`w-full text-right p-3 rounded-xl mb-2 transition-all ${activeChapter === chapter.id 
                      ? `bg-${chapter.color}-500 text-white transform scale-105 shadow-lg` 
                      : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl">{chapter.icon}</span>
                      <div className="text-left flex-1 mr-3">
                        <div className="font-medium">{chapter.title}</div>
                        <div className="text-xs opacity-75 mt-1">
                          {chapter.id + 1} بۆلەك • {chapter.sections?.length || 8} تەپسىلات
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t dark:border-gray-700">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  ئۆگىنىش ئىلگىرىلىشى
                </h4>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${((activeChapter + 1) / allChapters.length) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-600 dark:text-gray-400">
                    {activeChapter + 1} / {allChapters.length} بۆلەك
                  </span>
                  <span className="font-bold text-green-600">
                    {Math.round(((activeChapter + 1) / allChapters.length) * 100)}%
                  </span>
                </div>
              </div>
              
              <div className="mt-6 flex gap-2">
                <button className="flex-1 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Bookmark className="w-4 h-4" />
                  ساقلاش
                </button>
                <button className="flex-1 p-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" />
                  ئورتاقلىشىش
                </button>
              </div>
            </div>
            
            <ActivityLog activities={activities} />
          </aside>

          {/* ئاساسىي مەزمۇن بۆلەك */}
          <main className="lg:col-span-3">
            <div className={`rounded-2xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              {/* ھازىرقى بۆلەك چوققىسى */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-${allChapters[activeChapter].color}-100 dark:bg-${allChapters[activeChapter].color}-900/30`}>
                    {allChapters[activeChapter].icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm bg-${allChapters[activeChapter].color}-500 text-white`}>
                        {allChapters[activeChapter].id < 6 ? 'ئاساسىي بىلىم' : 'تېخنىكىلىق قوللىنىش'}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        بۆلەك {allChapters[activeChapter].id}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mt-2">
                      {allChapters[activeChapter].title}
                    </h2>
                  </div>
                </div>

                {allChapters[activeChapter].content}
              </div>

              {/* بۆلەك ئالماشتۇرۇش تۇمىسى */}
              <div className="flex justify-between items-center pt-6 border-t dark:border-gray-700">
                <button
                  onClick={() => {
                    setActiveChapter(Math.max(0, activeChapter - 1));
                    addActivity(`بۆلەك ${activeChapter} غا قايتىلدى`);
                  }}
                  disabled={activeChapter === 0}
                  className={`px-6 py-3 rounded-xl flex items-center gap-2 ${activeChapter === 0 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:transform hover:-translate-x-1 transition-transform bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                >
                  <ChevronRight className="w-5 h-5" />
                  <span>ئالدىنقى بۆلەك</span>
                </button>

                <div className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {allChapters[activeChapter].id + 1}. بۆلەك
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    {allChapters[activeChapter].sections?.length || 8} تەپسىلات
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActiveChapter(Math.min(allChapters.length - 1, activeChapter + 1));
                    addActivity(`بۆلەك ${activeChapter + 2} غا ئۆتۈلدى`);
                  }}
                  disabled={activeChapter === allChapters.length - 1}
                  className={`px-6 py-3 rounded-xl flex items-center gap-2 ${activeChapter === allChapters.length - 1 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:transform hover:translate-x-1 transition-transform bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                >
                  <span>كىيىنكى بۆلەك</span>
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* ئەمەلىي مىساللار بۆلەكى */}
            {activeChapter >= 3 && (
              <div className="mt-8">
                <PracticalExamples />
              </div>
            )}

            {/* Titanic ھەققىدە ئۇچۇر */}
            <div className={`mt-8 rounded-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-50 to-purple-50'} shadow-lg`}>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">تىتانىك سانلىق مەلۇمات توپلىمى ھەققىدە</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    بۇ سانلىق مەلۇمات توپلىمىدا 2224 سايرىغۇچىنىڭ ئۇچۇرلىرى بار بولۇپ، ھەر بىر سايرىغۇچىنىڭ يېشى، جىنسى، 
                    سىنىپى، ھايات قالغان-قالمىغانلىقى قاتارلىق 14 ئۆزگەرگۈچى مىقدار بار. 
                    بۇ سانلىق مەلۇماتلار ئارقىلىق ماشىنا ئۆگىنىش مودېللىرىنى سىناپ، ھايات قالغانلارنى پەرەز قىلىشقا ئۆگىنىمىز.
                  </p>
                  <div className="flex gap-4 mt-4">
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      سانلىق مەلۇماتلارنى چۈشۈرۈش
                    </button>
                    <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      كودنى ئىجرا قىلىش
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* ئاستىنقى پەرەز */}
        <footer className="mt-12 pt-8 border-t dark:border-gray-800 text-center">
          {/* <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#" className={`px-4 py-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors flex items-center gap-2`}>
              <Home className="w-4 h-4" />
              باش بەت
            </a>
            <a href="#" className={`px-4 py-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors flex items-center gap-2`}>
              <Code className="w-4 h-4" />
              كود دىيارى
            </a>
            <a href="#" className={`px-4 py-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors flex items-center gap-2`}>
              <FileText className="w-4 h-4" />
              مەشىق چۈشەندۈرۈشلىرى
            </a>
            <a href="#" className={`px-4 py-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors flex items-center gap-2`}>
              <Users className="w-4 h-4" />
              ئالاقىلىشىش
            </a>
          </div> */}
          
          <div className="flex justify-center gap-4 mb-6">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <ThumbsUp className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <MessageCircle className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400">
            © 2026 KeLBiL  سانلىق مەلۇمات ئىلمى دەرسلىكى. بارلىق ھوقۇقلار قوغدىلىدى.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            بۇ دەرسلىك UKIJ Tuz، UKIJ Nasq، Microsoft Uighur خەت نۇسخىلىرىدا كۆرسىتىلىدۇ
          </p>
        </footer>
      </div>
    </div>
  );
};

// قوشۇمچە ئىكونالار
const Calendar = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

// React پروگراممىسىنى قايتۇرۇش
const App = () => {
  return <TitanicDataScienceCourse />;
};

export default App;