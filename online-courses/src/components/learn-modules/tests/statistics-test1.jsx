// statistics-test1.jsx
import React, { useState } from 'react';
import {
  Calculator,
  BarChart3,
  TrendingUp,
  Database,
  Filter,
  PieChart,
  LineChart,
  Target,
  Award,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Code,
  Cpu,
  Globe,
  Shield,
  Users,
  Zap,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  HelpCircle,
  RefreshCw,
  Download,
  Upload,
  Settings
} from 'lucide-react';

const StatisticsTest1 = () => {
  const [activeTopic, setActiveTopic] = useState(null);
  const [activeSubTopic, setActiveSubTopic] = useState(null);
  const [language, setLanguage] = useState('ug'); // 'ug', 'en', 'ja'

  // تىل تاللاش
  const t = (obj) => {
    if (language === 'ug') return obj.ug || obj.en || obj.ja;
    if (language === 'en') return obj.en || obj.ja;
    return obj.ja;
  };

  // ئاساسىي تېمىلار
  const mainTopics = [
    {
      id: 'probability',
      title: {
        ja: '確率と確率変数',
        en: 'Probability and Random Variables',
        ug: 'ئېھتىمالىيەت ۋە ئېھتىمالىيەتلىك ئۆزگەرگۈچىلەر'
      },
      icon: Calculator,
      color: 'blue',
      subtopics: [
        {
          id: 'basic-probability',
          title: { ja: '事象と確率', en: 'Events and Probability', ug: 'ۋەقەلەر ۋە ئېھتىمالىيەت' },
          learningObjective: {
            ja: '確率と確率分布に関する基礎的な事項を理解し，種々の場面に応じた確率計算が正しくできる．',
            en: 'Understand fundamental concepts of probability and distributions, and perform probability calculations correctly for various scenarios.',
            ug: 'ئېھتىمالىيەت ۋە تارقىلىشلارنىڭ ئاساسىي چۈشەنچىلىرىنى چۈشىنىپ، تۈرلۈك ئەھۋاللاردا ئېھتىمالىيەت ھېسابلىرىنى توغرا ئىجرا قىلالايدۇ.'
          },
          terms: [
            { ja: '確率の計算', en: 'Probability Calculation', ug: 'ئېھتىمالىيەت ھېسابلىشى' },
            { ja: '統計的独立', en: 'Statistical Independence', ug: 'ئىستاتىستىكىلىق مۇستەقىللىق' },
            { ja: '条件付き確率', en: 'Conditional Probability', ug: 'شەرتلىك ئېھتىمالىيەت' },
            { ja: 'ベイズの定理', en: "Bayes' Theorem", ug: 'بېيز نەزەرىيىسى' },
            { ja: '包除原理', en: 'Inclusion-Exclusion Principle', ug: 'قوشۇش-ئايرىش پرىنسىپى' }
          ],
          example: {
            ja: '2つのサイコロを投げて合計が7になる確率は？ → 6/36 = 1/6',
            en: 'Probability that sum of two dice is 7 → 6/36 = 1/6',
            ug: 'ئىككى سانلىق تاش تاشلىغاندا جەم قىممىتى 7 بولۇش ئېھتىمالىيىتى؟ → 6/36 = 1/6'
          },
          code: `# ئىككى سانلىق تاشنىڭ ئېھتىمالىيىتى
import itertools

dice_outcomes = list(itertools.product(range(1,7), repeat=2))
sum_is_7 = [sum(d) for d in dice_outcomes if sum(d) == 7]

print(f"بارلىق ئەھۋال سانى: {len(dice_outcomes)}")
print(f"جەم قىممىتى 7 بولغان ئەھۋال سانى: {len(sum_is_7)}")
print(f"ئېھتىمالىيەت: {len(sum_is_7)}/{len(dice_outcomes)} = {len(sum_is_7)/len(dice_outcomes):.3f}")`
        },
        {
          id: 'distribution-functions',
          title: { ja: '確率分布関数', en: 'Probability Distribution Functions', ug: 'ئېھتىمالىيەت تارقىلىشى فۇنكسىيىلىرى' },
          learningObjective: {
            ja: '確率関数，確率密度関数，累積分布関数など，確率分布を特徴づける関数の定義を正しく理解する．',
            en: 'Correctly understand the definitions of functions characterizing probability distributions, such as probability functions, probability density functions, and cumulative distribution functions.',
            ug: 'ئېھتىمالىيەت فۇنكسىيىسى، ئېھتىمالىيەت زىچلىق فۇنكسىيىسى، توپلاش تارقىلىش فۇنكسىيىسى قاتارلىق ئېھتىمالىيەت تارقىلىشلىرىنى خاراكتېرلەيدىغان فۇنكسىيىلەرنىڭ تەرىپىنى توغرا چۈشىنىدۇ.'
          },
          terms: [
            { ja: '確率関数', en: 'Probability Function', ug: 'ئېھتىمالىيەت فۇنكسىيىسى' },
            { ja: '確率密度関数', en: 'Probability Density Function (PDF)', ug: 'ئېھتىمالىيەت زىچلىق فۇنكسىيىسى' },
            { ja: '累積分布関数', en: 'Cumulative Distribution Function (CDF)', ug: 'توپلاش تارقىلىش فۇنكسىيىسى' },
            { ja: '生存関数', en: 'Survival Function', ug: 'ھاياتلىق فۇنكسىيىسى' },
            { ja: 'ハザード関数', en: 'Hazard Function', ug: 'خەتەر فۇنكسىيىسى' },
            { ja: '同時分布', en: 'Joint Distribution', ug: 'بىرلىكتە تارقىلىش' },
            { ja: '周辺分布', en: 'Marginal Distribution', ug: 'چەت تارقىلىش' },
            { ja: '条件付き分布', en: 'Conditional Distribution', ug: 'شەرتلىك تارقىلىش' }
          ],
          example: {
            ja: '標準正規分布のPDF: f(x) = (1/√(2π)) exp(-x²/2)',
            en: 'PDF of Standard Normal: f(x) = (1/√(2π)) exp(-x²/2)',
            ug: 'ستاندارت نورمال تارقىلىشنىڭ PDF: f(x) = (1/√(2π)) exp(-x²/2)'
          },
          code: `# PDF, CDF, Survival ۋە Hazard فۇنكسىيىلىرى
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm

x = np.linspace(-4, 4, 1000)
pdf = norm.pdf(x)
cdf = norm.cdf(x)
survival = 1 - cdf
hazard = pdf / survival

fig, axes = plt.subplots(2, 2, figsize=(10, 8))
axes[0,0].plot(x, pdf); axes[0,0].set_title('PDF (ئېھتىمالىيەت زىچلىق فۇنكسىيىسى)')
axes[0,1].plot(x, cdf); axes[0,1].set_title('CDF (توپلاش تارقىلىش فۇنكسىيىسى)')
axes[1,0].plot(x, survival); axes[1,0].set_title('Survival (ھاياتلىق فۇنكسىيىسى)')
axes[1,1].plot(x, hazard); axes[1,1].set_title('Hazard (خەتەر فۇنكسىيىسى)')
plt.tight_layout()
plt.show()`
        },
        {
          id: 'distribution-characteristics',
          title: { ja: '分布の特性値', en: 'Distribution Characteristics', ug: 'تارقىلىشنىڭ خۇسۇسىيەت قىممەتلىرى' },
          learningObjective: {
            ja: '分布の各種特性値の意味を理解すると共に，特性値の値から分布の形状が推測できる．',
            en: 'Understand the meaning of various distribution characteristics and infer distribution shape from characteristic values.',
            ug: 'تارقىلىشنىڭ تۈرلۈك خۇسۇسىيەت قىممەتلىرىنىڭ مەنىسىنى چۈشىنىپ، خۇسۇسىيەت قىممەتلىرىدىن تارقىلىش شەكلىنى چۈشىنىدۇ.'
          },
          terms: [
            { ja: '期待値', en: 'Expected Value', ug: 'كۈتۈلگەن قىممەت' },
            { ja: '分散', en: 'Variance', ug: 'ۋارىيانس' },
            { ja: '標準偏差', en: 'Standard Deviation', ug: 'ستاندارت ئېغىش' },
            { ja: '歪度', en: 'Skewness', ug: 'قىيىشلىق' },
            { ja: '尖度', en: 'Kurtosis', ug: 'ئۇچلۇقلۇق' },
            { ja: '変動係数', en: 'Coefficient of Variation', ug: 'ئۆزگىرىش كوئېففىتسېنتى' },
            { ja: 'パーセント点', en: 'Percentile', ug: 'پىرسېنتىل' },
            { ja: '中央値', en: 'Median', ug: 'ئوتتۇرا قىممەت' },
            { ja: '四分位数', en: 'Quartiles', ug: 'تۆتتىن بىرلىك قىممەتلەر' },
            { ja: '最頻値', en: 'Mode', ug: 'ئەڭ كۆپ كۆرۈلگەن قىممەت' },
            { ja: '共分散', en: 'Covariance', ug: 'كۆۋارىيانس' },
            { ja: '相関係数', en: 'Correlation Coefficient', ug: 'كۆرېلاتسىيە كوئېففىتسېنتى' }
          ],
          example: {
            ja: '正規分布: 歪度=0, 尖度=3 (正規分布からの超過尖度=0)',
            en: 'Normal: Skewness=0, Kurtosis=3 (Excess Kurtosis=0)',
            ug: 'نورمال تارقىلىش: قىيىشلىق=0, ئۇچلۇقلۇق=3 (نورمالدىن ئاشقان ئۇچلۇقلۇق=0)'
          },
          code: `# تارقىلىش خۇسۇسىيەتلىرىنى ھېسابلاش
import numpy as np
from scipy.stats import skew, kurtosis

# سانلىق مەلۇمات ھاسىل قىلىش
np.random.seed(42)
normal_data = np.random.normal(0, 1, 1000)
exp_data = np.random.exponential(1, 1000)

def calculate_stats(data, name):
    stats = {
        'تەپسىلات': name,
        'ئوتتۇرىچە قىممەت': np.mean(data),
        'ۋارىيانس': np.var(data),
        'ستاندارت ئېغىش': np.std(data),
        'قىيىشلىق': skew(data),
        'ئۇچلۇقلۇق': kurtosis(data),
        'ئۆزگىرىش كوئېففىتسېنتى': np.std(data)/np.mean(data) if np.mean(data) != 0 else np.nan,
        'ئوتتۇرا قىممەت': np.median(data)
    }
    return stats

print("نورمال تارقىلىش:", calculate_stats(normal_data, "نورمال"))
print("ئېكىسپونېنتسىيال تارقىلىش:", calculate_stats(exp_data, "ئېكىسپونېنتسىيال"))`
        }
      ]
    },
    {
      id: 'distributions',
      title: {
        ja: '種々の確率分布',
        en: 'Various Probability Distributions',
        ug: 'تۈرلۈك ئېھتىمالىيەت تارقىلىشلىرى'
      },
      icon: BarChart3,
      color: 'green',
      subtopics: [
        {
          id: 'discrete-distributions',
          title: { ja: '離散型分布', en: 'Discrete Distributions', ug: 'ئۈزۈك تارقىلىشلار' },
          learningObjective: {
            ja: '基本的な離散型分布を理解すると共に，各種の確率計算ができる．',
            en: 'Understand basic discrete distributions and perform various probability calculations.',
            ug: 'ئاساسىي ئۈزۈك تارقىلىشلارنى چۈشىنىپ، تۈرلۈك ئېھتىمالىيەت ھېسابلىرىنى ئىجرا قىلالايدۇ.'
          },
          terms: [
            { ja: '一様分布', en: 'Uniform Distribution', ug: 'بىر تەرەپلىمە تارقىلىش' },
            { ja: 'ベルヌーイ分布', en: 'Bernoulli Distribution', ug: 'بېرنۇي تارقىلىشى' },
            { ja: '二項分布', en: 'Binomial Distribution', ug: 'بىنوم تارقىلىشى' },
            { ja: '超幾何分布', en: 'Hypergeometric Distribution', ug: 'ھىپېرگېئومېتىر تارقىلىشى' },
            { ja: '幾何分布', en: 'Geometric Distribution', ug: 'گېئومېتىر تارقىلىشى' },
            { ja: 'ポアソン分布', en: 'Poisson Distribution', ug: 'پواسون تارقىلىشى' },
            { ja: '負の二項分布', en: 'Negative Binomial Distribution', ug: 'مەنفىي بىنوم تارقىلىشى' },
            { ja: '多項分布', en: 'Multinomial Distribution', ug: 'كۆپ خىللىق تارقىلىش' }
          ],
          example: {
            ja: 'ポアソン分布(λ=3): P(X=2) = e⁻³·3²/2! ≈ 0.2240',
            en: 'Poisson(λ=3): P(X=2) = e⁻³·3²/2! ≈ 0.2240',
            ug: 'پواسون تارقىلىشى(λ=3): P(X=2) = e⁻³·3²/2! ≈ 0.2240'
          },
          code: `# ئۈزۈك تارقىلىشلارنىڭ سېلىشتۇرۇشى
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import binom, poisson, geom

fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# 1. بېرنۇي تارقىلىشى (p=0.6)
x_bern = [0, 1]
p_bern = [0.4, 0.6]
axes[0,0].bar(x_bern, p_bern, alpha=0.7)
axes[0,0].set_title('بېرنۇي تارقىلىشى (p=0.6)')
axes[0,0].set_xlabel('X')
axes[0,0].set_ylabel('ئېھتىمالىيەت')

# 2. بىنوم تارقىلىشى (n=10, p=0.5)
x_binom = np.arange(0, 11)
y_binom = binom.pmf(x_binom, n=10, p=0.5)
axes[0,1].bar(x_binom, y_binom, alpha=0.7)
axes[0,1].set_title('بىنوم تارقىلىشى (n=10, p=0.5)')

# 3. پواسون تارقىلىشى (λ=3)
x_poisson = np.arange(0, 11)
y_poisson = poisson.pmf(x_poisson, mu=3)
axes[1,0].bar(x_poisson, y_poisson, alpha=0.7)
axes[1,0].set_title('پواسون تارقىلىشى (λ=3)')

# 4. گېئومېتىر تارقىلىشى (p=0.4)
x_geom = np.arange(1, 11)
y_geom = geom.pmf(x_geom, p=0.4)
axes[1,1].bar(x_geom, y_geom, alpha=0.7)
axes[1,1].set_title('گېئومېتىر تارقىلىشى (p=0.4)')

plt.tight_layout()
plt.show()`
        },
        {
          id: 'continuous-distributions',
          title: { ja: '連続型分布', en: 'Continuous Distributions', ug: 'داۋاملىق تارقىلىشلار' },
          learningObjective: {
            ja: '基本的な連続型分布を理解すると共に，各種の確率計算ができる．',
            en: 'Understand basic continuous distributions and perform various probability calculations.',
            ug: 'ئاساسىي داۋاملىق تارقىلىشلارنى چۈشىنىپ، تۈرلۈك ئېھتىمالىيەت ھېسابلىرىنى ئىجرا قىلالايدۇ.'
          },
          terms: [
            { ja: '一様分布', en: 'Uniform Distribution', ug: 'بىر تەرەپلىمە تارقىلىش' },
            { ja: '正規分布', en: 'Normal Distribution', ug: 'نورمال تارقىلىش' },
            { ja: '指数分布', en: 'Exponential Distribution', ug: 'ئېكىسپونېنتسىيال تارقىلىش' },
            { ja: 'ガンマ分布', en: 'Gamma Distribution', ug: 'گامما تارقىلىشى' },
            { ja: 'ベータ分布', en: 'Beta Distribution', ug: 'بېتا تارقىلىشى' },
            { ja: 'コーシー分布', en: 'Cauchy Distribution', ug: 'كوشى تارقىلىشى' },
            { ja: '対数正規分布', en: 'Log-normal Distribution', ug: 'لوگارىفمىلىق نورمال تارقىلىش' },
            { ja: 'ワイブル分布', en: 'Weibull Distribution', ug: 'ۋېيبول تارقىلىشى' },
            { ja: 'ロジスティック分布', en: 'Logistic Distribution', ug: 'لوجىستىك تارقىلىش' },
            { ja: '多変量正規分布', en: 'Multivariate Normal Distribution', ug: 'كۆپ ئۆزگەرگۈچىلىك نورمال تارقىلىش' }
          ],
          example: {
            ja: '指数分布: 平均 1/λ，P(X > t) = e^(-λt)',
            en: 'Exponential: Mean 1/λ, P(X > t) = e^(-λt)',
            ug: 'ئېكىسپونېنتسىيال تارقىلىش: ئوتتۇرىچە 1/λ،P(X > t) = e^(-λt)'
          },
          code: `# داۋاملىق تارقىلىشلارنىڭ سېلىشتۇرۇشى
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm, expon, gamma, beta

fig, axes = plt.subplots(2, 2, figsize=(12, 10))
x = np.linspace(0, 5, 1000)

# 1. نورمال تارقىلىش (μ=0, σ=1)
y_norm = norm.pdf(x, 0, 1)
axes[0,0].plot(x, y_norm, 'b-', linewidth=2)
axes[0,0].set_title('نورمال تارقىلىش (μ=0, σ=1)')
axes[0,0].fill_between(x, y_norm, alpha=0.3)

# 2. ئېكىسپونېنتسىيال تارقىلىش (λ=1)
y_expon = expon.pdf(x, scale=1)
axes[0,1].plot(x, y_expon, 'r-', linewidth=2)
axes[0,1].set_title('ئېكىسپونېنتسىيال تارقىلىش (λ=1)')

# 3. گامما تارقىلىشى (α=2, β=1)
y_gamma = gamma.pdf(x, a=2, scale=1)
axes[1,0].plot(x, y_gamma, 'g-', linewidth=2)
axes[1,0].set_title('گامما تارقىلىشى (α=2, β=1)')

# 4. بېتا تارقىلىشى (α=2, β=5)
x_beta = np.linspace(0, 1, 1000)
y_beta = beta.pdf(x_beta, 2, 5)
axes[1,1].plot(x_beta, y_beta, 'm-', linewidth=2)
axes[1,1].set_title('بېتا تارقىلىشى (α=2, β=5)')

for ax in axes.flat:
    ax.set_xlabel('x')
    ax.set_ylabel('PDF')
    ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()`
        },
        {
          id: 'sampling-distributions',
          title: { ja: '標本分布', en: 'Sampling Distributions', ug: 'نۇمۇنە تارقىلىشلىرى' },
          learningObjective: {
            ja: '標本分布を理解し，応用に用いることができる．',
            en: 'Understand sampling distributions and apply them in practice.',
            ug: 'نۇمۇنە تارقىلىشلىرىنى چۈشىنىپ، ئەمەلىيەتتە قوللىلالايدۇ.'
          },
          terms: [
            { ja: 't分布', en: "t-Distribution", ug: 't-تارقىلىش' },
            { ja: 'カイ二乗分布', en: 'Chi-squared Distribution', ug: 'خى-كۋادرات تارقىلىشى' },
            { ja: 'F分布', en: 'F-Distribution', ug: 'F-تارقىلىش' },
            { ja: '標本平均の分布', en: 'Distribution of Sample Mean', ug: 'نۇمۇنە ئوتتۇرىچە قىممىتىنىڭ تارقىلىشى' },
            { ja: '標本分散の分布', en: 'Distribution of Sample Variance', ug: 'نۇمۇنە ۋارىيانسىنىڭ تارقىلىشى' }
          ],
          example: {
            ja: '正規母集団からの標本平均は N(μ, σ²/n) に従う',
            en: 'Sample mean from normal population follows N(μ, σ²/n)',
            ug: 'نورمال ئانا توپلامدىن ئېلىنغان نۇمۇنە ئوتتۇرىچە قىممىتى N(μ, σ²/n) گە بويسۇنىدۇ'
          },
          code: `# نۇمۇنە تارقىلىشلىرىنىڭ سېلىشتۇرۇشى
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import t, chi2, f

fig, axes = plt.subplots(2, 2, figsize=(12, 10))
x_t = np.linspace(-4, 4, 1000)
x_chi2 = np.linspace(0, 20, 1000)
x_f = np.linspace(0, 5, 1000)

# 1. t-تارقىلىش (تۈرلۈك ئەركىنلىك دەرىجىلىرى)
for df in [1, 5, 10, 30]:
    axes[0,0].plot(x_t, t.pdf(x_t, df), label=f'df={df}')
axes[0,0].set_title('t-تارقىلىشى (تۈرلۈك df)')
axes[0,0].legend()
axes[0,0].plot(x_t, norm.pdf(x_t, 0, 1), 'k--', label='نورمال', alpha=0.5)

# 2. خى-كۋادرات تارقىلىشى
for df in [2, 4, 6, 10]:
    axes[0,1].plot(x_chi2, chi2.pdf(x_chi2, df), label=f'df={df}')
axes[0,1].set_title('خى-كۋادرات تارقىلىشى')
axes[0,1].legend()

# 3. F-تارقىلىش
for dfn, dfd in [(5,10), (10,10), (10,5), (20,20)]:
    axes[1,0].plot(x_f, f.pdf(x_f, dfn, dfd), label=f'dfn={dfn}, dfd={dfd}')
axes[1,0].set_title('F-تارقىلىش')
axes[1,0].legend()

# 4. نۇمۇنە ئوتتۇرىچە قىممىتىنىڭ تارقىلىشى
np.random.seed(42)
population = np.random.normal(0, 1, 10000)
sample_means = [np.mean(np.random.choice(population, 30)) for _ in range(1000)]
axes[1,1].hist(sample_means, bins=30, density=True, alpha=0.7)
x_fit = np.linspace(-1, 1, 100)
axes[1,1].plot(x_fit, norm.pdf(x_fit, 0, 1/np.sqrt(30)), 'r-', linewidth=2)
axes[1,1].set_title('نۇمۇنە ئوتتۇرىچە قىممىتى تارقىلىشى (n=30)')

plt.tight_layout()
plt.show()`
        }
      ]
    },
    {
      id: 'estimation',
      title: {
        ja: '統計的推測（推定）',
        en: 'Statistical Inference (Estimation)',
        ug: 'ئىستاتىستىكىلىق باھالاش (تەخمىنلەش)'
      },
      icon: TrendingUp,
      color: 'purple',
      subtopics: [
        {
          id: 'likelihood-mle',
          title: { ja: '尤度と最尤推定', en: 'Likelihood and MLE', ug: 'مۇۋاپىقلىق ۋە ئەڭ چوڭ مۇۋاپىقلىق باھالىشى' },
          learningObjective: {
            ja: '尤度などの統計的推測に重要な役割を果たす概念を理解する．',
            en: 'Understand concepts like likelihood that play important roles in statistical inference.',
            ug: 'مۇۋاپىقلىق قاتارلىق ئىستاتىستىكىلىق باھالاشتا مۇھىم رول ئوينايدىغان چۈشەنچىلەرنى چۈشىنىدۇ.'
          },
          terms: [
            { ja: '尤度関数', en: 'Likelihood Function', ug: 'مۇۋاپىقلىق فۇنكسىيىسى' },
            { ja: '対数尤度', en: 'Log-Likelihood', ug: 'لوگارىفمىلىق مۇۋاپىقلىق' },
            { ja: 'スコア関数', en: 'Score Function', ug: 'نەتىجە فۇنكسىيىسى' },
            { ja: '最尤推定', en: 'Maximum Likelihood Estimation', ug: 'ئەڭ چوڭ مۇۋاپىقلىق باھالىشى' },
            { ja: 'モーメント法', en: 'Method of Moments', ug: 'لەيلىش ئۇسۇلى' }
          ],
          example: {
            ja: '正規分布の μ の MLE は標本平均，σ² の MLE は標本分散 (n で割る)',
            en: 'MLE of μ in Normal is sample mean, MLE of σ² is sample variance (divided by n)',
            ug: 'نورمال تارقىلىشتىكى μ نىڭ MLE سى نۇمۇنە ئوتتۇرىچە قىممىتى، σ² نىڭ MLE سى نۇمۇنە ۋارىيانسى (n گە بۆلۈنۈپ)'
          },
          code: `# ئەڭ چوڭ مۇۋاپىقلىق باھالىشى (MLE)
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm
from scipy.optimize import minimize

# سانلىق مەلۇمات ھاسىل قىلىش
np.random.seed(42)
data = np.random.normal(5, 2, 100)  # μ=5, σ=2

# مۇۋاپىقلىق فۇنكسىيىسى
def neg_log_likelihood(params):
    mu, sigma = params
    if sigma <= 0:
        return np.inf
    return -np.sum(norm.logpdf(data, mu, sigma))

# باشلانغۇچ قىممەت
initial_guess = [np.mean(data), np.std(data)]

# ئەڭ چوڭ مۇۋاپىقلىقنى ئىزدەش
result = minimize(neg_log_likelihood, initial_guess, bounds=[(None, None), (0.01, None)])
mu_mle, sigma_mle = result.x

print(f"نۇمۇنە ئوتتۇرىچە قىممىتى: {np.mean(data):.4f}")
print(f"نۇمۇنە ستاندارت ئېغىشى: {np.std(data):.4f}")
print(f"MLE μ: {mu_mle:.4f}")
print(f"MLE σ: {sigma_mle:.4f}")

# مۇۋاپىقلىق چوڭلاشتۇرۇش جەريانىنى كۆرسىتىش
mu_range = np.linspace(4, 6, 100)
sigma_range = np.linspace(1.5, 2.5, 100)
likelihood_grid = np.zeros((len(mu_range), len(sigma_range)))

for i, mu in enumerate(mu_range):
    for j, sigma in enumerate(sigma_range):
        likelihood_grid[i, j] = np.sum(norm.logpdf(data, mu, sigma))

plt.figure(figsize=(10, 8))
plt.contour(sigma_range, mu_range, likelihood_grid, levels=20, cmap='viridis')
plt.plot(sigma_mle, mu_mle, 'r*', markersize=15, label='MLE')
plt.xlabel('σ')
plt.ylabel('μ')
plt.title('مۇۋاپىقلىق فۇنكسىيىسى')
plt.legend()
plt.colorbar(label='لوگارىفمىلىق مۇۋاپىقلىق')
plt.show()`
        },
        {
          id: 'estimator-properties',
          title: { ja: '点推定量の性質', en: 'Properties of Estimators', ug: 'نۇقتا باھالىغۇچنىڭ خۇسۇسىيەتلىرى' },
          learningObjective: {
            ja: 'パラメータの推定法の原理を知り，推定量の良さを数学的に立証できる．',
            en: 'Understand principles of parameter estimation methods and mathematically demonstrate estimator quality.',
            ug: 'پارامېتىر باھالىش ئۇسۇللىرىنىڭ پرىنسىپلىرىنى بىلىپ، باھالىغۇچنىڭ ياخشىلىقىنى ماتېماتىكىلىق ئىسپاتلىيالايدۇ.'
          },
          terms: [
            { ja: '不偏性', en: 'Unbiasedness', ug: 'ئەگرىسىزلىك' },
            { ja: '一致性', en: 'Consistency', ug: 'ماسلىشىش' },
            { ja: '有効性', en: 'Efficiency', ug: 'ئۈنۈملۈكلۈك' },
            { ja: '相対効率', en: 'Relative Efficiency', ug: 'نىسبىي ئۈنۈملۈكلۈك' },
            { ja: '十分性', en: 'Sufficiency', ug: 'يېتەرلىكلىك' }
          ],
          example: {
            ja: '標本分散 s² は σ² の不偏推定量ではない（n-1 で割ると不偏）',
            en: 'Sample variance s² is not unbiased for σ² (unbiased when divided by n-1)',
            ug: 'نۇمۇنە ۋارىيانسى s²، σ² نىڭ ئەگرىسىز باھالىغۇچى ئەمەس (n-1 گە بۆلگەندە ئەگرىسىز بولىدۇ)'
          },
          code: `# باھالىغۇچنىڭ خۇسۇسىيەتلىرىنى تەكشۈرۈش
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm

def simulate_estimators(n=30, simulations=1000):
    true_mean = 5
    true_var = 4
    
    # باھالىغۇچلارنى ساقلاش
    mean_estimates = []
    var_estimates_biased = []  # n گە بۆلگەن
    var_estimates_unbiased = []  # n-1 گە بۆلگەن
    
    for _ in range(simulations):
        sample = np.random.normal(true_mean, np.sqrt(true_var), n)
        
        mean_estimates.append(np.mean(sample))
        var_estimates_biased.append(np.var(sample))  # ئەسلىدىكى ۋارىيانس (n گە بۆلگەن)
        var_estimates_unbiased.append(np.var(sample, ddof=1))  # ئەگرىسىز ۋارىيانس (n-1 گە بۆلگەن)
    
    return {
        'mean_est': np.array(mean_estimates),
        'var_biased': np.array(var_estimates_biased),
        'var_unbiased': np.array(var_estimates_unbiased)
    }

# سىمۇلاتسىيە
results = simulate_estimators(n=30, simulations=5000)

fig, axes = plt.subplots(1, 3, figsize=(15, 5))

# 1. ئوتتۇرىچە قىممەت باھالىغۇچى
axes[0].hist(results['mean_est'], bins=50, alpha=0.7, density=True)
axes[0].axvline(x=5, color='r', linestyle='--', linewidth=2, label='ھەقىقىي قىممەت (5)')
axes[0].axvline(x=np.mean(results['mean_est']), color='g', linestyle='--', linewidth=2, label=f'ئوتتۇرىچە ({np.mean(results["mean_est"]):.3f})')
axes[0].set_title('ئوتتۇرىچە قىممەت باھالىغۇچى\n(ئەگرىسىزلىك)')
axes[0].legend()

# 2. ئەگرىلىك ۋارىيانس
axes[1].hist(results['var_biased'], bins=50, alpha=0.7, density=True)
axes[1].axvline(x=4, color='r', linestyle='--', linewidth=2, label='ھەقىقىي قىممەت (4)')
axes[1].axvline(x=np.mean(results['var_biased']), color='g', linestyle='--', linewidth=2, label=f'ئوتتۇرىچە ({np.mean(results["var_biased"]):.3f})')
axes[1].set_title('ۋارىيانس (ئەگرىلىك)\n(n گە بۆلۈلگەن)')
axes[1].legend()

# 3. ئەگرىسىز ۋارىيانس
axes[2].hist(results['var_unbiased'], bins=50, alpha=0.7, density=True)
axes[2].axvline(x=4, color='r', linestyle='--', linewidth=2, label='ھەقىقىي قىممەت (4)')
axes[2].axvline(x=np.mean(results['var_unbiased']), color='g', linestyle='--', linewidth=2, label=f'ئوتتۇرىچە ({np.mean(results["var_unbiased"]):.3f})')
axes[2].set_title('ۋارىيانس (ئەگرىسىز)\n(n-1 گە بۆلۈلگەن)')
axes[2].legend()

plt.tight_layout()
plt.show()

print(f"ئەگرىلىك ۋارىيانس ئوتتۇرىچە: {np.mean(results['var_biased']):.4f} (نۇمۇنە: {4*29/30:.4f})")
print(f"ئەگرىسىز ۋارىيانس ئوتتۇرىچە: {np.mean(results['var_unbiased']):.4f}")`
        },
        {
          id: 'interval-estimation',
          title: { ja: '区間推定', en: 'Interval Estimation', ug: 'ئارىلىق باھالىش' },
          learningObjective: {
            ja: '区間推定とは何かを理解し，信頼区間の性質を正しく述べることができる．',
            en: 'Understand what interval estimation is and correctly describe properties of confidence intervals.',
            ug: 'ئارىلىق باھالىشنىڭ نېمە ئىكەنلىكىنى چۈشىنىپ، ئىشەنچ ئارىلىقىنىڭ خۇسۇسىيەتلىرىنى توغرا چۈشەندۈرەلەيدۇ.'
          },
          terms: [
            { ja: '信頼係数', en: 'Confidence Coefficient', ug: 'ئىشەنچ كوئېففىتسېنتى' },
            { ja: '信頼区間', en: 'Confidence Interval', ug: 'ئىشەنچ ئارىلىقى' },
            { ja: '信頼水準', en: 'Confidence Level', ug: 'ئىشەنچ دەرىجىسى' },
            { ja: '信頼区間の構成', en: 'Construction of Confidence Intervals', ug: 'ئىشەنچ ئارىلىقىنىڭ قۇرۇلۇشى' },
            { ja: '被覆確率', en: 'Coverage Probability', ug: 'قاپلىشىش ئېھتىمالىيىتى' }
          ],
          example: {
            ja: '正規分布 N(μ, σ²) で σ² 既知の場合，95%信頼区間は [x̄ - 1.96σ/√n, x̄ + 1.96σ/√n]',
            en: 'For Normal N(μ, σ²) with known σ², 95% CI is [x̄ - 1.96σ/√n, x̄ + 1.96σ/√n]',
            ug: 'نورمال تارقىلىشى N(μ, σ²) دا σ² بېلىنلىك بولغاندا، 95% ئىشەنچ ئارىلىقى [x̄ - 1.96σ/√n, x̄ + 1.96σ/√n]'
          },
          code: `# ئىشەنچ ئارىلىقى ھېسابلاش ۋە قاپلىشىش ئېھتىمالىيىتى
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import t, norm

def calculate_coverage(n=30, simulations=1000, confidence=0.95):
    true_mean = 5
    true_std = 2
    
    coverage_count = 0
    intervals = []
    
    for _ in range(simulations):
        sample = np.random.normal(true_mean, true_std, n)
        sample_mean = np.mean(sample)
        sample_std = np.std(sample, ddof=1)
        
        # t-تارقىلىش ئارقىلىق ئىشەنچ ئارىلىقى
        t_critical = t.ppf((1 + confidence)/2, df=n-1)
        margin_error = t_critical * (sample_std / np.sqrt(n))
        
        ci_lower = sample_mean - margin_error
        ci_upper = sample_mean + margin_error
        intervals.append((ci_lower, ci_upper))
        
        # ھەقىقىي قىممەت ئىشەنچ ئارىلىقى ئىچىدە بارمۇ؟
        if ci_lower <= true_mean <= ci_upper:
            coverage_count += 1
    
    coverage_rate = coverage_count / simulations
    return intervals, coverage_rate

# سىمۇلاتسىيە
intervals, coverage_rate = calculate_coverage(n=30, simulations=1000)

print(f"قاپلىشىش ئېھتىمالىيىتى: {coverage_rate:.3f} (ئىدىيەلىك: 0.95)")
print(f"بىرىنچى 10 ئىشەنچ ئارىلىقى:")
for i, (lower, upper) in enumerate(intervals[:10]):
    contains = "✓" if lower <= 5 <= upper else "✗"
    print(f"  {i+1:2d}. [{lower:.3f}, {upper:.3f}] {contains}")

# ئىشەنچ ئارىلىقلىرىنى كۆرسىتىش
plt.figure(figsize=(12, 8))

# ئىلگىرىكى 50 ئىشەنچ ئارىلىقى
for i, (lower, upper) in enumerate(intervals[:50]):
    color = 'green' if lower <= 5 <= upper else 'red'
    plt.plot([lower, upper], [i, i], color=color, linewidth=2)
    plt.plot([lower, lower], [i-0.2, i+0.2], color=color, linewidth=2)
    plt.plot([upper, upper], [i-0.2, i+0.2], color=color, linewidth=2)

plt.axvline(x=5, color='blue', linestyle='--', linewidth=2, label='ھەقىقىي μ (5)')
plt.xlabel('قىممەت')
plt.ylabel('سىناق نومۇرى')
plt.title(f'ئىشەنچ ئارىلىقلىرى (ئالدىنقى 50، قاپلىشىش ئېھتىمالىيىتى: {coverage_rate:.3f})')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()`
        }
      ]
    },
    {
      id: 'testing',
      title: {
        ja: '統計的推測（検定）',
        en: 'Statistical Inference (Hypothesis Testing)',
        ug: 'ئىستاتىستىكىلىق باھالاش (گىپوتېزا سىناق)'
      },
      icon: Target,
      color: 'red',
      subtopics: [
        {
          id: 'hypothesis-basics',
          title: { ja: '検定の基礎', en: 'Basics of Hypothesis Testing', ug: 'گىپوتېزا سىناقنىڭ ئاساسى' },
          learningObjective: {
            ja: '統計的検定の原理を理解し，種々の最適化で検定が構成できる．',
            en: 'Understand principles of statistical hypothesis testing and construct tests based on various optimization criteria.',
            ug: 'ئىستاتىستىكىلىق گىپوتېزا سىناقنىڭ پرىنسىپلىرىنى چۈشىنىپ، تۈرلۈك ئوپتىماللاشتۇرۇش ئاساسىدا سىناقلارنى قۇرالايدۇ.'
          },
          terms: [
            { ja: '帰無仮説', en: 'Null Hypothesis (H₀)', ug: 'بولۇشسىزلىق گىپوتېزىسى' },
            { ja: '対立仮説', en: 'Alternative Hypothesis (H₁)', ug: 'تالىش گىپوتېزىسى' },
            { ja: 'P値', en: 'P-value', ug: 'P-قىممىتى' },
            { ja: '有意水準', en: 'Significance Level (α)', ug: 'مەنىۋىلىك دەرىجىسى' },
            { ja: '棄却域', en: 'Rejection Region', ug: 'رەت قىلىش رايونى' },
            { ja: '第一種の過誤', en: 'Type I Error', ug: 'بىرىنچى تۈرلۈك خاتالىق' },
            { ja: '第二種の過誤', en: 'Type II Error', ug: 'ئىككىنچى تۈرلۈك خاتالىق' },
            { ja: '検出力', en: 'Power of Test', ug: 'سىناق كۈچى' },
            { ja: '検出力曲線', en: 'Power Curve', ug: 'سىناق كۈچى قىيىسى' }
          ],
          example: {
            ja: '有意水準 α=0.05 で P値 < 0.05 ならば帰無仮説を棄却',
            en: 'At significance level α=0.05, reject null hypothesis if P-value < 0.05',
            ug: 'مەنىۋىلىك دەرىجىسى α=0.05 بولغاندا، ئەگەر P-قىممىتى < 0.05 بولسا بولۇشسىزلىق گىپوتېزىسىنى رەت قىلىش'
          },
          code: `# گىپوتېزا سىناق ۋە سىناق كۈچى
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import ttest_1samp, t, norm

def power_analysis(true_mean=5.2, n=30, alpha=0.05, simulations=1000):
    """سىناق كۈچىنى تەھلىل قىلىش"""
    null_mean = 5.0
    std_dev = 1.0
    
    reject_count = 0
    p_values = []
    
    for _ in range(simulations):
        sample = np.random.normal(true_mean, std_dev, n)
        t_stat, p_val = ttest_1samp(sample, null_mean)
        p_values.append(p_val)
        
        if p_val < alpha:
            reject_count += 1
    
    power = reject_count / simulations
    return power, np.array(p_values)

# تۈرلۈك ھەقىقىي ئوتتۇرىچە قىممەتلەر ئۈچۈن سىناق كۈچىنى ھېسابلاش
true_means = np.linspace(4.5, 5.5, 21)
powers = []

for mu in true_means:
    power, _ = power_analysis(true_mean=mu, n=30)
    powers.append(power)

# سىناق كۈچى قىيىسى
plt.figure(figsize=(10, 6))
plt.plot(true_means, powers, 'b-o', linewidth=2, markersize=6)
plt.axvline(x=5.0, color='r', linestyle='--', alpha=0.5, label='H₀: μ=5.0')
plt.axhline(y=0.05, color='g', linestyle='--', alpha=0.5, label='α=0.05 (Type I Error)')
plt.fill_between([4.5, 5.0], 0, 0.05, alpha=0.1, color='red', label='Type I Error Region')
plt.fill_between([5.0, 5.5], 0, 1, alpha=0.1, color='blue', label='Power Region')

plt.xlabel('ھەقىقىي ئوتتۇرىچە قىممەت (μ)')
plt.ylabel('سىناق كۈچى')
plt.title('تەك سانلىق مەلۇمات سىناق كۈچى قىيىسى (n=30, α=0.05)')
plt.grid(True, alpha=0.3)
plt.legend()
plt.show()

# P-قىممىتى تارقىلىشى
power_52, p_values_52 = power_analysis(true_mean=5.2)
power_50, p_values_50 = power_analysis(true_mean=5.0)

fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# H₀ ئەھۋالى (μ=5.0)
axes[0].hist(p_values_50, bins=30, alpha=0.7, density=True)
axes[0].axvline(x=0.05, color='r', linestyle='--', linewidth=2, label='α=0.05')
axes[0].set_title('H₀ دە (μ=5.0)\nType I Error ≈ 0.05')
axes[0].set_xlabel('P-قىممىتى')
axes[0].set_ylabel('ئېھتىمالىيەت')
axes[0].legend()

# H₁ ئەھۋالى (μ=5.2)
axes[1].hist(p_values_52, bins=30, alpha=0.7, density=True)
axes[1].axvline(x=0.05, color='r', linestyle='--', linewidth=2, label='α=0.05')
axes[1].set_title(f'H₁ دە (μ=5.2)\nسىناق كۈچى ≈ {power_52:.3f}')
axes[1].set_xlabel('P-قىممىتى')
axes[1].legend()

plt.tight_layout()
plt.show()`
        },
        {
          id: 'test-methods',
          title: { ja: '検定法の導出', en: 'Derivation of Test Methods', ug: 'سىناق ئۇسۇللىرىنىڭ چىقىرىلىشى' },
          learningObjective: {
            ja: '種々の最適化で検定が構成でき，その性質を数学的に立証できる．',
            en: 'Construct tests based on various optimization criteria and mathematically demonstrate their properties.',
            ug: 'تۈرلۈك ئوپتىماللاشتۇرۇش ئاساسىدا سىناقلارنى قۇرالايدۇ ۋە ئۇلارنىڭ خۇسۇسىيەتلىرىنى ماتېماتىكىلىق ئىسپاتلىيالايدۇ.'
          },
          terms: [
            { ja: 'ネイマン・ピアソンの基本定理', en: 'Neyman-Pearson Lemma', ug: 'نېيمان-پىيېرسون ئاساسىي تېئورېمىسى' },
            { ja: '尤度比検定', en: 'Likelihood Ratio Test', ug: 'مۇۋاپىقلىق نىسبىتى سىناقى' },
            { ja: 'ワルド型検定', en: 'Wald Test', ug: 'ۋالد سىناقى' },
            { ja: 'スコア型検定', en: 'Score Test', ug: 'نەتىجە سىناقى' },
            { ja: '一般化尤度比検定', en: 'Generalized Likelihood Ratio Test', ug: 'ئومۇمىيلاشتۇرۇلغان مۇۋاپىقلىق نىسبىتى سىناقى' }
          ],
          example: {
            ja: '尤度比検定統計量は -2logΛ が漸近的にカイ二乗分布に従う',
            en: 'Likelihood ratio test statistic -2logΛ asymptotically follows chi-squared distribution',
            ug: 'مۇۋاپىقلىق نىسبىتى سىناق ستاتىستىكىسى -2logΛ ئاسىمپتوتىك خى-كۋادرات تارقىلىشىغا بويسۇنىدۇ'
          },
          code: `# مۇۋاپىقلىق نىسبىتى سىناقى (LRT)
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import chi2, norm
from scipy.optimize import minimize

def likelihood_ratio_test(data, null_value=0):
    """
    H₀: μ = null_value vs H₁: μ ≠ null_value
    مۇۋاپىقلىق نىسبىتى سىناقى
    """
    n = len(data)
    
    # ئاساسىي مۇۋاپىقلىق (H₀ ئاستىدا)
    def log_likelihood_null(params):
        sigma = params[0]
        if sigma <= 0:
            return np.inf
        return np.sum(norm.logpdf(data, loc=null_value, scale=sigma))
    
    # ئومۇمىي مۇۋاپىقلىق (H₁ ئاستىدا)
    def log_likelihood_full(params):
        mu, sigma = params
        if sigma <= 0:
            return np.inf
        return np.sum(norm.logpdf(data, loc=mu, scale=sigma))
    
    # H₀ ئاستىدا ئەڭ چوڭ مۇۋاپىقلىق
    sigma0_mle = np.std(data)  # μ بېكىتىلگەندە، σ نىڭ MLE
    logL0 = log_likelihood_null([sigma0_mle])
    
    # H₁ ئاستىدا ئەڭ چوڭ مۇۋاپىقلىق
    mu_mle = np.mean(data)
    sigma_mle = np.std(data, ddof=1)
    logL1 = log_likelihood_full([mu_mle, sigma_mle])
    
    # مۇۋاپىقلىق نىسبىتى سىناق ستاتىستىكىسى
    LR_statistic = -2 * (logL0 - logL1)
    
    # P-قىممىتى
    p_value = 1 - chi2.cdf(LR_statistic, df=1)  # ئەركىنلىك دەرىجىسى: 1
    
    return {
        'LR_statistic': LR_statistic,
        'p_value': p_value,
        'logL0': logL0,
        'logL1': logL1,
        'mu_mle': mu_mle,
        'sigma_mle': sigma_mle
    }

# سىناقنى سىمۇلاتسىيە قىلىش
np.random.seed(42)
n_simulations = 1000
LR_stats_h0 = []
LR_stats_h1 = []

for _ in range(n_simulations):
    # H₀ ئاستىدا: μ=0
    data_h0 = np.random.normal(0, 1, 30)
    result_h0 = likelihood_ratio_test(data_h0, null_value=0)
    LR_stats_h0.append(result_h0['LR_statistic'])
    
    # H₁ ئاستىدا: μ=0.5
    data_h1 = np.random.normal(0.5, 1, 30)
    result_h1 = likelihood_ratio_test(data_h1, null_value=0)
    LR_stats_h1.append(result_h1['LR_statistic'])

# تارقىلىش كۆرسىتىش
fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# H₀ ئاستىدىكى تارقىلىش
axes[0].hist(LR_stats_h0, bins=30, alpha=0.7, density=True)
x_chi2 = np.linspace(0, 10, 1000)
axes[0].plot(x_chi2, chi2.pdf(x_chi2, df=1), 'r-', linewidth=2, label='χ²(1)')
axes[0].axvline(x=chi2.ppf(0.95, df=1), color='g', linestyle='--', alpha=0.7, label='95% نۇقتىسى')
axes[0].set_title('H₀ ئاستىدا مۇۋاپىقلىق نىسبىتى سىناق ستاتىستىكىسى')
axes[0].set_xlabel('LR = -2log(Λ)')
axes[0].set_ylabel('ئېھتىمالىيەت')
axes[0].legend()

# H₁ ئاستىدىكى تارقىلىش
axes[1].hist(LR_stats_h1, bins=30, alpha=0.7, density=True, label='H₁ تارقىلىشى')
axes[1].plot(x_chi2, chi2.pdf(x_chi2, df=1), 'r-', linewidth=2, label='χ²(1) (ئاساسىي تارقىلىش)')
axes[1].axvline(x=chi2.ppf(0.95, df=1), color='g', linestyle='--', alpha=0.7, label='95% نۇقتىسى')
axes[1].set_title('H₁ ئاستىدا مۇۋاپىقلىق نىسبىتى سىناق ستاتىستىكىسى')
axes[1].set_xlabel('LR = -2log(Λ)')
axes[1].legend()

plt.tight_layout()
plt.show()

# سىناق كۈچى ھېسابلاش
critical_value = chi2.ppf(0.95, df=1)
power = np.mean(np.array(LR_stats_h1) > critical_value)
print(f"سىناق كۈچى (μ=0.5 ئۈچۈن): {power:.3f}")
print(f"95% نۇقتا قىممىتى: {critical_value:.3f}")
print(f"H₀ ئاستىدىكى ئوتتۇرىچە LR: {np.mean(LR_stats_h0):.3f}")
print(f"H₁ ئاستىدىكى ئوتتۇرىچە LR: {np.mean(LR_stats_h1):.3f}")`
        },
        {
          id: 'normal-tests',
          title: { ja: '正規分布に関する検定', en: 'Tests Related to Normal Distribution', ug: 'نورمال تارقىلىشقا ئائىت سىناقلار' },
          learningObjective: {
            ja: '特に正規分布に関する検定を正しく理解すると共に，そのほかの代表的な分布に関する検定ができる．',
            en: 'Correctly understand tests related to normal distribution and perform tests for other representative distributions.',
            ug: 'نورمال تارقىلىشقا ئائىت سىناقلارنى توغرا چۈشىنىپ، باشقا ۋەكىللىك تارقىلىشلارغا ئائىت سىناقلارنى ئىجرا قىلالايدۇ.'
          },
          terms: [
            { ja: '一標本t検定', en: 'One-Sample t-Test', ug: 'تەك نۇمۇنە t-سىناق' },
            { ja: '二標本t検定', en: 'Two-Sample t-Test', ug: 'ئىككى نۇمۇنە t-سىناق' },
            { ja: '対応のあるt検定', en: 'Paired t-Test', ug: 'جۈپلەنگەن t-سىناق' },
            { ja: '分散の比の検定', en: 'Test for Ratio of Variances', ug: 'ۋارىيانسلار نىسبىتىنى سىناش' },
            { ja: '正規性の検定', en: 'Normality Test', ug: 'نورماللىق سىناقى' }
          ],
          example: {
            ja: '対応のあるt検定: d̄ = 標本平均差，検定統計量 t = d̄ / (s_d/√n) ～ t(n-1)',
            en: 'Paired t-test: d̄ = mean difference, test statistic t = d̄ / (s_d/√n) ～ t(n-1)',
            ug: 'جۈپلەنگەن t-سىناق: d̄ = نۇمۇنە پەرق ئوتتۇرىچە قىممىتى، سىناق ستاتىستىكىسى t = d̄ / (s_d/√n) ～ t(n-1)'
          },
          code: `# نورمال تارقىلىشقا ئائىت سىناقلار
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import ttest_1samp, ttest_rel, ttest_ind, levene, shapiro
from scipy.stats import f as f_dist

def demonstrate_normal_tests():
    np.random.seed(42)
    
    # 1. تەك نۇمۇنە t-سىناق
    print("=== تەك نۇمۇنە t-سىناق ===")
    sample1 = np.random.normal(5.2, 1.5, 30)
    t_stat1, p_val1 = ttest_1samp(sample1, popmean=5.0)
    print(f"نۇمۇنە ئوتتۇرىچە قىممىتى: {np.mean(sample1):.3f}")
    print(f"t-ساتاتىستىك: {t_stat1:.3f}")
    print(f"P-قىممىتى: {p_val1:.4f}")
    print(f"نەتىجە: {'H₀ نى رەت قىلىش' if p_val1 < 0.05 else 'H₀ نى قوبۇل قىلىش'}")
    
    # 2. ئىككى نۇمۇنە t-سىناق
    print("\n=== ئىككى نۇمۇنە t-سىناق ===")
    sample2 = np.random.normal(5.5, 1.5, 30)
    sample3 = np.random.normal(5.0, 1.5, 30)
    t_stat2, p_val2 = ttest_ind(sample2, sample3, equal_var=True)
    print(f"نۇمۇنە1 ئوتتۇرىچە: {np.mean(sample2):.3f}")
    print(f"نۇمۇنە2 ئوتتۇرىچە: {np.mean(sample3):.3f}")
    print(f"t-ساتاتىستىك: {t_stat2:.3f}")
    print(f"P-قىممىتى: {p_val2:.4f}")
    
    # 3. جۈپلەنگەن t-سىناق
    print("\n=== جۈپلەنگەن t-سىناق ===")
    before = np.random.normal(100, 15, 25)
    after = before + np.random.normal(8, 5, 25)  # كۆرۈنەرلىك پەرق
    t_stat3, p_val3 = ttest_rel(before, after)
    print(f"ئىلگىرى ئوتتۇرىچە: {np.mean(before):.1f}")
    print(f"كېيىن ئوتتۇرىچە: {np.mean(after):.1f}")
    print(f"پەرق ئوتتۇرىچە: {np.mean(after-before):.1f}")
    print(f"t-ساتاتىستىك: {t_stat3:.3f}")
    print(f"P-قىممىتى: {p_val3:.6f}")
    
    # 4. ۋارىيانسلار تەڭلىكى سىناقى (Levene سىناقى)
    print("\n=== ۋارىيانسلار تەڭلىكى سىناقى ===")
    stat_levene, p_levene = levene(sample2, sample3)
    print(f"Levene سىناق ستاتىستىكىسى: {stat_levene:.3f}")
    print(f"P-قىممىتى: {p_levene:.4f}")
    
    # 5. نورماللىق سىناقى (Shapiro-Wilk)
    print("\n=== نورماللىق سىناقى (Shapiro-Wilk) ===")
    stat_shapiro, p_shapiro = shapiro(sample1)
    print(f"Shapiro-Wilk ستاتىستىكىسى: {stat_shapiro:.3f}")
    print(f"P-قىممىتى: {p_shapiro:.4f}")
    
    return {
        'single_sample': (t_stat1, p_val1),
        'two_sample': (t_stat2, p_val2),
        'paired': (t_stat3, p_val3),
        'levene': (stat_levene, p_levene),
        'shapiro': (stat_shapiro, p_shapiro)
    }

# سىناقلارنى ئىجرا قىلىش
results = demonstrate_normal_tests()

# گىپوتېزا سىناق نەتىجىلىرىنى كۆرسىتىش
fig, axes = plt.subplots(2, 3, figsize=(15, 10))

# 1. تەك نۇمۇنە سىناق
np.random.seed(42)
sample = np.random.normal(5.2, 1.5, 30)
axes[0,0].hist(sample, bins=10, alpha=0.7, density=True)
x_range = np.linspace(1, 9, 1000)
axes[0,0].plot(x_range, norm.pdf(x_range, 5.0, 1.5), 'r--', label='H₀: μ=5.0')
axes[0,0].axvline(x=np.mean(sample), color='b', linestyle='-', label=f'نۇمۇنە: {np.mean(sample):.2f}')
axes[0,0].set_title(f'تەك نۇمۇنە t-سىناق\np={results["single_sample"][1]:.3f}')
axes[0,0].legend()

# 2. ئىككى نۇمۇنە سىناق
axes[0,1].boxplot([sample2, sample3], labels=['نۇمۇنە 1', 'نۇمۇنە 2'])
axes[0,1].set_title(f'ئىككى نۇمۇنە t-سىناق\np={results["two_sample"][1]:.3f}')

# 3. جۈپلەنگەن سىناق
differences = after - before
axes[0,2].hist(differences, bins=8, alpha=0.7)
axes[0,2].axvline(x=0, color='r', linestyle='--', label='پەرق يوق')
axes[0,2].axvline(x=np.mean(differences), color='b', linestyle='-', label=f'ئوتتۇرىچە: {np.mean(differences):.1f}')
axes[0,2].set_title(f'جۈپلەنگەن t-سىناق\np={results["paired"][1]:.4f}')
axes[0,2].legend()

# 4. ۋارىيانسلار سېلىشتۇرۇش
variances = [np.var(sample2, ddof=1), np.var(sample3, ddof=1)]
axes[1,0].bar(['نۇمۇنە 1', 'نۇمۇنە 2'], variances, alpha=0.7)
axes[1,0].set_ylabel('ۋارىيانس')
axes[1,0].set_title(f'ۋارىيانسلار تەڭلىكى سىناقى\np={results["levene"][1]:.3f}')

# 5. نورماللىق سىناقى (QQ-پلوت)
from scipy.stats import probplot
_, (x1, x2) = probplot(sample1, dist="norm", plot=axes[1,1])
axes[1,1].plot(x1, x2, 'b.')
axes[1,1].plot([-3, 3], [-3, 3], 'r--')
axes[1,1].set_title(f'نورماللىق سىناقى\np={results["shapiro"][1]:.3f}')
axes[1,1].set_xlabel('نەزەرىيىلىك كۋانتىللار')
axes[1,1].set_ylabel('سانلىق مەلۇمات كۋانتىللار')

# 6. P-قىممىلىرىنى سېلىشتۇرۇش
tests = ['تەك نۇمۇنە', 'ئىككى نۇمۇنە', 'جۈپلەنگەن', 'ۋارىيانس', 'نورماللىق']
p_values = [results['single_sample'][1], results['two_sample'][1], 
            results['paired'][1], results['levene'][1], results['shapiro'][1]]
colors = ['green' if p > 0.05 else 'red' for p in p_values]

axes[1,2].bar(tests, p_values, color=colors, alpha=0.7)
axes[1,2].axhline(y=0.05, color='black', linestyle='--', alpha=0.5)
axes[1,2].set_ylabel('P-قىممىتى')
axes[1,2].set_title('ھەممە سىناقلارنىڭ P-قىممىتى')
axes[1,2].tick_params(axis='x', rotation=45)

plt.tight_layout()
plt.show()`
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
      red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', gradient: 'from-red-100 to-red-50' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* ماۋزۇ */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t({
                ja: '統計検定1級 対応 データサイエンス基礎',
                en: 'Statistical Foundations for Level 1 Certification',
                ug: 'ئىستاتىستىكىلىق سىناق 1-دەرىجىلىك داتا ساينس ئاساسى'
              })}
            </h1>
          </div>
          
          <p className="text-gray-600 text-lg mb-6 max-w-3xl mx-auto">
            {t({
              ja: '網羅的・実践的・コード付き - 日本統計学会認定 統計検定1級対応',
              en: 'Comprehensive, Practical, with Code Examples - Aligned with Japanese Statistical Society Level 1 Certification',
              ug: 'تولۇق، ئەمەلىي، كود مىساللىرى بار - ياپونىيە ئىستاتىستىكىلىق جەمئىيىتى 1-دەرىجىلىك گۇۋاھنامىسىگە ماسلىشىدۇ'
            })}
          </p>
          
          {/* تىل تاللاش */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl border border-gray-300 p-1 flex">
              {['ug', 'en', 'ja'].map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    language === lang
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {lang === 'ug' ? 'ئۇيغۇرچە' : lang === 'en' ? 'English' : '日本語'}
                </button>
              ))}
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
                      <h2 className="text-2xl font-bold text-gray-900">{t(topic.title)}</h2>
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
                                  {t({ ja: 'ねらい', en: 'Learning Objective', ug: 'ئۆگىنىش مەقسىتى' })}
                                </h4>
                                <p className="text-gray-700">{t(subtopic.learningObjective)}</p>
                              </div>

                              {/* ئۆگىنىش ئۈچۈن تېرمىنلار */}
                              <div>
                                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                                  <BookOpen className="w-5 h-5 text-green-600" />
                                  {t({ ja: '学習しておくべき用語', en: 'Key Terms to Learn', ug: 'ئۆگىنىش ئۈچۈن تېرمىنلار' })}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {subtopic.terms.map((term, index) => (
                                    <span
                                      key={index}
                                      className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                                    >
                                      {t(term)}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* مىسال */}
                              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                                  <HelpCircle className="w-5 h-5 text-blue-600" />
                                  {t({ ja: '例', en: 'Example', ug: 'مىسال' })}
                                </h4>
                                <p className="text-gray-700 italic">{t(subtopic.example)}</p>
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
                                      title={t({ ja: 'コピー', en: 'Copy', ug: 'كۆچۈرۈش' })}
                                    >
                                      <Copy className="w-5 h-5" />
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

        {/* ئىلگىرىلىگەن ئۇچۇرلار */}
        <div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-2xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-400" />
              {t({
                ja: '統計検定1級 出題範囲',
                en: 'Statistical Test Level 1 Syllabus',
                ug: 'ئىستاتىستىكىلىق سىناق 1-دەرىجە چىقىرىلىش دائىرىسى'
              })}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white/10 p-4 rounded-xl">
                <h3 className="font-bold text-lg mb-3">{t({ ja: '出題割合', en: 'Question Distribution', ug: 'سۇئال تارقىتىشى' })}</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>{t({ ja: '確率と確率変数', en: 'Probability & Random Variables', ug: 'ئېھتىمالىيەت ۋە ئېھتىمالىيەتلىك ئۆزگەرگۈچىلەر' })}</span>
                    <span className="font-mono">25-30%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t({ ja: '種々の確率分布', en: 'Various Distributions', ug: 'تۈرلۈك ئېھتىمالىيەت تارقىلىشلىرى' })}</span>
                    <span className="font-mono">20-25%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t({ ja: '統計的推測（推定）', en: 'Statistical Inference (Estimation)', ug: 'ئىستاتىستىكىلىق باھالاش (تەخمىنلەش)' })}</span>
                    <span className="font-mono">25-30%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t({ ja: '統計的推測（検定）', en: 'Statistical Inference (Testing)', ug: 'ئىستاتىستىكىلىق باھالاش (سىناق)' })}</span>
                    <span className="font-mono">25-30%</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 p-4 rounded-xl">
                <h3 className="font-bold text-lg mb-3">{t({ ja: '試験情報', en: 'Exam Information', ug: 'ئىمتاھان ئۇچۇرى' })}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span>{t({ ja: '試験時間: 90分', en: 'Duration: 90 minutes', ug: 'ۋاقىت: 90 مىنۇت' })}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-yellow-400" />
                    <span>{t({ ja: '問題数: 大問5題前後', en: 'Questions: ~5 main questions', ug: 'سۇئال سانى: 5 تاخمىغان ئاساسىي سوئال' })}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-yellow-400" />
                    <span>{t({ ja: '合格基準: 約60%以上', en: 'Passing Score: ~60%', ug: 'ئۆتۈش ئۆلچىمى: 60% تاخمىغان' })}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-yellow-400" />
                    <span>{t({ ja: '実施: 年2回 (6月・11月)', en: 'Held: Twice yearly (Jun, Nov)', ug: 'ئۆتكۈزۈش: يىلدا 2 قېتىم (ئىيۇن، نويابىر)' })}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ئاخىرقى خاتىرە */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p className="italic mb-2">
            {t({
              ja: '※ 本コンテンツは統計検定1級（統計数理・統計応用）の出題範囲に基づき構成されています。',
              en: '※ This material aligns with the syllabus of the Japanese Statistical Qualification Level 1 (Mathematical Statistics & Applied Statistics).',
              ug: '※ بۇ مەزمۇن يەپونىيە ئىستاتىستىكىلىق سىناق 1-دەرىجىلىك (ماتېماتىكىلىق ئىستاتىستىكا ۋە قوللىنىش ئىستاتىستىكىسى) دەرىجىلىك دەرىجىسى بويىچە تۈزۈلگەن.'
            })}
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Users className="w-4 h-4" />
            <span>{t({
              ja: '日本統計学会認定',
              en: 'Certified by Japanese Statistical Society',
              ug: 'ياپونىيە ئىستاتىستىكىلىق جەمئىيىتى تەرىپىدىن گۇۋاھلانغان'
            })}</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

// كۆپىيە قىلىنمايدىغان ئىكونلارنى تەمىنلەش
const Copy = ({ className, ...props }) => (
  <svg {...props} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

export default StatisticsTest1;