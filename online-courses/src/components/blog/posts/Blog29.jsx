import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, Clock, Heart, Users, GraduationCap, 
  Target, Briefcase, Wrench, Balance, Globe,
  Share2, ArrowUp, CheckCircle, BookOpen,
  FileText, Star, Award, Zap, Lightbulb,
  TrendingUp, Cpu, Robot, Code, Shield,
  Smartphone, Home, Wifi, Battery, Scale
} from 'lucide-react';

const Blog29 = () => {
  const [checkedItems, setCheckedItems] = useState([false, false, false, false, false, false]);
  const [visibleSections, setVisibleSections] = useState([]);
  const [stats, setStats] = useState({ stat1: 0, stat2: 0, stat3: 0 });
  const sectionRefs = useRef([]);

  // ئىستىل (Styles)
  const styles = {
    container: {
      direction: 'rtl',
      fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: '#f8fafc',
      padding: '0 1rem',
      textAlign: 'right',
    },
    header: {
      textAlign: 'center',
      padding: '4rem 1rem',
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
      borderRadius: '0 0 2rem 2rem',
      marginBottom: '3rem',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
    },
    title: {
      fontSize: '3.5rem',
      background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1.5rem',
      fontWeight: 'bold',
      textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
      letterSpacing: '1px',
    },
    subtitle: {
      fontSize: '1.4rem',
      color: '#cbd5e1',
      maxWidth: '800px',
      margin: '0 auto 2.5rem',
      lineHeight: '1.8',
      opacity: 0.9,
    },
    section: {
      background: 'rgba(30, 41, 59, 0.6)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1.5rem',
      padding: '2.5rem',
      margin: '3rem 0',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.4s ease',
      opacity: 0,
      transform: 'translateY(30px)',
    },
    visibleSection: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    sectionHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '2.5rem',
      paddingBottom: '1.5rem',
      borderBottom: '2px solid rgba(59, 130, 246, 0.3)',
      gap: '1.5rem',
    },
    sectionNumber: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      color: '#3b82f6',
      opacity: 0.7,
      minWidth: '4rem',
    },
    sectionTitle: {
      fontSize: '2.2rem',
      color: '#f1f5f9',
      margin: 0,
    },
    contentBox: {
      background: 'rgba(15, 23, 42, 0.5)',
      borderRadius: '1rem',
      padding: '2rem',
      marginBottom: '1.5rem',
      borderRight: '5px solid #8b5cf6',
      transition: 'transform 0.3s ease',
    },
    benefitCard: {
      background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.9))',
      borderRadius: '1.2rem',
      padding: '2rem',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    caseCard: {
      background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))',
      borderRadius: '1.5rem',
      overflow: 'hidden',
      transition: 'all 0.4s ease',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      height: '100%',
    },
    checklistItem: {
      background: 'rgba(30, 41, 59, 0.6)',
      borderRadius: '0.8rem',
      padding: '1.2rem 1.5rem',
      marginBottom: '0.8rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(255, 255, 255, 0.05)',
    },
    checkbox: {
      width: '24px',
      height: '24px',
      border: '2px solid #3b82f6',
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      flexShrink: 0,
    },
    checkedCheckbox: {
      background: '#3b82f6',
    },
    button: {
      background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
      border: 'none',
      borderRadius: '2rem',
      padding: '1rem 2rem',
      color: 'white',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.8rem',
      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
    },
    statCard: {
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))',
      borderRadius: '1.2rem',
      padding: '2rem',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      flex: 1,
      minWidth: '200px',
    },
  };

  // نەتىجىلەرنى ئانىماتسىيە قىلىش
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({ stat1: 45, stat2: 30, stat3: 90 });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // بۆلۈملەرنى كۆزىتىش
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // تەكشۈرۈش جەدۋىلى
  const toggleCheckbox = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const checkedCount = checkedItems.filter(Boolean).length;
  const progressPercentage = (checkedCount / checkedItems.length) * 100;

  // بۆلۈم مەزمۇنلىرى
  const sections = [
    {
      id: 'section1',
      number: 'باشلاش',
      title: 'AI بىلەن «جەڭ قىلىش» ئەمەس، «بىرگە ياشاش» دەۋرىگە',
      content: [
        {
          type: 'text',
          content: 'بىز ھازىر خىيالىي سىنېما ۋە سۆزلەردە سۆزلىنىۋاتقان «AI ئىنساننى يېتىۋېلىدۇ» دېگەن قورقۇنچلۇق كۆرۈنۈشتىن ئېنىق ۋە مۇھىم بىر قەدەم ئىلگىرىلەپ، AI بىلەن قانداق «بىرگە ياشاش» ھەققىدە ئويلىشىشىمىز كېرەك بولغان دەۋردە تۇرىمىز. AI ئەسلىدە كۈندىلىك تۇرمۇشىمىزنىڭ ھەر بىر تەرەپكە سىڭىپ كەتتى.'
        },
        {
          type: 'highlight',
          icon: <Target size={24} />,
          title: 'بۇ تېمىنىڭ مەقسىتى',
          content: 'بۇ تېمىدا، AI بىلەن ھەمكارلىشىش چۈشەنچىسىنى ئاساس قىلىپ، ئەمەلىي ئەھۋاللارنى، ئۈنۈملۈكلىكنى ئۆستۈرۈش ئۇسۇللىرىنى ۋە ئوتتۇراھال ۋە خەلقئارالىق تەجرىبىلەرنى كۆرۈپ چىقىپ، كەلگۈسىدە AI بىلەن بىللە ئىلگىرىلەش يوللىرىنى تەمىنلەيمىز.'
        }
      ]
    },
    {
      id: 'section2',
      number: '1',
      title: 'نېمە ئۈچۈن «AI بىلەن بىرگە ياشاش» زۆرۈر؟',
      content: [
        {
          type: 'highlight',
          icon: <Briefcase size={24} />,
          title: 'خىزمەت سۇپىسىدا AI نىڭ مەۋجۇتلۇقى',
          content: 'خىزمەت سۇپىسىدا AI نىڭ تەسىرى پەقەت تاشقىي كۈچ ئەمەس، بەلكى خىزمەت مەزمۇنىنىڭ ئۆزگىرىشىدۇر. تەتقىقاتلار كۆرسىتىدىكىدەك، كەلگۈسى خىزمەت بازىرىدا تېخىمۇ كۆپ يېڭى خىزمەتلەر پەيدا بولىدۇ، ھالبۇكى، مەۋجۇت بولغان خىزمەتلەرنىڭ تۈرى ۋە ئېھتىياجى ئۆزگىرىدۇ.'
        },
        {
          type: 'highlight',
          icon: <GraduationCap size={24} />,
          title: 'مائارىپ، تىببىي ئىش قاتارلىق ھېس-تۇيغۇ تەلەپ قىلىدىغان ساھەلەردە ئۇچرىشىش',
          content: 'ھېس-تۇيغۇ تەلەپ قىلىدىغان ساھەلەردىمۇ، AI بىلەن بىرگە ئىشلەش تېز سۈرئەتتە تەرەققىي قىلىۋاتىدۇ. مەسىلەن، ياپونىيە مائارىپ، مەدەنىيەت، ئىلمىي تەتقىقات، تەنتەربىيە ۋاقتى ھوقۇق مىنىستىرلىكى چەتئەلدىكى مىللەتلەرنىڭ بالىلىرى ئۈچۈن تۈزۈلگەن ياپون تىلى دەرسلىكىدە تولۇقسىز AI (Gen AI) قاتارلىق دىجىتال تېخنىكىلارنى قوللىنىپ، ئوقۇتقۇچىنىڭ خىزمەت يۈكىنى يېنىكلىتىدۇ ھەمدە ھەر بىر ئوقۇغۇچىغا ماسلىشىدىغان ئۆگىنىشنى ئەمەلگە ئاشۇرىدۇ.'
        }
      ]
    },
    {
      id: 'section3',
      number: '2',
      title: 'AI بىلەن بىرگە ياشاشتىن كېلىدىغان 3 خىل پايدا',
      content: [
        {
          type: 'benefits',
          benefits: [
            {
              icon: <Clock size={32} />,
              title: '«ۋاقىت بوشلۇقى» پەيدا بولۇش',
              content: 'AI نىڭ مۇنتىزىم خىزمەتلەرنى ئاپتوماتلاشتۇرۇشى ئارقىلىق، ئىجادكار پىكىرلەرگە دىققەت قىلىدىغان ۋاقىت كۆپىيىدۇ. بۇ پەقەت ئىشلەيدىغان كىشىلەر ئۈچۈنلا ئەمەس، بەلكى ئائىلىسىدە ئۆي ئىشى ۋە قاراش خىزمىتى يۈكى يېنىكلىگەن ئائىلىلەرگەمۇ مۇناسىۋەتلىك.'
            },
            {
              icon: <TrendingUp size={32} />,
              title: 'ئىنساننىڭ «تاللاش ھوقۇقى» كېڭىيىشى',
              content: 'AI بىزگە «ئورۇن ئېلىش» ئەمەس، بەلكى «ياردەم» قىلىدىغان مەۋجۇتلۇقتۇر. خىزمەت ئالماشتۇرۇش ئىستىگۈچىلەر ئۈچۈن AI كەسپىي تەكشۈرۈش، ئوقۇش ئالدىدا تەييارلىق قىلىش ئۈچۈن AI مەسلىھەتچى قاتارلىق تەڭشەكلىكلەر پەيدا بولۇپ، گۇمان ۋە ئەنسىرەشنى ئازايتىشقا ياردەم قىلىدۇ.'
            },
            {
              icon: <Heart size={32} />,
              title: 'روھىي مۇقىملىق ۋە بەخت-سائادەتنى ئۆستۈرۈش',
              content: 'AI بىلەن بىرگە ياشاش مۇھىتى ئىنسانىي مۇناسىۋەتتىكى ستېرسس ۋە يالغۇزلۇق ھېسىنى ئازايتىشقا تۆھپە قوشىدۇ. مەسىلەن، دوختۇرخانىدا تولۇقسىز AI نى قوللىنىپ دوختۇر-بېمار سۆزلىشىشىنى ئۆز ئىچىگە ئالغان تېببىي خاتىرىلەرنى ئاپتوماتىك ئىشلەپ چىقىرىش، دوختۇرنى بېمارنىڭ دەۋاسىغا دىققەت قىلىشقا ياردەم بېرىدۇ.'
            }
          ]
        }
      ]
    },
    {
      id: 'section4',
      number: '3',
      title: 'بىرگە ياشاشنى ئەمەلگە ئاشۇرۇش ئۈچۈن زۆرۈر بولغان 3 خىل چۈشەنچە',
      content: [
        {
          type: 'highlight',
          icon: <Wrench size={24} />,
          title: '«AI بىر قورال» دېگەن خاتىرىنى ساقلاش',
          content: 'AI نى «ئىنساندىن ئۈستۈن كېلىدىغان خەتەر» دەپ قاراشتىن، «قورال» ياكى «ھەمراھ» دەپ چۈشىنىش، بىرگە ياشاشقا تۇنجى قەدەم قويۇشتۇر. بىز AI غا ئۆز خىزمىتى قايسى باسقۇچلارنى قانداق دەرىجىدە تەكلىپ قىلىش كېرەكلىكىنى بەلگىلەشنى، شۇنداقلا تەڭشەشنى ئۆگىنىشىمىز كېرەك.'
        },
        {
          type: 'highlight',
          icon: <Code size={24} />,
          title: 'دىجىتال ساۋاتلاندۇرۇش مائارىپىنى كۈچەيتىش',
          content: 'AI بىلەن بىرگە ياشاشقا ئىگە بولۇش، كەلگۈسىدىكى ئاساسىي مائارىپنىڭ بىر قىسمى بولۇپ قالىدۇ. ياپونىيەنىڭ مائارىپ سىستېمىسىدە AI قوللىنىش دەپ قارىلىدىغان قوللانمىلار، ئەخلاق ۋە ساقلىق ساقلاش خاتىرىلىرى قاتارلىقلارنى كۆزىتىپ، ئوقۇتقۇچىلارغا توغرا يېتەكچىلىك قىلىشنى كاپالەتلەندۈرىدۇ.'
        },
        {
          type: 'highlight',
          icon: <Scale size={24} />,
          title: 'ئىنسانىيەتنىڭ ئەخلاق پرىنسىپىنى يوقىتىپ قويماڭ',
          content: 'AI قانداق تەرەققىي قىلمىسۇن، «ئىنسانىي قىممەت» ۋە «ئەخلاقىي قارار چىقىرىش» نى ئالماشتۇرالمايدۇ. بىرگە ياشاش ئىنسان تەرەپنىڭ ئەخلاقىي مەسئۇلىيىتىنى تۇتۇشىنى تەلەپ قىلىدۇ.'
        }
      ]
    }
  ];

  // ئەھۋاللار
  const cases = [
    {
      country: '🇯🇵',
      title: 'ياپونىيە: ساغلاملىق ساقلاش ساھەسىدىكى AI تەكشۈرۈش ياردەم سىستېمىسى',
      content: 'ياپونىيەدىكى دوختۇرخانىلار تەكشۈرۈش سۈرەتلىرى (مەسىلەن، MRI، CT) نى تەھلىل قىلىدىغان AI سىستېمىلىرىنى قوللىنىپ، دوختۇرلارنىڭ تەكشۈرۈش توغرۇلۇق دەرىجىسى ۋە ئۈنۈمىنى ئۆستۈرىدۇ.',
      result: 'تەكشۈرۈش ۋاقتى تەخمىنەن 25% قىسقارتىلدى. كىچىك كېسەللىك سەۋەبلىرىنى قوغداشقا ياردەم بېرىدۇ، بېمارنىڭ رازىلىقىنى ئۆستۈرىدۇ.'
    },
    {
      country: '🌍',
      title: 'كەڭ قوللىنىلىدىغان سانلىق مەلۇمات تەھلىلى ۋە خاتا خىزمەت بايقاش',
      content: 'مالىيە ۋە سودا ساھەسىدە، AI مىليونلىغان سانلىق مەلۇماتلارنى ھەقىقىي ۋاقىتتا تەھلىل قىلىپ، قانۇنسىز ھەرىكەتلەرنى كۆرسىتىدىغان ئىبارىلەرنى بايقىيالايدۇ.',
      result: 'خاتا خىزمەت بايقاش دەرىجىسى 30% ئۆستى. كۈننىڭ ھەر قايسى سائەتلىرى ۋە ھەپتىنىڭ ھەر قايسى كۈنلىرىنى كۆزدىن كەچۈرۈپ، مۇشتەرىنىڭ ئىشەنچىنى ئۆستۈردى.'
    },
    {
      country: '🚀',
      title: 'يېڭىلىقچىلار ۋە قايتا تىكلەيدىغان ئېنېرگىيە قاتارلىق ساھەلەردە كۈچلۈك ئېھتىياج',
      content: 'كەلگۈسى خىزمەت بازىرى يېڭىلىقچىلار ۋە قايتا تىكلەيدىغان ئېنېرگىيە ساھەسىدە كۈچلۈك ئېھتىياجنى كۆرسىتىدۇ، مەسىلەن، چوڭ سانلىق مەلۇمات مۇتەخەسسىسى، كۆكتىكى ئېنېرگىيە مۇھەندىسى قاتارلىقلار.',
      result: 'بۇ خىزمەتلەر تېخنىكىلىق ئىلگىرىلەش ۋە مۇھىت قوغداش ئېھتىياجىنى قاندۇرىدۇ.'
    }
  ];

  // تەكشۈرۈش جەدۋىلى
  const checklistItems = [
    'AI نى «قورال» سۈپىتىدە ئىشلىتەلەمسىز؟',
    'كۈندىلىك تۇرمۇشتا ئاز مىقداردا AI نى قوللاندىڭىزمۇ؟',
    'AI ھەققىدە ئائىلە بىلەن سۆزلەش ۋاقىتى قۇردىڭىزمۇ؟',
    'ئۆگىنىشنى توختىتىپ، ساۋاتلاندۇرۇشنى ئۆستۈردىڭىزمۇ؟',
    'ئەخلاق پرىنسىپى ۋە قىممەتنى ھۆرمەت قىلدىڭىزمۇ؟',
    'AI بىلەن بىللە ئىشلەش ئۈچۈن يېڭى قابىلىيەتلەرنى ئۆگەندىڭىزمۇ؟'
  ];

  // تۇمشۇق ۋەزىپىلىرى
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resetChecklist = () => {
    setCheckedItems([false, false, false, false, false, false]);
  };

  return (
    <div style={styles.container}>
      {/* باش بەت */}
      <header style={styles.header}>
        <h1 style={styles.title}>
          <Brain size={48} style={{ marginLeft: '1rem', display: 'inline-block' }} />
          AI بىلەن ھەمكارلىشىش
        </h1>
        <p style={styles.subtitle}>
          كەلگۈسى تۇرمۇش يوللىرى - ئەمەلىيەت ئەھۋالى ۋە مۇۋەپپەقىيەتلىك ئەھۋاللار
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            style={styles.button}
            onClick={() => scrollToSection('toc')}
          >
            <BookOpen size={20} />
            تىزىملىككە ئاتلاش
          </button>
          <button 
            style={styles.button}
            onClick={() => scrollToSection('checklist')}
          >
            <CheckCircle size={20} />
            تەكشۈرۈش جەدۋىلى
          </button>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* تىزىملىك */}
        <div id="toc" style={{
          ...styles.section,
          ...(visibleSections.includes('toc') && styles.visibleSection)
        }} ref={el => sectionRefs.current[0] = el}>
          <div style={styles.sectionHeader}>
            <BookOpen size={32} color="#3b82f6" />
            <h2 style={styles.sectionTitle}>مەزمۇن تىزىملىكى</h2>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem'
          }}>
            {sections.map((section, index) => (
              <div 
                key={section.id}
                style={{
                  background: 'rgba(15, 23, 42, 0.5)',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  borderRight: '4px solid #3b82f6',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.background = 'rgba(15, 23, 42, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(15, 23, 42, 0.5)';
                }}
                onClick={() => scrollToSection(section.id)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <div style={{
                    background: '#3b82f6',
                    color: 'white',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}>
                    {section.number}
                  </div>
                  <strong style={{ fontSize: '1.2rem', color: '#f1f5f9' }}>
                    {section.title}
                  </strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* نەتىجىلەر پانېلى */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          margin: '3rem 0',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {[
            { value: stats.stat1, label: 'خىزمەت ئۈنۈمى ئاشتى', suffix: '%' },
            { value: stats.stat2, label: 'ۋاقىت بوشلۇقى ئاشتى', suffix: '%' },
            { value: stats.stat3, label: 'رازىلىق دەرىجىسى ئاشتى', suffix: '%' }
          ].map((stat, index) => (
            <div key={index} style={styles.statCard}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem'
              }}>
                {stat.value}{stat.suffix}
              </div>
              <div style={{ color: '#cbd5e1', fontSize: '1.2rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* بۆلۈملەر */}
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            style={{
              ...styles.section,
              ...(visibleSections.includes(section.id) && styles.visibleSection)
            }}
            ref={el => sectionRefs.current[index + 1] = el}
          >
            <div style={styles.sectionHeader}>
              <div style={styles.sectionNumber}>{section.number}</div>
              <h2 style={styles.sectionTitle}>{section.title}</h2>
            </div>
            
            {section.content.map((item, idx) => {
              if (item.type === 'text') {
                return (
                  <div key={idx} style={styles.contentBox}>
                    <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.8' }}>
                      {item.content}
                    </p>
                  </div>
                );
              }
              
              if (item.type === 'highlight') {
                return (
                  <div key={idx} style={styles.contentBox}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      {item.icon}
                      <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#3b82f6' }}>
                        {item.title}
                      </h3>
                    </div>
                    <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.8' }}>
                      {item.content}
                    </p>
                  </div>
                );
              }
              
              if (item.type === 'benefits') {
                return (
                  <div key={idx} style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginTop: '2rem'
                  }}>
                    {item.benefits.map((benefit, benefitIdx) => (
                      <div 
                        key={benefitIdx}
                        style={styles.benefitCard}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-10px)';
                          e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <div style={{ color: '#3b82f6', marginBottom: '1.5rem' }}>
                          {benefit.icon}
                        </div>
                        <h3 style={{ 
                          margin: '0 0 1rem 0', 
                          fontSize: '1.3rem', 
                          color: '#f1f5f9' 
                        }}>
                          {benefit.title}
                        </h3>
                        <p style={{ 
                          margin: 0, 
                          fontSize: '1rem', 
                          lineHeight: '1.7', 
                          color: '#cbd5e1',
                          flex: 1 
                        }}>
                          {benefit.content}
                        </p>
                      </div>
                    ))}
                  </div>
                );
              }
              
              return null;
            })}
            
            {/* 4-باب ئەھۋاللارنى كۆرسىتىش */}
            {section.id === 'section4' && (
              <div style={{ marginTop: '3rem' }}>
                <div style={styles.sectionHeader}>
                  <Globe size={32} color="#3b82f6" />
                  <h2 style={styles.sectionTitle}>
                    ئەمەلىيەتتە ئۈنۈم قازانغان بىرگە ياشاش ئەھۋالى
                  </h2>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                  gap: '2rem',
                  marginTop: '2rem'
                }}>
                  {cases.map((caseItem, idx) => (
                    <div 
                      key={idx}
                      style={styles.caseCard}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{
                        padding: '1.5rem',
                        background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                      }}>
                        <span style={{ fontSize: '2rem' }}>{caseItem.country}</span>
                        <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#f1f5f9' }}>
                          {caseItem.title}
                        </h3>
                      </div>
                      <div style={{ padding: '1.5rem' }}>
                        <p style={{ margin: '0 0 1rem 0', lineHeight: '1.7' }}>
                          {caseItem.content}
                        </p>
                        <div style={{
                          background: 'rgba(34, 197, 94, 0.1)',
                          borderRadius: '0.8rem',
                          padding: '1rem',
                          borderRight: '5px solid #22c55e'
                        }}>
                          <strong style={{ color: '#22c55e' }}>تەسىر ۋە ئۈنۈم:</strong>
                          <p style={{ margin: '0.5rem 0 0 0' }}>{caseItem.result}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}

        {/* تەكشۈرۈش جەدۋىلى */}
        <div 
          id="checklist"
          style={{
            ...styles.section,
            ...(visibleSections.includes('checklist') && styles.visibleSection),
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
            marginTop: '4rem'
          }}
          ref={el => sectionRefs.current[sections.length + 1] = el}
        >
          <div style={styles.sectionHeader}>
            <CheckCircle size={32} color="#3b82f6" />
            <h2 style={styles.sectionTitle}>
              AI بىلەن ھەمكارلىشىش ئۈچۈن تەكشۈرۈش جەدۋىلى
            </h2>
          </div>
          
          <div style={{ marginBottom: '2.5rem' }}>
            {checklistItems.map((item, index) => (
              <div 
                key={index}
                style={{
                  ...styles.checklistItem,
                  ...(checkedItems[index] && { 
                    background: 'rgba(59, 130, 246, 0.1)',
                    borderColor: 'rgba(59, 130, 246, 0.3)'
                  })
                }}
                onClick={() => toggleCheckbox(index)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = checkedItems[index] 
                    ? 'rgba(59, 130, 246, 0.2)' 
                    : 'rgba(255, 255, 255, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = checkedItems[index]
                    ? 'rgba(59, 130, 246, 0.1)'
                    : 'rgba(30, 41, 59, 0.6)';
                }}
              >
                <div style={{
                  ...styles.checkbox,
                  ...(checkedItems[index] && styles.checkedCheckbox)
                }}>
                  {checkedItems[index] && '✓'}
                </div>
                <span style={{ 
                  fontSize: '1.1rem',
                  color: checkedItems[index] ? '#3b82f6' : '#f1f5f9'
                }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>
              تەكشۈرۈش نەتىجىسى: <strong>{checkedCount}</strong> / {checklistItems.length}
            </div>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              height: '20px',
              borderRadius: '10px',
              overflow: 'hidden',
              marginBottom: '2rem'
            }}>
              <div style={{
                height: '100%',
                background: 'linear-gradient(90deg, #3b82f6, #22c55e)',
                width: `${progressPercentage}%`,
                transition: 'width 0.5s ease'
              }} />
            </div>
            <button 
              style={{
                ...styles.button,
                background: 'linear-gradient(90deg, #ef4444, #dc2626)'
              }}
              onClick={resetChecklist}
            >
              <ArrowUp size={20} style={{ transform: 'rotate(45deg)' }} />
              قايتا باشلاش
            </button>
          </div>
        </div>

        {/* ئاخىرقى سۆز */}
        <div style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          background: 'rgba(15, 23, 42, 0.6)',
          borderRadius: '2rem',
          marginTop: '4rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '5px',
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ef4444)'
          }} />
          
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            color: '#f1f5f9',
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            AI بىلەن ھەمكارلىشىش «كەلگۈسىدىن قورقماسلىق» دىكى ئىرتادۇر
          </h2>
          
          <p style={{
            fontSize: '1.3rem',
            maxWidth: '800px',
            margin: '0 auto 3rem',
            lineHeight: '1.9',
            color: '#cbd5e1'
          }}>
            AI نىڭ ئىنساننىڭ خىزمىتىنى ئېلىۋېتىدىغانلىقى ھەققىدە مەنپىي سۆزلەر بار، ئەمما ئەمەلىيەتتە ئىنساننىڭ قابىلىيىتىنى ئاشۇرىدىغان قورال سۈپىتىدە پايدىلىنىش ئارقىلىق، تېخىمۇ باي، ئىجادكار جەمئىيەت قۇرۇش مۇمكىن. «AI بىلەن بىللە ياشايدىغان كەلگۈسى» ئاللىبۇرۇن باشلانغان. قورقۇشتىن، چۈشىنىشتىن، ئىشلىتىشتىن ۋە سۆزلەشتىن، بىز ھەر بىرىمىز بۇ كەلگۈسىنىڭ يۈك چىقارغۇچىسى بولالايمىز.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              style={styles.button}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ArrowUp size={20} />
              يۇقىرىغا قايتىش
            </button>
            <button 
              style={{
                ...styles.button,
                background: 'linear-gradient(90deg, #8b5cf6, #7c3aed)'
              }}
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'AI بىلەن ھەمكارلىشىش',
                    text: 'كەلگۈسى تۇرمۇش يوللىرى',
                    url: window.location.href
                  });
                } else {
                  alert('تارقىتىش ئىقتىدارى قوللىنىلمايدۇ');
                }
              }}
            >
              <Share2 size={20} />
              تارقىتىش
            </button>
          </div>
        </div>

        {/* ئاخىرقى ئۇچۇر */}
        <footer style={{
          textAlign: 'center',
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#94a3b8',
          fontSize: '0.9rem'
        }}>
          <p>بۇ لىكسىيە 2025-يىلدىكى تېخنىكىلىق ئىلگىرىلەشلەر ۋە كەلگۈسى پەرەزلەرگە ئاساسەن تەييارلاندى.</p>
          <p style={{ marginTop: '0.5rem' }}>
            © 2025 يۇقىرى پەن-تېخنىكا لىكسىيەسى | ئىنسانىيەتنىڭ كەلگۈسى
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Blog29;