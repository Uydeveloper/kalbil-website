import React, { useState, useEffect } from "react";
import {
  Loader2,
  ExternalLink,
  BookOpen,
  Search,
  Sparkles,
  AlertTriangle,
  RefreshCw,
  Layout,
  Smartphone,
  Globe,
  CheckCircle,
  Info
} from "lucide-react";

const STREAMLIT_URL ="https://kelbil-projects-jgwmfqjsenk9jdqv5pkw83.streamlit.app/";

const UyghurLetterFinder = () => {
  const [showApp, setShowApp] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [viewMode, setViewMode] = useState("desktop"); // 'desktop' | 'mobile'
  const [showInstructions, setShowInstructions] = useState(false);
  
  // ئۆلچەم ئۆزگەرگەندە
  useEffect(() => {
    const handleResize = () => {
      setViewMode(window.innerWidth < 768 ? "mobile" : "desktop");
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenApp = () => {
    setLoading(true);
    setShowApp(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const handleIframeError = () => {
    setIframeError(true);
    setLoading(false);
  };

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    setLoading(false);
  };

  const refreshIframe = () => {
    setIframeLoaded(false);
    setLoading(true);
    const iframe = document.querySelector("iframe");
    iframe.src = iframe.src;
  };

  const features = [
    {
      icon: <Search className="w-5 h-5" />,
      title: "ئىزلىمە ئىقتىدارى",
      desc: "ئۇيغۇرچە ھەرپلەرنى ئىزدەش"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "ئوقۇتۇش ماتېرىيالى",
      desc: "ھەرپلەرنىڭ تەلەپپۇزى ۋە مىساللىرى"
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "ئىنتراكتىپ دىزايىن",
      desc: "ياخشى كۆرۈنۈش ۋە قوللىنىش"
    }
  ];

  return (
    <div className="uyghur-letter-finder-container" style={{
      width: "100%",
      minHeight: "820px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "24px",
      padding: "24px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
      fontFamily: `"Microsoft Uighur", "UKIJ Tuz", "UKIJ Nasq", "Segoe UI", sans-serif`,
      direction: "rtl",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: "absolute",
        top: -100,
        right: -100,
        width: 300,
        height: 300,
        background: "rgba(255,255,255,0.05)",
        borderRadius: "50%"
      }} />
      <div style={{
        position: "absolute",
        bottom: -80,
        left: -80,
        width: 250,
        height: 250,
        background: "rgba(255,255,255,0.05)",
        borderRadius: "50%"
      }} />

      <div style={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        borderRadius: "20px",
        padding: "32px",
        height: "100%",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        border: "1px solid rgba(255,255,255,0.2)"
      }}>
        {/* Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px"
        }}>
          <div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "8px"
            }}>
              <div style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                padding: "12px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <BookOpen style={{ color: "white", width: "28px", height: "28px" }} />
              </div>
              <h1 style={{
                margin: 0,
                fontSize: "28px",
                fontWeight: "700",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                ئۇيغۇر ھەرپ ئۈگنىش قورالى
              </h1>
            </div>
            <p style={{
              margin: "8px 0 0 0",
              color: "#666",
              fontSize: "16px",
              lineHeight: "1.5"
            }}>
              ئۇيغۇر تىلىدىكى ھەرپلەرنى ئۆگىنىش ۋە ئىزدەش ئۈچۈن قۇلايلىق قورال
            </p>
          </div>

          <div style={{
            display: "flex",
            gap: "12px",
            alignItems: "center"
          }}>
            <button
              onClick={() => setShowInstructions(!showInstructions)}
              style={{
                background: "rgba(102, 126, 234, 0.1)",
                border: "none",
                padding: "10px 16px",
                borderRadius: "10px",
                color: "#667eea",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(102, 126, 234, 0.2)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(102, 126, 234, 0.1)"}
            >
              <Info className="w-4 h-4" />
              يېتەكچى
            </button>
          </div>
        </div>

        {/* Instructions Modal */}
        {showInstructions && (
          <div style={{
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "16px",
            padding: "24px",
            marginBottom: "24px",
            border: "2px solid #667eea",
            boxShadow: "0 10px 30px rgba(102, 126, 234, 0.2)",
            animation: "slideDown 0.3s ease"
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px"
            }}>
              <h3 style={{
                margin: 0,
                color: "#667eea",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <CheckCircle className="w-5 h-5" />
                ئىشلىتىش يېتەكچىسى
              </h3>
              <button
                onClick={() => setShowInstructions(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                  color: "#666"
                }}
              >
                ✕
              </button>
            </div>
            <ul style={{
              paddingRight: "20px",
              margin: 0,
              color: "#555",
              lineHeight: "2"
            }}>
              <li>بىرىنچى قەدەم: «ئاپنى ئېچىش» توپچىسىنى بېسىڭ</li>
              <li>ھەرپ ئىزدەش ئۈچۈن: ئىزدەش سۇپىسىغا ھەرپنى كىرگۈزۈڭ</li>
              <li>ئەسلى ھالەتكە قايتۇرۇش: «يېڭىلاش» توپچىسىنى بېسىڭ</li>
              <li>تولۇق ئېكراندا كۆرۈش: ئېكران ئىكۆنكىسىنى بېسىڭ</li>
            </ul>
          </div>
        )}

        {/* Features Grid */}
        {!showApp && (
          <div style={{
            marginBottom: "32px"
          }}>
            <h3 style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "16px",
              color: "#333",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}>
              <Sparkles className="w-5 h-5" />
              ئالاھىدىلىكلىرى
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              marginBottom: "32px"
            }}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    border: "1px solid rgba(102, 126, 234, 0.2)",
                    borderRadius: "16px",
                    padding: "24px",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(102, 126, 234, 0.15)";
                    e.currentTarget.style.borderColor = "#667eea";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.2)";
                  }}
                >
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "12px"
                  }}>
                    <div style={{
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      padding: "10px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      {React.cloneElement(feature.icon, { color: "white" })}
                    </div>
                    <h4 style={{
                      margin: 0,
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#333"
                    }}>
                      {feature.title}
                    </h4>
                  </div>
                  <p style={{
                    margin: 0,
                    color: "#666",
                    fontSize: "14px",
                    lineHeight: "1.6"
                  }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div style={{
          position: "relative",
          minHeight: "600px"
        }}>
          {!showApp ? (
            <div style={{
              textAlign: "center",
              padding: "60px 20px"
            }}>
              <div style={{
                width: "120px",
                height: "120px",
                background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 32px",
                border: "3px solid rgba(102, 126, 234, 0.3)"
              }}>
                <Globe style={{ width: "60px", height: "60px", color: "#667eea" }} />
              </div>
              
              <h2 style={{
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "16px",
                color: "#333"
              }}>
                ئۇيغۇر ھەرپلىرىنى ئىزدەڭ
              </h2>
              
              <p style={{
                fontSize: "18px",
                color: "#666",
                maxWidth: "600px",
                margin: "0 auto 40px",
                lineHeight: "1.8"
              }}>
                بۇ قورال Streamlit ئارقىلىق ياسالغان بولۇپ، ئۇيغۇرچە ھەرپلەرنى ئىزدەش،
                تەلەپپۇزىنى ئاڭلاش ۋە مىساللارنى كۆرۈش ئۈچۈن ئىشلىتىلىدۇ.
              </p>

              <a    href="https://kelbil-projects-jgwmfqjsenk9jdqv5pkw83.streamlit.app/"
                
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  border: "none",
                  padding: "18px 48px",
                  borderRadius: "50px",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(102, 126, 234, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(102, 126, 234, 0.4)";
                }}
              >
                
                
                ئاپنى ئېچىش
                </a>
              

              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                marginTop: "32px",
                fontSize: "14px",
                color: "#888"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <CheckCircle className="w-4 h-4" />
                  قوللىنىشچان
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <CheckCircle className="w-4 h-4" />
                  ھەقسىز
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <CheckCircle className="w-4 h-4" />
                  بىخەتەر
                </div>
              </div>
            </div>
          ) : (
            <div style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
              border: "2px solid rgba(102, 126, 234, 0.3)"
            }}>
              {/* Control Bar */}
              <div style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                padding: "16px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}>
                  <div style={{
                    display: "flex",
                    gap: "6px"
                  }}>
                    <div style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#ff5f57"
                    }} />
                    <div style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#ffbd2e"
                    }} />
                    <div style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#28ca42"
                    }} />
                  </div>
                  <span style={{
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "500",
                    marginRight: "8px"
                  }}>
                    ئۇيغۇر ھەرپ ئۈگنىش قورالى
                  </span>
                </div>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}>
                  <button
                    onClick={() => setViewMode(viewMode === "desktop" ? "mobile" : "desktop")}
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      color: "white",
                      fontSize: "14px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.3)"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
                  >
                    {viewMode === "desktop" ? <Layout className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
                    {viewMode === "desktop" ? "كومپيۇتەر" : "موبىل"}
                  </button>

                  <button
                    onClick={refreshIframe}
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      color: "white",
                      fontSize: "14px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.3)"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
                  >
                    <RefreshCw className="w-4 h-4" />
                    يېڭىلاش
                  </button>

                  <a
                    href={STREAMLIT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "rgba(255,255,255,0.9)",
                      border: "none",
                      padding: "8px 20px",
                      borderRadius: "8px",
                      color: "#667eea",
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      textDecoration: "none",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "white"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.9)"}
                  >
                    <ExternalLink className="w-4 h-4" />
                    ئايرىم بەت
                  </a>
                </div>
              </div>

              {/* Loading Overlay */}
              {loading && (
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(255,255,255,0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                  flexDirection: "column",
                  gap: "20px"
                }}>
                  <div className="spinner" style={{
                    width: "60px",
                    height: "60px",
                    border: "5px solid rgba(102, 126, 234, 0.3)",
                    borderTop: "5px solid #667eea",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite"
                  }} />
                  <p style={{
                    fontSize: "16px",
                    color: "#667eea",
                    fontWeight: "500"
                  }}>
                    يۈكلىنىۋاتىدۇ...
                  </p>
                </div>
              )}

              {/* Iframe Container */}
              <div style={{
                width: "100%",
                height: viewMode === "desktop" ? "680px" : "600px",
                background: "#f8f9fa",
                position: "relative"
              }}>
                {iframeError ? (
                  <div style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "40px",
                    textAlign: "center"
                  }}>
                    <AlertTriangle style={{ width: "80px", height: "80px", color: "#ff6b6b", marginBottom: "24px" }} />
                    <h3 style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      marginBottom: "16px",
                      color: "#333"
                    }}>
                      خاتالىق يۈز بەردى
                    </h3>
                    <p style={{
                      fontSize: "16px",
                      color: "#666",
                      marginBottom: "32px",
                      maxWidth: "500px"
                    }}>
                      ئاپنى يۈكلەشتە خاتالىق يۈز بەردى. بىخەتەرلىك تەلەپلىرى سەۋەبىدىن بۇ بەتنى كۆرسىتەلمىدۇق.
                    </p>
                    <div style={{ display: "flex", gap: "16px" }}>
                      <button
                        onClick={refreshIframe}
                        style={{
                          background: "#667eea",
                          border: "none",
                          padding: "14px 32px",
                          borderRadius: "8px",
                          color: "white",
                          fontSize: "16px",
                          fontWeight: "600",
                          cursor: "pointer",
                          transition: "all 0.3s ease"
                        }}
                      >
                        قايتا سىناڭ
                      </button>
                      <a
                        href="https://kelbil-projects-jgwmfqjsenk9jdqv5pkw83.streamlit.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: "rgba(102, 126, 234, 0.1)",
                          border: "2px solid #667eea",
                          padding: "12px 32px",
                          borderRadius: "8px",
                          color: "#667eea",
                          fontSize: "16px",
                          fontWeight: "600",
                          cursor: "pointer",
                          textDecoration: "none",
                          transition: "all 0.3s ease"
                        }}
                      >
                        ئايرىم بەتتە ئېچىش
                      </a>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src={STREAMLIT_URL}
                    width="100%"
                    height="100%"
                    style={{ border: "none" }}
                    title="Uyghur Letter Finder"
                    onError={handleIframeError}
                    onLoad={handleIframeLoad}
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: "24px",
          paddingTop: "24px",
          borderTop: "1px solid rgba(102, 126, 234, 0.2)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "13px",
          color: "#888"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Info className="w-4 h-4" />
            <span>
              ئەگەر بەت كۆرۈنمىسە، بىخەتەرلىك تەلەپلىرى سەۋەبىدىن بولۇشى مۇمكىن
            </span>
          </div>
         <div>✨ تەرتىپلىگەن: ئەنۋەر جان</div>
          
          
          <div style={{ display: "flex", gap: "16px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: iframeError ? "#ff6b6b" : loading ? "#ffbd2e" : iframeLoaded ? "#28ca42" : "#ccc"
              }} />
              ھالەت: {
                iframeError ? "خاتالىق" : 
                loading ? "يۈكلىنىۋاتىدۇ" : 
                iframeLoaded ? "تەييار" : 
                "كۈتۈۋاتىدۇ"
              }
            </span>
            <button
              onClick={() => setShowApp(false)}
              style={{
                background: "none",
                border: "none",
                color: "#667eea",
                cursor: "pointer",
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 8px"
              }}
            >
              <span>←</span>
              قايتىش
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .uyghur-letter-finder-container {
          animation: fadeIn 0.8s ease;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .uyghur-letter-finder-container {
            padding: 16px;
            border-radius: 16px;
          }
          
          .control-bar {
            flex-direction: column;
            gap: 12px;
            padding: 12px;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default UyghurLetterFinder;