// src/components/Blog38.jsx - AI تولۇق تەپسىلاتلىق دەرسلىكى
import React, { useState, useEffect } from 'react';
import { 
  FaBrain,
  FaRobot,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaChartLine,
  FaLightbulb,
  FaHistory,
  FaGraduationCap,
  FaCogs,
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaSearch,
  FaFilter,
  FaSortAmountDown,
  FaSortAmountUp,
  FaBook,
  FaUniversity,
  FaUsers,
  FaGlobe,
  FaMicrochip,
  FaNetworkWired,
  FaChevronRight,
  FaChevronLeft,
  FaExpand,
  FaCompress,
  FaDownload,
  FaShareAlt,
  FaBookmark,
  FaQuestionCircle
} from 'react-icons/fa';
import { 
  GiArtificialIntelligence,
  GiProcessor,
  GiNetworkBars,
  GiCircuitry,
  GiAbstract024,
  GiSpinningBlades,
  GiCogLock,
  GiBrain,
  GiMeshNetwork,
  GiRobotGrab
} from 'react-icons/gi';
import { 
  SiTensorflow,
  SiPytorch,
  SiPython,
  SiGoogle,
  SiMicrosoft,
  SiAmazon,
  SiIbm,
  SiNvidia,
  SiOpenai,
  SiDeepmind,
  SiApple
} from 'react-icons/si';
import { 
  MdScience,
  MdTimeline,
  MdSchool,
  MdWorkspacePremium,
  MdApi,
  MdMemory,
  MdDeveloperMode,
  MdSpeed
} from 'react-icons/md';

const Blog38 = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [playAnimation, setPlayAnimation] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeChapter, setActiveChapter] = useState(0);
  const [fontSize, setFontSize] = useState('medium');
  const [showCode, setShowCode] = useState(false);

  // بۆلەكلەر
  const chapters = [
    { id: 'intro', title: 'AI نېمە؟', icon: <FaQuestionCircle /> },
    { id: 'levels', title: 'AI سەۋىيەلىرى', icon: <FaChartLine /> },
    { id: 'history', title: 'AI تارىخى', icon: <FaHistory /> },
    { id: 'types', title: 'ئۆگىنىش تۈرلىرى', icon: <FaBrain /> },
    { id: 'workflow', title: 'AI قانداق ئىشلەيدۇ؟', icon: <FaCogs /> },
    { id: 'ml', title: 'ماشىنا ئۆگىنىشى', icon: <FaLaptopCode /> },
    { id: 'tools', title: 'AI قوراللىرى', icon: <FaCode /> },
    { id: 'examples', title: 'AI مىساللىرى', icon: <FaRobot /> },
    { id: 'future', title: 'AI كەلگۈسى', icon: <FaGlobe /> }
  ];

  // Python كود مىساللىرى
  const codeExamples = {
    classification: `# تۈرگە ئايرىش مىسالى - Logistic Regression
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn import datasets

# سانلىق مەلۇماتلارنى يۈكلەش
iris = datasets.load_iris()
X = iris.data
y = iris.target

# سانلىق مەلۇماتلارنى بۆلۈش
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# مودېل قۇرۇش
model = LogisticRegression()
model.fit(X_train, y_train)

# پەرەز قىلىش
predictions = model.predict(X_test)
accuracy = model.score(X_test, y_test)
print(f"مودېل توغرالىقى: {accuracy:.2%}")`,

    neuralNetwork: `# ئاددىي نېرۋا تورى
import tensorflow as tf
from tensorflow import keras

# مودېل قۇرۇش
model = keras.Sequential([
    keras.layers.Dense(128, activation='relu', input_shape=(784,)),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(64, activation='relu'),
    keras.layers.Dense(10, activation='softmax')
])

# مودېلنى كونفىگۇرلاش
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# مەشىق قىلىش (مىسال)
# model.fit(X_train, y_train, epochs=10)
# test_loss, test_acc = model.evaluate(X_test, y_test)
# print(f"سىناق توغرالىقى: {test_acc:.2%}")`,

    clustering: `# توپلاشتۇرۇش مىسالى - K-Means
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
import matplotlib.pyplot as plt

# سۈنئىي سانلىق مەلۇماتلارنى قۇرۇش
X, y = make_blobs(n_samples=300, centers=4, random_state=42)

# K-Means مودېلى
kmeans = KMeans(n_clusters=4, random_state=42)
kmeans.fit(X)

# نەتىجىلەر
labels = kmeans.labels_
centers = kmeans.cluster_centers_

print(f"توپلاشتۇرۇش نەتىجىسى:")
for i in range(4):
    print(f"توپ {i+1}: {sum(labels == i)} ئۈلگە")`
  };

  // ئاساسلىق مەزمۇنلار
  const content = {
    intro: {
      title: "AI (سۈنئىي ئەقىل) نېمە؟",
      sections: [
        {
          title: "ئېنىقلىما",
          content: "AI (سۈنئىي ئەقىل) كومپيۇتېر ياكى باشقا ئۈسكۈنىلەردە ئىنسانغا ئوخشاش ئەقىلنىڭ سۈنئىي ئەمەلگە ئېشىشىنى كۆرسىتىدۇ. ئۇ ئىنسان ئەقلىنىڭ ھەرىكەتلىرىنى تەكشۈرۈپ، تەكلىپلىك ئۇسۇللار ئارقىلىق ئەقىل قابىلىيىتىنى يېتىلدۈرىدۇ.",
          icon: <GiArtificialIntelligence />
        },
        {
          title: "كۈچلۈك سۈنئىي ئەقىل (AGI)",
          content: "ئىنسان ئەقىلىگە يېقىنلىشىدىغان ۋە ئىنسانلارنىڭ ۋەزىپىلىرىنى ئورۇندىيالايدىغان سۈنئىي ئەقىل. ئۇ كەڭ دائىرىلىك بىلىمگە ۋە مەلۇم دەرىجىدە ئۆزىنى چۈشىنىشكە ئىگە.",
          examples: ["Doraemon", "Astro Boy"],
          icon: <GiBrain />
        },
        {
          title: "ئاجىز سۈنئىي ئەقىل",
          content: "بارلىق بىلىش قابىلىيىتىنى تەلەپ قىلمايدىغان ئالاھىدە مەسىلە ھەل قىلىش ياكى ئەقىل-پاراسەت ئۈچۈن يۇمشاق دېتال.",
          examples: ["AlphaGo", "رەسىم تونۇش", "تەبىئىي تىل بىر تەرەپ قىلىش"],
          icon: <GiProcessor />
        }
      ]
    },
    levels: {
      title: "سۈنئىي ئەقىلنىڭ سەۋىيەلىرى",
      levels: [
        {
          level: 1,
          name: "كونترول پروگراممىسى",
          description: "ماشىنا ئىنسانلار كىرگۈزگەن شارائىتقا ئاساسەن ئىشلەيدۇ.",
          examples: ["ھاۋا تەڭشىگۈچ", "توڭلاتقۇ"],
          icon: <FaCogs />
        },
        {
          level: 2,
          name: "كۆپەيتىلگەن قېلىپلار بىلەن كونترول پروگراممىلىرى",
          description: "مۇرەككەپ قېلىپلار بىلەن كونترول قىلىنىدىغان سىستېمىلار.",
          examples: ["ئويۇن كونترول سۇپىلىرى", "چاڭ سۈمۈرگۈچ"],
          icon: <MdDeveloperMode />
        },
        {
          level: 3,
          name: "ئاپتوماتىك قېلىپلارنى ئۆگىنىدۇ",
          description: "سانلىق مەلۇماتلاردىن قائىدىلەرنى ئۆگىنىدۇ ۋە تېخىمۇ مۇۋاپىق قارارلارنى چىقىرىدۇ.",
          examples: ["سانلىق مۆلچەرلەش", "تۈرگە ئايرىش"],
          icon: <FaChartLine />
        },
        {
          level: 4,
          name: "ئاپتوماتىك ئالاھىدىلىكلەرنى قولغا كەلتۈرۈش",
          description: "سانلىق مەلۇماتلاردىكى قېلىپلار ۋە قائىدىلەرنى ئېنىقلاش.",
          examples: ["رەسىم تونۇش", "كۈچەيتىش ئۆگىنىش"],
          icon: <GiMeshNetwork />
        }
      ]
    },
    history: {
      title: "سۈنئىي ئەقىل تارىخى",
      timeline: [
        {
          year: "1947-1956",
          event: "سۈنئىي ئەقىل دەۋرىنىڭ باشلىنىشى",
          details: [
            "1947: ئالان تۇرىڭ سۈنئىي ئەقىل ئۇقۇمىنى ئوتتۇرىغا قويدى",
            "1956: دارتموس يىغىنىدا «سۈنئىي ئەقىل» دېگەن سۆز ئوتتۇرىغا قويۇلدى"
          ],
          icon: <FaHistory />
        },
        {
          year: "1957-1968",
          event: "سۈنئىي ئەقىلنىڭ تۇنجى گۈللىنىشى",
          details: [
            "1958: ماشىنا ئۆگىنىش ئالگورىزىملىرىنىڭ ئاساسى بولغان سېزىمچانلىق تونۇشتۇرۇلدى"
          ],
          icon: <FaLightbulb />
        },
        {
          year: "1968-1979",
          event: "سۈنئىي ئەقىل قىش",
          details: [
            "1968: سېزىمچانلىقنىڭ چەكلىمىلىرى ئىسپاتلاندى",
            "1969: رامكا مەسىلىسى ئېنىقلاندى"
          ],
          icon: <FaPause />
        },
        {
          year: "1980-1988",
          event: "ئىككىنچى سۈنئىي ئەقىل گۈللىنىشى",
          details: [
            "1985: نېرۋا تورىدا ئارقا تارقىلىش كەڭ كۆلەمدە كۆرۈلدى"
          ],
          icon: <FaPlay />
        },
        {
          year: "2012-ھازىر",
          event: "ئۈچىنچى سۈنئىي ئەقىل گۈللىنىشى",
          details: [
            "2012: چوڭقۇر ئۆگىنىشكە ئاساسلانغان «AlexNet» رەسىم مۇسابىقىسىدە غەلىبە قىلدى",
            "2016: AlphaGo كەسپىي Go چېمپىيونىنى مەغلۇپ قىلدى"
          ],
          icon: <FaForward />
        }
      ]
    },
    types: {
      title: "ئۆگىنىش تۈرلىرى",
      types: [
        {
          name: "تۈرگە ئايرىش",
          description: "بېرىلگەن سانلىق مەلۇماتلارنىڭ قايسى تۈرگە تەۋە ئىكەنلىكىنى ئېنىقلايدىغان ئۆگىنىش ئۇسۇلى.",
          applications: ["تىببىي رەسىم دىئاگنوزى", "ئېلخەتلەردىكى ئەخلەت ئۇچۇرلارنى بايقاش"],
          algorithms: ["نېرۋا تورى", "SVM", "لوگىستىك رېگرېسسىيە", "قارار دەرەخلىرى"],
          icon: <FaFilter />
        },
        {
          name: "رېگرېسسىيە",
          description: "ئۆتمۈشتىكى سانلىق مەلۇماتلاردىن نامەلۇم قىممەتلەرنى پەرەز قىلىش ئۇسۇلى.",
          applications: ["ئېنېرگىيە سەرپىياتىنى مۆلچەرلەش", "سېتىش مىقدارىنى مۆلچەرلەش"],
          algorithms: ["نېرۋا تورى", "SVR", "تاسادىپىي ئورمان"],
          icon: <FaChartLine />
        },
        {
          name: "توپلاشتۇرۇش",
          description: "نامەلۇم سانلىق مەلۇماتلار توپلىمىنى كۆپ گۇرۇپپىغا بۆلىدىغان ئۆگىنىش ئۇسۇلى.",
          applications: ["خېرىدارلارنى تۈرگە ئايرىش", "تەۋسىيە فۇنكسىيەسى"],
          algorithms: ["K-ئوتتۇرىچە قىممەت", "ۋارد ئۇسۇلى", "k-ئەڭ يېقىن قوشنا"],
          icon: <FaUsers />
        },
        {
          name: "ئانومالىيە بايقاش",
          description: "چېكىنىشلىك قىممەتلەر ۋە نورمالسىز ئەھۋاللارنى بايقاش ئۇسۇلى.",
          applications: ["ئۇپراش بايقاش", "بىخەتەرلىك كۆزىتىش"],
          algorithms: ["K-ئوتتۇرى", "OneClass SVM", "PCA"],
          icon: <FaSearch />
        },
        {
          name: "كۈچەيتىش ئۆگىنىشى",
          description: "ماشىنالارنىڭ سىناق ۋە خاتالىق ئارقىلىق ئەڭ ياخشى ھەرىكەتنى ئۆگىنىدىغان ئۇسۇل.",
          applications: ["ئۈستەل ئويۇنلىرى", "ئاپتونوم ماشىنا ھەيدەش"],
          algorithms: ["Q-ئۆگىنىش", "DQN", "مونتې كارلو دەرىخى ئىزدەش"],
          icon: <FaRobot />
        }
      ]
    },
    workflow: {
      title: "AI قانداق ئىشلەيدۇ؟",
      steps: [
        {
          step: 1,
          title: "مەشىق باسقۇچى",
          description: "AI تەربىيەلەنگەن مودېل يارىتىش ئۈچۈن كۆپ ساندىكى سانلىق مەلۇماتلارنى كىرگۈزۈش ئارقىلىق تەربىيەلىنىدۇ.",
          icon: <FaGraduationCap />
        },
        {
          step: 2,
          title: "قوللىنىش باسقۇچى",
          description: "AI كىرگۈزۈشنى ئېنىقلاش ئۈچۈن ئالدىن تەربىيەلەنگەن مودېلنى ئىشلىتىدۇ.",
          icon: <MdMemory />
        },
        {
          step: 3,
          title: "ئېغىرلىق ھېسابلاش",
          description: "كىرگۈزۈش ئامىللىرىغا ئېغىرلىق بېرىلىپ، يىغىندىسى ھېسابلىنىدۇ.",
          icon: <MdSpeed />
        },
        {
          step: 4,
          title: "خاتالىق تەڭشەش",
          description: "نەتىجىلەرگە قاراپ، ئېغىرلىقلار تەڭشىلىپ، مودېل ياخشىلىنىدۇ.",
          icon: <FaCogs />
        }
      ],
      neuronExample: {
        inputs: ["x₁", "x₂", "x₃"],
        weights: ["w₁", "w₂", "w₃"],
        output: "y = w₁x₁ + w₂x₂ + w₃x₃",
        activation: "f(y)"
      }
    },
    ml: {
      title: "ماشىنا ئۆگىنىشى ۋە چوڭقۇر ئۆگىنىش",
      concepts: [
        {
          title: "ماشىنا ئۆگىنىشى",
          description: "كومپيۇتېر قائىدىلىرىنى ئۆگىتىش ئۇسۇلى. كىرگۈزۈش سانلىق مەلۇماتلىرىدىن قائىدىلەر، ئەندىزىلەر ۋە قانۇنىيەتلەرنى مۇستەقىل بايقايدۇ.",
          icon: <FaLaptopCode />
        },
        {
          title: "چوڭقۇر ئۆگىنىش",
          description: "ئىككى ياكى ئۇنىڭدىن ئارتۇق يوشۇرۇن قەۋەتكە ئىگە نېرۋا تورىنى ئىشلىتىدىغان ماشىنا ئۆگىنىشىنىڭ بىر تۈرى.",
          icon: <GiNetworkBars />
        },
        {
          title: "نېرۋا تورى",
          description: "ئىنسان نېرۋا ھۈجەيرىلىرىنى مودېللاشتۇرىدىغان مۇرەككەپ تور قۇرۇلمىسى.",
          icon: <GiCircuitry />
        }
      ],
      neuralNetworks: [
        {
          type: "ئاددىي پەرسېپترون",
          description: "بىر قەۋەتلىك نېرۋا تورى، پەقەت ئاددىي سىزىقلىق ئايرىشنى ھەل قىلالايدۇ",
          layers: 1
        },
        {
          type: "كۆپ قەۋەتلىك نېرۋا تورى",
          description: "بىر نەچچە يوشۇرۇن قەۋەتكە ئىگە، مۇرەككەپ مەسىلىلەرنى ھەل قىلالايدۇ",
          layers: 3
        },
        {
          type: "چوڭقۇر نېرۋا تورى (DNN)",
          description: "ئىككى ياكى ئۇنىڭدىن ئارتۇق يوشۇرۇن قەۋەتكە ئىگە",
          layers: "5+"
        }
      ]
    },
    tools: {
      title: "AI قوراللىرى ۋە پلاتفورمىلار",
      platforms: [
        {
          name: "بۇلۇت مۇلازىمەتلىرى",
          items: [
            { name: "IBM Watson", icon: <SiPython />, color: "text-blue-400" },
            { name: "Google بۇلۇت سۇپىسى", icon: <SiGoogle />, color: "text-red-400" },
            { name: "Amazon ماشىنا ئۆگىنىش", icon: <SiAmazon />, color: "text-yellow-400" },
            { name: "Microsoft Azure", icon: <SiPython />, color: "text-blue-500" }
          ]
        },
        {
          name: "كۇتۇپخانىلار",
          items: [
            { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-500" },
            { name: "PyTorch", icon: <SiPytorch />, color: "text-red-500" },
            { name: "scikit-learn", icon: <SiPython />, color: "text-blue-400" },
            { name: "Keras", icon: <SiTensorflow />, color: "text-red-400" }
          ]
        },
        {
          name: "پروگرامما تىللىرى",
          items: [
            { name: "Python", icon: <SiPython />, color: "text-yellow-500" },
            { name: "R", icon: <FaCode />, color: "text-blue-300" },
            { name: "Java", icon: <FaCode />, color: "text-red-600" },
            { name: "C++", icon: <FaCode />, color: "text-blue-600" }
          ]
        },
        {
          name: "تەتقىقات شىركەتلىرى",
          items: [
            { name: "OpenAI", icon: <SiOpenai />, color: "text-green-400" },
            { name: "DeepMind", icon: <SiPython />, color: "text-purple-400" },
            { name: "NVIDIA", icon: <SiNvidia />, color: "text-green-500" }
          ]
        }
      ]
    },
    examples: {
      title: "AI مىساللىرى",
      examples: [
        {
          name: "Google AI تەجرىبىسى",
          description: "Google نىڭ سۈنئىي ئەقىل تەتقىقاتى نەتىجىلىرى. تېز سىزىش ۋە سۈرەتلەرنى پەرقلەندۈرۈش قاتارلىق ئىقتىدارلار.",
          link: "https://experiments.withgoogle.com/ai",
          icon: <SiGoogle />
        },
        {
          name: "AlphaGo",
          description: "DeepMind تەرەققىي قىلدۇرغان سۈنئىي ئەقىل. 2016-يىلى كەسپىي Go چېمپىيونىنى مەغلۇپ قىلدى.",
          icon: <SiPython />
        },
        {
          name: "ChatGPT",
          description: "OpenAI تەرەققىي قىلدۇرغان تەبىئىي تىل بىر تەرەپ قىلىش مودېلى.",
          icon: <SiOpenai />
        },
        {
          name: "تېببىي رەسىم دىئاگنوزى",
          description: "AI ياردىمىدە رەسىملەرنى تەھلىل قىلىپ، كېسەللەرنى ئالدىن بايقاش.",
          icon: <MdScience />
        }
      ],
      spamExample: {
        title: "ئەخلەت ئېلخەت تونۇش مىسالى",
        description: "AI ئېلخەتنىڭ ئەخلەت ئېلخەت ئىكەنلىكىنى قانداق تونۇيدۇ:",
        features: [
          "«يىغىن» سۆزىنىڭ ئېغىرلىقى: 1.2",
          "«نىشان» سۆزىنىڭ ئېغىرلىقى: 1.2",
          "«ئەڭ ياخشى سودىلار» ئېغىرلىقى: -0.4"
        ],
        calculation: "y = [1, 1, 3] · [1.2, 1.2, -0.4] = 1.2",
        result: "1.2 > 0، شۇڭا ئەخلەت ئېلخەت ئەمەس"
      }
    },
    future: {
      title: "AI كەلگۈسى",
      predictions: [
        {
          year: "2025",
          prediction: "سۈنئىي ئەقىل ئىختىساسلىقلىرىنى قولغا كەلتۈرۈش ئۈچۈن رىقابەت كۈچىيىدۇ",
          details: ["سۈنئىي ئەقىل مۇتەخەسسىسلىرى كەمچىل بولۇش"],
          icon: <FaUsers />
        },
        {
          year: "2045",
          prediction: "يەككەلىك (Singularity)",
          details: [
            "سۈنئىي ئەقىل ئىنسانلارنىڭ ئەقىلىدىن ئېشىپ",
            "ئۆزىنىڭ سۈنئىي ئەقىلىنى يارىتالايدۇ"
          ],
          icon: <FaGlobe />
        }
      ],
      challenges: [
        "ئەخلاقىي مەسىلىلەر",
        "خۇسۇسىيەت قوغداش",
        "خىزمەت ئورۇنلىرىنىڭ ئۆزگىرىشى",
        "تىنچلىق ۋە بىخەتەرلىك"
      ]
    }
  };

  const renderContent = () => {
    switch(activeSection) {
      case 'intro':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-cyan-400">سۈنئىي ئەقىل (AI) نېمە؟</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                سۈنئىي ئەقىل - كەلگۈسىنىڭ تېخنىكىسى. بۇ بەت سىزنى AI دۇنياسىغا ئېلىپ بارىدۇ.
              </p>
            </div>
            
            {content.intro.sections.map((section, idx) => (
              <div key={idx} className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${idx === 0 ? 'bg-cyan-500/20' : idx === 1 ? 'bg-purple-500/20' : 'bg-green-500/20'}`}>
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{section.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{section.content}</p>
                    {section.examples && (
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold mb-2 text-yellow-400">مىساللار:</h4>
                        <div className="flex flex-wrap gap-2">
                          {section.examples.map((example, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-700 rounded-full">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'levels':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-cyan-400">سۈنئىي ئەقىلنىڭ سەۋىيەلىرى</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                3-دەرىجە يۇقىرى بولغان ھەر قانداق نەرسە كۆپىنچە سۈنئىي ئەقىل دەپ ئاتىلىدۇ.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.levels.levels.map((level, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${idx === 3 ? 'from-purple-900/30 to-blue-900/30' : 'from-gray-800 to-gray-900'} rounded-2xl p-6 border border-gray-700`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`text-2xl font-bold p-3 rounded-lg ${idx === 3 ? 'bg-purple-500/20 text-purple-400' : 'bg-gray-700 text-gray-300'}`}>
                        {level.level}
                      </div>
                      <h3 className="text-2xl font-bold">{level.name}</h3>
                    </div>
                    <div className="p-2 bg-gray-700 rounded-lg">
                      {level.icon}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{level.description}</p>
                  
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2 text-yellow-400">مىساللار:</h4>
                    <div className="flex flex-wrap gap-2">
                      {level.examples.map((example, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-700 rounded-full">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {idx === 3 && (
                    <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                      <p className="text-purple-300">✧ ئەڭ يۇقىرى سەۋىيە - ئەمەلىي AI قوللىنىلىدۇ</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'history':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-cyan-400">سۈنئىي ئەقىل تارىخى</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                1947-يىلدىن ھازىرغىچە بولغان AI تەرەققىياتىنىڭ مۇھىم ۋەقەلەرى
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500"></div>
              
              {content.history.timeline.map((item, idx) => (
                <div key={idx} className={`relative mb-12 ${idx % 2 === 0 ? 'pr-1/2 pl-8' : 'pl-1/2 pr-8'}`}>
                  <div className="absolute top-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-gray-900 transform -translate-x-1/2 left-1/2"></div>
                  
                  <div className={`bg-gradient-to-r ${idx === 4 ? 'from-green-900/30 to-emerald-900/30' : 'from-gray-800 to-gray-900'} rounded-2xl p-6 border border-gray-700`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-700 rounded-lg">
                          {item.icon}
                        </div>
                        <div>
                          <span className="text-2xl font-bold text-cyan-400">{item.year}</span>
                          <h3 className="text-xl font-bold">{item.event}</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {item.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-green-400">ھەمكارلىق دەۋرى (2016-ھازىر)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-700/50 rounded-xl">
                  <SiGoogle className="text-3xl mx-auto mb-2 text-red-400" />
                  <p className="font-semibold">Facebook, Amazon, Google, IBM, Microsoft</p>
                  <p className="text-sm text-gray-400 mt-2">2016: تارىخىي ھەمكارلىق</p>
                </div>
                <div className="text-center p-4 bg-gray-700/50 rounded-xl">
                  <SiApple className="text-3xl mx-auto mb-2 text-gray-300" />
                  <p className="font-semibold">Apple + 22 شىركەت</p>
                  <p className="text-sm text-gray-400 mt-2">2017: كەڭ ھەمكارلىق</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'types':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-cyan-400">ئۆگىنىش تۈرلىرى</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI نېمىلەرنى قىلالايدۇ؟ ھەر بىر ئۆگىنىش تۈرىنىڭ ئالاھىدىلىكلىرى ۋە قوللىنىش ساھەلىرى
              </p>
            </div>
            
            {content.types.types.map((type, idx) => (
              <div key={idx} className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${idx === 0 ? 'bg-blue-500/20' : idx === 1 ? 'bg-green-500/20' : idx === 2 ? 'bg-purple-500/20' : idx === 3 ? 'bg-red-500/20' : 'bg-yellow-500/20'}`}>
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{type.name}</h3>
                    <p className="text-gray-300">{type.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-yellow-400">قوللىنىش ساھەلىرى:</h4>
                    <div className="space-y-2">
                      {type.applications.map((app, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                          <span className="text-gray-300">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-cyan-400">ئالگورىزىملار:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.algorithms.map((algo, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                          {algo}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {showCode && idx === 0 && (
                  <div className="mt-6 bg-gray-900 rounded-xl p-4 border border-gray-700">
                    <div className="flex justify-between items-center mb-3">
                      <h5 className="text-lg font-semibold text-green-400">Python كود مىسالى:</h5>
                      <button 
                        onClick={() => setShowCode(false)}
                        className="px-3 py-1 bg-gray-800 rounded-lg text-sm"
                      >
                        يېپىش
                      </button>
                    </div>
                    <pre className="text-green-300 text-sm overflow-x-auto">
                      {codeExamples.classification}
                    </pre>
                  </div>
                )}
                
                {!showCode && idx === 0 && (
                  <button 
                    onClick={() => setShowCode(true)}
                    className="mt-4 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Python كود مىسالىنى كۆرۈش
                  </button>
                )}
              </div>
            ))}
          </div>
        );

      case 'workflow':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-cyan-400">AI قانداق ئىشلەيدۇ؟</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                ئاددىي پەرسېپتروندىن تارتىپ مۇرەككەپ نېرۋا تورلىرىغىچە بولغان ئىشلەش پرىنسىپى
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-green-400">ئاساسلىق باسقۇچلار</h3>
                {content.workflow.steps.map((step, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-2xl font-bold p-3 rounded-lg bg-cyan-500/20 text-cyan-400">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{step.title}</h4>
                        <div className="p-2 bg-gray-700 rounded-lg inline-block mt-2">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-purple-400">نېرۋا ھۈجەيرىسى مودېلى</h3>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                  <div className="text-center mb-6">
                    <div className="inline-block p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl">
                      <GiBrain className="text-4xl" />
                    </div>
                    <h4 className="text-xl font-bold mt-4">ئاددىي پەرسېپترون</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-yellow-400 mb-2">كىرگۈزۈش:</h5>
                      <div className="flex gap-2">
                        {content.workflow.neuronExample.inputs.map((input, i) => (
                          <div key={i} className="px-3 py-2 bg-gray-700 rounded-lg text-center">
                            {input}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-green-400 mb-2">ئېغىرلىقلار:</h5>
                      <div className="flex gap-2">
                        {content.workflow.neuronExample.weights.map((weight, i) => (
                          <div key={i} className="px-3 py-2 bg-gray-700 rounded-lg text-center">
                            {weight}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-900 rounded-xl">
                      <h5 className="font-semibold text-cyan-400 mb-2">چىقىرىش:</h5>
                      <div className="text-center text-lg font-mono">
                        {content.workflow.neuronExample.output}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                      <h5 className="font-semibold text-purple-400 mb-2">ئاكتىۋلاش فۇنكسىيەسى:</h5>
                      <div className="text-center text-lg font-mono">
                        {content.workflow.neuronExample.activation}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold mb-4 text-red-400">نېرۋا تورى قۇرۇلمىسى</h4>
                  <div className="flex items-center justify-between p-4 bg-gray-900 rounded-xl">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold">I</span>
                      </div>
                      <p className="text-sm">كىرگۈزۈش</p>
                    </div>
                    <FaChevronRight className="text-gray-400" />
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold">H</span>
                      </div>
                      <p className="text-sm">يوشۇرۇن</p>
                    </div>
                    <FaChevronRight className="text-gray-400" />
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold">O</span>
                      </div>
                      <p className="text-sm">چىقىرىش</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ml':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-cyan-400">ماشىنا ئۆگىنىشى ۋە چوڭقۇر ئۆگىنىش</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                ئاددىي ماشىنا ئۆگىنىشىدىن تارتىپ چوڭقۇر ئۆگىنىشكە قەدەر بولغان تەرەققىيات
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {content.ml.concepts.map((concept, idx) => (
                <div key={idx} className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-4 rounded-xl mb-4 ${idx === 0 ? 'bg-blue-500/20' : idx === 1 ? 'bg-purple-500/20' : 'bg-green-500/20'}`}>
                      {concept.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{concept.title}</h3>
                    <p className="text-gray-300">{concept.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">نېرۋا تورى تۈرلىرى</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.ml.neuralNetworks.map((network, idx) => (
                  <div key={idx} className={`p-6 rounded-xl ${idx === 2 ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30' : 'bg-gray-900/50 border border-gray-700'}`}>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold">{network.type}</h4>
                      <div className={`px-3 py-1 rounded-full ${idx === 2 ? 'bg-purple-500/20 text-purple-400' : 'bg-gray-800 text-gray-300'}`}>
                        {network.layers} قەۋەت
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{network.description}</p>
                    
                    <div className="flex justify-center mt-4">
                      <div className="flex items-center gap-1">
                        {Array.from({length: idx === 0 ? 1 : idx === 1 ? 3 : 5}).map((_, i) => (
                          <div key={i} className={`w-6 h-6 rounded-full ${i === 0 ? 'bg-blue-500' : i === 2 && idx === 2 ? 'bg-green-500' : 'bg-purple-500'}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-green-400">Python كود مىساللىرى</h3>
                <button 
                  onClick={() => setShowCode(!showCode)}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg hover:opacity-90 transition-opacity"
                >
                  {showCode ? 'كودنى يېپىش' : 'كودلارنى كۆرۈش'}
                </button>
              </div>
              
              {showCode && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-cyan-400">چوڭقۇر نېرۋا تورى:</h4>
                    <pre className="bg-gray-900 p-4 rounded-lg text-green-300 text-sm overflow-x-auto">
                      {codeExamples.neuralNetwork}
                    </pre>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-cyan-400">توپلاشتۇرۇش:</h4>
                    <pre className="bg-gray-900 p-4 rounded-lg text-green-300 text-sm overflow-x-auto">
                      {codeExamples.clustering}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'tools':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-cyan-400">AI قوراللىرى ۋە پلاتفورمىلار</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI تەرەققىياتى ئۈچۈن زۆرۈر بولغان قوراللار، كۇتۇپخانىلار ۋە مۇلازىمەتلەر
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.tools.platforms.map((platform, idx) => (
                <div key={idx} className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-2xl font-bold mb-6">{platform.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {platform.items.map((item, i) => (
                      <div key={i} className="flex flex-col items-center p-4 bg-gray-900/50 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer">
                        <div className={`text-3xl mb-3 ${item.color}`}>
                          {item.icon}
                        </div>
                        <span className="text-center font-semibold">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-green-400">ماشىنا ئۆگىنىش ئېقىمى</h3>
              
              <div className="flex items-center justify-between p-4 bg-gray-900 rounded-xl">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-2">
                    <SiPython className="text-2xl" />
                  </div>
                  <p className="font-semibold">Python</p>
                </div>
                
                <FaChevronRight className="text-gray-400 text-2xl" />
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-2">
                    <SiTensorflow className="text-2xl" />
                  </div>
                  <p className="font-semibold">TensorFlow</p>
                </div>
                
                <FaChevronRight className="text-gray-400 text-2xl" />
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-2">
                    <SiGoogle className="text-2xl" />
                  </div>
                  <p className="font-semibold">Google Cloud</p>
                </div>
                
                <FaChevronRight className="text-gray-400 text-2xl" />
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center mx-auto mb-2">
                    <GiRobotGrab className="text-2xl" />
                  </div>
                  <p className="font-semibold">AI قوللىنىش</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'examples':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-cyan-400">AI مىساللىرى</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                ئەمەلىي قوللىنىلغان AI سىستېمىلىرى ۋە تەجرىبىلەر
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {content.examples.examples.map((example, idx) => (
                <div key={idx} className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gray-700">
                      {example.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{example.name}</h3>
                      <p className="text-gray-400 text-sm">{example.description}</p>
                    </div>
                  </div>
                  
                  {example.link && (
                    <a 
                      href={example.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      تەجرىبە قىلىش
                    </a>
                  )}
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">ئەخلەت ئېلخەت تونۇش مىسالى</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-green-400">مەسىلە:</h4>
                  <div className="bg-gray-900 p-4 rounded-xl mb-4">
                    <p className="text-gray-300 italic">
                      "ھەممەيلەنگە مۇناسىۋەتلىك. بۇ مالىيە يىلىدىكى نىشانلارغا يېتىش ئۈچۈن، بىز يىغىندا ئەرزان باھالىق تاۋارلىرىمىزنى قايتا كۆرۈپ چىقىشنى قارار قىلدۇق..."
                    </p>
                  </div>
                  <p className="text-gray-400">{content.examples.spamExample.description}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-cyan-400">ھېسابلاش:</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2">ئالاھىدىلىكلەر:</h5>
                      <div className="space-y-2">
                        {content.examples.spamExample.features.map((feature, i) => (
                          <div key={i} className="flex justify-between items-center p-2 bg-gray-900/50 rounded">
                            <span className="text-gray-300">{feature.split(':')[0]}</span>
                            <span className="font-mono text-green-400">{feature.split(':')[1]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl">
                      <h5 className="font-semibold mb-2">ھېسابلاش فورمۇلاسى:</h5>
                      <div className="text-center text-xl font-mono text-cyan-300">
                        {content.examples.spamExample.calculation}
                      </div>
                    </div>
                    
                    <div className={`p-4 rounded-xl ${content.examples.spamExample.result.includes('ئەمەس') ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'}`}>
                      <h5 className="font-semibold mb-2">نەتىجە:</h5>
                      <div className="text-center text-xl font-bold">
                        {content.examples.spamExample.result}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'future':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-cyan-400">AI كەلگۈسى</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                2045-يىلغىچە بولغان AI تەرەققىياتى ۋە كۈتۈلگۈچى تەسىرلەر
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {content.future.predictions.map((prediction, idx) => (
                <div key={idx} className={`bg-gradient-to-r ${idx === 1 ? 'from-purple-900/30 to-pink-900/30 border border-purple-500/30' : 'from-gray-800 to-gray-900 border border-gray-700'} rounded-2xl p-6`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg ${idx === 1 ? 'bg-purple-500/20' : 'bg-cyan-500/20'}`}>
                      {prediction.icon}
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-yellow-400">{prediction.year}</span>
                      <h3 className="text-xl font-bold">{prediction.prediction}</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {prediction.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className={`w-2 h-2 rounded-full mt-2 ${idx === 1 ? 'bg-purple-500' : 'bg-cyan-500'}`}></div>
                        <p className="text-gray-300">{detail}</p>
                      </div>
                    ))}
                  </div>
                  
                  {idx === 1 && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl">
                      <p className="text-purple-300 font-semibold">✦ يەككەلىك (Singularity) - تېخنىكىلىق تەرەققىياتنىڭ ئەڭ ئەھمىيەتلىك نۇقتىسى</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-red-400">كەلگۈسىدىكى قىيىنچىلىقلار</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {content.future.challenges.map((challenge, idx) => (
                  <div key={idx} className="p-4 bg-gray-900/50 rounded-xl border border-gray-700">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">{['⚠️', '🔒', '👨‍💼', '🕊️'][idx]}</span>
                      </div>
                      <p className="font-semibold">{challenge}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 text-center">
              <h3 className="text-2xl font-bold mb-4 text-green-400">ئىنسان ۋە AI ھەمكارلىقى</h3>
              <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                كەلگۈسىدە ئىنسانلار ۋە سۈنئىي ئەقىل بىرلىكتە ئىشلەپ، ئىنسانىيەتنىڭ مەسىلىلىرىنى بىرلىكتە ھەل قىلىدۇ. 
                AI ئىنسانلارنىڭ قابىلىيىتىنى كۈچەيتىش ۋە يېڭى پۇرسەتلەرنى ئېچىش ئۈچۈن قوللىنىلىدۇ.
              </p>
              <div className="flex justify-center gap-4">
                <div className="p-4 bg-blue-500/20 rounded-xl">
                  <FaUsers className="text-3xl text-blue-400" />
                  <p className="mt-2 font-semibold">ئىنسان ئەقلى</p>
                </div>
                <div className="p-4 bg-green-500/20 rounded-xl">
                  <GiArtificialIntelligence className="text-3xl text-green-400" />
                  <p className="mt-2 font-semibold">سۈنئىي ئەقىل</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-4 md:p-8" style={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        {/* باش تېما */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent blur-2xl"></div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
            سۈنئىي ئەقىل (AI)
            <span className="block text-2xl md:text-3xl text-cyan-400 mt-2">تولۇق تەپسىلاتلىق دەرسلىك</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto relative">
            2025-يىلى 11-ئاينىڭ 13-كۈنى • سۈنئىي ئەقىلنىڭ ئاساسىدىن باشلاپ كەلگۈسىگىچە بولغان تولۇق يېتەكچى
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <GiArtificialIntelligence className="text-cyan-500 text-2xl" />
              <span className="text-lg">سۈنئىي ئەقىل ئاساسلىرى</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLaptopCode className="text-green-500 text-2xl" />
              <span className="text-lg">ماشىنا ئۆگىنىشى</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="text-purple-500 text-2xl" />
              <span className="text-lg">Python كود مىساللىرى</span>
            </div>
          </div>
        </div>

        {/* تەھرىرلەش تەڭشەكلىرى */}
        <div className="mb-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl p-4 border border-gray-700">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">خەت چوڭلۇقى:</label>
                <select 
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="small">كىچىك</option>
                  <option value="medium">ئوتتۇرا</option>
                  <option value="large">چوڭ</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-1">ئېنىماتسىيە:</label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPlayAnimation(!playAnimation)}
                    className="p-2 bg-gray-900 rounded-lg hover:bg-gray-800"
                  >
                    {playAnimation ? <FaPause /> : <FaPlay />}
                  </button>
                  <select 
                    value={animationSpeed}
                    onChange={(e) => setAnimationSpeed(Number(e.target.value))}
                    className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="0.5">ئاستا</option>
                    <option value="1">نورمال</option>
                    <option value="2">تېز</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:opacity-90 transition-opacity">
                <FaDownload className="inline mr-2" />
                PDF چۈشۈرۈش
              </button>
              <button className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors">
                <FaBookmark className="inline mr-2" />
                خاتىرىلەش
              </button>
            </div>
          </div>
        </div>

        {/* بۆلەك نىسبىتى */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* بۆلەك مەزمۇنلىرى */}
          <div className="lg:w-3/4">
            <div 
              className={`bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 md:p-8 border border-gray-700 ${fontSize === 'small' ? 'text-sm' : fontSize === 'large' ? 'text-lg' : ''}`}
              style={{ minHeight: '600px' }}
            >
              {renderContent()}
            </div>
          </div>
          
          {/* بۆلەك تىزىملىكى */}
          <div className="lg:w-1/4">
            <div className="sticky top-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
                <FaBook />
                بۆلەكلەر
              </h3>
              
              <div className="space-y-2">
                {chapters.map((chapter, idx) => (
                  <button
                    key={chapter.id}
                    onClick={() => {
                      setActiveSection(chapter.id);
                      setActiveChapter(idx);
                    }}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
                      activeSection === chapter.id 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className={`${activeSection === chapter.id ? 'text-white' : 'text-gray-400'}`}>
                      {chapter.icon}
                    </span>
                    <span className="flex-1">{chapter.title}</span>
                    {activeSection === chapter.id && (
                      <FaChevronRight className="text-white" />
                    )}
                  </button>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-lg font-bold mb-4 text-green-400">تېز ئۇچۇرلار</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg">
                    <SiPython className="text-yellow-500 text-xl" />
                    <div>
                      <p className="font-semibold">Python ئاساسىي</p>
                      <p className="text-sm text-gray-400">AI تەرەققىياتى ئۈچۈن</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg">
                    <SiTensorflow className="text-orange-500 text-xl" />
                    <div>
                      <p className="font-semibold">TensorFlow</p>
                      <p className="text-sm text-gray-400">چوڭقۇر ئۆگىنىش</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg">
                    <SiGoogle className="text-blue-500 text-xl" />
                    <div>
                      <p className="font-semibold">Google Cloud AI</p>
                      <p className="text-sm text-gray-400">بۇلۇت مۇلازىمىتى</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30">
                <h5 className="font-bold text-purple-300 mb-2">ئەسكەرتىش</h5>
                <p className="text-sm text-gray-300">
                  بۇ دەرسلىك يېڭى باشلىغۇچىلار ئۈچۈن لايىھەلەنگەن. 
                  ھەر بىر بۆلەكتە ئەمەلىي مىساللار بىلەن چۈشەندۈرۈلگەن.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ئەمەلىيەت ۋە كودلار */}
        <div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-green-400">ئەمەلىيەت ۋە كود مىساللىرى</h3>
              <p className="text-gray-300">AI تەتقىقاتى ئۈچۈن پايدىلىق كود بۆلەكلىرى</p>
            </div>
            <button 
              onClick={() => setShowCode(!showCode)}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <FaCode />
              {showCode ? 'كودلارنى يېپىش' : 'كودلارنى كۆرۈش'}
            </button>
          </div>
          
          {showCode && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-400 ml-auto">classification.py</span>
                </div>
                <pre className="text-green-300 text-xs overflow-x-auto">
                  {codeExamples.classification.substring(0, 200)}...
                </pre>
                <button className="w-full mt-3 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
                  تولۇق كودنى كۆرۈش
                </button>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-400 ml-auto">neural_network.py</span>
                </div>
                <pre className="text-green-300 text-xs overflow-x-auto">
                  {codeExamples.neuralNetwork.substring(0, 200)}...
                </pre>
                <button className="w-full mt-3 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
                  تولۇق كودنى كۆرۈش
                </button>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-400 ml-auto">clustering.py</span>
                </div>
                <pre className="text-green-300 text-xs overflow-x-auto">
                  {codeExamples.clustering.substring(0, 200)}...
                </pre>
                <button className="w-full mt-3 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
                  تولۇق كودنى كۆرۈش
                </button>
              </div>
            </div>
          )}
        </div>

        {/* تۆۋەنكى كونترول پانېلى */}
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={() => {
              const prevIndex = Math.max(0, activeChapter - 1);
              setActiveSection(chapters[prevIndex].id);
              setActiveChapter(prevIndex);
            }}
            disabled={activeChapter === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              activeChapter === 0 
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90'
            }`}
          >
            <FaChevronLeft />
            ئالدىنقى بۆلەك
          </button>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              {chapters.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activeChapter 
                      ? 'bg-cyan-500 w-4' 
                      : 'bg-gray-700'
                  }`}
                ></div>
              ))}
            </div>
            <p className="text-gray-400 mt-2">
              {activeChapter + 1} / {chapters.length} بۆلەك
            </p>
          </div>
          
          <button
            onClick={() => {
              const nextIndex = Math.min(chapters.length - 1, activeChapter + 1);
              setActiveSection(chapters[nextIndex].id);
              setActiveChapter(nextIndex);
            }}
            disabled={activeChapter === chapters.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              activeChapter === chapters.length - 1 
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90'
            }`}
          >
            كېيىنكى بۆلەك
            <FaChevronRight />
          </button>
        </div>

        {/* خۇلاسە */}
        <div className="mt-12 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl border border-gray-700 max-w-3xl">
            <GiArtificialIntelligence className="text-6xl text-cyan-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">خۇلاسە</h3>
            <p className="text-gray-300 text-lg mb-6">
              سۈنئىي ئەقىل - بىزنىڭ كەلگۈسىمىزنى شەكىللەندۈرىدىغان تېخنىكا. 
              ئۇ پەقەت تېخنىكىلا ئەمەس، بەلكى ئىنسانىيەتنىڭ چۈشىنىشىنى ۋە ئىمكانىيەتلىرىنى كېڭەيتىدىغان قورال.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-cyan-500/20 rounded-full">ئۆگىنىش</span>
              <span className="px-4 py-2 bg-purple-500/20 rounded-full">مودېللاش</span>
              <span className="px-4 py-2 bg-green-500/20 rounded-full">پەرەز قىلىش</span>
              <span className="px-4 py-2 bg-yellow-500/20 rounded-full">تەرەققىيات</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 سۈنئىي ئەقىل (AI) تولۇق دەرسلىكى</p>
          <p className="mt-2">بۇ مەزمۇن ئىلمىي مەنبەلەرگە ئاساسەن تەييارلاندى ۋە يېڭىلىنىپ تۇرىدۇ</p>
        </div>
      </div>
    </div>
  );
};

export default Blog38;