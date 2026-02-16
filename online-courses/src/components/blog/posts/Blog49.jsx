// src/components/Blog49.jsx
import React, { useState } from 'react';

const Blog49 = () => {
  const [activeTab, setActiveTab] = useState('01');
  
  // تېكىست بەلگىسى (tab) لىرى
  const tabs = [
    { id: '01', title: 'ئاساسىي ئۇقۇملار', emoji: '🧠' },
    { id: '02', title: 'ئارىفمېتىك', emoji: '➗' },
    { id: '03', title: 'ئالگېبرا', emoji: '𝑥' },
    { id: '04', title: 'يىغىندى Σ', emoji: '∑' },
    { id: '05', title: 'ئارىلىق', emoji: '📏' },
    { id: '06', title: 'دىففېرېنسىئاللاش', emoji: '𝑑' },
    { id: '07', title: 'قىسمەن دىففېرېنسىئاللاش', emoji: '∂' },
    { id: '08', title: 'ۋېكتور', emoji: '➤' },
    { id: '09', title: 'ماترىتسا', emoji: '⊞' },
    { id: '10', title: 'ئېھتىماللىق', emoji: '🎲' },
    { id: '11', title: 'لوگارىفم', emoji: '𝑒' },
    { id: '12', title: 'نۆل', emoji: '0️⃣' },
    { id: '13', title: 'ئېنىقلىغۇچىلار', emoji: 'det' },
    { id: '14', title: 'ئۆزلۈك قىممەتلىرى', emoji: 'λ' },
    { id: '15', title: 'خۇلاسە', emoji: '🚀' }
  ];
  
  // CSS ئۇسلۇبلىرى ئوبيېكت شەكلىدە
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #ffffff, #f0f9ff)',
      padding: '1rem',
      direction: 'rtl',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
      position: 'relative',
      width: '100%',
      height: '280px',
      overflow: 'hidden',
      borderRadius: '1rem',
      marginBottom: '2rem',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #ec4899 100%)'
    },
    mathBackground: {
      position: 'absolute',
      inset: '0',
      opacity: '0.1',
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm0-10c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
    },
    headerContent: {
      position: 'relative',
      zIndex: '10',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      padding: '1.5rem',
      textAlign: 'center'
    },
    title: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      fontFamily: '\'UKIJ Tuz\', sans-serif',
      lineHeight: '1.2'
    },
    gradientText: {
      background: 'linear-gradient(45deg, #93c5fd, #c4b5fd)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    tabContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '2rem',
      justifyContent: 'center'
    },
    activeTab: {
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      color: 'white',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
    },
    inactiveTab: {
      background: 'white',
      color: '#4b5563',
      borderColor: '#e5e7eb'
    },
    contentCard: {
      background: 'white',
      borderRadius: '1rem',
      padding: '1.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      marginBottom: '1.5rem',
      border: '1px solid #e5e7eb'
    },
    formulaBox: {
      background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
      borderRadius: '0.75rem',
      padding: '1rem',
      margin: '1rem 0',
      border: '2px solid #bfdbfe',
      textAlign: 'center'
    },
    formulaText: {
      fontFamily: '\'Courier New\', monospace',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#1e40af',
      marginBottom: '0.5rem'
    },
    infoBox: {
      background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
      borderLeft: '4px solid #0ea5e9',
      borderRadius: '0.5rem',
      padding: '1rem',
      margin: '1rem 0'
    },
    warningBox: {
      background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
      borderLeft: '4px solid #f59e0b',
      borderRadius: '0.5rem',
      padding: '1rem',
      margin: '1rem 0'
    },
    uyghurText: {
      fontFamily: '\'UKIJ Nasq\', sans-serif',
      lineHeight: '1.6',
      color: '#4b5563'
    },
    uyghurTitle: {
      fontFamily: '\'UKIJ Tuz\', sans-serif',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    footer: {
      marginTop: '3rem',
      paddingTop: '1.5rem',
      borderTop: '2px solid #e5e7eb',
      textAlign: 'center'
    },
    emojiGrid: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.75rem',
      marginBottom: '1rem'
    }
  };
  
  // ئانىماتسىيە ئۇسلۇبلىرى
  const getSymbolStyle = (index) => ({
    position: 'absolute',
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: '2rem',
    animation: `float 6s ease-in-out infinite ${index * 0.3}s`,
    left: `${Math.random() * 90}%`,
    top: `${Math.random() * 90}%`
  });
  
  const getBounceEmojiStyle = (index) => ({
    animation: `bounce 2s infinite ${index * 0.2}s`,
    fontSize: '1.5rem'
  });
  
  const getTabButtonStyle = (isActive) => ({
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    fontWeight: '600',
    fontSize: '0.875rem',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    border: '2px solid transparent',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: '\'UKIJ Tuz\', sans-serif',
    ...(isActive ? styles.activeTab : styles.inactiveTab)
  });
  
  // ھەر بىر تېكىست بەلگىسى (tab) نىڭ مەزمۇنى
  const tabContents = {
    '01': {
      title: 'AI ماتېماتىكىسىنىڭ ئاساسىي قۇرۇلمىسى',
      content: (
        <div>
          <div style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937'}}>
            ماشىنا ئۆگىنىش ماتېماتىكىسى
          </div>
          
          <div style={styles.uyghurText}>
            <p style={{marginBottom: '1rem'}}>
              <strong>ماشىنا ئۆگىنىش</strong> سانلىق مەلۇماتلاردىن ئۆگىنىش ۋە قارار چىقىرىش ئۈچۈن ماتېماتىكا ۋە ستاتىستىكانى قوللىنىدىغان كۆپ قاتلاملىق سىستېما. 
              بۇ سىستېمىلارنىڭ بارلىق ھېسابلاشلىرى، ئۆگىنىشى ۋە ئىنفېرانسى ماتېماتىكىغا تايىنىدۇ.
            </p>
            
            <div style={styles.infoBox}>
              <div style={styles.uyghurTitle}>💡 مۇھىم چۈشەنچە</div>
              <div style={styles.uyghurText}>
                ماشىنا ئۆگىنىش ماتېماتىكىسى يېڭى ماتېماتىكا ئەمەس، بەلكى مەۋجۇت ماتېماتىكىنىڭ ئەقىللىق قوللىنىشىدۇر.
              </div>
            </div>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem'}}>
              <div style={{backgroundColor: '#f3f4f6', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🔢</div>
                <div style={styles.uyghurTitle}>سان-سىفىرلار</div>
                <div style={{...styles.uyghurText, fontSize: '0.875rem'}}>بارلىق ھېسابلاشلارنىڭ ئاساسى</div>
              </div>
              
              <div style={{backgroundColor: '#f3f4f6', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>📈</div>
                <div style={styles.uyghurTitle}>فۇنكسىيەلەر</div>
                <div style={{...styles.uyghurText, fontSize: '0.875rem'}}>كىرىش ۋە چىقىش مۇناسىۋىتى</div>
              </div>
              
              <div style={{backgroundColor: '#f3f4f6', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🎯</div>
                <div style={styles.uyghurTitle}>مېترىكىلار</div>
                <div style={{...styles.uyghurText, fontSize: '0.875rem'}}>مودېل ئۈنۈمىنى باھالىغۇچىلار</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    '02': {
      title: 'ئارىفمېتىك ھەرىكەتلەر',
      content: (
        <div>
          <div style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937'}}>
            بارلىق ھېسابلاشلارنىڭ ئانىسى
          </div>
          
          <div style={styles.uyghurText}>
            <p style={{marginBottom: '1rem'}}>
              <strong>قوشۇش، ئېلىش، كۆپەيتىش ۋە بۆلۈش</strong> - بۇ تۆت ئاساسىي ھېسابلاشلار 
              بارلىق مۇرەككەپ ماتېماتىكىلىق ھېسابلاشلارنىڭ ئاساسىنى تەشكىل قىلىدۇ.
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '1.5rem'}}>
              <div style={styles.formulaBox}>
                <div style={styles.formulaText}>a + b = c</div>
                <div style={styles.uyghurText}>قوشۇش - مەلۇماتلارنى بىرلەشتۈرۈش</div>
              </div>
              
              <div style={{...styles.formulaBox, background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', borderColor: '#86efac'}}>
                <div style={{...styles.formulaText, color: '#166534'}}>a × b = c</div>
                <div style={styles.uyghurText}>كۆپەيتىش - مەلۇماتنى كۆپەيتىش</div>
              </div>
              
              <div style={{...styles.formulaBox, background: 'linear-gradient(135deg, #faf5ff, #f3e8ff)', borderColor: '#d8b4fe'}}>
                <div style={{...styles.formulaText, color: '#7c3aed'}}>a ÷ b = c</div>
                <div style={styles.uyghurText}>بۆلۈش - مەلۇماتنى تەقسىملەش</div>
              </div>
            </div>
            
            <div style={styles.warningBox}>
              <div style={styles.uyghurTitle}>⚠️ ئەسكەرتىش</div>
              <div style={styles.uyghurText}>
                مۇرەككەپ دىففېرېنسىئاللاش ۋە ئىنتېگراللاشتىكى ھېسابلاشلارمۇ ئاخىرىدا 
                بۇ تۆت ئاساسىي ھېسابلاشقا كېلىپ چىقىدۇ.
              </div>
            </div>
            
            <div style={{backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '0.75rem', marginTop: '1.5rem'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
                <span style={{color: '#10b981', fontSize: '1.25rem'}}>📈</span>
                <div style={styles.uyghurTitle}>ئەمەلىي مىسال: خەتەر پەرزېنتى</div>
              </div>
              
              <div style={{backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span style={styles.uyghurText}>جەمئىي قىممەت:</span>
                  <span style={{fontWeight: 'bold', color: '#3b82f6'}}>100,000 ₩</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span style={styles.uyghurText}>ئېرىشىش مىقدارى:</span>
                  <span style={{fontWeight: 'bold', color: '#10b981'}}>+15,000 ₩</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: '#fef3c7', borderRadius: '0.5rem'}}>
                  <span style={{...styles.uyghurText, fontWeight: 'bold'}}>ئۆسۈش پەرزېنتى:</span>
                  <span style={{fontWeight: 'bold', fontSize: '1.125rem', color: '#166534'}}>15%</span>
                </div>
                <div style={{marginTop: '0.75rem', padding: '0.5rem', backgroundColor: '#f3f4f6', borderRadius: '0.375rem'}}>
                  <span style={{...styles.uyghurText, fontSize: '0.875rem'}}>
                    <strong>ھېسابلاش:</strong> (15,000 ÷ 100,000) × 100 = 15%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    '03': {
      title: 'ئالگېبرا ۋە ئىندېكسلار',
      content: (
        <div>
          <div style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937'}}>
            ئالگېبرالىق ئىپادىلەر
          </div>
          
          <div style={styles.uyghurText}>
            <p style={{marginBottom: '1rem'}}>
              <strong>ئالگېبرا ئىپادىلىرى</strong> ئادەتتىكى سانلارنى ئىپادىلەش ئۈچۈن ئىشلىتىلىدۇ. 
              تەقسىملەش قانۇنى ۋە كۋادرات فورمۇلاسى ئالگېبرا ئىپادىلىرىنى ھېسابلاشتا پايدىلىق.
            </p>
            
            <div style={styles.formulaBox}>
              <div style={styles.formulaText}>x₁, x₂, x₃</div>
              <div style={styles.uyghurText}>ئاستىنقى كۆرسەتكۈچلەر - سانلىق مەلۇماتلارنى پەرقلەندۈرۈش</div>
            </div>
            
            <div style={{...styles.formulaBox, background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', borderColor: '#86efac'}}>
              <div style={{...styles.formulaText, color: '#166534'}}>a(b + c) = ab + ac</div>
              <div style={styles.uyghurText}>تەقسىملەش قانۇنى - كۆپەيتىشنى تارقىتىش</div>
            </div>
            
            <div style={{...styles.formulaBox, background: 'linear-gradient(135deg, #faf5ff, #f3e8ff)', borderColor: '#d8b4fe'}}>
              <div style={{...styles.formulaText, color: '#7c3aed'}}>(a + b)² = a² + 2ab + b²</div>
              <div style={styles.uyghurText}>كۋادرات كېڭەيتىش فورمۇلاسى</div>
            </div>
            
            <div style={styles.infoBox}>
              <div style={styles.uyghurTitle}>📝 قوشۇمچە ئۇچۇر</div>
              <div style={styles.uyghurText}>
                ئاستىنقى كۆرسەتكۈچلەر (x₁, x₂ قاتارلىق كىچىك سانلار) كۆپ مىقداردىكى 
                سانلىق مەلۇماتلار بىلەن ئىش قىلغاندا، ھەر بىر سانلىق مەلۇماتنى 
                پەرقلەندۈرۈش ئۈچۈن ئىشلىتىلىدۇ.
              </div>
            </div>
          </div>
        </div>
      )
    },
    '04': {
      title: 'يىغىندى (Σ) سىگما',
      content: (
        <div>
          <div style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937'}}>
            سىگما بەلگىسى
          </div>
          
          <div style={styles.uyghurText}>
            <p style={{marginBottom: '1rem'}}>
              <strong>Σ (سىگما)</strong> نۇرغۇن سانلارنىڭ قوشۇلۇشىنى ئىپادىلەيدىغان بىر سىمۋول. 
              Σ «ھەممىنى قوشۇش» دېگەن مەنىنى بىلدۈرىدۇ ۋە ماشىنا ئۆگىنىش ھېسابلاشلىرىدا كۆپ ئۇچرايدۇ.
            </p>
            
            <div style={{textAlign: 'center', margin: '2rem 0'}}>
              <div style={{fontSize: '3rem', color: '#3b82f6', marginBottom: '1rem'}}>∑</div>
              <div style={{...styles.formulaText, fontSize: '1.5rem'}}>∑ᵢ₌₁ⁿ xᵢ = x₁ + x₂ + ... + xₙ</div>
            </div>
            
            <div style={{backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '0.75rem'}}>
              <div style={styles.uyghurTitle}>ئەمەلىي قوللىنىشى:</div>
              <div style={styles.uyghurText}>
                <ul style={{paddingRight: '1.5rem', marginTop: '0.5rem'}}>
                  <li>تاللانما ئوتتۇرىسىنى ھېسابلاش</li>
                  <li>كىممەت فۇنكسىيەسىنى ھېسابلاش</li>
                  <li>ماترىتسا كۆپەيتىلمىسى</li>
                  <li>خاتالىق ھېسابلاش</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    '15': {
      title: 'خۇلاسە ۋە كەلگۈسىي پىكىرلەر',
      content: (
        <div>
          <div style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937'}}>
            ماتېماتىكا - سۇنئىي ئەقىلنىڭ كۈچ مەنبەسى
          </div>
          
          <div style={styles.uyghurText}>
            <div style={{backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '1rem', marginBottom: '1.5rem'}}>
              <div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>✨</div>
                <div style={{...styles.uyghurTitle, fontSize: '1.125rem'}}>
                  ماشىنا ئۆگىنىش ماتېماتىكىسى
                </div>
              </div>
              
              <p style={{marginBottom: '1rem', textAlign: 'center'}}>
                ماشىنا ئۆگىنىش ماتېماتىكىسى پەقەت ھېسابلاش ئەمەس، 
                بەلكى دۇنيانى چۈشىنىش ۋە ئۇنىڭغا ماسلىشىش ئۇسۇلىدۇر. 
                ئەڭ مۇرەككەپ نېرۋا تورى مودېللىرىمۇ ئاساسىي ماتېماتىكىلىق 
                پرىنسىپلارغا تايىنىدۇ.
              </p>
            </div>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem'}}>
              <div style={{backgroundColor: '#fef3c7', padding: '1rem', borderRadius: '0.75rem'}}>
                <div style={{...styles.uyghurTitle, color: '#92400e'}}>🚀 كەلگۈسىي يۆنىلىشلەر</div>
                <div style={{...styles.uyghurText, fontSize: '0.875rem', marginTop: '0.5rem'}}>
                  • كوانت كۆپەيتىلگەن ماشىنا ئۆگىنىش<br/>
                  • بىئولوگىيەلىك ئىلھاملانغان مودېللار<br/>
                  • ئۆزىنى ئۆزى تەرەققىي قىلدۇرىدىغان AI<br/>
                  • ئۆزىنى تۈزىتىدىغان ئالگورىزىملار
                </div>
              </div>
              
              <div style={{backgroundColor: '#dbeafe', padding: '1rem', borderRadius: '0.75rem'}}>
                <div style={{...styles.uyghurTitle, color: '#1e40af'}}>📚 تەشەببۇسلىرىمىز</div>
                <div style={{...styles.uyghurText, fontSize: '0.875rem', marginTop: '0.5rem'}}>
                  • ماتېماتىكىنى ئۆگىنىشنى داۋاملاشتۇرۇڭ<br/>
                  • ئەمەلىي پروگراممىلاشتا تەجرىبە توپلاڭ<br/>
                  • ئىلمىي ماقالىلەرنى ئوقۇشنى مەدەت قىلىڭ<br/>
                  • ئەمەلىي تەتقىقات پروژىلىرى بىلەن شۇغۇللىنىڭ
                </div>
              </div>
            </div>
            
            <div style={{textAlign: 'center', marginTop: '2rem'}}>
              <button 
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                  marginBottom: '1rem'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                ماتېماتىكا بىلەن كەلگۈسىنى قۇرۇش 🚀
              </button>
            </div>
          </div>
        </div>
      )
    }
  };
  
  // ماتېماتىكا سىمۋوللىرى ئارقا فوندىغا
  const mathSymbols = ['∑', '∫', '∂', '∇', 'σ', 'π', 'λ', '∞', '≠', '≈', '→', '×', '√', '±', '∠', '⊥', '∥', '≡'];
  
  return (
    <div style={styles.container}>
      {/* CSS ئانىماتسىيەلىرى */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(5deg); }
            66% { transform: translateY(5px) rotate(-5deg); }
          }
          
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}
      </style>
      
      {/* باش قىسىم */}
      <div style={styles.header}>
        <div style={styles.mathBackground}></div>
        
        {mathSymbols.map((symbol, i) => (
          <div 
            key={i}
            style={getSymbolStyle(i)}
          >
            {symbol}
          </div>
        ))}
        
        <div style={styles.headerContent}>
          <div style={styles.emojiGrid}>
            {['🧠', '🔢', '🤖', '⚡'].map((emoji, i) => (
              <div 
                key={i}
                style={getBounceEmojiStyle(i)}
              >
                {emoji}
              </div>
            ))}
          </div>
          
          <h1 style={styles.title}>
            <span style={styles.gradientText}>ماشىنا ئۆگىنىش ماتېماتىكىسى</span>
            <br />
            <span style={{fontSize: '1.5rem'}}>ئىنقىلابىي AI نىڭ سىرى</span>
          </h1>
          
          <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '0.5rem 1rem', borderRadius: '9999px'}}>
              <span style={{color: '#fbbf24'}}>✨</span>
              <span style={{fontFamily: "'UKIJ Nasq', sans-serif", fontSize: '0.875rem'}}>smz.03.07</span>
            </div>
            <div style={{width: '4px', height: '4px', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '50%'}}></div>
            <div style={{fontFamily: "'UKIJ Nasq', sans-serif", fontSize: '0.875rem', opacity: '0.9'}}>2025-يىلى 5-ئاينىڭ 28-كۈنى</div>
          </div>
          
          <div style={{position: 'absolute', bottom: '0', left: '0', right: '0', height: '60px', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)'}}></div>
        </div>
      </div>
      
      {/* كىرىش سۆز */}
      <div style={{textAlign: 'center', marginBottom: '2rem'}}>
        <div style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'linear-gradient(90deg, #dbeafe, #e0f2fe)', borderRadius: '9999px', border: '1px solid #bfdbfe', marginBottom: '1rem'}}>
          <span style={{color: '#f59e0b'}}>💡</span>
          <span style={{fontFamily: "'UKIJ Nasq', sans-serif", color: '#1e40af', fontWeight: '500', fontSize: '0.875rem'}}>
            ئىلمىي ماقالىگە خۇش كەپسىز!
          </span>
        </div>
        
        <p style={{...styles.uyghurText, fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto'}}>
          بۇ ماقالىدە سىز <strong style={{color: '#3b82f6'}}>ماشىنا ئۆگىنىش</strong> ئارقىلىق 
          <strong style={{color: '#8b5cf6'}}> سۇنئىي ئەقىل (AI)</strong> سىستېمىلىرىنىڭ قانداق ئىشلەيدىغانلىقىنى، 
          ئۇلارنىڭ تەگلىكىنى تەشكىل قىلىدىغان <strong style={{color: '#10b981'}}>ماتېماتىكا قانۇنلىرى</strong>نى 
          ئاددىي ۋە قىزىقارلىق ئۇسلۇبتا ئۆگىنىسىز.
        </p>
      </div>
      
      {/* تېكىست بەلگىسى (tab) لىرى */}
      <div style={styles.tabContainer}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={getTabButtonStyle(activeTab === tab.id)}
          >
            <span style={{fontSize: '1.125rem'}}>{tab.emoji}</span>
            {tab.title}
          </button>
        ))}
      </div>
      
      {/* مەزمۇن قىسمى */}
      <div style={styles.contentCard}>
        <div style={{marginBottom: '1.5rem'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem'}}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white',
              borderRadius: '0.75rem',
              fontWeight: 'bold',
              fontSize: '1.125rem'
            }}>
              {activeTab}
            </div>
            <div>
              <h2 style={{...styles.uyghurTitle, fontSize: '1.5rem', margin: 0}}>
                {tabContents[activeTab]?.title || tabs.find(t => t.id === activeTab)?.title}
              </h2>
              <p style={{...styles.uyghurText, margin: '0.25rem 0 0 0', color: '#6b7280', fontSize: '0.875rem'}}>
                {tabs.find(t => t.id === activeTab)?.emoji} بۇ بۆلەكتە {tabs.find(t => t.id === activeTab)?.title.toLowerCase()} توغرىسىدا
              </p>
            </div>
          </div>
          
          {tabContents[activeTab]?.content || (
            <div style={styles.uyghurText}>
              <p>بۇ بۆلەك تەييارلىق جەريانىدا... تېزدا كۆرۈشىڭىزگە تەييارلىق قىلىنىدۇ.</p>
              <div style={{textAlign: 'center', padding: '2rem'}}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>👨‍💻</div>
                <div style={styles.uyghurTitle}>تەييارلىق جەريانى</div>
                <p style={styles.uyghurText}>بۇ بۆلەك تەييارلىق جەريانىدا، تېزدا كۆرۈشىڭىزگە تەييارلىق قىلىنىدۇ.</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* باشقا بۆلەكلەرگە تەۋسىيە */}
      <div style={{...styles.contentCard, backgroundColor: '#f9fafb'}}>
        <div style={{textAlign: 'center'}}>
          <div style={styles.uyghurTitle}>باشقا مۇھىم بۆلەكلەرنى كۆرۈڭ</div>
          <p style={{...styles.uyghurText, marginBottom: '1rem'}}>
            تۆۋەندىكى بۆلەكلەرمۇ سىزنىڭ قىزىقىشىڭىزنى قوزغىيالايدۇ
          </p>
          
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center'}}>
            {tabs
              .filter(tab => tab.id !== activeTab && tab.id !== '01')
              .slice(0, 6)
              .map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <span>{tab.emoji}</span>
                  <span style={{fontFamily: "'UKIJ Tuz', sans-serif"}}>{tab.title}</span>
                </button>
              ))}
          </div>
        </div>
      </div>
      
      {/* ئاخىرقى بەلگە */}
      <footer style={styles.footer}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <div style={styles.emojiGrid}>
            {['🧠', '🔬', '💻', '📚', '🎯', '🚀'].map((emoji, i) => (
              <div 
                key={i}
                style={{
                  animation: `bounce 2s infinite ${i * 0.1}s`,
                  fontSize: '1.5rem'
                }}
              >
                {emoji}
              </div>
            ))}
          </div>
          
          <div style={{marginBottom: '1.5rem'}}>
            <h3 style={{...styles.uyghurTitle, fontSize: '1.125rem', marginBottom: '0.5rem'}}>
              AI ماتېماتىكىسى توغرىسىدا
            </h3>
            <p style={{...styles.uyghurText, fontSize: '0.875rem', maxWidth: '600px', margin: '0 auto'}}>
              بۇ ماقالە ماشىنا ئۆگىنىش ماتېماتىكىسىنى چۈشىنىشكە ياردەم بېرىش ئۈچۈن تەييارلاندى. 
              داۋاملىق مەزمۇنلار ئۈچۈن بىز بىلەن ئۇلىنىڭ.
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid #e5e7eb'
          }}>
            <span style={{...styles.uyghurText, fontSize: '0.875rem', color: '#6b7280'}}>
              © 2025 • smz.03.07 • ئىلمىي تەتقىقات
            </span>
            <div style={{width: '4px', height: '4px', backgroundColor: '#d1d5db', borderRadius: '50%'}}></div>
            <span style={{...styles.uyghurText, fontSize: '0.875rem', color: '#6b7280'}}>
              ماشىنا ئۆگىنىش ماتېماتىكىسى
            </span>
            <div style={{width: '4px', height: '4px', backgroundColor: '#d1d5db', borderRadius: '50%'}}></div>
            <span style={{...styles.uyghurText, fontSize: '0.875rem', color: '#6b7280'}}>
              سۇنئىي ئەقىل تەتقىقاتى
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog49;