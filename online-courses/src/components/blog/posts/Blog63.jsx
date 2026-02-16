import React from 'react';

const Blog63 = () => {
  return (
    <div style={{
      direction: 'rtl',
      textAlign: 'right',
      fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
      lineHeight: '1.8',
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      color: '#333',
      backgroundColor: '#f8f9fa'
    }}>
      
      {/* باش ئۇنىۋېرسال بېتى */}
      <header style={{
        background: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
        color: 'white',
        padding: '30px',
        borderRadius: '10px',
        marginBottom: '30px',
        textAlign: 'center',
        boxShadow: '0 6px 15px rgba(26, 35, 126, 0.3)'
      }}>
        <h1 style={{
          fontSize: '2.5em',
          fontWeight: 'bold',
          marginBottom: '10px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          كۋانت كومپيۇتېر ئۇسۇللىرى ۋە ئاچقۇچلۇق سۆزلەر
        </h1>
        <p style={{
          fontSize: '1.2em',
          opacity: '0.9',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          كۋانت كومپيۇتېرلىقنىڭ ئاساسىي ئۇسۇللىرى ۋە مۇھىم تېرمىنلۇرلىرىغا ئومۇمىي كۆز قاراش
        </p>
      </header>

      {/* 5 خىل ئاساسىي ئۇسۇللار */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '2em',
          color: '#0d47a1',
          textAlign: 'center',
          marginBottom: '30px',
          paddingBottom: '10px',
          borderBottom: '3px solid #0d47a1'
        }}>
          <span style={{
            backgroundColor: '#0d47a1',
            color: 'white',
            padding: '5px 15px',
            borderRadius: '20px',
            fontSize: '0.8em',
            marginLeft: '10px'
          }}>
            5 خىل
          </span>
          كۋانت كومپيۇتېر ئاساسىي ئۇسۇللىرى
        </h2>

        {/* 1. ئۆتكۈر ئۆتكۈزۈشچانلىق */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          marginBottom: '25px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderLeft: '5px solid #2196f3'
        }}>
          <div style={{
            backgroundColor: '#e3f2fd',
            padding: '20px',
            borderBottom: '1px solid #bbdefb'
          }}>
            <h3 style={{
              fontSize: '1.6em',
              color: '#0d47a1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span>1. ئۆتكۈر ئۆتكۈزۈشچانلىق (Super Conducting)</span>
              <span style={{
                fontSize: '0.7em',
                backgroundColor: '#2196f3',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '15px'
              }}>
                Google, IBM, Hitachi, RIKEN
              </span>
            </h3>
            <p style={{ fontSize: '1.1em' }}>
              ئۆتكۈر ئۆتكۈزگۈچلەردىن ياسالغان سۈنئىي ئاتوملار (Josephson تۇتاشتۇرۇش نۇقتىلىرى) ئارقىلىق
              كۋانت بىتلىرىنى قۇرۇش. مىكرو دولقۇن ئىمپۇلسلىرى ۋە تېز دەرۋازا مەشغۇلاتى ئارقىلىق كونترول قىلىش ئاسان.
            </p>
          </div>
          
          <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h4 style={{
                  color: '#2e7d32',
                  fontSize: '1.3em',
                  marginBottom: '10px',
                  paddingRight: '15px',
                  borderRight: '3px solid #2e7d32'
                }}>
                  ئەۋزەللىكلىرى
                </h4>
                <ul style={{ paddingRight: '20px' }}>
                  <li>يۇقىرى تېخنىكىلىق پىشىپ يېتىلگەن (ھازىر ئاساسلىق ئېقىم)</li>
                  <li>تېز دەرۋازا بىر تەرەپ قىلىش</li>
                </ul>
              </div>
              
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h4 style={{
                  color: '#c62828',
                  fontSize: '1.3em',
                  marginBottom: '10px',
                  paddingRight: '15px',
                  borderRight: '3px solid #c62828'
                }}>
                  خىيىنلىقلار
                </h4>
                <ul style={{ paddingRight: '20px' }}>
                  <li>ئىنتايىن تۆۋەن تېمپېراتۇرا مۇھىتىنى تەلەپ قىلىدۇ</li>
                  <li>چوڭ سوۋۇتۇش ۋە سىم يۈكى ئون مىڭلىغان كۋانت بىتلىرىغا كېڭەيتىشنى قىيىنلاشتۇرىدۇ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 2. تۇتۇلغان ئىئون */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          marginBottom: '25px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderLeft: '5px solid #9c27b0'
        }}>
          <div style={{
            backgroundColor: '#f3e5f5',
            padding: '20px',
            borderBottom: '1px solid #e1bee7'
          }}>
            <h3 style={{
              fontSize: '1.6em',
              color: '#7b1fa2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span>2. تۇتۇلغان ئىئون (Trapped Ion)</span>
              <span style={{
                fontSize: '0.7em',
                backgroundColor: '#9c27b0',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '15px'
              }}>
                IonQ, Quantinuum
              </span>
            </h3>
            <p style={{ fontSize: '1.1em' }}>
              ئېلېكترو ماگنىت مەيدانىدا تۇتۇلغان ئىئونلارنى كۋانت بىتلىرى سۈپىتىدە ئىشلىتىش.
              لازېرلار ئارقىلىق كونترول قىلىنىدۇ. يۇقىرى ئېنىقلىق ۋە ئۇزۇن ئۆمۈر كۆرۈش ئالاھىدىلىكى.
            </p>
          </div>
          
          <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h4 style={{
                  color: '#2e7d32',
                  fontSize: '1.3em',
                  marginBottom: '10px',
                  paddingRight: '15px',
                  borderRight: '3px solid #2e7d32'
                }}>
                  ئەۋزەللىكلىرى
                </h4>
                <ul style={{ paddingRight: '20px' }}>
                  <li>بارلىق ئۇسۇللار ئىچىدە ئەڭ يۇقىرى دەرۋازا ئېنىقلىقى</li>
                  <li>ئۇزۇن ماسلىشىش ۋاقتى (كۋانت ھالىتى ئۇزۇن ۋاقىت ساقلىنىدۇ)</li>
                </ul>
              </div>
              
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h4 style={{
                  color: '#c62828',
                  fontSize: '1.3em',
                  marginBottom: '10px',
                  paddingRight: '15px',
                  borderRight: '3px solid #c62828'
                }}>
                  خىيىنلىقلار
                </h4>
                <ul style={{ paddingRight: '20px' }}>
                  <li>چوڭ ۋە مۇرەككەپ لازېر سىستېمىسى</li>
                  <li>ئاستا دەرۋازا سۈرئىتى (كىچىكلىتىش بىر خىل خىرىس)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 3. فوتون */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          marginBottom: '25px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderLeft: '5px solid #ff9800'
        }}>
          <div style={{
            backgroundColor: '#fff3e0',
            padding: '20px',
            borderBottom: '1px solid #ffe0b2'
          }}>
            <h3 style={{
              fontSize: '1.6em',
              color: '#ef6c00',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span>3. فوتون (Photonic)</span>
              <span style={{
                fontSize: '0.7em',
                backgroundColor: '#ff9800',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '15px'
              }}>
                NTT, PsiQuantum, Xanadu, OptQC
              </span>
            </h3>
            <p style={{ fontSize: '1.1em' }}>
              فوتونلارنى كۋانت بىتلىرى سۈپىتىدە ئىشلىتىش. ئوپتىكىلىق تالا يەتكۈزۈش ۋە ئۆي تېمپېراتۇرىسىدا مەشغۇلات قىلىش.
              خاتالىققا چىداملىق بولۇپ، كۋانت ئالاقىسىگە ماس كېلىدۇ.
            </p>
          </div>
          
          <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h4 style={{
                  color: '#2e7d32',
                  fontSize: '1.3em',
                  marginBottom: '10px',
                  paddingRight: '15px',
                  borderRight: '3px solid #2e7d32'
                }}>
                  ئەۋزەللىكلىرى
                </h4>
                <ul style={{ paddingRight: '20px' }}>
                  <li>ئۆي تېمپېراتۇرىسىدا ئىشلىيەلەيدۇ</li>
                  <li>ئوپتىكىلىق ئالاقە بىلەن ناھايىتى ياخشى ماسلىشىشچانلىق</li>
                  <li>خاتالىققا چىداملىق كودلار بىلەن بىرلەشتۈرۈش ئاسان</li>
                </ul>
              </div>
              
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h4 style={{
                  color: '#c62828',
                  fontSize: '1.3em',
                  marginBottom: '10px',
                  paddingRight: '15px',
                  borderRight: '3px solid #c62828'
                }}>
                  خىيىنچىلىقلار
                </h4>
                <ul style={{ paddingRight: '20px' }}>
                  <li>فوتون-فوتون ئۆز-ئارا تەسىر كۆرسىتىشىنى يارىتىشتىكى قىيىنچىلىق</li>
                  <li>يۇقىرى ساپلىقتىكى يەككە فوتون مەنبەسىنى تەلەپ قىلىدۇ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 4. نېيترال ئاتوم */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          marginBottom: '25px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderLeft: '5px solid #4caf50'
        }}>
          <div style={{
            backgroundColor: '#e8f5e9',
            padding: '20px',
            borderBottom: '1px solid #c8e6c9'
          }}>
            <h3 style={{
              fontSize: '1.6em',
              color: '#2e7d32',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span>4. نېيترال ئاتوم (Neutral Atom)</span>
              <span style={{
                fontSize: '0.7em',
                backgroundColor: '#4caf50',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '15px'
              }}>
                QuEra, Pasqal
              </span>
            </h3>
            <p style={{ fontSize: '1.1em' }}>
              نېيترال ئاتوملارنى لازېر بىلەن تۇتۇۋېلىش. Rydberg ھالىتىنى ئىشلىتىپ كۋانت بىتلىرى ئوتتۇرىسىدىكى ئۆز-ئارا تەسىر كۆرسىتىشكە يول قويۇش.
              قويۇقلاشتۇرۇش ئاسان، چوڭ كۆلەمدە يولغا قويۇش ئۈچۈن پايدىلىق.
            </p>
          </div>
          
          <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h4 style={{
                  color: '#2e7d32',
                  fontSize: '1.3em',
                  marginBottom: '10px',
                  paddingRight: '15px',
                  borderRight: '3px solid #2e7d32'
                }}>
                  ئەۋزەللىكلىرى
                </h4>
                <ul style={{ paddingRight: '20px' }}>
                  <li>ئاتوملارنى 2D/3D قاتارلىرىغا قايتا تەشكىللەشكە بولىدۇ → كېڭەيتىش ئاسان</li>
                  <li>لازېر تېخنىكىسىدىكى تەرەققىياتلار سەۋەبىدىن تېز سۈرئەتتە ئېشىش</li>
                </ul>
              </div>
              
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h4 style={{
                  color: '#c62828',
                  fontSize: '1.3em',
                  marginBottom: '10px',
                  paddingRight: '15px',
                  borderRight: '3px solid #c62828'
                }}>
                  خىيىنچىلىقلار
                </h4>
                <ul style={{ paddingRight: '20px' }}>
                  <li>خاتالىق نىسبىتىنى تۆۋەنلىتىش بىر خىل خىرىس</li>
                  <li>سىستېما مىقياسىدا مۇقىملاشتۇرۇش تەلەپ قىلىنىدۇ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 5. يېرىم ئۆتكۈزگۈچ كۋانت نۇقتىسى */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          marginBottom: '25px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderLeft: '5px solid #00bcd4'
        }}>
          <div style={{
            backgroundColor: '#e0f7fa',
            padding: '20px',
            borderBottom: '1px solid #b2ebf2'
          }}>
            <h3 style={{
              fontSize: '1.6em',
              color: '#006064',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span>5. يېرىم ئۆتكۈزگۈچ كۋانت نۇقتىسى (Semiconductor Quantum Dot)</span>
              <span style={{
                fontSize: '0.7em',
                backgroundColor: '#00bcd4',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '15px'
              }}>
                Intel, QuTech, UNSW
              </span>
            </h3>
            <p style={{ fontSize: '1.1em' }}>
              يېرىم ئۆتكۈزگۈچلەردىكى ئېلېكترون ئايلىنىشىنى كۋانت بىتلىرى سۈپىتىدە ئىشلىتىش.
              مەۋجۇت يېرىم ئۆتكۈزگۈچ تېخنىكىسى قوللىنىلىشى مۇمكىن.
            </p>
          </div>
          
          <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h4 style={{
                  color: '#2e7d32',
                  fontSize: '1.3em',
                  marginBottom: '10px',
                  paddingRight: '15px',
                  borderRight: '3px solid #2e7d32'
                }}>
                  ئاشۇرۇشلار
                </h4>
                <ul style={{ paddingRight: '20px' }}>
                  <li>يېرىم ئۆتكۈزگۈچ جەريانلىرىنى ئىشلىتىپ كۆپ مىقداردا ئىشلەپچىقىرىش ۋە بىر گەۋدىلەشتۈرۈش مۇمكىن</li>
                  <li>كىچىكلىتىش ئاسان</li>
                </ul>
              </div>
              
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h4 style={{
                  color: '#c62828',
                  fontSize: '1.3em',
                  marginBottom: '10px',
                  paddingRight: '15px',
                  borderRight: '3px solid #c62828'
                }}>
                  خىيىنلار
                </h4>
                <ul style={{ paddingRight: '20px' }}>
                  <li>قىسقا ماسلىشىش ۋاقتى</li>
                  <li>يۇقىرى ئېنىقلىقتىكى ئايلىنىش كونتروللۇقى ۋە خاتالىقنى تۈزىتىشنى بىر گەۋدىلەشتۈرۈش مەسىلە</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* باشقا تەتقىقاتلار */}
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '20px',
          borderRadius: '10px',
          marginTop: '30px',
          border: '2px dashed #757575'
        }}>
          <h3 style={{
            fontSize: '1.5em',
            color: '#616161',
            textAlign: 'center',
            marginBottom: '15px'
          }}>
            باشقا تەتقىقاتلار
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '15px'
          }}>
            <span style={{
              backgroundColor: '#607d8b',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.9em'
            }}>
              توپولوگىيەلىك كۇبىتلار (Microsoft)
            </span>
            <span style={{
              backgroundColor: '#607d8b',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.9em'
            }}>
              ئالماس NV مەركەزلىرى
            </span>
          </div>
        </div>
      </section>

      {/* ئايرىم بۆلەك */}
      <div style={{
        textAlign: 'center',
        margin: '40px 0',
        padding: '20px',
        background: 'linear-gradient(45deg, #FF6B6B 0%, #FF8E53 50%, #FFD166 100%)',
        borderRadius: '10px',
        color: 'white'
      }}>
        <div style={{ fontSize: '2.5em', marginBottom: '10px' }}>☆★☆★☆★☆★☆</div>
        <h2 style={{ fontSize: '2em', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
          كۋانت كومپيۇتېر ئاچقۇچلۇق سۆزلىرى
        </h2>
      </div>

      {/* ئاچقۇچلۇق سۆزلەر */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {/* ھەر بىر كارتۇنچا */}
        {[
          {
            term: "كۋانت بىتى (Qubit)",
            definition: "كۋانت كومپيۇتېرىدىكى ئۇچۇر ساقلاشنىڭ ئاساسىي بىرلىكى. كۋانت ئۇچۇرلىرىنى ساقلايدىغان ئەڭ كىچىك بىرلىك. 0 ۋە 1 نىڭ ئۈستى-ئۈستى ئورنىنى پەرەز قىلالايدۇ.",
            color: "#2196f3"
          },
          {
            term: "كۋانت ئۈستى-ئۈستى ئورنى (Superposition)",
            definition: "بىر كۋانت بىتىنىڭ بىرلا ۋاقىتتا كۆپ خىل ھالەتكە ئىگە بولۇش ھادىسىسى.",
            color: "#9c27b0"
          },
          {
            term: "كۋانت چىرمىشىپ قېلىشى (Entanglement)",
            definition: "يىراق كۋانت بىتلىرىنىڭ كۈچلۈك ئۆزئارا باغلىنىشى ۋە ئۇلارنىڭ ھالەتلىرىنىڭ بىرلىككە كېلىشى ھادىسىسى.",
            color: "#f44336"
          },
          {
            term: "كۋانت تېلېپورتاتسىيەسى (Quantum Teleportation)",
            definition: "«كۋانت چىرمىشىپ قېلىشى» ئارقىلىق كۋانت ئۇچۇرلىرىنى يىراق كۋانتقا يۆتكەش ئۇسۇلى.",
            color: "#4caf50"
          },
          {
            term: "كۋانت ماسلىشىشچانلىقى (Quantum Coherence)",
            definition: "كۋانت بىتىنىڭ بىرلا ۋاقىتتا 0 ۋە 1 نىڭ ئۈستى-ئۈستى ئورنىغا ياكى كۋانت ئارىلىشىشىغا ئىگە بولالايدىغان خۇسۇسىيىتى.",
            color: "#ff9800"
          },
          {
            term: "EPR پارادوكسى",
            definition: "ئېينشتېين ۋە باشقا ئۈچ ئادەم كۋانت چىرمىشىنىڭ كۋانت مېخانىكىسى نەزەرىيىسىدىكى تولۇقسىزلىقنى ئىپادىلەيدىغانلىقىغا گۇمان بىلەن قارىدى.",
            color: "#795548"
          },
          {
            term: "كۋانت كىلونلاشماسلىق تېئورېمىسى",
            definition: "نامەلۇم كۋانت ھالىتىنى مۇكەممەل كۆچۈرۈش مۇمكىن ئەمەسلىكى ئوتتۇرىغا قويۇلغان ئاساسىي تېئورېم.",
            color: "#607d8b"
          },
          {
            term: "شورنىڭ ئالگورىزىمى",
            definition: "پېتېر شور تەرىپىدىن ئوتتۇرىغا قويۇلغان تېز ئاساسلىق فاكتورلاشتۇرۇش ئۈچۈن كۋانت ئالگورىزىمى. RSA شىفىرلاش بىر قانچە سائەت ئىچىدە بۇزۇلىدۇ.",
            color: "#3f51b5"
          },
          {
            term: "گروۋېرنىڭ ئالگورىزمى",
            definition: "ھىندىستانلىق فىزىكا ئالىمى لوۋ كۇمار گروۋېر تەرىپىدىن ئىجاد قىلىنغان، تەرتىپسىز سانلىق مەلۇمات ئامبىرىدىكى مەلۇم سانلىق مەلۇماتلارنى تېز ئىزدەيدىغان كۋانت ئالگورىزىمى.",
            color: "#009688"
          },
          {
            term: "شرۆدىنگېرنىڭ مۈشۈكى",
            definition: "1935-يىلى ئېرۋىن شرۆدىنگېر تەرىپىدىن ئىجاد قىلىنغان بىر ئوي-پىكىر تەجرىبىسى. كۋانت مېخانىكىسىنىڭ غەلىتەلىكىنى نامايان قىلىدىغان داڭلىق ئوي-پىكىر تەجرىبىسى.",
            color: "#e91e63"
          },
          {
            term: "PQC (كۋانتتىن كېيىنكى شىفىرلاش)",
            definition: "كۋانت كومپيۇتېرى ئارقىلىقمۇ شىفىرلىغىلى بولمايدىغان شىفىرلاش تېخنىكىسى.",
            color: "#673ab7"
          },
          {
            term: "QKD (كۋانت ئاچقۇچ تارقىتىش)",
            definition: "شىفىرلانغان ئالاقە ئۈچۈن لازىم بولغان «ئورتاق ئاچقۇچ» نى بىخەتەر ئورتاقلىشىش تېخنىكىسى.",
            color: "#00bcd4"
          },
          {
            term: "CRYSTALS-Kyber",
            definition: "كۋانتقا چىداملىق، تورغا ئاساسلانغان ئاممىۋى ئاچقۇچ شىفىرلاش ئۇسۇلى. NIST تەرىپىدىن ئۆلچەملەشتۈرۈلگەن.",
            color: "#8bc34a"
          },
          {
            term: "CRYSTALS-Dilithium",
            definition: "كۋانتقا چىداملىق، تور شەكىللىك يۇقىرى سۈرئەتلىك رەقەملىك ئىمزا ئۇسۇلى. NIST تەرىپىدىن ئۆلچەملەشتۈرۈلگەن.",
            color: "#ff5722"
          },
          {
            term: "QFw (كۋانت رامكىسى)",
            definition: "كۋانت ھېسابلاشنىڭ ئالدى ۋە ئارقا ئۇچىنى بوش تۇتاشتۇرۇش رامكىسى.",
            color: "#795548"
          }
        ].map((item, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            borderTop: `5px solid ${item.color}`,
            ':hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
            }
          }}>
            <h3 style={{
              color: item.color,
              fontSize: '1.4em',
              marginBottom: '15px',
              paddingBottom: '10px',
              borderBottom: `2px solid ${item.color}20`
            }}>
              {item.term}
            </h3>
            <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
              {item.definition}
            </p>
          </div>
        ))}
      </section>

      {/* ئاخىرقى خاتىرە */}
      <footer style={{
        backgroundColor: '#263238',
        color: 'white',
        padding: '30px',
        borderRadius: '10px',
        textAlign: 'center',
        marginTop: '30px'
      }}>
        <h3 style={{
          fontSize: '1.8em',
          marginBottom: '20px',
          color: '#bbdefb'
        }}>
          كۋانت كومپيۇتېر تېخنىكىسىنىڭ كەلگۈسى
        </h3>
        <p style={{
          fontSize: '1.1em',
          maxWidth: '800px',
          margin: '0 auto 20px',
          lineHeight: '1.8'
        }}>
          كۋانت كومپيۇتېرلىرى ھازىر تېز تەرەققىيات باسقۇچىدا تۇرۇۋاتىدۇ. 
          ھەر بىر ئۇسۇلنىڭ ئۆزىگە خاس ئەۋزەللىكلىرى ۋە خىيىنلىقلارى بار بولۇپ، 
          كەلگۈسىدە بۇ تېخنىكىلارنىڭ قانداق رىقابەتلىشىپ-ھەمكارلىشىپ تەرەققىي قىلىشى مۇھىم.
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '20px'
        }}>
          <span style={{
            backgroundColor: '#37474f',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.9em'
          }}>
            #كۋانتكومپيۇتېر
          </span>
          <span style={{
            backgroundColor: '#37474f',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.9em'
          }}>
            #كۋانتمېخانىكىسى
          </span>
          <span style={{
            backgroundColor: '#37474f',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.9em'
          }}>
            #ئىلمىي_تەتقىقات
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Blog63;