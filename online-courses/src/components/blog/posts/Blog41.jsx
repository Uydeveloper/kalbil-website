import React from 'react';

const Blog41 = () => {
  return (
    <div
      dir="rtl"
      style={{
        fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
        backgroundColor: '#f8fafc',
        color: '#1e293b',
        lineHeight: '1.85',
        padding: '2.5rem',
        maxWidth: '1000px',
        margin: '0 auto',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e2e8f0',
        backgroundImage: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      }}
    >
      {/* باشقۇرغۇچ رايونى */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        borderRadius: '16px',
        padding: '3rem 2rem',
        marginBottom: '3rem',
        overflow: 'hidden',
        borderBottom: '5px solid #3b82f6',
      }}>
        {/* كۋانت نۇرى ئارقا كۆرۈنۈشى */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-50%',
          width: '100%',
          height: '200%',
          background: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
        }}></div>
        
        <h1
          style={{
            textAlign: 'center',
            fontSize: '3rem',
            fontWeight: '800',
            margin: '0 0 1rem',
            color: '#ffffff',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            letterSpacing: '1px',
            position: 'relative',
          }}
        >
          كۋانت مېخانىكىسى
        </h1>
        
        <h2
          style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: '400',
            color: '#cbd5e1',
            marginBottom: '2rem',
            fontStyle: 'italic',
            position: 'relative',
          }}
        >
          يېڭى باشلانغۇچىلار ئۈچۈن تولۇق ئاساسىي چۈشەندۈرۈش
        </h2>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          color: '#94a3b8',
          fontSize: '1rem',
          flexWrap: 'wrap',
          position: 'relative',
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#60a5fa' }}>✍️</span>
            <strong>قاۋۇلجان</strong>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#60a5fa' }}>📅</span>
            2025-يىلى 11-ئاينىڭ 3-كۈنى
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#60a5fa' }}>🏷️</span>
            فىزىكا | كۋانت | ئىلمىي چۈشەندۈرۈش
          </span>
        </div>
      </div>

      {/* مۇندەرىجە (ئىندېكس) */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '14px',
        padding: '2rem',
        marginBottom: '3rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        borderLeft: '6px solid #3b82f6',
        borderRight: '6px solid #3b82f6',
      }}>
        <h3 style={{
          fontSize: '1.6rem',
          color: '#1e293b',
          marginBottom: '1.5rem',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.8rem',
        }}>
          <span style={{ 
            backgroundColor: '#3b82f6', 
            color: 'white',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem'
          }}>📋</span>
          مەزمۇن جەدۋىلى
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
        }}>
          {[
            { number: '01', title: 'كىرۈش: كۋانت دۇنياسىغا سەپەر', icon: '🚀' },
            { number: '02', title: 'كۋانتلاشتۇرۇش: ئايرىم بىرلىكلەر', icon: '🔬' },
            { number: '03', title: 'دولقۇن-زەررىچە قوشلۇقى', icon: '🌊' },
            { number: '04', title: 'ئۈستۈن ھالەت ۋە كۆزىتىش', icon: '🎭' },
            { number: '05', title: 'كۋانت چىرمىشىشى', icon: '🔗' },
            { number: '06', title: 'ئەمەلىي قوللىنىش ساھەلىرى', icon: '💡' },
          ].map((item, index) => (
            <div key={index} style={{
              backgroundColor: '#f8fafc',
              borderRadius: '10px',
              padding: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'all 0.3s ease',
              border: '1px solid #e2e8f0',
              cursor: 'pointer',
              ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.08)',
                borderColor: '#3b82f6',
              },
            }}>
              <div style={{
                backgroundColor: '#dbeafe',
                color: '#1d4ed8',
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                flexShrink: 0,
              }}>
                {item.number}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.3rem' }}>{item.icon}</div>
                <div style={{ fontWeight: '600', color: '#334155' }}>{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 1. كىرۈش بۆلۈمى */}
      <section style={{ 
        marginBottom: '3rem',
        position: 'relative',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1.5rem',
          gap: '1rem',
        }}>
          <div style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            flexShrink: 0,
          }}>
            01
          </div>
          <h2 style={{ 
            fontSize: '2rem', 
            color: '#1e293b', 
            margin: 0,
            fontWeight: '700',
          }}>
            كىرۈش: كۋانت دۇنياسىغا سەپەر
          </h2>
        </div>
        
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '14px',
          padding: '2.5rem',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
          borderTop: '1px solid #f1f5f9',
          borderBottom: '1px solid #f1f5f9',
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            alignItems: 'center',
          }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.9' }}>
                <strong>كۋانت مېخانىكىسى</strong> — ئاتوم، ئېلېكترون، فوتون قاتارلىق مىكروسكوپ زەررىچىلەرنىڭ دۇنياسىنى چۈشەندۈرىدىغان فىزىكا نەزەرىيىسى. بۇ دۇنيا بىزنىڭ كۈندىلىك تۇرمۇشىمىزدىكى ماكروسكوپ دۇنيادىن پۈتۈنلەي يىراق. بۇ يەردە نۇر زەررىچىلەرگە ئايلىنىدۇ، ئېلېكترونلار دولقۇنغا ئايلىنىدۇ، ھالەت «مۇمكىنچىلىك» دەپ قارىلىدۇ، ۋە يىراق زەررىچىلەر «ئۆزئارا سۆزلىشىدۇ».
              </p>
              
              <div style={{
                backgroundColor: '#eff6ff',
                borderRadius: '10px',
                padding: '1.5rem',
                borderLeft: '4px solid #3b82f6',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>💡</span>
                  <h4 style={{ margin: 0, color: '#1d4ed8' }}>ئەسكەرتىش</h4>
                </div>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>
                  كۋانت مېخانىكىسى بىزنىڭ كۈندىلىك تەجرىبىلىرىمىزگە زىت كېلىدۇ، لېكىن بۇ ئۇنىڭ خاتالىقى ئەمەس، بەلكى ئۇ مىكروسكوپ دۇنيانىڭ ھەقىقىي تەبىئىتى.
                </p>
              </div>
            </div>
            
            <div style={{ 
              flex: '1', 
              minWidth: '300px',
              backgroundColor: '#f0f9ff',
              borderRadius: '12px',
              padding: '1.5rem',
              textAlign: 'center',
              border: '2px solid #e0f2fe',
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚛️</div>
              <h3 style={{ color: '#0369a1', marginBottom: '0.8rem' }}>مەلۇمات بۆلەكچىسى</h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '1rem',
                textAlign: 'right',
              }}>
                <div>
                  <div style={{ fontSize: '0.9rem', color: '#64748b' }}>ئىختىرا قىلغان</div>
                  <div style={{ fontWeight: 'bold', color: '#0f172a' }}>ماكس پلانك</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: '#64748b' }}>تارىخى</div>
                  <div style={{ fontWeight: 'bold', color: '#0f172a' }}>1900-يىلى</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: '#64748b' }}>ئاساسلىق تۈشۈنچە</div>
                  <div style={{ fontWeight: 'bold', color: '#0f172a' }}>كۋانت</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: '#64748b' }}>ئىلمىي ساھە</div>
                  <div style={{ fontWeight: 'bold', color: '#0f172a' }}>فىزىكا</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. كۋانتلاشتۇرۇش بۆلۈمى */}
      <section style={{ 
        marginBottom: '3rem',
        position: 'relative',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1.5rem',
          gap: '1rem',
        }}>
          <div style={{
            backgroundColor: '#8b5cf6',
            color: 'white',
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            flexShrink: 0,
          }}>
            02
          </div>
          <h2 style={{ 
            fontSize: '2rem', 
            color: '#1e293b', 
            margin: 0,
            fontWeight: '700',
          }}>
            كۋانتلاشتۇرۇش: ئايرىم بىرلىكلەر
          </h2>
        </div>
        
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '14px',
          padding: '2.5rem',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* سانلىق مەلۇمات گرافىكىسى */}
          <div style={{
            position: 'absolute',
            left: '0',
            top: '0',
            width: '100%',
            height: '5px',
            background: 'linear-gradient(90deg, #8b5cf6, #3b82f6, #10b981)',
          }}></div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'stretch' }}>
            <div style={{ flex: '2', minWidth: '300px' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.9' }}>
                مەكروسكوپ دۇنياسىدا، سۇ، ھاۋا، ھەتتا ھەرىكەت مۇداۋىم (ئۈزلۈكسىز) دەپ قارىلىدۇ. لېكىن مىكروسكوپ دۇنياسىدا، ئېنېرگىيە، نۇر، ۋە ماددا <strong>«ئايرىم بىرلىك»</strong> (quantum) شەكلىدە كۆرۈنىدۇ.
              </p>
              
              <div style={{
                backgroundColor: '#f8fafc',
                borderRadius: '10px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                border: '1px solid #e2e8f0',
              }}>
                <h4 style={{ color: '#7c3aed', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>🔬</span> مىسال: نۇر
                </h4>
                <p style={{ margin: 0, fontSize: '1rem' }}>
                  نۇر «فوتون» دەپ ئاتىلىدىغان زەررىچىلەردىن تۈزۈلگەن، ھەر بىر فوتون بىر «ئېنېرگىيە كۋانتى» دىن ئىبارەت. بۇ خۇددى بىر پەلەمپەى بويىچە چىقىشقا ئوخشايدۇ — سىز ئوتتۇرىدا «يەر يۈزى» دە توختىيالمايسىز.
                </p>
              </div>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.9' }}>
                كۋانت مېخانىكىسىنىڭ ئاساسى شۇ: <strong>كىچىك دۇنيادا ھەر نەرسە «زەررىچە شەكلىدە» بولىدۇ</strong>.
              </p>
            </div>
            
            <div style={{ 
              flex: '1', 
              minWidth: '250px',
              backgroundColor: '#f5f3ff',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #ede9fe',
            }}>
              <div style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%',
                background: 'radial-gradient(circle, #8b5cf6 0%, #c4b5fd 70%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                position: 'relative',
              }}>
                <div style={{ 
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '2px dashed #a78bfa',
                  animation: 'spin 20s linear infinite',
                }}></div>
                <div style={{ fontSize: '3.5rem', color: 'white' }}>⚛️</div>
              </div>
              
              <h3 style={{ color: '#7c3aed', marginBottom: '0.8rem', textAlign: 'center' }}>كۋانت پەرقى</h3>
              
              <div style={{ width: '100%' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.5rem',
                }}>
                  <span style={{ fontSize: '0.9rem', color: '#475569' }}>ماكروسكوپ دۇنيا</span>
                  <span style={{ fontSize: '0.9rem', color: '#475569' }}>مىكروسكوپ دۇنيا</span>
                </div>
                
                <div style={{ 
                  height: '4px',
                  background: 'linear-gradient(90deg, #10b981 0%, #8b5cf6 100%)',
                  borderRadius: '2px',
                  marginBottom: '1rem',
                }}></div>
                
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.8rem',
                  fontSize: '0.85rem',
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '0.3rem' }}>ئۈزلۈكسىز</div>
                    <div style={{ color: '#64748b' }}>سۇ، ھاۋا</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '0.3rem' }}>ئايرىم</div>
                    <div style={{ color: '#64748b' }}>فوتون، ئېلېكترون</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* كۋانتلاشتۇرۇش مىساللىرى */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '2rem',
          }}>
            <div style={{
              backgroundColor: '#fef3c7',
              borderRadius: '10px',
              padding: '1.2rem',
              textAlign: 'center',
              border: '1px solid #fde68a',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💡</div>
              <div style={{ fontWeight: 'bold', color: '#92400e' }}>نۇر</div>
              <div style={{ fontSize: '0.9rem', color: '#b45309' }}>فوتون زەررىچىلىرى</div>
            </div>
            
            <div style={{
              backgroundColor: '#dbeafe',
              borderRadius: '10px',
              padding: '1.2rem',
              textAlign: 'center',
              border: '1px solid #bfdbfe',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
              <div style={{ fontWeight: 'bold', color: '#1e3a8a' }}>ئېنېرگىيە</div>
              <div style={{ fontSize: '0.9rem', color: '#1d4ed8' }}>كۋانت بىرلىكلىرى</div>
            </div>
            
            <div style={{
              backgroundColor: '#f0f9ff',
              borderRadius: '10px',
              padding: '1.2rem',
              textAlign: 'center',
              border: '1px solid #e0f2fe',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🧲</div>
              <div style={{ fontWeight: 'bold', color: '#0c4a6e' }}>ماددا</div>
              <div style={{ fontSize: '0.9rem', color: '#0369a1' }}>ئاتوم ۋە ئېلېكترون</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. دولقۇن-زەررىچە قوشلۇقى بۆلۈمى */}
      <section style={{ 
        marginBottom: '3rem',
        position: 'relative',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1.5rem',
          gap: '1rem',
        }}>
          <div style={{
            backgroundColor: '#10b981',
            color: 'white',
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            flexShrink: 0,
          }}>
            03
          </div>
          <h2 style={{ 
            fontSize: '2rem', 
            color: '#1e293b', 
            margin: 0,
            fontWeight: '700',
          }}>
            دولقۇن-زەررىچە قوشلۇقى
          </h2>
        </div>
        
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '14px',
          padding: '2.5rem',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}>
            <div style={{
              backgroundColor: '#f0fdf4',
              borderRadius: '12px',
              padding: '2rem',
              border: '2px solid #dcfce7',
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: '1.5rem',
              }}>
                <div style={{ fontSize: '2.5rem' }}>🌊</div>
                <div>
                  <h3 style={{ color: '#166534', margin: '0 0 0.3rem 0' }}>تەبىئىتىنىڭ ئىككى خىل جەھىتى</h3>
                  <p style={{ color: '#4d7c0f', margin: 0, fontSize: '0.95rem' }}>
                    زەررىچە ۋە دولقۇن خۇسۇسىيەتلىرىنىڭ قوشۇلۇشى
                  </p>
                </div>
              </div>
              
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.9' }}>
                ئاتوملارنىڭ دۇنياسىدا، ئېلېكترون ۋە نۇر قاتارلىق زەررىچىلەر بىرلا ۋاقىتتا <strong>زەررىچە</strong> ھەم <strong>دولقۇن</strong> خۇسۇسىيىتىنى كۆرسىتىدۇ. بۇنى ماكروسكوپ دۇنياسىدا تەسەۋۋۇر قىلىش مۇمكىن ئەمەس.
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem',
              }}>
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  border: '1px solid #dcfce7',
                  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.03)',
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.8rem',
                    marginBottom: '1rem',
                  }}>
                    <div style={{
                      backgroundColor: '#10b981',
                      color: 'white',
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                    }}>🔍</div>
                    <h4 style={{ margin: 0, color: '#166534' }}>قوش يېرىق تەجرىبىسى</h4>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>
                    بىر ئېلېكترون ئىككى يېرىقتىن بىرلا ۋاقىتتا ئۆتىدۇ دېگەن ھالەت يۈز بېرىدۇ، ۋە ئۇنىڭ ئۆزى بىلەن ئۆزى ئارىلىشىشى كۆزىتىلىدۇ. بۇ، ئېلېكتروننىڭ «دولقۇن» ئىكەنلىكىنى كۆرسىتىدۇ.
                  </p>
                </div>
                
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  border: '1px solid #dcfce7',
                  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.03)',
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.8rem',
                    marginBottom: '1rem',
                  }}>
                    <div style={{
                      backgroundColor: '#10b981',
                      color: 'white',
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                    }}>👁️</div>
                    <h4 style={{ margin: 0, color: '#166534' }}>كۆزىتىش ھادىسىسى</h4>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>
                    سىز كۆزىتىش ئۇچۈن قۇرال قويغاندا، ئۇ «زەررىچە» بولۇپ چىقىدۇ. دېمەك، كۆزىتىش ئەھۋالغا قاراپ تەبىئىتى ئۆزگىرىدۇ.
                  </p>
                </div>
              </div>
            </div>
            
            {/* گرافىك چۈشەندۈرۈش */}
            <div style={{
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              padding: '1.5rem',
              textAlign: 'center',
              border: '1px dashed #cbd5e1',
            }}>
              <h4 style={{ color: '#475569', marginBottom: '1rem' }}>گۈرۈچ-تەپەككۇر ئۈچۈن:</h4>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
                marginBottom: '1rem',
              }}>
                <div style={{ 
                  padding: '1rem',
                  backgroundColor: '#dbeafe',
                  borderRadius: '8px',
                  minWidth: '120px',
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🌊</div>
                  <div style={{ fontWeight: 'bold' }}>دولقۇن</div>
                  <div style={{ fontSize: '0.85rem', color: '#475569' }}>تارقىلىش</div>
                </div>
                
                <div style={{ fontSize: '2rem', color: '#64748b' }}>➕</div>
                
                <div style={{ 
                  padding: '1rem',
                  backgroundColor: '#fef3c7',
                  borderRadius: '8px',
                  minWidth: '120px',
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>⚛️</div>
                  <div style={{ fontWeight: 'bold' }}>زەررىچە</div>
                  <div style={{ fontSize: '0.85rem', color: '#475569' }}>ئورۇنلاش</div>
                </div>
                
                <div style={{ fontSize: '2rem', color: '#64748b' }}>🟰</div>
                
                <div style={{ 
                  padding: '1rem',
                  backgroundColor: '#dcfce7',
                  borderRadius: '8px',
                  minWidth: '120px',
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🌀</div>
                  <div style={{ fontWeight: 'bold' }}>قوشلۇق</div>
                  <div style={{ fontSize: '0.85rem', color: '#475569' }}>ئىككى خىل تەبىئەت</div>
                </div>
              </div>
              
              <p style={{ fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic' }}>
                «ئېلېكترون قانداق بولۇشىنى قارار قىلىدۇ؟ ئۇ زەررىچەمۇ ياكى دولقۇنمۇ؟ جاۋاب: ئۇ ھەر ئىككىسى، ئەمما بىز قانداق كۆزەتكەنلىكىمىزگە باغلىق.» 
                <br />
                <span style={{ fontWeight: 'bold' }}>— نىلز بور</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ئۈستۈن ھالەت ۋە كۆزىتىش بۆلۈمى */}
      <section style={{ 
        marginBottom: '3rem',
        position: 'relative',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1.5rem',
          gap: '1rem',
        }}>
          <div style={{
            backgroundColor: '#f59e0b',
            color: 'white',
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            flexShrink: 0,
          }}>
            04
          </div>
          <h2 style={{ 
            fontSize: '2rem', 
            color: '#1e293b', 
            margin: 0,
            fontWeight: '700',
          }}>
            ئۈستۈن ھالەت ۋە كۆزىتىش
          </h2>
        </div>
        
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '14px',
          padding: '2.5rem',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'stretch' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h3 style={{ color: '#d97706', marginBottom: '1rem', fontSize: '1.4rem' }}>
                <span style={{ marginLeft: '0.5rem' }}>🎭</span>
                مۇمكىنچىلىك دۇنياسى
              </h3>
              
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.9' }}>
                كۋانت دۇنياسىدا، زەررىچە «ئانىق ھالەت» دە ئەمەس، بەلكى <strong>كۆپ ھالەتلەرنىڭ ئۈستۈن ئورنى</strong> (superposition) دا مەۋجۇت دەپ قارىلىدۇ. مەسىلەن، بىر ئېلېكترون بىرلا ۋاقىتتا «بۇ يەرگىمۇ، شۇ يەرگىمۇ» دەپ قارىلىدۇ.
              </p>
              
              <div style={{
                backgroundColor: '#fffbeb',
                borderRadius: '10px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                border: '1px solid #fde68a',
              }}>
                <h4 style={{ color: '#b45309', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>🪙</span> تەڭگە مىسالى
                </h4>
                <p style={{ margin: 0, fontSize: '1rem' }}>
                  بۇ خۇددى بىر تەڭگە ئايلىنىۋاتقاندا «بېش ۋە قۇيرۇق» نى بىرلا ۋاقىتتا گۈمەن قىلىشقا ئوخشايدۇ. لېكىن سىز ئۇنى كۆزىتكەندە (ئىز قوغلىغاندا)، تەڭگە «بېش ياكى قۇيرۇق» دېگەن بىر ھالەتكە ئەقىلىدۇ.
                </p>
              </div>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.9' }}>
                بۇ «كۆزىتىش» نىڭ زەررىچىنىڭ ھالىتىنى «بېكىتىشى» ياكى «يىقىۋېتىشى» دەپ قارىلىدۇ. لېكىن «نېمەنى كۆزىتىش» دېگەن سۆزنىڭ نېمە ئىكەنلىكى ۋە نېمە ئۈچۈن بۇ يۈز بېرىدىغانلىقى، كۋانت مېخانىكىسىنىڭ ئەڭ چوڭ فەلسەپىي سىرلىرىنىڭ بىرى.
              </p>
            </div>
            
            <div style={{ 
              flex: '1', 
              minWidth: '300px',
              backgroundColor: '#fffbeb',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #fde68a',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                backgroundColor: '#f59e0b',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 10px rgba(245, 158, 11, 0.3)',
              }}>
                كۆزىتىش ھادىسىسى
              </div>
              
              {/* ئۈستۈن ھالەت گرافىكىسى */}
              <div style={{
                width: '200px',
                height: '200px',
                position: 'relative',
                marginBottom: '1.5rem',
              }}>
                {/* چوڭ دائىرە */}
                <div style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  border: '3px dashed #f59e0b',
                  position: 'absolute',
                  animation: 'pulse 2s infinite alternate',
                }}></div>
                
                {/* ئۈستۈن ھالەت نۇقتىلىرى */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((degree, index) => (
                  <div
                    key={index}
                    style={{
                      position: 'absolute',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#fbbf24',
                      borderRadius: '50%',
                      top: `calc(100px + 85px * ${Math.sin(degree * Math.PI / 180)})`,
                      left: `calc(100px + 85px * ${Math.cos(degree * Math.PI / 180)})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#78350f',
                      fontWeight: 'bold',
                      fontSize: '0.8rem',
                      boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {index + 1}
                  </div>
                ))}
                
                {/* مەركەز */}
                <div style={{
                  position: 'absolute',
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#f59e0b',
                  borderRadius: '50%',
                  top: '80px',
                  left: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  boxShadow: '0 5px 15px rgba(245, 158, 11, 0.4)',
                }}>
                  ?
                </div>
              </div>
              
              <h3 style={{ color: '#92400e', marginBottom: '0.5rem', textAlign: 'center' }}>
                ئۈستۈن ھالەت
              </h3>
              <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#b45309', marginBottom: '1rem' }}>
                8 خىل ھالەتنىڭ بىر ۋاقىتتا مەۋجۇتلىقى
              </p>
              
              <div style={{
                display: 'flex',
                gap: '1rem',
                width: '100%',
                justifyContent: 'center',
              }}>
                <div style={{
                  backgroundColor: '#10b981',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                }}>
                  كۆزەتكەندە
                </div>
                
                <div style={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                }}>
                  بىر ھالەتكە
                </div>
              </div>
            </div>
          </div>
          
          {/* كۆزىتىش ھادىسىسى توغرىسىدا مۇھىم ئۇچۇر */}
          <div style={{
            backgroundColor: '#fef3c7',
            borderRadius: '10px',
            padding: '1.5rem',
            marginTop: '2rem',
            borderLeft: '5px solid #f59e0b',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
              <div style={{ fontSize: '1.8rem' }}>🤔</div>
              <h4 style={{ margin: 0, color: '#92400e' }}>فەلسەپىي مەسىلە</h4>
            </div>
            <p style={{ margin: 0, fontSize: '1rem', color: '#78350f' }}>
              «كۆزىتىش» دېگەن نېمە؟ ئۇ پەقەت ئىنسان كۆزىتىشىمۇ؟ ياكى ھەر قانداق ئۆلچەش قۇرالى كۆزىتىش ھېسابلىنامدۇ؟ بۇ سوئال كۋانت مېخانىكىسىنىڭ ئەڭ چوڭ فەلسەپىي مەسىلىسى بولۇپ قالدى.
            </p>
          </div>
        </div>
      </section>

      {/* 5. كۋانت چىرمىشىشى بۆلۈمى */}
      <section style={{ 
        marginBottom: '3rem',
        position: 'relative',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1.5rem',
          gap: '1rem',
        }}>
          <div style={{
            backgroundColor: '#ef4444',
            color: 'white',
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            flexShrink: 0,
          }}>
            05
          </div>
          <h2 style={{ 
            fontSize: '2rem', 
            color: '#1e293b', 
            margin: 0,
            fontWeight: '700',
          }}>
            كۋانت چىرمىشىشى
          </h2>
        </div>
        
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '14px',
          padding: '2.5rem',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* ئارقا كۆرۈنۈش ئېلېمېنتى */}
          <div style={{
            position: 'absolute',
            top: '0',
            right: '0',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%)',
          }}></div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
            <div style={{ flex: '1', minWidth: '300px', position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.9' }}>
                ئىككى زەررىچە مەلۇم شارائىتتا «چىرمىشىپ» قويۇلغاندا، ئۇلارنىڭ ئارىلىقى قانچىلىك ئۇزاق بولسا دا، بىر زەررىچىنىڭ ھالىتى كۆزىتىلگەندە، يەنە بىر زەررىچىنىڭ ھالىتى <strong>دەرھال</strong> بېكىتىلىدۇ. بۇ «كۋانت چىرمىشىشى» (quantum entanglement) دەپ ئاتىلىدۇ.
              </p>
              
              <div style={{
                backgroundColor: '#fef2f2',
                borderRadius: '10px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                border: '1px solid #fecaca',
              }}>
                <h4 style={{ color: '#dc2626', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>🌌</span> ئېينىشتېيننىڭ باھاسى
                </h4>
                <p style={{ margin: 0, fontSize: '1rem' }}>
                  ئېينىشتېين بۇنى «ئۇزاق ئارىلىقتىكى سىرلىق تەسىر» دەپ ئاتىغان ۋە ئۇنىڭغا قارشى چىققان. ئۇنىڭچە، بۇنىڭدىن تېخىمۇ چوڭقۇر نەزەرىيە كېرەك. لېكىن كېيىنكى تەجرىبىلەر كۋانت چىرمىشىشىنىڭ ھەقىقىي ئىكەنلىكىنى ئىسپاتلىدى.
                </p>
              </div>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.9' }}>
                بۇ بوشلۇقتا «تېلېگرامما» قىلىشقا ئوخشايدۇ، لېكىن بۇ تېلېگرامما تېخىمۇ تېز — ھەتتا يارۇقلىق سۈرئىتىدىن دا تېز. كۋانت چىرمىشىشى كۋانت كومپيۇتېرلىرى ۋە كۋانت ئۇلىنىش تېخنىكىلىرىنىڭ ئاساسى.
              </p>
            </div>
            
            <div style={{ 
              flex: '1', 
              minWidth: '300px',
              backgroundColor: '#fef2f2',
              borderRadius: '12px',
              padding: '1.5rem',
              textAlign: 'center',
              border: '2px solid #fecaca',
              position: 'relative',
              zIndex: 1,
            }}>
              {/* چىرمىشىش گرافىكىسى */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
                position: 'relative',
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#ef4444',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  boxShadow: '0 5px 15px rgba(239, 68, 68, 0.4)',
                  position: 'relative',
                }}>
                  A
                  <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#f87171',
                    borderRadius: '50%',
                    top: '-5px',
                    right: '-5px',
                    animation: 'pulse 1.5s infinite',
                  }}></div>
                </div>
                
                <div style={{
                  width: '150px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #ef4444, #f87171, #ef4444)',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#ef4444',
                    borderRadius: '50%',
                    top: '-3.5px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    animation: 'move 2s linear infinite',
                  }}></div>
                </div>
                
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#ef4444',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  boxShadow: '0 5px 15px rgba(239, 68, 68, 0.4)',
                  position: 'relative',
                }}>
                  B
                  <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#f87171',
                    borderRadius: '50%',
                    top: '-5px',
                    left: '-5px',
                    animation: 'pulse 1.5s infinite',
                  }}></div>
                </div>
              </div>
              
              <h3 style={{ color: '#dc2626', marginBottom: '0.8rem' }}>چىرمىشىش نۇقتىلىرى</h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                fontSize: '0.9rem',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.3rem' }}>باغلىنىش</div>
                  <div style={{ color: '#ef4444' }}>دەرھال</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.3rem' }}>يىراقلىق</div>
                  <div style={{ color: '#ef4444' }}>چەكسىز</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.3rem' }}>سۈرئەت</div>
                  <div style={{ color: '#ef4444' }}>يورۇقتىن تېز</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.3rem' }}>ئىشلىتىش</div>
                  <div style={{ color: '#ef4444' }}>كومپيۇتېر</div>
                </div>
              </div>
              
              <div style={{
                marginTop: '1rem',
                padding: '0.8rem',
                backgroundColor: '#fee2e2',
                borderRadius: '8px',
                fontSize: '0.85rem',
                color: '#991b1b',
              }}>
                ⚠️ ئېينىشتېين بۇنى «سىرلىق تەسىر» دەپ ئاتىغان
              </div>
            </div>
          </div>
          
          {/* چىرمىشىش مىساللىرى */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '2rem',
          }}>
            <div style={{
              backgroundColor: '#fef3c7',
              borderRadius: '10px',
              padding: '1.2rem',
              textAlign: 'center',
              border: '1px solid #fde68a',
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🔐</div>
              <div style={{ fontWeight: 'bold', color: '#92400e' }}>كۋانت شىفىرلاش</div>
              <div style={{ fontSize: '0.85rem', color: '#b45309' }}>بىخەتەر ئۇچۇرلاش</div>
            </div>
            
            <div style={{
              backgroundColor: '#dbeafe',
              borderRadius: '10px',
              padding: '1.2rem',
              textAlign: 'center',
              border: '1px solid #bfdbfe',
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>💻</div>
              <div style={{ fontWeight: 'bold', color: '#1e3a8a' }}>كۋانت كومپيۇتېر</div>
              <div style={{ fontSize: '0.85rem', color: '#1d4ed8' }}>سۇپەر ھېسابلاش</div>
            </div>
            
            <div style={{
              backgroundColor: '#dcfce7',
              borderRadius: '10px',
              padding: '1.2rem',
              textAlign: 'center',
              border: '1px solid #bbf7d0',
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>📡</div>
              <div style={{ fontWeight: 'bold', color: '#166534' }}>كۋانت ئۇلىنىش</div>
              <div style={{ fontSize: '0.85rem', color: '#16a34a' }}>تېلېپورتىيە</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ئەمەلىي قوللىنىش ساھەلىرى بۆلۈمى */}
      <section style={{ 
        marginBottom: '3rem',
        position: 'relative',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1.5rem',
          gap: '1rem',
        }}>
          <div style={{
            backgroundColor: '#06b6d4',
            color: 'white',
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            flexShrink: 0,
          }}>
            06
          </div>
          <h2 style={{ 
            fontSize: '2rem', 
            color: '#1e293b', 
            margin: 0,
            fontWeight: '700',
          }}>
            ئەمەلىي قوللىنىش ساھەلىرى
          </h2>
        </div>
        
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '14px',
          padding: '2.5rem',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
        }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.9' }}>
            كۋانت مېخانىكىسى پەقەت نەزەرىيە ئەمەس، بەلكى زامانىۋى تېخنىكىنىڭ ئاساسى. بىزنىڭ كۈندىلىك تۇرمۇشىمىزدا كەڭ قوللىنىلىۋاتقان نۇرغۇن تېخنىكىلار كۋانت مېخانىكىسىغا ئاساسلىنىدۇ.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              {
                title: 'يېرىم ئۆتكۈزگۈچ تېخنىكىسى',
                description: 'كومپيۇتېر، سمارت تېلېفون، مىكروچىپلارنىڭ ئاساسى كۋانت مېخانىكىسىدە.',
                icon: '💻',
                color: '#3b82f6',
                examples: ['ترانزىستور', 'مىكروپروسېسسور', 'يېڭىيە كىرگۈزگۈچ']
              },
              {
                title: 'لازېر تېخنىكىسى',
                description: 'CD/DVD ئوقۇغۇچ، جىراراتىس داۋالاش، ئۇچۇر ئۇلاڭچىقلىرىدا لازېر كەڭ قوللىنىلىدۇ.',
                icon: '🔦',
                color: '#ef4444',
                examples: ['تېببىي ئاپپارات', 'ئۇچۇر ئۇلىنىش', 'ئۆلچەش قۇراللىرى']
              },
              {
                title: 'يادرو ئېنېرگىيەسى',
                description: 'ئاتوم بۆلۈش، ۋە قولايلىق يادرو تەنھىلى ياساش كۋانت مېخانىكىسىگە ئاساسلىنىدۇ.',
                icon: '⚛️',
                color: '#10b981',
                examples: ['ئاتوم ئېلېكترىس توكى', 'تېببىي تەكشۈرۈش', 'يادرو داۋالىشىش']
              },
              {
                title: 'كۋانت كومپيۇتېر',
                description: 'ئۈستۈن ھالەت ۋە چىرمىشىشنى ئىشلىتىپ ئىنتايىن تېز ھېسابلاش.',
                icon: '🚀',
                color: '#8b5cf6',
                examples: ['كۋانت ئالگورىتۇم', 'سۇنئىي ئەقىل', 'مۇرەككەپ ھېسابلاش']
              },
            ].map((item, index) => (
              <div key={index} style={{
                backgroundColor: '#f8fafc',
                borderRadius: '12px',
                padding: '1.8rem',
                borderTop: `6px solid ${item.color}`,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                ':hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 10px 20px ${item.color}20`,
                },
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.2rem',
                }}>
                  <div style={{
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{ 
                    margin: 0, 
                    color: '#1e293b',
                    fontSize: '1.3rem',
                    fontWeight: '700',
                  }}>
                    {item.title}
                  </h3>
                </div>
                
                <p style={{ 
                  margin: '0 0 1.2rem 0', 
                  fontSize: '1rem',
                  color: '#475569',
                  lineHeight: '1.7',
                }}>
                  {item.description}
                </p>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}>
                  {item.examples.map((example, idx) => (
                    <span key={idx} style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                      padding: '0.3rem 0.8rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                    }}>
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* كەلگۈسى تېخنىكىلار */}
          <div style={{
            backgroundColor: '#f0f9ff',
            borderRadius: '12px',
            padding: '2rem',
            marginTop: '2rem',
            border: '2px solid #e0f2fe',
          }}>
            <h3 style={{ 
              color: '#0369a1', 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
            }}>
              <span>🔮</span> كەلگۈسى كۋانت تېخنىكىلىرى
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}>
              <div style={{ 
                padding: '1rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                borderLeft: '4px solid #8b5cf6',
              }}>
                <div style={{ fontWeight: 'bold', marginBottom: '0.3rem' }}>كۋانت ئىنتېرنېت</div>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>بىخەتەر ئۇلىنىش</div>
              </div>
              
              <div style={{ 
                padding: '1rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                borderLeft: '4px solid #10b981',
              }}>
                <div style={{ fontWeight: 'bold', marginBottom: '0.3rem' }}>كۋانت سېزگۈچ</div>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>ئىنتايىن دەلىللەش</div>
              </div>
              
              <div style={{ 
                padding: '1rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                borderLeft: '4px solid #ef4444',
              }}>
                <div style={{ fontWeight: 'bold', marginBottom: '0.3rem' }}>كۋانت مودېللىشىش</div>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>يېڭى دورىلار</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* خۇلاسە بۆلۈمى */}
      <section style={{ 
        marginBottom: '3rem',
        position: 'relative',
      }}>
        <div style={{
          backgroundColor: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          borderRadius: '16px',
          padding: '3rem',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* كۋانت نۇرى ئارقا كۆرۈنۈشى */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
            animation: 'pulse 10s infinite alternate',
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ 
              fontSize: '2.2rem', 
              margin: '0 0 1.5rem 0',
              fontWeight: '800',
              color: '#ffffff',
            }}>
              خۇلاسە
            </h2>
            
            <div style={{
              fontSize: '1.2rem',
              lineHeight: '1.9',
              marginBottom: '2rem',
              color: '#cbd5e1',
              maxWidth: '800px',
              margin: '0 auto 2rem',
            }}>
              <p>
                كۋانت مېخانىكىسى، بىزنىڭ كۈندىلىك سېزىمىمىزگە قارشى كېلىدىغان بولسىمۇ، ئۇ مىكروسكوپ دۇنيانىڭ ھەقىقەتلىرىنى ئېچىپ بەرگەن، جوڭگو، ئامېرىكا، ئەۋرۇپانىڭ كۈچلۈك تېخنىكا ئاساسى بولۇپ قالغان بىر ئىلمىي ئىنقىلاب. بۇ پەننى چۈشىنىش — كەلگۈسىنى چۈشىنىشنىڭ ئاساسى.
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💭</div>
              <p style={{ 
                margin: '0', 
                fontSize: '1.1rem',
                fontStyle: 'italic',
                fontWeight: '600',
                color: '#ffffff',
                lineHeight: '1.7',
              }}>
                «سىز كۆرەلمىسىڭىزمۇ، بىز بارلىق ئېلېكترونلۇق دۇنيا بۇ «سۈرۈشتۈرۈلگەن ھەقىقەت» قىلىدۇ. كۋانت مېخانىكىسى پەقەت بىر نەزەرىيە ئەمەس، بەلكى بىزنىڭ زامانىۋى تۇرمۇشىمىزنىڭ ئاساسى.»
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginTop: '2.5rem',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '0.8rem 1.5rem',
                borderRadius: '30px',
              }}>
                <span>📚</span>
                <span>داۋاملىق ئۆگىنىڭ</span>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                padding: '0.8rem 1.5rem',
                borderRadius: '30px',
              }}>
                <span>🔬</span>
                <span>تەجرىبە قىلىڭ</span>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                padding: '0.8rem 1.5rem',
                borderRadius: '30px',
              }}>
                <span>🌌</span>
                <span>ئىزدىنىڭ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ئاخىرقى ئۇچۇرلار ۋە مەنبەلەر */}
      <footer
        style={{
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          borderTop: '1px solid #e2e8f0',
          textAlign: 'center',
        }}
      >
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '2rem',
        }}>
          <div style={{ textAlign: 'right' }}>
            <h4 style={{ color: '#475569', marginBottom: '0.8rem' }}>تېخىمۇ كۆپ ئۇچۇر</h4>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: '0.5rem' }}>• كۋانت كومپيۇتېرلىرى قانداق ئىشلەيدۇ؟</li>
              <li style={{ marginBottom: '0.5rem' }}>• كۋانت شىفىرلاش پىرىنسىپى</li>
              <li style={{ marginBottom: '0.5rem' }}>• كۋانت تېخنىكىسىنىڭ كەلگۈسى</li>
            </ul>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <h4 style={{ color: '#475569', marginBottom: '0.8rem' }}>تەۋسىيە قىلىنغان كىتابلار</h4>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: '0.5rem' }}>• «كۋانت مېخانىكىسى ھەققىدە» - رىچارد فەينمان</li>
              <li style={{ marginBottom: '0.5rem' }}>• «زامانىۋى فىزىكا» - پاول ئىدەر</li>
              <li style={{ marginBottom: '0.5rem' }}>• «كۋانت تۇيغۇسى» - جىم ئەل-خەلىلى</li>
            </ul>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid #e2e8f0', 
          paddingTop: '1.5rem',
          color: '#64748b',
          fontSize: '0.95rem',
        }}>
          <p style={{ marginBottom: '0.5rem' }}>
            © 2025 <strong style={{ color: '#3b82f6' }}>KeLBiL</strong> — كۋانت مېخانىكىسى بويىچە تەلەپچىلەرگە ئىلگىرلىك ماتېرىيال
          </p>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '1rem' }}>
            بۇ ماقالىدە كۆرسىتىلگەن پىكىرلەر مۇئەللىپنىڭ شەخسىي چۈشەندۈرۈشى بولۇپ، ئەسلىي ئىلمىي ماتېرىياللارغا نىسبەتەن ساددەلەشتۈرۈلگەن.
          </p>
        </div>
      </footer>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.5; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes move {
            0% { left: 0%; }
            100% { left: 100%; }
          }
          
          @media (max-width: 768px) {
            div[dir="rtl"] {
              padding: 1.5rem;
            }
            
            h1 {
              font-size: 2.2rem !important;
            }
            
            h2 {
              font-size: 1.6rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Blog41;