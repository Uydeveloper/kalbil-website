// statistics-level2-ug.jsx
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
  Download,
  Upload,
  Cpu,
  Server,
  Shield,
  CheckCircle,
  AlertCircle,
  Clock,
  Calendar,
  MapPin,
  FileText,
  Coffee,
  Rocket,
  Sparkles,
  Zap,
  Award,
  Brain,
  Lightbulb,
  GraduationCap
} from 'lucide-react';

const StatisticsLevel2UG = () => {
  const [activeTopic, setActiveTopic] = useState(null);
  const [activeSubTopic, setActiveSubTopic] = useState(null);
  const [language, setLanguage] = useState('ug'); // 'ug', 'en'

  // تىل تاللاش
  const t = (obj) => {
    return language === 'ug' ? obj.ug : obj.en;
  };

  // ئىككى تىللىق تېرمىن چىقىرىش
  const bilingualTerm = (ug, en) => {
    if (language === 'ug') {
      return (
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-900">{ug}</span>
          <span className="text-xs text-gray-500 ml-2">{en}</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-900">{en}</span>
          <span className="text-xs text-gray-500 ml-2">{ug}</span>
        </div>
      );
    }
  };

  // ئاساسىي تېمىلار
  const mainTopics = [
    {
      id: 'data-sources',
      title: {
        ug: 'دېتالار مەنبەلىرى ۋە قانداق ئىشلىتىلىشى',
        en: 'Data Sources and Usage Methods'
      },
      icon: Database,
      color: 'blue',
      description: {
        ug: 'ئامالىي ئىستاتىستىكىلارنىڭ تارىخىي تەرەققىياتى، ئىجتىمائىي زۆرۈرىيەتلىرى ۋە مەنبەلىرى',
        en: 'Historical development of applied statistics, social necessities, and data sources'
      },
      subtopics: [
        {
          id: 'usage-necessity',
          title: { ug: 'ئىشلىتىش ۋە زۆرۈرىيىتى', en: 'Usage and Necessity' },
          learningObjective: {
            ug: 'ئامالىي ئىستاتىستىكىلارنىڭ كۈندىلىك تۇرمۇشتىكى ئورنىنى چۈشىنىش ۋە ئۇنىڭ زۆرۈرىيىتىنى باھالىش',
            en: 'Understand the role of applied statistics in daily life and evaluate its necessity'
          },
          terms: [
            { ug: 'ئامالىي ئىستاتىستىكىلا', en: 'Applied Statistics' },
            { ug: 'تارىخىي قۇرۇلۇش', en: 'Historical Development' },
            { ug: 'ئىجتىمائىي زۆرۈرىيەت', en: 'Social Necessity' },
            { ug: 'دادىلىق مەنبە', en: 'Public Data Sources' },
            { ug: 'ئۆگىنىش مەنبەسى', en: 'Research Databases' },
            { ug: 'ھۆكۈمەت ئىستاتىستىكىسى', en: 'Government Statistics' },
            { ug: 'شىركەت سانلىق مەلۇماتى', en: 'Corporate Data' },
            { ug: 'ئاكادېمىك تەتقىقات', en: 'Academic Research' }
          ],
          example: {
            ug: 'جاپونىيە ئىچكى ئىشلار مىنىستىرلىكىنىڭ ئادەم تۇرمۇشى تورى (e-Stat) دادىلىق ئىستاتىستىكىلا بىر مەنبە بولۇپ، ھەر كۈنى مىليونلىغان كىشىلەر تەرىپىدىن ئىشلىتىلىدۇ.',
            en: 'Japan\'s Ministry of Internal Affairs e-Stat portal is a public statistics source used by millions daily.'
          },
          code: `# ھۆكۈمەت ئىستاتىستىكىسىغا ئېرىشىش مىسالى
import pandas as pd
import requests

# ھۆججەت ئادرىسى (ئەمەلىيەتتە API قوللىنىلىدۇ)
url = "https://api.e-stat.go.jp/rest/3.0/app/json/getStatsList"
params = {
    "appId": "your_app_id",
    "lang": "J",
    "statsCode": "00200501",
    "searchKind": 1
}

# ئەمەلىيەتتە:
# response = requests.get(url, params=params)
# data = response.json()

print("ھۆكۈمەت سانلىق مەلۇماتلىرىنى ئىزدەش سىستېمىسى")
print("مىسال: جاپونىيە ئادەم تۇرمۇشى تورى (e-Stat)")
print("مەزمۇن: ئىقتىسادىي، جەمئىيەتلىك، ساغلاملىق سانلىق مەلۇماتلىرى")`
        },
        {
          id: 'data-types',
          title: { ug: 'دېتا خىللىرى', en: 'Types of Data' },
          learningObjective: {
            ug: 'سۈپەتلىك ۋە مىقدارلىق دېتالارنىڭ پەرقلىرىنى چۈشىنىش ۋە ئۇلارنى توغرا ئىشلىتىش',
            en: 'Understand differences between qualitative and quantitative data and use them correctly'
          },
          terms: [
            { ug: 'سۈپەتلىك دېتا', en: 'Qualitative Data' },
            { ug: 'مىقدارلىق دېتا', en: 'Quantitative Data' },
            { ug: 'ئۈزۈك دېتا', en: 'Discrete Data' },
            { ug: 'داۋاملىق دېتا', en: 'Continuous Data' },
            { ug: 'نومىنال دېتا', en: 'Nominal Data' },
            { ug: 'تەرتىپلىك دېتا', en: 'Ordinal Data' },
            { ug: 'ئىنتىرۋال دېتا', en: 'Interval Data' },
            { ug: 'نىسبەت دېتا', en: 'Ratio Data' }
          ],
          example: {
            ug: 'ئادەمنىڭ قان گۇرۇپپىسى (A، B، AB، O) → سۈپەتلىك نومىنال دېتا؛ ئادەمنىڭ ئېغىرلىقى (65.2kg) → مىقدارلىق داۋاملىق دېتا',
            en: 'Blood type (A, B, AB, O) → Qualitative nominal data; Weight (65.2kg) → Quantitative continuous data'
          },
          code: `# دېتا خىللىرىنىڭ سېلىشتۇرۇشى
import pandas as pd

# مىسال دېتالار
data = {
    'نامى': ['ئەخمەت', 'زەينەپ', 'مەھمۇت'],  # سۈپەتلىك
    'يېشى': [25, 30, 35],                    # مىقدارلىق ئۈزۈك
    'بويى (m)': [1.75, 1.62, 1.80],          # مىقدارلىق داۋاملىق
    'قان گۇرۇپپىسى': ['A', 'B', 'O'],        # سۈپەتلىك نومىنال
    'بېلىش دەرىجىسى': ['ياخشى', 'ئوتتۇرا', 'ياخشى']  # سۈپەتلىك تەرتىپلىك
}

df = pd.DataFrame(data)
print("دېتا خىللىرى تەھلىلى:")
for column in df.columns:
    dtype = df[column].dtype
    print(f"{column}: {dtype} - {len(df[column].unique())} خىل قىممەت")`
        }
      ]
    },
    {
      id: 'one-variable',
      title: {
        ug: 'بىر ئۆزگەرگۈچلۈك دېتالار تەھلىلى',
        en: 'One-Variable Data Analysis'
      },
      icon: BarChart3,
      color: 'green',
      description: {
        ug: 'بىر ئۆزگەرگۈچتىكى دېتالارنى تەسۋىرلەش، گرافىك كۆرسىتىش ۋە ئىستاتىستىكىلىق باھالاش',
        en: 'Describing, visualizing, and statistically evaluating data from a single variable'
      },
      subtopics: [
        {
          id: 'distribution-visualization',
          title: { ug: 'تارقىلىش ۋە گرافىك كۆرسىتىش', en: 'Distribution and Visualization' },
          learningObjective: {
            ug: 'دېتالارنىڭ تارقىلىش شەكلىنى گرافىك ئارقىلىق كۆرسىتىپ چۈشىنىش',
            en: 'Understand data distribution shape through graphical representation'
          },
          terms: [
            { ug: 'تۈر تىللىق گىرافىك', en: 'Bar Chart' },
            { ug: 'چەمبەر گىرافىك', en: 'Pie Chart' },
            { ug: 'گىستوگرامما', en: 'Histogram' },
            { ug: 'گىرافىك-ياپراق دىيىگراممىسى', en: 'Stem-and-Leaf Plot' },
            { ug: 'تارقىلىش جەدۋىلى', en: 'Frequency Distribution Table' },
            { ug: 'ساندۇق-سىڭار گىرافىك', en: 'Box-and-Whisker Plot' },
            { ug: 'كېرنېل زىچلىق باھالىغۇچ', en: 'Kernel Density Estimator' }
          ],
          example: {
            ug: '100 ئوقۇغۇچىنىڭ ئىمتاھان نەتىجىسىنى گىستوگراممىدا كۆرسەتكەندە، نۇرمال تارقىلىش شەكلى كۆرۈلىدۇ ۋە ئوتتۇرا نۇقتا 75 نۇقتا ئەتراپىدا بولىدۇ.',
            en: 'Visualizing 100 students\' exam scores in a histogram shows normal distribution shape with center around 75 points.'
          },
          code: `# ھەر خىل گرافىك كۆرسىتىش ئۇسۇللىرى
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# سانلىق مەلۇمات ھاسىل قىلىش
np.random.seed(42)
data = np.random.normal(75, 10, 100)

fig, axes = plt.subplots(2, 3, figsize=(15, 10))

# 1. گىستوگرامما
axes[0,0].hist(data, bins=15, edgecolor='black', alpha=0.7)
axes[0,0].set_title('گىستوگرامما / Histogram')
axes[0,0].set_xlabel('نەتىجە')
axes[0,0].set_ylabel('تەكرارلىنىش')

# 2. ساندۇق-سىڭار گىرافىك
axes[0,1].boxplot(data)
axes[0,1].set_title('ساندۇق-سىڭار / Box Plot')

# 3. كېرنېل زىچلىق باھالىغۇچ
sns.kdeplot(data, ax=axes[0,2], fill=True)
axes[0,2].set_title('كېرنېل زىچلىق / Kernel Density')

# 4. گىرافىك-ياپراق دىيىگراممىسى
from stemgraphic import stem_graphic
# stem_graphic(data)  # ئايرىم گرافىك قىلىدۇ

# 5. قۇر قىممەت تارقىلىشى
axes[1,0].violinplot(data)
axes[1,0].set_title('قۇر قىممەت / Violin Plot')

# 6. تەكرارلىنىش جەدۋىلى
freq, bins = np.histogram(data, bins=10)
axes[1,1].bar(bins[:-1], freq, width=np.diff(bins))
axes[1,1].set_title('تەكرارلىنىش جەدۋىلى / Frequency Table')

plt.tight_layout()
plt.show()`
        },
        {
          id: 'central-tendency',
          title: { ug: 'مەركەزگە قاراپ باھالاش', en: 'Central Tendency Measures' },
          learningObjective: {
            ug: 'ئوتتۇرىچە قىممەت، ئوتتۇرا سان ۋە ئەڭ كۆپ تەكرارلىنىدىغان قىممەتنى ھېسابلاش ۋە چۈشىنىش',
            en: 'Calculate and understand mean, median, and mode as central tendency measures'
          },
          terms: [
            { ug: 'ئوتتۇرىچە قىممەت', en: 'Mean (Arithmetic Average)' },
            { ug: 'ئوتتۇرا سان', en: 'Median' },
            { ug: 'ئەڭ كۆپ تەكرارلىنىدىغان قىممەت', en: 'Mode' },
            { ug: 'ترىممىللاشقان ئوتتۇرىچە', en: 'Trimmed Mean' },
            { ug: 'گېئومېتىرىك ئوتتۇرىچە', en: 'Geometric Mean' },
            { ug: 'ھارمونىك ئوتتۇرىچە', en: 'Harmonic Mean' },
            { ug: 'كۋارتىلەر', en: 'Quartiles' },
            { ug: 'دىسىمىللار', en: 'Deciles' },
            { ug: 'پىرسېنتىللار', en: 'Percentiles' }
          ],
          example: {
            ug: 'دېتالار: [1, 2, 2, 3, 100] → ئوتتۇرىچە قىممىتى = 21.6 (چوڭ قىممەت تەسىر كۆرسىتىدۇ)، ئوتتۇرا سان = 2 (تارقىلىشنى تەڭشىگۈچى قىممەت)',
            en: 'Data: [1, 2, 2, 3, 100] → Mean = 21.6 (affected by outlier), Median = 2 (resistant measure)'
          },
          code: `# مەركەزگە قاراپ باھالاش ھېسابلاش
import numpy as np
from scipy import stats
import pandas as pd

data = np.array([1, 2, 2, 3, 100])

# ئاساسىي ھېسابلاشلار
mean = np.mean(data)
median = np.median(data)
mode = stats.mode(data).mode[0]

# كۋارتىللار
q1 = np.percentile(data, 25)
q2 = np.percentile(data, 50)  # ئوتتۇرا سان بىلەن ئوخشاش
q3 = np.percentile(data, 75)

# تۈرلۈك ئوتتۇرىچە قىممەتلەر
trimmed_mean = stats.trim_mean(data, 0.2)  # 20% تىن ئاشۇرۇق چىقىرىۋېتىش

print("=== مەركەزگە قاراپ باھالاش ===")
print(f"ئوتتۇرىچە قىممەت: {mean:.2f}")
print(f"ئوتتۇرا سان: {median}")
print(f"ئەڭ كۆپ تەكرارلىنىدىغان قىممەت: {mode}")
print(f"تۈرمىللاشقان ئوتتۇرىچە (20%): {trimmed_mean:.2f}")
print(f"25% كۋارتىل (Q1): {q1}")
print(f"50% كۋارتىل (Q2): {q2}")
print(f"75% كۋارتىل (Q3): {q3}")

# دېتالارنىڭ تەسىرىنى كۆرسىتىش
print("\n=== ئوتتۇرىچە قىممەت ۋە ئوتتۇرا ساننىڭ تەسىرى ===")
data_normal = [1, 2, 2, 3, 4]
data_with_outlier = [1, 2, 2, 3, 100]

print(f"ئادەتتىكى دېتا - ئوتتۇرىچە: {np.mean(data_normal):.2f}, ئوتتۇرا سان: {np.median(data_normal)}")
print(f"تاشقى قىممەت بار دېتا - ئوتتۇرىچە: {np.mean(data_with_outlier):.2f}, ئوتتۇرا سان: {np.median(data_with_outlier)}")
print("خۇلاسە: ئوتتۇرا سان تاشقى قىممەتكە تاقابىل تۇرالايدۇ، ئوتتۇرىچە قىممەت تاشقى قىممەتكە ھەسسىدار.")`
        },
        {
          id: 'dispersion-measures',
          title: { ug: 'تارقىلىش ئۆلچەملىرى', en: 'Dispersion Measures' },
          learningObjective: {
            ug: 'ۋارىيانس، ستاندارت ئېغىش، دەۋالىق ۋە IQR قاتارلىق تارقىلىش ئۆلچەملىرىنى ھېسابلاش ۋە چۈشىنىش',
            en: 'Calculate and understand dispersion measures like variance, standard deviation, range, and IQR'
          },
          terms: [
            { ug: 'ۋارىيانس', en: 'Variance (σ², s²)' },
            { ug: 'ستاندارت ئېغىش', en: 'Standard Deviation (σ, s)' },
            { ug: 'دەۋالىق', en: 'Range' },
            { ug: 'توتۇز ئىنتېرۋال', en: 'Interquartile Range (IQR)' },
            { ug: 'ئوتتۇرا مۇتلەق ئېغىش', en: 'Mean Absolute Deviation (MAD)' },
            { ug: 'ئۆزگىرىش كۆرسەتكۈچى', en: 'Coefficient of Variation (CV)' },
            { ug: 'ز-بالا', en: 'Z-Score' },
            { ug: 'قىيىشلىق', en: 'Skewness' },
            { ug: 'يەتكىلىك', en: 'Kurtosis' }
          ],
          example: {
            ug: 'ئىككى گۇرۇپپا ئوقۇغۇچىلارنىڭ ئىمتاھان نەتىجىسى: گۇرۇپپا A (ستاندارت ئېغىش=5)، گۇرۇپپا B (ستاندارت ئېغىش=15). گۇرۇپپا B دىكى تارقىلىش كۆپرەك.',
            en: 'Exam scores for two groups: Group A (SD=5), Group B (SD=15). Group B has more dispersion.'
          },
          code: `# تارقىلىش ئۆلچەملىرىنى ھېسابلاش
import numpy as np
from scipy import stats

# ئىككى گۇرۇپپا سانلىق مەلۇماتى
np.random.seed(42)
group_a = np.random.normal(75, 5, 50)    # كىچىك تارقىلىش
group_b = np.random.normal(75, 15, 50)   # چوڭ تارقىلىش

def calculate_dispersion(data, name):
    """تارقىلىش ئۆلچەملىرىنى ھېسابلاش"""
    return {
        'نامى': name,
        'ئوتتۇرىچە قىممەت': np.mean(data),
        'ۋارىيانس': np.var(data, ddof=1),
        'ستاندارت ئېغىش': np.std(data, ddof=1),
        'دەۋالىق': np.ptp(data),
        'IQR': stats.iqr(data),
        'MAD': np.mean(np.abs(data - np.mean(data))),
        'CV': np.std(data, ddof=1)/np.mean(data) if np.mean(data) != 0 else np.nan,
        'قىيىشلىق': stats.skew(data),
        'يەتكىلىك': stats.kurtosis(data)
    }

# ھېسابلاش
stats_a = calculate_dispersion(group_a, "گۇرۇپپا A")
stats_b = calculate_dispersion(group_b, "گۇرۇپپا B")

# نەتىجىلەرنى كۆرسىتىش
print("=== تارقىلىش ئۆلچەملىرى سېلىشتۇرۇشى ===")
for key in stats_a.keys():
    if key != 'نامى':
        print(f"\n{key}:")
        print(f"  گۇرۇپپا A: {stats_a[key]:.3f}")
        print(f"  گۇرۇپپا B: {stats_b[key]:.3f}")
        
# ز-بالا ھېسابلاش
print("\n=== ز-بالا ھېسابلاش مىسالى ===")
scores = np.array([70, 85, 90, 60, 95])
mean_score = np.mean(scores)
std_score = np.std(scores, ddof=1)

z_scores = (scores - mean_score) / std_score
print(f"ئوتتۇرىچە قىممەت: {mean_score:.2f}")
print(f"ستاندارت ئېغىش: {std_score:.2f}")
print("\nھەر بىر نەتىجىنىڭ ز-بالاسى:")
for score, z in zip(scores, z_scores):
    interpretation = "ئوتتۇرىدىن يۇقىرى" if z > 0 else "ئوتتۇرىدىن تۆۋەن"
    print(f"  {score} → z = {z:.2f} ({interpretation})")`
        }
      ]
    },
    {
      id: 'multi-variable',
      title: {
        ug: 'كۆپ ئۆزگەرگۈچلۈك دېتالار تەھلىلى',
        en: 'Multi-Variable Data Analysis'
      },
      icon: ScatterChart,
      color: 'purple',
      description: {
        ug: 'ئىككى ياكى كۆپ ئۆزگەرگۈچ ئوتتۇرىسىدىكى مۇناسىۋەتنى تەھلىل قىلىش ۋە چۈشىنىش',
        en: 'Analyzing and understanding relationships between two or more variables'
      },
      subtopics: [
        {
          id: 'correlation-analysis',
          title: { ug: 'كوررېلاتسىيە تەھلىلى', en: 'Correlation Analysis' },
          learningObjective: {
            ug: 'كوررېلاتسىيە كوئېففىتسېنتى، كوۋارىيانس ۋە باغلىنىش تۈرلىرىنى ھېسابلاش ۋە چۈشىنىش',
            en: 'Calculate and understand correlation coefficients, covariance, and relationship types'
          },
          terms: [
            { ug: 'تارقىلىش گىرافىكى', en: 'Scatter Plot' },
            { ug: 'كوۋارىيانس', en: 'Covariance' },
            { ug: 'پىرسون كوررېلاتسىيە كوئېففىتسېنتى', en: "Pearson's Correlation Coefficient (r)" },
            { ug: 'سپېئەرمان راڭ كوررېلاتسىيەسى', en: "Spearman's Rank Correlation" },
            { ug: 'كېندال تاو كوررېلاتسىيەسى', en: "Kendall's Tau Correlation" },
            { ug: 'كوررېلاتسىيە ماترىتسىسى', en: 'Correlation Matrix' },
            { ug: 'پارتسىيال كوررېلاتسىيە', en: 'Partial Correlation' },
            { ug: 'سېمىپارتسىيال كوررېلاتسىيە', en: 'Semipartial Correlation' }
          ],
          example: {
            ug: 'ئوقۇغۇچىلارنىڭ ئۆگىنىش ۋاقتى بىلەن ئىمتاھان نەتىجىسى ئوتتۇرىسىدا مۇسبەت كوررېلاتسىيە بار (r=0.65)',
            en: 'Positive correlation between students\' study time and exam scores (r=0.65)'
          },
          code: `# كوررېلاتسىيە تەھلىلى
import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from scipy import stats

# سانلىق مەلۇمات ھاسىل قىلىش
np.random.seed(42)
n = 100
study_hours = np.random.normal(20, 5, n)  # ئۆگىنىش ۋاقتى
exam_scores = 50 + 2*study_hours + np.random.normal(0, 10, n)  # ئىمتاھان نەتىجىسى
stress_level = np.random.normal(50, 10, n)  # بېسىم دەرىجىسى

# DataFrame قۇرۇش
df = pd.DataFrame({
    'ئۆگىنىش_ۋاقتى': study_hours,
    'ئىمتاھان_نەتىجىسى': exam_scores,
    'بېسىم_دەرىجىسى': stress_level
})

print("=== كوررېلاتسىيە تەھلىلى ===")

# 1. تارقىلىش گىرافىكى
plt.figure(figsize=(12, 4))

plt.subplot(131)
plt.scatter(df['ئۆگىنىش_ۋاقتى'], df['ئىمتاھان_نەتىجىسى'], alpha=0.6)
plt.xlabel('ئۆگىنىش ۋاقتى (سائەت)')
plt.ylabel('ئىمتاھان نەتىجىسى')
plt.title('تارقىلىش گىرافىكى')

# 2. كوررېلاتسىيە ھېسابلاش
print("\nكوررېلاتسىيە كوئېففىتسېنتلىرى:")
pearson_r, pearson_p = stats.pearsonr(df['ئۆگىنىش_ۋاقتى'], df['ئىمتاھان_نەتىجىسى'])
spearman_rho, spearman_p = stats.spearmanr(df['ئۆگىنىش_ۋاقتى'], df['ئىمتاھان_نەتىجىسى'])

print(f"پىرسون r = {pearson_r:.3f} (p = {pearson_p:.4f})")
print(f"سپېئەرمان ρ = {spearman_rho:.3f} (p = {spearman_p:.4f})")

# كوررېلاتسىيە كۈچىنى باھالاش
def interpret_correlation(r):
    if abs(r) >= 0.7:
        return "كۈچلۈك"
    elif abs(r) >= 0.3:
        return "ئوتتۇراھال"
    else:
        return "ئاجىز"

print(f"\nكوررېلاتسىيە كۈچى: {interpret_correlation(pearson_r)}")

# 3. كوررېلاتسىيە ماترىتسىسى
corr_matrix = df.corr(method='pearson')
print("\nكوررېلاتسىيە ماترىتسىسى:")
print(corr_matrix)

# 4. كوررېلاتسىيە ماترىتسىسىنى گرافىك كۆرسىتىش
plt.subplot(132)
sns.heatmap(corr_matrix, annot=True, cmap='coolwarm', center=0)
plt.title('كوررېلاتسىيە ماترىتسىسى')

# 5. پارتسىيال كوررېلاتسىيە
import pingouin as pg
partial_corr = pg.partial_corr(data=df, x='ئۆگىنىش_ۋاقتى', 
                               y='ئىمتاھان_نەتىجىسى', covar='بېسىم_دەرىجىسى')
print(f"\nپارتسىيال كوررېلاتسىيە (بېسىمنى كونترول قىلغاندا):")
print(f"r = {partial_corr['r'].values[0]:.3f}, p = {partial_corr['p-val'].values[0]:.4f}")

plt.tight_layout()
plt.show()

# خۇلاسە
print("\n=== خۇلاسە ===")
print("1. ئۆگىنىش ۋاقتى بىلەن ئىمتاھان نەتىجىسى ئوتتۇرىسىدا ئوتتۇراھال مۇسبەت كوررېلاتسىيە بار")
print("2. كوررېلاتسىيە كۈچى ئوتتۇراھال دەرىجىدە")
print("3. بېسىم دەرىجىسىنى كونترول قىلغاندا كوررېلاتسىيە ئازراق ئۆزگىرىدۇ")`
        },
        {
          id: 'categorical-analysis',
          title: { ug: 'سۈپەتلىك دېتالار تەھلىلى', en: 'Categorical Data Analysis' },
          learningObjective: {
            ug: 'سۈپەتلىك دېتالارنى كىرىس جەدۋىلى ۋە خى-كۋادرات سىناقى ئارقىلىق تەھلىل قىلىش',
            en: 'Analyze categorical data using contingency tables and chi-square tests'
          },
          terms: [
            { ug: 'تەكرارلىنىش جەدۋىلى', en: 'Frequency Table' },
            { ug: 'كىرىس جەدۋەل', en: 'Contingency Table' },
            { ug: 'خى-كۋادرات سىناقى', en: 'Chi-Square Test' },
            { ug: 'يېتەرلىك ئېھتىمالىيەت', en: 'Expected Frequency' },
            { ug: 'فىشېر توغرا سىناقى', en: "Fisher's Exact Test" },
            { ug: 'گى-كۋادرات سىناقى', en: 'G-Test' },
            { ug: 'قىيىنلىق كوئېففىتسېنتى', en: 'Coefficient of Contingency' },
            { ug: 'كرامېر V', en: "Cramér's V" }
          ],
          example: {
            ug: 'ئەر-خۇن ئارىلىق شاي ئىچىش ئادىتىدە بايلىنىش بارمۇ؟ كىرىس جەدۋىلى ۋە خى-كۋادرات سىناقى بىلەن تەكشۈرۈلۈدۇ.',
            en: 'Is there an association between gender and tea drinking habits? Tested with contingency table and chi-square test.'
          },
          code: `# سۈپەتلىك دېتالار تەھلىلى
import pandas as pd
import numpy as np
from scipy.stats import chi2_contingency, fisher_exact
import seaborn as sns
import matplotlib.pyplot as plt

# مىسال سانلىق مەلۇمات: جىنسىيەت ۋە شاي ئىچىش ئادىتى
data = {
    'جىنسىيەت': ['ئەر'] * 50 + ['خۇن'] * 50,
    'شاي ئىچىش': ['ھەئە'] * 30 + ['ياق'] * 20 + ['ھەئە'] * 20 + ['ياق'] * 30
}

df = pd.DataFrame(data)

# 1. كىرىس جەدۋىلى
contingency_table = pd.crosstab(df['جىنسىيەت'], df['شاي ئىچىش'])
print("=== كىرىس جەدۋىلى ===")
print(contingency_table)
print()

# 2. كىرىس جەدۋىلىنى گرافىك كۆرسىتىش
fig, axes = plt.subplots(1, 3, figsize=(15, 5))

# بار گرافىك
contingency_table.plot(kind='bar', ax=axes[0], alpha=0.8)
axes[0].set_title('جىنسىيەت ۋە شاي ئىچىش')
axes[0].set_ylabel('تەكرارلىنىش سانى')

# ھىست گرامما
contingency_table.T.plot(kind='bar', ax=axes[1], alpha=0.8)
axes[1].set_title('شاي ئىچىش ۋە جىنسىيەت')

# ھىت مېپ
sns.heatmap(contingency_table, annot=True, fmt='d', cmap='YlOrRd', ax=axes[2])
axes[2].set_title('كىرىس جەدۋىلى')

plt.tight_layout()
plt.show()

# 3. خى-كۋادرات سىناقى
chi2, p, dof, expected = chi2_contingency(contingency_table)

print("\n=== خى-كۋادرات سىناقى ===")
print(f"خى-كۋادرات قىممىتى: {chi2:.4f}")
print(f"p-قىممىتى: {p:.4f}")
print(f"ئەركىنلىك دەرىجىسى: {dof}")
print(f"\nيېتەرلىك ئېھتىمالىيەت جەدۋىلى:")
print(pd.DataFrame(expected, 
                   index=contingency_table.index, 
                   columns=contingency_table.columns).round(2))

# 4. فىشېر توغرا سىناقى (كىچىك نۇمۇنە ئۈچۈن)
odds_ratio, p_fisher = fisher_exact(contingency_table)
print(f"\n=== فىشېر توغرا سىناقى ===")
print(f"قىيىنلىق نىسبىتى: {odds_ratio:.4f}")
print(f"p-قىممىتى: {p_fisher:.4f}")

# 5. ئورۇنلاشتۇرۇش كوئېففىتسېنتلىرى
def calculate_association_measures(table):
    """ئورۇنلاشتۇرۇش كوئېففىتسېنتلىرىنى ھېسابلاش"""
    n = table.sum().sum()
    chi2_stat = chi2_contingency(table)[0]
    
    # كرامېر V
    phi = np.sqrt(chi2_stat / n)
    min_dim = min(table.shape) - 1
    cramers_v = phi / np.sqrt(min_dim)
    
    # قىيىنلىق كوئېففىتسېنتى
    contingency_coef = np.sqrt(chi2_stat / (chi2_stat + n))
    
    return {
        'كرامېر V': cramers_v,
        'فىي': phi,
        'قىيىنلىق كوئېففىتسېنتى': contingency_coef
    }

assoc_measures = calculate_association_measures(contingency_table)
print("\n=== ئورۇنلاشتۇرۇش كوئېففىتسېنتلىرى ===")
for measure, value in assoc_measures.items():
    print(f"{measure}: {value:.4f}")

# خۇلاسە
print("\n=== خۇلاسە ===")
if p < 0.05:
    print("خى-كۋادرات سىناقى ئاساسىدا، جىنسىيەت بىلەن شاي ئىچىش ئادىتى ئوتتۇرىسىدا مەنىلىك ئورۇنلاشتۇرۇش بار (p < 0.05).")
else:
    print("خى-كۋادرات سىناقى ئاساسىدا، جىنسىيەت بىلەن شاي ئىچىش ئادىتى ئوتتۇرىسىدا مەنىلىك ئورۇنلاشتۇرۇش يوق (p ≥ 0.05).")

print(f"كرامېر V = {assoc_measures['كرامېر V']:.3f} → ئورۇنلاشتۇرۇش كۈچىنى باھالىش")
if assoc_measures['كرامېر V'] >= 0.5:
    print("ئورۇنلاشتۇرۇش كۈچى: كۈچلۈك")
elif assoc_measures['كرامېر V'] >= 0.3:
    print("ئورۇنلاشتۇرۇش كۈچى: ئوتتۇراھال")
elif assoc_measures['كرامېر V'] >= 0.1:
    print("ئورۇنلاشتۇرۇش كۈچى: ئاجىز")
else:
    print("ئورۇنلاشتۇرۇش كۈچى: بەك ئاجىز يوققا تەڭ")`
        }
      ]
    },
    {
      id: 'regression',
      title: {
        ug: 'رېگرېسسىيە تەھلىلى',
        en: 'Regression Analysis'
      },
      icon: TrendingUp,
      color: 'orange',
      description: {
        ug: 'ئۆزگەرگۈچلەر ئوتتۇرىسىدىكى مۇناسىۋەتنى مودېللاش ۋە باشقىلاش',
        en: 'Modeling relationships between variables and making predictions'
      },
      subtopics: [
        {
          id: 'simple-regression',
          title: { ug: 'يەككە رېگرېسسىيە', en: 'Simple Regression' },
          learningObjective: {
            ug: 'يەككە رېگرېسسىيە مودېلىنى قۇرۇش، R² ھېسابلاش ۋە باشقىلاش',
            en: 'Build simple regression models, calculate R², and make predictions'
          },
          terms: [
            { ug: 'ئەڭ كىچىك كىۋادراتلار ئۇسۇلى', en: 'Least Squares Method' },
            { ug: 'رېگرېسسىيە كوئېففىتسېنتى', en: 'Regression Coefficient' },
            { ug: 'ئېنىقلىش دەرىجىسى', en: 'Coefficient of Determination (R²)' },
            { ug: 'تۈزىتىلگەن R²', en: 'Adjusted R²' },
            { ug: 'قالدۇقىلار', en: 'Residuals' },
            { ug: 'ستاندارتلاشتۇرۇلماغان خاتالىق', en: 'Standard Error' },
            { ug: 'پىششىقلاپ بېرىش', en: 'Prediction' },
            { ug: 'ئارىلىق باھالاش', en: 'Interval Estimation' }
          ],
          example: {
            ug: 'ئۆگىنىش ۋاقتى 10 سائەت بولغان ئوقۇغۇچىنىڭ ئىمتاھان نەتىجىسى 80 نۇقتا ئەتراپىدا بولۇشى مۇمكىن. R²=0.64 بولغاندا، 64% ئۆزگىرىش رېگرېسسىيە مودېلى ئارقىلىق چۈشەندۈرۈلەلەيدۇ.',
            en: 'A student studying 10 hours may score around 80 points. With R²=0.64, 64% of variation is explained by the regression model.'
          },
          code: `# يەككە رېگرېسسىيە تەھلىلى
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_squared_error
import statsmodels.api as sm

# مىسال سانلىق مەلۇمات: ئۆگىنىش ۋاقتى ۋە ئىمتاھان نەتىجىسى
np.random.seed(42)
study_hours = np.random.normal(20, 5, 50)  # ئۆگىنىش ۋاقتى
exam_scores = 50 + 2*study_hours + np.random.normal(0, 8, 50)  # ئىمتاھان نەتىجىسى

# DataFrame قۇرۇش
df = pd.DataFrame({'ئۆگىنىش_ۋاقتى': study_hours, 'ئىمتاھان_نەتىجىسى': exam_scores})

# 1. رېگرېسسىيە مودېلىنى قۇرۇش
X = df[['ئۆگىنىش_ۋاقتى']]
y = df['ئىمتاھان_نەتىجىسى']

# Scikit-learn بىلەن
model_sklearn = LinearRegression()
model_sklearn.fit(X, y)

# Statsmodels بىلەن (تەپسىلاتلىق)
X_sm = sm.add_constant(X)  # ئۆزگىرمەس قوشۇش
model_sm = sm.OLS(y, X_sm).fit()

# 2. رېگرېسسىيە نەتىجىلىرى
print("=== يەككە رېگرېسسىيە تەھلىلى ===")
print(f"رېگرېسسىيە تەڭلىمىسى: ئىمتاھان نەتىجىسى = {model_sklearn.intercept_:.2f} + {model_sklearn.coef_[0]:.2f} × ئۆگىنىش ۋاقتى")
print(f"ئېنىقلىش دەرىجىسى (R²): {model_sklearn.score(X, y):.3f}")
print(f"تۈزىتىلگەن R²: {model_sm.rsquared_adj:.3f}")

# 3. قالدۇقىلار تەھلىلى
predictions = model_sklearn.predict(X)
residuals = y - predictions

print(f"\n=== قالدۇقىلار تەھلىلى ===")
print(f"قولدىقىلار ئوتتۇرىچىسى: {residuals.mean():.3f} (ئىدىيەلىكى 0 بولۇشى كېرەك)")
print(f"قولدىقىلار ستاندارت ئېغىشى: {residuals.std():.3f}")
print(f"MSE: {mean_squared_error(y, predictions):.3f}")
print(f"RMSE: {np.sqrt(mean_squared_error(y, predictions)):.3f}")

# 4. گرافىك كۆرسىتىش
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# تارقىلىش گىرافىكى ۋە رېگرېسسىيە سىزىقى
axes[0,0].scatter(df['ئۆگىنىش_ۋاقتى'], df['ئىمتاھان_نەتىجىسى'], alpha=0.6, label='ھەقىقىي دېتا')
axes[0,0].plot(df['ئۆگىنىش_ۋاقتى'], predictions, color='red', linewidth=2, label='رېگرېسسىيە سىزىقى')
axes[0,0].set_xlabel('ئۆگىنىش ۋاقتى (سائەت)')
axes[0,0].set_ylabel('ئىمتاھان نەتىجىسى')
axes[0,0].set_title('يەككە رېگرېسسىيە مودېلى')
axes[0,0].legend()
axes[0,0].grid(True, alpha=0.3)

# قالدۇقىلار تارقىلىشى
axes[0,1].scatter(predictions, residuals, alpha=0.6)
axes[0,1].axhline(y=0, color='red', linestyle='--', alpha=0.5)
axes[0,1].set_xlabel('پىششىقلاپ بېرىش قىممىتى')
axes[0,1].set_ylabel('قالدۇقىلار')
axes[0,1].set_title('قالدۇقىلار تارقىلىشى')
axes[0,1].grid(True, alpha=0.3)

# قالدۇقىلار گىستوگراممىسى
axes[1,0].hist(residuals, bins=15, edgecolor='black', alpha=0.7)
axes[1,0].axvline(x=0, color='red', linestyle='--', alpha=0.5)
axes[1,0].set_xlabel('قالدۇقىلار')
axes[1,0].set_ylabel('تەكرارلىنىش')
axes[1,0].set_title('قالدۇقىلار تارقىلىشى')

# QQ-پلوت
sm.qqplot(residuals, line='45', ax=axes[1,1])
axes[1,1].set_title('قالدۇقىلار QQ-پلوتى')

plt.tight_layout()
plt.show()

# 5. باشقىلاش
print("\n=== باشقىلاش ===")
new_hours = np.array([[10], [20], [30]])  # يېڭى ئۆگىنىش ۋاقتى
predicted_scores = model_sklearn.predict(new_hours)

for hours, score in zip(new_hours.flatten(), predicted_scores):
    print(f"ئۆگىنىش ۋاقتى {hours} سائەت → پىششىقلاپ بېرىلگەن نەتىجە: {score:.1f} نۇقتا")

# 6. Statsmodels تەپسىلاتلىق نەتىجىسى
print("\n=== Statsmodels تەپسىلاتلىق نەتىجىسى ===")
print(model_sm.summary())

# خۇلاسە
print("\n=== خۇلاسە ===")
print("1. ئۆگىنىش ۋاقتى بىلەن ئىمتاھان نەتىجىسى ئوتتۇرىسىدا كۈچلۈك مۇسبەت باغلىنىش بار")
print("2. R² قىممىتى ئېنىقلىش دەرىجىسىنى كۆرسىتىدۇ")
print("3. قالدۇقىلار تەھلىلى مودېل مۇۋاپىقلىقىنى باھالىيدۇ")`
        }
      ]
    }
  ];

  // رەڭ كودى
  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', gradient: 'from-blue-100 to-blue-50' },
      green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', gradient: 'from-green-100 to-green-50' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', gradient: 'from-purple-100 to-purple-50' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', gradient: 'from-orange-100 to-orange-50' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* ماۋزۇ */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 p-4 rounded-2xl">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {language === 'ug' ? 'ئىستاتىستىكىلىق سىناق 2-دەرىجىلىك' : 'Statistical Test Level 2'}
              </h1>
              <p className="text-gray-600 text-lg mt-2">
                {language === 'ug' ? 'تولۇق دەرسلىك - ئۇيغۇرچە/ئىنگلىزچە' : 'Complete Course - Uyghur/English Bilingual'}
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl border border-gray-300 p-1 flex">
              <button
                onClick={() => setLanguage('ug')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  language === 'ug'
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                ئۇيغۇرچە
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>

        {/* ئاساسىي تېمىلار */}
        <div className="space-y-8">
          {mainTopics.map((topic) => {
            const colors = getColorClasses(topic.color);
            const Icon = topic.icon;
            
            return (
              <div key={topic.id} className={`rounded-2xl border-2 ${colors.border} bg-white overflow-hidden shadow-lg`}>
                {/* تېما ماۋزۇسى */}
                <div 
                  className={`p-6 ${colors.bg} cursor-pointer hover:opacity-95 transition-all`}
                  onClick={() => setActiveTopic(activeTopic === topic.id ? null : topic.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`bg-gradient-to-r ${colors.gradient} p-3 rounded-xl`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{t(topic.title)}</h2>
                        <p className="text-gray-600 mt-1">{t(topic.description)}</p>
                      </div>
                    </div>
                    {activeTopic === topic.id ? (
                      <ChevronDown className="w-6 h-6 text-gray-600" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                </div>

                {/* تېما تەپسىلاتلىرى */}
                {activeTopic === topic.id && (
                  <div className="p-6 space-y-6">
                    {topic.subtopics.map((subtopic) => {
                      const isActive = activeSubTopic === subtopic.id;
                      
                      return (
                        <div key={subtopic.id} className="border rounded-xl overflow-hidden">
                          <div 
                            className="p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                            onClick={() => setActiveSubTopic(isActive ? null : subtopic.id)}
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-semibold text-gray-800">{t(subtopic.title)}</h3>
                              {isActive ? (
                                <ChevronDown className="w-5 h-5 text-gray-600" />
                              ) : (
                                <ChevronRight className="w-5 h-5 text-gray-600" />
                              )}
                            </div>
                            {!isActive && (
                              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                                {t(subtopic.learningObjective)}
                              </p>
                            )}
                          </div>
                          
                          {isActive && (
                            <div className="p-6 bg-white space-y-6">
                              {/* ئۆگىنىش مەقسىتى */}
                              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
                                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                                  <Target className="w-5 h-5 text-blue-600" />
                                  {language === 'ug' ? 'ئۆگىنىش مەقسىتى' : 'Learning Objective'}
                                </h4>
                                <p className="text-gray-700">{t(subtopic.learningObjective)}</p>
                              </div>

                              {/* ئۆگىنىش ئۈچۈن تېرمىنلار */}
                              <div>
                                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                                  <BookOpen className="w-5 h-5 text-green-600" />
                                  {language === 'ug' ? 'ئۆگىنىش ئۈچۈن تېرمىنلار' : 'Key Terms to Learn'}
                                </h4>
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

                              {/* مىسال */}
                              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                                  {language === 'ug' ? 'مىسال' : 'Example'}
                                </h4>
                                <p className="text-gray-700">{t(subtopic.example)}</p>
                              </div>

                              {/* كود مىسالى */}
                              {subtopic.code && (
                                <div className="border rounded-xl overflow-hidden">
                                  <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <Code className="w-5 h-5" />
                                      <span className="font-mono">Python</span>
                                    </div>
                                    <button
                                      onClick={() => navigator.clipboard.writeText(subtopic.code)}
                                      className="text-gray-300 hover:text-white transition-colors"
                                      title={language === 'ug' ? 'كۆچۈرۈش' : 'Copy'}
                                    >
                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                      </svg>
                                    </button>
                                  </div>
                                  <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto text-sm">
                                    {subtopic.code}
                                  </pre>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ئىستاتىستىكىلىق سىناق ئۇچۇرلىرى */}
        <div className="mt-12 bg-gradient-to-r from-red-800 to-orange-800 text-white p-8 rounded-2xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-400" />
              {language === 'ug' ? 'ئىستاتىستىكىلىق سىناق 2-دەرىجە ئۇچۇرلىرى' : 'Statistical Test Level 2 Information'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-4 rounded-xl">
                <h3 className="font-bold text-lg mb-3">{language === 'ug' ? 'سىناق تۈزۈمى' : 'Exam Structure'}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span>{language === 'ug' ? 'ۋاقىت: 90 مىنۇت' : 'Duration: 90 minutes'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-yellow-400" />
                    <span>{language === 'ug' ? 'سۇئال سانى: 30-40' : 'Questions: 30-40'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-400" />
                    <span>{language === 'ug' ? 'تۈر: كۆپ تاللاش' : 'Format: Multiple Choice'}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 p-4 rounded-xl">
                <h3 className="font-bold text-lg mb-3">{language === 'ug' ? 'تاللاش دائىرىسى' : 'Exam Content'}</h3>
                <ul className="space-y-2">
                  <li>• {language === 'ug' ? 'دېتا تەھلىلى' : 'Data Analysis'}</li>
                  <li>• {language === 'ug' ? 'ئېھتىمالىيەت مودېللىرى' : 'Probability Models'}</li>
                  <li>• {language === 'ug' ? 'ئىستاتىستىكىلىق باھالاش' : 'Statistical Inference'}</li>
                  <li>• {language === 'ug' ? 'رېگرېسسىيە تەھلىلى' : 'Regression Analysis'}</li>
                </ul>
              </div>
              
              <div className="bg-white/10 p-4 rounded-xl">
                <h3 className="font-bold text-lg mb-3">{language === 'ug' ? 'ئۆتۈش ئۆلچىمى' : 'Passing Criteria'}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-yellow-400" />
                    <span>{language === 'ug' ? 'ئۆتۈش نىسبىتى: 60%' : 'Passing Score: 60%'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-yellow-400" />
                    <span>{language === 'ug' ? 'ئىمتاھان ۋاقتى: يىلدا 2 قېتىم' : 'Exam Dates: Twice yearly'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-yellow-400" />
                    <span>{language === 'ug' ? 'دىل: ئۇيغۇرچە/ئىنگلىزچە' : 'Language: Uyghur/English'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ئاخىرقى خاتىرە */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span>{language === 'ug' ? 'ئىستاتىستىكىلىق سىناق 2-دەرىجە رەسمىي دەرىجىلىك دەرىجىسى' : 'Statistical Test Level 2 Official Syllabus'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>{language === 'ug' ? 'ئىستاتىستىكىلىق جەمئىيەت تەستىقىدىن ئۆتكەن' : 'Certified by Statistical Society'}</span>
            </div>
          </div>
          <p className="italic">
            {language === 'ug' 
              ? 'بۇ مەزمۇن ئىستاتىستىكىلىق سىناق 2-دەرىجىلىك دەرىجىلىك دەرىجىسى بويىچە تۈزۈلگەن بولۇپ، ئاكادېمىك دەقىقلىق ۋە ئەمەلىي قوللىنىشقا قاراپ تەييارلاندى.'
              : 'This material is structured according to the official Statistical Test Level 2 syllabus, prepared for academic accuracy and practical application.'
            }
          </p>
        </footer>
      </div>
    </div>
  );
};

export default StatisticsLevel2UG;