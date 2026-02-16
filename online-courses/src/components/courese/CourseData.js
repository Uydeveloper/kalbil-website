const CourseData = [
  {
    id: 1,
    title: 'سىتاستىكا (Statistics)',
    category: 'Data Science',
    description: 'ئاساسىي سىتاستىكا دەرسى - داتا تەھلىل ۋە ئىستاتىستىكىلىق ئۇسۇللارنى ئۆگىنىش',
    fullDescription: `
## سىتاستىكا دەرس تەپسىلاتى
بۇ دەرس سىتاستىكىنىڭ ئاساسىي چۈشەنچىلىرىدىن باشلاپ، ئىلغار ئىستاتىستىكىلىق تەھلىل ئۇسۇللىرىغىچە بارلىق باسقۇچلارنى قاپلايدۇ. داتا ئىلمى، Business Intelligence، ۋە Research ئۈچۈن كېرەكلىك بارلىق بىلىملەرنى ئۆز ئىچىگە ئالىدۇ.

### دەرس مەزمۇنى:
- ✅ سىتاستىكا كىرىش سۆز ۋە چۈشەنچىلەر
- ✅ Descriptive Statistics (Mean, Median, Variance, STD)
- ✅ Probability Theory ۋە Distributions
- ✅ Hypothesis Testing ۋە Confidence Intervals
- ✅ Regression Analysis
- ✅ Bayesian Statistics
- ✅ Time Series Analysis
- ✅ Real-World Data Analysis Projects

### ئۆگىنىدىغان نەرسىلەر:
- داتا توپلاش ۋە تەشكىللەش ئۇسۇللىرى
- ئىستاتىستىكىلىق چۈشەنچىلەر ۋە ئۇلارنىڭ قوللىنىشى
- ئېھتىماللىق نەزەرىيەسى
- بايېس تېئورىيەسى
- ئىستاتىستىكىلىق پىششىقلىق ۋە قارار چىقىرىش
- داتا گرافىكىلىرى ۋە كۆرۈنمە چۈشەندۈرۈش
    `,
    duration: '25 سائەت',
    level: 'باشلانغۇچى',
    instructor: 'ئۇيغۇر ئاكادېمىيەسى',
    instructorTitle: 'ئىشقا ئورۇنلاشقان ئوقۇتقۇچى',
    thumbnail: '/images/stats-course.jpg',
    colorScheme: '#4CAF50',
    videos: [
      {
        id: 'stat-001',
        title: 'سىتاستىكا 1-باب: ئاساسىي ئۇچۇرلار',
        url: 'https://www.youtube.com/watch?v=KrkAJl8BZsQ',
        youtubeUrl: 'https://www.youtube.com/watch?v=KrkAJl8BZsQ',
        duration: '45:30',
        description: 'سىتاستىكىنىڭ تارىخى ۋە ئەھمىيىتى، Population vs Sample، Variables تىپلىرى، داتا توپلاش ۋە تەشكىللەش ئۇسۇللىرى',
        thumbnail: 'public/image05.png',
      },
      {
        id: 'stat-002',
        title: 'سىتاستىكا 2-باب: ئامالىي مەسىلىلەر',
        url: 'https://www.youtube.com/watch?v=e-OYQ9VpOu8',
        youtubeUrl: 'https://www.youtube.com/watch?v=e-OYQ9VpOu8',
        duration: '38:15',
        description: 'Descriptive Statistics: Central Tendency (Mean, Median, Mode)، Variability (Variance, Standard Deviation)',
        thumbnail: '/images/stats-course.jpg',
      },
      {
        id: 'stat-003',
        title: 'سىتاستىكا 3-باب: ھادىسە دىگەن نىمە',
        url: 'https://www.youtube.com/watch?v=6-YrfMubzCE',
        youtubeUrl: 'https://www.youtube.com/watch?v=6-YrfMubzCE',
        duration: '42:20',
        description: 'Probability Theory: ئاساسىي چۈشەنچىلەر، Probability Rules، Conditional Probability',
        thumbnail: '/images/stats-course.jpg',
      },
      {
        id: 'stat-004',
        title: 'سىتاستىكا 4-باب: قايتىش سىزقى',
        url: 'https://www.youtube.com/watch?v=q_WigNELxaA',
        youtubeUrl: 'https://www.youtube.com/watch?v=q_WigNELxaA',
        duration: '51:10',
        description: 'Regression Analysis: Linear Regression، Correlation، Regression Models',
        thumbnail: '/images/stats-course.jpg',
      },
      {
        id: 'stat-005',
        title: 'سىتاستىكا 5-باب: ئېھتىماللىق',
        url: 'https://www.youtube.com/watch?v=znUAdB3oLhw',
        youtubeUrl: 'https://www.youtube.com/watch?v=znUAdB3oLhw',
        duration: '39:45',
        description: 'Probability Distributions: Normal Distribution، Binomial Distribution، Poisson Distribution',
        thumbnail: '/images/stats-course.jpg',
      },
      {
        id: 'stat-006',
        title: 'سىتاستىكا 6-باب: شەرىتلىك ئېھتىماللىق',
        url: 'https://www.youtube.com/watch?v=XCpxRwCJAT8',
        youtubeUrl: 'https://www.youtube.com/watch?v=XCpxRwCJAT8',
        duration: '47:30',
        description: 'Conditional Probability، Bayes Theorem ئاساسلىرى، Application لار',
        thumbnail: '/images/stats-course.jpg',
      },
      {
        id: 'stat-007',
        title: 'سىتاستىكا 7-باب: بايېس تېئورىيەسى',
        url: 'https://www.youtube.com/watch?v=Shgg_4vuu2Q',
        youtubeUrl: 'https://www.youtube.com/watch?v=Shgg_4vuu2Q',
        duration: '55:20',
        description: 'Bayesian Statistics: Prior ۋە Posterior، Bayesian Inference، Real-World Applications',
        thumbnail: '/images/stats-course.jpg',
      },
      {
        id: 'stat-008',
        title: 'سىتاستىكا 8-باب: بايېس مەشىقلىرى',
        url: 'https://www.youtube.com/watch?v=e0aTPPq1siM',
        youtubeUrl: 'https://www.youtube.com/watch?v=e0aTPPq1siM',
        duration: '43:15',
        description: 'Bayesian مەسىلىلىرىنى ھەل قىلىش، Python ئارقىلىق ئەمەلىيەت',
        thumbnail: '/images/stats-course.jpg',
      },
      {
        id: 'stat-009',
        title: 'سىتاستىكا 9-باب: ئۈگىنىش مەنبەلىرى',
        url: 'https://www.youtube.com/watch?v=8fNQ9GIHggY',
        youtubeUrl: 'https://www.youtube.com/watch?v=8fNQ9GIHggY',
        duration: '36:40',
        description: 'Learning Resources، ئىستاتىستىكا ئۆگىنىش ئۇسۇللىرى، مەنبەلەر',
        thumbnail: '/images/stats-course.jpg',
      },
      {
        id: 'stat-010',
        title: 'سىتاستىكا 10-باب: خۇلاسە ۋە ئەمەلىي پروژىكت',
        url: 'https://www.youtube.com/watch?v=u1yjowSsYRk',
        youtubeUrl: 'https://www.youtube.com/watch?v=u1yjowSsYRk',
        duration: '49:25',
        description: 'دەرس خۇلاسىسى، Real-World داتا تەھلىل پروژىكتى',
        thumbnail: '/images/stats-course.jpg',
      },
    ],
    syllabus: [
      'ھەپتىلە 1: سىتاستىكا كىرىش سۆز ۋە داتا تەييارلاش',
      'ھەپتىلە 2: Descriptive Statistics ۋە Data Visualization',
      'ھەپتىلە 3: Probability Theory ۋە Distributions',
      'ھەپتىلە 4: Inferential Statistics ۋە Hypothesis Testing',
      'ھەپتىلە 5: Correlation ۋە Regression Analysis',
      'ھەپتىلە 6: Bayesian Statistics',
      'ھەپتىلە 7-8: Real-World Statistical Analysis Projects'
    ],
    prerequisites: ['باشلانغۇچى ماتېماتىكا', 'Logical Thinking'],
    tools: ['Python', 'Excel', 'Jupyter Notebook', 'Statistical Software'],
  },
  {
    id: 2,
    title: 'پايسان (Python)',
    category: 'Programming',
    description: 'پايسان ئاساسىي بىلىم - Python پروگراممىلاش تىلىنى ئۆگىنىش',
    fullDescription: `
## پايسان دەرس تەپسىلاتى
بۇ دەرس Python 3 نىڭ بارلىق مۇھىم ئىقتىدارلىرىنى قاپلايدۇ. باشلانغۇچىلاردىن ئىشقا ئورۇنلاشقان Python Developer بولغۇچىلارغىچە بارلىق باسقۇچلارنى ئۆز ئىچىگە ئالىدۇ.

### دەرس مەزمۇنى:
- ✅ Python ئاساسىي سىنتاكسى
- ✅ Data Structures (Lists, Tuples, Dictionaries, Sets)
- ✅ Control Flow (if, for, while)
- ✅ Functions ۋە Modules
- ✅ Object-Oriented Programming (OOP)
- ✅ File Handling ۋە Exception Handling
- ✅ Data Analysis (Pandas, NumPy)
- ✅ Data Visualization (Matplotlib, Seaborn)
- ✅ Real-World Projects

### ئۆگىنىدىغان نەرسىلەر:
- Python ئورنىتىش ۋە مۇھىت تەييارلاش
- ئاساسىي پروگراممىلاش چۈشەنچىلىرى
- داتا قۇرۇلمىلىرى ۋە ئۇلارنى باشقۇرۇش
- فۇنكسىيەلەر ۋە مودۇللارنى ئىشلىتىش
- OOP نىڭ ئاساسلىرى
- داتا تەھلىل ۋە گرافىك چىقىرىش
- ھەقىقىي پروژىكتلارنى ئىجرا قىلىش
    `,
    duration: '30 سائەت',
    level: 'باشلانغۇچى',
    instructor: 'ئۇيغۇر ئاكادېمىيەسى',
    instructorTitle: 'ئىشقا ئورۇنلاشقان Python Developer',
    thumbnail: '/images/python-course.jpg',
    colorScheme: '#3776AB',
    videos: [
      {
        id: 'python-001',
        title: 'پايسان 1-باب: ئاساسىي ئۇچۇرلار',
        url: 'https://www.youtube.com/watch?v=cpu7g9Hscj0',
        youtubeUrl: 'https://www.youtube.com/watch?v=cpu7g9Hscj0',
        duration: '52:20',
        description: 'Python ئورنىتىش، مۇھىت تەييارلاش، بىرىنچى پروگرامما، Variables ۋە Data Types',
        thumbnail: '/images/python-course.jpg',
      },
      {
        id: 'python-002',
        title: 'پايسان 2-باب: ئامالىي مەسىلىلەر',
        url: 'https://www.youtube.com/watch?v=kgYV7PEo8GE',
        youtubeUrl: 'https://www.youtube.com/watch?v=kgYV7PEo8GE',
        duration: '48:35',
        description: 'Control Flow: if, elif, else، Comparison Operators، Logical Operators',
        thumbnail: '/images/python-course.jpg',
      },
      {
        id: 'python-003',
        title: 'پايسان 3-باب: if, for, while loops, list, tuples, set',
        url: 'https://www.youtube.com/watch?si=wIti6GWYzaydlBcT&v=QSAk68EQBdI&feature=youtu.be',
        youtubeUrl: 'https://www.youtube.com/watch?si=wIti6GWYzaydlBcT&v=QSAk68EQBdI&feature=youtu.be',
        duration: '61:10',
        description: 'Loops: for, while، Data Structures: Lists, Tuples, Sets ۋە ئۇلارنىڭ مەنزىلىرى',
        thumbnail: '/images/python-course.jpg',
      },
      {
        id: 'python-004',
        title: 'پايسان 4-باب: Coffee project 02',
        url: 'https://www.youtube.com/watch?v=XI_zateAgbo',
        youtubeUrl: 'https://www.youtube.com/watch?v=XI_zateAgbo',
        duration: '55:45',
        description: 'ئەمەلىي پروژىكت: Coffee Shop Management System - ئاساسىي قۇرۇلما',
        thumbnail: '/images/python-course.jpg',
      },
      {
        id: 'python-005',
        title: 'پايسان 5-باب: Coffee project 02',
        url: 'https://www.youtube.com/watch?v=XI_zateAgbo',
        youtubeUrl: 'https://www.youtube.com/watch?v=XI_zateAgbo',
        duration: '59:30',
        description: 'ئەمەلىي پروژىكت: Coffee Shop Management System - ئىلغار ئىقتىدارلار',
        thumbnail: '/images/python-course.jpg',
      },
      {
        id: 'python-006',
        title: 'پايسان 6-باب: class, oop',
        url: 'https://www.youtube.com/watch?v=aAqP3RXcb2U',
        youtubeUrl: 'https://www.youtube.com/watch?v=aAqP3RXcb2U',
        duration: '66:15',
        description: 'Object-Oriented Programming: Classes ۋە Objects، Inheritance، Polymorphism، Encapsulation',
        thumbnail: '/images/python-course.jpg',
      },
      {
        id: 'python-007',
        title: 'پەنداس 1-باب: پەنداس كىرىش دەرسى',
        url: 'https://www.youtube.com/watch?v=nhwLAXKfiPY',
        youtubeUrl: 'https://www.youtube.com/watch?v=nhwLAXKfiPY',
        duration: '49:20',
        description: 'Pandas كىرىش سۆز: DataFrames، Series، ئاساسىي ئۇچۇرلار',
        thumbnail: '/images/python-course.jpg',
      },
      {
        id: 'python-008',
        title: 'پەنداس 2-باب: Reading and Writing Data in Pandas',
        url: 'https://www.youtube.com/watch?v=zJYX5qIt3Kg',
        youtubeUrl: 'https://www.youtube.com/watch?v=zJYX5qIt3Kg',
        duration: '53:40',
        description: 'Pandas: CSV, Excel فايللاردىن داتا ئوقۇش ۋە يېزىش، Data Cleaning',
        thumbnail: '/images/python-course.jpg',
      },
      {
        id: 'python-009',
        title: 'پەنداس 3-باب: Selecting and Filtering Data in Pandas',
        url: 'https://www.youtube.com/watch?v=0PO6b8ABdIU',
        youtubeUrl: 'https://www.youtube.com/watch?v=0PO6b8ABdIU',
        duration: '47:25',
        description: 'Pandas: داتانى سۈزۈش ۋە تاللاش، Boolean Indexing، Query ئىپادىلىرى',
        thumbnail: '/images/python-course.jpg',
      },
      {
        id: 'python-010',
        title: 'پەنداس 4-باب: Data Cleaning and Preparation in Pandas',
        url: 'https://www.youtube.com/watch?v=potasl0BpY0',
        youtubeUrl: 'https://www.youtube.com/watch?v=potasl0BpY0',
        duration: '58:10',
        description: 'Pandas: داتانى تازىلاش، Missing Values بىلەن ئىشلەش، Data Transformation',
        thumbnail: '/images/python-course.jpg',
      },
      {
        id: 'python-011',
        title: 'پەنداس 5-باب: calculate summary statistics in pandas, combine datasets',
        url: 'https://www.youtube.com/watch?v=9bwnBEiZrTE',
        youtubeUrl: 'https://www.youtube.com/watch?v=9bwnBEiZrTE',
        duration: '51:35',
        description: 'Pandas: ئىستاتىستىكىلىق ھېسابلاش، داتا توپلاشلارنى بىرلەشتۈرۈش، GroupBy ئەمەلىيەتلىرى',
        thumbnail: '/images/python-course.jpg',
      },
      {
        id: 'python-012',
        title: 'نامپاي 1-باب: numpy introduction, array creation, indexing, slicing',
        url: 'https://www.youtube.com/watch?v=Kvwy4lC4BNw',
        youtubeUrl: 'https://www.youtube.com/watch?v=Kvwy4lC4BNw',
        duration: '54:20',
        description: 'NumPy كىرىش سۆز: Arrays، Array Creation، Indexing ۋە Slicing',
        thumbnail: '/images/python-course.jpg',
      },
      {
        id: 'python-013',
        title: 'نامپاي 2-باب: eye, zeros, ones, random functions in numpy, norm, normalization, reshape',
        url: 'https://www.youtube.com/watch?v=LySt_e4bZ88',
        youtubeUrl: 'https://www.youtube.com/watch?v=LySt_e4bZ88',
        duration: '62:15',
        description: 'NumPy: ئالاھىدە Arrays (eye, zeros, ones)، Random Functions، Normalization، Reshape',
        thumbnail: '/images/python-course.jpg',
      },
      {
        id: 'python-014',
        title: 'نامپاي 3-باب: transpose, trace, inverse, matrix operations in numpy',
        url: 'https://www.youtube.com/watch?v=S9xS04VLe0w',
        youtubeUrl: 'https://www.youtube.com/watch?v=S9xS04VLe0w',
        duration: '59:40',
        description: 'NumPy: ماترىتسا Operations (Transpose, Trace, Inverse)، ماتېماتىكىلىق ئەمەلىيەتلەر',
        thumbnail: '/images/python-course.jpg',
      },
      {
        id: 'python-015',
        title: 'نامپاي 4-باب: transpose, trace, inverse, PCA, matrix operations in numpy',
        url: 'https://www.youtube.com/watch?v=RnFCjoacnM8',
        youtubeUrl: 'https://www.youtube.com/watch?v=RnFCjoacnM8',
        duration: '64:25',
        description: 'NumPy: ماترىتسا Operations داۋامى، PCA (Principal Component Analysis)',
        thumbnail: '/images/python-course.jpg',
      },
      {
        id: 'python-016',
        title: 'سىبورن، مەتلەپ 1-باب: pie chart, count plot, bar plot, histogram, dist plot',
        url: 'https://www.youtube.com/watch?v=RvqRWZvff90',
        youtubeUrl: 'https://www.youtube.com/watch?v=RvqRWZvff90',
        duration: '57:30',
        description: 'Data Visualization: Matplotlib ۋە Seaborn بىلەن گرافىك چىقىرىش ئەمەلىيەتلىرى',
        thumbnail: '/images/python-course.jpg',
      },
      {
        id: 'python-017',
        title: 'سىبورن، مەتلەپ 2-باب: pie chart, count plot, bar plot, histogram, dist plot',
        url: 'https://www.youtube.com/watch?v=RvqRWZvff90',
        youtubeUrl: 'https://www.youtube.com/watch?v=RvqRWZvff90',
        duration: '55:45',
        description: 'Data Visualization: گرافىك تىپلىرى ۋە ئۇلارنىڭ قوللىنىش ساھەلىرى',
        thumbnail: '/images/python-course.jpg',
      },
      {
        id: 'python-018',
        title: 'سىبورن، مەتلەپ، نامپاي، پەنداس خۇلاسە',
        url: 'https://www.youtube.com/watch?v=r51nEDBCTNk',
        youtubeUrl: 'https://www.youtube.com/watch?v=r51nEDBCTNk',
        duration: '50:15',
        description: 'Python Data Science خۇلاسىسى: Pandas, NumPy, Matplotlib, Seaborn بىرلەشتۈرۈلگەن قوللىنىش',
        thumbnail: '/images/python-course.jpg',
      },
    ],
    syllabus: [
      'ھەپتىلە 1-2: Python ئاساسىي سىنتاكسى ۋە مۇھىت تەييارلاش',
      'ھەپتىلە 3-4: Control Flow ۋە Data Structures',
      'ھەپتىلە 5-6: Functions ۋە Object-Oriented Programming',
      'ھەپتىلە 7-8: Pandas بىلەن داتا تەھلىل',
      'ھەپتىلە 9-10: NumPy بىلەن سانلىق مەلۇمات ئىشلەش',
      'ھەپتىلە 11-12: Matplotlib ۋە Seaborn بىلەن داتا گرافىكىسى',
      'ھەپتىلە 13-15: Real-World Data Science پروژىكتلىرى'
    ],
    prerequisites: ['كومپيۇتېر ئىشلەش ئاساسىي بىلىم', 'Logical Thinking'],
    tools: ['Python 3.x', 'VS Code', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    id: 3,
    title: 'ماشىنا ئۆگىنىش (Machine Learning)',
    category: 'AI/ML',
    description: 'ماشىنا ئۆگىنىش ئاساسىي بىلىم - ئاساسىي ئالگورىتمىلار ۋە ئەمەلىي قوللىنىش',
    fullDescription: `
## ماشىنا ئۆگىنىش دەرس تەپسىلاتى
بۇ دەرس ماشىنا ئۆگىنىشنىڭ ئاساسىي ئالگورىتمىلىرى، ئەمەلىي قوللىنىش يوللىرى، ۋە Real-World پروبلىمىلارنى ھەل قىلىش ئۇسۇللىرىنى ئۆگىتىدۇ.

### دەرس مەزمۇلى:
- ✅ ماشىنا ئۆگىنىش كىرىش سۆز ۋە تەرىپلەر
- ✅ Supervised Learning (Classification, Regression)
- ✅ Unsupervised Learning (Clustering, Dimensionality Reduction)
- ✅ Model Evaluation ۋە Validation
- ✅ Feature Engineering ۋە Selection
- ✅ Real-World Projects
- ✅ Model Deployment ئاساسلىرى

### ئۆگىنىدىغان نەرسىلەر:
- ماشىنا ئۆگىنىشنىڭ ئاساسىي پىرىنسىپلىرى
- Supervised vs Unsupervised Learning پەرقى
- ئاساسىي ML ئالگورىتمىلىرى (Linear Regression, Logistic Regression, SVM, Decision Trees)
- Clustering ئالگورىتمىلىرى (K-means, DBSCAN)
- Model Evaluation Metrics
- Feature Engineering تېخنىكىلىرى
- Real-World پروژىكتلارنى ئىجرا قىلىش
    `,
    duration: '28 سائەت',
    level: 'باشلانغۇچىدىن ئوتتۇرىغىچە',
    instructor: 'ئۇيغۇر ئاكادېمىيەسى',
    instructorTitle: 'ئىشقا ئورۇنلاشقان ML Engineer',
    thumbnail: '/images/ml-course.jpg',
    colorScheme: '#FF6B35',
    videos: [
      {
        id: 'ml-001',
        title: 'ماشىنا ئۆگىنىش 1-باب: machine learning introduction',
        url: 'https://www.youtube.com/watch?v=sBOoh-1XJ6k',
        youtubeUrl: 'https://www.youtube.com/watch?v=sBOoh-1XJ6k',
        duration: '48:30',
        description: 'ماشىنا ئۆگىنىشنىڭ تەرىپى، تارىخى، ئەمەلىي قوللىنىش ساھەلىرى، AI vs ML vs Deep Learning پەرقى',
        thumbnail: '/images/ml-course.jpg',
      },
      {
        id: 'ml-002',
        title: 'ماشىنا ئۆگىنىش 2-باب: machine learning types',
        url: 'https://www.youtube.com/watch?v=KazQlOe9adk',
        youtubeUrl: 'https://www.youtube.com/watch?v=KazQlOe9adk',
        duration: '52:15',
        description: 'ماشىنا ئۆگىنىش تىپلىرى: Supervised, Unsupervised, Reinforcement, Semi-supervised',
        thumbnail: '/images/ml-course.jpg',
      },
      {
        id: 'ml-003',
        title: 'ماشىنا ئۆگىنىش 3-باب: basic models - SVM, decision tree',
        url: 'https://www.youtube.com/watch?v=w-QrX5q6Bh8',
        youtubeUrl: 'https://www.youtube.com/watch?v=w-QrX5q6Bh8',
        duration: '56:40',
        description: 'ئاساسىي ML مودېللىرى: Support Vector Machines (SVM)، Decision Trees، ئۇلارنىڭ قوللىنىشى',
        thumbnail: '/images/ml-course.jpg',
      },
      {
        id: 'ml-004',
        title: 'ماشىنا ئۆگىنىش 4-باب: k-means, PCA',
        url: 'https://www.youtube.com/watch?v=6ZNHbw3yKVA',
        youtubeUrl: 'https://www.youtube.com/watch?v=6ZNHbw3yKVA',
        duration: '49:25',
        description: 'Unsupervised Learning: K-means Clustering، Principal Component Analysis (PCA)',
        thumbnail: '/images/ml-course.jpg',
      },
      {
        id: 'ml-005',
        title: 'ماشىنا ئۆگىنىش 5-باب: KNN, logistic regression',
        url: 'https://www.youtube.com/watch?v=eeDj4kXilOk',
        youtubeUrl: 'https://www.youtube.com/watch?v=eeDj4kXilOk',
        duration: '53:10',
        description: 'Classification ئالگورىتمىلىرى: K-Nearest Neighbors (KNN)، Logistic Regression',
        thumbnail: '/images/ml-course.jpg',
      },
      {
        id: 'ml-006',
        title: 'ماشىنا ئۆگىنىش 6-باب: Random forest, DBSCAN models',
        url: 'https://www.youtube.com/watch?v=RRU008nXjSs',
        youtubeUrl: 'https://www.youtube.com/watch?v=RRU008nXjSs',
        duration: '58:35',
        description: 'ئىلغار مودېللار: Random Forest، DBSCAN، Ensemble Methods',
        thumbnail: '/images/ml-course.jpg',
      },
      {
        id: 'ml-007',
        title: 'ماشىنا ئۆگىنىش 7-باب: خۇلاسە',
        url: 'https://www.youtube.com/watch?v=0Tk-UaEXDBA',
        youtubeUrl: 'https://www.youtube.com/watch?v=0Tk-UaEXDBA',
        duration: '45:20',
        description: 'ماشىنا ئۆگىنىش دەرسى خۇلاسىسى، كەلگۈسى ئۆگىنىش يولخەرىتى، Resources',
        thumbnail: '/images/ml-course.jpg',
      },
      {
        id: 'ml-008',
        title: 'ماشىنا ئۆگىنىش 8-باب: پروژىكت',
        url: 'https://www.youtube.com/watch?v=kvYwcTfmwP8',
        youtubeUrl: 'https://www.youtube.com/watch?v=kvYwcTfmwP8',
        duration: '62:15',
        description: 'Real-World ماشىنا ئۆگىنىش پروژىكتى: ھۆججەت باھاسى پىششىقلىقى ياكى ئىمىل تەكشۈرۈش',
        thumbnail: '/images/ml-course.jpg',
      },
    ],
    syllabus: [
      'ھەپتىلە 1: ماشىنا ئۆگىنىش كىرىش سۆز ۋە تىپلىرى',
      'ھەپتىلە 2-3: Supervised Learning ئالگورىتمىلىرى',
      'ھەپتىلە 4-5: Unsupervised Learning ئالگورىتمىلىرى',
      'ھەپتىلە 6: Model Evaluation ۋە Validation',
      'ھەپتىلە 7: Feature Engineering ۋە Model Optimization',
      'ھەپتىلە 8: Real-World ML پروژىكتلىرى'
    ],
    prerequisites: ['Python ئاساسىي بىلىم', 'Statistics ئاساسىي بىلىم'],
    tools: ['Python', 'Scikit-learn', 'Jupyter Notebook', 'Pandas', 'NumPy'],
  },
  {
    id: 4,
    title: 'نىرۋاتورى ئۆگىنىش (Neural Networks)',
    category: 'AI/ML',
    description: 'نىرۋا تورى ئاساسلىرى ۋە چوڭقۇر ئۆگىنىش',
    fullDescription: `
## نىرۋاتورى ئۆگىنىش دەرس تەپسىلاتى
بۇ دەرس نىرۋال تورلارنىڭ ئاساسىي قۇرۇلمىسى، چوڭقۇر ئۆگىنىش ئالگورىتمىلىرى، ۋە ئەمەلىي قوللىنىش يوللىرىنى ئۆگىتىدۇ.

### دەرس مەزمۇنى:
- ✅ نىرۋال تورلارنىڭ بىئولوگىيەلىك ئاساسى
- ✅ Perceptron ۋە Activation Functions
- ✅ Backpropagation ۋە Gradient Descent
- ✅ Convolutional Neural Networks (CNN)
- ✅ Recurrent Neural Networks (RNN/LSTM)
- ئەمەلىي پروژىكتلار ۋە قوللىنىش ساھەلىرى

### ئۆگىنىدىغان نەرسىلەر:
- Artificial Neurons ۋە ئۇلارنىڭ قۇرۇلمىسى
- Neural Networks نى قانداق ئۆگىتىش
- Deep Learning نىڭ ئاساسىي پىرىنسىپلىرى
- CNN بىلەن رەسىم تەھلىل
- RNN بىلەن تېكىست ۋە ۋاقىت سىزىقى داتا تەھلىل
- Real-World Deep Learning ئەمەلىيەتلىرى
    `,
    duration: '22 سائەت',
    level: 'ئوتتۇرا-ئىلغار',
    instructor: 'ئۇيغۇر ئاكادېمىيەسى',
    instructorTitle: 'Deep Learning Researcher',
    thumbnail: '/images/dl-course.jpg',
    colorScheme: '#FF4081',
    videos: [
      {
        id: 'nn-001',
        title: 'نىرۋاتورى ئۆگىنىش 1-باب: ئاساسىي ئۇچۇرلار',
        url: 'https://www.youtube.com/watch?v=1BcFCGaR9JE',
        youtubeUrl: 'https://www.youtube.com/watch?v=1BcFCGaR9JE',
        duration: '51:30',
        description: 'نىرۋال تورلارنىڭ بىئولوگىيەلىك ئاساسى، Artificial Neuron Model، Deep Learning نىڭ تارىخى',
        thumbnail: '/images/dl-course.jpg',
      },
      {
        id: 'nn-002',
        title: 'نىرۋاتورى ئۆگىنىش 2-باب: ئاساسىي ئاددى نىرۋا تورى',
        url: 'https://www.youtube.com/watch?v=YWOOYEWp7Ys',
        youtubeUrl: 'https://www.youtube.com/watch?v=YWOOYEWp7Ys',
        duration: '47:45',
        description: 'Perceptron، Activation Functions، Single-layer Neural Networks',
        thumbnail: '/images/dl-course.jpg',
      },
      {
        id: 'nn-003',
        title: 'نىرۋاتورى ئۆگىنىش 3-باب: قاتلاملىق نىرۋاتورى',
        url: 'https://www.youtube.com/watch?v=AB4zcfIp0Pg',
        youtubeUrl: 'https://www.youtube.com/watch?v=AB4zcfIp0Pg',
        duration: '54:20',
        description: 'Multi-layer Neural Networks، Backpropagation، Gradient Descent',
        thumbnail: '/images/dl-course.jpg',
      },
      {
        id: 'nn-004',
        title: 'نىرۋاتورى ئۆگىنىش 4-باب: قايتالىنىدىغان نىرۋا تورى',
        url: 'https://www.youtube.com/watch?v=NiAIaqZW7hs',
        youtubeUrl: 'https://www.youtube.com/watch?v=NiAIaqZW7hs',
        duration: '59:15',
        description: 'Recurrent Neural Networks (RNN)، Long Short-Term Memory (LSTM)، Applications',
        thumbnail: '/images/dl-course.jpg',
      },
    ],
    syllabus: [
      'ھەپتىلە 1: نىرۋال تور ئاساسلىرى ۋە Perceptron',
      'ھەپتىلە 2: Multi-layer Networks ۋە Backpropagation',
      'ھەپتىلە 3: Convolutional Neural Networks (CNN)',
      'ھەپتىلە 4: Recurrent Neural Networks (RNN/LSTM)',
      'ھەپتىلە 5-6: Real-World Deep Learning پروژىكتلىرى'
    ],
    prerequisites: ['ماشىنا ئۆگىنىش ئاساسلىرى', 'Python پروگراممىلاش', 'Linear Algebra ئاساسىي بىلىم'],
    tools: ['TensorFlow', 'Keras', 'Python', 'Jupyter Notebook'],
  },
  {
    id: 5,
    title: 'تېنسورفىلوۋ ئۆگىنىش (TensorFlow)',
    category: 'AI/ML',
    description: 'TensorFlow بىلەن Deep Learning',
    fullDescription: `
## تېنسورفىلوۋ دەرس تەپسىلاتى
بۇ دەرس TensorFlow بىلەن چوڭقۇر ئۆگىنىش مودېللىرىنى قۇرۇش ۋە ئۆگىتىشنى ئۆگىتىدۇ.

### دەرس مەزمۇنى:
- ✅ TensorFlow ئاساسلىرى ۋە ئورنىتىش
- ✅ Tensors ۋە Operations
- ✅ Neural Networks قۇرۇش
- ✅ Model Training ۋە Evaluation
- ✅ Convolutional Neural Networks (CNN) قۇرۇش
- ✅ Transfer Learning
- ✅ Model Saving ۋە Loading
- ✅ Real-World Projects

### ئۆگىنىدىغان نەرسىلەر:
- TensorFlow 2.x نىڭ ئاساسىي ئىقتىدارلىرى
- Tensors دىكى Operations
- Keras API بىلەن Neural Networks قۇرۇش
- CNN ۋە RNN مودېللىرىنى ئىجرا قىلىش
- Transfer Learning ئارقىلىق ۋاقىت تېجەش
- Deep Learning مودېللىرىنى ساقلاش ۋە يۈكلەش
- Real-World پروژىكتلارنى ئىجرا قىلىش
    `,
    duration: '20 سائەت',
    level: 'ئوتتۇرا-ئىلغار',
    instructor: 'ئۇيغۇر ئاكادېمىيەسى',
    instructorTitle: 'TensorFlow Specialist',
    thumbnail: '/images/tensorflow-course.jpg',
    colorScheme: '#FF6F00',
    videos: [
      {
        id: 'tf-001',
        title: 'تېنسورفىلوۋ 1-باب: ئاساسىي بىلىم كىرىش قىسمى',
        url: 'https://www.youtube.com/watch?v=2o5mexfpivo',
        youtubeUrl: 'https://www.youtube.com/watch?v=2o5mexfpivo',
        duration: '55:40',
        description: 'TensorFlow ئورنىتىش، ئاساسىي چۈشەنچىلەر، Tensors ۋە ئۇلارنىڭ Operations',
        thumbnail: '/images/tensorflow-course.jpg',
      },
    ],
    syllabus: [
      'ھەپتىلە 1: TensorFlow ئاساسلىرى ۋە ئورنىتىش',
      'ھەپتىلە 2-3: Neural Networks قۇرۇش ۋە ئۆگىتىش',
      'ھەپتىلە 4: CNN مودېللىرى قۇرۇش',
      'ھەپتىلە 5: Transfer Learning ۋە Model Optimization',
      'ھەپتىلە 6: Real-World TensorFlow پروژىكتلىرى'
    ],
    prerequisites: ['نىرۋاتورى ئۆگىنىش ئاساسلىرى', 'Python پروگراممىلاش'],
    tools: ['TensorFlow 2.x', 'Python', 'Jupyter Notebook', 'GPU (ئىختىيارى)'],
  },
  {
    id: 6,
    title: 'كىۋانىت فىزىكىسى (Quantum Physics)',
    category: 'Advanced',
    description: 'كىۋانىت فىزىكىسى ئاساسلىرى',
    fullDescription: `
## كىۋانىت فىزىكىسى دەرس تەپسىلاتى
بۇ دەرس كىۋانىت فىزىكىسىنىڭ ئاساسىي پىرىنسىپلىرى ۋە چۈشەنچىلىرىنى ئۆگىتىدۇ.

### دەرس مەزمۇنى:
- ✅ كىۋانىت فىزىكىسىنىڭ تارىخى ۋە ئەھمىيىتى
- ✅ Wave-Particle Duality
- ✅ Uncertainty Principle
- ✅ Quantum Superposition
- ✅ Quantum Entanglement
- ئاساسىي ماتېماتىكىلىق چۈشەنچىلەر
- Real-World Applications

### ئۆگىنىدىغان نەرسىلەر:
- كىۋانىت فىزىكىسىنىڭ ئاساسىي پىرىنسىپلىرى
- Classic vs Quantum Physics پەرقى
- كىۋانىت مېخانىكىسىنىڭ ئاساسىي تەڭلىمىلىرى
- كىۋانىت ھادىسىلىرىنىڭ چۈشەندۈرۈلۈشى
- كىۋانىت تېخنىكىلىرىنىڭ كەلگۈسىدىكى قوللىنىشى
    `,
    duration: '18 سائەت',
    level: 'ئىلغار',
    instructor: 'ئۇيغۇر ئاكادېمىيەسى',
    instructorTitle: 'Quantum Physics Researcher',
    thumbnail: '/images/quantum-physics-course.jpg',
    colorScheme: '#8A2BE2',
    videos: [
      {
        id: 'qp-001',
        title: 'كىۋانىت فىزىكىسى 1-باب: ئاساسىي ئۇچۇرلار',
        url: 'https://www.youtube.com/watch?v=FlWr6rHcOsU',
        youtubeUrl: 'https://www.youtube.com/watch?v=FlWr6rHcOsU',
        duration: '49:30',
        description: 'كىۋانىت فىزىكىسىنىڭ تارىخى، ئاساسىي پىرىنسىپلىرى، Classic vs Quantum پەرقى',
        thumbnail: '/images/quantum-physics-course.jpg',
      },
    ],
    syllabus: [
      'ھەپتىلە 1: كىۋانىت فىزىكىسى كىرىش سۆز',
      'ھەپتىلە 2: Wave-Particle Duality ۋە Uncertainty Principle',
      'ھەپتىلە 3: Quantum Superposition ۋە Entanglement',
      'ھەپتىلە 4: كىۋانىت مېخانىكىسىنىڭ ئاساسىي تەڭلىمىلىرى',
      'ھەپتىلە 5-6: كىۋانىت فىزىكىسىنىڭ ئەمەلىي قوللىنىشى'
    ],
    prerequisites: ['ئاساسىي فىزىكا بىلىمى', 'باشلانغۇچى ماتېماتىكا'],
    tools: ['Simulation Software', 'Mathematical Tools'],
  },
  {
    id: 7,
    title: 'كىۋانىت مىخانىكىسى (Quantum Mechanics)',
    category: 'Advanced',
    description: 'كىۋانىت مىخانىكىسى ئاساسلىرى',
    fullDescription: `
## كىۋانىت مىخانىكىسى دەرس تەپسىلاتى
بۇ دەرس كىۋانىت مىخانىكىسىنىڭ ئاساسىي تەڭلىمىلىرى ۋە چۈشەنچىلىرىنى ئۆگىتىدۇ.

### دەرس مەزمۇنى:
- ✅ Schrödinger Equation
- ✅ Wave Functions
- ✅ Quantum Operators
- ✅ Hydrogen Atom
- ✅ Quantum Harmonic Oscillator
- ئاساسىي ماتېماتىكىلىق چۈشەندۈرۈش
- Real-World Applications

### ئۆگىنىدىغان نەرسىلەر:
- كىۋانىت مىخانىكىسىنىڭ ئاساسىي تەڭلىمىلىرى
- Wave Functions ۋە ئۇلارنىڭ مەنىسى
- Quantum Operators ۋە Measurements
- ئاددىي كىۋانىت سىستېمىلىرىنىڭ ھەل قىلىنىشى
- كىۋانىت مىخانىكىسىنىڭ تېخنىكىلىق قوللىنىشى
    `,
    duration: '20 سائەت',
    level: 'ئىلغار',
    instructor: 'ئۇيغۇر ئاكادېمىيەسى',
    instructorTitle: 'Quantum Mechanics Expert',
    thumbnail: '/images/quantum-mechanics-course.jpg',
    colorScheme: '#6A5ACD',
    videos: [
      {
        id: 'qm-001',
        title: 'كىۋانىت مىخانىكىسى ئۆگىنىش',
        url: 'https://www.youtube.com/watch?v=g78nRjeczOo&t=3s',
        youtubeUrl: 'https://www.youtube.com/watch?v=g78nRjeczOo&t=3s',
        duration: '52:15',
        description: 'كىۋانىت مىخانىكىسىنىڭ ئاساسىي پىرىنسىپلىرى، Schrödinger Equation، Wave Functions',
        thumbnail: '/images/quantum-mechanics-course.jpg',
      },
    ],
    syllabus: [
      'ھەپتىلە 1: كىۋانىت مىخانىكىسى كىرىش سۆز',
      'ھەپتىلە 2: Schrödinger Equation ۋە Wave Functions',
      'ھەپتىلە 3: Quantum Operators ۋە Measurements',
      'ھەپتىلە 4: Hydrogen Atom ۋە Quantum Numbers',
      'ھەپتىلە 5-6: Quantum Harmonic Oscillator ۋە ئىلغار تېمىلار'
    ],
    prerequisites: ['كىۋانىت فىزىكىسى ئاساسلىرى', 'ئاساسىي ماتېماتىكا'],
    tools: ['Mathematical Tools', 'Simulation Software'],
  },
  {
    id: 8,
    title: 'كىۋانىت ماشىنا ئۆگىنىش (Quantum Machine Learning)',
    category: 'Advanced',
    description: 'كىۋانىت كومپيۇتېرلار بىلەن ماشىنا ئۆگىنىش',
    fullDescription: `
## كىۋانىت ماشىنا ئۆگىنىش دەرس تەپسىلاتى
بۇ دەرس كىۋانىت كومپيۇتېرلار بىلەن ماشىنا ئۆگىنىشنىڭ بىرلەشمىسىنى ئۆگىتىدۇ.

### دەرس مەزمۇنى:
- ✅ كىۋانىت كومپيۇتېر ئاساسلىرى
- ✅ Quantum Bits (Qubits)
- ✅ Quantum Gates
- ✅ Quantum Algorithms
- ✅ Quantum Machine Learning Algorithms
- ✅ Real-World Applications ۋە چەكلىمىلەر

### ئۆگىنىدىغان نەرسىلەر:
- كىۋانىت كومپيۇتېرنىڭ ئاساسىي چۈشەنچىلىرى
- Qubits ۋە Quantum States
- ئاساسىي كىۋانىت ئالگورىتمىلىرى
- كىۋانىت ماشىنا ئۆگىنىش ئالگورىتمىلىرى
- كىۋانىت ئۈستۈنلۈكلىرى ۋە چەكلىمىلىرى
- كىۋانىت ماشىنا ئۆگىنىشنىڭ كەلگۈسى
    `,
    duration: '22 سائەت',
    level: 'ئىلغار',
    instructor: 'ئۇيغۇر ئاكادېمىيەسى',
    instructorTitle: 'Quantum AI Researcher',
    thumbnail: '/images/quantum-ml-course.jpg',
    colorScheme: '#00CED1',
    videos: [
      {
        id: 'qml-001',
        title: 'كىۋانىت ماشىنا ئۆگىنىش',
        url: 'https://www.youtube.com/watch?v=XDQofg5vjrY&t=15s',
        youtubeUrl: 'https://www.youtube.com/watch?v=XDQofg5vjrY&t=15s',
        duration: '57:20',
        description: 'كىۋانىت ماشىنا ئۆگىنىش كىرىش سۆز، كىۋانىت كومپيۇتېر ئاساسلىرى، QML ئالگورىتمىلىرى',
        thumbnail: 'online-courses/kalbil-logo.png',
      },
    ],
    syllabus: [
      'ھەپتىلە 1: كىۋانىت كومپيۇتېر ئاساسلىرى',
      'ھەپتىلە 2: كىۋانىت ئالگورىتمىلىرى',
      'ھەپتىلە 3: كىۋانىت ماشىنا ئۆگىنىش ئالگورىتمىلىرى',
      'ھەپتىلە 4: Quantum Neural Networks',
      'ھەپتىلە 5-6: Real-World QML Applications ۋە كەلگۈسى'
    ],
    prerequisites: ['ماشىنا ئۆگىنىش ئاساسلىرى', 'كىۋانىت فىزىكىسى ئاساسلىرى'],
    tools: ['Qiskit', 'Pennylane', 'Python'],
  },
  {
    id: 9,
    title: 'گىت، گىتخاب (Git & GitHub)',
    category: 'Tools',
    description: 'گىت ۋە گىتخاب بىلەن ۋېرسىيە باشقۇرۇش',
    fullDescription: `
## گىت ۋە گىتخاب دەرس تەپسىلاتى
بۇ دەرس گىت ۋە گىتخاب بىلەن ۋېرسىيە باشقۇرۇشنى ئۆگىتىدۇ.

### دەرس مەزمۇنى:
- ✅ گىت ئورنىتىش ۋە تەڭشەش
- ✅ ئاساسىي گىت بۇيرۇقلىرى
- ✅ Branches ۋە Merging
- ✅ گىتخاب بىلەن ھەمكارلىشىش
- ✅ Pull Requests ۋە Code Reviews
- ✅ Real-World Workflows
- ✅ Best Practices

### ئۆگىنىدىغان نەرسىلەر:
- گىت ئورنىتىش ۋە تەڭشەش
- ئاساسىي گىت بۇيرۇقلىرى (init, add, commit, push, pull)
- Branches قانداق ئىشلەيدۇ ۋە قانداق باشقۇرۇش كېرەك
- گىتخاب بىلەن ھەمكارلىشىش
- Pull Requests ئارقىلىق كود تەكشۈرۈش
- Professional گىت Workflows
- گىت بىلەن مەسىلىلەرنى ھەل قىلىش
    `,
    duration: '15 سائەت',
    level: 'باشلانغۇچى',
    instructor: 'ئۇيغۇر ئاكادېمىيەسى',
    instructorTitle: 'DevOps Engineer',
    thumbnail: '/images/git-course.jpg',
    colorScheme: '#F1502F',
    videos: [
      {
        id: 'git-001',
        title: 'گىت، گىتخاب 1-باب: ئاساسىي ئۇچۇرلار',
        url: 'https://www.youtube.com/watch?v=lTH8Zrkl6oE',
        youtubeUrl: 'https://www.youtube.com/watch?v=lTH8Zrkl6oE',
        duration: '44:30',
        description: 'گىت ئورنىتىش، تەڭشەش، ئاساسىي بۇيرۇقلار، گىتخاب ھېسابات قۇرۇش',
        thumbnail: '/images/git-course.jpg',
      },
      {
        id: 'git-002',
        title: 'گىت، گىتخاب 2-باب: git and github',
        url: 'https://www.youtube.com/watch?v=lTH8Zrkl6oE',
        youtubeUrl: 'https://www.youtube.com/watch?v=lTH8Zrkl6oE',
        duration: '48:15',
        description: 'گىت بىلەن ۋېرسىيە باشقۇرۇش، گىتخاب بىلەن ھەمكارلىشىش',
        thumbnail: '/images/git-course.jpg',
      },
      {
        id: 'git-003',
        title: 'گىت، گىتخاب 3-باب: git and github',
        url: 'https://www.youtube.com/watch?v=OVgDACvDk8A',
        youtubeUrl: 'https://www.youtube.com/watch?v=OVgDACvDk8A',
        duration: '51:40',
        description: 'ئىلغار گىت بۇيرۇقلىرى، Branches ۋە Merging، Pull Requests',
        thumbnail: '/images/git-course.jpg',
      },
    ],
    syllabus: [
      'ھەپتىلە 1: گىت ئورنىتىش ۋە ئاساسىي بۇيرۇقلار',
      'ھەپتىلە 2: گىتخاب بىلەن ھەمكارلىشىش',
      'ھەپتىلە 3: Branches ۋە Merging',
      'ھەپتىلە 4: Pull Requests ۋە Code Review',
      'ھەپتىلە 5: Professional گىت Workflows'
    ],
    prerequisites: ['كومپيۇتېر ئىشلەش ئاساسىي بىلىم'],
    tools: ['Git', 'GitHub', 'Command Line', 'VS Code'],
  },
];

export default CourseData;