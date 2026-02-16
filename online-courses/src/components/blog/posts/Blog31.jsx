import React from 'react';

const Blog31 = () => {
  return (
    <div
      dir="rtl"
      className="max-w-4xl mx-auto px-4 py-10 font-sans bg-gradient-to-br from-gray-50 to-blue-50"
      style={{
        fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
      }}
    >
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="mb-6">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5feb53185d3dab691b47361b/1609930650139-9NRI63XUJ29Y7E9LEA9G/12eca-machine-learning.gif"
            alt="ماشىنا ئۆگىنىش تېما رەسىم"
            className="w-full h-auto rounded-xl shadow-lg mx-auto"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">ماشىنا ئۆگىنىشنىڭ ئەڭ باشلانغۇچ دەرىجىسى</h1>
        <div className="text-lg text-gray-600 mb-2">مۇئەللىپ: قاۋۇلجان</div>
        <div className="text-gray-500">2025-يىلى 12-ئاينىڭ 21-كۈنى</div>
      </div>

      {/* Intro */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-r-4 border-blue-500">
        <p className="text-lg text-gray-800 leading-relaxed">
            بۇ قېتم Python دا ماشىنا ئۆگىنىشنىڭ ئاساسىي مەزمۇنلىرىنى ئاسانلا تەجرىبە قىلىش ئۇسۇلىنى كۆرسىتىمەن.
        </p>
        <p className="mt-3 text-gray-700">
          ماشىنا ئۆگىنىش دېگەن — «سانلىق-مەلۇماتتىن ئۆرنەك ئۆگىنىپ باھا بېرىش تېخنىكىسى». بۈگۈن <code className="bg-gray-100 px-1 rounded">scikit-learn</code> ئىشلىتىپ، **تۈرگە ئايرىش** (Classification) ۋە **چىكىنشى سزىقى** (Regression) نىڭ ئاساسىنى ئۆگىنىمەن.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-10 border-r-4 border-purple-500">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">مۇندەرىجە</h2>
        <ol className="list-decimal pr-5 space-y-2 text-gray-700">
          <li>ماشىنا ئۆگىنىش دېگەن نېمە؟</li>
          <li>scikit-learn نى ئورنىتىش</li>
          <li>سانلىق-مەلۇمات توپلىمىنىڭ ھازىرلىنىشى</li>
          <li>ئاددىي تۈرگە ئايرىش مودېلى</li>
          <li>ئاددىي رېگرېسسىيە مودېلى</li>
          <li>خۇلاسە ۋە كېيىنكى دەرىجىگە بايقىش</li>
        </ol>
      </div>

      {/* Section 1: ماشىنا ئۆگىنىش دېگەن نېمە؟ */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-5 text-gray-800 border-r-4 border-green-500 pr-3">1. ماشىنا ئۆگىنىش دېگەن نېمە؟</h2>
        <div className="space-y-4">
          <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
            <strong>تۈرگە ئايرىش (Classification)</strong> — سانلىق-مەلۇماتنى كاتېگورىيەگە ئايرىش (مىسال: سپام خەت بەلگىلەش)
          </div>
          <div className="bg-green-50 p-5 rounded-xl border border-green-200">
            <strong>رېگرېسسىيە (Regression)</strong> — سانلىق-مەلۇماتتىن سانلىق قىممەتنى باھالاش (مىسال: ئەتىگى ھاۋا تېمپېراتۇرىسى باھالاش)
          </div>
          <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
            <strong>نازارەتلىك بار ئۆگىنىش (Supervised Learning)</strong> — توغرا جاۋاب بەلگىسى بار سانلىق-مەلۇماتدا ئۆگىنىش
          </div>
          <div className="bg-orange-50 p-5 rounded-xl border border-orange-200">
            <strong>نازارەتسز ئۆگىنىش (Unsupervised Learning)</strong> — بەلگىسىز سانلىق-مەلۇماتتا ئۆرنەك بايقاش
          </div>
        </div>
      </section>

      {/* Section 2: scikit-learn نى ئورنىتىش */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-5 text-gray-800 border-r-4 border-green-500 pr-3">2. scikit-learn نى ئورنىتىش</h2>
        <div className="bg-white rounded-xl shadow p-5 mb-4">
          <p className="mb-3 text-gray-700">
            تۆۋەندىكى بۇيرۇقنى تېرمىنالدا ئىجرا قىلىڭ:
          </p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-left text-sm">
            <code>{`pip install scikit-learn pandas matplotlib`}</code>
          </pre>
        </div>
        <div className="text-gray-700 space-y-2">
          <p><code className="bg-gray-100 px-1 rounded">scikit-learn</code> — Python دا ئىشلىتىلىدىغان ئەڭ مەشھۇر ماشىنا ئۆگىنىش كىتاپخانىسى.</p>
          <p>سانلىق-مەلۇمات تەھلىلى بىلەن بىرلەشتكەندە، ئاسانلا مودېل قۇرۇش مۇمكىن.</p>
        </div>
      </section>

      {/* Section 3: سانلىق-مەلۇمات توپلىمىنى ھازىرلاش */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-5 text-gray-800 border-r-4 border-green-500 pr-3">3. سانلىق-مەلۇمات توپلىمىنى ھازىرلاش</h2>
        <div className="bg-white rounded-xl text-left shadow p-5">
          <pre className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`from sklearn.datasets import load_iris
import pandas as pd

iris = load_iris()
df = pd.DataFrame(iris.data, columns=iris.feature_names)
df['target'] = iris.target
print(df.head())`}</code>
          </pre>
        </div>
        <div className="mt-4 text-gray-700">
          <p><code className="bg-gray-100 px-1 rounded">load_iris</code> —   گۈل (Iris) سانلىق-مەلۇمات توپلىمى، ماشىنا ئۆگىنىش دۇنياسىدىكى «دەسلەپ ئۈگنىش» سانلىق-مەلۇماتى.</p>
          <p>گۈل پەللىكى ۋە گۈل يۇپۇرمقى ئۆلچىمى ئاساسىدە تۈرگە ئايرىش مىسالى.</p>
        </div>
      </section>

      {/* Section 4: ئاددىي تۈرگە ئايرىش مودېلى */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-5 text-gray-800 border-r-4 border-green-500 pr-3">4. ئاددىي تۈرگە ئايرىش مودېلى</h2>
        <div className="bg-white text-left rounded-xl shadow p-5">
          <pre className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# Features and labels
X = df[iris.feature_names]
y = df['target']

# Split into train and test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Build model
model = DecisionTreeClassifier()
model.fit(X_train, y_train)

# Predict and evaluate
y_pred = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, y_pred))`}</code>
          </pre>
        </div>
        <div className="mt-4 text-gray-700">
          <p>قارار دەرىخى (Decision Tree) ئارقىلىق تۈرگە ئايرىش.</p>
          <p><code className="bg-gray-100 px-1 rounded">accuracy_score</code> ياردىمىدا باھالاش توغرىلىق دەرىجىسىنى باھالاڭ.</p>
        </div>
      </section>

      {/* Section 5: ئاددىي رېگرېسسىيە مودېلى */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-5 text-gray-800 border-r-4 border-green-500 pr-3">5. ئاددىي رېگرېسسىيە مودېلى</h2>
        <div className="bg-white text-left rounded-xl shadow p-5">
          <pre className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`from sklearn.linear_model import LinearRegression
from sklearn.datasets import make_regression
import matplotlib.pyplot as plt

# Generate synthetic data
X, y = make_regression(n_samples=100, n_features=1, noise=10, random_state=42)

# Build model
model = LinearRegression()
model.fit(X, y)

# Predict
y_pred = model.predict(X)

# Visualize
plt.scatter(X, y, color='blue')
plt.plot(X, y_pred, color='red')
plt.title("Linear Regression Example")
plt.show()`}</code>
          </pre>
        </div>
        <div className="mt-4 text-gray-700">
          <p>سىزىقلىق چىكىنىش (Linear Regression) ئارقىلىق سانلىق-مەلۇماتنىڭ ئۆرنىكىنى ئۆگىنىش.</p>
          <p>كۆك نۇقتىلار — ھەقىقىي سانلىق-مەلۇمات، قىزىل سىزىق — باھالاش نەتىجىسى.</p>
        </div>
      </section>

      {/* Section 6: خۇلاسە */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-5 text-gray-800 border-r-4 border-green-500 pr-3">6. خۇلاسە ۋە كېيىنكى دەرىجىگە بايقىش</h2>
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h3 className="font-bold text-xl mb-3"> بۇنىڭدا نىمە ئۈگەندۇق؟  </h3>
          <ul className="list-disc pr-5 space-y-1">
            <li>تۈرگە ئايرىش ۋە رېگرېسسىيەنىڭ ئاساسىنى تەجرىبە قىلدۇق</li>
            <li>scikit-learn ئارقىلىق ئاسانلا مودېل قۇرۇش ئۇسۇلىنى ئۆگىندۇق</li>
            <li>باھالاش توغرىلىق دەرىجىسىنى ھېسابلاش ۋە كۆرۈنمە قىلىش</li>
          </ul>
        </div>
      </section>

      {/* Footer Note */}
      <div className="text-center text-gray-500 text-sm mt-12 pt-6 border-t border-gray-200">
        © 2025 كەلبىل  – ماشىنا ئۆگىنىش دەرىسلىكلىرى
      </div>
    </div>
  );
};

export default Blog31;