import React from 'react';

const Blog39 = () => {
  // 13 بابنىڭ تولۇق تەسۋىرى
  const allChapters = [
    {
      id: 1,
      title: "ھېسابلاش (始計)",
      subtitle: "ئۇرۇشنى باشلاشتىن بۇرۇن شەرائىت ۋە ئىمكانىيەتنى تەكشۈرۈش",
      content: "سۇنزىنىڭ ئۇرۇشنى باشلاشتىن ئىلگىرى پەرەز قىلىدىغان بەش ئاساسىي ئامىل: تەنەت (مۇرەككەپ قانۇن)، تەنەپ (ئاسمان شارائىتى)، تەنجى (يەر شارائىتى)، جياڭ (سەركردىك كۈچى) ۋە فا (قانۇن-تۈزۈم). بۇلارنى تەكشۈرۈپ باھالىغاندىن كېيىنلا ئۇرۇش قىلىشقا قارار چىقىرىش كېرەك.",
      modernUse: "تىجارەت ستراتېگىيەسى تۈزگەندە، شىركەتلەر 5C تەھلىلى (مۇشەرى، رىقابەتچى، تەلەپچى، شېرىك، مۇھىت) ئىشلىتىدۇ. مەسىلەن، يېڭى بازارغا كىرگەندە، ئامازون ساتقۇچىلارنىڭ قابىلىيىتى، رىقابەتچىلەرنىڭ كۈچى، تەلەپچىلەرنىڭ ئېھتىياجى، تور ئىچىدە قوللىشىش ۋە قانۇنىي چەكلەشلەرنى تولۇق تەكشۈرىدۇ.",
      color: "#2c5282",
      icon: "📊"
    },
    {
      id: 2,
      title: "ئۇرۇش (作戰)",
      subtitle: "قىسقىچە ۋە تېز غەلبىلەن ئۇرۇشنى پۈتتۈرۈش",
      content: "ئۇرۇشنى قىسقا ۋاقىت ئىچىدە تاماملىشىش مۇھىم، چۈنكى ئۇزۇن ئۇرۇش دۆلەتنىڭ مالىيەسىنى تۈگىتىدۇ، خەلقنى چارچىتىدۇ. ئۇرۇش قىلىشتا ئات-ئارابا، قورال-ياراق، ئەسلىمە ۋە تەمىنات زەينى كۆپ بولۇشى كېرەك.",
      modernUse: "بۇ پرىنسىپ «تېز ئىجادىيەت» دېگەن تېخنىكا ساھەسىدە كەڭ قوللىنىلىدۇ. Airbnb قاتارلىق شىركەتلەر مەھسۇلاتنى تېز ۋاقىت ئىچىدە بازارغا سېلىپ، ئىشلەتكۈچىلەرنىڭ رەسمىي قاراشىنى تېپىپ، تېز تەرەققىي قىلىدۇ. ئۇلارنىڭ نەشىرى «fail fast, learn fast» (تېز مەغلۇپ بول، تېز ئۆگەن) دىگەن مەزمۇن.",
      color: "#3182ce",
      icon: "⚡"
    },
    {
      id: 3,
      title: "سۇنۇغ (謀攻)",
      subtitle: "قۇرەتنى يېڭىش، چېتىلنى يېڭىش",
      content: "ئەڭ ياخشى ئۇرۇش ئۇرۇشماسلىقتۇر. ئۇرۇشتىن ئەڭ ياخشىسى دۇشمىننىڭ قۇرەتلىرىنى پارچىلىماسلىقتۇر؛ ئاندىن دۇشمىننىڭ قوشۇنىنى پارچىلاش؛ ئەڭ يامانى دۇشمىننىڭ قەلئىسىنى قورشاش. دىپلوماتىيە ئۇرۇشتىن ئۈستۈندۇر.",
      modernUse: "بۇ پرىنسىپ كۆپىنچە دىپلوماتىيە ۋە سودا كېلىشىملىرىدە قوللىنىلىدۇ. Huawei شىركىتى ئامېرىكىلىق رىقابەتچىلىرى بىلەن تېخنىكا ھەمكارلىقى ۋە كېلىشىم ئىمزالىش ئارقىلىق «ئۇرۇش» قىلماستىن، ئۆز ستراتېگىيەلىك مەقسەتلىرىگە ئېرىشىدۇ. گۇگۇل ئىشلەتكۈچىلەرنىڭ چىدامچانلىقىنى قوشۇمچە قىممەت ئارقىلىق ساقلاش بۇنىڭ مىسالى.",
      color: "#38a169",
      icon: "🏰"
    },
    {
      id: 4,
      title: "شەكىل (形)",
      subtitle: "ئۆزىنى قوغلاش، مۇھىم ھۆكۈم قىلىش",
      content: "شەكىل دىگىنىمىز ئۆز كۈچىمىزنى ساقلاش، پۇرسەت كەلگەندە گۇپىدىن ھۇجۇم قىلىش. ئۆزىنى ئەڭ مۇستەھكەم قىلىش، دۇشمىننىڭ يېتىملىكىنى كۈتۈش، پۇرسەت كەلگەندە قارار چىقىرىش.",
      modernUse: "تېخنىكا شىركەتلىرى پاتېنت سۇپىسى قۇرۇش ئارقىلىق ئۆزىنى قوغلايدۇ. Apple ھەر يىلى نەچچە يۈز پاتېنت ئېلىپ، ئۆز تېخنىكىلىق ئورنىنى مۇستەھكەم قىلىدۇ. پۇرسەت كەلگەندە (مەسىلەن يېڭى تېخنىكا چىققاندا) ئۇلار بازارغا تېز كىرىپ، ئالدىنقى ئورۇندا تۇرىدۇ.",
      color: "#2d3748",
      icon: "🛡️"
    },
    {
      id: 5,
      title: "كۈچ (勢)",
      subtitle: "دۇشمىننى قوزغالۇشقا سېۋەبچى بولۇش",
      content: "كۈچ دىگىنىمىز بىر ۋاقىتتا كۈچنى مەركەزلەشتۈرۈپ، دۇشمىننىڭ كۈچىنى پارچىلايدىغان تەسىر كۈچى. بۇ تېغنىڭ يۇقىرى ئېگىزلىكىدىن يۇمغاققا ياغرىغان سۇنىڭ كۈچىگە ئوخشايدۇ.",
      modernUse: "بۇ پرىنسىپ ماركېتىڭ ۋە سودا ستراتېگىيەسىدە كۆرۈلىدۇ. Coca-Cola يېڭى مەھسۇلات چىقارغاندا، ئۇلار بارلىق ماركېتىڭ كۈچىنى بىر ۋاقىتتا بىر رايونغا مەركەزلەشتۈرۈپ، شۇ رايوننىڭ مۇشتىرىلىرىنى ئۆزىگە جەلب قىلىدۇ. ئاندىن ئۇنداقتا باشقا رايونلارغا تارقىتىدۇ.",
      color: "#d53f8c",
      icon: "💥"
    },
    {
      id: 6,
      title: "يېتىش (虛實)",
      subtitle: "دۇشمىننىڭ قېتىمنى سىناش، يېتىملىكنى ئىشلىتىش",
      content: "دۇشمىننىڭ كۈچلۈك تەرىپىنى ساقلاش، ئاجىز تەرىپىگە ھۇجۇم قىلىش. ئۆز كۈچىنى يوشۇرۇش، دۇشمىننى ئەستە قالدۇرۇش، ئاندىن گۇپىدىن ھۇجۇم قىلىش.",
      modernUse: "بۇ پرىنسىپ سىياسەت ۋە خەلقئارا مۇناسىۋەتلەردە كۆرۈلىدۇ. ئامېرىكا-چىن سودا كېلىشىمى مۇزاكىرىسىدە، ھەر ئىككى تەرەپ ئۆز كۈچلۈك تەرىپىنى ساقلاپ (چىن ئىشچى كۈچى، ئامېرىكا تېخنىكىسى)، دۇشمىننىڭ ئاجىز تەرىپىگە بېسىم قويۇپ كېلىشىم ئىمزالاشقا تىرىشىدۇ.",
      color: "#805ad5",
      icon: "🎭"
    },
    {
      id: 7,
      title: "ياڭغاق (軍爭)",
      subtitle: "قىسقىچە ۋە چابۇق ھەرىكەت قىلىش",
      content: "ياڭغاق دىگىنىمىز ئىككى قوشۇن ئوتتۇرىسىدىكى راستقا راست مۇسابىقە. بۇ يەردە مۇھىم بولغىنى تېزلىك ۋە ۋاقىت. دۇشمىندىن تېز بولۇش، مۇھىم ئورۇنلارنى دۇشمىندىن ئىلگىرى ئىگىلەش.",
      modernUse: "تېخنىكا ساھەسىدىكى «بىرىنچى بولۇش ئەۋزەللىكى» بۇ پرىنسىپنىڭ مىسالى. Netflix DVD تەۋسىيە ساھەسىدىن توردىكى سىنما ساھەسىگە تېز ئۆزگىرىپ، ئالدىنقى ئورۇندا بولۇش ئارقىلىق مۇۋەپپەقىيەت قازاندى. ئۇلار دۇشمىنلىرى (Blockbuster) دىن تېز ھەرىكەت قىلىپ، بازارنى ئىگىلىدى.",
      color: "#dd6b20",
      icon: "🏃"
    },
    {
      id: 8,
      title: "ئۆزگەرتىش (九變)",
      subtitle: "شەرائىتكە قاراپ ستراتېگىيە ئۆزگەرتىش",
      content: "سەركر كۆپ خىل شارائىتلاردا قانداق ھەرىكەت قىلىشى كېرەكلىكىنى بىلىشى لازىم. ھەر قانداق بىر ئەھۋالغا قاراپ ئۆز ستراتېگىيەسىنى تەڭشەش، مۇتلەق بىر ئۇسۇلدا چىڭ ئىشەنمەسلىك.",
      modernUse: "COVID-19 پاندېمىيەسى دەۋرىدە، كۆپ شىركەتلەر ئۆز سودا مودېلىنى تېز ئۆزگەرتتى. مەسىلەن، چىنلارنىڭ كوچا تائام رېستورانى McDonald's تېز ۋاقىت ئىچىدە تور تەۋسىيە سىستېمىسىنى قۇرۇپ، سودىسىنى داۋاملاشتۇردى. بۇ شارائىتقا قاراپ تېز ئۆزگىرىشنىڭ مىسالى.",
      color: "#38b2ac",
      icon: "🔄"
    },
    {
      id: 9,
      title: "ياولىنىش (行軍)",
      subtitle: "يەر شارائىتى ۋە ھەربىي ماشىقىنى باسقۇچلاش",
      content: "قوشۇننى يۆتكەش، كەمپ قۇرۇش، ھەربىي ماشىقا قىلىش ۋاقتىدا يەر شارائىتىغا دىققەت قىلىش. تاغلىق، سۇلۇق، ئوتلۇق، چۆللۈك ۋە تۆۋەن يەرلەردە قانداق ھەرىكەت قىلىش كېرەكلىكىنى بىلىش.",
      modernUse: "خەلقئارا شىركەتلەر يېڭى بازارغا كىرگەندە، يەرلىك مەدەنىيەت، قانۇن ۋە ئىقتىسادىي شارائىتنى چۈشىنىش كېرەك. IKEA چىن بازارىغا كىرگەندە، ئۆز مېبىل لايىھىسىنى چىن ئائىلە سىستېمىسىغا ماسلىشىشتۇردى (مەسىلەن، ياتاق ۋە ئاشخانا بۆلەكلىرىنى كېڭەيتتى).",
      color: "#319795",
      icon: "🗺️"
    },
    {
      id: 10,
      title: "ياق (地形)",
      subtitle: "يەر شارائىتىنى باھالاش",
      content: "يەر شارائىتى ئۇرۇشنىڭ مۇۋەپپەقىيىتىگە تەسىر كۆرسىتىدۇ. يەر شارائىتىنىڭ 6 خىلى بار: تونۇش (ئىككى تەرەپكە قاراشلىق)، سۆڭەك (كېرىش قىيىن)، ئۆلۈك (ئىككى تەرەپنىڭ چىقىش يولى يوق)، كەڭ (ئىككى تەرەپنىڭ كۈچى تەڭ)، تېگىش (چوڭراق)، ئۇزاق (ئارىلىقى يىراق).",
      modernUse: "تىجارەت ستراتېگىيەسى تۈزگەندە، بازاردىكى «يەر شارائىتى»نى تەكشۈرۈش مۇھىم. Uber ئامېرىكىدىكى يۇقىرى پايدىلىق بازارغا كىرگەندە، لېكىن جۇڭگودىكى كۈچلۈك رىقابەت (Didi) سەۋەبىدىن بازارنى تەرك ئېتىشكە مەجبۇر بولدى. بۇ «يەر شارائىتى» نى توغرا باھالىمىغانلىقىدىن.",
      color: "#68d391",
      icon: "🏞️"
    },
    {
      id: 11,
      title: "ئوتتۇز تۈرلۈك يەر (九地)",
      subtitle: "تۈرلۈك يەر شارائىتى بويىچە ھەرىكەت قىلىش",
      content: "يەر شارائىتىنىڭ 9 خىلى: پارچىلانغان يەر، ئوڭۇشلۇق يەر، تالاش-تارتىشلىق يەر، قوشۇلغان يەر، مۇھىم يەر، قاتناشقان يەر، قىيىن يەر، قورشالغان يەر، ئۆلۈم يەر. ھەر بىر خىل يەردە قانداق ھەرىكەت قىلىش كېرەكلىكىنى بىلىش.",
      modernUse: "سىياسەتچىلەر ۋە دىپلوماتلار خەلقئارا مۇناسىۋەتلەردە بۇ پرىنسىپنى قوللىنىدۇ. ئامېرىكا خەلقئارا مۇناسىۋەتلەردە، ھەر بىر دۆلەتنىڭ ئورنىغا قاراپ ئۆز سىياسىتىنى ئۆزگەرتەلەيدۇ (مەسىلەن، ئىتتىپاقداشلارغا يۇمشاق، رىقابەتچىلەرگە قاتتىق).",
      color: "#ed8936",
      icon: "🧩"
    },
    {
      id: 12,
      title: "ئوت (火攻)",
      subtitle: "ئوت بىلەن ھۇجۇم قىلىش تەكتىكى",
      content: "ئوت ھۇجۇمى 5 خىل بولىدۇ: ئادەمنى كۆيدۈرۈش، ئاشلىقنى كۆيدۈرۈش، ئارابىنى كۆيدۈرۈش، ئامبارنى كۆيدۈرۈش، ئوكيانى كۆيدۈرۈش. ئوت ھۇجۇمىنىڭ ۋاقتى، يېرى، ئامىللىرى توغرا بولۇشى كېرەك.",
      modernUse: "بۇ پرىنسىپ مۇناسىۋەتلىك ماركېتىڭدا كۆرۈلىدۇ. Coca-Cola يېڭى مەھسۇلات چىقارغاندا، ئۇلار «ئوت ھۇجۇمى» دېگەن ماركېتىڭ ئۇسۇلىنى قوللىنىدۇ: تور، تېلېۋىزىيە، كوچا، مەكتەپ قاتارلىق ھەر قايسى يوللار ئارقىلىق تارقىتىش، بازارنى قىزىتىش.",
      color: "#e53e3e",
      icon: "🔥"
    },
    {
      id: 13,
      title: "كەسپىي قوشۇن (用間)",
      subtitle: "مايداندىن ئىشلىتىش، مايدانچىلىق",
      content: "مايدانچىلىق 5 خىل بولىدۇ: يەرلىك مايدانچى، ئىچكى مايدانچى، ئەكس مايدانچى، ئۆلۈم مايدانچى، تىرىك مايدانچى. ھەممىسى ئىشلىتىلىشى كېرەك، ئەمما تىرىك مايدانچى ئەڭ مۇھىم، چۈنكى دۇشمىننىڭ ئىچىگە كىرىپ، ئەڭ ئەسلىي ئۇچۇرلارنى ئېلىپ چىقىدۇ.",
      modernUse: "ھازىرقى زامان «دىجىتال مايدانچىلىقى» — ئۇچۇر توپلاش ۋە تەھلىل. غەربىي شىركەتلەر جۇڭگو بازارىغا كىرگەندە، يەرلىك سوتسىيال مېدىيا، بازار تەتقىقاتى، مۇشتىرىلار بىلەن سۆھبەت قىلىش ئارقىلىق ئۇچۇر توپلايدۇ. بۇ سۇنزىنىڭ مايدانچىلىق پرىنسىپىنىڭ زامانىۋى ئىپادىسى.",
      color: "#4a5568",
      icon: "🕵️"
    }
  ];

  // سۇنزىنىڭ ئاساسلىق پرىنسىپلىرى
  const sunziPrinciples = [
    { title: "دىققەت", desc: "ھەر قانداق ھەرىكەتتىن ئىلگىرى ئۆز-ئۆزىگە ۋە دۇشمىنىڭىغا تولۇق چۈشىنىش" },
    { title: "ئىستراتېگىيە", desc: "كۈچ ئىشلىتىشتىن بۇرۇن ئەقىل-پاراسەت بىلەن پىلانلاش" },
    { title: "قىيالچانلىق", desc: "ئەھۋالغا قاراپ ئۆزگىرىشچان بولۇش ۋە دۇشمىننى ئالداش" },
    { title: "ۋاقىت", desc: "ئەڭ ياخشى ۋاقىتنى تاللاش ۋە دۇشمىننىڭ ضىپىنى ئىزدەش" },
    { title: "كۈچ", desc: "كۈچنى مۇھىم نۇقتىلاردا مەركەزلەشتۈرۈش ۋە تەسىرنى ئۇرۇشتۇرۇش" }
  ];

  // خەلقئارالىق تەسىر
  const globalInfluence = [
    "40+ تىلغا تەرجىمە قىلىنغان",
    "بۇتان ۋە جاپونىيە قاتارلىق دۆلەتلەردە ھەربىي مائارىپنىڭ مەجبۇرىي ماتېرىيالى",
    "ناتو ۋە ئامېرىكا ھەربىي ئاكادېمىيلىرىدا ئوقۇتۇلىدۇ",
    "تىجارەت باشلىقلىرى ۋە ئىدارەچىلەرنىڭ كەسپىي تەربىيە پروگراممىلىرىدا ئىشلىتىلىدۇ"
  ];

  return (
    <div
      dir="rtl"
      style={{
        fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
        backgroundColor: '#fefefe',
        color: '#1a202c',
        lineHeight: '1.8',
        padding: '3rem',
        maxWidth: '1200px',
        margin: '0 auto',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e2e8f0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* دېكوراتىپ ئارقا كۆرۈنۈش */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '6px',
        background: 'linear-gradient(90deg, #2c5282, #38a169, #d53f8c, #dd6b20)',
        zIndex: 1
      }} />
      
      {/* باشلىق بۆلەك */}
      <header style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'inline-block',
          padding: '0.5rem 1.5rem',
          backgroundColor: '#e6fffa',
          color: '#234e52',
          borderRadius: '50px',
          fontSize: '1rem',
          fontWeight: '600',
          marginBottom: '1rem',
          border: '1px solid #81e6d9'
        }}>
          قەدىمىي ھېكمەت، زامانىۋى قوللىنىش — 13 باب تولۇق تەسۋىرى
        </div>
        
        <h1
          style={{
            fontSize: '2.8rem',
            fontWeight: '800',
            margin: '1rem 0 1.5rem',
            color: '#1a365d',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            lineHeight: '1.3'
          }}
        >
          سۇنزىنىڭ ئۇرۇش سەنئىتى: قەدىمدىن بۇيان زامانىمىزغىچە
        </h1>
        
        <p
          style={{
            fontSize: '1.2rem',
            color: '#4a5568',
            marginBottom: '1.5rem',
            fontStyle: 'italic',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 1rem'
          }}
        >
          «ئۇرۇش قىلىشنى بىلمەيدىغان سەركرك ياخشى ئەمەس، ئۇرۇش قىلىشنى كېرەك قىلمايدىغان سەركرك چوقۇم ئەڭ ياخشى»
        </p>
      </header>

      {/* 13 بابنىڭ تولۇق تەسۋىرى */}
      <section style={{ marginBottom: '3rem', position: 'relative', zIndex: 2 }}>
        <h2 style={{
          fontSize: '2rem',
          color: '#2c5282',
          marginBottom: '2rem',
          textAlign: 'center',
          paddingBottom: '15px',
          borderBottom: '3px solid #e2e8f0'
        }}>
          <span style={{
            display: 'inline-block',
            marginLeft: '10px',
            padding: '5px 15px',
            backgroundColor: '#2c5282',
            color: 'white',
            borderRadius: '30px',
            fontSize: '1.2rem'
          }}>
            13
          </span>
          سۇنزىنىڭ ئۇرۇش سەنئىتى بابلىرى
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '1.8rem',
          marginBottom: '3rem'
        }}>
          {allChapters.map((chapter) => (
            <div key={chapter.id} style={{
              padding: '1.8rem',
              backgroundColor: 'white',
              borderRadius: '12px',
              border: `1px solid ${chapter.color}20`,
              borderRight: `5px solid ${chapter.color}`,
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.07)',
              transition: 'all 0.3s ease',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = `0 15px 25px ${chapter.color}30`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.07)';
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <div style={{
                  fontSize: '1.8rem',
                  marginLeft: '10px'
                }}>
                  {chapter.icon}
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    color: chapter.color,
                    marginBottom: '0.3rem'
                  }}>
                    {chapter.title}
                  </h3>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#718096',
                    fontWeight: '600'
                  }}>
                    {chapter.subtitle}
                  </div>
                </div>
              </div>
              
              <div style={{ marginBottom: '1.2rem', flexGrow: 1 }}>
                <p style={{ lineHeight: '1.7', color: '#4a5568', marginBottom: '1rem' }}>
                  <strong>ئەسلى مەنىسى:</strong> {chapter.content}
                </p>
              </div>
              
              <div style={{
                padding: '1rem',
                backgroundColor: `${chapter.color}10`,
                borderRadius: '8px',
                borderRight: `3px solid ${chapter.color}`
              }}>
                <p style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                  <strong>ھازىرقى زاماندىكى ئىشلىتىش:</strong>
                </p>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#4a5568' }}>
                  {chapter.modernUse}
                </p>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '1.2rem',
                paddingTop: '1rem',
                borderTop: '1px dashed #e2e8f0'
              }}>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#a0aec0',
                  fontWeight: '600'
                }}>
                  باب {chapter.id}
                </div>
                <div style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: chapter.color,
                  borderRadius: '50%'
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ئاساسىي پرىنسىپلار */}
      <section style={{ marginBottom: '3rem', position: 'relative', zIndex: 2 }}>
        <h2 style={{
          fontSize: '1.9rem',
          color: '#2c5282',
          marginBottom: '1.5rem',
          textAlign: 'center',
          paddingBottom: '10px',
          borderBottom: '2px solid #e2e8f0'
        }}>
          ئاساسىي پرىنسىپ ۋە فېلسەپە
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {sunziPrinciples.map((principle, index) => (
            <div key={index} style={{
              padding: '1.5rem',
              backgroundColor: index % 2 === 0 ? '#f0fff4' : '#ebf8ff',
              borderRadius: '10px',
              border: '1px solid #c6f6d5',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
            }}>
              <h3 style={{
                fontSize: '1.4rem',
                color: '#2d3748',
                marginBottom: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  backgroundColor: '#2c5282',
                  color: 'white',
                  borderRadius: '50%',
                  fontSize: '0.9rem'
                }}>
                  {index + 1}
                </span>
                {principle.title}
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.7' }}>
                {principle.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* خەلقئارالىق تەسىر */}
      <section style={{
        marginBottom: '3rem',
        padding: '2rem',
        backgroundColor: '#f8fafc',
        borderRadius: '12px',
        border: '1px solid #cbd5e0',
        position: 'relative',
        zIndex: 2
      }}>
        <h2 style={{
          fontSize: '1.9rem',
          color: '#2c5282',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '30px',
            backgroundColor: '#2c5282',
            borderRadius: '4px'
          }}></span>
          خەلقئارالىق تەسىرى
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.2rem',
          marginBottom: '2rem'
        }}>
          {globalInfluence.map((item, index) => (
            <div key={index} style={{
              padding: '1.2rem',
              backgroundColor: 'white',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'flex-start',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '24px',
                height: '24px',
                backgroundColor: '#2c5282',
                color: 'white',
                borderRadius: '50%',
                fontSize: '0.8rem',
                marginLeft: '10px',
                flexShrink: 0
              }}>
                {index + 1}
              </div>
              <div style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
                {item}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* تاۋە بولغان ساھەلەر */}
      <section style={{ marginBottom: '3rem', position: 'relative', zIndex: 2 }}>
        <h2 style={{
          fontSize: '1.9rem',
          color: '#2c5282',
          marginBottom: '1.5rem',
          paddingBottom: '10px',
          borderBottom: '2px solid #e2e8f0'
        }}>
          تاۋە بولغان ساھەلەر
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {[
            {
              title: "تىجارەت مۇسابىقىتى",
              desc: "ستراتېگىيە تۈزۈش، بازار كىرگۈچ، رىقابەتچى تەھلىلى، ماركا باشقۇرۇش",
              color: "#3182ce",
              examples: ["سودا ستراتېگىيەسى", "ماركېتىڭ پىلانى", "رىقابەتچى تەھلىلى"]
            },
            {
              title: "سۇپىسى باشقۇرۇش",
              desc: "كوللىقتىن پايدىلىنىش، تالانت باشقۇرۇش، كارخانا ئىچىدىكى مۇسابىقە ئىدارىسى",
              color: "#38a169",
              examples: ["تالانت جەلب قىلىش", "كوللىق باشقۇرۇش", "كارخانا مەدەنىيىتى"]
            },
            {
              title: "سىياسىي دىپلوماتىيە",
              desc: "بىرلەشىش، بېسىش، ئۆز-ئارا كاپالەتلىك مۇناسىۋەت، خەلقئارا مۇناسىۋەت",
              color: "#d53f8c",
              examples: ["دىپلوماتىيە مۇزاكىرىسى", "خەلقئارا مۇناسىۋەت", "سىياسىي بېسىم"]
            },
            {
              title: "شەخسىي تەرەققىيات",
              desc: "مۇسابىقە ئىچىدە مۇۋازىنىتى ساقلاش، دۇشمىنىڭ يېتىملىكىنى بايقولۇش، ئۆز-ئۆزىنى باشقۇرۇش",
              color: "#dd6b20",
              examples: ["كارىيەر ستراتېگىيەسى", "شەخسىي ماركا", "مۇسابىقە باشقۇرۇش"]
            }
          ].map((field, index) => (
            <div key={index} style={{
              padding: '1.5rem',
              backgroundColor: '#f7fafc',
              borderRadius: '10px',
              borderRight: `4px solid ${field.color}`,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                color: field.color,
                marginBottom: '0.8rem'
              }}>
                {field.title}
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.7', marginBottom: '1rem' }}>
                {field.desc}
              </p>
              <div>
                {field.examples.map((example, idx) => (
                  <span key={idx} style={{
                    display: 'inline-block',
                    padding: '0.3rem 0.7rem',
                    backgroundColor: `${field.color}15`,
                    color: field.color,
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    marginLeft: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* خۇلاسە */}
      <section style={{
        marginBottom: '3rem',
        padding: '2rem',
        backgroundColor: '#1a365d',
        color: 'white',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 2,
        boxShadow: '0 10px 20px rgba(26, 54, 93, 0.3)'
      }}>
        <h2 style={{
          fontSize: '1.9rem',
          marginBottom: '1.2rem',
          color: '#90cdf4'
        }}>
          بۇگۈنكى زاماندىكى ئەھمىيىتى
        </h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
          سۇنزىنىڭ ئۇرۇش سەنئىتى پەقەت بىر ھەربىي كىتاب ئەمەس، بەلكى ئىنسانىيەتنىڭ ئەقىل-پاراسەت، ستراتېگىيە ۋە قارار چىقىرىش توغرىسىدىكى ئومۇمىي پرىنسىپلىرىنى ئۆز ئىچىگە ئالغان. بۇ كىتابنىڭ 13 بابى ھەر بىر ئىنسان ھاياتىنىڭ مۇسابىقىسىگە ماس كېلىدىغان پرىنسىپلارنى تەمىنلەيدۇ.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          ھازىرقى زامان تېز ئۆزگىرىۋاتقان، كۈنسايىن كۈچىيىۋاتقان مۇسابىقە دەۋرىدە، سۇنزىنىڭ 2500 يىل ئىلگىرى بايان قىلغان پرىنسىپلىرى تېخىمۇ مۇھىم بولۇپ قالدى. تىجارەت، سىياسەت، تېخنىكا ۋە شەخسىي تەرەققىيات ساھەلىرىدە، <strong>"ئاقىل بىلەن يېڭىش"</strong> نىڭ ئەھمىيىتى كۈندە يېڭىدىن يېڭىغا چۈشۈك قەدەر ئارتىپ كەلمەكتە.
        </p>
        
        <div style={{
          marginTop: '1.5rem',
          padding: '1.2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          borderRight: '3px solid #90cdf4'
        }}>
          <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', margin: 0 }}>
            <strong>خۇلاسە:</strong> سۇنزىنىڭ ئۇرۇش سەنئىتى — زامانىمىزنىڭ ئەقىللىك يېتەكچىلىرى ئۈچۈن ھايات ۋە مۇسابىقىنى باشقۇرۇشنىڭ «ئىلمىي قۇرئان»ىدۇر.
          </p>
        </div>
      </section>

      {/* ئاخىرلاشتۇرۇش */}
      <footer
        style={{
          marginTop: '3rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid #e2e8f0',
          textAlign: 'center',
          fontSize: '0.95rem',
          color: '#718096',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div style={{ marginBottom: '1rem' }}>
          <p style={{ marginBottom: '0.5rem' }}>© 2025 — ئىلىم-پەن ۋە تەربىيە بلوگى | سۇنزىنىڭ ئۇرۇش سەنئىتى تولۇق تەسۋىرى</p>
          <p style={{ fontSize: '0.9rem', color: '#a0aec0' }}>
            بۇ ماقالىدە ئىشلىتىلگەن فونتلار: UKIJ Tuz, UKIJ Nasq, Microsoft Uighur
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Blog39;