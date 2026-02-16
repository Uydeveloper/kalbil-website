import React from 'react';

const Blog43 = () => {
  return (
    <div
      dir="rtl"
      style={{
        fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
        backgroundColor: '#0f172a',
        color: '#e2e8f0',
        lineHeight: '1.85',
        padding: '0',
        maxWidth: '1200px',
        margin: '0 auto',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      }}
    >

      {/* تېما باش بېتى */}
      <header style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        padding: '4rem 2rem 3rem',
        textAlign: 'center',
        borderBottom: '1px solid #475569',
        position: 'relative',
        overflow: 'hidden',
      }}>
        
        {/* ئارقا كۆرۈنۈش گرافىكىلىرى */}
        <div style={{
          position: 'absolute',
          top: '0',
          right: '0',
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
          `,
          zIndex: 0,
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* باش مەزمۇن تېكىستى */}
          <h1 style={{
            fontSize: '3.2rem',
            fontWeight: '900',
            margin: '0 0 1rem',
            color: '#ffffff',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
          }}>
            6G «تېز سۈرئەتلىك 5G» ئەمەس
          </h1>
          
          <h2 style={{
            fontSize: '1.6rem',
            fontWeight: '400',
            color: '#cbd5e1',
            margin: '0 0 2.5rem',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.5',
          }}>
            «ئۈستۈنلۈك ئۈچۈن كۈرەش» ۋە 6G تەرەققىياتىنىڭ ئارقىسىدىكى «رەقەملىك قوشكېزەكلەر» نىڭ ئارزۇسى
          </h2>
          
          {/* ئۇچۇر پانېلى */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '2.5rem',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: 'rgba(30, 41, 59, 0.7)',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              backdropFilter: 'blur(10px)',
              border: '1px solid #475569',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#3b82f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.2rem',
              }}>ق</div>
              <div>
                <div style={{ fontWeight: 'bold', color: '#f8fafc' }}>قاۋۇلجان</div>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>مۇئەللىپ</div>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: 'rgba(30, 41, 59, 0.7)',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              backdropFilter: 'blur(10px)',
              border: '1px solid #475569',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#8b5cf6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.2rem',
              }}>📅</div>
              <div>
                <div style={{ fontWeight: 'bold', color: '#f8fafc' }}>2025-يىلى 11-ئاينىڭ 23-كۈنى</div>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>نەشر قىلىنغان ۋاقىت</div>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: 'rgba(30, 41, 59, 0.7)',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              backdropFilter: 'blur(10px)',
              border: '1px solid #475569',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#10b981',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.2rem',
              }}>🏷️</div>
              <div>
                <div style={{ fontWeight: 'bold', color: '#f8fafc' }}>تېخنىكا سىياسىتى</div>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>تېما</div>
              </div>
            </div>
          </div>
          
          {/* ئاچقۇچ سۆزلەر */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '1.5rem',
          }}>
            {['رەقەملىك قوشكېزەك', 'تور-فىزىكىلىق سىستېما', 'كۈچەيتىلگەن چۈشەنچە', 'ئۆلچەملەشتۈرۈش جېڭى', 'جۇغراپىيىلىك سىياسەت', 'كەلگۈسى مەشغۇلات سىستېمىسى'].map((tag, idx) => (
              <span key={idx} style={{
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                color: '#93c5fd',
                padding: '0.5rem 1.2rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                border: '1px solid rgba(59, 130, 246, 0.3)',
              }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ئاساسىي مەزمۇن رايونى */}
      <main style={{
        backgroundColor: '#1e293b',
        padding: '3rem 2rem',
        position: 'relative',
      }}>
        
        {/* مۇندەرىجە / نېتىجات پانېلى */}
        <div style={{
          backgroundColor: 'rgba(30, 41, 59, 0.8)',
          borderRadius: '16px',
          padding: '2.5rem',
          marginBottom: '3.5rem',
          border: '1px solid #475569',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            color: '#f1f5f9',
            marginBottom: '1.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}>
            <span style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
            }}>📋</span>
            مەزمۇنلار جەدۋىلى: 6G دۇنياسىنىڭ ھەقىقىي ماھىيىتى
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              { 
                num: '01', 
                title: '«ئالاقە» دىن «كۈچەيتىلگەن ئىدراك» گىچە', 
                desc: '6G تەرىپىدىن ئەمەلگە ئاشۇرۇلغان دۇنيا',
                color: '#3b82f6'
              },
              { 
                num: '02', 
                title: '«ئارقا كۆرۈنۈش» ئويلاش', 
                desc: '2030-يىللاردىن باشلاپ ئارقىغا قاراپ ئىشلەش',
                color: '#8b5cf6'
              },
              { 
                num: '03', 
                title: 'ئۈستۈنلۈك ئۈچۈن يەر ئاستى كۈرىشى', 
                desc: 'نېمە ئۈچۈن «ئۆلچەملەشتۈرۈش» گېئوسىياسىي خەۋپكە ئايلىنىدۇ',
                color: '#ef4444'
              },
              { 
                num: '04', 
                title: 'يورۇقلۇق ۋە سايە', 
                desc: '«كەلگۈسىدىكى مەشغۇلات سىستېمىسى» نىڭ پارادوكسى',
                color: '#10b981'
              },
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                borderRadius: '12px',
                padding: '1.8rem',
                borderLeft: `5px solid ${item.color}`,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '1px solid #334155',
                ':hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 10px 20px ${item.color}40`,
                },
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  gap: '1rem',
                }}>
                  <div style={{
                    backgroundColor: item.color,
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
                    {item.num}
                  </div>
                  <h4 style={{
                    margin: 0,
                    color: '#f8fafc',
                    fontSize: '1.4rem',
                    fontWeight: '700',
                  }}>
                    {item.title}
                  </h4>
                </div>
                <p style={{
                  margin: 0,
                  color: '#cbd5e1',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  paddingRight: '0.5rem',
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* ئىشەنچلىكلىك باھاسى */}
        <div style={{
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '3rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem',
        }}>
          <div style={{
            backgroundColor: '#ef4444',
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            fontSize: '1.2rem',
          }}>⚠️</div>
          <div>
            <h4 style={{ color: '#fca5a5', margin: '0 0 0.5rem 0' }}>ئەسكەرتىش: كەلگۈسىنىڭ چۈشەندۈرۈشى</h4>
            <p style={{ color: '#fecaca', margin: 0, fontSize: '0.95rem' }}>
              بۇ ماقالىدە تەسۋىرلەنگەن 6G سېنارىيلىرى ۋە تەسىرلەر ھازىر تەتقىقات ۋە تەرەققىيات باسقۇچىدا بولۇپ، چىقىرىلىشى 2030-يىللارغا مەزگۈللىنىدۇ[citation:1][citation:6]. تېخنىكىلىق تەپسىلاتلار ۋە ئۆلچەملەر تەرەققىيات جەريانىدا ئۆزگىرىشى مۇمكىن.
            </p>
          </div>
        </div>

        {/* 1-باب: «ئالاقە» دىن «كۈچەيتىلگەن ئىدراك» گىچە */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '2.5rem',
            gap: '1.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '2px solid #3b82f6',
          }}>
            <div style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              width: '70px',
              height: '70px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '2rem',
              flexShrink: 0,
              boxShadow: '0 8px 20px rgba(59, 130, 246, 0.4)',
            }}>
              01
            </div>
            <div>
              <h2 style={{
                fontSize: '2.3rem',
                color: '#f1f5f9',
                margin: '0 0 0.5rem 0',
                fontWeight: '800',
              }}>
                «ئالاقە» دىن «كۈچەيتىلگەن ئىدراك» گىچە
              </h2>
              <p style={{
                color: '#94a3b8',
                margin: 0,
                fontSize: '1.1rem',
                fontStyle: 'italic',
              }}>
                6G تەرىپىدىن ئەمەلگە ئاشۇرۇلغان دۇنيا
              </p>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '3rem',
            marginBottom: '2.5rem',
          }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '1.5rem' }}>
                6G پەقەت سۈرئەت ۋە سىغىمنى ئاشۇرۇش ئەمەس. بۇ <strong>«رەقەملىك قوشكېزەك»</strong> ۋە <strong>«تور-فىزىكىلىق سىستېما»</strong> (CPS) ئارقىلىق رېئال دۇنيا بىلەن سانلىق دۇنيا ئوتتۇرىسىدىكى چەكنى يوقىتىدىغان تەڭشەش. 6G نىڭ يېتىك تېخنىكىلىق ئىقتىدارلىرى بۇنى ئەمەلگە ئاشۇرۇش ئۈچۈن ئاساس سالىدۇ.
              </p>
              
              <div style={{
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '12px',
                padding: '1.8rem',
                marginBottom: '2rem',
                border: '1px solid rgba(59, 130, 246, 0.3)',
              }}>
                <h4 style={{
                  color: '#93c5fd',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  fontSize: '1.3rem',
                }}>
                  <span>🎯</span> 6G نىڭ ئاساسىي مىسىيونى
                </h4>
                <p style={{ margin: 0, color: '#cbd5e1', lineHeight: '1.7' }}>
                  رېئال دۇنيادىكى ھەممە نەرسىنى رەقەملەشتۈرىدىغان، تور بوشلۇقىدا تەقلىد قىلىدىغان ۋە نەتىجىلىرىنى «رېئاللىقنى ئەلالاشتۇرۇش» ئۈچۈن ئىشلىتىدىغان نېرۋا تورى قۇرۇش.
                </p>
              </div>
            </div>
            
            <div style={{ flex: '1', minWidth: '300px' }}>
              <div style={{
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid #334155',
              }}>
                <h3 style={{ color: '#f8fafc', textAlign: 'center', marginBottom: '1.5rem' }}>5G vs 6G: تېخنىكىلىق سېلىشتۇرما</h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#94a3b8' }}>ئەڭ يۇقىرى سۈرئەت</span>
                    <span style={{ color: '#f1f5f9', fontWeight: 'bold' }}>5G: 20 جىگابايت/سېكۇنت</span>
                    <span style={{ color: '#60a5fa', fontWeight: 'bold' }}>6G: 1 تېرابايت/سېكۇنت[citation:3]</span>
                  </div>
                  <div style={{ height: '8px', backgroundColor: '#334155', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '15%', height: '100%', backgroundColor: '#3b82f6' }}></div>
                    <div style={{ width: '85%', height: '100%', backgroundColor: '#60a5fa', position: 'relative', top: '-8px' }}></div>
                  </div>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#94a3b8' }}>كېچىكىش ۋاقتى</span>
                    <span style={{ color: '#f1f5f9', fontWeight: 'bold' }}>5G: ~1 مىللىسېكۇنت[citation:1]</span>
                    <span style={{ color: '#60a5fa', fontWeight: 'bold' }}>6G: 1 مىكروسېكۇنت[citation:3]</span>
                  </div>
                  <div style={{ height: '8px', backgroundColor: '#334155', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '30%', height: '100%', backgroundColor: '#3b82f6' }}></div>
                    <div style={{ width: '70%', height: '100%', backgroundColor: '#60a5fa', position: 'relative', top: '-8px' }}></div>
                  </div>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#94a3b8' }}>تەكرارلىشىش سىغىمى</span>
                    <span style={{ color: '#f1f5f9', fontWeight: 'bold' }}>5G: 1 مىليون/كم²[citation:1]</span>
                    <span style={{ color: '#60a5fa', fontWeight: 'bold' }}>6G: 10 مىليون/كم²</span>
                  </div>
                  <div style={{ height: '8px', backgroundColor: '#334155', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '10%', height: '100%', backgroundColor: '#3b82f6' }}></div>
                    <div style={{ width: '90%', height: '100%', backgroundColor: '#60a5fa', position: 'relative', top: '-8px' }}></div>
                  </div>
                </div>
                
                <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: '#94a3b8' }}>
                  ⚡ 6G سۈرئىتى 5G دىن 50-100 ھەسسە تېز بولۇشى مۆلچەرلەنمەكتە[citation:3]
                </div>
              </div>
            </div>
          </div>
          
          {/* ئەمەلىي ئىشلىتىش مىساللىرى */}
          <h3 style={{ color: '#f1f5f9', marginBottom: '1.5rem', fontSize: '1.5rem' }}>6G ئارقىلىق ئەمەلگە ئاشۇرىلىدىغان ئەمەلىي ئىشلىتىش مىساللىرى:</h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}>
            <div style={{
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              borderRadius: '12px',
              padding: '1.8rem',
              border: '1px solid rgba(16, 185, 129, 0.3)',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏙️</div>
              <h4 style={{ color: '#6ee7b7', marginBottom: '0.8rem' }}>ئەلالاشتۇرۇلغان ئاقلۇق شەھەر</h4>
              <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.95rem' }}>
                پۈتۈن شەھەرنىڭ ھەقىقىي ۋاقىتلىق سانلىق مەلۇماتلىرى «رەقەملىك قوشكېزەك» گە ئەۋەتىلىدۇ، سۈنئىي ئەقىل ئاپتوماتىك يول باشقۇرۇش، توك تەقسىملەش ۋە ھادىسىلەرنى مۆلچەرلەشنى ئەمەلگە ئاشۇرىدۇ.
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(139, 92, 246, 0.1)',
              borderRadius: '12px',
              padding: '1.8rem',
              border: '1px solid rgba(139, 92, 246, 0.3)',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏥</div>
              <h4 style={{ color: '#a78bfa', marginBottom: '0.8rem' }}>يىراقتىن مىللىمېتىرلىك ئوپېراتسىيە</h4>
              <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.95rem' }}>
                يېزا رايونىدىكى دوختۇرلار يۇقىرى ئېنىقلىقتىكى XR كۆزەينىكى ئارقىلىق مىللىمېتىر ئېنىقلىقتىكى ئوپېراتسىيەنى ئىنتايىن تۆۋەن كېچىكىش بىلەن باشقۇرىدۇ.
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '12px',
              padding: '1.8rem',
              border: '1px solid rgba(59, 130, 246, 0.3)',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
              <h4 style={{ color: '#93c5fd', marginBottom: '0.8rem' }}>سېزىمچان يەتكۈزۈش</h4>
              <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.95rem' }}>
                گۇرۇپپا ئەزالىرى بەش سېزىمنىڭ ھەممىسىنى ئىشقا سالىدىغان تور يىغىن زالىغا يىغىلىپ، نەپىس چىراي ئىپادىسى، ئاۋاز ئاھاڭى ۋە بوشلۇق كەيپىياتىنى ئورتاقلىشىدۇ.
              </p>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '12px',
            padding: '1.8rem',
            borderLeft: '5px solid #3b82f6',
            marginTop: '2rem',
          }}>
            <h4 style={{ color: '#93c5fd', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span>💎</span> مۇھىم نۇقتا
            </h4>
            <p style={{ margin: 0, color: '#e2e8f0', lineHeight: '1.7' }}>
              6G پەقەت سانلىق مەلۇماتلارنى تېز يەتكۈزۈش تېخنىكىسى ئەمەس. بۇ <strong>«ئىنسانلارنىڭ چۈشەنچىسىنى كېڭەيتىش»</strong> تۈرى بولۇپ، رېئال دۇنيا بىلەن سانلىق دۇنيا ئوتتۇرىسىدىكى چەكنى يوقىتىدۇ ھەمدە يېڭى تەجرىبە شەكلى يارىتىدۇ.
            </p>
          </div>
        </section>

        {/* 2-باب: «ئارقا كۆرۈنۈش» ئويلاش */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '2.5rem',
            gap: '1.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '2px solid #8b5cf6',
          }}>
            <div style={{
              backgroundColor: '#8b5cf6',
              color: 'white',
              width: '70px',
              height: '70px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '2rem',
              flexShrink: 0,
              boxShadow: '0 8px 20px rgba(139, 92, 246, 0.4)',
            }}>
              02
            </div>
            <div>
              <h2 style={{
                fontSize: '2.3rem',
                color: '#f1f5f9',
                margin: '0 0 0.5rem 0',
                fontWeight: '800',
              }}>
                «ئارقا كۆرۈنۈش» ئويلاش ئۇسۇلى
              </h2>
              <p style={{
                color: '#94a3b8',
                margin: 0,
                fontSize: '1.1rem',
                fontStyle: 'italic',
              }}>
                2030-يىللاردىن باشلاپ ئارقىغا قاراپ ئىشلەش
              </p>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2.5rem',
            marginBottom: '2.5rem',
          }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h3 style={{ color: '#d8b4fe', marginBottom: '1.2rem', fontSize: '1.4rem' }}>ئارقىغا قاراپ ئىشلەش مودېلى</h3>
              
              <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '1.5rem' }}>
                6G تەرەققىياتى ئادەتتىكى «پەرەز قىلىش» ئۇسۇلىدىن پەرقلىق. بۇ يەردە ئىشلىتىلىدىغان <strong>«ئارقا كۆرۈنۈش»</strong> ئۇسۇلى بولۇپ، 2030-يىللار ياكى 2040-يىللاردىكى ئىدىيال جەمئىيەتنى تەسەۋۋۇر قىلىپ، ئاندىن ئارقىغا قاراپ ئىشلەپ، ھازىر نېمە قىلىش كېرەكلىكىنى ۋە قانداق تېخنىكىلارغا ئېھتىياجلىقلىقىنى بەلگىلەيدۇ.
              </p>
              
              <div style={{
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                border: '1px solid rgba(139, 92, 246, 0.3)',
              }}>
                <p style={{ margin: 0, color: '#e2e8f0', fontStyle: 'italic', lineHeight: '1.7' }}>
                  "6G تەرەققىياتى تېخنىكىلىق ئۇرۇقلاردىن باشلانمىغان، بەلكى كەلگۈسى جەمئىيەتنىڭ ئېھتىياجىدىن ئارقىغا قاراپ لايىھەلەنگەن بىر تۈر."
                </p>
              </div>
              
              <p style={{ fontSize: '1.15rem', lineHeight: '1.9' }}>
                بۇ ئۇسۇل ھەر بىر دۆلەتنىڭ 6G نى قانداق چۈشىنىشى ۋە لايىھىلىشىدە ئوچۇق-ئاشكارا كۆرۈنىدۇ. مەسىلەن، ياپونىيەنىڭ «جەمئىيەت 5.0» كۆز قارىشى تۇغۇلۇش نىسبىتىنىڭ تۆۋەنلىشى ۋە نوپۇسنىڭ قېرىشىشى قاتارلىق قىيىنچىلىقلارغا تېخنىكىلىق ھەل قىلىش چارىسى بولۇپ، 6G بۇ مەقسەتلەرنى ئەمەلگە ئاشۇرۇش ئۈچۈن ئارقىغا قاراپ لايىھەلەنگەن.
              </p>
            </div>
            
            <div style={{ flex: '1', minWidth: '300px' }}>
              <div style={{
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid #334155',
              }}>
                <h3 style={{ color: '#f8fafc', textAlign: 'center', marginBottom: '1.5rem' }}>دۆلەتلەر بويىچە 6G كۆز قارىشى</h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    marginBottom: '0.8rem',
                    paddingBottom: '0.5rem',
                    borderBottom: '1px solid #475569',
                  }}>
                    <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>دۆلەت/رايون</span>
                    <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>ئاساسلىق دىققەت نۇقتىسى</span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    marginBottom: '0.8rem',
                    padding: '0.5rem 0',
                  }}>
                    <span style={{ color: '#f1f5f9', fontWeight: '500' }}>ياپونىيە</span>
                    <span style={{ color: '#c4b5fd', fontSize: '0.9rem', textAlign: 'left', width: '60%' }}>قېرىشىش جەمئىيىتى مەسىلىسى ۋە جەمئىيەت 5.0[citation:2]</span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    marginBottom: '0.8rem',
                    padding: '0.5rem 0',
                  }}>
                    <span style={{ color: '#f1f5f9', fontWeight: '500' }}>جەنۇبىي كورېيە</span>
                    <span style={{ color: '#c4b5fd', fontSize: '0.9rem', textAlign: 'left', width: '60%' }}>ئالاقە ئۆلچىمى ۋە سانائەت ئىتتىپاقلىرى[citation:3]</span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    marginBottom: '0.8rem',
                    padding: '0.5rem 0',
                  }}>
                    <span style={{ color: '#f1f5f9', fontWeight: '500' }}>ياۋروپا</span>
                    <span style={{ color: '#c4b5fd', fontSize: '0.9rem', textAlign: 'left', width: '60%' }}>تېخنىكىلىق دەرىجىدىكى ئورتاقلىشىش[citation:5]</span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    marginBottom: '0.8rem',
                    padding: '0.5rem 0',
                  }}>
                    <span style={{ color: '#f1f5f9', fontWeight: '500' }}>ئامېرىكا</span>
                    <span style={{ color: '#c4b5fd', fontSize: '0.9rem', textAlign: 'left', width: '60%' }}>ئىقتىسادىي ۋە بىخەتەرلىك مەنپەئەتلىرى</span>
                  </div>
                </div>
                
                <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#94a3b8', paddingTop: '0.5rem', borderTop: '1px solid #475569' }}>
                  ھەر بىر دۆلەتنىڭ 6G كۆز قارىشى ئۇنىڭ كەلگۈسى جەمئىيىتى توغرىسىدىكى ئىدىئولوگىيىسىنى ئاشكارىلايدۇ[citation:7]
                </div>
              </div>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            borderRadius: '12px',
            padding: '1.8rem',
            borderLeft: '5px solid #8b5cf6',
          }}>
            <h4 style={{ color: '#a78bfa', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span>🤔</span> جىددىي سوئال
            </h4>
            <p style={{ margin: 0, color: '#e2e8f0', lineHeight: '1.7' }}>
              6G تەرەققىياتى پەقەت تېخنىكىلىق تەرەققىيات مۇسابىقىسى ئەمەس. ئۇ يەنە دۆلەت دەرىجىلىك ئىدىيە جېڭى: <strong>بىز قانداق كەلگۈسىنى تاللىشىمىز كېرەك؟</strong> ئاپتوماتلاشتۇرۇش ۋە ئۈنۈمنى ئەڭ يۇقىرى چەككە يەتكۈزىدىغان جەمئىيەتمۇ؟ ياكى ئىنسانلارنىڭ قابىلىيىتى ۋە پاراۋانلىقىنى كېڭەيتىشنى ئالدىنقى ئورۇنغا قويغان جەمئىيەتمۇ؟
            </p>
          </div>
        </section>

        {/* 3-باب: ئۈستۈنلۈك ئۈچۈن يەر ئاستى كۈرىشى */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '2.5rem',
            gap: '1.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '2px solid #ef4444',
          }}>
            <div style={{
              backgroundColor: '#ef4444',
              color: 'white',
              width: '70px',
              height: '70px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '2rem',
              flexShrink: 0,
              boxShadow: '0 8px 20px rgba(239, 68, 68, 0.4)',
            }}>
              03
            </div>
            <div>
              <h2 style={{
                fontSize: '2.3rem',
                color: '#f1f5f9',
                margin: '0 0 0.5rem 0',
                fontWeight: '800',
              }}>
                ئۈستۈنلۈك ئۈچۈن يەر ئاستى كۈرىشى
              </h2>
              <p style={{
                color: '#94a3b8',
                margin: 0,
                fontSize: '1.1rem',
                fontStyle: 'italic',
              }}>
                نېمە ئۈچۈن «ئۆلچەملەشتۈرۈش» گېئوسىياسىي خەۋپكە ئايلىنىدۇ
              </p>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2.5rem',
            marginBottom: '2.5rem',
          }}>
            <div style={{ flex: '2', minWidth: '300px' }}>
              <h3 style={{ color: '#fca5a5', marginBottom: '1.2rem', fontSize: '1.4rem' }}>تېخنىكىلىق ھۆكۈمرانلىق = كەلگۈسىنىڭ ھۆكۈمرانلىقى</h3>
              
              <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '1.5rem' }}>
                تارىختىكى «VHS بىلەن بېتا» سىن فورماتى جېڭى ياكى «Windows بىلەن Mac» مەشغۇلات سىستېمىسى جېڭىدا غەلىبە قىلغان ئۆلچەملەر بازارغا ھۆكۈمرانلىق قىلدى. ئالاقە ساھەسىدە بۇ تېخىمۇ مۇھىم: ئۆلچەملەرنى كونترول قىلىش دەۋرنىڭ سانائەت ۋە ئىقتىسادىي قائىدىلىرىنى بەلگىلەيدۇ.
              </p>
              
              <div style={{
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                border: '1px solid rgba(239, 68, 68, 0.3)',
              }}>
                <h4 style={{ color: '#fca5a5', marginBottom: '0.8rem' }}>5G دىكى Huawei قارشىلىقىنىڭ ھەقىقىي مەزمۇنى</h4>
                <p style={{ margin: 0, color: '#fecaca', lineHeight: '1.7' }}>
                  Huawei نى چىقىرىۋېتىشنىڭ رەسمىي سەۋەبى «بىخەتەرلىك خەۋپى» بولسىمۇ، ئاساسىي مەزمۇنى جۇڭگونىڭ كېيىنكى ئەۋلاد ئۇل ئەسلىھەلىرىنى كونترول قىلىشىغا بولغان كۈچلۈك كىرىزىس ئىدى. 5G دەپ ئاتىلىدىغان «نېرۋا تورى» ئۈچۈن باشقا دۆلەتكە تايىنىش، ئىقتىسادىي ۋە بىخەتەرلىك جەھەتتىن بىر دۆلەتنىڭ بوغۇزىدىن تۇتۇۋېلىنىشىغا باراۋەر.
                </p>
              </div>
              
              <p style={{ fontSize: '1.15rem', lineHeight: '1.9' }}>
                6G پۈتۈن جەمئىيەتنى يېتەكلەيدىغان «مەشغۇلات سىستېمىسى». بۇ مەشغۇلات سىستېمىسىنىڭ لايىھە پەلسەپىسىنى ياكى «ئۆلچەملىرىنى» تەرەققىي قىلدۇرۇشتا قايسى دۆلەت باشلامچىلىق رولىنى ئوينايدۇ؟ بۇنىڭ 2030-يىللاردىن باشلاپ دۇنيا سانائىتى، ئىقتىسادى ۋە بىخەتەرلىكىنىڭ قائىدە-تۈزۈملىرىنى بەلگىلەيدىغانلىقىنى ئېيتىشقا بولىدۇ.
              </p>
            </div>
            
            <div style={{ flex: '1', minWidth: '300px' }}>
              <div style={{
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid #334155',
              }}>
                <h3 style={{ color: '#f8fafc', textAlign: 'center', marginBottom: '1.5rem' }}>6G ئۆلچەملىك كۈرەش رايونلىرى</h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ 
                    backgroundColor: 'rgba(59, 130, 246, 0.2)', 
                    borderRadius: '10px',
                    padding: '1rem',
                    marginBottom: '1rem',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                  }}>
                    <h4 style={{ color: '#93c5fd', marginBottom: '0.5rem', fontSize: '1.1rem' }}>ئوچۇق ئۆلچەم ھەمكارلىقى[citation:2][citation:3]</h4>
                    <ul style={{ margin: '0 0 0 1rem', padding: 0, color: '#cbd5e1', fontSize: '0.9rem' }}>
                      <li>ئامېرىكا، ياپونىيە، ياۋروپا، جەنۇبىي كورېيە</li>
                      <li>ھېچقانداق شىركەت ياكى دۆلەتكە تايانمايدۇ</li>
                      <li>4.5 مىليارد دوللارلىق ھەمكارلىق كېلىشىمى</li>
                    </ul>
                  </div>
                  
                  <div style={{ 
                    backgroundColor: 'rgba(239, 68, 68, 0.2)', 
                    borderRadius: '10px',
                    padding: '1rem',
                    marginBottom: '1rem',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                  }}>
                    <h4 style={{ color: '#fca5a5', marginBottom: '0.5rem', fontSize: '1.1rem' }}>يېپىق ئۆلچەم سىستېمىسى</h4>
                    <ul style={{ margin: '0 0 0 1rem', padding: 0, color: '#cbd5e1', fontSize: '0.9rem' }}>
                      <li>جۇڭگو ئۆز ئۆلچىمىنى بەرپا قىلىش</li>
                      <li>«بىر بەلباغ، بىر يول» دۆلەتلىرى</li>
                      <li>تېخنىكىلىق بەلۋاغلاش قۇرۇلمىسى</li>
                    </ul>
                  </div>
                </div>
                
                <div style={{ 
                  backgroundColor: 'rgba(245, 158, 11, 0.2)', 
                  borderRadius: '10px',
                  padding: '1rem',
                  textAlign: 'center',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                }}>
                  <h4 style={{ color: '#fcd34d', marginBottom: '0.5rem', fontSize: '1.1rem' }}>ئەڭ چوڭ خەۋپ</h4>
                  <p style={{ margin: 0, color: '#fde68a', fontSize: '0.9rem' }}>
                    «پارچىلانغان تور» (پارچىلانغان ئىنتېرنېت): تېخنىكىلىق بۆلەكلەرگە بۆلۈنگەن دۇنيا
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            borderRadius: '12px',
            padding: '1.8rem',
            borderLeft: '5px solid #ef4444',
          }}>
            <h4 style={{ color: '#fca5a5', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span>⚔️</span> ئۇرۇشنىڭ ھەقىقىي ماھىيىتى
            </h4>
            <p style={{ margin: 0, color: '#e2e8f0', lineHeight: '1.7' }}>
              6G ئۆلچەملەشتۈرۈش مەسىلىسىدىكى جەڭ پەقەت شىركەتلەر ئوتتۇرىسىدىكى بازار ئۈلۈشى ئۈچۈن كۈرەش ئەمەس، بەلكى <strong>كەلگۈسىدىكى رەقەملىك جەمئىيەتنىڭ تەرتىپىنى بەلگىلەيدىغان دۆلەت ئابرويى ئۈچۈن بولغان جۇغراپىيىلىك سىياسىي ئومۇمىي ئۇرۇش</strong>.
            </p>
          </div>
        </section>

        {/* 4-باب: يورۇقلۇق ۋە سايە */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '2.5rem',
            gap: '1.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '2px solid #10b981',
          }}>
            <div style={{
              backgroundColor: '#10b981',
              color: 'white',
              width: '70px',
              height: '70px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '2rem',
              flexShrink: 0,
              boxShadow: '0 8px 20px rgba(16, 185, 129, 0.4)',
            }}>
              04
            </div>
            <div>
              <h2 style={{
                fontSize: '2.3rem',
                color: '#f1f5f9',
                margin: '0 0 0.5rem 0',
                fontWeight: '800',
              }}>
                يورۇقلۇق ۋە سايە
              </h2>
              <p style={{
                color: '#94a3b8',
                margin: 0,
                fontSize: '1.1rem',
                fontStyle: 'italic',
              }}>
                «كەلگۈسىدىكى مەشغۇلات سىستېمىسى» نىڭ پارادوكسى
              </p>
            </div>
          </div>
          
          <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '2.5rem' }}>
            رەقەملىك قوشكېزەكلەر، يىراقتىن داۋالاش، كۈچەيتىلگەن چۈشەنچە ئارقىلىق ئەلالاشتۇرۇلغان شەھەرلەر... بۇ ئەلۋەتتە پارلاق تەرەپ. قانداقلا بولمىسۇن، ھەممە نەرسىنىڭ ھەمىشە سايىسى بولىدۇ. بىز تىنچ ئويلىنىشىمىز كېرەك بولغان بۇ سايەلەر:
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '2.5rem',
          }}>
            <div style={{
              backgroundColor: 'rgba(245, 158, 11, 0.1)',
              borderRadius: '12px',
              padding: '2rem',
              border: '1px solid rgba(245, 158, 11, 0.3)',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ color: '#fcd34d', marginBottom: '1rem' }}>1. تېخنىكىلىق چەكلەش ۋە ئېنېرگىيە سەرپىياتى</h3>
              <p style={{ margin: 0, color: '#cbd5e1', lineHeight: '1.7' }}>
                6G نىڭ كوزىرى بولغان تېراگېرتز دولقۇنلىرى توسالغۇلارغا ئىنتايىن ئاجىز ۋە شۇنداق كۈچلۈك يۆنىلىشكە ئىگەكى، ھەتتا ھاۋادىكى نەملىك تەرىپىدىن ئاجىزلىشىدۇ. بۇ دولقۇنلار بىلەن شەھەر رايونلىرىنى تولۇق قاپلاش ئۈچۈن 5G دىن كۆپ مىقداردا ئىنتايىن كىچىك بازا پونكىتلىرى لازىملىقى ئېيتىلىدۇ. بۇلارنىڭ ھەممىسىنى ۋە زور مىقداردىكى سانلىق مەلۇماتلارنى بىر تەرەپ قىلىدىغان سانلىق مەلۇمات مەركەزلىرىنى باشقۇرۇش ئۈچۈن زور مىقداردا توك كېرەك.
              </p>
              <div style={{ marginTop: '1rem', padding: '0.8rem', backgroundColor: 'rgba(245, 158, 11, 0.2)', borderRadius: '8px' }}>
                <p style={{ margin: 0, color: '#fde68a', fontSize: '0.9rem', fontStyle: 'italic' }}>پارادوكس: 6G ئارقىلىق قولايلىقنى قوغلىشىش دۇنيا مۇھىتىغا يۈكنى ئاشۇرىدۇ.</p>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              borderRadius: '12px',
              padding: '2rem',
              border: '1px solid rgba(239, 68, 68, 0.3)',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👁️</div>
              <h3 style={{ color: '#fca5a5', marginBottom: '1rem' }}>2. «ئەڭ ئاخىرقى نازارەت جەمئىيىتى» نىڭ خەۋپ-خەتىرى</h3>
              <p style={{ margin: 0, color: '#cbd5e1', lineHeight: '1.7' }}>
                6G ئېلىپ كېلىدىغان «تور-فىزىكىلىق سىستېما»، باشقىچە قىلىپ ئېيتقاندا، رېئال دۇنيادىكى بارلىق ئۇچۇرلارنىڭ رېئال ۋاقىتتا توپلىنىدىغان، تەھلىل قىلىنىدىغان ۋە كونترول قىلىنىدىغان جەمئىيەت بولىدۇ. سانلىق قوشكېزەكتە سانلىق مەلۇماتلىرىڭىزغا كىم كىرەلەيدۇ؟ سۈنئىي ئەقىلنىڭ قارار چىقىرىش ئۆلچىمى ئادىلمۇ؟ قولايلىق ۋە شەخسىي مەخپىيەتلىك ئوتتۇرىسىدىكى ئالماشتۇرۇش بىزگە، بولۇپمۇ 5G دەۋرىدە، ئىلگىرىكىدىنمۇ جىددىي بىر سوئالنى ئېلىپ كەلدى.
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(139, 92, 246, 0.1)',
              borderRadius: '12px',
              padding: '2rem',
              border: '1px solid rgba(139, 92, 246, 0.3)',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤖</div>
              <h3 style={{ color: '#a78bfa', marginBottom: '1rem' }}>3. سۈنئىي ئەقىلنىڭ كونتروللۇقىغا تايىنىش</h3>
              <p style={{ margin: 0, color: '#cbd5e1', lineHeight: '1.7' }}>
                جەمئىيەتنىڭ مەشغۇلات سىستېمىسى 6G ۋە سۈنئىي ئەقىل ئارقىلىق يۇقىرى دەرىجىدە ئەلالاشتۇرۇلغاندا، بىز ئىنسانلار قارار چىقىرىشىمىزنى قانچىلىك دەرىجىدە شۇ سۈنئىي ئەقىلنىڭ ھۆكۈمىگە تاپشۇرىمىز؟ ئەگەر ئىنساننىڭ ئۆزىدىنلا مەۋجۇت بولغان ئالاھىدىلىكلەر - رەت قىلىنسا، جەمئىيەتنى ھەقىقەتەن گۈللەنگەن دەپ ئاتايمىزمۇ؟
              </p>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            borderRadius: '12px',
            padding: '2rem',
            borderLeft: '5px solid #10b981',
          }}>
            <h4 style={{ color: '#6ee7b7', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span>❓</span> ئاساسىي پارادوكس: 6G مەشغۇلات سىستېمىسىغا قانداق «ئەخلاق»نى كىرگۈزۈشىمىز كېرەك؟
            </h4>
            <p style={{ margin: 0, color: '#e2e8f0', lineHeight: '1.7' }}>
              تېخنىكا ھەمىشە بىتەرەپ بولىدۇ. قانداقلا بولمىسۇن، بۇ تېخنىكىنى ئۆز ئىچىگە ئالغان مەشغۇلات سىستېمىسى لايىھىلىگۈچىنىڭ پەلسەپىسىنى كۈچلۈك ئەكس ئەتتۈرىدۇ. ھازىرقى ۋەزىيەت شۇكى، مۇنازىرە تېخنىكىلىق تەرەققىيات سۈرئىتىگە يېتىشەلمەيۋاتىدۇ.
            </p>
          </div>
        </section>

        {/* خۇلاسە */}
        <section>
          <div style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(16, 185, 129, 0.2) 100%)',
            borderRadius: '20px',
            padding: '3.5rem',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
            marginBottom: '3rem',
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              color: '#ffffff',
              margin: '0 0 1.5rem 0',
              fontWeight: '800',
            }}>
              خۇلاسە: بىز قانداق كەلگۈسى ئۈچۈن كۇنۇپكىنى باسىمىز؟
            </h2>
            
            <div style={{
              fontSize: '1.2rem',
              lineHeight: '1.9',
              color: '#e2e8f0',
              maxWidth: '800px',
              margin: '0 auto 2.5rem',
            }}>
              <p>
                6G پەقەت 5G نىڭ كېڭەيتىلگەن نۇسخىسى ئەمەس. ئۇ 2030-يىللاردىكى «ئىدىيال جەمئىيەت»تىن ئارقىغا ھېسابلانغان ئىجتىمائىي ئۆزگەرتىش تۈرى بولۇپ، كەلگۈسى جەمئىيىتىنىڭ «ئىشلىتىش سىستېمىسى» ئۈستىدىن ئىدىيە ۋە ھۆكۈمرانلىق قىلىش جېڭى.
              </p>
              
              <p style={{ marginTop: '1.5rem' }}>
                بۇ يېڭى مەشغۇلات سىستېمىسى ئېلىپ كەلگەن «رەقەملىك قوشكېزەك» ۋە «كۈچەيتىلگەن چۈشەنچە» ئىنسانىيەت ئىلگىرى كۆرۈپ باقمىغان قولايلىق ۋە ئىمكانىيەتلەرنى ئېلىپ كېلىدۇ. شۇنىڭ بىلەن بىر ۋاقىتتا، ئۇ ئېنېرگىيە مەسىلىلىرى، نازارەت قىلىش جەمئىيىتى ۋە سۈنئىي ئەقىلگە ھەددىدىن زىيادە تايىنىش توغرىسىدا جىددىي سوئاللارنىمۇ ئوتتۇرىغا قويدى.
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(15, 23, 42, 0.7)',
              borderRadius: '16px',
              padding: '2rem',
              maxWidth: '800px',
              margin: '0 auto',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
            }}>
              <h3 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>بىزگە ۋاقىت قالدى</h3>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1.5rem',
                marginBottom: '1.5rem',
              }}>
                <div style={{ flex: '1', minWidth: '250px' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#3b82f6' }}>⏳</div>
                  <div style={{ fontWeight: 'bold', color: '#f8fafc', marginBottom: '0.3rem' }}>ۋاقىت چەكلىمىسى</div>
                  <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>2030-يىللارغا قەدەر 6G يولغا قويۇلىدۇ</div>
                </div>
                
                <div style={{ flex: '1', minWidth: '250px' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#8b5cf6' }}>🤔</div>
                  <div style={{ fontWeight: 'bold', color: '#f8fafc', marginBottom: '0.3rem' }}>تاللاش ھوقۇقى</div>
                  <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>تېخنىكىدىن ئاشۇرۇق، ئىدىيە ۋە قىممەت قاراشلار</div>
                </div>
                
                <div style={{ flex: '1', minWidth: '250px' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#10b981' }}>🌍</div>
                  <div style={{ fontWeight: 'bold', color: '#f8fafc', marginBottom: '0.3rem' }}>كەلگۈسىنىڭ شەكلى</div>
                  <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>بىرلىكتە ياكى پارچىلانغان تور</div>
                </div>
              </div>
              
              <p style={{ 
                margin: '1.5rem 0 0 0', 
                color: '#e2e8f0',
                fontSize: '1.1rem',
                fontStyle: 'italic',
                lineHeight: '1.7',
                borderTop: '1px solid #334155',
                paddingTop: '1.5rem',
              }}>
                «بىز تېخنىكىنى چۈشىنىش بەك مۇرەككەپ دەپ ئويلاپ، ئۇنىڭغا كۆز يۇمۇپ تۇرغان بولساقمۇ، جەمئىيىتىمىزنىڭ مەشغۇلات سىستېمىسى ئاخىرىدا بىرەيلەنگە، بىرەر يەرگە ماس كېلىدىغان قىلىپ لايىھەلەنگەن بولۇشى مۇمكىن. بىز 6G، يەنى مەشغۇلات سىستېمىسىدا قانداق قوللىنىشچان پروگراممىلارنى (ھاياتلارنى) ئىجرا قىلىشنى خالايمىز؟»
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem',
              marginTop: '2.5rem',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                padding: '0.8rem 1.8rem',
                borderRadius: '30px',
                border: '1px solid rgba(59, 130, 246, 0.3)',
              }}>
                <span>🔍</span>
                <span style={{ fontWeight: 'bold' }}>ئەخلاق تەكشۈرۈش</span>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                backgroundColor: 'rgba(139, 92, 246, 0.2)',
                padding: '0.8rem 1.8rem',
                borderRadius: '30px',
                border: '1px solid rgba(139, 92, 246, 0.3)',
              }}>
                <span>🌐</span>
                <span style={{ fontWeight: 'bold' }}>قايتا قۇرۇلمىلاش</span>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                padding: '0.8rem 1.8rem',
                borderRadius: '30px',
                border: '1px solid rgba(16, 185, 129, 0.3)',
              }}>
                <span>🤝</span>
                <span style={{ fontWeight: 'bold' }}>خەلقئارالىق ھەمكارلىق</span>
              </div>
            </div>
          </div>
          
          {/* ئاخىرقى سۆز */}
          <div style={{
            backgroundColor: 'rgba(30, 41, 59, 0.8)',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center',
            border: '1px solid #475569',
            backdropFilter: 'blur(10px)',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💡</div>
            <p style={{ 
              margin: '0', 
              color: '#e2e8f0',
              fontSize: '1.2rem',
              lineHeight: '1.8',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              بىز دۇچ كېلىۋاتقان نەرسە تېخنىكا توغرىسىدىكى تاللاش ئەمەس، بەلكى ئارزۇ قىلىدىغان كەلگۈسىمىز توغرىسىدىكى تاللاش. 2030-يىلى ئەتراپىدا 6G نىڭ تولۇق يولغا قويۇلۇشىغا بىر قانچە يىل قالدى. بۇ ۋاقىت ئىچىدە، بىز پەقەت ئۈنۈم ۋە ئەقىلگە مۇۋاپىقلىقنى قوغلىشامدۇق ياكى ئىنساننىڭ ئىززەت-ھۆرمىتى ۋە كۆپ خىللىقىنى قەدىرلەمدۇق، ھەتتا «ئىسراپ قىلىش» ۋە «ئويۇن» ئۈچۈن بوشلۇق قالدۇرامدۇق؟
            </p>
          </div>
        </section>
      </main>

      {/* پۇت خەت رايونى */}
      <footer style={{
        backgroundColor: '#0f172a',
        padding: '3rem 2rem',
        borderTop: '1px solid #1e293b',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '2rem',
        }}>
          <div style={{ textAlign: 'right', flex: '1', minWidth: '250px' }}>
            <h4 style={{ color: '#94a3b8', marginBottom: '1rem' }}>تېخىمۇ كۆپ ئۇچۇر</h4>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#60a5fa', textDecoration: 'none' }}>6G ئۆلچەملىك كۈرەش توغرىسىدا</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#60a5fa', textDecoration: 'none' }}>رەقەملىك قوشكېزەكنىڭ كەلگۈسى</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#60a5fa', textDecoration: 'none' }}>تور-فىزىكىلىق سىستېما ۋە مەخپىيەتلىك</a>
              </li>
            </ul>
          </div>
          
          <div style={{ textAlign: 'right', flex: '1', minWidth: '250px' }}>
            <h4 style={{ color: '#94a3b8', marginBottom: '1rem' }}>ئىلمىي مەنبەلەر</h4>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#60a5fa', textDecoration: 'none' }}>3GPP 6G تەرەققىيات جەدۋىلى</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#60a5fa', textDecoration: 'none' }}>ئىنتېرنېت قۇرۇلمىسى توغرىسىدىكى تەتقىقاتلار</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#60a5fa', textDecoration: 'none' }}>گېئو-سىياسىي تېخنىكا تەھلىلى</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid #334155', 
          paddingTop: '2rem',
          color: '#64748b',
          fontSize: '0.95rem',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          <p style={{ marginBottom: '0.5rem' }}>
            © 2025 <strong style={{ color: '#3b82f6' }}>KeLBiL</strong> — تېخنىكا سىياسىتى ۋە كەلگۈسى جەمئىيەت توغرىسىدىكى تەتقىقات
          </p>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '1rem' }}>
            بۇ ماقالىدە كۆرسىتىلگەن پىكىرلەر مۇئەللىپنىڭ شەخسىي چۈشەندۈرۈشى بولۇپ، ئەسلىي ئىلمىي ماتېرىياللارغا نىسبەتەن تەھلىل ۋە چۈشەندۈرۈش قىلىنغان.
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
          
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          
          @media (max-width: 768px) {
            h1 {
              font-size: 2.2rem !important;
            }
            
            h2 {
              font-size: 1.6rem !important;
            }
            
            main {
              padding: 2rem 1rem !important;
            }
            
            header {
              padding: 3rem 1rem 2rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Blog43;