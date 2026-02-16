// src/data/courses.js
export const qmlTopics = [
  /* ---------------------- Quantum Machine Learning (QML) ---------------------- */
  {
    id: "qml",
    title: "Quantum Machine Learning (QML) كىۋانىت ماشىنا ئۈگنىش",
    slides: [
      { heading: "What is QML?", content: `Quantum Machine Learning (QML) combines quantum computing with machine learning to process and analyze data in ways classical systems cannot. It uses qubits, superposition, and entanglement.` },
      { heading: "Key Quantum Concepts", content: `Qubit, superposition, measurement, entanglement, unitary evolution.` },
      { heading: "Quantum Data Encoding", content: `Amplitude encoding, basis encoding, angle encoding. Choose encoding that balances qubit count and expressivity.` },
      { heading: "Example: Angle Encoding (Code)", content: `# Python (PennyLane) example\nimport pennylane as qml\nfrom pennylane import numpy as np\ndef feature_map(x):\n    for i, xi in enumerate(x):\n        qml.RY(xi, wires=i)` },
      { heading: "Variational Quantum Circuits (VQC)", content: `Hybrid circuits: parameterized gates + classical optimizer (parameter-shift rule).` },
      { heading: "QML Algorithms", content: `Quantum SVM (kernel methods), VQC classifiers, Quantum PCA.` },
      { heading: "Training & Optimization", content: `Loss functions, parameter-shift gradients, gradient-free optimizers (COBYLA), batch strategies.` },
      { heading: "Hardware vs Simulation", content: `Noise, limited qubits, transpilation, error mitigation.` },
      { heading: "Use Case: Image Classification", content: `PCA -> angle encoding -> VQC -> measure expectation -> class label.` },
      { heading: "Limitations & Future", content: `NISQ constraints, hybrid approaches, roadmap to advantage.` },
      { heading: "Resources & Libraries", content: `PennyLane, Qiskit, Cirq, TorchQuantum. Read QML reviews on arXiv.` },
    ]
  },

  /* ---------------------- Quantum Physics ---------------------- */
  {
    id: "quantum_physics",
    title: "Quantum Physics كىۋانىت فىزىكىسى",
    slides: [
      { heading: "Scope & Motivation", content: `Quantum physics studies behavior of matter and energy at atomic/subatomic scales. Motivation: explain spectra, bonding, tunneling.` },
      { heading: "Wave-Particle Duality", content: `Particles exhibit wave-like behaviors (de Broglie wavelength λ = h/p).` },
      { heading: "Schrödinger Equation (time-dependent)", content: `iħ ∂ψ/∂t = Ĥ ψ — cornerstone of non-relativistic QM.` },
      { heading: "Operators & Observables", content: `Observables are Hermitian operators; measurement returns eigenvalues.` },
      { heading: "Potential Wells & Bound States", content: `Solve 1D infinite well: ψ_n(x) = sqrt(2/L) sin(nπx/L).` },
      { heading: "Tunneling & Barriers", content: `Tunneling probability through barrier — important for quantum devices.` },
      { heading: "Spin & Angular Momentum", content: `Spin-1/2 systems, Pauli matrices σ_x, σ_y, σ_z, spin measurement.` },
      { heading: "Perturbation Theory (intro)", content: `Non-degenerate perturbation theory for small Hamiltonian corrections.` },
      { heading: "Identical Particles & Statistics", content: `Bosons vs Fermions; Pauli exclusion principle.` },
      { heading: "Quantum Experiments", content: `Double-slit, Stern-Gerlach, Bell tests demonstrating nonlocal correlations.` },
      { heading: "Mathematical Tools", content: `Linear algebra: Hilbert spaces, eigen-decomposition, Dirac notation |ψ⟩.` },
      { heading: "Further Reading", content: `Griffiths, Sakurai, Cohen-Tannoudji; online Qiskit and Pennylane tutorials.` },
    ]
  },

  /* ---------------------- Quantum Mechanics (Advanced concepts) ---------------------- */
  {
    id: "quantum_mechanics",
    title: "Quantum Mechanics — كىۋانىت مىخانىكىسى",
    slides: [
      { heading: "Postulates of Quantum Mechanics", content: `State vectors, observables, measurement postulate, time evolution.` },
      { heading: "Eigenvalue Problems", content: `Solving Ĥ ψ = E ψ for bound states (harmonic oscillator, hydrogen atom simplifications).` },
      { heading: "Quantum Harmonic Oscillator", content: `Ladder operators a, a†; energy levels E_n = ħω(n + 1/2).` },
      { heading: "Angular Momentum Algebra", content: `Commutation relations [J_i, J_j] = iħ ε_ijk J_k; spherical harmonics.` },
      { heading: "Spin Systems & Density Matrices", content: `Pure vs mixed states; density operator ρ and partial trace.` },
      { heading: "Open Quantum Systems", content: `Decoherence, Lindblad master equation (intro).` },
      { heading: "Scattering Theory (intro)", content: `S-matrix, cross-sections — qualitative view.` },
      { heading: "Symmetries and Conservation Laws", content: `Noether’s theorem connection in QM contexts.` },
      { heading: "Approximation Methods", content: `WKB, variational principle, perturbation theory deeper examples.` },
      { heading: "Computational QM", content: `Numerical integration of Schrödinger eq., finite difference methods.` },
      { heading: "Example: Numerically Solve 1D well (Python)", content: `# Python: finite-difference solver skeleton\nimport numpy as np\n# build Hamiltonian matrix H and diagonalize\nE, psi = np.linalg.eigh(H)` },
      { heading: "Next Steps", content: `Quantum field theory intro, computational chemistry packages.` },
    ]
  },

  /* ---------------------- Quantum Technology ---------------------- */
  {
    id: "quantum_technology",
    title: "Quantum Technology كىۋانىت تېخنىكىسى",
    slides: [
      { heading: "Overview of Quantum Tech", content: `Quantum sensors, quantum communication, quantum computing hardware types.` },
      { heading: "Superconducting Qubits", content: `Transmon qubits, Josephson junctions, coherence times, control pulses.` },
      { heading: "Trapped Ion Qubits", content: `Ions in electromagnetic traps, laser cooling, long coherence times.` },
      { heading: "Photonic Qubits", content: `Encoding in polarization/paths; integrated photonics.` },
      { heading: "Topological Qubits (overview)", content: `Majorana modes & topological protection (introductory).` },
      { heading: "Quantum Error Correction", content: `QEC codes: Shor, Steane, surface codes — basic principles.` },
      { heading: "Control Electronics & Cryogenics", content: `Microwave control, dilution refrigerators (mK temperatures).` },
      { heading: "Quantum Networking", content: `QKD (BB84), entanglement distribution, quantum repeaters.` },
      { heading: "Benchmarking & Calibration", content: `Randomized benchmarking, tomography basics.` },
      { heading: "Industry & Roadmap", content: `Major providers: IBM, Rigetti, IonQ, Xanadu; commercialization pathways.` },
      { heading: "Hands-on on Cloud QPUs", content: `Use IBM/Qiskit or IonQ cloud backends for simple circuits.` },
      { heading: "Safety & Ethics", content: `Cryptography implications and responsible tech development.` },
    ]
  },

  /* ---------------------- Python Basics (Beginner) ---------------------- */
  {
    id: "python_basic",
    title: "Python — Basics (Beginner) پايسان باشلانغۇچ",
    slides: [
      { heading: "Python Intro", content: `Why Python? readable, large ecosystem (scientific computing, ML).` },
      { heading: "Installation & Environments", content: `Install Python, pip, virtualenv/venv, conda.` },
      { heading: "Basic Syntax", content: `Variables, expressions, indentation, comments.\nExample:\nx = 5\nprint(x)` },
      { heading: "Data Types", content: `int, float, str, bool, list, tuple, dict, set — examples and usage.` },
      { heading: "Control Flow", content: `if/elif/else, for loops, while loops — pattern examples.` },
      { heading: "Functions", content: `def myfunc(a, b=1): return a+b` },
      { heading: "File I/O", content: `open/read/write, CSV basic handling.` },
      { heading: "Error Handling", content: `try/except/finally usage.` },
      { heading: "Modules & Packages", content: `importing modules, pip installing packages.` },
      { heading: "Best Practices", content: `PEP8, docstrings, simple testing with assert.` },
      { heading: "Example: Simple Script", content: `# example\nimport math\nprint([math.sqrt(x) for x in range(1,6)])` },
      { heading: "Next Steps", content: `move to NumPy, Pandas for data work.` },
    ]
  },

  /* ---------------------- Python Intermediate ---------------------- */
  {
    id: "python_intermediate  ",
    title: "Python — Intermediate پايسان ئوتتۇرا سەۋىيە",
    slides: [
      { heading: "Comprehensions & Generators", content: `List/dict comprehensions, generator expressions.` },
      { heading: "Decorators & Context Managers", content: `@decorator pattern, with open(...).` },
      { heading: "OOP in Python", content: `Classes, inheritance, dunder methods, properties.` },
      { heading: "Iterators & Iterables", content: `__iter__, __next__, creating custom iterators.` },
      { heading: "Concurrency Basics", content: `threading, multiprocessing, asyncio overview.` },
      { heading: "Typing & Annotations", content: `type hints, mypy basic checks.` },
      { heading: "Packaging", content: `setup.cfg, pyproject.toml, pip install -e .` },
      { heading: "Testing", content: `pytest basics, fixtures, assertions.` },
      { heading: "Profiling & Optimization", content: `cProfile, timeit, vectorization with NumPy.` },
      { heading: "Interfacing with C/Fortran", content: `ctypes, cffi, or using compiled libs.` },
      { heading: "Example: Async HTTP (aiohttp)", content: `import aiohttp\n# basic async fetch pattern` },
      { heading: "Next Steps", content: `move to data science stacks and ML libs.` },
    ]
  },

  /* ---------------------- NumPy ---------------------- */
  {
    id: "numpy",
    title: "NumPy — Numerical Python  نانپاي",
    slides: [
      { heading: "Introduction to NumPy", content: `ndarray, vectorized operations, broadcasting.` },
      { heading: "Creating Arrays", content: `np.array, np.zeros, np.ones, arange, linspace.` },
      { heading: "Indexing & Slicing", content: `1D/2D indexing, boolean masks, fancy indexing.` },
      { heading: "Broadcasting Rules", content: `How arrays of different shapes interact.` },
      { heading: "Linear Algebra with NumPy", content: `dot, matmul, eig, svd examples.` },
      { heading: "Random & Statistics", content: `np.random, mean, std, histogram.` },
      { heading: "Performance Tips", content: `avoid Python loops, use ufuncs, memory views.` },
      { heading: "Example: Vectorized Computation", content: `# compute pairwise distances\nimport numpy as np\nX = np.random.randn(100,3)\ndists = np.sqrt(((X[:,None,:]-X[None,:,:])**2).sum(-1))` },
      { heading: "Interoperability", content: `works with SciPy, Pandas, scikit-learn.` },
      { heading: "Next Steps", content: `NumPy internals, C extensions.` },
      { heading: "Sample Code: SVD PCA", content: `import numpy as np\nX_center = X - X.mean(axis=0)\nU, S, Vt = np.linalg.svd(X_center, full_matrices=False)\nPCs = U[:,:2]` },
      { heading: "Edge Cases", content: `NaN handling, dtype promotion, memory order (C vs F).` },
    ]
  },

  /* ---------------------- Pandas ---------------------- */
  {
    id: "pandas",
    title: "Pandas — DataFrames & Data Wrangling  پەنداس",
    slides: [
      { heading: "Introduction to Pandas", content: `Series and DataFrame core concepts.` },
      { heading: "Reading/Writing Data", content: `pd.read_csv, to_csv, read_excel examples.` },
      { heading: "Indexing & Selection", content: `loc, iloc, boolean indexing.` },
      { heading: "Missing Data", content: `isnull, dropna, fillna strategies.` },
      { heading: "GroupBy & Aggregation", content: `groupby().agg(), transform(), pivot_table.` },
      { heading: "Merging & Joining", content: `merge, concat, join usage scenarios.` },
      { heading: "Time Series Basics", content: `resample, rolling, datetime index handling.` },
      { heading: "Apply & Vectorization", content: `avoid slow row-wise apply where possible.` },
      { heading: "Performance Tips", content: `categorical dtype, chunked reading, use NumPy when possible.` },
      { heading: "Example: Data Cleaning Pipeline (code)", content:
`import pandas as pd
df = pd.read_csv('data.csv')
df['date'] = pd.to_datetime(df['date'])
df = df.dropna(subset=['target'])
df['category'] = df['category'].astype('category')
agg = df.groupby('category')['value'].mean().reset_index()` },
      { heading: "Next Steps", content: `Dask for larger-than-memory workflows.` },
      { heading: "Common Pitfalls", content: `chained indexing, silent dtype changes.` },
    ]
  },

  /* ---------------------- Matplotlib ---------------------- */
  {
    id: "matplotlib",
    title: "Matplotlib — Visualization Basics",
    slides: [
      { heading: "Introduction & Philosophy", content: `Figure, axis, artist model.` },
      { heading: "Basic Plots", content: `plot, scatter, bar, hist examples.` },
      { heading: "Customization", content: `labels, titles, legends, colors.` },
      { heading: "Subplots & Layouts", content: `plt.subplots, gridspec usage.` },
      { heading: "Styling", content: `rcParams, style.use('seaborn'), saving figures.` },
      { heading: "Annotation & Text", content: `annotate, text positioning.` },
      { heading: "3D & Image Plots", content: `mplot3d, imshow.` },
      { heading: "Interactive Backends", content: `notebook, ipympl, interactive zoom.` },
      { heading: "Example: Plotting Training Loss", content:
`import matplotlib.pyplot as plt
plt.plot(losses)
plt.xlabel('epoch'); plt.ylabel('loss')` },
      { heading: "Best Practices", content: `clear labels, readable fonts, vector formats for publication.` },
      { heading: "Next Steps", content: `Seaborn for statistical visuals.` },
      { heading: "Exporting", content: `savefig with dpi and bbox_inches='tight'.` },
    ]
  },

  /* ---------------------- Seaborn ---------------------- */
  {
    id: "seaborn",
    title: "Seaborn — Statistical Visualization",
    slides: [
      { heading: "Intro to Seaborn", content: `Built on Matplotlib, high-level API for stats plots.` },
      { heading: "Relational Plots", content: `scatterplot, relplot, lineplot with hue, style.` },
      { heading: "Categorical Plots", content: `boxplot, violinplot, barplot, countplot.` },
      { heading: "Distribution Plots", content: `histplot, kdeplot, distplot (deprecated).` },
      { heading: "Matrix Plots", content: `heatmap, clustermap.` },
      { heading: "PairGrid & Pairplot", content: `pairwise relationships and quick EDA.` },
      { heading: "Styling & Themes", content: `set_theme, color palettes.` },
      { heading: "Example: Pairplot for EDA", content:
`import seaborn as sns
sns.pairplot(df[['a','b','c','target']], hue='target')` },
      { heading: "Combining with Matplotlib", content: `fine-grained control using plt.` },
      { heading: "Performance Tips", content: `sample large datasets, use rasterized images for large heatmaps.` },
      { heading: "Next Steps", content: `interactive libs: plotly, altair.` },
      { heading: "Common Use Cases", content: `EDA, model diagnostics, publication plots.` },
    ]
  },

  /* ---------------------- scikit-learn ---------------------- */
  {
    id: "scikit_learn",
    title: "scikit-learn — Practical ML in Python",
    slides: [
      { heading: "Introduction to scikit-learn", content: `Unified API for ML algorithms (fit/predict).` },
      { heading: "Preprocessing", content: `StandardScaler, OneHotEncoder, Pipelines.` },
      { heading: "Supervised Models", content: `LinearRegression, LogisticRegression, RandomForest.` },
      { heading: "Unsupervised Models", content: `KMeans, PCA, DBSCAN.` },
      { heading: "Model Selection", content: `train_test_split, cross_val_score, GridSearchCV.` },
      { heading: "Pipelines & Transformers", content: `construct repeatable pipelines for production.` },
      { heading: "Evaluation Metrics", content: `accuracy, precision, recall, ROC-AUC, confusion matrix.` },
      { heading: "Example: End-to-End Pipeline (code)", content:
`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier

pipe = Pipeline([('scaler', StandardScaler()), ('clf', RandomForestClassifier())])
pipe.fit(X_train, y_train)
print(pipe.score(X_test, y_test))` },
      { heading: "Feature Importance & SHAP", content: `Inspecting model explainability.` },
      { heading: "Deployment Considerations", content: `serialization with joblib, reproducibility.` },
      { heading: "Next Steps", content: `move to specialized libraries (XGBoost, LightGBM).` },
      { heading: "Common Pitfalls", content: `data leakage, overfitting, improper cross-validation.` },
    ]
  },

  /* ---------------------- TensorFlow (expanded) ---------------------- */
  {
    id: "tensorflow_expanded",
    title: "TensorFlow & Deep Learning (Comprehensive)",
    slides: [
      { heading: "TensorFlow Overview", content: `Eager execution, Keras API, computational graphs.` },
      { heading: "Tensors & Operations", content: `tf.constant, tf.Variable, broadcasting rules.` },
      { heading: "Building Models (Keras Sequential)", content: `model = tf.keras.Sequential([...])` },
      { heading: "Functional API & Subclassing", content: `tf.keras.Model subclass for complex models.` },
      { heading: "Custom Layers & Losses", content: `build custom tf.keras.layers.Layer and tf.keras.losses.Loss.` },
      { heading: "Training Loops & tf.GradientTape", content: `custom training loops for research.` },
      { heading: "Callbacks & Checkpoints", content: `EarlyStopping, ModelCheckpoint.` },
      { heading: "Transfer Learning", content: `Use pretrained models (ResNet, EfficientNet) and fine-tune.` },
      { heading: "TF Data Pipeline", content: `tf.data for performant input pipelines.` },
      { heading: "Distributed Training", content: `tf.distribute strategies for multi-GPU/TPU.` },
      { heading: "Model Deployment", content: `TensorFlow Serving, TF Lite, TF.js.` },
      { heading: "Example: Custom Training (code)", content:
`import tensorflow as tf

model = tf.keras.Sequential([tf.keras.layers.Dense(64, activation='relu'), tf.keras.layers.Dense(1)])
optimizer = tf.keras.optimizers.Adam()
loss_fn = tf.keras.losses.MeanSquaredError()

# custom training step
@tf.function
def train_step(x, y):
    with tf.GradientTape() as tape:
        preds = model(x, training=True)
        loss = loss_fn(y, preds)
    grads = tape.gradient(loss, model.trainable_variables)
    optimizer.apply_gradients(zip(grads, model.trainable_variables))
    return loss` },
    ]
  },

  /* ---------------------- Big Data (expanded) ---------------------- */
  {
    id: "big_data_expanded",
    title: " چوڭ سانلىق مەلۇمات ئانالىزى(Big Data) ",
    slides: [
      { heading: "Big Data Landscape", content: `Hadoop ecosystem, Spark, cloud data platforms.` },
      { heading: "HDFS & Distributed Storage", content: `HDFS architecture, replication.` },
      { heading: "Apache Spark Core", content: `RDDs, DataFrames, lazy evaluation.` },
      { heading: "Spark SQL & MLlib", content: `SQL on big data, scalable ML with MLlib.` },
      { heading: "Streaming: Kafka & Flink", content: `Real-time pipelines and stream processing.` },
      { heading: "NoSQL Systems", content: `Cassandra, MongoDB design trade-offs.` },
      { heading: "Data Lakes vs Warehouses", content: `Raw ingestion vs curated analytics.` },
      { heading: "Cloud Data Services", content: `AWS/GCP/Azure managed services.` },
      { heading: "Scaling ML Pipelines", content: `Feature stores, batch/stream feature engineering.` },
      { heading: "Case Study: Recommendation Systems", content: `Architecture for large-scale recommendations.` },
      { heading: "Hands-on Example (PySpark)", content:
`from pyspark.sql import SparkSession
spark = SparkSession.builder.appName('example').getOrCreate()
df = spark.read.parquet('s3://bucket/data.parquet')
df.groupBy('category').count().show()` },
      { heading: "Next Steps", content: `Data governance, security, cost optimization.` },
    ]
  },

  /* ---------------------- Git & GitHub (expanded) ---------------------- */
  {
    id: "git_expanded",
    title: "Git & GitHub گىت ۋە گىتخاب",
    slides: [
      { heading: "Why Version Control?", content: `Collaboration, history, branching.` },
      { heading: "Git Basics & Setup", content: `git config, SSH keys, .gitignore.` },
      { heading: "Branching Models", content: `GitFlow, trunk-based development.` },
      { heading: "Pull Requests & Code Review", content: `PR etiquette, templates.` },
      { heading: "CI/CD Basics", content: `GitHub Actions for testing and deployment.` },
      { heading: "Rebasing & Merge Strategies", content: `git rebase vs merge pros/cons.` },
      { heading: "Monorepos & Submodules", content: `Managing large repos.` },
      { heading: "Protecting Branches & Policies", content: `Required reviews, status checks.` },
      { heading: "Open Source Workflow", content: `fork → PR → maintainers review.` },
      { heading: "Example: GitHub Actions (YAML)", content:
`name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Python
        uses: actions/setup-python@v4
        with: python-version: '3.10'` },
      { heading: "Best Practices", content: `Small commits, descriptive messages, code style checks.` },
    ]
  },
   /* ---------------------- Statistics (Basic to Advanced) ---------------------- */
{
  id: "statistics",
  title: "Statistics (Basic to Advanced)سىتاستىكا باشلانغۇچ ۋە ئوتتۇرا سەۋىيە",
  slides: [
    { heading: "What is Statistics?", content: "Statistics is the science of collecting, analyzing, interpreting, and presenting data." },
    { heading: "Types of Data", content: "Quantitative vs Qualitative, Discrete vs Continuous." },
    { heading: "Descriptive Statistics", content: "Mean, median, mode, variance, standard deviation." },
    { heading: "Probability Basics", content: "Sample space, events, conditional probability, Bayes’ theorem." },
    { heading: "Distributions", content: "Normal, binomial, Poisson, uniform distributions." },
    { heading: "Inferential Statistics", content: "Hypothesis testing, confidence intervals, p-values." },
    { heading: "Regression Analysis", content: "Linear regression, multiple regression, assumptions, R²." },
    { heading: "ANOVA & Chi-Square", content: "Comparing means and categorical variables." },
    { heading: "Advanced Topics", content: "Time series, multivariate analysis, PCA." },
    { heading: "Tools & Libraries", content: "NumPy, SciPy, pandas, statsmodels." },
  ]
},

/* ---------------------- Machine Learning (ML) ---------------------- */
{
  id: "ml",
  title: "Machine Learning (ML)  ماشىنا ئۈگنىش",
  slides: [
    { heading: "What is ML?", content: "Machine Learning enables systems to learn patterns from data and make predictions." },
    { heading: "Types of ML", content: "Supervised, unsupervised, reinforcement learning." },
    { heading: "Supervised Learning", content: "Regression and classification using labeled data." },
    { heading: "Unsupervised Learning", content: "Clustering, dimensionality reduction (PCA, t-SNE)." },
    { heading: "Model Evaluation", content: "Accuracy, precision, recall, F1-score, confusion matrix." },
    { heading: "Overfitting & Underfitting", content: "Bias-variance tradeoff, cross-validation." },
    { heading: "Feature Engineering", content: "Scaling, encoding, selection, extraction." },
    { heading: "Popular Algorithms", content: "Linear regression, decision trees, SVM, k-NN, Naive Bayes." },
    { heading: "Tools & Libraries", content: "scikit-learn, XGBoost, LightGBM, pandas." },
    { heading: "ML Workflow", content: "Data → preprocessing → training → evaluation → deployment." },
  ]
},

/* ---------------------- Neural Networks (Deep Learning) ---------------------- */
{
  id: "nn",
  title: "Neural Networks نىرۋا تورى ",
  slides: [
    { heading: "What is a Neural Network?", content: "A neural network is a series of interconnected nodes that mimic the human brain." },
    { heading: "Perceptron & Activation", content: "Sigmoid, ReLU, tanh functions. Forward pass and activation." },
    { heading: "Backpropagation", content: "Gradient descent, chain rule, weight updates." },
    { heading: "Loss Functions", content: "MSE, cross-entropy, hinge loss." },
    { heading: "Network Architectures", content: "Feedforward, CNN, RNN, LSTM, Transformer." },
    { heading: "Regularization", content: "Dropout, L2/L1 penalties, batch normalization." },
    { heading: "Optimization Algorithms", content: "SGD, Adam, RMSprop." },
    { heading: "Training Strategies", content: "Epochs, batch size, learning rate scheduling." },
    { heading: "Frameworks", content: "TensorFlow, PyTorch, Keras." },
    { heading: "Use Cases", content: "Image classification, NLP, speech recognition, recommendation systems.", codeexplore: "Example: Simple Neural Network in Keras\n```python\nimport tensorflow as tf\nfrom tensorflow import keras\nmodel = keras.Sequential([\n    keras.layers.Dense(64, activation='relu', input_shape=(input_dim,)),\n    keras.layers.Dense(10, activation='softmax')\n])\nmodel.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])\n```" },
  ]
},
];
