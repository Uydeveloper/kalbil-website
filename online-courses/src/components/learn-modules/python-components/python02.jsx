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

const Section = ({ number, uyTitle, enTitle, uyDesc, enDesc, examples }) => (
  <div className="mb-14 pb-8 border-b border-gray-800/50">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-5">
      <h2 
        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
        style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl', textAlign: 'right' }}
      >
        {number} بۆلەك　{uyTitle}
      </h2>
      <span 
        className="text-cyan-300 italic text-sm"
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
    </div>

    <div className="mt-8 space-y-7">
      {examples.map((ex, idx) => (
        <div key={idx} className="bg-gray-800/40 p-5 rounded-xl border border-blue-700/30">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
            <h4 
              className="font-semibold text-blue-300"
              style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl', textAlign: 'right' }}
            >
              {idx + 1}. {ex.uyTitle}
            </h4>
            <span 
              className="text-cyan-200 text-sm italic"
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
              className="text-xs text-cyan-300 font-mono"
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

const Subsection = ({ parent, number, uyTitle, enTitle, uyDesc, enDesc, examples }) => (
  <div className="ml-6 mb-10">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
      <h3 
        className="text-xl font-semibold text-blue-300"
        style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl', textAlign: 'right' }}
      >
        {parent}.{number} {uyTitle}
      </h3>
      <span 
        className="text-cyan-200 text-sm italic"
        style={{ direction: 'ltr', textAlign: 'left' }}
      >
        {enTitle}
      </span>
    </div>
    
    <div className="space-y-3 mb-6">
      <p 
        className="text-justify text-gray-200 text-sm"
        style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl' }}
      >
        {uyDesc}
      </p>
      <p 
        className="text-justify text-gray-400 text-xs italic"
        style={{ direction: 'ltr', textAlign: 'left' }}
      >
        {enDesc}
      </p>
    </div>

    <div className="space-y-6">
      {examples.map((ex, idx) => (
        <div key={idx} className="bg-gray-800/30 p-4 rounded-lg border border-blue-600/20">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
            <h4 
              className="font-medium text-blue-200"
              style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl', textAlign: 'right' }}
            >
              {idx + 1}. {ex.uyTitle}
            </h4>
            <span 
              className="text-cyan-200 text-xs italic"
              style={{ direction: 'ltr', textAlign: 'left' }}
            >
              {ex.enTitle}
            </span>
          </div>
          
          <p 
            className="mb-3 text-xs text-gray-200"
            style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl', textAlign: 'justify' }}
          >
            {ex.uyExplanation}
          </p>
          <p 
            className="mb-3 text-[10px] text-gray-400 italic"
            style={{ direction: 'ltr', textAlign: 'left' }}
          >
            {ex.enExplanation}
          </p>
          
          <CodeBlock>{ex.code}</CodeBlock>
          
          <div className="mt-2 flex flex-col md:flex-row md:items-center gap-1">
            <span 
              className="text-[10px] text-gray-500"
              style={{ direction: 'rtl', textAlign: 'right', fontFamily: "'Noto Nastaliq Uyghur', serif" }}
            >
              نەتىجە:
            </span>
            <span 
              className="text-[10px] text-cyan-300 font-mono"
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

export default function DataScienceCourseGuide() {
  useEffect(() => {
    injectFonts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-950 to-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-14">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl' }}
          >
            دېتا ئىلىم ۋە ماشىنا ئۆگىنىشى باشلىنىش دەرىجىلىك دەرىسلىك
          </h1>
          <p 
            className="text-cyan-300 italic"
            style={{ direction: 'ltr' }}
          >
            Bilingual Data Science & ML Course for Beginners (Uyghur & English)
          </p>
        </div>

        {/* بۆلەك 1 */}
        <Section
          number="1"
          uyTitle="دېتا ئىنژېنېرىنىڭ رولى"
          enTitle="Role of a Data Engineer"
          uyDesc="دېتا ئىنژېنېر — دېتا سىستېمىسىنى قۇرۇش، بىرلەشتۈرۈش ۋە ساقلاش بىلەن شۇغۇللىنىدىغان مۇتەخەسسىس."
          enDesc="Data engineers build, integrate, and maintain data systems."
          examples={[
            {
              uyTitle: "دېتا قانالى",
              enTitle: "Data Pipeline",
              uyExplanation: "دېتا يىغىش، تازىلاش، ساقلاش جەريانى.",
              enExplanation: "ETL: Extract, Transform, Load workflow.",
              code: `# سانلىق مەلۇماتنى يۈكلەش → تازىلاش → ساقلاش\nraw_data = fetch_data()\nclean_data = clean(raw_data)\nsave_to_warehouse(clean_data)`,
              output: "دېتا قانالى ئىشلىدى"
            },
            {
              uyTitle: "دېتا قانلىقى تورى",
              enTitle: "Data Lake vs Warehouse",
              uyExplanation: "دېتا قانلىقى — خام سانلىق مەلۇمات، دېتا قانلىقى تورى — تەرتىپلەنگەن سانلىق مەلۇمات.",
              enExplanation: "Lake: raw data; Warehouse: structured data.",
              code: `# دېتا قانلىقى\ns3://my-bucket/raw_logs/\n\n# دېتا قانلىقى تورى\nSELECT * FROM sales WHERE region='X'`,
              output: "ئىككى سانلىق مەلۇمات مۇھىتى"
            }
          ]}
        />

        {/* بۆلەك 2 */}
        <Section
          number="2"
          uyTitle="Python ۋە مۇھىت"
          enTitle="Python and Environment"
          uyDesc="ماشىنا ئۆگىنىشى ئۈچۈن Python مۇھىتىنى قۇرۇش ۋە ئاساسىي بىلىم."
          enDesc="Setting up Python environment and fundamentals."
          examples={[]}
        />
        <Subsection
          parent="2"
          number="1"
          uyTitle="ئىجرا مۇھىتىنى قۇرۇش"
          enTitle="Execution Environment Setup"
          uyDesc="Python، Jupyter، pip، virtual environment نى قاچىلاش."
          enDesc="Installing Python, Jupyter, and managing environments."
          examples={[
            {
              uyTitle: "venv قۇرۇش",
              enTitle: "Create Virtual Environment",
              uyExplanation: "پروگرامما بېكەتلەرنى ئايرىم ساقلاش.",
              enExplanation: "Isolate project dependencies.",
              code: `$ python -m venv data_env\n$ source data_env/bin/activate  # Mac/Linux`,
              output: "(data_env) $"
            },
            {
              uyTitle: "پاكېتلارنى ئورنىتىش",
              enTitle: "Install Packages",
              uyExplanation: "pandas، numpy قاتارلىق پاكېتلارنى ئورنىتىش.",
              enExplanation: "Install data science libraries.",
              code: `$ pip install pandas numpy jupyter`,
              output: "پاكېتلار مۇۋەپپەقىيەتلىك ئورنىتىلدى"
            },
            {
              uyTitle: "نەشرىيات تىزىملىكى",
              enTitle: "Requirements File",
              uyExplanation: "باشقا كومپيۇتېردا مۇھىتنى قايتىلاش.",
              enExplanation: "Reproduce environment elsewhere.",
              code: `$ pip freeze > requirements.txt\n$ pip install -r requirements.txt`,
              output: "مۇھىت قايتىلايدۇ"
            }
          ]}
        />
        <Subsection
          parent="2"
          number="2"
          uyTitle="Python نىڭ ئاساسى"
          enTitle="Python Basics"
          uyDesc={`ئۆزگىرىگۈچى، تىپ، قۇرۇلمىلار، فۇنكسىيە قاتارلىق.`}
enDesc="Variables, types, structures, functions."
          examples={[
            {
              uyTitle: "List ۋە Dict",
              enTitle: "Lists and Dictionaries",
              uyExplanation: "سانلىق مەلۇماتنى ساقلاشنىڭ ئاساسىي ئۇسۇللىرى.",
              enExplanation: "Fundamental data structures.",
              code: `data = [{'name': 'Ali', 'score': 85}, {'name': 'Ayşe', 'score': 92}]\nfor d in data:\n    print(f"{d['name']}: {d['score']}")`,
              output: "Ali: 85\\nAyşe: 92"
            },
            {
              uyTitle: "فۇنكسىيە قۇرۇش",
              enTitle: "Define Function",
              uyExplanation: "قايىت-قايىت ئىشلىتىلىدىغان كودنى تەرتىپلەش.",
              enExplanation: "Reusable code blocks.",
              code: `def calculate_mean(numbers):\n    return sum(numbers) / len(numbers)\n\nprint(calculate_mean([1,2,3,4]))`,
              output: "2.5"
            },
            {
              uyTitle: "List Comprehension",
              enTitle: "List Comprehension",
              uyExplanation: "قىسقىچە تىزىملىك قۇرۇش ئۇسۇلى.",
              enExplanation: "Concise list creation.",
              code: `squares = [x**2 for x in range(1,6)]\nprint(squares)`,
              output: "[1, 4, 9, 16, 25]"
            }
          ]}
        />
        <Subsection
          parent="2"
          number="3"
          uyTitle="JupyterLab"
          enTitle="JupyterLab"
          uyDesc="مۇكالىمەلىك (interactive) دېتا تەھلىل مۇھىتى."
          enDesc="Interactive environment for data analysis."
          examples={[
            {
              uyTitle: "چېكىت سىستېمىسى",
              enTitle: "Cell System",
              uyExplanation: "ھەر بىر چېكىتنى ئايرىم ئىجرا قىلىش.",
              enExplanation: "Run code cells independently.",
              code: `# چېكىت 1\nimport pandas as pd\n\n# چېكىت 2\ndf = pd.read_csv('data.csv')`,
              output: "چېكىت 2 دا df ئىشلىتىشكە بولىدۇ"
            },
            {
              uyTitle: "ماتىن چېكىتى",
              enTitle: "Markdown Cell",
              uyExplanation: "تەھلىل نەتىجىسىنى تەپسىلىي تەسۋىرلەش.",
              enExplanation: "Document your analysis.",
              code: `# ماتىن چېكىتىدە:\n## دېتا تەھلىل نەتىجىسى\nبۇ دېتا 2025-يىللىق سېتىش-ئالىش نەتىجىسى.`
            }
          ]}
        />

        {/* بۆلەك 3 */}
        <Section
          number="3"
          uyTitle="ماتېماتىكىنىڭ ئاساسى"
          enTitle="Mathematical Foundations"
          uyDesc="ماشىنا ئۆگىنىشىنى تۈشۈنىش ئۈچۈن زۆرۈر ماتېماتىكا بىلىمى."
          enDesc="Essential math for understanding ML algorithms."
          examples={[]}
        />
        <Subsection
          parent="3"
          number="1"
          uyTitle="سانلىق ئىپادىلەرنى ئوقۇش ئۈچۈن ئاساسىي بىلىم"
          enTitle="Basics of Reading Mathematical Notation"
          uyDesc="Σ، ∫، ∂، ∇ قاتارلىق بەلگىلەرنى تاناش."
          enDesc="Understanding Σ, ∫, ∂, ∇ symbols."
          examples={[
            {
              uyTitle: "يىغىندى (Σ)",
              enTitle: "Summation (Σ)",
              uyExplanation: "بىر قاتار ساننىڭ يىغىندىسى.",
              enExplanation: "Sum of a sequence.",
              code: `# Σ_{i=1}^n x_i\nx = [1, 2, 3, 4]\ntotal = sum(x)  # = 10`,
              output: "10"
            },
            {
              uyTitle: "تەڭدە (Gradient ∇)",
              enTitle: "Gradient (∇)",
              uyExplanation: "فۇنكسىيەنىڭ ئەڭ تېز ئۆزگىرىش يۆنىلىشى.",
              enExplanation: "Direction of steepest ascent.",
              code: `# f(x, y) = x^2 + y^2\n# ∇f = [2x, 2y]\ngrad = [2*3, 2*4]  # x=3, y=4`,
              output: "[6, 8]"
            }
          ]}
        />
        <Subsection
          parent="3"
          number="2"
          uyTitle="سىزىقلىق ئالگېبرا"
          enTitle="Linear Algebra"
          uyDesc="ماترىتسا، وېكتور، ھەل قىلىش قاتارلىق."
          enDesc="Matrices, vectors, solving systems."
          examples={[
            {
              uyTitle: "ماترىتسا كۆپەيتىش",
              enTitle: "Matrix Multiplication",
              uyExplanation: "نىيرونى توردا ماترىتسا كۆپەيتىش ئىشلىتىلىدۇ.",
              enExplanation: "Used in neural networks.",
              code: `import numpy as np\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5], [6]])\nC = np.dot(A, B)\nprint(C)`,
              output: "[[17]\\n[39]]"
            },
            {
              uyTitle: "ئۆز قىممىتى (Eigenvalue)",
              enTitle: "Eigenvalues",
              uyExplanation: "ماترىتسىنىڭ ئاساسىي خۇسۇسىيىتى.",
              enExplanation: "Key to PCA and more.",
              code: `from numpy.linalg import eig\nvalues, vectors = eig(A)\nprint(values)`,
              output: "[-0.37228132  5.37228132]"
            }
          ]}
        />
        <Subsection
          parent="3"
          number="3"
          uyTitle="ئاساسىي تەھلىل"
          enTitle="Basic Calculus"
          uyDesc="چىقىرىلمىلار ۋە ئىنتېگرال."
          enDesc="Derivatives and integrals."
          examples={[
            {
              uyTitle: "چىقىرىلمى (Derivative)",
              enTitle: "Derivative",
              uyExplanation: "فۇنكسىيەنىڭ ئۆزگىرىش تېزلىكى.",
              enExplanation: "Rate of change of function.",
              code: `# f(x) = x^2 → f'(x) = 2x\nx = 5\ndf_dx = 2 * x\nprint(df_dx)`,
              output: "10"
            }
          ]}
        />
        <Subsection
          parent="3"
          number="4"
          uyTitle="ئېھتىماللىق ۋە سانلىق مەلۇمات تەھلىلى"
          enTitle="Probability and Statistics"
          uyDesc="ئوتتۇرىچە قىممەت، ۋارىيانس، نورمال تارقىلىش."
          enDesc="Mean, variance, normal distribution."
          examples={[
            {
              uyTitle: "ئوتتۇرىچە ۋە ۋارىيانس",
              enTitle: "Mean and Variance",
              uyExplanation: "سانلىق مەلۇماتنىڭ ئاساسىي ئۆلچىمى.",
              enExplanation: "Basic data metrics.",
              code: `import numpy as np\ndata = [1, 2, 3, 4, 5]\nmean = np.mean(data)\nvar = np.var(data)\nprint(f"Mean: {mean}, Var: {var}")`,
              output: "Mean: 3.0, Var: 2.0"
            },
            {
              uyTitle: "نورمال تارقىلىش",
              enTitle: "Normal Distribution",
              uyExplanation: "سانلىق مەلۇمات تارقىلىشىنى مودېللاشتۇرۇش.",
              enExplanation: "Model data distribution.",
              code: `from scipy.stats import norm\nx = norm.rvs(size=1000)  # 1000 تەصادىفىي سان`,
              output: "نورمال تارقىلىش سانلىق مەلۇماتى"
            }
          ]}
        />

        {/* بۆلەك 4 */}
        <Section
          number="4"
          uyTitle="كۈتۈخانىلەر ئارقىلىق تەھلىل ئىشلىتىش"
          enTitle="Practical Analysis with Libraries"
          uyDesc="NumPy، pandas، Matplotlib، scikit-learn ئىشلىتىش."
          enDesc="Hands-on with key data science libraries."
          examples={[]}
        />
        <Subsection
          parent="4"
          number="1"
          uyTitle="NumPy"
          enTitle="NumPy"
          uyDesc="سانلىق ھېساباتقا ئاساسلىق كۈتۈخانە."
          enDesc="Fundamental library for numerical computing."
          examples={[
            { uyTitle: "ئۆلچەملىك تىزىملىك", enTitle: "Ndarray", uyExplanation: "كۆپ ئۆلچەملىك سان تىزىملىك.", enExplanation: "Multidimensional array.", code: `import numpy as np\narr = np.array([[1,2],[3,4]])\nprint(arr.shape)`, output: "(2, 2)" },
            { uyTitle: "ۋېكتور ھېسابى", enTitle: "Vectorized Operations", uyExplanation: "تىزىملىك بويىچە ھېسابلاش.", enExplanation: "Fast array operations.", code: `a = np.array([1,2,3])\nb = a * 2  # [2,4,6]`, output: "[2 4 6]" },
            { uyTitle: "تەصادىفىي ماترىتسا", enTitle: "Random Matrix", uyExplanation: "تەكلىپ-تەكلىپ سانلىق مەلۇمات ياساش.", enExplanation: "Generate random data.", code: `rnd = np.random.rand(3, 3)\nprint(rnd)`, output: "3x3 تەصادىفىي ماترىتسا" }
          ]}
        />
        <Subsection
          parent="4"
          number="2"
          uyTitle="pandas"
          enTitle="pandas"
          uyDesc="دېتا تەھلىل ۋە تازىلاش ئۈچۈن ئەڭ ياخشى كۈتۈخانە."
          enDesc="Best library for data manipulation and analysis."
          examples={[
            { uyTitle: "دېتا تورى (DataFrame)", enTitle: "DataFrame", uyExplanation: "جەدۋەل شەكىللىك دېتا.", enExplanation: "Tabular data structure.", code: `import pandas as pd\ndf = pd.DataFrame({'A': [1,2], 'B': [3,4]})\nprint(df)`, output: "A  B\\n0  1  3\\n1  2  4" },
            { uyTitle: "دېتا تازىلاش", enTitle: "Data Cleaning", uyExplanation: "توشۇپ كەتكەن قىممەتلەرنى تولدۇرۇش.", enExplanation: "Handle missing values.", code: `df.fillna(0)  # توشۇپ كەتكەنلىرىنى 0 قىلىش`, output: "دېتا تازىلاندى" },
            { uyTitle: "گۇرۇپپا ھېسابى", enTitle: "GroupBy", uyExplanation: "تۈرلەر بويىچە ھېسابلاش.", enExplanation: "Aggregate by categories.", code: `df.groupby('category')['sales'].sum()`, output: "ھەر بىر تۈرۈنىڭ سېتىش-ئالىشى" }
          ]}
        />
        <Subsection
          parent="4"
          number="3"
          uyTitle="Matplotlib"
          enTitle="Matplotlib"
          uyDesc="سانلىق مەلۇماتنى كۆرۈنەرلىك قىلىش."
          enDesc="Data visualization library."
          examples={[
            { uyTitle: "سۈزۈك سىزىق رەسىم", enTitle: "Line Plot", uyExplanation: "ۋاقىت سىرەس تەھلىلى.", enExplanation: "Time series visualization.", code: `import matplotlib.pyplot as plt\nplt.plot([1,2,3], [1,4,9])\nplt.show()`, output: "سۈزۈك سىزىق رەسىم" },
            { uyTitle: "تارقىلىش رەسىم", enTitle: "Scatter Plot", uyExplanation: "ئىككى ئۆزگىرىگۈچى ئوتتۇرىسىدىكى مۇناسىۋەت.", enExplanation: "Relationship between variables.", code: `plt.scatter(x, y)\nplt.xlabel('X')`, output: "نۇقتىلىق رەسىم" },
            { uyTitle: "مۇشەيىرە رەسىم", enTitle: "Histogram", uyExplanation: "سانلىق مەلۇمات تارقىلىشى.", enExplanation: "Data distribution.", code: `plt.hist(data, bins=20)`, output: "مۇشەيىرە رەسىم" }
          ]}
        />
        <Subsection
          parent="4"
          number="4"
          uyTitle="scikit-learn"
          enTitle="scikit-learn"
          uyDesc="ماشىنا ئۆگىنىشى ئۈچۈن ئاساسىي كۈتۈخانە."
          enDesc="Core library for machine learning."
          examples={[
            { uyTitle: "سىزىقلىق رېگىرېسسىيە", enTitle: "Linear Regression", uyExplanation: "بىر قىسقۇچ بويىچە باھا قىلىش.", enExplanation: "Predict continuous values.", code: `from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\nmodel.fit(X, y)`, output: "مودېل ئۆگىتىلدى" },
            { uyTitle: "K-Means كلاستېرلاش", enTitle: "K-Means Clustering", uyExplanation: "ئوخشىمىغان گۇرۇپپىلارنى ئايرىش.", enExplanation: "Unsupervised grouping.", code: `from sklearn.cluster import KMeans\nkmeans = KMeans(n_clusters=3)\nlabels = kmeans.fit_predict(X)`, output: "گۇرۇپپە نۇمۇرلىرى" },
            { uyTitle: "مودېل باھاسى", enTitle: "Model Evaluation", uyExplanation: "مودېل ئۈنۈملىرىنى تەكشۈرۈش.", enExplanation: "Assess model performance.", code: `from sklearn.metrics import accuracy_score\nacc = accuracy_score(y_true, y_pred)`, output: "دەللىك: 0.95" }
          ]}
        />

        {/* بۆلەك 5 */}
        <Section
          number="5"
          uyTitle="ئىشلىتىش: دېتا يىغىش ۋە تازىلاش"
          enTitle="Application: Data Collection and Processing"
          uyDesc="دېتا تورىدىن دېتا يىغىش، تازىلاش، تەھلىل قىلىش."
          enDesc="Collecting, cleaning, and analyzing real-world data."
          examples={[
            {
              uyTitle: "Web سكرىپتى",
              enTitle: "Web Scraping",
              uyExplanation: "توردىن دېتا يىغىش (مەسىلەن: beautifulsoup).",
              enExplanation: "Extract data from websites.",
              code: `import requests\nfrom bs4 import BeautifulSoup\nr = requests.get('https://example.com')\nsoup = BeautifulSoup(r.text, 'html.parser')`,
              output: "تور بېكىتىدىن دېتا يىغىلدى"
            },
            {
              uyTitle: "JSON دېتا",
              enTitle: "JSON Data",
              uyExplanation: "API دىن دېتا ئالىش.",
              enExplanation: "Get data from APIs.",
              code: `import json\nresponse = requests.get('https://api.example.com/data')\ndata = response.json()`,
              output: "JSON دېتا يۈكلەندى"
            },
            {
              uyTitle: "دېتا تازىلاش",
              enTitle: "Data Cleaning Pipeline",
              uyExplanation: "توشۇپ كەتكەنلىرىنى تولدۇرۇش، ھەرپ بېكىتىش.",
              enExplanation: "Handle missing values, outliers.",
              code: `df = df.dropna()  # توشۇپ كەتكەنلەرنى ئۆچۈرۈش\ndf = df[df['age'] > 0]  # يولچىلىقنى تۈزىتىش`,
              output: "تازىلانغان دېتا تورى"
            }
          ]}
        />

        <div 
          className="mt-20 text-center text-blue-400/70 text-sm"
          style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl' }}
        >
          — دېتا ئىلىم — بۇ دۇنيادىكى سانلىق مەلۇماتلارنى تىلغا كەلتۈرۈش سەنئىتى —
        </div>
        <div 
          className="mt-2 text-center text-cyan-400/70 text-xs italic"
          style={{ direction: 'ltr' }}
        >
          — Data Science is the art of telling stories with numbers —
        </div>
      </div>
    </div>
  );
}