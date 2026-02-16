import React, { useState, useEffect } from 'react';
import { 
  FaMonument, 
  FaLaptopCode, 
  FaBlenderPhone, 
  FaHandsHelping, 
  FaGraduationCap,
  FaCloud,
  FaRobot,
  FaDatabase,
  FaHands,
  FaLandmark,
  FaMusic,
  FaLanguage,
  FaPhotoVideo,
  FaBookOpen,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';

const FromAnalogToDigital = () => {
  const [language, setLanguage] = useState('uyghur');
  const [activeNav, setActiveNav] = useState('digital');
  
  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };
  
  const handleNavClick = (sectionId) => {
    setActiveNav(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['digital', 'physical', 'phygital', 'culture', 'conclusion'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveNav(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const styles = {
    root: {
      backgroundColor: '#F5F5DC',
      color: '#333',
      lineHeight: 1.6,
      fontFamily: "'Noto Sans Arabic', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      direction: 'rtl'
    },
    englishText: {
      fontFamily: "'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      direction: 'ltr'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    header: {
      background: 'linear-gradient(135deg, #8B4513, #D2691E)',
      color: '#FFFFFF',
      padding: '1rem 0',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center'
    },
    languageSwitcher: {
      display: 'flex',
      gap: '10px'
    },
    langBtn: {
      background: 'rgba(255, 255, 255, 0.2)',
      border: 'none',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    activeLangBtn: {
      background: 'rgba(255, 255, 255, 0.4)',
      fontWeight: 'bold'
    },
    navList: {
      display: 'flex',
      listStyle: 'none'
    },
    navItem: {
      marginLeft: '1.5rem'
    },
    navLink: {
      color: '#FFFFFF',
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'all 0.3s ease',
      padding: '5px 10px',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    activeNavLink: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    hero: {
      background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                  url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center/cover`,
      height: '600px',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContent: {
      color: '#FFFFFF',
      maxWidth: '800px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2
    },
    heroTitle: {
      fontSize: '3.5rem',
      marginBottom: '1rem',
      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)'
    },
    heroSubtitle: {
      fontSize: '1.3rem',
      marginBottom: '2rem'
    },
    btn: {
      display: 'inline-block',
      backgroundColor: '#F4A460',
      color: '#333',
      padding: '14px 28px',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    },
    section: {
      padding: '5rem 0'
    },
    sectionTitle: {
      textAlign: 'center',
      marginBottom: '3rem',
      position: 'relative'
    },
    sectionTitleLine: {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100px',
      height: '3px',
      backgroundColor: '#8B4513'
    },
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease'
    },
    cardImg: {
      height: '200px',
      overflow: 'hidden',
      position: 'relative'
    },
    cardContent: {
      padding: '1.5rem'
    },
    quote: {
      fontStyle: 'italic',
      backgroundColor: 'rgba(244, 164, 96, 0.2)',
      padding: '1rem',
      borderRight: '4px solid #F4A460',
      margin: '1.5rem 0',
      borderRadius: '4px',
      position: 'relative'
    },
    techGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem'
    },
    techItem: {
      backgroundColor: '#FFFFFF',
      padding: '2rem',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    techIcon: {
      fontSize: '3rem',
      color: '#8B4513',
      marginBottom: '1rem'
    },
    steps: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      maxWidth: '800px',
      margin: '0 auto'
    },
    step: {
      display: 'flex',
      alignItems: 'flex-start',
      backgroundColor: '#FFFFFF',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease'
    },
    stepNumber: {
      backgroundColor: '#8B4513',
      color: '#FFFFFF',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      marginLeft: '1rem',
      flexShrink: 0
    },
    comparisonTable: {
      width: '100%',
      borderCollapse: 'collapse',
      margin: '2rem 0',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      overflow: 'hidden'
    },
    cultureFeatures: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    },
    cultureFeature: {
      background: '#FFFFFF',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      transition: 'all 0.3s ease'
    },
    cultureIcon: {
      fontSize: '2.5rem',
      color: '#8B4513',
      marginBottom: '1rem'
    },
    footer: {
      backgroundColor: '#2F4F4F',
      color: '#FFFFFF',
      padding: '3rem 0 1.5rem'
    },
    footerContent: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem'
    },
    footerSection: {
      marginBottom: '2rem'
    },
    socialLinks: {
      display: 'flex',
      gap: '15px'
    },
    socialLink: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      color: '#FFFFFF',
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    },
    footerBottom: {
      textAlign: 'center',
      paddingTop: '1.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }
  };

  return (
    <div style={styles.root}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.headerContent}>
            <div style={styles.logo}>
              <FaMonument style={{ marginLeft: '10px', fontSize: '2rem' }} />
              {language === 'uyghur' ? 'ئەسلىدىن دېجىتالغىچە' : 'From Analog to Digital'}
            </div>
            <div style={styles.languageSwitcher}>
              <button 
                style={{...styles.langBtn, ...(language === 'uyghur' ? styles.activeLangBtn : {})}}
                onClick={() => toggleLanguage('uyghur')}
              >
                ئۇيغۇرچە
              </button>
              <button 
                style={{...styles.langBtn, ...(language === 'english' ? styles.activeLangBtn : {})}}
                onClick={() => toggleLanguage('english')}
              >
                English
              </button>
            </div>
            <nav>
              <ul style={styles.navList}>
                <li style={styles.navItem}>
                  <a 
                    style={{...styles.navLink, ...(activeNav === 'digital' ? styles.activeNavLink : {})}}
                    onClick={() => handleNavClick('digital')}
                  >
                    {language === 'uyghur' ? 'دىجىتال نېمە؟' : 'What is Digital?'}
                  </a>
                </li>
                <li style={styles.navItem}>
                  <a 
                    style={{...styles.navLink, ...(activeNav === 'physical' ? styles.activeNavLink : {})}}
                    onClick={() => handleNavClick('physical')}
                  >
                    {language === 'uyghur' ? 'فىزىكال نېمە؟' : 'What is Physical?'}
                  </a>
                </li>
                <li style={styles.navItem}>
                  <a 
                    style={{...styles.navLink, ...(activeNav === 'phygital' ? styles.activeNavLink : {})}}
                    onClick={() => handleNavClick('phygital')}
                  >
                    {language === 'uyghur' ? 'فىجىتال نېمە؟' : 'What is Phygital?'}
                  </a>
                </li>
                <li style={styles.navItem}>
                  <a 
                    style={{...styles.navLink, ...(activeNav === 'culture' ? styles.activeNavLink : {})}}
                    onClick={() => handleNavClick('culture')}
                  >
                    {language === 'uyghur' ? 'مەدەنىيەتنى ساقلاش' : 'Culture Preservation'}
                  </a>
                </li>
                <li style={styles.navItem}>
                  <a 
                    style={{...styles.navLink, ...(activeNav === 'conclusion' ? styles.activeNavLink : {})}}
                    onClick={() => handleNavClick('conclusion')}
                  >
                    {language === 'uyghur' ? 'خۇلاسە' : 'Conclusion'}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              {language === 'uyghur' ? 'ئەسلىدىن دېجىتالغىچە' : 'From Analog to Digital'}
            </h1>
            <p style={styles.heroSubtitle}>
              {language === 'uyghur' 
                ? 'ئۇيغۇر مەدەنىيىتىنى زامانىۋى تېخنىكىلار ئارقىلىق ساقلاش ۋە تارقىتىش' 
                : 'Preserving and promoting Uyghur culture through modern technology'}
            </p>
            <button 
              style={styles.btn}
              onClick={() => handleNavClick('digital')}
            >
              {language === 'uyghur' ? 'تەپسىلاتىنى ئۆگىنىش' : 'Learn More'}
            </button>
          </div>
        </div>
      </section>

      {/* Digital Section */}
      <section id="digital" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            {language === 'uyghur' ? 'دىجىتال (سانلىق) نېمە؟' : 'What is Digital?'}
          </h2>
          <div style={styles.card}>
            <div style={styles.cardContent}>
              <h3>
                <FaLaptopCode style={{ marginLeft: '10px' }} />
                {language === 'uyghur' ? 'دىجىتال تېخنىكا ھەققىدە' : 'About Digital Technology'}
              </h3>
              
              <p>
                {language === 'uyghur' 
                  ? 'دىجىتال دېگىنىمىز كومپيۇتېر، ئىنتېرنېت ۋە باشقا سانلىق ئۈسكۈنىلەر ئارقىلىق ئۇچۇرلارنى ساقلاش، بىر تەرەپ قىلىش ۋە تارقىتىشنى كۆرسىتىدۇ.' 
                  : 'Digital refers to the storage, processing, and distribution of information through computers, the internet, and other digital devices.'}
              </p>
              
              <div style={styles.quote}>
                <p>
                  {language === 'uyghur' 
                    ? '"بىلىم - بىلەن كۈچ، بىلىمسىز يۈرگەن كۈچسىز"' 
                    : '"Knowledge is power, without knowledge power is useless"'}
                </p>
              </div>
              
              <h4>{language === 'uyghur' ? 'نېمە ئۈچۈن ئىشلىتىمىز؟' : 'Why Do We Use It?'}</h4>
              <ul>
                <li>
                  {language === 'uyghur' 
                    ? 'ئۇچۇرلارنى تېز ۋە ئۈنۈملۈك تارقىتىش' 
                    : 'Quick and efficient distribution of information'}
                </li>
                <li>
                  {language === 'uyghur' 
                    ? 'مەدەنىي مىراسلارنى ئۇزۇن مۇددەت ساقلاش' 
                    : 'Long-term preservation of cultural heritage'}
                </li>
                <li>
                  {language === 'uyghur' 
                    ? 'كەڭ خەلققە يەتكۈزۈش ئىمكانىيىتى' 
                    : 'Accessibility to a wide audience'}
                </li>
                <li>
                  {language === 'uyghur' 
                    ? 'ئىقتىسادىي پايدا ئېلىش' 
                    : 'Economic benefits'}
                </li>
              </ul>
              
              <div style={styles.techGrid}>
                <div style={styles.techItem}>
                  <div style={styles.techIcon}>
                    <FaCloud />
                  </div>
                  <h4>{language === 'uyghur' ? 'بۇلۇت ساقلاش' : 'Cloud Storage'}</h4>
                  <p>
                    {language === 'uyghur' 
                      ? 'ئۇچۇرلارنى بۇلۇتتا ساقلاش ئارقىلىق ھەر قانداق ئورۇندىن زىيارەت قىلىش' 
                      : 'Access information from anywhere through cloud storage'}
                  </p>
                </div>
                <div style={styles.techItem}>
                  <div style={styles.techIcon}>
                    <FaRobot />
                  </div>
                  <h4>{language === 'uyghur' ? 'سۈنئىي ئەقىل' : 'Artificial Intelligence'}</h4>
                  <p>
                    {language === 'uyghur' 
                      ? 'ئۇيغۇر تىلىنى ئاپتوماتىك تەرجىمە قىلىش ۋە تونۇش' 
                      : 'Automatic translation and recognition of Uyghur language'}
                  </p>
                </div>
                <div style={styles.techItem}>
                  <div style={styles.techIcon}>
                    <FaDatabase />
                  </div>
                  <h4>{language === 'uyghur' ? 'بىگ داتا' : 'Big Data'}</h4>
                  <p>
                    {language === 'uyghur' 
                      ? 'كۆپ مىقداردىكى مەدەنىيەت سانلىق مەلۇماتلىرىنى تەھلىل قىلىش' 
                      : 'Analysis of large amounts of cultural digital data'}
                  </p>
                </div>
              </div>
              
              {/* Digital Examples */}
              <h4>{language === 'uyghur' ? 'ئەمەلىي مىساللار:' : 'Practical Examples:'}</h4>
              <div style={styles.cardContainer}>
                <div style={styles.card}>
                  <div style={styles.cardImg}>
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt={language === 'uyghur' ? 'ئۇيغۇرچە ئەپ' : 'Uyghur Language Apps'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={styles.cardContent}>
                    <h5>{language === 'uyghur' ? 'ئۇيغۇرچە ئەپ ۋە پروگراممىلار' : 'Uyghur Language Apps and Programs'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'ئۇيغۇر تىلىدىكى ئەپلەر، سۆزلۈكلەر ۋە ئوقۇتۇش ماتېرىياللىرى' 
                        : 'Apps, dictionaries and educational materials in Uyghur language'}
                    </p>
                  </div>
                </div>
                
                <div style={styles.card}>
                  <div style={styles.cardImg}>
                    <img 
                      src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt={language === 'uyghur' ? 'سانلىق كۈتۇپخانا' : 'Digital Library'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={styles.cardContent}>
                    <h5>{language === 'uyghur' ? 'سانلىق كۈتۇپخانا' : 'Digital Library'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'ئۇيغۇر ئەدەبىياتى ۋە تارىخىي ھۆججەتلەرنى سانلىق شەكىلدە ساقلاش' 
                        : 'Preserving Uyghur literature and historical documents in digital form'}
                    </p>
                  </div>
                </div>
                
                <div style={styles.card}>
                  <div style={styles.cardImg}>
                    <img 
                      src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt={language === 'uyghur' ? 'تارىخىي خاتىرىلەش' : 'Historical Documentation'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={styles.cardContent}>
                    <h5>{language === 'uyghur' ? 'تارىخىي خاتىرىلەش' : 'Historical Documentation'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'قەدىمكى ئۇيغۇر يادىكارلىقلىرىنى 3D سىكانىرلاش ۋە سانلىق خاتىرىلەش' 
                        : '3D scanning and digital recording of ancient Uyghur monuments'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Physical Section */}
      <section id="physical" style={{...styles.section, backgroundColor: '#f9f9f9'}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            {language === 'uyghur' ? 'فىزىكال (ماددىي) نېمە؟' : 'What is Physical?'}
          </h2>
          
          <div style={styles.card}>
            <div style={styles.cardContent}>
              <h3>
                <FaMonument style={{ marginLeft: '10px' }} />
                {language === 'uyghur' ? 'فىزىكال ماددىي دۇنيا ھەققىدە' : 'About the Physical Material World'}
              </h3>
              
              <p>
                {language === 'uyghur' 
                  ? 'فىزىكال دېگىنىمىز كۆز بىلەن كۆرگىلى، قول بىلەن تەتكىلى بولىدىغان، ماددىي شەكىلدە بار بولغان نەرسىلەرنى كۆرسىتىدۇ.' 
                  : 'Physical refers to objects that can be seen with the eyes, touched with the hands, and exist in material form.'}
              </p>
              
              <div style={styles.quote}>
                <p>
                  {language === 'uyghur' 
                    ? '"ئەسلىنىڭ يوق يېرىدە كۆچمە بارمۇ؟"' 
                    : '"Can there be a copy without an original?"'}
                </p>
              </div>
              
              <h4>{language === 'uyghur' ? 'نېمە ئۈچۈن ئىشلىتىمىز؟' : 'Why Do We Use It?'}</h4>
              <ul>
                <li>
                  {language === 'uyghur' 
                    ? 'مەدەنىيەت ۋە تارىخنى ئەسلى شەكىلدە ساقلاش' 
                    : 'Preserving culture and history in original form'}
                </li>
                <li>
                  {language === 'uyghur' 
                    ? 'ھەقىقىي تەجرىبە ۋە هېسسىياتنى تەمىنلەش' 
                    : 'Providing authentic experience and emotions'}
                </li>
                <li>
                  {language === 'uyghur' 
                    ? 'ئەنئەنىۋى قول ھۈنەرۋەنچىلىكنى داۋاملاشتۇرۇش' 
                    : 'Continuing traditional handicrafts'}
                </li>
                <li>
                  {language === 'uyghur' 
                    ? 'ماددىي مىراسلارنى ئەۋلادلارغا يەتكۈزۈش' 
                    : 'Passing material heritage to future generations'}
                </li>
              </ul>
              
              <div style={styles.cultureFeatures}>
                <div style={styles.cultureFeature}>
                  <div style={styles.cultureIcon}>
                    <FaHands />
                  </div>
                  <h4>{language === 'uyghur' ? 'قول ھۈنەرى' : 'Handicrafts'}</h4>
                  <p>
                    {language === 'uyghur' 
                      ? 'ئەنئەنىۋى ئۇيغۇر قول ھۈنەرلىرىنىڭ قىممىتى' 
                      : 'The value of traditional Uyghur handicrafts'}
                  </p>
                </div>
                
                <div style={styles.cultureFeature}>
                  <div style={styles.cultureIcon}>
                    <FaLandmark />
                  </div>
                  <h4>{language === 'uyghur' ? 'تارىخىي يادىكارلىقلار' : 'Historical Monuments'}</h4>
                  <p>
                    {language === 'uyghur' 
                      ? 'قەدىمكى ئۇيغۇر مەدەنىي يادىكارلىقلىرى' 
                      : 'Ancient Uyghur cultural monuments'}
                  </p>
                </div>
                
                <div style={styles.cultureFeature}>
                  <div style={styles.cultureIcon}>
                    <FaMusic />
                  </div>
                  <h4>{language === 'uyghur' ? 'مۇزىكا ۋە رەقس' : 'Music and Dance'}</h4>
                  <p>
                    {language === 'uyghur' 
                      ? 'ئەنئەنىۋى ئۇيغۇر مۇزىكىسى ۋە رەقسلەرى' 
                      : 'Traditional Uyghur music and dances'}
                  </p>
                </div>
              </div>
              
              {/* Physical Examples */}
              <h4>{language === 'uyghur' ? 'ئەمەلىي مىساللار:' : 'Practical Examples:'}</h4>
              <div style={styles.cardContainer}>
                <div style={styles.card}>
                  <div style={styles.cardImg}>
                    <img 
                      src="https://images.unsplash.com/photo-1594736797933-d0d69bc8c8d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt={language === 'uyghur' ? 'ئۇيغۇر نەقشىلىك كىيىملىرى' : 'Uyghur Patterned Clothing'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={styles.cardContent}>
                    <h5>{language === 'uyghur' ? 'ئۇيغۇر نەقشىلىك كىيىملىرى' : 'Uyghur Patterned Clothing'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'ئەنئەنىۋى ئىپەك، ئەتلەس كىيىملىر ۋە دۆپپىلەر' 
                        : 'Traditional silk, atlas clothing and doppas'}
                    </p>
                  </div>
                </div>
                
                <div style={styles.card}>
                  <div style={styles.cardImg}>
                    <img 
                      src="https://images.unsplash.com/photo-1579033065377-8c5d07cd0e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt={language === 'uyghur' ? 'قەدىمكى قول يازمىلار' : 'Ancient Manuscripts'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={styles.cardContent}>
                    <h5>{language === 'uyghur' ? 'قەدىمكى قول يازمىلار' : 'Ancient Manuscripts'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'ئۇيغۇر يېزىقىدىكى تارىخىي ھۆججەتلەر ۋە ئەدەبىي ئەسەرلەر' 
                        : 'Historical documents and literary works in Uyghur script'}
                    </p>
                  </div>
                </div>
                
                <div style={styles.card}>
                  <div style={styles.cardImg}>
                    <img 
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt={language === 'uyghur' ? 'مەدەنىي يادىكارلىقلار' : 'Cultural Heritage Sites'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={styles.cardContent}>
                    <h5>{language === 'uyghur' ? 'مەدەنىي يادىكارلىقلار' : 'Cultural Heritage Sites'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'ئۇيغۇر مەمعۇرىي ئەسەرلىرى ۋە ئىسلام سەنئەتلىرى' 
                        : 'Uyghur architectural works and Islamic arts'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phygital Section */}
      <section id="phygital" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            {language === 'uyghur' ? 'فىجىتال (ماددىي-سانلىق بىرلەشمە) نېمە؟' : 'What is Phygital?'}
          </h2>
          
          <div style={styles.card}>
            <div style={styles.cardContent}>
              <h3>
                <FaBlenderPhone style={{ marginLeft: '10px' }} />
                {language === 'uyghur' ? 'فىجىتال بىرلەشمە تېخنىكا ھەققىدە' : 'About Phygital Integration Technology'}
              </h3>
              
              <p>
                {language === 'uyghur' 
                  ? 'فىجىتال دېگىنىمىز فىزىكال (ماددىي) دۇنيا بىلەن دىجىتال (سانلىق) دۇنيانى بىرلەشتۈرۈپ، يېڭى بىر تەجرىبە ھاسىل قىلىشنى كۆرسىتىدۇ.' 
                  : 'Phygital refers to the integration of the physical (material) world with the digital (numerical) world to create a new experience.'}
              </p>
              
              <div style={styles.quote}>
                <p>
                  {language === 'uyghur' 
                    ? '"يېڭىلىق - كونا ئەنئەنىنىڭ يېڭى ئىپادىسى"' 
                    : '"Innovation is the new expression of old traditions"'}
                </p>
              </div>
              
              <h4>{language === 'uyghur' ? 'نېمە ئۈچۈن ئىشلىتىمىز؟' : 'Why Do We Use It?'}</h4>
              <ul>
                <li>
                  {language === 'uyghur' 
                    ? 'ماددىي مەدەنىيەتنى سانلىق دۇنياغا توشۇش' 
                    : 'Bringing material culture to the digital world'}
                </li>
                <li>
                  {language === 'uyghur' 
                    ? 'يېڭى نەسىللەر بىلەن ئالاقە قۇرۇش' 
                    : 'Connecting with new generations'}
                </li>
                <li>
                  {language === 'uyghur' 
                    ? 'مەدەنىيەتنى زامانىۋىلاشتۇرۇپ ساقلاش' 
                    : 'Modernizing while preserving culture'}
                </li>
                <li>
                  {language === 'uyghur' 
                    ? 'ئىقتىسادىي پايدا ۋە مەدەنىي داۋاملىقلىق' 
                    : 'Economic benefits and cultural sustainability'}
                </li>
              </ul>
              
              {/* Phygital Examples */}
              <h4>{language === 'uyghur' ? 'ئەمەلىي مىساللار:' : 'Practical Examples:'}</h4>
              <div style={styles.cardContainer}>
                <div style={styles.card}>
                  <div style={styles.cardImg}>
                    <img 
                      src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt={language === 'uyghur' ? 'ئارتۇرىچىلىق رېئاللىق' : 'Augmented Reality'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={styles.cardContent}>
                    <h5>{language === 'uyghur' ? 'ئارتۇرىچىلىق رېئاللىق (AR)' : 'Augmented Reality (AR)'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'ئۇيغۇر مەدەنىي يادىكارلىقلىرىنى ئارتۇرىچىلىق رېئاللىق ئارقىلىق كۆرۈش' 
                        : 'Viewing Uyghur cultural monuments through augmented reality'}
                    </p>
                  </div>
                </div>
                
                <div style={styles.card}>
                  <div style={styles.cardImg}>
                    <img 
                      src="https://images.unsplash.com/photo-1551650977-d5caa6d5b3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt={language === 'uyghur' ? 'مۇزېي سانلىق تەجرىبىسى' : 'Museum Digital Experience'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={styles.cardContent}>
                    <h5>{language === 'uyghur' ? 'مۇزېي سانلىق تەجرىبىسى' : 'Museum Digital Experience'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'ئۇيغۇر مەدەنىيەت مۇزېيلەرىنى سانلىق تەجرىبە بىلەن بىرلەشتۈرۈش' 
                        : 'Integrating Uyghur cultural museums with digital experience'}
                    </p>
                  </div>
                </div>
                
                <div style={styles.card}>
                  <div style={styles.cardImg}>
                    <img 
                      src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt={language === 'uyghur' ? '3D نەقىل ۋە سىكانىرلاش' : '3D Printing and Scanning'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={styles.cardContent}>
                    <h5>{language === 'uyghur' ? '3D نەقىل ۋە سىكانىرلاش' : '3D Printing and Scanning'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'ئۇيغۇر سەنئەت ئەسەرلىرىنى 3D سىكانىرلاش ۋە نەقىل چىقىرىش' 
                        : '3D scanning and printing of Uyghur art works'}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Implementation Steps */}
              <h4>{language === 'uyghur' ? 'ئەمەلگە ئاشۇرۇش باسقۇچلىرى:' : 'Implementation Steps:'}</h4>
              <div style={styles.steps}>
                <div style={styles.step}>
                  <div style={styles.stepNumber}>1</div>
                  <div>
                    <h5>{language === 'uyghur' ? 'ماددىي مەدەنىيەت ئەسەرلىرىنى سانلىقلاشتۇرۇش' : 'Digitizing Material Cultural Artifacts'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'مەدەنىي ئەسەرلەرنى يۇقىرى سۈپەتلىك كامېرا ۋە سىكانىرلار بىلەن سانلىق شەكىلغە ئايلاندۇرۇش' 
                        : 'Converting cultural artifacts to digital format using high-quality cameras and scanners'}
                    </p>
                  </div>
                </div>
                
                <div style={styles.step}>
                  <div style={styles.stepNumber}>2</div>
                  <div>
                    <h5>{language === 'uyghur' ? 'سانلىق مەزمۇنلارنى يارىتىش' : 'Creating Digital Content'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'سانلىق شەكىلدىكى مەزمۇنلارنى تۈرلۈك ئىنتېرئاكتىپ ئۇسۇللار بىلەن بايىتىش' 
                        : 'Enriching digital content with various interactive methods'}
                    </p>
                  </div>
                </div>
                
                <div style={styles.step}>
                  <div style={styles.stepNumber}>3</div>
                  <div>
                    <h5>{language === 'uyghur' ? 'ئىنتېرئاكتىپ تەجرىبە يارىتىش' : 'Creating Interactive Experience'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'ئىشلەتكۈچىلەرنىڭ ماددىي ۋە سانلىق دۇنيانى بىرلەشتۈرۈش تەجرىبىسىنى يارىتىش' 
                        : 'Creating user experience that integrates physical and digital worlds'}
                    </p>
                  </div>
                </div>
                
                <div style={styles.step}>
                  <div style={styles.stepNumber}>4</div>
                  <div>
                    <h5>{language === 'uyghur' ? 'تارقىتىش ۋە يەتكۈزۈش' : 'Distribution and Delivery'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'يارىتىلغان فىجىتال مەزمۇنلارنى كەڭ خەلققە تارقىتىش' 
                        : 'Distributing created phygital content to a wide audience'}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Comparison Table */}
              <h4>{language === 'uyghur' ? 'سېلىشتۇرما جەدۋەل:' : 'Comparison Table:'}</h4>
              <table style={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>{language === 'uyghur' ? 'خۇسۇسىيەت' : 'Feature'}</th>
                    <th>{language === 'uyghur' ? 'فىزىكال' : 'Physical'}</th>
                    <th>{language === 'uyghur' ? 'دىجىتال' : 'Digital'}</th>
                    <th>{language === 'uyghur' ? 'فىجىتال' : 'Phygital'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{language === 'uyghur' ? 'ساقلاش مۇددىتى' : 'Storage Period'}</td>
                    <td>{language === 'uyghur' ? 'چەكلىك' : 'Limited'}</td>
                    <td>{language === 'uyghur' ? 'ئۇزۇن' : 'Long'}</td>
                    <td>{language === 'uyghur' ? 'ئۇزۇن + ماددىي' : 'Long + Physical'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'uyghur' ? 'تارقىتىش دائىرىسى' : 'Distribution Range'}</td>
                    <td>{language === 'uyghur' ? 'چەكلىك' : 'Limited'}</td>
                    <td>{language === 'uyghur' ? 'كەڭ' : 'Wide'}</td>
                    <td>{language === 'uyghur' ? 'كەڭ + ماددىي' : 'Wide + Physical'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'uyghur' ? 'ئۆزگەرتىش ئىمكانىيىتى' : 'Modification Capability'}</td>
                    <td>{language === 'uyghur' ? 'تەس' : 'Difficult'}</td>
                    <td>{language === 'uyghur' ? 'ئاسان' : 'Easy'}</td>
                    <td>{language === 'uyghur' ? 'ئاسان + ماددىي' : 'Easy + Physical'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'uyghur' ? 'ھېسسىيات تەجرىبىسى' : 'Emotional Experience'}</td>
                    <td>{language === 'uyghur' ? 'كۈچلۈك' : 'Strong'}</td>
                    <td>{language === 'uyghur' ? 'ئاجىز' : 'Weak'}</td>
                    <td>{language === 'uyghur' ? 'كۈچلۈك + سانلىق' : 'Strong + Digital'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Preservation Section */}
      <section id="culture" style={{...styles.section, backgroundColor: '#f9f9f9'}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            {language === 'uyghur' ? 'ئۇيغۇر مەدەنىيىتىنى ساقلاش' : 'Uyghur Culture Preservation'}
          </h2>
          
          <div style={styles.card}>
            <div style={styles.cardContent}>
              <h3>
                <FaHandsHelping style={{ marginLeft: '10px' }} />
                {language === 'uyghur' ? 'مەدەنىيەتنى ساقلاشنىڭ ئەھمىيىتى' : 'The Importance of Cultural Preservation'}
              </h3>
              
              <p>
                {language === 'uyghur' 
                  ? 'ئۇيغۇر مەدەنىيىتى مىڭ يىللارغا ئىگە بولغان باي تارىخ ۋە ئەنئەنىلەرنى ئۆز ئىچىگە ئالىدۇ. بۇ مەدەنىيەتنى ساقلاش ۋە كەلگۈسى ئەۋلادلارغا يەتكۈزۈش بىزنىڭ مەسئۇلىيىتىمىزدۇر.' 
                  : 'Uyghur culture encompasses a rich history and traditions spanning thousands of years. Preserving this culture and passing it on to future generations is our responsibility.'}
              </p>
              
              <div style={styles.quote}>
                <p>
                  {language === 'uyghur' 
                    ? '"بىر مىللەتنىڭ مەدەنىيىتى ئۇ مىللەتنىڭ كۆڭلىدەك، مەدەنىيىتى يوق مىللەت كۆڭلى يوق ئادەمدەك"' 
                    : '"A nation\'s culture is like its soul, a nation without culture is like a person without a soul"'}
                </p>
              </div>
              
              <h4>{language === 'uyghur' ? 'ساقلاش ئۇسۇللىرى:' : 'Preservation Methods:'}</h4>
              <div style={styles.techGrid}>
                <div style={styles.techItem}>
                  <div style={styles.techIcon}>
                    <FaLanguage />
                  </div>
                  <h4>{language === 'uyghur' ? 'تىل ساقلاش' : 'Language Preservation'}</h4>
                  <p>
                    {language === 'uyghur' 
                      ? 'ئۇيغۇر تىلىنى سانلىق ماتېرىياللار ۋە ئەپلەر ئارقىلىق ساقلاش' 
                      : 'Preserving Uyghur language through digital materials and apps'}
                  </p>
                </div>
                
                <div style={styles.techItem}>
                  <div style={styles.techIcon}>
                    <FaPhotoVideo />
                  </div>
                  <h4>{language === 'uyghur' ? 'سەنئەت خاتىرىلەش' : 'Art Documentation'}</h4>
                  <p>
                    {language === 'uyghur' 
                      ? 'ئۇيغۇر سەنئەتلىرىنى يۇقىرى سۈپەتلىك ۋىدىئو ۋە سۈرەتلەر بىلەن خاتىرىلەش' 
                      : 'Documenting Uyghur arts with high-quality videos and images'}
                  </p>
                </div>
                
                <div style={styles.techItem}>
                  <div style={styles.techIcon}>
                    <FaBookOpen />
                  </div>
                  <h4>{language === 'uyghur' ? 'ئەدەبىيات ساقلاش' : 'Literature Preservation'}</h4>
                  <p>
                    {language === 'uyghur' 
                      ? 'ئۇيغۇر ئەدەبىياتىنى سانلىق كۈتۇپخانىلار ۋە ئې-كىتابلارغا ئايلاندۇرۇش' 
                      : 'Converting Uyghur literature to digital libraries and e-books'}
                  </p>
                </div>
              </div>
              
              {/* Future Plans */}
              <h4>{language === 'uyghur' ? 'كەلگۈسى پىلانلىرىمىز:' : 'Our Future Plans:'}</h4>
              <div style={styles.steps}>
                <div style={styles.step}>
                  <div style={styles.stepNumber}>1</div>
                  <div>
                    <h5>{language === 'uyghur' ? 'ئۇيغۇر مەدەنىيەت سانلىق مۇزېيى' : 'Uyghur Culture Digital Museum'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'تارىخىي ئەسەرلەرنى سانلىق شەكىلدە كۆرسىتىدىغان ۋىرتىۇئال مۇزېي قۇرۇش' 
                        : 'Creating a virtual museum displaying historical artifacts in digital form'}
                    </p>
                  </div>
                </div>
                
                <div style={styles.step}>
                  <div style={styles.stepNumber}>2</div>
                  <div>
                    <h5>{language === 'uyghur' ? 'ئۇيغۇر تىلى ئەپلىرى' : 'Uyghur Language Apps'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'ئۇيغۇر تىلىنى ئۆگىتىش ۋە تارقىتىشقا ياردەم بېرىدىغان ئەپلەرنى ياساش' 
                        : 'Developing apps to help teach and spread the Uyghur language'}
                    </p>
                  </div>
                </div>
                
                <div style={styles.step}>
                  <div style={styles.stepNumber}>3</div>
                  <div>
                    <h5>{language === 'uyghur' ? 'ئۇيغۇر مۇزىكىسى ئارخىپى' : 'Uyghur Music Archive'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'ئەنئەنىۋى ۋە زامانىۋى ئۇيغۇر مۇزىكىلىرىنى ساقلاش ۋە تارقىتىش' 
                        : 'Preserving and distributing traditional and modern Uyghur music'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            {language === 'uyghur' ? 'خۇلاسە' : 'Conclusion'}
          </h2>
          
          <div style={styles.card}>
            <div style={styles.cardContent}>
              <h3>
                <FaGraduationCap style={{ marginLeft: '10px' }} />
                {language === 'uyghur' ? 'ئەسلىدىن دېجىتالغىچە سەپىرى' : 'The Journey From Analog to Digital'}
              </h3>
              
              <p>
                {language === 'uyghur' 
                  ? 'بىز بۇ تەدقىقاتتا فىزىكال (ماددىي)، دىجىتال (سانلىق) ۋە فىجىتال (ماددىي-سانلىق بىرلەشمە) ئۇسۇللارنىڭ ئۇيغۇر مەدەنىيىتىنى ساقلاشتىكى رولىنى تونۇشتۇردۇق.' 
                  : 'In this research, we introduced the roles of physical (material), digital (numerical), and phygital (physical-digital integration) methods in preserving Uyghur culture.'}
              </p>
              
              <div style={styles.quote}>
                <p>
                  {language === 'uyghur' 
                    ? '"مەدەنىيەت بىر دەريا، ئەنئەنىلەر ئۇنىڭ مەڭگۈلۈك ئېقىنى"' 
                    : '"Culture is a river, traditions are its eternal flow"'}
                </p>
              </div>
              
              <h4>{language === 'uyghur' ? 'ئاساسىي خۇلاسىلەر:' : 'Key Conclusions:'}</h4>
              <ul>
                <li>
                  {language === 'uyghur' 
                    ? 'فىزىكال مەدەنىيەت ئەسەرلىرى ئەڭ ئەسلىي ۋە ھەقىقىي تەجرىبە بىلەن تەمىنلەيدۇ' 
                    : 'Physical cultural artifacts provide the most authentic and genuine experience'}
                </li>
                <li>
                  {language === 'uyghur' 
                    ? 'دىجىتال تېخنىكا مەدەنىيەتنى كەڭ دائىرىدە تارقىتىش ۋە ئۇزۇن مۇددەت ساقلاش ئىمكانىيىتى بىلەن تەمىنلەيدۇ' 
                    : 'Digital technology enables wide distribution and long-term preservation of culture'}
                </li>
                <li>
                  {language === 'uyghur' 
                    ? 'فىجىتال يانداشمىلار ئىككى دۇنيانىڭ ئەڭ ياخشى تەرەپلىرىنى بىرلەشتۈرۈپ، يېڭى ۋە ئىنتېرئاكتىپ تەجرىبە يارىتىدۇ' 
                    : 'Phygital approaches combine the best of both worlds to create new and interactive experiences'}
                </li>
                <li>
                  {language === 'uyghur' 
                    ? 'ئۇيغۇر مەدەنىيىتىنى ساقلاش ئۈچۈن ھەر ئۈچ ئۇسۇلنى مۇۋازىنەتلىك قوللىنىش كېرەك' 
                    : 'Balanced use of all three methods is necessary for preserving Uyghur culture'}
                </li>
              </ul>
              
              {/* Future Recommendations */}
              <h4>{language === 'uyghur' ? 'كەلگۈسى تەكلىپلىرىمىز:' : 'Our Future Recommendations:'}</h4>
              <div style={styles.cardContainer}>
                <div style={styles.card}>
                  <div style={styles.cardContent}>
                    <h5>{language === 'uyghur' ? 'مەدەنىيەت سانلىقلاشتۇرۇش لايىھىسى' : 'Cultural Digitization Project'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'ئۇيغۇر مەدەنىيەت ئەسەرلىرىنى سىستېمىلىق سانلىقلاشتۇرۇش' 
                        : 'Systematic digitization of Uyghur cultural artifacts'}
                    </p>
                  </div>
                </div>
                
                <div style={styles.card}>
                  <div style={styles.cardContent}>
                    <h5>{language === 'uyghur' ? 'ئۇيغۇر تىلى تېخنىكىسى' : 'Uyghur Language Technology'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'ئۇيغۇر تىلى ئۈچۈن يۇقىرى سۈپەتلىك تەرجىمە ۋە تونۇش سىستېمىلىرىنى ياساش' 
                        : 'Developing high-quality translation and recognition systems for Uyghur language'}
                    </p>
                  </div>
                </div>
                
                <div style={styles.card}>
                  <div style={styles.cardContent}>
                    <h5>{language === 'uyghur' ? 'خەلقئارالىق ھەمكارلىق' : 'International Collaboration'}</h5>
                    <p>
                      {language === 'uyghur' 
                        ? 'ئۇيغۇر مەدەنىيىتىنى خەلقئارا سەۋىيىدە تونۇتۇش ۋە تەتقىق قىلىش' 
                        : 'Promoting and researching Uyghur culture at international level'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <h4>
                  {language === 'uyghur' 
                    ? 'مەدەنىيەت ساقلاش - ھەممىمىزنىڭ مەسئۇلىيىتى!' 
                    : 'Cultural Preservation - Our Collective Responsibility!'}
                </h4>
                <button 
                  style={{...styles.btn, animation: 'pulse 2s infinite'}}
                  onClick={() => alert(language === 'uyghur' ? 'رەھمەت! تېزدا ئالاقىلىشىمىز.' : 'Thank you! We will contact you soon.')}
                >
                  {language === 'uyghur' ? 'ھەمكار بولۇش' : 'Collaborate'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      
    </div>
  );
};

export default FromAnalogToDigital;
