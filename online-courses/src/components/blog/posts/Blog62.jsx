import React from 'react';

const Blog62 = () => {
  return (
    <div style={{
      direction: 'rtl',
      textAlign: 'right',
      fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
      lineHeight: '1.8',
      padding: '20px',
      maxWidth: '1000px',
      margin: '0 auto',
      color: '#333',
      backgroundColor: '#f9f9f9'
    }}>
      
      {/* باش ئۇنىۋېرسال بېتى */}
      <header style={{
        borderBottom: '3px solid #1a237e',
        paddingBottom: '20px',
        marginBottom: '30px'
      }}>
        <h1 style={{
          fontSize: '2.3em',
          color: '#0d47a1',
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '10px'
        }}>
          كۋانت چاستوتا ئۆزگەرتىش (QFC) نىڭ ئاساسىي پىرىنسىپلىرى ۋە ئەڭ يېڭى تەتقىقاتلار
        </h1>
        <div style={{
          textAlign: 'center',
          color: '#666',
          fontSize: '1em'
        }}>
          <span style={{ marginLeft: '15px' }}>KeLBiL</span>
          <span> | </span>
          <span>2026-يىلى 1-ئاينىڭ 5-كۈنى، كەچ سائەت 10:16</span>
        </div>
      </header>

      {/* كىرىش سۆزى */}
      <section style={{
        backgroundColor: '#e3f2fd',
        padding: '25px',
        borderRadius: '8px',
        marginBottom: '30px',
        borderRight: '4px solid #2196f3'
      }}>
        <h2 style={{
          fontSize: '1.6em',
          color: '#0d47a1',
          marginBottom: '15px'
        }}>
          كىرىش سۆز
        </h2>
        <p style={{ fontSize: '1.1em' }}>
          كۋانت تېخنىكىسى كەلگۈسىدىكى ئالاقە ۋە ھېسابلاش ساھەسىدە ئىنقىلاب پەيدا قىلىشى مۇمكىن. 
          كۋانت چاستوتا ئۆزگەرتىش (QFC) ھەر خىل دولقۇن ئۇزۇنلۇقىدىكى فوتونلار (يورۇقلۇق زەررىچىلىرى) 
          ئوتتۇرىسىدىكى كۋانت ئۇچۇرلىرىنى ئۆزگەرتىش تېخنىكىسى سۈپىتىدە دىققەتنى تارتماقتا. 
          بۇ ماقالە كۋانت چاستوتا ئۆزگەرتىشنىڭ ئاساسىي ئۇقۇملىرى ۋە ئەڭ يېڭى تەتقىقات 
          «μs ئۇزۇنلۇقتىكى فوتونلارنىڭ كۆرۈنگەندىن تېلېكوم-C-باسقۇچقىچە كۋانت چاستوتا ئۆزگەرتىشى» 
          (2024-يىلى 12-ئايدا نەشر قىلىنغان) نى چۈشىنىش ئاسان بولغان چۈشەندۈرۈش بىلەن تەمىنلەيدۇ.
        </p>
      </section>

      {/* ئىلمىي خۇلاسە بۆلىكى */}
      <div style={{
        backgroundColor: '#fff3e0',
        padding: '15px',
        borderRadius: '6px',
        marginBottom: '25px',
        border: '1px dashed #ff9800'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ color: '#e65100', fontSize: '1.3em', marginBottom: '8px' }}>
              μs ئۇزۇنلۇقتىكى فوتونلارنىڭ كۆرۈنگەندىن تېلېكوم-C-باسقۇچقىچە كۋانت چاستوتا ئۆزگەرتىشى
            </h3>
            <p style={{ color: '#555', fontSize: '0.95em' }}>
              كۋانت چاستوتا ئۆزگەرتىش (QFC) كەڭ قوللىنىلىدىغان تېخنىكا
              <br/>
              <span style={{ color: '#1a237e' }}>arxiv.org</span>
            </p>
          </div>
          <div style={{
            backgroundColor: '#ff5722',
            color: 'white',
            padding: '5px 12px',
            borderRadius: '20px',
            fontSize: '0.9em'
          }}>
            يېڭى تەتقىقات
          </div>
        </div>
      </div>

      {/* 1-قىسىم */}
      <section style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '10px',
        boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
        marginBottom: '35px'
      }}>
        <h2 style={{
          fontSize: '1.8em',
          color: '#1a237e',
          borderRight: '5px solid #4caf50',
          paddingRight: '15px',
          marginBottom: '20px'
        }}>
          1. كۋانت ئۇچۇر ئالاقىسى دېگەن نېمە؟
        </h2>
        <p style={{ fontSize: '1.1em', marginBottom: '15px' }}>
          كۋانت ئۇچۇر ئالاقىسى كۋانت مېخانىكىسىنىڭ خۇسۇسىيەتلىرىنى ئىشلىتىپ ئۇچۇر ئالماشتۇرۇش تېخنىكىسى. 
          ئۇنىڭ بەزى ئالاھىدە تېخنىكىلىرى تۆۋەندىكىلەرنى ئۆز ئىچىگە ئالىدۇ:
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '20px',
          marginBottom: '20px'
        }}>
          <div style={{
            backgroundColor: '#f1f8e9',
            padding: '20px',
            borderRadius: '8px',
            borderLeft: '4px solid #8bc34a'
          }}>
            <h4 style={{ color: '#33691e', fontSize: '1.3em', marginBottom: '10px' }}>
              كۋانت بىتى (qubit)
            </h4>
            <p>
              بىرلا ۋاقىتتا 0 ۋە 1 ھالەتكە ئىگە بولۇش خۇسۇسىيىتىنى ئىشلىتىش (ئۈستۈنكى ئورۇن).
            </p>
          </div>
          
          <div style={{
            backgroundColor: '#f3e5f5',
            padding: '20px',
            borderRadius: '8px',
            borderLeft: '4px solid #9c27b0'
          }}>
            <h4 style={{ color: '#4a148c', fontSize: '1.3em', marginBottom: '10px' }}>
              كۋانت چىرمىشىپ قېلىش
            </h4>
            <p>
              ئىككى ياكى ئۇنىڭدىن ئارتۇق زەررىچىلەرنىڭ بىر-بىرىگە چىڭ باغلىنىپ، 
              ئارىلىققا قارىماي بىر-بىرىگە تەسىر كۆرسىتىش خۇسۇسىيىتى.
            </p>
          </div>
          
          <div style={{
            backgroundColor: '#e8eaf6',
            padding: '20px',
            borderRadius: '8px',
            borderLeft: '4px solid #3f51b5'
          }}>
            <h4 style={{ color: '#1a237e', fontSize: '1.3em', marginBottom: '10px' }}>
              كۋانت ئاچقۇچ تەقسىماتى (QKD)
            </h4>
            <p>
              ئوغرىلىقچە ئاڭلاشنى بايقىيالايدىغان بىخەتەر ئالاقە تېخنىكىسى.
            </p>
          </div>
        </div>
        
        <p style={{ fontSize: '1.1em', fontStyle: 'italic', color: '#555' }}>
          فوتون ئارقىلىق ئۇچۇر يوللاش كۋانت ئالاقە تورى قۇرۇشنىڭ ئاچقۇچى. 
          قانداقلا بولمىسۇن، فوتون دولقۇن ئۇزۇنلۇقى ئوخشىمايدىغان كۋانت ئۈسكۈنىلىرى ئوتتۇرىسىدىكى بىۋاسىتە ئالاقە قىيىن.
        </p>
      </section>

      {/* 2-قىسىم */}
      <section style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '10px',
        boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
        marginBottom: '35px'
      }}>
        <h2 style={{
          fontSize: '1.8em',
          color: '#1a237e',
          borderRight: '5px solid #ff9800',
          paddingRight: '15px',
          marginBottom: '20px'
        }}>
          2. كۋانت چاستوتا ئۆزگەرتىش (QFC) دېگەن نېمە؟
        </h2>
        <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>
          كۋانت چاستوتا ئۆزگەرتىش فوتونلارنىڭ دولقۇن ئۇزۇنلۇقىنى ئۆزگەرتىش ئارقىلىق 
          ئوخشىمىغان كۋانت ئۈسكۈنىلىرى ئوتتۇرىسىدىكى ئالاقىنى ئەمەلگە ئاشۇرىدىغان تېخنىكا.
        </p>
        
        <div style={{
          backgroundColor: '#e8f5e9',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '25px'
        }}>
          <h3 style={{ color: '#2e7d32', fontSize: '1.4em', marginBottom: '15px' }}>
            مىسال:
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{
              backgroundColor: '#c8e6c9',
              padding: '15px',
              borderRadius: '6px',
              flex: '1',
              minWidth: '200px'
            }}>
              <h4 style={{ color: '#1b5e20', textAlign: 'center' }}>كۆرۈنىدىغان نۇر (606 nm)</h4>
              <p style={{ textAlign: 'center', marginTop: '10px' }}>
                كۋانت خاتىرە (ئۇچۇر ساقلايدىغان ئۈسكۈنىلەر) ئۈچۈن ماس كېلىدۇ.
              </p>
            </div>
            <div style={{
              textAlign: 'center',
              alignSelf: 'center',
              fontSize: '1.5em',
              color: '#f57c00'
            }}>
              → QFC →
            </div>
            <div style={{
              backgroundColor: '#bbdefb',
              padding: '15px',
              borderRadius: '6px',
              flex: '1',
              minWidth: '200px'
            }}>
              <h4 style={{ color: '#0d47a1', textAlign: 'center' }}>تېلېكوم بەلبېغى (1552 nm)</h4>
              <p style={{ textAlign: 'center', marginTop: '10px' }}>
                ئۇزۇن مۇساپىلىك ئالاقە ئۈچۈن ماس كېلىدۇ.
              </p>
            </div>
          </div>
        </div>
        
        <div style={{
          backgroundColor: '#fff8e1',
          padding: '20px',
          borderRadius: '8px',
          borderRight: '4px solid #ffb300'
        }}>
          <h3 style={{ color: '#ff6f00', fontSize: '1.4em', marginBottom: '15px' }}>
            QFC پىرىنسىپى
          </h3>
          <p style={{ marginBottom: '15px' }}>
            QFC «پەرق چاستوتا ھاسىل قىلىش (DFG)» دەپ ئاتىلىدىغان ئوپتىكىلىق جەرياننى ئىشلىتىدۇ. 
            ئېنىق قىلىپ ئېيتقاندا، ئۇ تۆۋەندىكى باسقۇچلارنى ئۆز ئىچىگە ئالىدۇ:
          </p>
          <ol style={{ paddingRight: '20px' }}>
            <li style={{ marginBottom: '10px' }}>
              كىرىش فوتونلىرى (ئۆزگەرتىلمەكچى بولغان نۇرنىڭ دولقۇن ئۇزۇنلۇقى) ۋە پومپا نۇرى 
              (ئۆزگەرتىشنى ئىلگىرى سۈرىدىغان نۇر) سىزىقسىز ئوپتىكىلىق ماتېرىيالغا چۈشىدۇ.
            </li>
            <li>
              ئىككى نۇر نۇرى ئوتتۇرىسىدىكى ئېنېرگىيە پەرقىگە ئاساسەن، 
              يېڭى دولقۇن ئۇزۇنلۇقىدىكى فوتونلار (چىقىرىش فوتونلىرى) ھاسىل قىلىنىدۇ.
            </li>
          </ol>
        </div>
      </section>

      {/* 3-قىسىم */}
      <section style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '10px',
        boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
        marginBottom: '35px'
      }}>
        <h2 style={{
          fontSize: '1.8em',
          color: '#1a237e',
          borderRight: '5px solid #9c27b0',
          paddingRight: '15px',
          marginBottom: '20px'
        }}>
          3. ئەڭ يېڭى تەتقىقاتقا ئومۇمىي نەزەر
        </h2>
        
        <div style={{
          backgroundColor: '#fce4ec',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '25px'
        }}>
          <h3 style={{ 
            color: '#880e4f', 
            fontSize: '1.5em', 
            marginBottom: '15px',
            textAlign: 'center'
          }}>
            ماقالە تېمىسى
          </h3>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '1.3em', 
            color: '#ad1457',
            fontWeight: 'bold'
          }}>
            μs ئۇزۇنلۇقتىكى فوتونلارنىڭ كۆرۈنگەن نۇردىن تېلېكوم-C بەلبېغىغا كۋانت چاستوتا ئۆزگەرتىش
          </p>
        </div>
        
        <h3 style={{ color: '#4a148c', fontSize: '1.4em', marginBottom: '15px' }}>
          بۇ تەتقىقات تۆۋەندىكى نەتىجىلەرنى دوكلات قىلىدۇ:
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '20px',
          marginBottom: '25px'
        }}>
          <div style={{
            backgroundColor: '#f3e5f5',
            padding: '20px',
            borderRadius: '8px'
          }}>
            <h4 style={{ color: '#6a1b9a', fontSize: '1.2em', marginBottom: '10px' }}>
              دولقۇن ئۇزۇنلۇقىنى ئۆزگەرتىش
            </h4>
            <p>606 nm (كۆرۈنگەن نۇر) دىن 1552 nm (تېلېكوم بەلبېغى) گىچە كۋانت چاستوتا ئۆزگەرتىش.</p>
          </div>
          
          <div style={{
            backgroundColor: '#e1f5fe',
            padding: '20px',
            borderRadius: '8px'
          }}>
            <h4 style={{ color: '#01579b', fontSize: '1.2em', marginBottom: '10px' }}>
              نىشان فوتونلىرى
            </h4>
            <p>μs تەرتىپىدىكى ئاجىز ماسلىشىشچان ئىمپۇلسلار (كۋانت خاتىرە ساقلىغۇچتىن تارقىتىلغان فوتونلارغا ئوخشايدۇ).</p>
          </div>
          
          <div style={{
            backgroundColor: '#e8f5e9',
            padding: '20px',
            borderRadius: '8px'
          }}>
            <h4 style={{ color: '#1b5e20', fontSize: '1.2em', marginBottom: '10px' }}>
              يۇقىرى سىگنال-شاۋقۇن نىسبىتى (SNR)
            </h4>
            <p>10 μs ئىمپۇلس بىلەن 460 SNR غا ئېرىشتى.</p>
          </div>
        </div>
        
        <div style={{
          backgroundColor: '#fff3e0',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h3 style={{ color: '#e65100', fontSize: '1.4em', marginBottom: '15px' }}>
            ئىشلەتكەن تېخنىكا ۋە ئۈسكۈنىلەر
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '15px'
          }}>
            <div>
              <h4 style={{ color: '#bf360c', marginBottom: '8px' }}>ماتېرىيال:</h4>
              <p>MgO:ppLN (ماگنىي قوشۇلغان دەۋرىيلىك پوللۇق لىتىي نىئوبات)، ئۆزگىچە سىزىقسىز ئوپتىكىلىق ماتېرىيال.</p>
            </div>
            
            <div>
              <h4 style={{ color: '#bf360c', marginBottom: '8px' }}>ناسپا چىرىغى:</h4>
              <p>994 nm ئۈزلۈكسىز دولقۇن (CW) ناسپا چىرىغى.</p>
            </div>
            
            <div>
              <h4 style={{ color: '#bf360c', marginBottom: '8px' }}>سپېكترلىق سۈزگۈچ:</h4>
              <p>شاۋقۇننى باستۇرۇش ئۈچۈن بەلۋاغ كەڭلىكىنى 12.5 MHz غىچە تارايتىش.</p>
            </div>
          </div>
        </div>
        
        <div style={{
          marginTop: '25px',
          padding: '20px',
          backgroundColor: '#e1f5fe',
          borderRadius: '8px',
          borderLeft: '4px solid #0288d1'
        }}>
          <h3 style={{ color: '#01579b', fontSize: '1.4em', marginBottom: '10px' }}>
            نەتىجىلەرنىڭ ئەھمىيىتى
          </h3>
          <p>
            بۇ تەتقىقات كۋانت خاتىرە ۋە كۋانت تورى ئوتتۇرىسىدىكى بوشلۇقنى تولدۇرۇشقا ياردەم بېرىدىغان 
            تېخنىكا سۈپىتىدە دىققەتنى تارتماقتا. يۇقىرى SNR كۋانت ئۇچۇرىنىڭ ئىشەنچلىكلىكىنى 
            ساقلاپ قېلىش بىلەن بىر ۋاقىتتا ئۇزۇن مۇساپىلىك ئالاقىنى ئەمەلگە ئاشۇرۇشنىڭ ئاچقۇچى.
          </p>
        </div>
      </section>

      {/* 4-قىسىم */}
      <section style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '10px',
        boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
        marginBottom: '35px'
      }}>
        <h2 style={{
          fontSize: '1.8em',
          color: '#1a237e',
          borderRight: '5px solid #2196f3',
          paddingRight: '15px',
          marginBottom: '20px'
        }}>
          4. قوللىنىشچان پروگراممىلار ۋە كەلگۈسى ئىستىقبالى
        </h2>
        
        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ color: '#1565c0', fontSize: '1.4em', marginBottom: '15px' }}>
            ئىشلەتكەن پروگراممىلار
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '15px'
          }}>
            <div style={{
              backgroundColor: '#e3f2fd',
              padding: '15px',
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              <h4 style={{ color: '#0d47a1' }}>كۋانت تورى</h4>
              <p>دۇنياۋى كۋانت ئىنتېرنېت قۇرۇش.</p>
            </div>
            
            <div style={{
              backgroundColor: '#e8f5e9',
              padding: '15px',
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              <h4 style={{ color: '#1b5e20' }}>كۋانت ھېسابلاش</h4>
              <p>ھەر خىل كۋانت ئۈسكۈنىلىرى ئوتتۇرىسىدىكى ھەمكارلىق.</p>
            </div>
            
            <div style={{
              backgroundColor: '#fff3e0',
              padding: '15px',
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              <h4 style={{ color: '#e65100' }}>بىخەتەر ئالاقە</h4>
              <p>كۋانت ئاچقۇچ تارقىتىش ئىقتىدارىنى ياخشىلاش.</p>
            </div>
          </div>
        </div>
        
        <div style={{
          backgroundColor: '#f3e5f5',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h3 style={{ color: '#7b1fa2', fontSize: '1.4em', marginBottom: '15px' }}>
            بۇ تەتقىقاتنىڭ ئەھمىيىتى
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '20px'
          }}>
            <div>
              <h4 style={{ color: '#4a148c', marginBottom: '10px' }}>
                كۋانت ئىنتېرنېتىغا قاراپ يول
              </h4>
              <p>بۇ تەتقىقات كەلگۈسىدىكى كۋانت ئىنتېرنېتىنى قۇرۇش يولىدا مۇھىم قەدەم.</p>
            </div>
            
            <div>
              <h4 style={{ color: '#4a148c', marginBottom: '10px' }}>
                ھەر خىل كۋانت تېخنىكىلىرىنى بىرلەشتۈرۈش
              </h4>
              <p>كۋانت ئىچكى ساقلىغۇچ ۋە ئالاقە تورىنى بىرلەشتۈرۈش ئىمكانىيىتى.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5-قىسىم */}
      <section style={{
        backgroundColor: '#e8f5e9',
        padding: '30px',
        borderRadius: '10px',
        marginBottom: '30px',
        border: '2px solid #2e7d32'
      }}>
        <h2 style={{
          fontSize: '1.8em',
          color: '#1b5e20',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          5. خۇلاسە
        </h2>
        <p style={{ fontSize: '1.2em', marginBottom: '15px', textAlign: 'center' }}>
          كۋانت چاستوتا ئۆزگەرتىش كۋانت تېخنىكىسىنى تەرەققىي قىلدۇرۇش ئۈچۈن مۇھىم تېخنىكا. 
          بۇ تەتقىقات كۆرۈنگەن نۇردىن تېلېكوم بەلبېغىغىچە ئۈنۈملۈك، يۇقىرى ئېنىقلىقتىكى 
          ئۆزگەرتىشنى قولغا كەلتۈردى، بۇ كۋانت ئالاقە تورىنى ئەمەلگە ئاشۇرۇش 
          يولىدا مۇھىم ئىلگىرىلەشلەرنى كۆرسەتتى.
        </p>
        <div style={{
          backgroundColor: '#c8e6c9',
          padding: '15px',
          borderRadius: '8px',
          marginTop: '20px'
        }}>
          <p style={{ 
            fontSize: '1.1em', 
            color: '#1b5e20',
            textAlign: 'center',
            fontStyle: 'italic'
          }}>
            بىرىنچى يىللىق ئوقۇغۇچىلار، بۇ ساھەنىڭ كەلگۈسىدە تۇرمۇشىمىزنى 
            قانداق ئۆزگەرتىدىغانلىقىغا دىققەت قىلىڭلار!
          </p>
        </div>
      </section>

      {/* تۆۋەنكى قىسىم */}
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <p style={{ textAlign: 'center', marginBottom: '15px' }}>
          <span style={{ 
            display: 'inline-block',
            backgroundColor: '#3f51b5',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            ئەگەر ياقتۇرسىڭىز، قوللاپ قويۇڭ!
          </span>
        </p>
        <div style={{ textAlign: 'center' }}>
          <span style={{
            display: 'inline-block',
            backgroundColor: '#ff9800',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.9em',
            margin: '0 5px'
          }}>
            چىپ بىلەن قوللاپ قويۇڭ
          </span>
          <span style={{
            display: 'inline-block',
            backgroundColor: '#9c27b0',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.9em',
            margin: '0 5px'
          }}>
            #كۋانتمېخانىكىسى
          </span>
        </div>
      </div>

      {/* ئاخىرقى خاتىرە */}
      <footer style={{
        marginTop: '30px',
        paddingTop: '20px',
        borderTop: '1px solid #ddd',
        textAlign: 'center',
        color: '#666',
        fontSize: '0.9em'
      }}>
        <p>© 2026 KeLBiL. بارلىق ھوقۇقلار قوغدىلىدى.</p>
        <p style={{ marginTop: '5px' }}>
          بۇ ماقالىدا كۆرسىتىلگەن ئۇچۇرلار 2024-يىل 12-ئاينىڭ ئىلمىي تەتقىقاتىغا ئاساسەن تەييارلاندى.
        </p>
      </footer>
    </div>
  );
};

export default Blog62;