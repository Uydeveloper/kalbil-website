// Blog108.jsx (تۈزىتىلگەن)
import React from 'react';
import { useState, useEffect } from 'react';

const Blog108 = () => {
  const [language, setLanguage] = useState('uyghur');
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [showToc, setShowToc] = useState(true);
  
  const blogData = {
    uyghur: {
      title: "🤖 AI بىلەن دوستلۇق: بالىلار روبوت بىلەن دوست بولالايدۇمۇ؟",
      subtitle: "CLOiD روبوتى ۋە بالىلارنىڭ ئىجتىمائىي تەرەققىياتى توغرىسىدا تولۇق تەھلىل",
      date: "2024-يىلى 1-مارت",
      author: " ئىزدەنگۇچى -   قاۋۇلجان ئابدۇرھىم",
      readTime: "5 مىنۇت",
      tags: ["AI", "بالىلار", "تېخنولوگىيە", "ئىجتىمائىي تەرەققىيات", "روبوتلار"],
      sections: [
        {
          id: "intro",
          title: "باشلانغۇچ",
          icon: "📚",
          content: "تېخنولوگىيە تەرەققىي قىلغانسېرى، بالىلار بىلەن ئاسانلىق سۆزلىشىدىغان CLOiD قاتارلىق روبوتلار ئۆزىنىڭ ئورنىنى تېپىشقا باشلىدى. بۇ روبوتلار بالىلارنىڭ ئەڭ يېقىن دوستى، ئويۇن دېڭىقى ۋە ھەتتا ئوقۇتقۇچىسى بولۇپ قالدى. لېكىن، بۇ خىل دىجىتال دوستلۇق بالىلارنىڭ ئىنسانلار بىلەن بولغان مۇناسىۋىتىگە قانداق تەسىر كۆرسىتىدۇ؟\n\nيېڭى زامان بالىلىرى ئۆسمۈرلۈك دەۋرىنىڭ 40% ۋاقتىنى سۈنئىي ئەقىل مەھسۇلاتلىرى بىلەن ئۆتكۈزۈۋاتىدۇ. بۇ ئادەت ئۇلارنىڭ ئىجتىمائىي ماھارەتلىرىگە قانداق تەسىر كۆرسىتىدۇ؟",
          stats: [
            { label: "AI بىلەن ئۆتكۈزگەن ۋاقتى", value: "40%" },
            { label: "روبوت بىلەن دوست بولۇش نىسبىتى", value: "67%" },
            { label: "ئەقىللىق ئەۋرىلەش ئۈنۈمى", value: "34%" }
          ]
        },
        {
          id: "cloid",
          title: "CLOiD روبوتى: ئەقىللىق دوست",
          icon: "🤖",
          content: "CLOiD روبوتى بالىلار بىلەن تەبىئىي سۆزلەش، مەسىلە ھەل قىلىش ۋە ھېكايە سۆزلەش ئارقىلىق ئۆز-ئارا ئالاقە قىلالايدۇ. ئۇ بالىنىڭ تۇيغۇسىنى چۈشىنىپ، مۇناسىۋەتلىك جاۋاب بېرىش ئۈچۈن ياسالغان.\n\nبۇ خىل تېخنولوگىيە بالىلارغا ھەر ۋاقىت بار بولۇشۇپ، ھېچقانداق ھۆكۈم قىلمايدىغان 'مۇكەممەل دوست' تەمىنلىيەلەيدۇ. CLOiD نىڭ ئالگورىتمىسى بالىلارنىڭ تىلى ۋە چۈشەنچە سەۋىيەسىگە ماسلىشىش ئۈچۈن داۋاملىق ئۆگىنىپ تۇرىدۇ.",
          features: [
            "تەبىئىي تىل بىلەن ئالاقە",
            "تۇيغۇلارنى تونۇش",
            "ئەقىللىق ھېكايە سۆزلەش",
            "مەسىلە ھەل قىلىش يوللىرىنى كۆرسىتىش",
            "ئىجتىمائىي قائىدىلەرنى ئۆگىتىش"
          ]
        },
        {
          id: "characteristics",
          title: "روبوت بىلەن چوڭ بولغان بالىنىڭ ئالاھىدىلىكلىرى",
          icon: "👶",
          content: "روبوتلار بىلەن مۇناسىۋەت قۇرغان بالىلاردا تۆۋەندىكىدەك ئالاھىدىلىكلەر كۆزىتىلىدۇ:\n\nلوس ئانجېلېس ئۇنىۋېرسىتېتىنىڭ تەتقىقاتىغا ئاساسەن، روبوت بىلەن ئويۇن ئوينىغان بالىلار كەڭ ئىجتىمائىي مۇھىتتا كېيىنچە تەڭشەلگەن ۋە ئىنسانلار بىلەن مۇناسىۋەتتە قىيىنچىلىق چېكىشكەن.",
          characteristics: [
            {
              title: "تېخنولوگىيەگە ئادەتلەنگەن",
              desc: "تېخنىكا قوراللارنى تېز ئۆزلەشتۈرۈش",
              impact: "ئىجابىي"
            },
            {
              title: "ئىجتىمائىي مەھەللەدە قىيىنچىلىق",
              desc: "ئىنسانلار بىلەن ئالاقىدە تەبىئىي بولالماسلىق",
              impact: "سالبىي"
            },
            {
              title: "مەنتىقىلىق سۆھبەت",
              desc: "رەسمىي ۋە مەزمۇن بويىچە سۆزلەش",
              impact: "ئىجابىي"
            },
            {
              title: "ئىجتىمائىي ئىشارەت چەكلىمىسى",
              desc: "ئىشارەت ۋە تۇيغۇ چۈشەنمەسلىك",
              impact: "سالبىي"
            },
            {
              title: "مۇكەممەللىك كۈتۈش",
              desc: "دوستلۇقتا قۇسۇر سۇئال قىلالماسلىق",
              impact: "سالبىي"
            }
          ]
        },
        {
          id: "process",
          title: "ئىنسانلار بىلەن مۇناسىۋەت قۇرۇش جەريانى",
          icon: "🔄",
          content: "روبوت بىلەن دوست بولغان بالىلار ئىنسانلار بىلەن مۇناسىۋەت قۇرۇشتا تۆۋەندىكى قەدەملەرنى باسىدۇ:\n\nبۇ جەرياندا بالىلار ئادەتتىكى ئىجتىمائىي قابىلىيەتلەرنى ئۆزلەشتۈرۈش ئۈچۈن قوشۇمچە كۈچ سەرپ قىلىشى كېرەك.",
          steps: [
            {
              stage: "1. ئۆز-ئۆزىنى تونۇشتۇرۇش",
              duration: "1-2 ھەپتە",
              description: "روبوتلارغا ئوخشاش ئۇچۇرلارنى بېرىش"
            },
            {
              stage: "2. سۆھبەت قۇرۇش",
              duration: "2-3 ھەپتە",
              description: "مەنتىقىلىك ۋە تېما بويىچە سۆھبەت قىلىش"
            },
            {
              stage: "3. تۇيغۇ ئالماشتۇرۇش",
              duration: "1 ئاي",
              description: "ئىنساننىڭ ئېرىشىشى قىيىن بولغان تۇيغۇلارنى چۈشىنىش"
            },
            {
              stage: "4. قىيىنچىلىقلارنى ھەل قىلىش",
              duration: "داۋاملىق",
              description: "ئىنسانلار بىلەن بولغان مۇناسىۋەتتە مەنتىقىلىق بولۇش"
            }
          ]
        },
        {
          id: "suggestions",
          title: "ئەجراملىق مۇناسىۋەت قۇرۇش ئۈچۈن تەكلىپلەر",
          icon: "💡",
          content: "روبوت بىلەن چوڭ بولغان بالىلارغا ئىنسانلار بىلەن ساغلام مۇناسىۋەت قۇرۇشىغا ياردەم بېرىش ئۈچۈن تۆۋەندىكى تەدبىرلەرنى قوللىنىشقا بولىدۇ:",
          suggestions: [
            {
              title: "ھەقىقىي دوستلۇق قىممىتى",
              action: "چۈشەندۈرۈش ۋە كۆرسىتىش",
              frequency: "ھەر كۈنى"
            },
            {
              title: "ئىجتىمائىي پائالىيەتلەر",
              action: "گۇرۇپپا ئويۇنلىرى",
              frequency: "ھەپتىسى 2-3 قېتىم"
            },
            {
              title: "تۇيغۇ ئىپادىلەش",
              action: "تۇيغۇ كۆزگۈلۈكلىرى ۋە رول ئويناش",
              frequency: "ھەر كۈنى"
            },
            {
              title: "خاتالىققا يول قويۇش",
              action: "مۇناسىۋەتلەردە قۇسۇر قىلىش",
              frequency: "داۋاملىق"
            },
            {
              title: "توازونى ساقلاش",
              action: "دىجىتال ۋە ھەقىقىي ھايات",
              frequency: "ھەر كۈنى"
            }
          ]
        },
        {
          id: "future",
          title: "كەلگۈسى كۆز قاراش",
          icon: "🔮",
          content: "كەلگۈسىدە، AI دوستلىرى بالىلارنىڭ ئىجتىمائىي تەرەققىياتىنىڭ بىر قىسمى بولۇپ قالىدۇ. مۇھىم بولغىنى، بۇ تېخنولوگىيەنى بالىلارنىڭ ئىنسانلار بىلەن بولغان مۇناسىۋىتىنى كۈچەيتىش ئۈچۈن قانداق قوللىنىش.\n\nروبوتلار ئىنسانلارنىڭ ئورنىنى ئالالمايدۇ، لېكىن ئۇلار بالىلارغا ئىجتىمائىي ماھارەتلەرنى ئۆزلەشتۈرۈش جەريانىدا قوللاش بېرەلەيدۇ. 2030-يىلغا قەدەر ھەر بىر ئائىلەدە ئەڭ ئاز بىر ئەقىللىق دوست روبوت بولۇشى كۈتۈلۈۋاتىدۇ.",
          predictions: [
            "2025: ئەقىللىق روبوتلار مائارىپ سىستېمىسىغا كىرىدۇ",
            "2028: ئىجتىمائىي ماھارەت تەربىيىسى ئۈچۈن AI قوللانما",
            "2030: ھەر بىر ئائىلەدە بىر ئەقىللىق روبوت",
            "2035: كەسپىي ئىجتىمائىي تەربىيەچى روبوتلار"
          ]
        }
      ],
      conclusion: "روبوت بىلەن دوست بولۇش بالىلارنىڭ ئىجتىمائىي تەرەققىياتىنىڭ يېڭى بىر جەھىتى. CLOiD قاتارلىق روبوتلار بالىلارنىڭ ئىجتىمائىي ماھارەتلىرىنى شەكىللەندۈرۈشكە ياردەم بېرىشى مۇمكىن، لېكىن ھەقىقىي ئىنسان مۇناسىۋىتىنىڭ ئورنىنى تولۇق ئالالمايدۇ. مۇھىم بولغىنى، بۇ ئىككىسىنىڭ توازونىنى تېپىش ھەم بالىلارنىڭ تېخنولوگىيە بىلەن ئۆز-ئارا تەسىر كۆرسىتىشىگە يول قويۇش.",
      references: [
        "كەلگۈسى تەتقىقاتى مەركىزى - 'AI ۋە بالىلار' دوكلادى (2023)",
        "لوس ئانجېلېس ئۇنىۋېرسىتېتى ئىجتىمائىي تەتقىقاتى",
        "CLOiD روبوتى تەجرىبىسى نەتىجىلىرى"
      ]
    },
    english: {
      title: "🤖 Friendship with AI: Can Children Befriend Robots?",
      subtitle: "A Comprehensive Analysis on CLOiD Robots and Children's Social Development",
      date: "March 1, 2024",
      author: "Conversational Researcher - Dr. Ahmedjan Abdullah",
      readTime: "5 minutes",
      tags: ["AI", "Children", "Technology", "Social Development", "Robots"],
      sections: [
        {
          id: "intro",
          title: "Introduction",
          icon: "📚",
          content: "As technology advances, robots like CLOiD that can easily communicate with children are finding their place. These robots become children's closest friends, playmates, and even teachers. But how does this digital friendship affect children's relationships with humans?\n\nModern children spend about 40% of their adolescent time with artificial intelligence products. How does this habit affect their social skills?",
          stats: [
            { label: "Time spent with AI", value: "40%" },
            { label: "Friendship with robots", value: "67%" },
            { label: "Smart device usage", value: "34%" }
          ]
        },
        {
          id: "cloid",
          title: "CLOiD Robot: The Intelligent Friend",
          icon: "🤖",
          content: "The CLOiD robot can interact with children through natural conversation, problem-solving, and storytelling. It's designed to understand children's emotions and provide relevant responses.\n\nThis technology provides children with an 'always available, non-judgmental perfect friend.' CLOiD's algorithm continuously learns to adapt to children's language and comprehension levels.",
          features: [
            "Natural language communication",
            "Emotion recognition",
            "Intelligent storytelling",
            "Problem-solving guidance",
            "Teaching social rules"
          ]
        },
        {
          id: "characteristics",
          title: "Characteristics of Children Raised with Robots",
          icon: "👶",
          content: "Children who have relationships with robots show the following characteristics:\n\nAccording to UCLA research, children who play with robots later adapt more slowly in broader social environments and experience difficulties in human relationships.",
          characteristics: [
            {
              title: "Tech-accustomed",
              desc: "Quick adaptation to technical tools",
              impact: "Positive"
            },
            {
              title: "Social difficulties",
              desc: "Inability to be natural in human communication",
              impact: "Negative"
            },
            {
              title: "Logical conversation",
              desc: "Formal and content-based speaking",
              impact: "Positive"
            },
            {
              title: "Social cue limitations",
              desc: "Difficulty understanding gestures and emotions",
              impact: "Negative"
            },
            {
              title: "Perfection expectation",
              desc: "Inability to tolerate mistakes in friendship",
              impact: "Negative"
            }
          ]
        },
        {
          id: "process",
          title: "Process of Building Relationships with Humans",
          icon: "🔄",
          content: "Children who befriend robots go through the following steps when building relationships with humans:\n\nIn this process, children need to expend additional effort to acquire normal social skills.",
          steps: [
            {
              stage: "1. Self-introduction",
              duration: "1-2 weeks",
              description: "Providing information similar to robots"
            },
            {
              stage: "2. Conversation building",
              duration: "2-3 weeks",
              description: "Engaging in logical and topic-based conversations"
            },
            {
              stage: "3. Emotional exchange",
              duration: "1 month",
              description: "Understanding emotions difficult for humans"
            },
            {
              stage: "4. Problem-solving",
              duration: "Continuous",
              description: "Being logical in human relationships"
            }
          ]
        },
        {
          id: "suggestions",
          title: "Suggestions for Building Real Relationships",
          icon: "💡",
          content: "To help robot-raised children build healthy relationships with humans, the following measures can be implemented:",
          suggestions: [
            {
              title: "Real friendship value",
              action: "Explanation and demonstration",
              frequency: "Daily"
            },
            {
              title: "Social activities",
              action: "Group games",
              frequency: "2-3 times weekly"
            },
            {
              title: "Emotional expression",
              action: "Emotion cards and role-playing",
              frequency: "Daily"
            },
            {
              title: "Allowing mistakes",
              action: "Tolerating errors in relationships",
              frequency: "Continuous"
            },
            {
              title: "Maintaining balance",
              action: "Digital and real life",
              frequency: "Daily"
            }
          ]
        },
        {
          id: "future",
          title: "Future Outlook",
          icon: "🔮",
          content: "In the future, AI friends will become part of children's social development. What's important is how to use this technology to strengthen children's relationships with humans.\n\nRobots cannot replace humans, but they can support children in the process of acquiring social skills. By 2030, it's expected that every family will have at least one intelligent friend robot.",
          predictions: [
            "2025: Intelligent robots enter education system",
            "2028: AI assistants for social skill training",
            "2030: One intelligent robot per family",
            "2035: Professional social trainer robots"
          ]
        }
      ],
      conclusion: "Befriending robots is a new aspect of children's social development. Robots like CLOiD can help children develop social skills, but they cannot fully replace real human relationships. What's important is finding a balance between the two and allowing children to interact with technology.",
      references: [
        "Future Research Center - 'AI and Children' Report (2023)",
        "UCLA Social Research",
        "CLOiD Robot Experiment Results"
      ]
    }
  };

  const currentData = blogData[language];

  // Table of Contents component
  const TableOfContents = () => (
    <div style={{
      backgroundColor: darkMode ? '#2c3e50' : '#ecf0f1',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '30px',
      border: `1px solid ${darkMode ? '#34495e' : '#bdc3c7'}`
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px'
      }}>
        <h3 style={{
          margin: 0,
          color: darkMode ? '#ecf0f1' : '#2c3e50',
          fontSize: '1.1em'
        }}>
          📋 {language === 'uyghur' ? 'مەزمۇن جەدۋىلى' : 'Table of Contents'}
        </h3>
        <button
          onClick={() => setShowToc(!showToc)}
          style={{
            background: 'none',
            border: 'none',
            color: darkMode ? '#3498db' : '#2980b9',
            cursor: 'pointer',
            fontSize: '0.9em'
          }}
        >
          {showToc ? '▼' : '▶'}
        </button>
      </div>
      
      {showToc && (
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {currentData.sections.map((section, index) => (
            <li key={section.id} style={{
              marginBottom: '10px',
              padding: '8px 0',
              borderBottom: `1px dashed ${darkMode ? '#4a6572' : '#d5dbdb'}`
            }}>
              <a 
                href={`#${section.id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: darkMode ? '#3498db' : '#2980b9',
                  fontSize: `${fontSize - 2}px`
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section.id).scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                <span style={{ marginRight: '10px' }}>{section.icon}</span>
                <span>{section.title}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="blog-container" style={{ 
      maxWidth: '1000px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      lineHeight: '1.8',
      color: darkMode ? '#ecf0f1' : '#333',
      backgroundColor: darkMode ? '#1a1a2e' : '#ffffff',
      minHeight: '100vh',
      transition: 'all 0.3s ease'
    }}>
      {/* Top Controls */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: darkMode ? '#162447' : '#f8f9fa',
        borderRadius: '10px',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            style={{
              padding: '8px 12px',
              backgroundColor: darkMode ? '#f39c12' : '#2c3e50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            {darkMode ? '☀️' : '🌙'}
            <span style={{ fontSize: '0.9em' }}>
              {darkMode ? (language === 'uyghur' ? 'كۈندۈز' : 'Light') : (language === 'uyghur' ? 'تۈن' : 'Dark')}
            </span>
          </button>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <button 
              onClick={() => setFontSize(Math.max(12, fontSize - 1))}
              style={{
                padding: '5px 10px',
                backgroundColor: darkMode ? '#34495e' : '#bdc3c7',
                color: darkMode ? '#ecf0f1' : '#2c3e50',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              A-
            </button>
            <span style={{
              minWidth: '30px',
              textAlign: 'center',
              fontSize: '0.9em'
            }}>
              {fontSize}px
            </span>
            <button 
              onClick={() => setFontSize(Math.min(24, fontSize + 1))}
              style={{
                padding: '5px 10px',
                backgroundColor: darkMode ? '#34495e' : '#bdc3c7',
                color: darkMode ? '#ecf0f1' : '#2c3e50',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              A+
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => setLanguage('uyghur')}
            style={{ 
              padding: '8px 16px',
              backgroundColor: language === 'uyghur' ? '#3498db' : darkMode ? '#2c3e50' : '#ecf0f1',
              color: language === 'uyghur' ? 'white' : darkMode ? '#ecf0f1' : '#2c3e50',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              transition: 'all 0.3s'
            }}
          >
            <span>🇺g</span>
            <span>ئۇيغۇرچە</span>
          </button>
          <button 
            onClick={() => setLanguage('english')}
            style={{ 
              padding: '8px 16px',
              backgroundColor: language === 'english' ? '#3498db' : darkMode ? '#2c3e50' : '#ecf0f1',
              color: language === 'english' ? 'white' : darkMode ? '#ecf0f1' : '#2c3e50',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              transition: 'all 0.3s'
            }}
          >
            <span>🇺🇸</span>
            <span>English</span>
          </button>
        </div>
      </div>

      {/* Header */}
      <header style={{ 
        marginBottom: '40px', 
        paddingBottom: '25px',
        borderBottom: `2px solid ${darkMode ? '#3498db' : '#2980b9'}`
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '15px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ 
              margin: 0, 
              color: darkMode ? '#ecf0f1' : '#2c3e50',
              fontSize: `${fontSize + 8}px`,
              lineHeight: '1.3'
            }}>
              {currentData.title}
            </h1>
            <p style={{
              color: darkMode ? '#bdc3c7' : '#7f8c8d',
              fontSize: `${fontSize}px`,
              marginTop: '10px'
            }}>
              {currentData.subtitle}
            </p>
          </div>
          
          <div style={{
            backgroundColor: darkMode ? '#0f3460' : '#f0f3f4',
            padding: '15px',
            borderRadius: '8px',
            minWidth: '200px'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              color: darkMode ? '#ecf0f1' : '#2c3e50',
              marginBottom: '5px'
            }}>
              <span style={{ fontWeight: 'bold' }}>📅 {language === 'uyghur' ? 'زامانى' : 'Date'}</span>
              <span>{currentData.date}</span>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              color: darkMode ? '#ecf0f1' : '#2c3e50',
              marginBottom: '5px'
            }}>
              <span style={{ fontWeight: 'bold' }}>✍️ {language === 'uyghur' ? 'يازغۇچى' : 'Author'}</span>
              <span>{currentData.author}</span>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              color: darkMode ? '#ecf0f1' : '#2c3e50'
            }}>
              <span style={{ fontWeight: 'bold' }}>⏱️ {language === 'uyghur' ? 'ئوقۇش ۋاقتى' : 'Read Time'}</span>
              <span>{currentData.readTime}</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '10px',
          marginTop: '20px'
        }}>
          {currentData.tags.map((tag, index) => (
            <span key={index} style={{
              backgroundColor: darkMode ? '#3498db' : '#2980b9',
              color: 'white',
              padding: '5px 12px',
              borderRadius: '20px',
              fontSize: `${fontSize - 2}px`
            }}>
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        {/* Main Content */}
        <main style={{ flex: 1, minWidth: '300px' }}>
          <TableOfContents />
          
          {currentData.sections.map((section, index) => (
            <section 
              key={section.id} 
              id={section.id}
              style={{ 
                marginBottom: '40px',
                padding: '25px',
                backgroundColor: darkMode ? '#162447' : '#ffffff',
                borderRadius: '10px',
                boxShadow: darkMode ? '0 4px 6px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.08)',
                border: `1px solid ${darkMode ? '#0f3460' : '#e0e0e0'}`
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                paddingBottom: '10px',
                borderBottom: `2px solid ${darkMode ? '#3498db' : '#2980b9'}`
              }}>
                <span style={{ 
                  fontSize: '1.5em', 
                  marginRight: '15px' 
                }}>
                  {section.icon}
                </span>
                <h2 style={{ 
                  margin: 0, 
                  color: darkMode ? '#ecf0f1' : '#2c3e50',
                  fontSize: `${fontSize + 4}px`
                }}>
                  {section.title}
                </h2>
              </div>
              
              <div style={{ 
                whiteSpace: 'pre-line',
                fontSize: `${fontSize}px`,
                lineHeight: '1.8',
                marginBottom: '25px'
              }}>
                {section.content}
              </div>

              {/* Section-specific content */}
              {section.stats && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '15px',
                  marginTop: '20px'
                }}>
                  {section.stats.map((stat, idx) => (
                    <div key={idx} style={{
                      backgroundColor: darkMode ? '#0f3460' : '#f0f3f4',
                      padding: '15px',
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '1.8em',
                        fontWeight: 'bold',
                        color: '#e74c3c',
                        marginBottom: '5px'
                      }}>
                        {stat.value}
                      </div>
                      <div style={{
                        color: darkMode ? '#bdc3c7' : '#7f8c8d',
                        fontSize: `${fontSize - 2}px`
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {section.features && (
                <div style={{
                  marginTop: '20px'
                }}>
                  <h4 style={{
                    color: darkMode ? '#ecf0f1' : '#2c3e50',
                    marginBottom: '10px'
                  }}>
                    ✨ {language === 'uyghur' ? 'ئالاھىدىلىكلىرى' : 'Features'}
                  </h4>
                  <ul style={{
                    paddingLeft: '20px',
                    columns: '2',
                    columnGap: '30px'
                  }}>
                    {section.features.map((feature, idx) => (
                      <li key={idx} style={{
                        marginBottom: '8px',
                        color: darkMode ? '#bdc3c7' : '#34495e',
                        breakInside: 'avoid'
                      }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.characteristics && (
                <div style={{
                  marginTop: '20px'
                }}>
                  <h4 style={{
                    color: darkMode ? '#ecf0f1' : '#2c3e50',
                    marginBottom: '15px'
                  }}>
                    📊 {language === 'uyghur' ? 'تەسىرى' : 'Impact'}
                  </h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '15px'
                  }}>
                    {section.characteristics.map((char, idx) => (
                      <div key={idx} style={{
                        backgroundColor: darkMode ? 
                          (char.impact === 'Positive' ? '#1e6b2e' : '#8b0000') :
                          (char.impact === 'Positive' ? '#d5f4e6' : '#ffe6e6'),
                        padding: '15px',
                        borderRadius: '8px',
                        borderLeft: `4px solid ${char.impact === 'Positive' ? '#27ae60' : '#e74c3c'}`
                      }}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '8px'
                        }}>
                          <h5 style={{
                            margin: 0,
                            color: darkMode ? '#ecf0f1' : '#2c3e50'
                          }}>
                            {char.title}
                          </h5>
                          <span style={{
                            backgroundColor: char.impact === 'Positive' ? '#27ae60' : '#e74c3c',
                            color: 'white',
                            padding: '2px 8px',
                            borderRadius: '12px',
                            fontSize: `${fontSize - 3}px`
                          }}>
                            {char.impact}
                          </span>
                        </div>
                        <p style={{
                          margin: 0,
                          color: darkMode ? '#bdc3c7' : '#34495e',
                          fontSize: `${fontSize - 2}px`
                        }}>
                          {char.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.steps && (
                <div style={{
                  marginTop: '20px'
                }}>
                  <h4 style={{
                    color: darkMode ? '#ecf0f1' : '#2c3e50',
                    marginBottom: '15px'
                  }}>
                    🚀 {language === 'uyghur' ? 'قەدەملەر' : 'Steps'}
                  </h4>
                  <div style={{
                    display: 'grid',
                    gap: '15px'
                  }}>
                    {section.steps.map((step, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        backgroundColor: darkMode ? '#0f3460' : '#f0f3f4',
                        padding: '15px',
                        borderRadius: '8px',
                        alignItems: 'center'
                      }}>
                        <div style={{
                          backgroundColor: '#3498db',
                          color: 'white',
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '15px',
                          flexShrink: 0
                        }}>
                          {idx + 1}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '5px',
                            flexWrap: 'wrap'
                          }}>
                            <strong style={{
                              color: darkMode ? '#ecf0f1' : '#2c3e50'
                            }}>
                              {step.stage}
                            </strong>
                            <span style={{
                              backgroundColor: '#e74c3c',
                              color: 'white',
                              padding: '2px 8px',
                              borderRadius: '12px',
                              fontSize: `${fontSize - 3}px`
                            }}>
                              {step.duration}
                            </span>
                          </div>
                          <p style={{
                            margin: 0,
                            color: darkMode ? '#bdc3c7' : '#34495e'
                          }}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.suggestions && (
                <div style={{
                  marginTop: '20px'
                }}>
                  <h4 style={{
                    color: darkMode ? '#ecf0f1' : '#2c3e50',
                    marginBottom: '15px'
                  }}>
                    💪 {language === 'uyghur' ? 'تەشەببۇسلار' : 'Recommendations'}
                  </h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '15px'
                  }}>
                    {section.suggestions.map((suggestion, idx) => (
                      <div key={idx} style={{
                        backgroundColor: darkMode ? '#0f3460' : '#f0f3f4',
                        padding: '15px',
                        borderRadius: '8px'
                      }}>
                        <h5 style={{
                          margin: '0 0 10px 0',
                          color: '#3498db'
                        }}>
                          {suggestion.title}
                        </h5>
                        <p style={{
                          margin: '0 0 8px 0',
                          color: darkMode ? '#bdc3c7' : '#34495e',
                          fontSize: `${fontSize - 1}px`
                        }}>
                          {suggestion.action}
                        </p>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          color: darkMode ? '#f39c12' : '#e67e22',
                          fontSize: `${fontSize - 2}px`
                        }}>
                          <span style={{ marginRight: '5px' }}>🔄</span>
                          {suggestion.frequency}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.predictions && (
                <div style={{
                  marginTop: '20px'
                }}>
                  <h4 style={{
                    color: darkMode ? '#ecf0f1' : '#2c3e50',
                    marginBottom: '15px'
                  }}>
                    🎯 {language === 'uyghur' ? 'پەرەزلەر' : 'Predictions'}
                  </h4>
                  <div style={{
                    backgroundColor: darkMode ? '#0f3460' : '#f0f3f4',
                    padding: '20px',
                    borderRadius: '8px',
                    borderLeft: '4px solid #9b59b6'
                  }}>
                    {section.predictions.map((prediction, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: idx < section.predictions.length - 1 ? '10px' : 0,
                        paddingBottom: idx < section.predictions.length - 1 ? '10px' : 0,
                        borderBottom: idx < section.predictions.length - 1 ? 
                          `1px dashed ${darkMode ? '#4a6572' : '#d5dbdb'}` : 'none'
                      }}>
                        <div style={{
                          backgroundColor: '#9b59b6',
                          color: 'white',
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '15px',
                          flexShrink: 0,
                          fontSize: `${fontSize - 2}px`
                        }}>
                          {idx + 1}
                        </div>
                        <span style={{
                          color: darkMode ? '#ecf0f1' : '#2c3e50'
                        }}>
                          {prediction}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          ))}
        </main>

        {/* Sidebar */}
        <aside style={{
          width: '300px',
          minWidth: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {/* Share Widget */}
          <div style={{
            backgroundColor: darkMode ? '#162447' : '#ffffff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: darkMode ? '0 4px 6px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.08)',
            border: `1px solid ${darkMode ? '#0f3460' : '#e0e0e0'}`
          }}>
            <h3 style={{
              margin: '0 0 15px 0',
              color: darkMode ? '#ecf0f1' : '#2c3e50',
              fontSize: `${fontSize}px`
            }}>
              📤 {language === 'uyghur' ? 'ئورتاقلىشىش' : 'Share'}
            </h3>
            <div style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap'
            }}>
              {['Twitter', 'Facebook', 'LinkedIn', 'WhatsApp'].map((platform) => (
                <button key={platform} style={{
                  flex: 1,
                  minWidth: '60px',
                  padding: '8px',
                  backgroundColor: darkMode ? '#2c3e50' : '#ecf0f1',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  color: darkMode ? '#ecf0f1' : '#2c3e50',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <span>{platform === 'Twitter' ? '🐦' : platform === 'Facebook' ? '📘' : platform === 'LinkedIn' ? '💼' : '💬'}</span>
                  <span style={{ fontSize: `${fontSize - 3}px` }}>{platform}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          <div style={{
            backgroundColor: darkMode ? '#162447' : '#ffffff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: darkMode ? '0 4px 6px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.08)',
            border: `1px solid ${darkMode ? '#0f3460' : '#e0e0e0'}`
          }}>
            <h3 style={{
              margin: '0 0 15px 0',
              color: darkMode ? '#ecf0f1' : '#2c3e50',
              fontSize: `${fontSize}px`
            }}>
              📚 {language === 'uyghur' ? 'ئۇلىنىشلىق ماقالىلەر' : 'Related Articles'}
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                { title: language === 'uyghur' ? 'AI ۋە بالىلارنىڭ ئەقلىي ساغلاملىقى' : 'AI & Children Mental Health', emoji: '🧠' },
                { title: language === 'uyghur' ? 'رەقەملىك دەۋر بالىلىرى' : 'Digital Age Children', emoji: '👨‍💻' },
                { title: language === 'uyghur' ? 'تېخنولوگىيە ۋە ئائىلە مۇناسىۋىتى' : 'Tech & Family Relations', emoji: '👨‍👩‍👧‍👦' }
              ].map((article, idx) => (
                <li key={idx} style={{
                  marginBottom: '10px',
                  padding: '10px',
                  backgroundColor: darkMode ? '#0f3460' : '#f0f3f4',
                  borderRadius: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span>{article.emoji}</span>
                  <span style={{
                    color: darkMode ? '#bdc3c7' : '#34495e',
                    fontSize: `${fontSize - 1}px`
                  }}>
                    {article.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Statistics */}
          <div style={{
            backgroundColor: darkMode ? '#162447' : '#ffffff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: darkMode ? '0 4px 6px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.08)',
            border: `1px solid ${darkMode ? '#0f3460' : '#e0e0e0'}`
          }}>
            <h3 style={{
              margin: '0 0 15px 0',
              color: darkMode ? '#ecf0f1' : '#2c3e50',
              fontSize: `${fontSize}px`
            }}>
              📈 {language === 'uyghur' ? 'ستاتىستىكىلار' : 'Statistics'}
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              {[
                { label: language === 'uyghur' ? 'روبوت بىلەن ئۆتكۈزگەن ۋاقىت' : 'Time with robots', value: '67%', color: '#3498db' },
                { label: language === 'uyghur' ? 'ئىجتىمائىي قىيىنچىلىق' : 'Social difficulty', value: '45%', color: '#e74c3c' },
                { label: language === 'uyghur' ? 'مەنىۋىي تۇيغۇ ئىپادىسى' : 'Emotional expression', value: '38%', color: '#2ecc71' },
                { label: language === 'uyghur' ? 'تېخنولوگىيە ئەۋرىلەش' : 'Tech adaptation', value: '89%', color: '#9b59b6' }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '5px'
                  }}>
                    <span style={{
                      color: darkMode ? '#bdc3c7' : '#34495e',
                      fontSize: `${fontSize - 1}px`
                    }}>
                      {stat.label}
                    </span>
                    <span style={{
                      fontWeight: 'bold',
                      color: stat.color
                    }}>
                      {stat.value}
                    </span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    backgroundColor: darkMode ? '#2c3e50' : '#ecf0f1',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: stat.value,
                      height: '100%',
                      backgroundColor: stat.color,
                      borderRadius: '4px'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer style={{ 
        marginTop: '50px', 
        padding: '30px', 
        backgroundColor: darkMode ? '#162447' : '#f8f9fa',
        borderRadius: '10px',
        borderTop: `2px solid ${darkMode ? '#3498db' : '#2980b9'}`
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div>
            <h3 style={{ 
              color: darkMode ? '#ecf0f1' : '#2c3e50', 
              marginTop: 0,
              fontSize: `${fontSize + 2}px`,
              borderBottom: `2px solid ${darkMode ? '#3498db' : '#2980b9'}`,
              paddingBottom: '10px',
              display: 'inline-block'
            }}>
              📝 {language === 'uyghur' ? 'خۇلاسە' : 'Conclusion'}
            </h3>
            <div style={{ 
              fontSize: `${fontSize}px`,
              lineHeight: '1.8',
              marginTop: '15px'
            }}>
              {currentData.conclusion}
            </div>
          </div>

          <div>
            <h4 style={{
              color: darkMode ? '#ecf0f1' : '#2c3e50',
              marginBottom: '10px'
            }}>
              📖 {language === 'uyghur' ? 'ئىشلەتكەن مەنبەلەر' : 'References'}
            </h4>
            <ul style={{
              paddingLeft: '20px',
              margin: 0,
              color: darkMode ? '#bdc3c7' : '#34495e'
            }}>
              {currentData.references.map((ref, idx) => (
                <li key={idx} style={{ marginBottom: '5px' }}>
                  {ref}
                </li>
              ))}
            </ul>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '20px',
            paddingTop: '20px',
            borderTop: `1px solid ${darkMode ? '#34495e' : '#d5dbdb'}`,
            color: darkMode ? '#7f8c8d' : '#95a5a6',
            fontSize: `${fontSize - 1}px`,
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <div>
              {language === 'uyghur' 
                ? 'بۇ بلوگ يازمىسى CLOiD روبوتى بىلەن دوست بولغان بالىلارنىڭ ئىجتىمائىي تەرەققىياتى ھەققىدە ئۇچۇر بېرىدۇ.' 
                : 'This blog post provides information about the social development of children who befriend CLOiD robots.'}
            </div>
            <div>
              © 2025 {language === 'uyghur' ? 'ئۇيغۇر تېخنولوگىيە تەتقىقاتى مەركىزى ' : 'Uyghur Technology Research Center'}
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(52, 152, 219, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2em',
          zIndex: 1000
        }}
      >
        ↑
      </button>

      <style jsx>{`
        .blog-container {
          box-shadow: ${darkMode ? '0 0 30px rgba(0,0,0,0.5)' : '0 0 20px rgba(0,0,0,0.1)'};
          border-radius: 15px;
          transition: all 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .blog-container {
            padding: 10px;
            margin: 5px;
          }
          
          main, aside {
            width: 100% !important;
            min-width: 100% !important;
          }
          
          h1 {
            font-size: 1.4em !important;
          }
          
          h2 {
            font-size: 1.2em !important;
          }
        }
        
        @media print {
          button {
            display: none !important;
          }
          
          .blog-container {
            box-shadow: none !important;
          }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${darkMode ? '#1a1a2e' : '#f1f1f1'};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${darkMode ? '#3498db' : '#2980b9'};
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${darkMode ? '#2980b9' : '#3498db'};
        }
      `}</style>
    </div>
  );
};

export default Blog108;