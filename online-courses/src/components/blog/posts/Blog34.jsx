// src/components/blog/posts/Blog34.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaRobot, FaBrain, FaGraduationCap, FaProjectDiagram, FaGamepad,
  FaChartLine, FaForward, FaUsers, FaDatabase, FaMicrochip,
  FaExternalLinkAlt, FaCheck, FaCogs, FaRocket, FaHeartbeat, FaTshirt,
  FaQuoteLeft, FaGithub, FaGoogle, FaKaggle, FaPlay, FaLightbulb,
  FaExclamationTriangle, FaCheckCircle, FaCalendarAlt, FaBook, FaFlagCheckered,
  FaClock, FaHouseUser, FaFileCode, FaTrophy,
  FaIndustry // ⬅️ قوشۇپ قويۇڭ (ئاستىدا ئىشلىتىلىدۇ)
} from 'react-icons/fa';

const Blog34 = () => {
  const [currentSection, setCurrentSection] = useState('intro');
  const outputRef = useRef(null);

  // === ئۇيغۇرچە مەزمۇن ===
  const content = {
    mainTitle: "ئەڭ چۈشىنىشلىك ماشىنا ئۆگىنىش دەرسلىك",
    subtitle: "Python باشلانغۇچىلىرى ئۈچۈن scikit-learn بىلەن ئۆي باھاسىنى باھالاش",
    dateInfo: "يوللانغان ۋاقىتى : 2024-يىلى 12-ئاينىڭ 22-كۈنى ",

    // مۇندەرىجە
    tocTitle: "📖 مۇندەرىجە",
    toc1: "باشلاش",
    toc2: "نىشانلانغان كىشىلەر",
    toc3: "ماشىنا ئۆگىنىش ئاساسىي چۇشۇنچىلىرى",
    toc4: "ماشىنا ئۆگىنىشنى ئەمەلىيلەشتۈرۈش",
    toc5: "Kaggle بىلەن سېلشتۇرۇپ ئوقۇش",
    toc6: "ئاخىرقى سۆز",
    timeEstimate: "تەلەپ قىلىنغان ۋاقىت: تەخمىنەن 80 مىنۇت",

    // باشلاش
    introTitle: "باشلاش",
    calendarTitle: "كەلبىل ",
    introDesc: "      ماشىنا ئۆگىنىشنى باشلاشنى خالايمەن، ئەمما نېمىدىن باشلاشنى بىلمەيمەن... شۇنداق كىشىلەر ئۈچۈن، ئەمەلىي پروگراممىلار ئارقىلىق ماشىنا ئۆگىنىشنىڭ ئومۇمىي جەرياننى  چۈشىنىشكە ياردەم بېرىدىغان دەرسلىك تەييارلىدم.",
    tip1Title: "بۇ دەرسلىكنىڭ ئالاھىدىلىكى",
    tip1List: [
      "Google Colab تە سۇرئەتتە ئىجرا قىلالايدۇ",
      "ئەمەلىي ئۆي باھا سانلىق-مەلۇماتى ئىشلىتىلىدۇ",
      "ھەر بىر قەدەمنىڭ مەنىسىنى تەپسىلىي چۈشەندۈرىدۇ",
      "كېيىنكى قىلىشقا تېگىشلىك ئىشلارنى ئېنىق كۆرسىتىدۇ"
    ],
    roadmapTitle: "ئۆگىنىش يول خەرىتىسى",
    roadmapSteps: [
      { title: "ئاساسىي چۇشۇنچىلارنى چۈشىنىش", desc: "ياساما ئەقىل، ماشىنا ئۆگىنىش ۋە چوڭقۇر ئۆگىنىشنىڭ پەرقى" },
      { title: "ئەمەلىيلەشتۈرۈش (scikit-learn)", desc: "ئۆي باھاسىنى باھالاش مودېلىنى قۇرۇش" },
      { title: "Kaggle بىلەن ئۈگنىش ،تەرەققى قىلىش", desc: "ئەمەلىي دۇنيا سانلىق-مەلۇماتىدا ئەمەلىيلەشتۈرۈش" }
    ],

    // نىشانلانغان كىشىلەر
    targetTitle: "نىشانلانغان كىشىلەر",
    targets: [
      { icon: <FaFileCode />, title: "Python باشلانغۇچىلىرى", desc: "ئاساسىي گرامماتىكا (ئۆزگەرگۈچى، فۇنكسىيە، تىزىملىك قاتارلىق) نى چۈشىنىدىغان كىشىلەر" },
      { icon: <FaBrain />, title: "ML باشلانغۇچىلىرى", desc: "ماشىنا ئۆگىنىشكە قىزىقىدىغان، ئەمما نېمىدىن باشلىشىنى بىلمەيدىغان كىشىلەر" },
      { icon: <FaIndustry />, title: "AI تەرەققىياتىنى ئاچقۇچى كىشىلەر", desc: "شىركەت ياساما ئەقىل تەرەققىياتى ئۈچۈن لازىم بولغان ماھارەتلەرنى ئىگىلەشنى خالايدىغان كىشىلەر" }
    ],
    prerequisiteTitle: "ئالدىنقى بىلىم",
    prerequisiteDesc: "يۇقىرى سەۋىيىدىكى ماتېماتىكا بىلىمى تەلەپ قىلىنمايدۇ! بۇ دەرسلىكتە ماتېماتىكا فورمۇللىرىدىن كۆرە، ئەمەلىي كود ۋە نەتىجىلەرنى چۈشەندۈرۈشكە دىققەت قىلىنىدۇ. قىيىن نەزەرىيەلەرنى كېيىنىگە قالدۇرۇپ، ئاۋۋال 'ھەرىكەت قىلىپ چۈشىنىش' نى مەقسەت قىلىڭ.",

    // ماشىنا ئۆگىنىش ئاساسىي تۇشۇنچىلىرى
    conceptsTitle: "ماشىنا ئۆگىنىش ئاساسىي چۇشۇنچىلىرى",
    hierarchyTitle: "ياساما ئەقىل، ماشىنا ئۆگىنىش ۋە چوڭقۇر ئۆگىنىش مۇناسىۋىتى",
    aiLabel: "ياساما ئەقىل",
    mlLabel: "ماشىنا ئۆگىنىش",
    dlLabel: "چوڭقۇر ئۆگىنىش",
    hierarchyDesc: "ياساما ئەقىل ئىچىدە، سانلىق-مەلۇماتتىن ئۆگىنىدىغان ئۇسۇل ماشىنا ئۆگىنىش. ئۇنىڭ ئىچىدە تارماقلىق تور ئىشلىتىدىغان ئۇسۇل چوڭقۇر ئۆگىنىش.",
    mlTypesTitle: "ماشىنا ئۆگىنىش تۈرلىرى",
    mlTypes: [
      { icon: <FaGraduationCap />, title: "نازارەتلىك بار ئۆگىنىش", desc: "توغرا جاۋاب بەلگىسى قوشۇلغان سانلىق-مەلۇماتتا ئۆگىنىش", examples: "مىسال: ئۆي باھاسىنى باھالاش، سپام بەلگىلەش" },
      { icon: <FaProjectDiagram />, title: "نازارەتسز ئۆگىنىش", desc: "بەلگىسىز سانلىق-مەلۇماتتىن ئۆرنەكلەرنى بايقاش", examples: "مىسال: خېرىدار بۆلەكلەش، نورمال ئەمەسلىكنى بايقاش" },
      { icon: <FaGamepad />, title: "مۇكاپاتلاش ئۆگىنىشى", desc: "مۇكاپاتنى ئەڭ يۇقىرى چېكىگە كۆتۈرۈشكە تىرىشىپ ھەرىكەت ئۆگىنىش", examples: "مىسال: ئويۇن ياساما ئەقىلى، ئاپتوماتىك ھەرىكەت" }
    ],
    regVsClassTitle: "رېگرېسسىيە vs تۈرگە ئايرىش",
    comparisonData: [
      { col1: "چىقىرىش تۈرى", col2: "داۋاملىق قىممەت (سان)", col3: "ئايرىم قىممەت (كاتېگورىيە)" },
      { col1: "مىسال", col2: "ئۆي باھاسى، ساتۇش باھالاش", col3: "سپام بەلگىلەش، رەسىم تۈرگە ئايرىش" },
      { col1: "ۋەكىللىك ئالگورىزمىلار", col2: "سىزىقلىق چىكىنىش، قارار دەرىخى چىكىنىش", col3: "لوگىكلىق چىكىنشى، SVM" }
    ],
    focusTitle: "بۇ دەرسلىكنىڭ دىققەت نۇقتىسى",
    focusDesc: "بۇ قېتىم بىز نازارەتلىك بار ئۆگىنىشتىكى رېگرېسسىيە مەسىلىسىگە مەركەزلەشىمىز. مەلۇم بولغان ئەھۋالدا، كالىفورنىيە ئۆي سانلىق-مەلۇماتىنى ئىشلىتىپ ئۆي باھاسىنى باھالاش مودېلى قۇرىمىز.",

    // ماشىنا ئۆگىنىشنى ئەمەلىيلەشتۈرۈش
    implementationTitle: "ماشىنا ئۆگىنىشنى ئەمەلىيلەشتۈرۈش (scikit-learn)",
    steps: [
      {
        title: "كىتاپخانا ئىمپورت قىلىش ۋە سانلىق-مەلۇمات يۈكلەش",
        desc: "ئاۋۋال لازىملىق كىتاپخانىلارنى ئىمپورت قىلىپ، سانلىق-مەلۇماتنى يۈكلەڭ.",
        code: `import numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nfrom sklearn.datasets import fetch_california_housing\n# كالىفورنىيە ئۆي باھاسى سانلىق-مەلۇماتىنى يۈكلەش\nhousing = fetch_california_housing()\n# سانلىق-مەلۇماتنى دېتا فرېيمغا ئايلاندۇرۇش\ndf = pd.DataFrame(housing.data, columns=housing.feature_names)\ndf['Price'] = housing.target\n# سانلىق-مەلۇماتنىڭ ئاساسىي ئۇچۇرىنى كۆرسىتىش\nprint(\"سانلىق-مەلۇمات شەكلى:\", df.shape)\nprint("\nباشلىنىشىدىكى 5 قۇر:\"\ndf.head()`
      },
      {
        title: "سانلىق-مەلۇماتنى كۆرۈنمە قىلىش ۋە چۈشىنىش",
        desc: "سانلىق-مەلۇمات تارقىلىشى ۋە ئالاھىدىلىكلەر ئارىسىدىكى مۇناسىۋەتنى جەزملەڭ.",
        code: `# سانلىق-مەلۇماتنىڭ ئاساسىي ستاتىستىكىلىرى\nprint(\"ئاساسىي ستاتىستىكا:\")\nprint(df.describe())\n# ھىستوگرامما بىلەن تارقىلىشنى جەزملەش\nfig, axes = plt.subplots(3, 3, figsize=(15, 12))\nfor i, col in enumerate(df.columns):\n    ax = axes[i//3, i%3]\n    ax.hist(df[col], bins=30, edgecolor='black', alpha=0.7)\n    ax.set_title(f'{col} نىڭ تارقىلىشى')\n    ax.set_xlabel(col)\n    ax.set_ylabel('تەكرارلىنىش سانى')\nplt.tight_layout()\nplt.show()`
      },
      {
        title: "سانلىق-مەلۇماتنى ئالدىن بىر تەرەپ قىلىش (چەت ئېلىمىنى چىقىرىش)",
        desc: "چەت ئېلىم مودېلنىڭ ياخشىلىقىنى تۆۋەنلىتىدۇ، شۇڭا مۇناسىۋەتلىك بىر تەرەپ قىلىڭ.",
        code: `# چەت ئېلىم چىقىرىش (ھەر بىر ئالاھىدىلىكنىڭ ئۈستىدىكى 1% نى چىقىرىش)\ndf_clean = df.copy()\nfor col in housing.feature_names:\n    q99 = df_clean[col].quantile(0.99)\n    df_clean = df_clean[df_clean[col] <= q99]\n# باھانىڭ چەت ئېلىمىنىمۇ چىقىرىش\nprice_q99 = df_clean['Price'].quantile(0.99)\ndf_clean = df_clean[df_clean['Price'] <= price_q99]\nprint(f\"ئەسلى سانلىق-مەلۇمات سانى: {len(df)}\")\nprint(f\"تازىلانغاندىن كېيىنكى: {len(df_clean)}\")\nprint(f\"چىقىرىۋېتىلگەن سانلىق-مەلۇمات: {len(df) - len(df_clean)} تالۇق ({((len(df)-len(df_clean))/len(df)*100):.1f}%)")`
      },
      {
        title: "سانلىق-مەلۇماتنى ئايرىش ۋە نورماللاشتۇرۇش",
        desc: "سانلىق-مەلۇماتنى ئەمەلىيەت ۋە تەكشۈرۈش ئىشلىتىشكە ئايرىڭ، ئالاھىدىلىكلەرنى نورماللاشتۇرۇڭ.",
        code: `from sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\n# ئالاھىدىلىك ۋە نىشاننى ئايرىش\nX = df_clean.drop('Price', axis=1)\ny = df_clean['Price']\n# سانلىق-مەلۇماتنى ئايرىش (80% ئەمەلىيەت، 20% تەكشۈرۈش)\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n# ئالاھىدىلىكنى نورماللاشتۇرۇش\nscaler = StandardScaler()\nX_train_scaled = scaler.fit_transform(X_train)\nX_test_scaled = scaler.transform(X_test)\nprint(f\"ئەمەلىيەت سانلىق-مەلۇماتى: {X_train_scaled.shape[0]} تالۇق\")\nprint(f\"تەكشۈرۈش سانلىق-مەلۇماتى: {X_test_scaled.shape[0]} تالۇق\")\nprint(f\"ئالاھىدىلىك سانى: {X_train_scaled.shape[1]}\")`
      },
      {
        title: "سىزىقلىق رېگرېسسىيە مودېلىنى ئۆگىتىش",
        desc: "ئەڭ ئاساسىي ماشىنا ئۆگىنىش مودېلى بولغان سىزىقلىق رېگرېسسىيەنى مەشىق قىلىڭ.",
        code: `from sklearn.linear_model import LinearRegression\n# سىزىقلىق رېگرېسسىيە مودېلى قۇرۇش ۋە ئەمەلىيەت\nmodel = LinearRegression()\nmodel.fit(X_train_scaled, y_train)\n# مودېل پارامېتىرلىرىنى كۆرسىتىش\nprint(\"مودېل ئەمەلىيەت ئەڭگە يەتكەن!\")\nprint(f\"كېسىش نۇقتىسى (Intercept): {model.intercept_:.4f}\")\nprint(\"\\nكەسگۈچ (Coefficients):\")\nfor i, (col, coef) in enumerate(zip(housing.feature_names, model.coef_)):\n    print(f\"  {col}: {coef:>8.4f}\")`
      },
      {
        title: "ياخشىلىق باھالىش (RMSE ۋە R² نىتىجە)",
        desc: "مودېلنىڭ ياخشىلىقىنى بىر قانچە كۆرسەتكۈچلەر بىلەن باھالىڭ.",
        code: `from sklearn.metrics import mean_squared_error, r2_score\nimport numpy as np\n# ئەمەلىيەت ۋە تەكشۈرۈش سانلىق-مەلۇماتىدا باھالاش\ny_train_pred = model.predict(X_train_scaled)\ny_test_pred = model.predict(X_test_scaled)\n# ياخشىلىق كۆرسەتكۈچلىرى\ntrain_rmse = np.sqrt(mean_squared_error(y_train, y_train_pred))\ntest_rmse = np.sqrt(mean_squared_error(y_test, y_test_pred))\ntrain_r2 = r2_score(y_train, y_train_pred)\ntest_r2 = r2_score(y_test, y_test_pred)\nprint(\"=\" * 50)\nprint(\"مودېل ياخشىلىقى باھالاش\")\nprint(\"=\" * 50)\nprint(f\"ئەمەلىيەت سانلىق-مەلۇماتى RMSE: {train_rmse:.4f}\")\nprint(f\"تەكشۈرۈش سانلىق-مەلۇماتى RMSE: {test_rmse:.4f}\")\nprint(f\"ئەمەلىيەت سانلىق-مەلۇماتى R² نىتىجىسى: {train_r2:.4f}\")\nprint(f\"تەكشۈرۈش سانلىق-مەلۇماتى R² نىتىجىسى: {test_r2:.4f}\")`
      }
    ],
    interpretationTitle: "نەتىجىنى چۈشەندۈرۈش",
    interpretationDesc: "RMSE (يىلتىز ئوتتۇرىچە كەمسىتىش خاتالىقى): باھالاش قىممىتى ۋە ئەمەلىي قىممەتنىڭ ئوتتۇرىچە خاتالىقى. R² نىتىجە: مودېل سانلىق-مەلۇماتنىڭ قانچىلىك ئۆزگىرىشىنى چۈشەندۈرەلەيدىغانلىقىنى كۆرسىتىدىغان كۆرسەتكۈچ (0~1). RMSE ≈ 0.61 دېگەن سۆز، ئۆي باھاسى باھالاش خاتالىقى تەخمىنەن 61 مىڭ دوللار (تەخمىنەن 8 مىليون يۈەن) ئىكەنلىكىنى بىلدۈرىدۇ. سېلىم قارارى قىلىشتا بىراق تەسەررۇپ قىلىدۇ، ئەمما بۇ ماشىنا ئۆگىنىش مودېلىنىڭ ئاساسىي ياخشىلىقى. تېخىمۇ ياخشى نەتىجە ئۈچۈن، ئالاھىدىلىك قۇرۇلۇشى ياكى تېخىمۇ مۇرەككەپ مودېل ئىشلىتىش زۆرۈر.",
    nextStepsTitle: "كېيىن سىنايدىغان ئىشلار",
    nextStepsList: [
      "باشقا رېگرېسسىيە مودېللىرىنى سىناڭ (قارار دەرىخى رېگرېسسىيەسى، خۇرۇچ باغ رېگرېسسىيەسى)",
      "ئالاھىدىلىك قۇرۇلۇشى بىلەن يېڭى ئالاھىدىلىكلەر قۇرۇڭ",
      "ئالىي پارامېترلارنى ماسلاشتۇرۇڭ",
      "چوڭايتىلغان توغرىلاش بىلەن تېخىمۇ توغرا ياخشىلىق باھالىڭ"
    ],

    // Kaggle
    kaggleTitle: "Kaggle گە مەيدان ئوقۇش",
    whatIsKaggleTitle: "Kaggle دېگەن نېمە؟",
    kaggleDesc: "Kaggle دۇنيادىكى ئەڭ چوڭ سانلىق-مەلۇمات پەن-ماشىنا ئۆگىنىش جەمئىيىتى. باشلانغۇچىدىن پىروفېسسىيونالغىچە، ھەر كىم ھەقسىز قاتنىشالايدۇ.",
    kaggleStats: [
      { icon: <FaUsers />, title: "چوڭ كۆلەملىك جەمئىيەت", desc: "26 مىليوندىن ئارتۇق Kaggle ئەزالىرى" },
      { icon: <FaDatabase />, title: "باي سانلىق-مەلۇمات توپلىمى", desc: "540 مىڭدىن ئارتۇق ئاممىۋى سانلىق-مەلۇمات توپلىمى" },
      { icon: <FaMicrochip />, title: "ھەقسىز GPU/TPU", desc: "ماشىنا ئۆگىنىش ھېسابلاش ئۈچۈن ھەقسىز مەنبەلەر" }
    ],
    recommendedTitle: "باشلانغۇچىلارغا تەۋسىيە قىلىنغان مۇسابىقە",
    kaggleChallenges: [
      { title: "تىتانىك: مۇۋەپپەقىيەتكە ئىرشىگەنلەرنى باھالاش", desc: "تىرىك قالغانلارنى باھالاش - ماشىنا ئۆگىنىشنىڭ 'Hello World'", url: "https://www.kaggle.com/c/titanic" },
      { title: "ئۆي باھاسى: يېتىلدىغان رېگرېسسىيە تېخنىكىسى", desc: "ئۆي باھاسىنى باھالاش - بۇ تۇتۇرىالنىڭ قوللىنىلىشى", url: "https://www.kaggle.com/c/house-prices-advanced-regression-techniques" },
      { title: "رەقەم تونۇش", desc: "قول يېزىلغان رەقەم تونۇش - رەسىم تۈرگە ئايرىشنىڭ كىرىش سۆزى", url: "https://www.kaggle.com/c/digit-recognizer" }
    ],
    gettingStartedTitle: "Kaggle نى باشلاش ئۇسۇلى",
    gettingStartedList: [
      "Kaggle ھېسابات قۇرۇش (ھەقسىز)",
      "'Notebooks' دىن يېڭى دەپتەرچە قۇرۇش",
      "سانلىق-مەلۇمات توپلىمىنى قوشۇش ('+ Add data' توپچىسى)",
      "كود يېزىپ ئىجرا قىلىش (GPU/TPU نى تاللىيالايدۇ)",
      "نەتىجىنى ساقلىش/ئاشكارىلاپ جەمئىيەت بىلەن ھەمبەھىرلەش"
    ],

    // ئاخىرقى سۆز
    conclusionTitle: "ئاخىرقى سۆز",
    achievementTitle: "مۇبارەك بولسۇن!",
    achievementDesc: "بۇ دەرسلكىنى تاماملاپ، سىز:",
    skills: [
      "ماشىنا ئۆگىنىش ئاساسىي چۇشۇنچىلىرىنى چۈشەندىڭىز",
      "ئەمەلىي رېگرېسسىيە مودېلى قۇردىڭىز",
      "Kaggle گە بىرىنچى قەدەمنى قويدىڭىز"
    ],
    nextChallengeTitle: "كېيىنكى قەدەم",
    nextChallenges: [
      { icon: <FaHeartbeat />, title: "دوختۇرخانا سانلىق-مەلۇمات تەھلىلى", desc: "شەكەر كېسەللىكىنىڭ ئىلگىرىلىشىنى باھالاش مودېلى قۇرۇش", url: "https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database" },
      { icon: <FaTshirt />, title: "كىيىم-كېچەك رەسىم تۈرگە ئايرىش", desc: "كىيىم-كېچەك تۈرىنى ئاپتوماتىك تۈرگە ئايرىدىغان مودېل", url: "https://www.kaggle.com/datasets/zalando-research/fashionmnist" }
    ],
    finalMessageTitle: "ئۆگىنىشنى داۋاملاشتۇرۇڭ!",
    finalMessage: "ماشىنا ئۆگىنىش ئەمەلىي ماھارەت. نەزەرىيە ئۆگىنىشتىن باشقا، ئەمەلىي كود يېزىش، سانلىق-مەلۇماتقا تۇتۇنۇش، مودېلنى ياخشىلاش جەريانىدا ھەقىقىي چۈشەنچە چوڭقۇرلىشىدۇ. بۇ تۇتۇرىالنىڭ سىزنىڭ ماشىنا ئۆگىنىش سەپىرىڭىزنىڭ باشلىنىش نۇقتىسى بولۇشىنى ئۈمىد قىلىمەن.",
    quote: "'مىڭ چاقىرىملىق يول بىر قەدەمدىن باشلىنىدۇ' - كىچىك قەدەمدىن باشلاڭ، چوڭ نەتىجىلەرنى نىشان قىلىڭ!",

    // ئاستىدىكى خەت
    copyright: "© 2025 KeLBiL ئەڭ چۈشىنىشلىك ماشىنا ئۆگىنىش دەرسلىكى. ھوقۇقلىرى قوغدىلىدۇ.",
    disclaimer: "بۇ دەرسلىك تەربىيە مەقسىتىدە. ئەمەلىي پروگراممىلاردا، سانلىق-مەلۇمات سۈپىتىنى جەزملەش، مودېلنى تەپسىلىي باھالىش، كارخانا تەلىپى بىلەن ماسلاشتۇرۇشنى جەزملەش زۆرۈر."
  };

  // تەرەققىيات ھېسابلاش
  const progressMap = { intro: 10, target: 25, 'ml-concepts': 40, implementation: 65, kaggle: 85, conclusion: 100 };
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
            setProgress(progressMap[entry.target.id] || 10);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // كودنى سۈنئىي ئىجرا قىلىش
  const runCode = (stepIndex) => {
    const outputs = [
      "سانلىق-مەلۇمات شەكلى: (20640, 9)\nباشلىنىشىدىكى 5 قۇر:\n   MedInc  HouseAge  AveRooms ... Price\n0  8.3252      41.0  6.984127 ... 4.526\n1  8.3014      21.0  6.238137 ... 3.585\n...",
      "ئاساسىي ستاتىستىكا:\n              MedInc      HouseAge      AveRooms  ...\ncount  20640.000000  20640.000000  20640.000000  ...\nmean       3.870671     28.639486      5.429000  ...\n...",
      "ئەسلى سانلىق-مەلۇمات سانى: 20640\nتازىلانغاندىن كېيىنكى: 20112\nچىقىرىۋېتىلگەن سانلىق-مەلۇمات: 528 تالۇق (2.6%)",
      "ئەمەلىيەت سانلىق-مەلۇماتى: 16089 تالۇق\nتەكشۈرۈش سانلىق-مەلۇماتى: 4023 تالۇق\nئالاھىدىلىك سانى: 8",
      "مودېل ئەمەلىيەت ئەڭگە يەتكەن!\nكېسىش نۇقتىسى (Intercept): 2.0631\n\nكەسگۈچ (Coefficients):\n  MedInc:   0.8259\n  HouseAge:   0.1125\n...",
      "==================================================\nمودېل ياخشىلىقى باھالاش\n==================================================\nئەمەلىيەت سانلىق-مەلۇماتى RMSE: 0.7056\nتەكشۈرۈش سانلىق-مەلۇماتى RMSE: 0.7112\nئەمەلىيەت سانلىق-مەلۇماتى R² نىتىجىسى: 0.6079\nتەكشۈرۈش سانلىق-مەلۇماتى R² نىتىجىسى: 0.6023"
    ];

    if (outputRef.current) {
      outputRef.current.innerHTML = `
        <div class="p-4 bg-gray-900 text-green-400 font-mono rounded-lg border-l-4 border-green-500 mt-4">
          <strong>قەدەم ${stepIndex + 1} نىڭ نەتىجىسى:</strong><br/>
          <pre class="whitespace-pre-wrap">${outputs[stepIndex]}</pre>
        </div>
      `;
      outputRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const c = content;

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8"
      style={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* باشلىق */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <FaRobot className="text-white text-4xl" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent mb-4">
              {c.mainTitle}
            </h1>
            <p className="text-lg text-gray-700 mb-6">{c.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python باشلانغۇچىلىرى</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">scikit-learn</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">ئەمەلىي پروگرامما</span>
            </div>
            <div className="text-gray-600">
              <FaCalendarAlt className="inline ml-1" /> {c.dateInfo}
            </div>
          </div>
        </motion.header>

        {/* مۇندەرىجە */}
        <nav className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 mb-12 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaBook className="text-blue-600" /> {c.tocTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <ul className="space-y-2">
              <li><a href="#intro" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition text-right"><FaPlay /> {c.toc1}</a></li>
              <li><a href="#target" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition text-right"><FaGraduationCap /> {c.toc2}</a></li>
              <li><a href="#ml-concepts" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition text-right"><FaBrain /> {c.toc3}</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#implementation" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition text-right"><FaFileCode /> {c.toc4}</a></li>
              <li><a href="#kaggle" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition text-right"><FaTrophy /> {c.toc5}</a></li>
              <li><a href="#conclusion" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition text-right"><FaFlagCheckered /> {c.toc6}</a></li>
            </ul>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <FaClock className="text-blue-600" /> {c.timeEstimate}
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            <div className="text-sm text-gray-600 mt-1">
              ئىلگىرىلىشى: {progress}%
            </div>
          </div>
        </nav>

        {/* مەزمۇن بۆلەكلەر */}
        <main className="space-y-12 mb-20">

          {/* باشلاش */}
          <section id="intro" className="scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3"><FaPlay /> {c.introTitle}</h2>
              <div className="bg-blue-50 p-4 rounded-xl mb-6">
                <h3 className="font-bold mb-2">{c.calendarTitle}</h3>
                <p>{c.introDesc}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-xl mb-6 border-l-4 border-yellow-500">
                <h4 className="font-bold mb-2 flex items-center gap-2"><FaLightbulb className="text-yellow-600" /> {c.tip1Title}</h4>
                <ul className="list-disc pr-5 space-y-1">
                  {c.tip1List.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl">
                <h3 className="font-bold mb-4">{c.roadmapTitle}</h3>
                {c.roadmapSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 mb-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">{i + 1}</div>
                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* نىشانلانغان كىشىلەر */}
          <section id="target" className="scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><FaGraduationCap /> {c.targetTitle}</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {c.targets.map((target, i) => (
                  <div key={i} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                    <div className="text-center mb-4">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        {target.icon}
                      </div>
                      <h3 className="font-bold text-lg">{target.title}</h3>
                    </div>
                    <p className="text-justify">{target.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                <h4 className="font-bold mb-2 flex items-center gap-2"><FaExclamationTriangle className="text-red-600" /> {c.prerequisiteTitle}</h4>
                <p>{c.prerequisiteDesc}</p>
              </div>
            </div>
          </section>

          {/* ماشىنا ئۆگىنىش ئاساسىي تۇشۇنچىلىرى */}
          <section id="ml-concepts" className="scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><FaBrain /> {c.conceptsTitle}</h2>
              <h3 className="text-xl font-semibold mb-6">{c.hierarchyTitle}</h3>
              <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-32 h-32 rounded-full flex items-center justify-center text-white font-bold">
                  AI<br /><small>{c.aiLabel}</small>
                </div>
                <span className="text-2xl">⊃</span>
                <div className="bg-gradient-to-r from-green-500 to-teal-600 w-32 h-32 rounded-full flex items-center justify-center text-white font-bold">
                  ML<br /><small>{c.mlLabel}</small>
                </div>
                <span className="text-2xl">⊃</span>
                <div className="bg-gradient-to-r from-yellow-500 to-orange-600 w-32 h-32 rounded-full flex items-center justify-center text-white font-bold">
                  DL<br /><small>{c.dlLabel}</small>
                </div>
              </div>
              <p className="text-center text-gray-700 mb-8">{c.hierarchyDesc}</p>

              <h3 className="text-xl font-semibold mb-4">{c.mlTypesTitle}</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {c.mlTypes.map((type, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-100 p-2 rounded-lg">{type.icon}</div>
                      <h4 className="font-bold text-blue-700">{type.title}</h4>
                    </div>
                    <p className="text-sm mb-2">{type.desc}</p>
                    <p className="text-sm text-gray-600">{type.examples}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">{c.regVsClassTitle}</h3>
              <table className="w-full border-collapse mb-6 bg-white rounded-lg overflow-hidden shadow-sm" dir="rtl">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-right">قاراش نۇقتىسى</th>
                    <th className="p-3 text-right">رېگرېسسىيە</th>
                    <th className="p-3 text-right">تۈرگە ئايرىش</th>
                  </tr>
                </thead>
                <tbody>
                  {c.comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 text-right font-medium">{row.col1}</td>
                      <td className="p-3 text-right">{row.col2}</td>
                      <td className="p-3 text-right">{row.col3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500">
                <h4 className="font-bold mb-2 flex items-center gap-2"><FaCheckCircle className="text-green-600" /> {c.focusTitle}</h4>
                <p>{c.focusDesc}</p>
              </div>
            </div>
          </section>

          {/* ماشىنا ئۆگىنىشنى ئەمەلىيلەشتۈرۈش */}
          <section id="implementation" className="scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><FaFileCode /> {c.implementationTitle}</h2>
              {c.steps.map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl mb-6 border-l-4 border-blue-500 shadow-sm">
                  <h3 className="font-bold text-lg mb-3">{idx + 1}. {step.title}</h3>
                  <p className="mb-4">{step.desc}</p>
                  <div className="bg-gray-900 rounded-lg overflow-hidden mb-4" dir="ltr">
                    <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-gray-300 text-sm">
                      <span>python</span>
                      <button
                        onClick={() => runCode(idx)}
                        className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded flex items-center gap-1"
                      >
                        <FaPlay size={12} /> ئىجرا قىلىش
                      </button>
                    </div>
                    <pre className="p-4 text-gray-200 text-sm overflow-x-auto">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
              <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500 mt-6">
                <h4 className="font-bold mb-2 flex items-center gap-2"><FaChartLine className="text-blue-600" /> {c.interpretationTitle}</h4>
                <p>{c.interpretationDesc}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500 mt-6">
                <h4 className="font-bold mb-2 flex items-center gap-2"><FaForward className="text-green-600" /> {c.nextStepsTitle}</h4>
                <ul className="list-disc pr-5 space-y-1">
                  {c.nextStepsList.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          </section>

          {/* Kaggle */}
          <section id="kaggle" className="scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><FaTrophy /> {c.kaggleTitle}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">{c.whatIsKaggleTitle}</h3>
                  <p className="mb-4">{c.kaggleDesc}</p>
                  <div className="space-y-4">
                    {c.kaggleStats.map((stat, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="bg-blue-100 p-2 rounded-lg">{stat.icon}</div>
                        <div>
                          <h4 className="font-semibold">{stat.title}</h4>
                          <p className="text-sm text-gray-600">{stat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">{c.recommendedTitle}</h3>
                  <div className="space-y-4">
                    {c.kaggleChallenges.map((ch, i) => (
                      <a
                        key={i}
                        href={ch.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-white rounded-lg border hover:border-blue-400 transition"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-blue-700">{ch.title}</h4>
                          <FaExternalLinkAlt className="text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{ch.desc}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <h3 className="font-bold text-lg mb-3">{c.gettingStartedTitle}</h3>
                <ol className="list-decimal pr-5 space-y-2">
                  {c.gettingStartedList.map((item, i) => <li key={i}>{item}</li>)}
                </ol>
                <a
                  href="https://www.kaggle.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90"
                >
                  <FaExternalLinkAlt /> Kaggle بىلەن باشلاش
                </a>
              </div>
            </div>
          </section>

          {/* ئاخىرقى سۆز */}
          <section id="conclusion" className="scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><FaFlagCheckered /> {c.conclusionTitle}</h2>
              <div className="text-center bg-green-50 p-8 rounded-xl mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheck className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{c.achievementTitle}</h3>
                <p className="text-lg mb-6">{c.achievementDesc}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {c.skills.map((skill, i) => (
                    <div key={i} className="p-4 bg-blue-50 rounded-lg">
                      <p>{skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">{c.nextChallengeTitle}</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {c.nextChallenges.map((ch, i) => (
                  <div key={i} className="p-6 bg-white rounded-xl border">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      {ch.icon} {ch.title}
                    </h4>
                    <p className="mb-3">{ch.desc}</p>
                    <a
                      href={ch.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm flex items-center gap-1"
                    >
                      <FaExternalLinkAlt size={12} /> سانلىق-مەلۇمات توپلىمى
                    </a>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-3">{c.finalMessageTitle}</h3>
                <p className="mb-4">{c.finalMessage}</p>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft className="opacity-50" />
                  <p className="text-sm opacity-90">{c.quote}</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* ئىجرا نەتىجىسى ئېكرانى */}
        <div ref={outputRef} className="mt-8"></div>

        {/* ئاستىدىكى خەت */}
        <footer className="py-8 text-center text-gray-600 border-t border-gray-200 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="text-sm">{c.copyright}</div>
            <div className="flex gap-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                <FaGithub />
              </a>
              <a href="https://colab.research.google.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                <FaGoogle />
              </a>
              <a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                <FaKaggle />
              </a>
            </div>
          </div>
          <div className="text-xs text-gray-400">{c.disclaimer}</div>
        </footer>
      </div>
    </div>
  );
};

export default Blog34;