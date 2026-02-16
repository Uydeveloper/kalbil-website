import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, Lightbulb, Users, Globe, Building, 
  Shield, Zap, Target, Cpu, Database, Lock, 
  Network, Cloud, Award, Rocket, BarChart3,
  DollarSign, Microscope, Satellite, Wifi,
  ChevronRight, ChevronLeft, Play, Pause,
  Share2, BookOpen, Download, ExternalLink
} from 'lucide-react';

const Blog28 = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [animationPlaying, setAnimationPlaying] = useState(true);
  const [readProgress, setReadProgress] = useState(0);

  // ئىستىل (Styles)
  const styles = {
    container: {
      direction: 'rtl',
      fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1rem',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      color: '#1e293b',
      minHeight: '100vh',
    },
    header: {
      textAlign: 'center',
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
      borderRadius: '1.5rem',
      marginBottom: '3rem',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(79, 70, 229, 0.3)',
    },
    title: {
      fontSize: '2.8rem',
      color: 'white',
      marginBottom: '1.5rem',
      fontWeight: 'bold',
      lineHeight: '1.3',
      textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: 'rgba(255, 255, 255, 0.9)',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    card: {
      background: 'white',
      borderRadius: '1.2rem',
      padding: '2.5rem',
      marginBottom: '2rem',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(226, 232, 240, 0.8)',
      transition: 'all 0.3s ease',
    },
    sectionTitle: {
      fontSize: '2rem',
      color: '#1e293b',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      borderBottom: '3px solid #4f46e5',
      paddingBottom: '1rem',
    },
    statCard: {
      background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
      color: 'white',
      borderRadius: '1rem',
      padding: '2rem',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 25px rgba(79, 70, 229, 0.2)',
    },
    navButton: {
      background: 'white',
      border: '2px solid #e2e8f0',
      borderRadius: '0.8rem',
      padding: '0.8rem 1.5rem',
      color: '#64748b',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
    },
    activeNavButton: {
      background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
      borderColor: '#4f46e5',
      color: 'white',
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 25px rgba(79, 70, 229, 0.2)',
    },
    button: {
      background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
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
      boxShadow: '0 8px 25px rgba(79, 70, 229, 0.3)',
    },
    progressBar: {
      height: '6px',
      background: '#e2e8f0',
      borderRadius: '3px',
      overflow: 'hidden',
      marginTop: '1rem',
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(90deg, #4f46e5, #7c3aed)',
      borderRadius: '3px',
      transition: 'width 0.5s ease',
    },
  };

  // ئوقۇش تەرەققىياتى
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadProgress(progress > 100 ? 100 : progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // تارقىتىش فۇنكسىيەسى
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'تۈركىيەنىڭ QKD مۇۋەپپەقىيىتى ۋە كۋانت تېخنىكىسى',
        text: 'كۋانت شىفىرلاش تېخنىكىسىنىڭ ئەمەلىي قوللىنىلىشى ھەققىدە',
        url: window.location.href
      });
    } else {
      alert('تارقىتىش ئىقتىدارى قوللىنىلمايدۇ. ئۇلىنىشنى كۆچۈرۈڭ.');
    }
  };

  // سانلىق مەلۇماتلار
  const marketData = [
    { label: 'IonQ پاي باھاسى (1 يىل)', value: '175%', icon: <TrendingUp size={20} /> },
    { label: 'IonQ پاي باھاسى (6 ئاي)', value: '296%', icon: <Rocket size={20} /> },
    { label: 'Arqit پاي باھاسى (بىر كۈن)', value: '20%', icon: <Zap size={20} /> },
    { label: 'QKD بازارى 2030', value: '2.63B$', icon: <DollarSign size={20} /> },
  ];

  const companies = [
    { name: 'Turkcell', role: 'تېلېكوم شىركىتى', color: '#ef4444' },
    { name: 'ID Quantique', role: 'كۋانت شىفىرلاش', color: '#3b82f6' },
    { name: 'IonQ', role: 'كۋانت كومپيۇتېر', color: '#8b5cf6' },
    { name: 'Arqit', role: 'سۈنئىي ھەمراھ', color: '#10b981' },
    { name: 'Nokia', role: 'PQC ھەمكارلىشىش', color: '#f59e0b' },
    { name: 'Toshiba', role: 'QKD رىقابەتچىسى', color: '#ec4899' },
  ];

  const timelineEvents = [
    { date: '2025-يىلى 2-ئاي', event: 'Turkcell & IDQ QKD تەجرىبىسى', icon: <Satellite size={16} /> },
    { date: '2025-يىلى 25-فېۋرال', event: 'IonQ پاي باھاسى چۈشۈش', icon: <BarChart3 size={16} /> },
    { date: '2025-يىلى 26-فېۋرال', event: 'بازار تىنچلىنىش', icon: <Target size={16} /> },
    { date: '2030-يىلى', event: 'QKD بازارى 2.63B$', icon: <Globe size={16} /> },
  ];

  return (
    <div style={styles.container}>
      {/* باش بەت */}
      <header style={styles.header}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          zIndex: 0,
        }} />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={styles.title}>
            <Shield size={48} style={{ display: 'inline-block', marginLeft: '1rem' }} />
            تۈركىيەنىڭ مۇۋەپپەقىيەتلىك QKD تەجرىبىسى
            <br />
            كۋانت تېخنىكىسى شىركەتلىرىگە تەسىرى
          </h1>
          <p style={styles.subtitle}>
            2025-يىلى 2-ئاينىڭ ئاخىرىدا، تۈركىيەنىڭ Turkcell شىركىتى ۋە ID Quantique شىركىتى ئىستانبۇلدا
            دۇنيانىڭ تۇنجى قىتئەلەر ئارا كۋانت ئاچقۇچ تارقىتىش (QKD) نى مۇۋەپپەقىيەتلىك كۆرسەتتى.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '2rem',
            flexWrap: 'wrap',
          }}>
            <button 
              style={styles.button}
              onClick={() => setActiveSection('introduction')}
            >
              <BookOpen size={20} />
              باشلاش
            </button>
            <button 
              style={{
                ...styles.button,
                background: 'linear-gradient(135deg, #10b981, #059669)'
              }}
              onClick={handleShare}
            >
              <Share2 size={20} />
              تارقىتىش
            </button>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* ئوقۇش تەرەققىياتى */}
        <div style={{
          background: 'white',
          borderRadius: '1rem',
          padding: '1.5rem',
          marginBottom: '2rem',
          boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ color: '#0068faff', fontSize: '1.5rem', fontWeight: 'bold' }}>ئوقۇش تەرەققىياتى</span>
            <span style={{ color: '#1004f9ff', fontWeight: 'bold' }}>{Math.round(readProgress)}%</span>
          </div>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: `${readProgress}%` }} />
          </div>
        </div>

        {/* نەۋىگاتسىيە بۇتۇنلىرى */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          overflowX: 'auto',
          paddingBottom: '1rem',
          marginBottom: '2rem',
          scrollbarWidth: 'thin',
          fontSize: '1.5rem',
        }}>
          {[
            { id: 'introduction', label: 'باشلاش', icon: <BookOpen size={20} /> },
            { id: 'market', label: 'بازار تەسىرى', icon: <TrendingUp size={20} /> },
            { id: 'technology', label: 'تېخنىكا تەرەققىياتى', icon: <Lightbulb size={20} /> },
            { id: 'competition', label: 'رىقابەت ۋە ھەمكارلىق', icon: <Users size={20} /> },
            { id: 'conclusion', label: 'خۇلاسە', icon: <Globe size={20} /> },
          ].map(section => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                ...styles.navButton,
                ...(activeSection === section.id && styles.activeNavButton),
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {section.icon}
              {section.label}
            </button>
          ))}
        </div>

        {/* سانلىق مەلۇمات پانېلى */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          {marketData.map((item, index) => (
            <div key={index} style={styles.statCard}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {item.value}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                {item.icon}
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* باشلاش بۆلۈمى */}
        <section id="introduction" style={styles.card}>
          <h2 style={styles.sectionTitle}>
            <Shield size={32} color="#4f46e5" />
            كۋانت شىفىرلاشنىڭ ئەمەلىي قوللىنىلىشى
          </h2>
          
          <div style={{ lineHeight: '1.8', fontSize: '1.4rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              2025-يىلى 2-ئاينىڭ ئاخىرىدا، تۈركىيەنىڭ چوڭ تېلېكوممۇنىكاتسىيە شىركىتى <strong style={{ color: '#4f46e5' }}>Turkcell</strong> ۋە 
              شىۋىتسارىيەنىڭ <strong style={{ color: '#4f46e5' }}>ID Quantique (IDQ)</strong> شىركىتى ئىستانبۇلدا دۇنيادىكى تۇنجى 
              قىتئەلەر ئارا <strong style={{ color: '#4f46e5' }}>كۋانت ئاچقۇچ تارقىتىش</strong> (QKD) نى مۇۋەپپەقىيەتلىك كۆرسەتتى.
            </p>
            
            <div style={{
              background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.05), rgba(124, 58, 237, 0.05))',
              padding: '1.5rem',
              borderRadius: '1rem',
              borderRight: '4px solid #4f46e5',
              marginBottom: '1.5rem',
            }}>
              <p style={{ margin: 0, color: '#1900feff', fontSize: '1.5rem' }}>
                بۇ تەجرىبە ياۋروپا بىلەن ئاسىيانى ئوپتىكىلىق تالا ئارقىلىق تۇتاشتۇرۇپ، كۋانت شىفىرلاش تېخنىكىسىنى 
                ھەقىقىي دۇنيادىكى ئالاقە تورىغا بىرلەشتۈرگەنلىكىنى نامايان قىلدى.
              </p>
            </div>
            
            <p>
              بۇ مۇۋەپپەقىيەت كۋانت تېخنىكىسى كەسپىدە دولقۇنلۇق تەسىر پەيدا قىلىپ، مۇناسىۋەتلىك شىركەتلەرنىڭ 
              بازار باھاسى، تېخنىكىلىق تەرەققىياتى ۋە رىقابەت مۇھىتىغا چوڭ تەسىر كۆرسىتتى.
            </p>
          </div>
        </section>

        {/* شىركەتلەر تونۇشتۇرۇش */}
        <div style={{
          ...styles.card,
          background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
        }}>
          <h3 style={{
            fontSize: '1.7rem',
            color: '#1e293b',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
          }}>
            <Users size={24} color="#4f46e5" />
            مۇناسىۋەتلىك شىركەتلەر
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',fontSize: '1.5rem',
            
          }}>
            {companies.map((company, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '0.8rem',
                  padding: '1.2rem',
                  textAlign: 'center',
                  border: `2px solid ${company.color}`,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 10px 25px ${company.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: company.color,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}>
                  {company.name.charAt(0)}
                </div>
                <div style={{ fontWeight: 'bold', color: '#1e293b' }}>
                  {company.name}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.3rem' }}>
                  {company.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* بازار تەسىرى بۆلۈمى */}
        <section id="market" style={styles.card}>
          <h2 style={styles.sectionTitle}>
            <TrendingUp size={32} color="#4f46e5" />
            1. بازار يۈزلىنىشى ۋە پاي باھاسىغا بولغان تەسىر
          </h2>
          
          <div style={{ lineHeight: '1.8' }}>
            <p style={{ marginBottom: '1.5rem' ,fontSize: '1.5rem'}}>
              تۈركىيەدىكى QKD نىڭ مۇۋەپپەقىيىتى، كۋانت شىفىرلاش تېخنىكىسىنىڭ ئەمەلىي قوللىنىلىشنى راستلاپ، 
              مەبلەغ سالغۇچىلارنىڭ قىزىقىشىنى كۈچەيتتى.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              margin: '2rem 0',
              fontSize: '1.5rem',
            }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(239, 68, 68, 0.1))',
                padding: '1.5rem',
                borderRadius: '1rem',
                borderRight: '4px solid #ef4444',
              }}>
                <h4 style={{ color: '#ef4444', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Zap size={20} />
                  IonQ مۇۋەپپەقىيىتى
                </h4>
                <p style={{ margin: 0, color: '#475569' }}>
                  ئۆتكەن بىر يىلدا <strong>%175</strong>، ئۆتكەن ئالتە ئايدا <strong>%296</strong> ئۆستى. 
                  ID Quantique نى <strong>250 مىليون دوللار</strong>غا سېتىۋېلىش سۆھبىتى.
                </p>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.1))',
                padding: '1.5rem',
                borderRadius: '1rem',
                borderRight: '4px solid #10b981',
              }}>
                <h4 style={{ color: '#10b981', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Target size={20} />
                  Arqit پاي باھاسى
                </h4>
                <p style={{ margin: 0, color: '#475569' }}>
                  2025-يىلى يانۋاردا بىر كۈندە <strong>%20</strong> ئۆرلەپ، مىكروسوفت ۋە NVIDIA نىڭ 
                  كۋانت بىخەتەرلىك پىلانىدىن كېيىن مەبلەغ سېلىش مىقدارىنىڭ زور ئېقىشى.
                </p>
              </div>
            </div>
            
            <div style={{
              background: 'rgba(245, 158, 11, 0.05)',
              padding: '1.5rem',
              borderRadius: '1rem',
              marginTop: '1.5rem',
              border: '1px solid rgba(245, 158, 11, 0.2)',
            }}>
              <h4 style={{ color: '#f59e0b', marginBottom: '0.8rem' }}>
                ⚠️ قىسقا مۇددەتلىك تەۋرىنىش:
              </h4>
              <p style={{ margin: 0, color: '#475569' }}>
                2025-يىلى 25-فېۋرالدا IonQ نىڭ پاي باھاسى <strong>31.24 دوللاردىن 28.12 دوللار</strong>غا 
                (تەخمىنەن %7.8) چۈشتى. 26-كۈنى باھا <strong>%3.5</strong> ئۆرلەپ، تىنچلاندى — 
                بۇ مەبلەغ سالغۇچىلارنىڭ كۋانت كەسىپىگە بولغان ئۇزۇن مۇددەتلىك ئۈمىدىنى كۆرسىتىدۇ.
              </p>
            </div>
          </div>
        </section>

        {/* ۋاقىت جەدۋىلى */}
        <div style={{
          ...styles.card,
          background: 'linear-gradient(135deg, #1e293b, #0f172a)',
          color: 'white',
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            color: 'white',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
          }}>
            <Microscope size={24} color="#8b5cf6" />
            تارىخىي ۋەقەلەر ۋاقىت جەدۋىلى
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '0.8rem',
                  borderRight: '3px solid #8b5cf6',
                }}
              >
                <div style={{
                  background: '#8b5cf6',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {event.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', color: '#e2e8f0' }}>{event.date}</div>
                  <div style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>{event.event}</div>
                </div>
                <ChevronLeft size={20} color="#8b5cf6" />
              </div>
            ))}
          </div>
        </div>

        {/* تېخنىكا تەرەققىياتى بۆلۈمى */}
        <section id="technology" style={styles.card}>
          <h2 style={styles.sectionTitle}>
            <Lightbulb size={32} color="#4f46e5" />
            2. تېخنىكا تەرەققىياتىنى تېزلىتىش
          </h2>
          
          <div style={{ lineHeight: '1.8' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              ئىستانبۇلدىكى بۇ تەجرىبە كۋانت شىفىرلاشنىڭ تەجرىبىخانىدىن ھالقىپ، 
              <strong style={{ color: '#4f46e5' }}> ھەقىقىي ئالاقە تورى</strong> ئىچىدە خىزمەت قىلالايدىغانلىقىنى دەلىللەيدۇ.
            </p>
            
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(59, 130, 246, 0.1))',
              padding: '1.5rem',
              borderRadius: '1rem',
              marginBottom: '1.5rem',
              borderRight: '4px solid #3b82f6',
            }}>
              <h4 style={{ color: '#3b82f6', marginBottom: '0.8rem' }}>
                📊 بازار كۆلىمى ۋە مەبلەغ سېلىش:
              </h4>
              <p style={{ margin: 0, color: '#475569' }}>
                دۇنياۋى QKD بازىرى 2024-يىلى <strong>480 مىليون دوللار</strong>دىن باشلاپ، 
                2030-يىلغا بارغاندا <strong>2.63 مىليارد دوللار</strong>غا يېتىشى مۆلچەرلەنمەكتە 
                (يىللىق ئۆسۈش نىسبىتى %32.6).
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem',
              margin: '2rem 0',
            }}>
              <div style={{
                background: 'white',
                padding: '1.2rem',
                borderRadius: '0.8rem',
                border: '2px solid #e2e8f0',
              }}>
                <h4 style={{ color: '#1e293b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Network size={18} />
                  ئۇزۇن مۇساپىلىك QKD
                </h4>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>
                  كۋانت تەكرارلىغۇچ تېخنىكىسى ۋە كۆپ تەرەپلىمە ئۇلاش (WDM) كېرەك
                </p>
              </div>
              
              <div style={{
                background: 'white',
                padding: '1.2rem',
                borderRadius: '0.8rem',
                border: '2px solid #e2e8f0',
              }}>
                <h4 style={{ color: '#1e293b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Cloud size={18} />
                  سۈنئىي ھەمراھ
                </h4>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>
                  جۇڭگو «Moczi» ۋە Arqit نىڭ ئاسمان-يەر بىرلەشمە تورى
                </p>
              </div>
              
              <div style={{
                background: 'white',
                padding: '1.2rem',
                borderRadius: '0.8rem',
                border: '2px solid #e2e8f0',
              }}>
                <h4 style={{ color: '#1e293b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Wifi size={18} />
                  قوللىنىش دائىرىسى
                </h4>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>
                  HSBC چەتئەل پۇل سودىسى، Yaۋروپا EuroQCI، ياپونىيە تورى
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* خۇلاسە بۆلۈمى */}
        <section id="conclusion" style={{
          ...styles.card,
          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.05), rgba(124, 58, 237, 0.05))',
          borderColor: '#4f46e5',
        }}>
          <h2 style={styles.sectionTitle}>
            <Globe size={32} color="#4f46e5" />
            خۇلاسە
          </h2>
          
          <div style={{ lineHeight: '1.8', fontSize: '1.3rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              تۈركىيەنىڭ QKD مۇۋەپپەقىيىتى — مەبلەغ سېلىش ئىقتىدارىنى ئاشۇرغان، 
              كەسىپ تەرەققىياتىنى تېزلىتىشىدەك، كۋانت بىخەتەرلىك ساھەسىنى 
              <strong style={{ color: '#4f46e5' }}> «تەجرىبىخانىدىن سودا بازارىغا»</strong> ئاتلاشنىڭ بەلگىسى بولۇپ ھېسابلىنىدۇ.
            </p>
            
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '1rem',
              marginBottom: '1.5rem',
              border: '2px solid #4f46e5',
            }}>
              <p style={{ margin: 0, fontSize: '1.5rem', color: '#000dfaff', fontStyle: 'italic' }}>
                "يەنە بىر سۆز بىلەن ئېيتقاندا، تۈركىيەدىكى بۇ يەتكۈزۈش — 
                كۋانت شىفىرلاش دەۋرىنىڭ رەسمىي باشلىنىشىنى بىلدۈرىدۇ."
              </p>
            </div>
            
            <p>
              كېلگۈسىدە، تېلېكوم شىركەتلىرى، ھۆكۈمەتلەر ۋە خۇسۇسىي ساھەلەر 
              كۋانت تېخنىكىسىنى قوبۇل قىلىش ئۈچۈن بىرلىكتە ئىشلىشى كېرەك. 
              رىقابەت ۋە ھەمكارلىقنىڭ بىرلىككە كىرىشىشى — 
              كۋانت ئىنقىلابىنىڭ ئاساسىي خۇسۇسىيىتى بولۇشى مۇمكىن.
            </p>
          </div>
        </section>

        {/* ئاخىرقى ئۇچۇر */}
        <footer style={{
          textAlign: 'center',
          padding: '2rem 1rem',
          marginTop: '3rem',
          borderTop: '1px solid #e2e8f0',
          color: '#64748b',
          fontSize: '0.9rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <button 
              style={{ 
                ...styles.button,
                padding: '0.8rem 1.5rem',
                fontSize: '0.9rem',
              }}
              onClick={handleShare}
            >
              <Share2 size={16} />
              تارقىتىش
            </button>
            <button 
              style={{ 
                ...styles.button,
                padding: '0.8rem 1.5rem',
                fontSize: '0.9rem',
                background: 'linear-gradient(135deg, #10b981, #059669)'
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ChevronRight size={16} />
              يۇقىرىغا قايتىش
            </button>
          </div>
          
          <p style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: '#1e293b' }}>© 2025 — كۋانت نەزەرىيىسى ئۈگەنگۈچى</strong>
          </p>
          <p style={{ margin: 0 }}>
            بۇ ماقالە يېزىلىۋاتقان ۋاقىتتا ئەڭ يېڭى ئۇچۇرلارغا ئاساسلانغان بولۇپ، 
            كۋانت تېخنىكىسى ساھەسىدىكى تېز تەرەققىياتنى ئەكىس ئەتتۈرىدۇ.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Blog28;