// statistics-level4-ug.jsx
import React, { useState } from 'react';
import {
  Database,
  BarChart3,
  TrendingUp,
  PieChart,
  ScatterChart,
  LineChart,
  Users,
  Target,
  Calculator,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Code,
  Globe,
  Filter,
  Search,
  Cpu,
  Shield,
  CheckCircle,
  AlertCircle,
  Clock,
  Calendar,
  FileText,
  Coffee,
  Rocket,
  Zap,
  Award,
  Brain,
  Lightbulb,
  GraduationCap,
  ChartBar,
  ChartLine,
  ChartPie,
  ChartScatter,
  ChartArea,
  ChartCandlestick,
  Layers,
  GitBranch,
  Hash,
  Percent,
  Divide,
  Table,
  Grid,
  ZapOff,
  TrendingDown,
  RefreshCw,
  Activity,
  BarChart2,
  FileBarChart,
  Book,
  School,
  HelpCircle,
  ChevronUp,
  Eye,
  Download,
  Share2,
  Star,
  ThumbsUp,
  MessageCircle,
  Bookmark,
  Settings,
  Home,
  User,
  Mail
} from 'lucide-react';

const StatisticsLevel4UG = () => {
  const [activeTopic, setActiveTopic] = useState(null);
  const [activeSubTopic, setActiveSubTopic] = useState(null);
  const [language, setLanguage] = useState('ug');
  const [favorites, setFavorites] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  const t = (obj) => {
    if (!obj) return '';
    return language === 'ug' ? obj.ug : obj.en;
  };

  const bilingualTerm = (ug, en) => {
    if (language === 'ug') {
      return (
        <div className="flex items-start justify-between">
          <span className="font-medium text-gray-900">{ug}</span>
          <span className="text-xs text-gray-500 ml-2 text-right flex-shrink-0">{en}</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-start justify-between">
          <span className="font-medium text-gray-900">{en}</span>
          <span className="text-xs text-gray-500 ml-2 text-right flex-shrink-0">{ug}</span>
        </div>
      );
    }
  };

  const mainTopics = [
    {
      id: 'problem-solving',
      title: {
        ug: 'ئىستاتىستىكىلىق مەسىلىنى ھەل قىلىش ئۇسۇلى',
        en: 'Statistical Problem Solving'
      },
      icon: Target,
      color: 'purple',
      description: {
        ug: 'پىكىرلىك مەسىلىلەرنى ئىستاتىستىكىلىق ئۇسۇل بىلەن ھەل قىلىش جەريانى',
        en: 'Process of solving conceptual problems using statistical methods'
      },
      subtopics: [
        {
          id: 'ppdac-cycle',
          title: { ug: 'PPDAC(PDCA) دورىسى', en: 'PPDAC Cycle' },
          learningObjective: {
            ug: 'ئىستاتىستىكىلىق مەسىلىنى ھەل قىلىشنىڭ 5 باسقۇچلۇق جەريانىنى چۈشىنىش',
            en: 'Understand the 5-step process of solving statistical problems'
          },
          terms: [
            { ug: 'مەقسىت', en: 'Problem' },
            { ug: 'رېجە', en: 'Plan' },
            { ug: 'دېتا يىغىش', en: 'Data' },
            { ug: 'تەھلىل', en: 'Analysis' },
            { ug: 'خۇلاسە', en: 'Conclusion' }
          ],
          example: {
            ug: 'مەكتەپتە ئوقۇغۇچىلارنىڭ كىتاب ئوقۇش ۋاقتىنى ئاشۇرۇش — مەقسىت. سوئالنامىدە دېتا يىغىش — دېتا قەدەمى.',
            en: 'Increasing students reading time at school — Problem. Data collection via questionnaire — Data step.'
          },
          code: `# PPDAC دورىسى ئەمەلىيەتتىكى قوللىنىلىشى
import pandas as pd
import matplotlib.pyplot as plt

class PPDAC_Cycle:
    def __init__(self):
        self.steps = [
            "مەقسىت (Problem)",
            "رېجە (Plan)", 
            "دېتا (Data)",
            "تەھلىل (Analysis)",
            "خۇلاسە (Conclusion)"
        ]
    
    def run_cycle(self, problem_description):
        """PPDAC دورىسىنى ئىجرا قىلىش"""
        print("=== PPDAC دورىسى ===")
        print(f"مەسىلە: {problem_description}")
        print("-" * 40)
        
        for i, step in enumerate(self.steps, 1):
            print(f"{i}. {step}")
            
            # ھەر بىر قەدەمگە تەۋەر مەزمۇن
            if step == "مەقسىت (Problem)":
                print("   → مەسىلىنى ئېنىق بەلگىلەش")
                print("   → دەلىللەش")
            elif step == "رېجە (Plan)":
                print("   → تەكشۈرۈش لايىھىسى")
                print("   → دېتا توپلاش ئۇسۇلى")
                print("   → نۇمۇنە چوڭلۇقى")
            elif step == "دېتا (Data)":
                print("   → دېتا توپلاش")
                print("   → دېتا پاكلىقىنى تەكشۈرۈش")
                print("   → دېتا ساقلاش")
            elif step == "تەھلىل (Analysis)":
                print("   → دېتا ۋىزۇئالىزاتسىيە")
                print("   → ئىستاتىستىكىلىق تەھلىل")
                print("   → نەتىجىلەرنى تەھلىل قىلىش")
            elif step == "خۇلاسە (Conclusion)":
                print("   → نەتىجىلەرنى خۇلاسىلەش")
                print("   → مەسىلىگە جاۋاب")
                print("   → تەۋسىيە بېرىش")
            
            print()
        
        print("دورى تامام! نەتىجىلەرنى قايتا تەكشۈرۈڭ.")

# مىسال ئىجرا
cycle = PPDAC_Cycle()
cycle.run_cycle("ئوقۇغۇچىلارنىڭ كىتاب ئوقۇش ۋاقتىنى ئاشۇرۇش")

# PPDAC ئىچىدە قوللىنىلىدىغان ئاساسىي ئىستاتىستىكىلىق ئۇسۇللار
print("\\n=== PPDAC دورىسىدا قوللىنىلىدىغان ئاساسىي ئۇسۇللار ===")
methods_by_step = {
    "مەقسىت": ["مەسىلە ئېنىقلىمىسى", "دەلىللەش", "ئۆلچەم بەلگىلەش"],
    "رېجە": ["نۇمۇنە تاللاش", "سۈرۋېي لايىھىسى", "تەجرىبە تۈزۈمى"],
    "دېتا": ["دېتا توپلاش", "پاكلىق تەكشۈرۈش", "دېتا ساقلاش"],
    "تەھلىل": ["گىرافىك كۆرسىتىش", "ئىستاتىستىكىلىق تەھلىل", "سېلىشتۇرما تەھلىل"],
    "خۇلاسە": ["نەتىجە خۇلاسىلەش", "تەۋسىيە بېرىش", "ئەكىس ئەتتۈرۈش"]
}

for step, methods in methods_by_step.items():
    print(f"{step}:")
    for method in methods:
        print(f"  • {method}")

# PPDAC دورىسىنىڭ پايدىلىرى
print("\\n=== PPDAC دورىسىنىڭ پايدىلىرى ===")
benefits = [
    "1. مەسىلىنى تۈزۈملۈك ھەل قىلىش",
    "2. ھەر قەدەمنى ئېنىق پىلانلاش",
    "3. دېتا توپلاش ۋە تەھلىلنى بىر تۇتاش قىلىش",
    "4. نەتىجىلەرنى ئوبيېكتىپ باھالىش",
    "5. قايتا ئىشلىتىشكە بولىدىغان رەھبەرلىك"
]

for benefit in benefits:
    print(benefit)

# مىسال: كۈنلۈك تۇرمۇشتا PPDAC قوللىنىش
print("\\n=== مىسال: كۈنلۈك تۇرمۇشتا PPDAC قوللىنىش ===")
daily_examples = {
    "ئاشپەزلىك": {
        "مەقسىت": "يېڭى تېتىماق تاماق ئىشلەش",
        "رېجە": "رېتسېپ ۋە ماتېرىيال تەييارلاش",
        "دېتا": "تاماق پىشۇرۇش جەريانىنى كۆزىتىش",
        "تەھلىل": "تېتىمىنى باھالىش",
        "خۇلاسە": "كەلگۈسىدە قانداق ياخشىلاش"
    },
    "مەكتەپ": {
        "مەقسىت": "ئىمتاھان نەتىجىسىنى ئاشۇرۇش",
        "رېجە": "ئۆگىنىش پىلانى تۈزۈش",
        "دېتا": "ئىمتاھان نەتىجىلىرىنى توپلاش",
        "تەھلىل": "قايسى تېمىلاردا ئاجىز ئىكەنلىكىنى باھالىش",
        "خۇلاسە": "ئۆگىنىش ئۇسۇلىنى ياخشىلاش"
    },
    "ساغلاملىق": {
        "مەقسىت": "ئېغىرلىقنى تۆۋەنلەتەش",
        "رېجە": "تەمىنات ۋە مەشىق پىلانى",
        "دېتا": "ھەر كۈنلىك ئېغىرلىقنى خاتىرەلەش",
        "تەھلىل": "ئېغىرلىق ئۆزگىرىشىنى تەھلىل قىلىش",
        "خۇلاسە": "تەمىنات ۋە مەشىق پىلانىنى تەڭشەش"
    }
}

for area, steps in daily_examples.items():
    print(f"\\n{area}:")
    for step, description in steps.items():
        print(f"  {step}: {description}")`
        }
      ]
    },
    {
      id: 'data-types',
      title: {
        ug: 'دېتالار تۈرى',
        en: 'Data Types'
      },
      icon: Database,
      color: 'blue',
      description: {
        ug: 'مىقدارلىق ۋە سۈپەتلىك دېتالارنىڭ ئاساسىي تۈرلىرى',
        en: 'Basic types of quantitative and qualitative data'
      },
      subtopics: [
        {
          id: 'quantitative-qualitative',
          title: { ug: 'مىقدار ۋە سۈپەت', en: 'Quantitative vs Qualitative' },
          learningObjective: {
            ug: 'مىقدارلىق ۋە سۈپەتلىك دېتالارنى پەرقلىي ئۇلارنى توغرا ئىشلىتىش',
            en: 'Distinguish between quantitative and qualitative data and use them correctly'
          },
          terms: [
            { ug: 'مىقدارلىق دېتا', en: 'Quantitative Data' },
            { ug: 'سۈپەتلىك دېتا', en: 'Qualitative (Categorical) Data' },
            { ug: 'ئۈزۈك دېتا', en: 'Discrete Data' },
            { ug: 'داۋاملىق دېتا', en: 'Continuous Data' },
            { ug: 'نامىي دېتا', en: 'Nominal Data' },
            { ug: 'تەرتىپلىك دېتا', en: 'Ordinal Data' }
          ],
          example: {
            ug: 'يىللىق دىيار ۋاقتى — مىقدارلىق؛ ئەڭ ياخشى رەڭ — سۈپەتلىك.',
            en: 'Annual tea consumption time — quantitative; favorite color — qualitative.'
          },
          code: `# دېتا تۈرلىرىنى تەھلىل قىلىش
import pandas as pd
import numpy as np

class DataTypeAnalyzer:
    def __init__(self):
        self.data_types = {
            'quantitative': {
                'description': 'سان ئارقىلىق ئىپادىلىنىدىغان دېتا',
                'examples': ['يېشى', 'بوي', 'ئېغىرلىق', 'تېمپېراتۇرا'],
                'subtypes': ['ئۈزۈك', 'داۋاملىق']
            },
            'qualitative': {
                'description': 'سۈپەت ياكى تۈر ئارقىلىق ئىپادىلىنىدىغان دېتا',
                'examples': ['جىنسىيەت', 'قان گۇرۇپپىسى', 'رەڭ', 'شەھەر'],
                'subtypes': ['نامىي', 'تەرتىپلىك']
            }
        }
    
    def analyze_dataset(self, data):
        """دېتا سېتىنى تەھلىل قىلىش"""
        print("=== دېتا تۈرى تەھلىلى ===")
        
        for col in data.columns:
            col_data = data[col]
            dtype = col_data.dtype
            unique_count = col_data.nunique()
            sample_value = col_data.iloc[0] if len(col_data) > 0 else None
            
            # دېتا تۈرىنى بەلگىلەش
            if dtype in ['int64', 'float64']:
                if col in ['يېشى', 'ئىمتاھان نەتىجىسى']:
                    data_type = 'مىقدارلىق'
                    if unique_count < 20:
                        subtype = 'ئۈزۈك'
                    else:
                        subtype = 'داۋاملىق'
                else:
                    data_type = 'مىقدارلىق'
                    subtype = 'ئۈزۈك'
            else:
                if col in ['مەكتەپ دەرىجىسى', 'ئىمتاھان دەرىجىسى']:
                    data_type = 'سۈپەتلىك'
                    subtype = 'تەرتىپلىك'
                else:
                    data_type = 'سۈپەتلىك'
                    subtype = 'نامىي'
            
            print(f"\\n{col}:")
            print(f"  تۈرى: {data_type}")
            print(f"  تارماق تۈرى: {subtype}")
            print(f"  خىل سانى: {unique_count}")
            print(f"  مىسال قىممەت: {sample_value}")
            print(f"  Python تۈرى: {dtype}")
        
        return self.data_types

# مىسال دېتا
sample_data = pd.DataFrame({
    'ئىسىم': ['ئەخمەت', 'زەينەپ', 'مەھمۇت'],
    'يېشى': [25, 30, 35],
    'بويى (م)': [1.75, 1.62, 1.80],
    'جىنسىيەت': ['ئەر', 'خۇن', 'ئەر'],
    'مەكتەپ دەرىجىسى': ['باشلانغۇچ', 'ئوتتۇرا', 'ئالى'],
    'ئىمتاھان نەتىجىسى': [85, 92, 78],
    'قان گۇرۇپپىسى': ['A', 'B', 'O']
})

analyzer = DataTypeAnalyzer()
analyzer.analyze_dataset(sample_data)

# دېتا تۈرلىرىگە ماس كېلىدىغان ئىستاتىستىكىلىق ئۇسۇللار
print("\\n=== دېتا تۈرىگە قاراپ مۇۋاپىق ئىستاتىستىكىلىق ئۇسۇللار ===")
appropriate_methods = {
    'مىقدارلىق ئۈزۈك': ['ئوتتۇرىچە', 'ئوتتۇرا سان', 'مودا', 'دەۋالىق'],
    'مىقدارلىق داۋاملىق': ['ئوتتۇرىچە', 'ئوتتۇرا سان', 'مودا', 'ۋارىيانس', 'ستاندارت ئېغىش'],
    'سۈپەتلىك نامىي': ['تەكرارلىنىش سانى', 'نىسبىي تەكرارلىنىش', 'مودا'],
    'سۈپەتلىك تەرتىپلىك': ['تەكرارلىنىش سانى', 'نىسبىي تەكرارلىنىش', 'مودا', 'ئوتتۇرا سان']
}

for data_type, methods in appropriate_methods.items():
    print(f"\\n{data_type}:")
    for method in methods:
        print(f"  • {method}")

# دېتا تۈرلىرىنىڭ كۈنلۈك تۇرمۇشتا قوللىنىشى
print("\\n=== دېتا تۈرلىرىنىڭ كۈنلۈك تۇرمۇشتا قوللىنىشى ===")
daily_use = [
    {
        'تۇرمۇش سېنىرى': 'سۇپەرماركېت',
        'مىقدارلىق دېتا': ['پۇل مىقدارى', 'ئېغىرلىق', 'سان'],
        'سۈپەتلىك دېتا': ['مەھسۇلات تۈرى', 'ماركا', 'رەڭ']
    },
    {
        'تۇرمۇش سېنىرى': 'مەكتەپ',
        'مىقدارلىق دېتا': ['يېشى', 'ئىمتاھان نەتىجىسى', 'ئوقۇش ۋاقتى'],
        'سۈپەتلىك دېتا': ['بۆلۈم', 'دەرىجە', 'جىنسىيەت']
    },
    {
        'تۇرمۇش سېنىرى': 'ھۆكۈمەت خىزمىتى',
        'مىقدارلىق دېتا': ['نۇپۇس سانى', 'كىرىم دەرىجىسى', 'ئىشسىزلىق نىسبىتى'],
        'سۈپەتلىك دېتا': ['مىللەت', 'تۇراق جاي', 'مەسىلە تۈرى']
    }
]

for use_case in daily_use:
    print(f"\\n{use_case['تۇرمۇش سېنىرى']}:")
    print(f"  مىقدارلىق: {', '.join(use_case['مىقدارلىق دېتا'])}")
    print(f"  سۈپەتلىك: {', '.join(use_case['سۈپەتلىك دېتا'])}")`
        }
      ]
    },
    {
      id: 'sampling',
      title: {
        ug: 'نۇمۇنە تاللاش',
        en: 'Sampling'
      },
      icon: Users,
      color: 'green',
      description: {
        ug: 'تولۇق سۈرۋېي ۋە نۇمۇنە تاللاش ئارقىلىق دېتا توپلاش',
        en: 'Data collection through census and sampling techniques'
      },
      subtopics: [
        {
          id: 'why-sampling',
          title: { ug: 'نۇمۇنە تاللاشنىڭ زۆرۈرىيىتى', en: 'Why Sampling?' },
          learningObjective: {
            ug: 'نۇمۇنە تاللاشنىڭ زۆرۈرىيىتىنى چۈشىنىپ، ئۇنىڭ ئەۋزەللىكلىرىنى باھالىش',
            en: 'Understand the necessity of sampling and evaluate its advantages'
          },
          terms: [
            { ug: 'ئاندىزە', en: 'Population' },
            { ug: 'نۇمۇنە', en: 'Sample' },
            { ug: 'تەقدىملىك تاللاش', en: 'Random Sampling' },
            { ug: 'پىكىر سۈرۋېيى', en: 'Opinion Poll' },
            { ug: 'نۇمۇنە چوڭلۇقى', en: 'Sample Size' },
            { ug: 'تەقدىملەش خاتالىقى', en: 'Sampling Error' }
          ],
          example: {
            ug: 'جاپونىيىدىكى بارلىق ئوقۇغۇچىلارنى سۈرۋېي قىلىش قىيىن، شۇڭا نۇمۇنە تاللاش كېرەك.',
            en: 'Surveying all students in Japan is difficult, so sampling is necessary.'
          },
          code: `# نۇمۇنە تاللاش ئەمەلىيەتتىكى قوللىنىلىشى
import numpy as np
import pandas as pd
import random

class SamplingDemonstration:
    def __init__(self):
        self.population_size = 10000
        self.generate_population()
    
    def generate_population(self):
        """ئاندىزە دېتىسىنى ھاسىل قىلىش"""
        np.random.seed(42)
        self.population = pd.DataFrame({
            'id': range(1, self.population_size + 1),
            'age': np.random.normal(40, 15, self.population_size).clip(15, 80).astype(int),
            'income': np.random.lognormal(10, 0.5, self.population_size).astype(int),
            'city': np.random.choice(['توقيو', 'ئوساكا', 'ناگۆيا', 'ساپپورو'], self.population_size),
            'education': np.random.choice(['باشلانغۇچ', 'ئوتتۇرا', 'ئالى', 'ماگىستىر'], self.population_size)
        })
    
    def show_population_stats(self):
        """ئاندىزە ئىستاتىستىكىلىرىنى كۆرسىتىش"""
        print("=== ئاندىزە ئىستاتىستىكىلىرى ===")
        print(f"ئاندىزە چوڭلۇقى: {self.population_size:,} ئادەم")
        print(f"ئوتتۇرىچە يېشى: {self.population['age'].mean():.1f} يىل")
        print(f"ئوتتۇرىچە كىرىمى: ¥{self.population['income'].mean():,.0f}")
        
        for col in ['city', 'education']:
            value_counts = self.population[col].value_counts()
            print(f"\\n{col} تارقىلىشى:")
            for value, count in value_counts.items():
                percentage = count / self.population_size * 100
                print(f"  {value}: {count:,} ({percentage:.1f}%)")
    
    def compare_sampling_methods(self, sample_sizes=[50, 100, 200, 500]):
        """تۈرلۈك نۇمۇنە چوڭلۇقلىرىنى سېلىشتۇرۇش"""
        print("\\n=== نۇمۇنە چوڭلۇقىغا قاراپ توغرا چۈشىش ===")
        
        results = []
        for size in sample_sizes:
            # ئەڭ ساددە تاللاش
            sample = self.population.sample(n=min(size, len(self.population)), random_state=42)
            
            age_error = abs(sample['age'].mean() - self.population['age'].mean())
            income_error_pct = abs(sample['income'].mean() - self.population['income'].mean()) / self.population['income'].mean() * 100
            
            results.append({
                'نۇمۇنە چوڭلۇقى': size,
                'يېشى خاتالىقى': age_error,
                'كىرىم خاتالىقى (%)': income_error_pct,
                'نۇمۇنە مۇۋەپپەقىيىتى (%)': max(0, 100 - income_error_pct)
            })
        
        results_df = pd.DataFrame(results)
        print(results_df.to_string(index=False))
        
        return results_df
    
    def calculate_optimal_sample_size(self, confidence_level=0.95, margin_of_error=0.05):
        """ئەڭ ياخشى نۇمۇنە چوڭلۇقىنى ھېسابلاش"""
        print("\\n=== ئەڭ ياخشى نۇمۇنە چوڭلۇقى ھېسابلاش ===")
        
        # ئاندىزە چوڭلۇقىغا قاراپ نۇمۇنە چوڭلۇقى
        if confidence_level == 0.95:
            z_score = 1.96
        elif confidence_level == 0.99:
            z_score = 2.576
        else:
            z_score = 1.645  # 90% ئىشەنچ دەرىجىسى
        
        # ئەڭ مۇھىم ئەھۋال (p=0.5)
        p = 0.5
        
        # ئاندىزە چوڭ بولغاندا
        n0 = (z_score**2 * p * (1-p)) / (margin_of_error**2)
        
        # ئاندىزە چەكلىك بولغاندا تۈزىتىش
        n = n0 / (1 + (n0 - 1) / self.population_size)
        
        sample_size = int(np.ceil(n))
        
        print(f"ئىشەنچ دەرىجىسى: {confidence_level*100}%")
        print(f"رۇخسەت قىلىنغان خاتالىق: {margin_of_error*100}%")
        print(f"ئاندىزە چوڭلۇقى: {self.population_size:,}")
        print(f"تەۋسىيە قىلىنىدىغان نۇمۇنە چوڭلۇقى: {sample_size:,}")
        print(f"نۇمۇنىنىڭ ئاندىزە نىسبىتى: {(sample_size/self.population_size*100):.2f}%")
        
        return sample_size

# مىسال ئىجرا
demo = SamplingDemonstration()
demo.show_population_stats()
demo.compare_sampling_methods()
demo.calculate_optimal_sample_size()

# نۇمۇنە تاللاشنىڭ كۈنلۈك تۇرمۇشتا قوللىنىشى
print("\\n=== كۈنلۈك تۇرمۇشتا نۇمۇنە تاللاشنىڭ قوللىنىشى ===")
daily_sampling_examples = [
    {
        'تۇرمۇش سېنىرى': 'سۇپەرماركېت',
        'ئاندىزە': 'بارلىق مۇشتەرىلەر',
        'نۇمۇنە': 'پۇقرا سوراشتىكى 100 مۇشتەرى',
        'مەقسەت': 'مەھسۇلات رەسمىتى ۋە خىزمىتىنى باھالىش'
    },
    {
        'تۇرمۇش سېنىرى': 'مەكتەپ',
        'ئاندىزە': 'بارلىق ئوقۇغۇچىلار',
        'نۇمۇنە': 'ھەر سىنىپتىن 5 ئوقۇغۇچى',
        'مەقسەت': 'دەرس مەزمۇنى ۋە ئوقۇتقۇچىنى باھالىش'
    },
    {
        'تۇرمۇش سېنىرى': 'ساغلاملىق',
        'ئاندىزە': 'بارلىق نوپۇس',
        'نۇمۇنە': 'ھەر رايوندىن 50 ئادەم',
        'مەقسەت': 'ساغلاملىق ئەھۋالى ۋە داۋالاش زۆرۈرىيىتىنى تەكشۈرۈش'
    }
]

for example in daily_sampling_examples:
    print(f"\\n{example['تۇرمۇش سېنىرى']}:")
    print(f"  ئاندىزە: {example['ئاندىزە']}")
    print(f"  نۇمۇنە: {example['نۇمۇنە']}")
    print(f"  مەقسەت: {example['مەقسەت']}")

# نۇمۇنە تاللاشنىڭ ئەۋزەللىكلىرى ۋە چەكلىمىلىرى
print("\\n=== نۇمۇنە تاللاشنىڭ ئەۋزەللىكلىرى ۋە چەكلىمىلىرى ===")
advantages = [
    "ۋاقىت ۋە پۇل تەڭشىگۈچى",
    "ھېسابلاش يۈكى ئەڭگىرەك",
    "تېز نەتىجە ئېلىش مۇمكىن",
    "ئادەتتە دېتا توپلاش ئاسان",
    "ئىلمىي تەتقىقاتلاردا كەڭ قوللىنىلىدۇ"
]

limitations = [
    "خاتالىق بار (تەقدىملەش خاتالىقى)",
    "نۇمۇنە چوڭلۇقىنى توغرا تاللاش كېرەك",
    "تەقدىملەش ئۇسۇلىنى توغرا تاللاش كېرەك",
    "تەقدىملەش قورالى توغرا بولۇشى كېرەك",
    "جاۋاب بەرمەسلىك مەسىلىسى بولۇشى مۇمكىن"
]

print("\\nئەۋزەللىكلىرى:")
for i, advantage in enumerate(advantages, 1):
    print(f"  {i}. {advantage}")

print("\\nچەكلىمىلىرى:")
for i, limitation in enumerate(limitations, 1):
    print(f"  {i}. {limitation}")`
        }
      ]
    }
  ];

  const getActiveTopic = () => {
    return mainTopics.find(t => t.id === activeTopic) || null;
  };

  const getActiveSubTopic = () => {
    const topic = getActiveTopic();
    if (!topic || !activeSubTopic) return null;
    return topic.subtopics.find(s => s.id === activeSubTopic) || null;
  };

  const filteredTopics = mainTopics.filter(topic => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      t(topic.title).toLowerCase().includes(searchLower) ||
      t(topic.description).toLowerCase().includes(searchLower) ||
      topic.subtopics.some(sub => 
        t(sub.title).toLowerCase().includes(searchLower) ||
        t(sub.learningObjective).toLowerCase().includes(searchLower)
      )
    );
  });

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <School className="w-8 h-8 text-purple-600" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {language === 'ug' ? 'ئىستاتىستىكىلىق سىناق 4-دەرىجىلىك' : 'Statistics Level 4'}
                </h1>
              </div>
              <p className="text-gray-600">
                {language === 'ug' 
                  ? 'باشلانغۇچ دەرىجىلىك ئىستاتىستىكا - كۈنلۈك تۇرمۇش ۋە مەكتەپ ئىشلىتىشى ئۈچۈن'
                  : 'Beginner level statistics - for daily life and school use'}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder={language === 'ug' ? 'ئىزدەش...' : 'Search...'}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLanguage('ug')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    language === 'ug'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  ئۇيغۇرچە
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    language === 'en'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-white rounded-xl shadow-sm border border-purple-100">
              <div className="flex items-center text-purple-600 mb-2">
                <Lightbulb className="w-5 h-5 mr-2" />
                <span className="font-semibold">{language === 'ug' ? 'دىققەت' : 'Note'}</span>
              </div>
              <p className="text-gray-700 text-sm">
                {language === 'ug' 
                  ? 'بۇ دەرسلىك 2020-يىلدىن باشلاپ ئىشلىتىلىۋاتقان «ئىستاتىستىكىلىق سىناق 4-دەرىجىلىك» نىڭ رەسمىي تىزىمى بويىچە تۈزۈلدى.'
                  : 'This course is organized according to the official syllabus of "Statistics Level 4" used since 2020.'}
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-xl shadow-sm border border-blue-100">
              <div className="flex items-center text-blue-600 mb-2">
                <Target className="w-5 h-5 mr-2" />
                <span className="font-semibold">{language === 'ug' ? 'مەقسەت' : 'Objective'}</span>
              </div>
              <p className="text-gray-700 text-sm">
                {language === 'ug' 
                  ? 'باشلانغۇچ ئوقۇغۇچىلار، مەكتەپ ئوقۇتقۇچىلىرى ۋە كۈنىكىم ئىشلەتكۈچىلەر ئۈچۈن.'
                  : 'For beginner students, school teachers, and daily users.'}
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-xl shadow-sm border border-green-100">
              <div className="flex items-center text-green-600 mb-2">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">{language === 'ug' ? 'ئالاھىدىلىك' : 'Features'}</span>
              </div>
              <p className="text-gray-700 text-sm">
                {language === 'ug' 
                  ? 'ئىككى تىللىق، سۈزۈك چۈشەندۈرۈش، كود ئۈلگىلىرى، كۈنلۈك تۇرمۇش مىساللىرى.'
                  : 'Bilingual, clear explanations, code examples, daily life examples.'}
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Topics */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <BookOpen className="w-6 h-6 mr-2 text-purple-600" />
                  {language === 'ug' ? 'دەرس مەزمۇنلىرى' : 'Course Content'}
                </h2>
                <span className="text-sm text-gray-500">
                  {filteredTopics.length} {language === 'ug' ? 'تېما' : 'topics'}
                </span>
              </div>
              
              <div className="space-y-3">
                {filteredTopics.map((topic) => {
                  const Icon = topic.icon;
                  const isActive = activeTopic === topic.id;
                  const isFavorite = favorites.has(topic.id);
                  
                  return (
                    <div key={topic.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="flex items-center">
                        <button
                          onClick={() => {
                            setActiveTopic(isActive ? null : topic.id);
                            if (!isActive) setActiveSubTopic(null);
                          }}
                          className={`flex-1 p-4 text-left transition-colors ${
                            isActive 
                              ? `bg-${topic.color}-50 border-l-4 border-${topic.color}-500`
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className={`p-2 rounded-lg bg-${topic.color}-100 mr-3`}>
                                <Icon className={`w-5 h-5 text-${topic.color}-600`} />
                              </div>
                              <span className="font-semibold text-gray-900">
                                {t(topic.title)}
                              </span>
                            </div>
                            {isActive ? (
                              <ChevronDown className="w-5 h-5 text-gray-500" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-gray-500" />
                            )}
                          </div>
                          <p className="mt-2 text-sm text-gray-600">
                            {t(topic.description)}
                          </p>
                        </button>
                        
                        <button
                          onClick={() => toggleFavorite(topic.id)}
                          className="p-2 mr-2 text-gray-400 hover:text-yellow-500 transition-colors"
                        >
                          {isFavorite ? (
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ) : (
                            <Star className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      
                      {isActive && (
                        <div className="border-t border-gray-200 p-4 bg-white">
                          <div className="space-y-3">
                            {topic.subtopics.map((subtopic) => {
                              const isSubActive = activeSubTopic === subtopic.id;
                              
                              return (
                                <div key={subtopic.id} className="border border-gray-200 rounded-lg overflow-hidden">
                                  <button
                                    onClick={() => setActiveSubTopic(isSubActive ? null : subtopic.id)}
                                    className={`w-full p-3 text-left transition-colors ${
                                      isSubActive 
                                        ? `bg-${topic.color}-50`
                                        : 'hover:bg-gray-50'
                                    }`}
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="font-medium text-gray-900">
                                        {t(subtopic.title)}
                                      </span>
                                      {isSubActive ? (
                                        <ChevronDown className="w-4 h-4 text-gray-500" />
                                      ) : (
                                        <ChevronRight className="w-4 h-4 text-gray-500" />
                                      )}
                                    </div>
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
                {language === 'ug' ? 'تېز ئۇچۇرلار' : 'Quick Stats'}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{mainTopics.length}</div>
                  <div className="text-sm text-gray-600">{language === 'ug' ? 'ئاساسىي تېما' : 'Main Topics'}</div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {mainTopics.reduce((total, topic) => total + topic.subtopics.length, 0)}
                  </div>
                  <div className="text-sm text-gray-600">{language === 'ug' ? 'تارماق تېما' : 'Subtopics'}</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">60+</div>
                  <div className="text-sm text-gray-600">{language === 'ug' ? 'تېرمىنلار' : 'Terms'}</div>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">15+</div>
                  <div className="text-sm text-gray-600">{language === 'ug' ? 'كود ئۈلگىلىرى' : 'Code Examples'}</div>
                </div>
              </div>
              
              {favorites.size > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center text-yellow-600 mb-2">
                    <Star className="w-4 h-4 mr-2" />
                    <span className="font-medium">{language === 'ug' ? 'ساقلىغان تېمىلار' : 'Favorites'}</span>
                    <span className="ml-2 text-sm text-gray-500">({favorites.size})</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(favorites).map(favId => {
                      const topic = mainTopics.find(t => t.id === favId);
                      return topic ? (
                        <button
                          key={favId}
                          onClick={() => setActiveTopic(favId)}
                          className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm hover:bg-yellow-100 transition-colors"
                        >
                          {t(topic.title).split('/')[0].trim()}
                        </button>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Content - Topic Details */}
          <div className="lg:col-span-2">
            {!activeTopic ? (
              <WelcomeContent language={language} />
            ) : !activeSubTopic ? (
              <TopicContent 
                topic={getActiveTopic()}
                t={t}
                setActiveSubTopic={setActiveSubTopic}
                language={language}
                toggleFavorite={toggleFavorite}
                isFavorite={favorites.has(activeTopic)}
              />
            ) : (
              <SubTopicContent 
                topic={getActiveTopic()}
                subtopic={getActiveSubTopic()}
                t={t}
                bilingualTerm={bilingualTerm}
                language={language}
              />
            )}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p className="italic mb-2">
            {language === 'ug' 
              ? 'بۇ مەزمۇن «ئىستاتىستىكىلىق سىناق 4-دەرىجىلىك» (2020-يىلدىن باشلاپ ئىشلىتىلدى) نىڭ رەسمىي دەرىجىلىك دەرىجە تىزىمى بويىچە تۈزۈلگەن.'
              : 'This content is organized according to the official syllabus of "Statistics Level 4" used since 2020.'}
          </p>
          <p>
            {language === 'ug' 
              ? 'باشلانغۇچ دەرىجىلىك ئوقۇغۇچىلار، مەكتەپ ئوقۇتقۇچىلىرى ۋە كۈنىكىم ئىشلەتكۈچىلەر ئۈچۈن مۇۋاپىق.'
              : 'Suitable for beginner level students, school teachers, and daily users.'}
          </p>
        </footer>
      </div>
    </div>
  );
};

// Welcome Content Component
const WelcomeContent = ({ language }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 text-center">
      <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
        <School className="w-12 h-12 text-purple-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {language === 'ug' 
          ? 'ئىستاتىستىكىلىق سىناق 4-دەرىجىلىككە خۇش كەپسىز!'
          : 'Welcome to Statistics Level 4!'}
      </h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        {language === 'ug'
          ? 'سول تەرەپتىكى تېمىلاردىن بىرىنى تاللاپ، ئىستاتىستىكىنىڭ باشلانغۇچ چۈشەنچىلىرىنى ئۆگىنىڭ.'
          : 'Select a topic from the left sidebar to start learning beginner concepts of statistics.'}
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <div className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
          {language === 'ug' ? 'مەسىلى ھەل قىلىش' : 'Problem Solving'}
        </div>
        <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          {language === 'ug' ? 'دېتا تۈرلىرى' : 'Data Types'}
        </div>
        <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          {language === 'ug' ? 'نۇمۇنە تاللاش' : 'Sampling'}
        </div>
        <div className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
          {language === 'ug' ? 'گىرافىكىلار' : 'Graphs'}
        </div>
        <div className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
          {language === 'ug' ? 'ئېھتىمالىيەت' : 'Probability'}
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 text-left max-w-lg mx-auto">
        <h4 className="font-bold text-gray-900 mb-2 flex items-center">
          <Lightbulb className="w-5 h-5 mr-2 text-purple-600" />
          {language === 'ug' ? 'ئەسكەرتىش' : 'Note'}
        </h4>
        <p className="text-gray-700 text-sm">
          {language === 'ug'
            ? 'بۇ دەرسلىكتە ھەر بىر تېما ئۈچۈن: ئىككى تىللىق تېرمىنلار، مىساللار، كود ئۈلگىلىرى ۋە كۈنلۈك تۇرمۇشتىكى قوللىنىش مىساللىرى بېرىلگەن.'
            : 'For each topic in this course: bilingual terminology, examples, code examples, and daily life usage examples are provided.'}
        </p>
      </div>
    </div>
  );
};

// Topic Content Component
const TopicContent = ({ topic, t, setActiveSubTopic, language, toggleFavorite, isFavorite }) => {
  if (!topic) return <WelcomeContent language={language} />;
  
  const Icon = topic.icon;
  
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className={`p-6 bg-gradient-to-r from-${topic.color}-50 to-white border-b border-${topic.color}-100`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className={`p-3 rounded-xl bg-${topic.color}-100 mr-4`}>
              <Icon className={`w-8 h-8 text-${topic.color}-600`} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{t(topic.title)}</h2>
              <p className="text-gray-600">{t(topic.description)}</p>
            </div>
          </div>
          
          <button
            onClick={() => toggleFavorite(topic.id)}
            className={`p-2 rounded-full ${isFavorite ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
          >
            {isFavorite ? (
              <Star className="w-6 h-6 fill-yellow-400" />
            ) : (
              <Star className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <GraduationCap className="w-5 h-5 mr-2 text-purple-600" />
          {language === 'ug' ? 'تارماق تېمىلار' : 'Subtopics'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {topic.subtopics.map((subtopic, index) => (
            <button
              key={subtopic.id}
              onClick={() => setActiveSubTopic(subtopic.id)}
              className={`p-4 text-left border rounded-lg transition-all hover:shadow-md ${
                index % 2 === 0 
                  ? `border-${topic.color}-200 hover:border-${topic.color}-300`
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-900">
                  {t(subtopic.title)}
                </span>
                <ChevronRight className={`w-5 h-5 text-${topic.color}-500`} />
              </div>
              <p className="text-sm text-gray-600 mb-3">
                {t(subtopic.learningObjective)}
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <Target className="w-3 h-3 mr-1" />
                <span>{language === 'ug' ? 'ئۆگىنىش مەقسىتى' : 'Learning Objective'}</span>
              </div>
            </button>
          ))}
        </div>
        
        <div className={`p-4 bg-${topic.color}-50 rounded-lg mb-6`}>
          <div className="flex items-center text-purple-700 mb-2">
            <Lightbulb className="w-5 h-5 mr-2" />
            <span className="font-semibold">
              {language === 'ug' ? 'مۇھىم ئەسكەرتىش' : 'Key Takeaway'}
            </span>
          </div>
          <p className="text-purple-800">
            {language === 'ug'
              ? 'ھەر بىر تېمىنى ئۆز ئىچىگە ئالغان تارماق تېمىلارنى ئۆگىنىش ئارقىلىق، ئىستاتىستىكىلىق چۈشەنچىلەرنى كۈنلۈك تۇرمۇشتا قانداق قوللىنىشنى چۈشىنىڭ.'
              : 'Understand how to apply statistical concepts in daily life by learning subtopics covering each theme.'}
          </p>
        </div>
      </div>
    </div>
  );
};

// SubTopic Content Component
const SubTopicContent = ({ topic, subtopic, t, bilingualTerm, language }) => {
  if (!topic || !subtopic) return <WelcomeContent language={language} />;
  
  const Icon = topic.icon;
  
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className={`p-6 bg-gradient-to-r from-${topic.color}-50 to-white border-b border-${topic.color}-100`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className={`p-3 rounded-xl bg-${topic.color}-100 mr-4`}>
              <Icon className={`w-8 h-8 text-${topic.color}-600`} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{t(subtopic.title)}</h2>
              <p className="text-gray-600">{t(topic.title)}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        {/* Learning Objective */}
        <div className="mb-8 p-4 bg-green-50 rounded-lg border border-green-200">
          <h3 className="font-bold text-gray-900 mb-2 flex items-center">
            <Target className="w-5 h-5 mr-2 text-green-600" />
            {language === 'ug' ? 'ئۆگىنىش مەقسىتى' : 'Learning Objective'}
          </h3>
          <p className="text-gray-700">{t(subtopic.learningObjective)}</p>
        </div>
        
        {/* Key Terms */}
        {subtopic.terms && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Hash className="w-5 h-5 mr-2 text-purple-600" />
              {language === 'ug' ? 'ئاساسىي تېرمىنلار' : 'Key Terms'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {subtopic.terms.map((term, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  {bilingualTerm(term.ug, term.en)}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Example */}
        {subtopic.example && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Coffee className="w-5 h-5 mr-2 text-orange-600" />
              {language === 'ug' ? 'مىسال' : 'Example'}
            </h3>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <p className="text-gray-700">{t(subtopic.example)}</p>
            </div>
          </div>
        )}
        
        {/* Code Example */}
        {subtopic.code && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center">
                <Code className="w-5 h-5 mr-2 text-purple-600" />
                {language === 'ug' ? 'كود ئۈلگىسى' : 'Code Example'}
              </h3>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                  Python
                </span>
                <button
                  onClick={() => navigator.clipboard.writeText(subtopic.code)}
                  className="px-2 py-1 text-xs text-gray-600 hover:text-gray-900"
                >
                  {language === 'ug' ? 'كۆچۈرۈش' : 'Copy'}
                </button>
              </div>
            </div>
            <div className="relative">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{subtopic.code}</code>
              </pre>
            </div>
            <div className="mt-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center text-purple-700 mb-1">
                <Brain className="w-4 h-4 mr-2" />
                <span className="font-medium">
                  {language === 'ug' ? 'كود ئىچىدىكى مۇھىم ئۇچۇرلار' : 'Important Information in Code'}
                </span>
              </div>
              <p className="text-purple-800 text-sm">
                {language === 'ug'
                  ? 'يۇقىرىدىكى كود ئىستاتىستىكىلىق چۈشەنچىلەرنى ئەمەلىيلەشتۈرۈش ئۈچۈن Python دا يېزىلغان. كودنى كۆچۈرۈپ ئۆزىڭىزنىڭ كۆزىتىشىڭىزدە ئىشلىتەلەيسىز.'
                  : 'The code above is written in Python for implementing statistical concepts. You can copy and use it in your own observations.'}
              </p>
            </div>
          </div>
        )}
        
        {/* Navigation */}
        <div className="flex justify-between pt-6 border-t border-gray-200">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            {language === 'ug' ? 'يۇقىرىغا قايتىش' : 'Back to Top'}
          </button>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">
              {language === 'ug' ? 'تەمىنلەنگەن ۋاقىت: 15-25 مىنۇت' : 'Estimated time: 15-25 minutes'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsLevel4UG;