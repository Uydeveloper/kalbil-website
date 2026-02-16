// DataEngineeringTest.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DataEngineeringTest = () => {
  const [expandedChapters, setExpandedChapters] = useState(new Set());
  const [selectedSection, setSelectedSection] = useState(null);

  const toggleChapter = (id) => {
    const newSet = new Set(expandedChapters);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedChapters(newSet);
  };

  const getSectionExamples = (sectionId) => {
    const examples = {
      '2.1': {
        code: `# Dockerfile for Python environment
FROM python:3.9-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \\
    gcc \\
    g++ \\
    && rm -rf /var/lib/apt/lists/*

# Install Python packages
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Create working directory
WORKDIR /app

CMD ["jupyter", "lab", "--ip=0.0.0.0", "--port=8888"]`,
        explanation: 'بۇ Dockerfile ئارقىلىق پورتابل Python مۇھىتى قۇرۇلىدۇ'
      },
      '2.2': {
        code: `# ئاساسىي Python ئامىللىرى
def fibonacci(n):
    """Fibonacci سىزىقىنى ھېسابلاش"""
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

# List comprehension مىسالى
squares = [x**2 for x in range(10) if x % 2 == 0]
# نەتىجە: [0, 4, 16, 36, 64]

# Dictionary بىلەن ئەمەلىيەت
student_grades = {
    "ئەخمەت": {"ماتېماتىكا": 95, "پىروگرامما": 88},
    "زەينەپ": {"ماتېماتىكا": 92, "پىروگرامما": 95}
}`,
        explanation: 'Python ئاساسلىرى: فۇنكسىيە، list comprehension، dictionary'
      },
      '3.2': {
        formula: 'A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}, \\quad B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}',
        calculation: 'A × B = \\begin{bmatrix} 1×5+2×7 & 1×6+2×8 \\\\ 3×5+4×7 & 3×6+4×8 \\end{bmatrix} = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}',
        code: `import numpy as np

# ماترىتسا قۇرۇش
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# ماترىتسا كۆپەيتىش
result = np.dot(A, B)
# result: [[19, 22], [43, 50]]

# ماترىتسا تەڭشىمىسى
determinant = np.linalg.det(A)  # -2.0
inverse = np.linalg.inv(A)      # [[-2, 1], [1.5, -0.5]]`,
        explanation: 'سىزىقلىق ئالگېبرىدا ماترىتسا ھېسابلاش ۋە كۆپەيتىش'
      },
      '3.4': {
        formula: 'P(A|B) = \\frac{P(B|A) × P(A)}{P(B)}',
        explanation: 'بەيز قائىدىسى: ئارقا ئېھتىمالنى ئالدىنقى ئېھتىمالغا ئايلاندۇرىدۇ',
        code: `import numpy as np
from scipy import stats

# ئاددىي ئېھتىماللىق ھېسابلاش
# بىر قېتىم زەر تاشلاۋەتتە 3 چىقىش ئېھتىمالى
p = 1/6  # ≈ 0.1667

# نۇرمل تارقىلىش
mu, sigma = 0, 1  # ستاندارت نۇرمل تارقىلىش
x = np.linspace(-3, 3, 100)
pdf = stats.norm.pdf(x, mu, sigma)  # ئېھتىمال زىخلىق فۇنكسىيەسى

# ئىستاتىستىكىلىق سىناق (t-test)
group1 = np.random.normal(100, 15, 30)
group2 = np.random.normal(110, 15, 30)
t_stat, p_value = stats.ttest_ind(group1, group2)`,
        application: 'ماشىنىلىك ئۆگىنىشتە بەيز قائىدىسى naive Bayes ئالگورىتىمىدا قوللىنىلىدۇ'
      },
      '4.1': {
        code: `import numpy as np

# 1. ئۆلچەملىك ماترىتسا ئەمەلىيىتى
arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# ئاساسىي ئۇچۇرلار
print("Shape:", arr.shape)        # (3, 3)
print("Dimension:", arr.ndim)     # 2
print("Data type:", arr.dtype)    # int64

# 2. Broadcasting مىسالى
# ئوخشاش ئۆلچەمدە بولمىسىمۇ ھېسابلاش
a = np.array([1, 2, 3])
b = 2  # scalar
result = a * b  # [2, 4, 6]

# 3. ئۇچۇر تەڭشىمىسى
matrix = np.random.randn(1000, 1000)  # 1000×1000 ماترىتسا
mean = np.mean(matrix)                # ئوتتۇرىچە قىممەت
std = np.std(matrix)                  # ستاندارت چېتىلىش

# 4. ئۈنۈملۈك ھېسابلاش
# Pure Python بىلەن سېلىشتۇرما
import time

def python_sum(size):
    total = 0
    for i in range(size):
        total += i
    return total

def numpy_sum(size):
    arr = np.arange(size)
    return np.sum(arr)

# 10 مىليون سان
size = 10_000_000

start = time.time()
python_sum(size)
python_time = time.time() - start  # ~1.2 ثانىيە

start = time.time()
numpy_sum(size)
numpy_time = time.time() - start   # ~0.02 ثانىيە

print(f"NumPy {python_time/numpy_time:.1f} ھەسسە تېز!")`,
        explanation: 'NumPy ئارقىلىق ماترىتسا ھېسابلاش ۋە بۇلۇڭلاش ئۇسۇلى'
      },
      '4.2': {
        code: `import pandas as pd
import numpy as np

# 1. دېتا چىقىرىش ۋە كۆرۈش
df = pd.DataFrame({
    'ئىسىم': ['ئەخمەت', 'زەينەپ', 'مەھمۇد', 'سارا'],
    'يېشى': [25, 28, 22, 30],
    'كەسپى': ['پىروگراممىچى', 'دېتا ئانالىز', 'مۇھەندىس', 'ئىدارەچى'],
    'ماھىيەت': [75000, 68000, 55000, 92000]
})

# 2. ئاساسىي ئانالىز
print("ئاساسىي ئۇچۇرلار:")
print(df.info())
print("\nئىستاتىستىكىلىق تەپسىلات:")
print(df.describe())

# 3. مۇرەككەپ سۈزگۈچ
# 26 ياشتىن يۇقىرى پىروگراممىچىلارنى تاپ
filtered = df[
    (df['يېشى'] > 26) & 
    (df['كەسپى'].str.contains('پىروگراممىچى'))
]

# 4. گۇرۇپپىلاش ۋە ئومۇمىيلاشتۇرۇش
grouped = df.groupby('كەسپى').agg({
    'ماھىيەت': ['mean', 'min', 'max', 'std'],
    'يېشى': 'mean'
}).round(2)

# 5. ۋاقىت سىزىقلىق دېتا بىلەن مىسال
dates = pd.date_range('2024-01-01', periods=365, freq='D')
sales_data = pd.DataFrame({
    'تارىخ': dates,
    'سېتىش': np.random.normal(1000, 200, 365).cumsum(),
    'خەرىجى': np.random.normal(300, 50, 365).cumsum()
})

# 7 كۈنلۈك ھەرىكەتلىك ئوتتۇرىچە
sales_data['7_كۈن_ئوتتۇرىچە'] = sales_data['سېتىش'].rolling(window=7).mean()

# 6. CSV دىن دېتا يۈكلەش ۋە ساقلاش
# df.to_csv('data_analysis.csv', index=False, encoding='utf-8-sig')
# loaded_df = pd.read_csv('data_analysis.csv', encoding='utf-8-sig')`,
        explanation: 'pandas ئارقىلىق دېتا قاپلاش، سۈزۈش، گۇرۇپپىلاش ۋە ئانالىز قىلىش'
      },
      '4.4': {
        code: `import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA

# 1. ماشىنىلىك ئۆگىنىش يول باشلاش
# دېتا تەييارلاش
from sklearn.datasets import load_iris
iris = load_iris()
X, y = iris.data, iris.target

# دېتا پارچىلاش
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)

# دېتا نورماللاشتۇرۇش
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 2. لىنىيىلىق رېگرېسسىيە مىسالى
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# دېتا قۇرۇش
np.random.seed(42)
X_lr = 2 * np.random.rand(100, 1)
y_lr = 4 + 3 * X_lr + np.random.randn(100, 1)

model_lr = LinearRegression()
model_lr.fit(X_lr, y_lr)

# چۈشەندۈرۈش
print(f"كوئېففىتسىيەنت: {model_lr.coef_[0][0]:.2f}")
print(f"بەلگە: {model_lr.intercept_[0]:.2f}")
print(f"R² نىسبىتى: {model_lr.score(X_lr, y_lr):.3f}")

# 3. سىنىپلاشتۇرۇش مىسالى
model_clf = LogisticRegression(max_iter=1000)
model_clf.fit(X_train_scaled, y_train)

y_pred = model_clf.predict(X_test_scaled)
accuracy = accuracy_score(y_test, y_pred)
print(f"دەلىللەش دەقىقىلىقى: {accuracy:.2%}")

# 4. كلاستېرلاش مىسالى (K-Means)
from sklearn.cluster import KMeans

# ئەقلىي ئىقتىدار دېتاسى مىسالى
iq_data = np.random.randn(300, 2)  # 2 ئۆلچەملىك دېتا
kmeans = KMeans(n_clusters=3, random_state=42)
labels = kmeans.fit_predict(iq_data)

# 5. ئالاھىدىلىك تۆۋەنلىتىش (PCA)
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)

print(f"ئاساسىي ئۆلچەم ئۇچۇرى: {pca.explained_variance_ratio_}")

# 6. مودېل باھالاش
from sklearn.model_selection import cross_val_score
scores = cross_val_score(model_clf, X, y, cv=5)
print(f"5-قاتلاملىق دەلىللەش: {scores.mean():.3f} ± {scores.std():.3f}")

# 7. Pipeline قۇرۇش
from sklearn.pipeline import Pipeline
from sklearn.svm import SVC

pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('classifier', SVC(kernel='rbf'))
])

pipeline.fit(X_train, y_train)
pipeline_score = pipeline.score(X_test, y_test)`,
        explanation: 'scikit-learn ئارقىلىق ماشىنىلىك ئۆگىنىش مودېللىرىنى قۇرۇش، ئوقۇتۇش ۋە باھالاش'
      }
    };
    return examples[sectionId] || null;
  };

  const chapters = [
    {
      id: 1,
      ja: 'データエンジニアの役割',
      en: 'Role of a Data Engineer',
      ug: 'دېتا ئىنژىنېرلىق رولى',
      total: 2,
      rate: 5.0,
      detailed_explanation: 'دېتا ئىنژىنېر بولسا دېتا سىستېمىسىنى لايىھىلەش، قۇرۇش ۋە ساقلاش مەسئۇلىيىتىنى ئۈستىگە ئالغان كەسپ. ئۇلار دېتا پىپىلىنىيەسى (Data Pipeline)، ھەمبەھىرلەش سىستېمىسى (ETL/ELT)، ۋە دېتا ئامبىرى (Data Warehouse/Lake) قۇرۇشقا جاۋابكار.',
      sections: [],
      key_responsibilities: [
        'دېتا پىپىلىنىيەسى لايىھىلەش ۋە ئىجرا قىلىش',
        'ETL (Extract, Transform, Load) جەريانى',
        'دېتا ساقلاش ھەل قىلىش ئۇسۇلى',
        'دېتا سۈپىتى ۋە كۇۋالىتىنى كاپالەتلەندۈرۈش',
        'كلاود دېتا تېخنولوگىيەلىرى (AWS, GCP, Azure)'
      ],
      tools: ['Apache Spark', 'Airflow', 'Kafka', 'SQL', 'Python', 'Docker']
    },
    {
      id: 2,
      ja: 'Pythonと環境',
      en: 'Python and Environment',
      ug: 'Python ۋە مۇھىتى',
      total: 5,
      rate: 12.5,
      detailed_explanation: 'Python دېتا ئىنژىنېرلىقنىڭ ئاساسىي تىلى بولۇپ، ساددىلىكى ۋە كۈچلۈك كۇتۇبخانىلىرى سەۋەبىدىن كەڭ قوللىنىلىدۇ. مۇھىت تەييارلاش Docker، virtualenv ۋە conda قاتارلىق قوراللار ئارقىلىق ئىجرا قىلىنىدۇ.',
      sections: [
        { 
          id: '2.1', 
          ja: '実行環境構築', 
          en: 'Execution Environment Setup', 
          ug: 'ئىجرا مۇھىتىنى قۇرۇش', 
          count: 1, 
          rate: 2.5,
          concepts: ['Docker', 'Virtual Environment', 'Package Management', 'CI/CD'],
          difficulty: 'ئوتتۇرا'
        },
        { 
          id: '2.2', 
          ja: 'Pythonの基礎', 
          en: 'Python Basics', 
          ug: 'Python ئاساسلىرى', 
          count: 3, 
          rate: 7.5,
          concepts: ['Data Structures', 'Functions', 'OOP', 'List Comprehension', 'Decorators'],
          difficulty: 'يېڭى باشلىغۇچى'
        },
        { 
          id: '2.3', 
          ja: 'JupyterLab', 
          en: 'JupyterLab', 
          ug: 'JupyterLab', 
          count: 1, 
          rate: 2.5,
          concepts: ['Interactive Coding', 'Data Visualization', 'Notebook Sharing', 'Extensions'],
          difficulty: 'يېڭى باشلىغۇچى'
        }
      ],
      mathematical_concepts: 'Python سان ھېسابلاشتا ئىشلىتىلىدۇ. NumPy ئارقىلىق ماتېماتىكىلىق ھېسابلاشلار ئۈنۈملۈك ئىجرا قىلىنىدۇ.'
    },
    {
      id: 3,
      ja: '数学の基礎',
      en: 'Mathematical Foundations',
      ug: 'ماتېماتىكا ئاساسلىرى',
      total: 6,
      rate: 15.0,
      detailed_explanation: 'دېتا ئىنژىنېرلىق ئۈچۈن ماتېماتىكىلىق بىلىم ناھايىتى مۇھىم. سىزىقلىق ئالگېبرا ماترىتسا ھېسابلاشلاردا، ھېسابلاش دىففېرېنسىياللىق ھېسابلاشلاردا، ئېھتىماللىق ۋە ئىستاتىستىكا بولسا دېتا تەھلىلى ۋە مودېل باھالىشىدا قوللىنىلىدۇ.',
      sections: [
        { 
          id: '3.1', 
          ja: '数式を読むための基礎知識', 
          en: 'Basic Knowledge for Reading Formulas', 
          ug: 'فورمۇلا ئوقۇش ئۈچۈن ئاساسىي بىلىم', 
          count: 1, 
          rate: 2.5,
          concepts: ['Mathematical Notation', 'Sigma Notation', 'Function Notation', 'Set Theory'],
          difficulty: 'يېڭى باشلىغۇچى'
        },
        { 
          id: '3.2', 
          ja: '線形代数', 
          en: 'Linear Algebra', 
          ug: 'سىزىقلىق ئالگېبرىسى', 
          count: 2, 
          rate: 5.0,
          concepts: ['Vectors', 'Matrices', 'Matrix Multiplication', 'Determinants', 'Eigenvalues'],
          difficulty: 'ئوتتۇرا',
          formula: 'A·x = λ·x (ئالاھىدە قىممەت تەڭلىمىسى)'
        },
        { 
          id: '3.3', 
          ja: '基礎解析', 
          en: 'Basic Calculus', 
          ug: 'ئاساسىي ھېسابلاش', 
          count: 1, 
          rate: 2.5,
          concepts: ['Derivatives', 'Integrals', 'Gradient Descent', 'Partial Derivatives'],
          difficulty: 'ئوتتۇرا',
          formula: '∂f/∂x = lim_{h→0} [f(x+h)-f(x)]/h'
        },
        { 
          id: '3.4', 
          ja: '確率と統計', 
          en: 'Probability and Statistics', 
          ug: 'ئېھتىماللىيەت ۋە ئىستاتىستىكا', 
          count: 2, 
          rate: 5.0,
          concepts: ['Probability Distributions', 'Bayes Theorem', 'Hypothesis Testing', 'Confidence Intervals'],
          difficulty: 'ئالىي',
          formula: 'P(A|B) = [P(B|A)P(A)]/P(B)'
        }
      ],
      application: 'ماشىنىلىك ئۆگىنىشتە gradient descent ئالگورىتىمى ھېسابلاش ئارقىلىق مودېل پارامېتىرلىرىنى ئۆزگەرتىدۇ.'
    },
    {
      id: 4,
      ja: 'ライブラリによる分析実践',
      en: 'Practical Analysis with Libraries',
      ug: 'كۇتۇبخانىلەر بىلەن ئەمەلىي تەھلىل',
      total: 27,
      rate: 67.5,
      detailed_explanation: 'بۇ بابلار Pythonنىڭ دېتا ئانالىز كۇتۇبخانىلىرىنى ئۆگىتىدۇ. NumPy سان ھېسابلاش ئۈچۈن، pandas دېتا قاپلاش ئۈچۈن، Matplotlib گرافىك سىزىش ئۈچۈن، scikit-learn بولسا ماشىنىلىك ئۆگىنىش ئۈچۈن قوللىنىلىدۇ.',
      sections: [
        { 
          id: '4.1', 
          ja: 'NumPy', 
          en: 'NumPy', 
          ug: 'NumPy', 
          count: 6, 
          rate: 15.0,
          concepts: ['Arrays', 'Broadcasting', 'Vectorization', 'Linear Algebra Operations'],
          difficulty: 'ئوتتۇرا',
          performance: 'C دىكى ئاساسىي كود بىلەن يېزىلغان، Python دىن 10-100 ھەسسە تېز'
        },
        { 
          id: '4.2', 
          ja: 'pandas', 
          en: 'pandas', 
          ug: 'pandas', 
          count: 7, 
          rate: 17.5,
          concepts: ['DataFrame', 'Series', 'GroupBy', 'Pivot Tables', 'Time Series'],
          difficulty: 'ئوتتۇرا',
          data_types: ['CSV', 'Excel', 'SQL', 'JSON', 'Parquet']
        },
        { 
          id: '4.3', 
          ja: 'Matplotlib', 
          en: 'Matplotlib', 
          ug: 'Matplotlib', 
          count: 6, 
          rate: 15.0,
          concepts: ['Line Plots', 'Bar Charts', 'Histograms', 'Scatter Plots', 'Subplots'],
          difficulty: 'ئوتتۇرا',
          alternatives: ['Seaborn', 'Plotly', 'Bokeh']
        },
        { 
          id: '4.4', 
          ja: 'scikit-learn', 
          en: 'scikit-learn', 
          ug: 'scikit-learn', 
          count: 8, 
          rate: 20.0,
          concepts: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Preprocessing'],
          difficulty: 'ئالىي',
          algorithms: ['Linear Regression', 'Logistic Regression', 'Decision Trees', 'K-Means', 'PCA']
        }
      ],
      workflow: 'NumPy → pandas → Matplotlib → scikit-learn بولۇپ، دېتا ئانالىز جەريانىنىڭ ئۆلچەملىك يولى.'
    },
    {
      id: 5,
      ja: '応用: データ収集と加工',
      en: 'Applied: Data Collection and Processing',
      ug: 'ئەمەلىي: دېتا يىغىش ۋە قايتا ئىشلەش',
      total: 0,
      rate: 0.0,
      detailed_explanation: 'بۇ بابقا سىناق سۇئاللىرى تېخى قوشۇلمىغان. كەلگۈسىدە دېتا يىغىش (Web Scraping، API)، دېتا پاكىزلاش (Data Cleaning)، ۋە دېتا ئامبىرى (Data Warehousing) قاتارلىق تېمىلار قوشۇلىدۇ.',
      sections: [],
      planned_topics: [
        'BeautifulSoup بىلەن تور بەت سكراپىڭ',
        'API بىلەن دېتا يىغىش',
        'Apache Spark بىلەن چوڭ دېتا بىلەن ئىشلەش',
        'SQL بىلەن مۇرەككەپ سوراقلار',
        'Airflow بىلەن دېتا پىپىلىنىيەسى'
      ]
    }
  ];

  const grandTotal = chapters.reduce((sum, ch) => sum + ch.total, 0);
  const grandRate = chapters.reduce((sum, ch) => sum + ch.rate, 0);

  const SectionDetailModal = ({ section, onClose }) => {
    const examples = getSectionExamples(section.id);
    
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
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold">{section.id}: {section.ug}</h3>
                <p className="text-blue-100">{section.ja} / {section.en}</p>
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
            {examples ? (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <h4 className="font-bold text-blue-800 mb-3">ئاساسىي چۈشەنچىلەر</h4>
                    <ul className="space-y-2">
                      {section.concepts?.map((concept, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {concept}
                        </li>
                      ))}
                    </ul>
                    {section.difficulty && (
                      <div className="mt-4">
                        <span className="inline-block px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
                          قىيىنچىلىق: {section.difficulty}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-xl">
                    <h4 className="font-bold text-teal-800 mb-3">ماتېماتىكىلىق فورمۇلا</h4>
                    {section.formula ? (
                      <div className="p-3 bg-white rounded-lg border border-teal-200">
                        <div className="text-lg font-mono text-center">{section.formula}</div>
                        <p className="text-sm text-gray-600 mt-2">{examples.explanation}</p>
                      </div>
                    ) : (
                      <p className="text-gray-600">بۇ قىسىمغا ئالاقىدار فورمۇلا يوق.</p>
                    )}
                  </div>
                </div>
                
                {examples.code && (
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Python كود مىسالى</h4>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
                      <code>{examples.code}</code>
                    </pre>
                    <p className="text-sm text-gray-600 mt-2">{examples.explanation}</p>
                  </div>
                )}
                
                {section.performance && (
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-2">ئۈنۈمدارلىق</h4>
                    <p>{section.performance}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">بۇ قىسىم ئۈچۈن تەپسىلاتلار تېخى قوشۇلمىغان.</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Stats */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              دېتا ئىنژىنېرلىق كۇرسى — تۆۋەندىكى سىناقلار
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              بۇ جەدۋەل كۇرسنىڭ ھەممە بابلىرىنى ۋە ئۇلارنىڭ سۇئال تارقىلىشىنى كۆرسىتىدۇ
            </p>
          </div>
          
          {/* Overall Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-700">{grandTotal}</div>
              <div className="text-sm text-blue-600">جەمئىي سۇئال</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-teal-700">{grandRate.toFixed(1)}%</div>
              <div className="text-sm text-teal-600">ئومۇمىي نىسبەت</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-amber-700">4.4</div>
              <div className="text-sm text-amber-600">ئەڭ مۇھىم قىسىم</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-purple-700">67.5%</div>
              <div className="text-sm text-purple-600">ئەڭ مۇھىم باب (4-باب)</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>ئومۇمىي ئىلگىرىلەش</span>
              <span>{grandRate.toFixed(1)}%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${grandRate}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-blue-500 via-teal-500 to-green-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Chapters List */}
        <div className="space-y-6">
          {chapters.map((ch) => (
            <motion.div
              key={ch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ch.id * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border ${
                ch.total === 0 ? 'border-gray-300' : 'border-gray-200'
              }`}
            >
              {/* Chapter Header */}
              <div
                className={`p-6 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center ${
                  ch.total === 0 ? 'bg-gray-100' : 'bg-gradient-to-r from-blue-50 to-teal-50'
                } hover:from-blue-100 hover:to-teal-100 transition-all`}
                onClick={() => toggleChapter(ch.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold mr-3">
                      {ch.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        باب {ch.id}: {ch.ug}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {ch.ja} • {ch.en}
                      </p>
                    </div>
                  </div>
                  
                  {/* Chapter Description */}
                  <p className="text-gray-700 mt-3 text-sm">{ch.detailed_explanation}</p>
                  
                  {/* Tools/Concepts */}
                  {ch.tools && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {ch.tools.map((tool, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="mt-4 md:mt-0 md:ml-6">
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{ch.total}</div>
                      <div className="text-xs text-gray-600">سۇئال</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-700">{ch.rate.toFixed(1)}%</div>
                      <div className="text-xs text-gray-600">نىسبەت</div>
                    </div>
                    <div className="text-teal-700 font-medium">
                      {expandedChapters.has(ch.id) ? '▲ يىغىش' : '▼ تەپسىلاتلارنى كۆرۈش'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedChapters.has(ch.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 border-t">
                      {/* Chapter Details */}
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-800 mb-3">باب تەپسىلاتلىرى</h4>
                        {ch.key_responsibilities && (
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-blue-700 mb-2">مەسئۇلىيەتلەر:</h5>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {ch.key_responsibilities.map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span className="text-sm text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {ch.planned_topics && (
                          <div>
                            <h5 className="text-sm font-semibold text-amber-700 mb-2">كەلگۈسىدە قوشۇلىدىغان تېمىلار:</h5>
                            <ul className="flex flex-wrap gap-2">
                              {ch.planned_topics.map((topic, idx) => (
                                <li key={idx} className="px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      
                      {/* Sections Table */}
                      {ch.sections.length > 0 ? (
                        <div>
                          <h4 className="font-bold text-gray-800 mb-4">قىسىملار</h4>
                          <div className="overflow-x-auto rounded-xl border border-gray-200">
                            <table className="min-w-full">
                              <thead>
                                <tr className="bg-gray-50">
                                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">قىسىم</th>
                                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">ئاتى</th>
                                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 hidden lg:table-cell">چۈشەنچىلەر</th>
                                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 text-center">سۇئال</th>
                                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 text-center">نىسبەت</th>
                                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 text-center">ھەرىكەت</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200">
                                {ch.sections.map((sec) => (
                                  <tr key={sec.id} className="hover:bg-gray-50">
                                    <td className="py-3 px-4">
                                      <span className="font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">
                                        {sec.id}
                                      </span>
                                    </td>
                                    <td className="py-3 px-4">
                                      <div>
                                        <div className="font-medium text-gray-900">{sec.ug}</div>
                                        <div className="text-xs text-gray-500 hidden md:block">
                                          {sec.ja} / {sec.en}
                                        </div>
                                      </div>
                                    </td>
                                    <td className="py-3 px-4 hidden lg:table-cell">
                                      <div className="flex flex-wrap gap-1">
                                        {sec.concepts?.slice(0, 3).map((concept, idx) => (
                                          <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                                            {concept}
                                          </span>
                                        ))}
                                        {sec.concepts && sec.concepts.length > 3 && (
                                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                            +{sec.concepts.length - 3}
                                          </span>
                                        )}
                                      </div>
                                    </td>
                                    <td className="py-3 px-4 text-center font-bold text-gray-900">
                                      {sec.count}
                                    </td>
                                    <td className="py-3 px-4">
                                      <div className="flex items-center justify-center">
                                        <span className="font-medium text-gray-900 w-12 text-right">
                                          {sec.rate.toFixed(1)}%
                                        </span>
                                        <div className="ml-3 w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                                          <div
                                            className="h-full bg-gradient-to-r from-blue-400 to-teal-400"
                                            style={{ width: `${sec.rate}%` }}
                                          />
                                        </div>
                                      </div>
                                    </td>
                                    <td className="py-3 px-4 text-center">
                                      <button
                                        onClick={() => setSelectedSection(sec)}
                                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-teal-600 transition"
                                      >
                                        تەپسىلاتلار
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-8 text-gray-500">
                          <p className="mb-2">بۇ بابنىڭ ئاستىدا قىسىم يوق ياكى سۇئال چىقىرىلمىغان.</p>
                          <p className="text-sm">كەلگۈسىدە قوشۇلىدۇ.</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Footer Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">ئەڭ مۇھىم ئۇچۇرلار</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-4xl font-bold mb-2">4-باب</div>
              <div className="font-medium">كۇتۇبخانىلەر بىلەن ئەمەلىي تەھلىل</div>
              <div className="text-2xl font-bold mt-2">67.5%</div>
              <div className="text-sm opacity-90">ئەڭ يۇقىرى نىسبەت</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-4xl font-bold mb-2">4.4</div>
              <div className="font-medium">scikit-learn قىسمى</div>
              <div className="text-2xl font-bold mt-2">20.0%</div>
              <div className="text-sm opacity-90">ئەڭ مۇھىم قىسىم</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-4xl font-bold mb-2">27</div>
              <div className="font-medium">4-بابتىكى سۇئال</div>
              <div className="text-sm opacity-90 mt-2">
                جەمئىي سۇئاللارنىڭ 67.5%ى 4-بابتىن كېلىدۇ
              </div>
            </div>
          </div>
          <div className="mt-6 text-center text-sm opacity-90">
            <p>مەشىق قىلىشتا 4-بابقا ئالاھىدە دىققەت قىلىڭ!</p>
            <p className="mt-1">scikit-learn ئارقىلىق ماشىنىلىك ئۆگىنىش ئاساسلىرىنى چوڭقۇر ئۆگىنىڭ.</p>
          </div>
        </motion.div>

        {/* Section Detail Modal */}
        <AnimatePresence>
          {selectedSection && (
            <SectionDetailModal
              section={selectedSection}
              onClose={() => setSelectedSection(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DataEngineeringTest;