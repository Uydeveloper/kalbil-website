// src/components/learn-modules/AstronomyModule.jsx
import React, { useState } from 'react';

const AstronomyModule = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [completedTopics, setCompletedTopics] = useState([]);

  const topics = [
    {
      id: 'quantum-physics',
      title: 'كىۋانىت فىزىكىسى',
      description: 'كىۋانىت فىزىكىسى — ماددا ۋە نۇرنىڭ مىكرو دۇنيادىكى خاراكتېرىنى ئىزدىنىدىغان فىزىكا ساھەسى',
      icon: '🔬',
      fullContent: {
        introduction: `
          كىۋانىت فىزىكىسى - 20-ئەسىردە ئوتتۇرىغا چىققان فىزىكا نەزەرىيەسى بولۇپ، ماددا ۋە ئېنېرگىيەنىڭ ئاتوم ۋە ئاتوم ئاستى سەۋىيەسىدىكى خاراكتېرىنى تەسۋىرلەيدۇ.
        `,
        mainContent: [
          {
            title: 'كىۋانىت فىزىكىسىنىڭ تارىخى',
            content: `
              • 1900-يىلى ماكس پىلانك تەرىپىدىن كىۋانىت نەزەرىيەسىنىڭ ئاساسى قويۇلغان
              • 1905-يىلى ئەينىشتېين فوتوئېففېكتنى چۈشەندۈرگەن
              • 1920-يىللاردا كىۋانىت مىخانىكىسىنىڭ تەرەققىي قىلىشى
              • ھازىرقى زامان كىۋانىت تېخنىكىلىرىنىڭ رىۋاجلانشى
            `,
            diagram: `
              [تارىخىي تەرەققىيات دىئاگراممىسى]
              1900 ──┐
                    ├─ پىلانك كىۋانىت نەزەرىيەسى
              1905 ──┼─ ئەينىشتېين فوتوئېففېكت
              1920 ──┼─ شۈرۆدىڭگېر تەڭلىمىسى
              2020 ──┘─ كىۋانىت كومپيۇتېر
            `
          },
          {
            title: 'ئاساسىي ئۇقۇملار',
            content: `
              **1. قوش يېرىق تەجىربىسى (Double Slit Experiment)**
              
              بۇ تەجىربە كىۋانىت فىزىكىسىنىڭ ئەڭ مۇھىم تەجىربىلىرىنىڭ بىرى:
              
              • ئېلېكترونلار بىر ۋاقىتتا بىر نەچچە يول بىلەن يۆتكىلىدۇ
              • كۆزىتىش ھەرىكىتى نەتىجىسىنى ئۆزگەرتەلەيدۇ
              • دەلىلەيدۇكى، ماددا بىر ۋاقىتتا دولقۇن ۋە بөلەكچە خاراكتېرگە ئىگە
              
              [قوش يېرىق تەجىربە رەسىمى]
              │     │    → ئېلېكترون مەنبەسى
              │     │    ↓
              ┌┐   ┌┐   → قوش يېرىق
              ││   ││    ↓
              ███████ → ئېكران
            `,
            image: '🔬'
          },
          {
            title: 'ئالاھىدە ھالەت (Superposition)',
            content: `
              **ئالاھىدە ھالەت - بىر كىۋانىت سىستېمىسى بىر ۋاقىتتا بىر نەچچە ھالەتتە بولالايدۇ**
              
              مىسال: كىۋانىت بىت (Qubit)
              • كلاسسىك بىت: 0 ياكى 1
              • كىۋانىت بىت: 0 ۋە 1 نىڭ ئالاھىدە ھالىتى
              
              [ئالاھىدە ھالەت دىئاگراممىسى]
                 │
                 ● 0 ھالىتى
                ╱ ╲
               ╱   ╲
              ●─────● 1 ھالىتى
              ئالاھىدە ھالەت
            `,
            formula: '|ψ⟩ = α|0⟩ + β|1⟩'
          },
          {
            title: 'كىۋانىت چىقرمىشش (Quantum Entanglement)',
            content: `
              **كىۋانىت چىقرمىشش - ئىككى بөلەكچە ئارىسىدىكى ئالاھىدە مۇناسىۋەت**
              
              خاسلىقلىرى:
              • بىر بөلەكچىنىڭ ھالىتى ئىككىنچىسىگە بىۋاسىتە تەسىر كۆرسىتىدۇ
              • ئارىلىق قەتئىي رول ئوينىمايدۇ
              • ئەينىشتېين بۇنى "ئۇزۇن مۇساپىلىىق غەريب ھەرىكەت" دەپ ئاتىغان
              
              [چىقرمىشش رەسىمى]
              ● ←→ ●
              A     B
              ئەگەر A ئۆلچەنگەن ھالەت ↓
              ● ←─┼─→ ●
              A     B
              B ئاپتوماتىك ھالدا ↓
            `
          }
        ],
        keyConcepts: [
          {
            term: 'قوش يېرىق تەجىربىسى',
            definition: 'بىر بөلەكچىنىڭ بىر ۋاقىتتا بىر نەچچە يول بىلەن يۆتكىلىشىنى كۆرسىتىدىغان تەجىربە'
          },
          {
            term: 'ئالاھىدە ھالەت',
            definition: 'بىر كىۋانىت سىستېمىسىنىڭ بىر ۋاقىتتا بىر نەچچە ھالەتتە بولۇش ئەھۋالى'
          },
          {
            term: 'كىۋانىت چىقرمىشش',
            definition: 'ئىككى بөلەكچە ئارىسىدىكى، ئۇلارنىڭ ئارىلىقىدىن قەتئىينەزەر باغلىنىشىپ قالغان مۇناسىۋەت'
          },
          {
            term: 'كىۋانىت تونۇللاش',
            definition: 'كىۋانىت سىستېمىسىنىڭ ئالاھىدە ھالىتىدىن كلاسسىك ھالەتكە ئۆتۈشى'
          },
          {
            term: 'كىۋانىت سەكرەش',
            definition: 'كىۋانىت سىستېمىسىنىڭ ئېنېرگىيە سەۋىيەلىرى ئارىسىدىكى ئۆتۈشى'
          }
        ],
        applications: `
          كىۋانىت فىزىكىسىنىڭ ئەمەلىي قوللىنىش ساھەلىرى:
          
          🔹 كىۋانىت كومپيۇتېرلار
          🔹 كىۋانىت مەخپىلەشتۇرش
          🔹 كىۋانىت سىمۇلياتسىيە
          🔹 كىۋانىت سېنسورلار
          🔹 كىۋانىت ئىنتېرنېت
        `
      }
    },
    {
      id: 'quantum-mechanics',
      title: 'كىۋانىت مىخانىكىسى',
      description: 'كىۋانىت مىخانىكىسى — ئاتوم ۋە ئاتوم ئاستى بөلەكچىلىرىنىڭ ھەرىكىتىنى تەسۋىرلەيدۇ',
      icon: '⚛️',
      fullContent: {
        introduction: `
          كىۋانىت مىخانىكىسى - ماددا ۋە ئېنېرگىيەنىڭ ئاتوم ۋە ئاتوم ئاستى سەۋىيەسىدىكى ھەرىكىت قانۇنلىرىنى ئىزدىنىدىغان فىزىكا ساھەسى.
        `,
        mainContent: [
          {
            title: 'شۈرۆدىڭگېر تەڭلىمىسى',
            content: `
              **شۈرۆدىڭگېر تەڭلىمىسى - كىۋانىت مىخانىكىسىنىڭ ئاساسىي تەڭلىمىسى**
              
              تەڭلىمە:
              iℏ ∂ψ/∂t = Ĥψ
              
              مەنىسى:
              • i: خىيال بىرلىك
              • ℏ: ئازۇرلۇقشۇناس تۇراقلىقى
              • ψ: دۆلەت فۇنكسىيەسى
              • Ĥ: خامىلتون ئوپېراتورى
              
              [تەڭلىمە چۈشەندۈرۈشى]
              │
              ├─ سول تەرەپ: سىستېمىنىڭ ۋاقىت بويىچە ئۆزگىرىشى
              └─ ئوڭ تەرەپ: سىستېمىنىڭ ئېنېرگىيە ئوپېراتورى
            `,
            formula: 'iℏ ∂/∂t |ψ⟩ = Ĥ |ψ⟩'
          },
          {
            title: 'بېلگىسىزلىك پرىنسىپى',
            content: `
              **ھەيسىنبېرگ بېلگىسىزلىك پرىنسىپى**
              
              بۇ پرىنسىپ بويىچە، بىر بөلەكچىنىڭ ئورۇنى ۋە مومېنتۇمىنى بىر ۋاقىتتا ئېنىق ئۆلچەش مۇمكىن ئەمەس:
              
              Δx · Δp ≥ ℏ/2
              
              مەنىسى:
              • Δx: ئورۇن بېلگىسىزلىكى
              • Δp: مومېنتۇم بېلگىسىزلىكى
              • ℏ: ئازۇرلۇقشۇناس تۇراقلىقى
              
              [بېلگىسىزلىك چۈشەندۈرۈشى]
              ئەگەر ئورۇننى ئېنىق بىلسەك ↘
              مومېنتۇمنى ئېنىق بىلەلمەيمىز ↗
              ئەكسىچە:
              مومېنتۇمنى ئېنىق بىلسەك ↘  
              ئورۇننى ئېنىق بىلەلمەيمىز ↗
            `,
            formula: 'Δx · Δp ≥ ℏ/2'
          },
          {
            title: 'ئاتوم مودېلى',
            content: `
              **بور ئاتوم مودېلى**
              
              ئاتوم قۇرۇلمىسى:
              • ئاتوم نۇۋىسى: مەركىزدە
              • ئېلېكترونلار: ئوربىتالدا
              • ئېنېرگىيە سەۋىيەلىرى: بەلگىلەنگەن
              
              [ئاتوم رەسىمى]
                  ╭┄┄╮
                 ┊    ┊
                ┊  ●  ┊ ← ئاتوم نۇۋىسى
                 ┊    ┊
                  ╰┄┄╯
                 ↻    ↺   ← ئېلېكترونلار
              ئوربىتال
            `,
            diagram: `
              ئاتوم قاتلاملىرى:
              K قاتلىمى (n=1) ── 2 ئېلېكترون
              L قاتلىمى (n=2) ── 8 ئېلېكترون  
              M قاتلىمى (n=3) ── 18 ئېلېكترون
              N قاتلىمى (n=4) ── 32 ئېلېكترون
            `
          }
        ],
        keyConcepts: [
          {
            term: 'شۈرۆدىڭگېر تەڭلىمىسى',
            definition: 'كىۋانىت سىستېمىسىنىڭ ۋاقىت بويىچە ئۆزگىرىشىنى تەسۋىرلەيدىغان ئاساسىي تەڭلىمە'
          },
          {
            term: 'بېلگىسىزلىك پرىنسىپى',
            definition: 'بىر بөلەكچىنىڭ ئورۇن ۋە مومېنتۇمىنى بىر ۋاقىتتا ئېنىق ئۆلچەش مۇمكىن ئەمەسلىكى پرىنسىپى'
          },
          {
            term: 'دۆلەت فۇنكسىيەسى',
            definition: 'كىۋانىت سىستېمىسىنىڭ ھالىتىنى تەسۋىرلەيدىغان مەخسۇس فۇنكسىيە'
          },
          {
            term: 'ئېنېرگىيە سەۋىيەلىرى',
            definition: 'كىۋانىت سىستېمىسىدا رۇخسەت قىلىنغان ئېنېرگىيە قىممەتلىرى'
          },
          {
            term: 'كىۋانىت سەكرەش',
            definition: 'كىۋانىت سىستېمىسىنىڭ بىر ئېنېرگىيە سەۋىيەسىدىن يەنە بىرىگە ئۆtۈشى'
          }
        ],
        applications: `
          كىۋانىت مىخانىكىسىنىڭ ئەمەلىي قوللىنىشى:
          
          ⚛️ لازېر تېخنىكىسى
          ⚛ى يېرىم ئۆتكۈزگۈچ تېخنىكىسى
          ⚛ى ئاتوم سائەتلىرى
          ⚛ى MRI ئاپپاراتلىرى
          ⚛ى نۇر ئېنېرگىيەسى
        `
      }
    },
    {
      id: 'quantum-technology',
      title: 'كىۋانىت تېخنىكىسى',
      description: 'كىۋانىت تېخنىكىسى — كىۋانىت پرىنسىپلىرىغا ئاساسلانغان يېڭى تېخنىكىلار',
      icon: '💻',
      fullContent: {
        introduction: `
          كىۋانىت تېخنىكىسى - كىۋانىت فىزىكىسى ۋە كىۋانىت مىخانىكىسى پرىنسىپلىرىغا ئاساسلانغان يېڭى تېخنىكىلار ۋە ئەسۋابلار.
        `,
        mainContent: [
          {
            title: 'كىۋانىت كومپيۇتېر',
            content: `
              **كىۋانىت كومپيۇتېر - كىۋانىت بىتلار (Qubits) ئارقىلىق ھېسابلاش ئېلىپ بارىدىغان كومپيۇتېر**
              
              پەرقلىرى:
              • كلاسسىك كومپيۇتېر: بىتلار (0 ياكى 1)
              • كىۋانىت كومپيۇتېر: كىۋانىت بىتلار (0 ۋە 1 نىڭ ئالاھىدە ھالىتى)
              
              [كىۋانىت كومپيۇتېر قۇرۇلمىسى]
              ┌─────────────────┐
              │ كىۋانىت پروتسېسور │
              │    [Qubit阵列]   │
              └─────────────────┘
                      ↓
              ┌─────────────────┐
              │  سۇپېر ئىنقىلاب   │
              │   (مەشغۇلاتلار)  │
              └─────────────────┘
            `,
            advantages: `
              ئۈستۈنلۈكلىرى:
              • سۇپېر كۈچلۈك ھېسابلاش
              • مۇرەككەپ مەسىلىلەرنى ھەل قىلىش
              • يېڭى دورىلارنى تەتقىق قىلىش
              • سۈنئىي ئەقىل تەرەققىياتى
            `
          },
          {
            title: 'كىۋانىت مەخپىلەشتۇرش',
            content: `
              **كىۋانىت مەخپىلەشتۇرش - كىۋانىت پرىنسىپلىرىغا ئاساسلانغان بىخەتەرلىك تېخنىكىسى**
              
              تۈرلىرى:
              • كىۋانىت كۇنۇپكا تارقىتىش (QKD)
              • كىۋانىت رەقەملىك ئىمزا
              • كىۋانىت تەكشۈرۈش
              
              [كىۋانىت كۇنۇپكا تارقىتىش]
              ئەلىسە ←──┐
                        ├─ كىۋانىت تور
              باب ←────┘
              
              ئالاھىدىلىكى:
              • ھەر قانداق تەلەپسىز كۆزىتىش ئانىق بايقالىدۇ
              • شىفىرلاش ئۈچۈن كىۋانىت چىقرمىشش بۆلەكچىلىرى ئىشلىتىلىدۇ
            `
          },
          {
            title: 'كىۋانىت سېنسورلار',
            content: `
              **كىۋانىت سېنسورلار - كىۋانىت پرىنسىپلىرى ئارقىلىق يۇقىرى ھەسساسلىقتا ئۆلچەش ئېلىپ بارىدىغان سېنسورلار**
              
              قوللىنىش ساھەلىرى:
              • گراۋىتاتسىيە ئۆلچەش
              • ماغنىتىس مەيداننى ئۆلچەش
              • ۋاقىت ئۆلچەش
              • تېمپېراتۇرا ئۆلچەش
              
              [كىۋانىت سېنسور ئىشلىتىش]
              تەسىر ←─ كىۋانىت سىستېما ←─ ئۆلچەش نەتىجىسى
                      ↓
                 چىقىرىش سىگنالى
            `,
            precision: `
              ئۆلچەش ئانىقلىقى:
              • كىۋانىت سائەت: 10¹⁸ دىن بىر ئانىقلىق
              • كىۋانىت گراۋىتاتسىيە سېنسورى: مىكرو گراۋىتاتسىيە ئۆزگىرىشلەرنى بايقاش
            `
          }
        ],
        keyConcepts: [
          {
            term: 'كىۋانىت كومپيۇتېر',
            definition: 'كىۋانىت بىتلار ئارقىلىق ھېسابلاش ئېلىپ بارىدىغان يېڭى ئەۋلاد كومپيۇتېر'
          },
          {
            term: 'كىۋانىت بىت (Qubit)',
            definition: 'كىۋانىت كومپيۇتېرنىڭ ئاساسىي ھېسابلاش بىرلىكى، 0 ۋە 1 نىڭ ئالاھىدە ھالىتى'
          },
          {
            term: 'كىۋانىت مەخپىلەشتۇرش',
            definition: 'كىۋانىت پرىنسىپلىرىغا ئاساسلانغان بىخەتەرلىك تېخنىكىسى'
          },
          {
            term: 'كىۋانىت سېنسور',
            definition: 'كىۋانىت پرىنسىپلىرى ئارقىلىق يۇقىرى ھەسساسلىقتا ئۆلچەش ئېلىپ بارىدىغان ئۈسكۈنە'
          },
          {
            term: 'كىۋانىت سىمۇلياتسىيە',
            definition: 'كىۋانىت سىستېمىلارنى كومپيۇتېر ئارقىلىق سىمۇلياتسىيە قىلىش'
          }
        ],
        applications: `
          كىۋانىت تېخنىكىسىنىڭ كەلگۈسىدىكى ئىمكانىيەتلىرى:
          
          💻 سۇپېر كىۋانىت كومپيۇتېرلار
          💻 كىۋانىت ئىنتېرنېت
          💻 كىۋانىت سانلىق مەلۇمات بىرلىكى
          💻 كىۋانىت سۈنئىي ئەقىل
          💻 كىۋانىت دورىلار
        `
      }
    }
  ];

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(topicId);
  };

  const handleTopicComplete = (topicId) => {
    if (!completedTopics.includes(topicId)) {
      setCompletedTopics([...completedTopics, topicId]);
    }
    setSelectedTopic(null);
  };

  const handleEditTopic = (topicId) => {
    console.log('تەپ ئىدىت قىلىنىۋاتىدۇ:', topicId);
  };

  const handleDeleteTopic = (topicId) => {
    console.log('تەپ يۇيۇلۇۋاتىدۇ:', topicId);
  };

  const getCompletionPercentage = () => {
    return Math.round((completedTopics.length / topics.length) * 100);
  };

  const renderContentWithDiagrams = (content) => {
    return content.split('\n').map((line, index) => {
      if (line.includes('[') && line.includes(']')) {
        const diagramContent = line.match(/\[(.*?)\]/)[1];
        return (
          <div key={index} className="bg-yellow-50 border border-yellow-200 p-3 rounded my-2 font-mono text-sm">
            {diagramContent}
          </div>
        );
      }
      return <div key={index}>{line}</div>;
    });
  };

  return (
    <div className="space-y-6">
      {/* ئىلگىرىلەش يەكۈنلەش */}
      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold text-gray-800">ئىلگىرىلەش ھالىتى</h3>
          <span className="text-indigo-600 font-bold">{getCompletionPercentage()}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-indigo-600 to-purple-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${getCompletionPercentage()}%` }}
          ></div>
        </div>
      </div>

      {/* ئاساسىي كىۋانىت تەپلىرى */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-xl border border-indigo-200">
        <h3 className="text-2xl font-bold text-indigo-800">كىۋانىت — يېڭى فىزىكا دۇنياسى</h3>
        <p className="text-gray-700 mt-2">
          كىۋانىت فىزىكىسى، كىۋانىت مىخانىكىسى ۋە كىۋانىت تېخنىكىسى ھەققىدە ئىلىم.
        </p>
        
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div 
              key={topic.id}
              className={`bg-white p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                selectedTopic === topic.id ? 'border-indigo-500 ring-2 ring-indigo-200' : 
                completedTopics.includes(topic.id) ? 'border-green-500' : 'border-gray-200'
              }`}
              onClick={() => handleTopicSelect(topic.id)}
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">{topic.icon}</span>
                <div>
                  <h4 className="font-bold text-gray-800">{topic.title}</h4>
                  {completedTopics.includes(topic.id) && (
                    <span className="text-green-500 text-sm">✓ تاماملاندى</span>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{topic.description}</p>
              
              <div className="space-y-1">
                {topic.fullContent.keyConcepts.slice(0, 3).map((concept, index) => (
                  <div key={index} className="flex items-center text-xs text-gray-500">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                    {concept.term}
                  </div>
                ))}
                {topic.fullContent.keyConcepts.length > 3 && (
                  <div className="text-xs text-indigo-600">
                    + {topic.fullContent.keyConcepts.length - 3} تېخىمۇ كۆپ...
                  </div>
                )}
              </div>

              {/* بوتانلار گۇرۇپپىسى */}
              <div className="flex justify-between mt-3 pt-3 border-t border-gray-100">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditTopic(topic.id);
                  }}
                  className="text-xs text-blue-600 hover:text-blue-800 px-2 py-1 rounded hover:bg-blue-50"
                >
                  ئىدىت
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteTopic(topic.id);
                  }}
                  className="text-xs text-red-600 hover:text-red-800 px-2 py-1 rounded hover:bg-red-50"
                >
                  يۇيۇش
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* تاللانغان تەپنىڭ تولۇق مەزمۇنى */}
      {selectedTopic && (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          {topics.filter(topic => topic.id === selectedTopic).map(topic => (
            <div key={topic.id}>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{topic.icon}</span>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">{topic.title}</h4>
                    <p className="text-gray-600">{topic.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedTopic(null)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>
              </div>
              
              {/* كىرىش سۆز */}
              <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
                <h5 className="font-bold text-blue-800 mb-2">كىرىش سۆز</h5>
                <p className="text-blue-700 whitespace-pre-line">
                  {topic.fullContent.introduction}
                </p>
              </div>

              {/* ئاساسىي مەزمۇنلار */}
              <div className="space-y-8">
                {topic.fullContent.mainContent.map((section, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <h5 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h5>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* مەتنىي مەزمۇن */}
                      <div className="space-y-4">
                        <div className="text-gray-700 leading-relaxed">
                          {renderContentWithDiagrams(section.content)}
                        </div>
                        
                        {/* فورمۇلا */}
                        {section.formula && (
                          <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-center text-lg">
                            {section.formula}
                          </div>
                        )}
                        
                        {/* ئۈستۈنلۈكلەر */}
                        {section.advantages && (
                          <div className="bg-green-50 p-3 rounded border border-green-200">
                            <div className="text-gray-700 whitespace-pre-line text-sm">
                              {section.advantages}
                            </div>
                          </div>
                        )}
                        
                        {/* ئانىقلىق */}
                        {section.precision && (
                          <div className="bg-purple-50 p-3 rounded border border-purple-200">
                            <div className="text-gray-700 whitespace-pre-line text-sm">
                              {section.precision}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* دىئاگرامما ۋە رەسىملەر */}
                      <div className="space-y-4">
                        {section.diagram && (
                          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
                            <div className="font-mono text-sm whitespace-pre leading-relaxed">
                              {section.diagram}
                            </div>
                          </div>
                        )}
                        
                        {section.image && (
                          <div className="text-6xl text-center bg-gray-100 p-8 rounded-lg">
                            {section.image}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ئاچقۇچلۇق سۆزلەر */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
                  <h5 className="font-bold text-indigo-800 mb-4">ئاچقۇچلۇق سۆزلەر (15%)</h5>
                  <div className="space-y-3">
                    {topic.fullContent.keyConcepts.map((concept, index) => (
                      <div key={index} className="bg-white p-3 rounded border border-indigo-200">
                        <div className="font-bold text-indigo-700 text-sm">{concept.term}</div>
                        <div className="text-gray-600 text-xs mt-1">{concept.definition}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ئىشلىتىش ساھەلىرى */}
                <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
                  <h5 className="font-bold text-purple-800 mb-4">ئىشلىتىش ساھەلىرى (5%)</h5>
                  <div className="text-purple-700 whitespace-pre-line leading-relaxed">
                    {topic.fullContent.applications}
                  </div>
                </div>
              </div>

              {/* ھەرىكەت بوتانلىرى */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button 
                  onClick={() => setSelectedTopic(null)}
                  className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  ئارقا
                </button>
                <div className="space-x-3">
                  <button 
                    onClick={() => handleEditTopic(topic.id)}
                    className="px-6 py-2 text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50"
                  >
                    تەپنى ئىدىت قىلىش
                  </button>
                  <button 
                    onClick={() => handleTopicComplete(topic.id)}
                    className="px-8 py-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg hover:from-green-700 hover:to-emerald-600 shadow-md transition-all"
                  >
                    تاماملاش
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* تېست باشلاش بوتانى */}
      <div className="text-center">
        <button className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-lg hover:from-indigo-700 hover:to-purple-600 shadow-md transition-all">
          كىۋانىت تېستىنى باشلاش
        </button>
        <p className="text-gray-500 text-sm mt-2">8 سۇئال • 10 دەقىقە</p>
      </div>

      {/* يېڭى تەپ قوشۇش بوتانى */}
      <div className="text-center pt-4 border-t border-gray-200">
        <button className="px-6 py-2.5 bg-gradient-to-r from-gray-600 to-gray-500 text-white rounded-lg hover:from-gray-700 hover:to-gray-600 shadow-md transition-all">
          + يېڭى تەپ قوشۇش
        </button>
      </div>
    </div>
  );
};

export default AstronomyModule;