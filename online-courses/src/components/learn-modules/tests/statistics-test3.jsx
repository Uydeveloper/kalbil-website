// statistics-level3-ug.jsx
import React, { useState } from 'react';
import {
  Database,
  BarChart3,
  Users,
  Target,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Code,
  Coffee,
  Brain,
  Lightbulb,
  GraduationCap,
  Hash,
  Clock
} from 'lucide-react';

const StatisticsLevel3UG = () => {
  const [activeTopic, setActiveTopic] = useState(null);
  const [activeSubTopic, setActiveSubTopic] = useState(null);
  const [language, setLanguage] = useState('ug'); // 'ug', 'en'

  // تىل تاللاش
  const t = (obj) => {
    if (!obj) return '';
    return language === 'ug' ? obj.ug : obj.en;
  };

  // ئىككى تىللىق تېرمىن چىقىرىش
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

  // ئاساسىي تېمىلار
  const mainTopics = [
    {
      id: 'data-types',
      title: {
        ug: 'دېتا تۈرلىرى ۋە ئۆلچەم سىستېمىلىرى',
        en: 'Data Types and Measurement Systems'
      },
      icon: Database,
      color: 'blue',
      description: {
        ug: 'مىقدارلىق ۋە سۈپەتلىك دېتالارنىڭ تۈرلىرى، ئۆلچەم سىستېمىلىرى ۋە ئۇلارنىڭ قوللىنىشى',
        en: 'Types of quantitative and qualitative data, measurement systems, and their applications'
      },
      subtopics: [
        {
          id: 'data-classification',
          title: { ug: 'دېتا تۈرلىرىنى تەسۋىرلەش', en: 'Describing Data Types' },
          learningObjective: {
            ug: 'مىقدارلىق ۋە سۈپەتلىك دېتالارنىڭ ئاساسىي تۈرلىرىنى پەرقلىشىش ۋە ئۇلارنى توغرا ئىشلىتىش',
            en: 'Distinguish between basic types of quantitative and qualitative data and use them correctly'
          },
          terms: [
            { ug: 'مىقدارلىق ئۆزگەرگۈچ', en: 'Quantitative Variable' },
            { ug: 'سۈپەتلىك ئۆزگەرگۈچ', en: 'Qualitative (Categorical) Variable' },
            { ug: 'ئۈزۈك ئۆزگەرگۈچ', en: 'Discrete Variable' },
            { ug: 'داۋاملىق ئۆزگەرگۈچ', en: 'Continuous Variable' },
            { ug: 'نامىي ئۆلچەم', en: 'Nominal Scale' },
            { ug: 'تەرتىپلىك ئۆلچەم', en: 'Ordinal Scale' },
            { ug: 'ئارىلىق ئۆلچەم', en: 'Interval Scale' },
            { ug: 'نىسبىتى ئۆلچەم', en: 'Ratio Scale' }
          ],
          example: {
            ug: 'جىنسىيەت (ئەر، خۇن) → سۈپەتلىك نامىي؛ ئىمتاھان دەرىجىسى (A, B, C) → سۈپەتلىك تەرتىپلىك؛ تېمپېراتۇرا (℃) → مىقدارلىق ئارىلىق؛ بوي (سم) → مىقدارلىق نىسبىتى',
            en: 'Gender (male, female) → Qualitative nominal; Exam grade (A, B, C) → Qualitative ordinal; Temperature (℃) → Quantitative interval; Height (cm) → Quantitative ratio'
          },
          code: `# دېتا تۈرلىرىنى ئوتوماتىك باھالاش
import pandas as pd
import numpy as np

# مىسال دېتالار
data = {
    'نامى': ['ئەخمەت', 'زەينەپ', 'مەھمۇت'],
    'جىنسىيەت': ['ئەر', 'خۇن', 'ئەر'],           # نامىي
    'ئىمتاھان دەرىجىسى': ['B', 'A', 'C'],     # تەرتىپلىك
    'يېشى': [25, 30, 35],                     # نىسبىتى ئۈزۈك
    'بويى (م)': [1.75, 1.62, 1.80],           # نىسبىتى داۋاملىق
    'تېمپېراتۇرا (℃)': [36.5, 36.7, 36.3]    # ئارىلىق
}

df = pd.DataFrame(data)

print("=== دېتا تۈرلىرى تەھلىلى ===")
print(f"جەدۋەل شەكلى: {df.shape[0]} قۇر، {df.shape[1]} ئىستون")

for column in df.columns:
    dtype = df[column].dtype
    unique_count = len(df[column].unique())
    sample_value = df[column].iloc[0]
    
    # دېتا تۈرىنى باھالاش
    if dtype == 'object':
        if column in ['ئىمتاھان دەرىجىسى']:
            data_type = 'سۈپەتلىك تەرتىپلىك'
        else:
            data_type = 'سۈپەتلىك نامىي'
    elif dtype in ['int64', 'int32']:
        if unique_count < 10:
            data_type = 'مىقدارلىق ئۈزۈك'
        else:
            data_type = 'مىقدارلىق نىسبىتى'
    elif dtype in ['float64', 'float32']:
        if column == 'تېمپېراتۇرا (℃)':
            data_type = 'مىقدارلىق ئارىلىق'
        else:
            data_type = 'مىقدارلىق نىسبىتى داۋاملىق'
    
    print(f"\n{column}:")
    print(f"  تۈرى: {data_type}")
    print(f"  خىل سانى: {unique_count}")
    print(f"  مىسال قىممەت: {sample_value}")
    print(f"  Numpy تۈرى: {dtype}")

# ئۆلچەم سىستېمىلىرىنىڭ خۇسۇسىيەتلىرى
print("\n=== ئۆلچەم سىستېمىلىرى خۇسۇسىيەتلىرى ===")
scales = {
    'نامىي': 'پەقەت تۈرلەرنى پەرقلىشىش',
    'تەرتىپلىك': 'تۈرلەرنى تەرتىپلەش مۇمكىن',
    'ئارىلىق': 'ئوتتۇرىچىسى ۋە ئارىلىقى مەنىلىك',
    'نىسبىتى': 'نۆل نۇقتىسى ۋە نىسبىتى مەنىلىك'
}

for scale, description in scales.items():
    print(f"{scale}: {description}")`
        },
        {
          id: 'measurement-levels',
          title: { ug: 'ئۆلچەم دەرىجىلىرى', en: 'Levels of Measurement' },
          learningObjective: {
            ug: 'نامىي، تەرتىپلىك، ئارىلىق ۋە نىسبىتى ئۆلچەملەرنىڭ خۇسۇسىيەتلىرىنى چۈشىنىپ، ئۇلارغا ماس كېلىدىغان ئىستاتىستىكىلىق ئۇسۇللارنى تاللاش',
            en: 'Understand properties of nominal, ordinal, interval, and ratio scales and select appropriate statistical methods'
          },
          terms: [
            { ug: 'تۈرلەش', en: 'Classification' },
            { ug: 'تەرتىپلەش', en: 'Ordering' },
            { ug: 'ئارىلىق', en: 'Interval' },
            { ug: 'مۇتلەق نۆل نۇقتىسى', en: 'Absolute Zero Point' },
            { ug: 'نىسبىتى قىممەت', en: 'Ratio Value' },
            { ug: 'ئۆلچەم خۇسۇسىيىتى', en: 'Scale Property' },
            { ug: 'ئۆلچەم چەكلىمىسى', en: 'Scale Limitation' }
          ],
          example: {
            ug: 'نامىي: قان گۇرۇپپىسى (A, B, AB, O) - پەقەت تۈرلەش مۇمكىن؛ تەرتىپلىك: مەمنۇنىيەت دەرىجىسى (ئاجىز، ئوتتۇرا، كۈچلۈك) - تەرتىپلەش مۇمكىن؛ ئارىلىق: تېمپېراتۇرا (℃) - ئارىلىق مەنىلىك؛ نىسبىتى: بوي (سم) - نۆل نۇقتىسى بار، نىسبىتى مەنىلىك',
            en: 'Nominal: Blood type (A, B, AB, O) - classification only; Ordinal: Satisfaction level (low, medium, high) - ordering possible; Interval: Temperature (℃) - intervals meaningful; Ratio: Height (cm) - absolute zero, ratios meaningful'
          },
          code: `# ئۆلچەم دەرىجىلىرىگە ماس كېلىدىغان ئىستاتىستىكىلىق ئۇسۇللار
import pandas as pd
import numpy as np

def recommend_statistics(scale_type, data):
    """ئۆلچەم تۈرىگە قاراپ مۇۋاپىق ئىستاتىستىكىلىق ئۇسۇللارنى تەۋسىيە قىلىش"""
    recommendations = {
        'نامىي': [
            'تەكرارلىنىش سانى',
            'نىسبىي تەكرارلىنىش',
            'مودا',
            'كىرىس جەدۋىلى',
            'خى-كۋادرات سىناقى'
        ],
        'تەرتىپلىك': [
            'تەكرارلىنىش سانى',
            'نىسبىي تەكرارلىنىش',
            'مودا',
            'ئوتتۇرا سان',
            'كۋارتىللار',
            'مان-ۋىتنىي سىناقى',
            'سپېئەرمان كوررېلاتسىيەسى'
        ],
        'ئارىلىق': [
            'ئوتتۇرىچە قىممەت',
            'ئوتتۇرا سان',
            'مودا',
            'ۋارىيانس',
            'ستاندارت ئېغىش',
            'پىرسون كوررېلاتسىيەسى',
            't-سىناق',
            'ANOVA'
        ],
        'نىسبىتى': [
            'ھەممە ئارىلىق ئۇسۇللىرى',
            'گېئومېتىرىك ئوتتۇرىچە',
            'ھارمونىك ئوتتۇرىچە',
            'ئۆزگىرىش كوئېففىتسېنتى',
            'نىسبىتى چۈشەندۈرۈش'
        ]
    }
    
    return recommendations.get(scale_type, [])

# مىسال دېتالار
print("=== ئۆلچەم دەرىجىلىرىگە ماس ئىستاتىستىكىلىق ئۇسۇللار ===")

scale_examples = {
    'نامىي': ['قان گۇرۇپپىسى', 'مىللەت', 'شەھەر'],
    'تەرتىپلىك': ['مەمنۇنىيەت دەرىجىسى', 'ئىمتاھان دەرىجىسى', 'ئېغىرچىلىق دەرىجىسى'],
    'ئارىلىق': ['تېمپېراتۇرا (℃)', 'يىل', 'ئىنتېللىگېنسىيە قىممىتى'],
    'نىسبىتى': ['بوي', 'ئېغىرلىق', 'ۋاقىت', 'پۇل']
}

for scale, examples in scale_examples.items():
    print(f"\n{scale} ئۆلچىمى:")
    print(f"  مىساللار: {', '.join(examples)}")
    print(f"  تەۋسىيە قىلىنىدىغان ئۇسۇللار:")
    stats = recommend_statistics(scale, [])
    for i, stat in enumerate(stats[:5], 1):
        print(f"    {i}. {stat}")
    if len(stats) > 5:
        print(f"    ... ۋە {len(stats)-5} تېخىمۇ كۆپ ئۇسۇل")

# ئۆلچەم خۇسۇسىيەتلىرىنى سېلىشتۇرۇش
print("\n=== ئۆلچەم سىستېمىلىرىنىڭ خۇسۇسىيەت سېلىشتۇرۇشى ===")
properties = pd.DataFrame({
    'نامىي': ['ھەئە', 'ياق', 'ياق', 'ياق'],
    'تەرتىپلىك': ['ھەئە', 'ھەئە', 'ياق', 'ياق'],
    'ئارىلىق': ['ھەئە', 'ھەئە', 'ھەئە', 'ياق'],
    'نىسبىتى': ['ھەئە', 'ھەئە', 'ھەئە', 'ھەئە']
}, index=['تۈرلەش', 'تەرتىپلەش', 'ئارىلىق', 'نىسبىتى'])

print(properties)

# خۇلاسە
print("\n=== خۇلاسە ===")
print("1. ئۆلچەم دەرىجىسى ئۇچۇر مىقدارىنى بەلگىلەيدۇ")
print("2. يۇقىرى دەرىجىلىك ئۆلچەملەر تۆۋەن دەرىجىلىكلەرنىڭ بارلىق خۇسۇسىيەتلىرىنى ئۆز ئىچىگە ئالىدۇ")
print("3. ئىستاتىستىكىلىق ئۇسۇل تاللاش ئۆلچەم دەرىجىسىگە ماس كېلىشى كېرەك")
print("4. نىسبىتى ئۆلچىمى ئەڭ يۇقىرى ئۇچۇر دەرىجىسىگە ئىگە")`
        }
      ]
    },
    {
      id: 'sampling',
      title: {
        ug: 'نۇمۇنە تاللاش ئۇسۇللىرى',
        en: 'Sampling Methods'
      },
      icon: Users,
      color: 'green',
      description: {
        ug: 'تولۇق سۈرۋېي ۋە نۇمۇنە تاللاش ئارقىلىق دېتا توپلاش ئۇسۇللىرى',
        en: 'Data collection methods through census and sampling techniques'
      },
      subtopics: [
        {
          id: 'census-sampling',
          title: { ug: 'تولۇق سۈرۋېي ۋە نۇمۇنە', en: 'Census vs Sampling' },
          learningObjective: {
            ug: 'تولۇق سۈرۋېي ۋە نۇمۇنە تاللاش ئوتتۇرىسىدىكى پەرقنى چۈشىنىش ھەمدە ئۇلارنىڭ ئەۋزەللىكلىرى ۋە چەكلىمىلىرىنى باھالىش',
            en: 'Understand differences between census and sampling, and evaluate their advantages and limitations'
          },
          terms: [
            { ug: 'تولۇق سۈرۋېي', en: 'Census' },
            { ug: 'نۇمۇنە تاللاش', en: 'Sampling' },
            { ug: 'ئاندىزە', en: 'Population' },
            { ug: 'نۇمۇنە', en: 'Sample' },
            { ug: 'تولۇق سۈرۋېينىڭ ئەۋزەللىكلىرى', en: 'Advantages of Census' },
            { ug: 'نۇمۇنە تاللاشنىڭ ئەۋزەللىكلىرى', en: 'Advantages of Sampling' },
            { ug: 'مىللەت ھەج سۈرۋېيى', en: 'National Census' },
            { ug: 'نۇمۇنە چوڭلۇقى', en: 'Sample Size' }
          ],
          example: {
            ug: 'جاپونىيە ھۆكۈمىتى ھەر 5 يىلدا مىللەت ھەج سۈرۋېيى ئۆتكۈزىدۇ (تولۇق سۈرۋېي). تەتقىقاتچىلار بولسا 2000 ئادەمدىن 200 نى تاللاپ ئىلمىي تەتقىقات ئېلىپ بارىدۇ (نۇمۇنە تاللاش).',
            en: 'Japanese government conducts national census every 5 years (census). Researchers select 200 people from 2000 for scientific study (sampling).'
          },
          code: `# تولۇق سۈرۋېي ۋە نۇمۇنە تاللاشنى سېلىشتۇرۇش
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# مىسال: 1000 ئادەملىك ئاندىزە (ئادەم سانى، يېشى، كىرىمى)
np.random.seed(42)
population_size = 1000

# ئاندىزە سانلىق مەلۇماتىنى ھاسىل قىلىش
population = pd.DataFrame({
    'id': range(1, population_size + 1),
    'age': np.random.normal(45, 15, population_size).astype(int),
    'income': np.random.lognormal(10, 0.5, population_size).astype(int)
})

print("=== تولۇق سۈرۋېي ۋە نۇمۇنە تاللاش سېلىشتۇرۇشى ===")
print(f"ئاندىزە چوڭلۇقى: {population_size} ئادەم")

# تولۇق سۈرۋېي (پۈتۈن ئاندىزە)
census_mean_age = population['age'].mean()
census_mean_income = population['income'].mean()

print(f"\nتولۇق سۈرۋېي (ھەقىقىي قىممەتلەر):")
print(f"  ئوتتۇرىچە يېشى: {census_mean_age:.1f} يېش")
print(f"  ئوتتۇرىچە كىرىمى: {census_mean_income:,.0f} يېن")

# نۇمۇنە تاللاش (ئەڭ ساددە تاللاش)
def simple_random_sample(data, n):
    """ئەڭ ساددە تاللاش"""
    return data.sample(n=n, random_state=42)

# تۈرلۈك نۇمۇنە چوڭلۇقلىرى
sample_sizes = [50, 100, 200, 500]
results = []

for size in sample_sizes:
    sample = simple_random_sample(population, size)
    sample_mean_age = sample['age'].mean()
    sample_mean_income = sample['income'].mean()
    
    age_error = abs(sample_mean_age - census_mean_age)
    income_error_pct = abs(sample_mean_income - census_mean_income) / census_mean_income * 100
    
    results.append({
        'نۇمۇنە چوڭلۇقى': size,
        'ئوتتۇرىچە يېشى': sample_mean_age,
        'يېشى خاتالىقى': age_error,
        'ئوتتۇرىچە كىرىمى': sample_mean_income,
        'كىرىم خاتالىقى (%)': income_error_pct
    })

results_df = pd.DataFrame(results)
print(f"\nنۇمۇنە تاللاش نەتىجىلىرى:")
print(results_df.to_string(index=False))

# گرافىك كۆرسىتىش
fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# يېشى توغرا چۈشىشى
axes[0].plot(results_df['نۇمۇنە چوڭلۇقى'], results_df['يېشى خاتالىقى'], 'bo-', linewidth=2)
axes[0].axhline(y=0, color='red', linestyle='--', alpha=0.5, label='ئىدىيەلىك')
axes[0].set_xlabel('نۇمۇنە چوڭلۇقى')
axes[0].set_ylabel('يېشى خاتالىقى')
axes[0].set_title('نۇمۇنە چوڭلۇقى بويىچە توغرا چۈشىش')
axes[0].grid(True, alpha=0.3)
axes[0].legend()

# كىرىم توغرا چۈشىشى
axes[1].plot(results_df['نۇمۇنە چوڭلۇقى'], results_df['كىرىم خاتالىقى (%)'], 'ro-', linewidth=2)
axes[1].axhline(y=0, color='blue', linestyle='--', alpha=0.5, label='ئىدىيەلىك')
axes[1].set_xlabel('نۇمۇنە چوڭلۇقى')
axes[1].set_ylabel('كىرىم خاتالىقى (%)')
axes[1].set_title('نۇمۇنە چوڭلۇقى بويىچە نىسبىي خاتالىق')
axes[1].grid(True, alpha=0.3)
axes[1].legend()

plt.tight_layout()
plt.show()

# تولۇق سۈرۋېي ۋە نۇمۇنە تاللاشنىڭ ئەۋزەللىكلىرى
print("\n=== تولۇق سۈرۋېي ۋە نۇمۇنە تاللاشنىڭ ئەۋزەللىكلىرى ===")
comparison = pd.DataFrame({
    'تولۇق سۈرۋېي': [
        'پۈتۈن ئاندىزەگە قارىتا توغرا نەتىجە',
        'كىچىك بۆلەكلەرگىمۇ توغرا نەتىجە بېرىدۇ',
        'ھېسابلاش يۈكى ئېغىر',
        'ۋاقىت ۋە پۇل سەرفى كۆپ',
        'ئادەتتە ھۆكۈمەت تەشكىلاتلىرى تەرىپىدىن ئېلىپ بېرىلىدۇ'
    ],
    'نۇمۇنە تاللاش': [
        'ھېسابلاش يۈكى ئەڭگىرەك',
        'ۋاقىت ۋە پۇل تەڭشىگۈچى',
        'تېز نەتىجە ئېلىش مۇمكىن',
        'ئىلمىي تەتقىقاتلاردا كەڭ قوللىنىلىدۇ',
        'نۇمۇنە چوڭلۇقى ۋە ئۇسۇلىنى ئۆزگەرتىش ئاسان'
    ]
}, index=['1', '2', '3', '4', '5'])

print(comparison)

# نۇمۇنە چوڭلۇقىنى بەلگىلەش مىسالى
print("\n=== نۇمۇنە چوڭلۇقىنى بەلگىلەش ===")
def calculate_sample_size(population_size, confidence_level=0.95, margin_of_error=0.05, p=0.5):
    """
    نۇمۇنە چوڭلۇقىنى ھېسابلاش
    population_size: ئاندىزە چوڭلۇقى
    confidence_level: ئىشەنچ دەرىجىسى
    margin_of_error: رۇخسەت قىلىنغان خاتالىق
    p: ئېھتىمالىيەت (ئەڭ مۇھىم ئەھۋال 0.5)
    """
    from scipy import stats
    
    # z-قىممىتى
    z = stats.norm.ppf((1 + confidence_level) / 2)
    
    # ئاندىزە چوڭلۇقى چوڭ بولغاندا
    n0 = (z**2 * p * (1-p)) / (margin_of_error**2)
    
    # چوڭلۇقى چەكلىك بولغاندا تۈزىتىش
    n = n0 / (1 + (n0 - 1) / population_size)
    
    return int(np.ceil(n))

# مىسال: تۈرلۈك ئەھۋاللاردا نۇمۇنە چوڭلۇقى
scenarios = [
    (1000, 0.95, 0.05),
    (10000, 0.95, 0.05),
    (1000, 0.99, 0.05),
    (1000, 0.95, 0.03),
]

print("مۇختەلىف ئەھۋاللاردا نۇمۇنە چوڭلۇقى:")
print("ئاندىزە | ئىشەنچ دەرىجىسى | رۇخسەت قىلىنغان خاتالىق | نۇمۇنە چوڭلۇقى")
print("-" * 70)

for pop_size, conf_level, margin in scenarios:
    n = calculate_sample_size(pop_size, conf_level, margin)
    print(f"{pop_size:7,d} | {conf_level:.2f} ({int(conf_level*100)}%) | {margin:.2f} ({int(margin*100)}%) | {n:14,d}")

# خۇلاسە
print("\n=== خۇلاسە ===")
print("1. تولۇق سۈرۋېي پۈتۈن ئاندىزەنى تەكشۈرىدۇ، توغرا چۈشىش يۇقىرى، ئەمما مەبلەغ سەرپى كۆپ")
print("2. نۇمۇنە تاللاش پۈتۈن ئاندىزىدىن بىر بۆلەكنى تاللايدۇ، مەبلەغ سەرپى ئاز، ئەمما خاتالىق بار")
print("3. نۇمۇنە چوڭلۇقى ئاشقاندا توغرا چۈشىش ياخشىلىنىدۇ")
print("4. ئىلمىي تەتقىقاتلاردا ئادەتتە نۇمۇنە تاللاش قوللىنىلىدۇ")`
        }
      ]
    }
  ];

  // تېمىنى تاپىش
  const getActiveTopic = () => {
    return mainTopics.find(t => t.id === activeTopic) || null;
  };

  // تارماق تېمىنى تاپىش
  const getActiveSubTopic = () => {
    const topic = getActiveTopic();
    if (!topic || !activeSubTopic) return null;
    return topic.subtopics.find(s => s.id === activeSubTopic) || null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {language === 'ug' ? 'ئىستاتىستىكا دەرىسلىك 3 (يوقىرى ئوقۇش)' : 'Statistics Level 3 (Undergraduate)'}
              </h1>
              <p className="text-gray-600">
                {language === 'ug' 
                  ? 'ئىستاتىستىكىنىڭ ئاساسىي چۈشەنچىلىرى ۋە ئۇسۇللىرىنى ئۆگىنىش'
                  : 'Learning fundamental concepts and methods of statistics'}
              </p>
            </div>
            
            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('ug')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  language === 'ug'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                ئۇيغۇرچە
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                English
              </button>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-xl shadow-sm border border-blue-100">
            <div className="flex items-center text-blue-600 mb-2">
              <Lightbulb className="w-5 h-5 mr-2" />
              <span className="font-semibold">
                {language === 'ug' ? 'دىققەت: مۇھىم ئۇچۇرلار' : 'Note: Important Information'}
              </span>
            </div>
            <p className="text-gray-700">
              {language === 'ug' 
                ? 'بۇ دەرسلىك ئىستاتىستىكىنىڭ ئاساسىي چۈشەنچىلىرىنى، دېتا تۈرلىرىنى، نۇمۇنە تاللاش ئۇسۇللىرىنى ۋە ئىستاتىستىكىلىق ئۇسۇللارنى ئۆز ئىچىگە ئالىدۇ. ھەر بىر تېمىدا ئىككى تىلدا تېرمىنلار، مىساللار ۋە كود ئۈلگىلىرى بېرىلگەن.'
                : 'This course covers fundamental concepts of statistics, data types, sampling methods, and statistical techniques. Each topic includes bilingual terminology, examples, and code examples.'}
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Topics */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
                {language === 'ug' ? 'دەرس مەزمۇنلىرى' : 'Course Content'}
              </h2>
              
              <div className="space-y-3">
                {mainTopics.map((topic) => {
                  const Icon = topic.icon;
                  const isActive = activeTopic === topic.id;
                  
                  return (
                    <div key={topic.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => {
                          setActiveTopic(isActive ? null : topic.id);
                          if (!isActive) setActiveSubTopic(null);
                        }}
                        className={`w-full p-4 text-left transition-colors ${
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
                <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                {language === 'ug' ? 'تېز ئۇچۇرلار' : 'Quick Stats'}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{mainTopics.length}</div>
                  <div className="text-sm text-gray-600">{language === 'ug' ? 'ئاساسىي تېما' : 'Main Topics'}</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{mainTopics.reduce((total, topic) => total + topic.subtopics.length, 0)}</div>
                  <div className="text-sm text-gray-600">{language === 'ug' ? 'تارماق تېما' : 'Subtopics'}</div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">{language === 'ug' ? 'تېرمىنلار' : 'Terms'}</div>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">20+</div>
                  <div className="text-sm text-gray-600">{language === 'ug' ? 'كود ئۈلگىلىرى' : 'Code Examples'}</div>
                </div>
              </div>
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
      </div>
    </div>
  );
};

// Welcome Content Component
const WelcomeContent = ({ language }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 text-center">
      <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full">
        <BookOpen className="w-12 h-12 text-blue-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {language === 'ug' 
          ? 'ئىستاتىستىكا دەرىسلىكىگە خۇش كەپسىز!'
          : 'Welcome to Statistics Course!'}
      </h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        {language === 'ug'
          ? 'سول تەرەپتىكى تېمىلاردىن بىرىنى تاللاپ، ئىستاتىستىكىنىڭ ئاساسىي چۈشەنچىلىرىنى ئۆگىنىڭ.'
          : 'Select a topic from the left sidebar to start learning fundamental concepts of statistics.'}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          {language === 'ug' ? 'دېتا تۈرلىرى' : 'Data Types'}
        </div>
        <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          {language === 'ug' ? 'نۇمۇنە تاللاش' : 'Sampling'}
        </div>
        <div className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
          {language === 'ug' ? 'ئىستاتىستىكىلىق ئۇسۇللار' : 'Statistical Methods'}
        </div>
      </div>
    </div>
  );
};

// Topic Content Component
const TopicContent = ({ topic, t, setActiveSubTopic, language }) => {
  if (!topic) return <WelcomeContent language={language} />;
  
  const Icon = topic.icon;
  
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className={`p-6 bg-gradient-to-r from-${topic.color}-50 to-white border-b border-${topic.color}-100`}>
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-xl bg-${topic.color}-100 mr-4`}>
            <Icon className={`w-8 h-8 text-${topic.color}-600`} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{t(topic.title)}</h2>
            <p className="text-gray-600">{t(topic.description)}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
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
        
        <div className="p-4 bg-blue-50 rounded-lg mb-6">
          <div className="flex items-center text-blue-700 mb-2">
            <Lightbulb className="w-5 h-5 mr-2" />
            <span className="font-semibold">
              {language === 'ug' ? 'مۇھىم ئەسكەرتىش' : 'Key Takeaway'}
            </span>
          </div>
          <p className="text-blue-800">
            {language === 'ug'
              ? 'ھەر بىر تېمىنى ئۆز ئىچىگە ئالغان تارماق تېمىلارنى ئۆگىنىش ئارقىلىق، ئىستاتىستىكىلىق چۈشەنچىلەرنى ئەمەلىيەتتە قانداق قوللىنىشنى چۈشىنىڭ.'
              : 'Understand how to apply statistical concepts in practice by learning subtopics covering each theme.'}
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
              <Hash className="w-5 h-5 mr-2 text-blue-600" />
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
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-purple-600" />
              {language === 'ug' ? 'كود ئۈلگىسى' : 'Code Example'}
            </h3>
            <div className="relative">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{subtopic.code}</code>
              </pre>
              <div className="absolute top-2 right-2 px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                Python
              </div>
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
                  ? 'يۇقىرىدىكى كود ئىستاتىستىكىلىق چۈشەنچىلەرنى ئەمەلىيلەشتۈرۈش، دېتا تەھلىل قىلىش ۋە ئاندىزە پارامېتىرلىرىنى ھېسابلاش ئۈچۈن Python پروگراممىلاش تىلىدا يېزىلغان.'
                  : 'The code above is written in Python programming language for implementing statistical concepts, data analysis, and calculating population parameters.'}
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
              {language === 'ug' ? 'تەمىنلەنگەن ۋاقىت: 20-30 مىنۇت' : 'Estimated time: 20-30 minutes'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsLevel3UG;