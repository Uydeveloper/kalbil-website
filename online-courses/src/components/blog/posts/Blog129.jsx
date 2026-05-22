import React, { useState, useEffect } from 'react';

const CognitiveWarfare = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const styles = {
    container: {
      fontFamily: "'Noto Sans Arabic', 'Inter', system-ui, -apple-system, sans-serif",
      background: "radial-gradient(ellipse at top, #0f172a 0%, #0a0f1e 40%, #030712 100%)",
      color: "#f1f5f9",
      lineHeight: "1.7",
      direction: "rtl",
      textAlign: "right",
      minHeight: "100vh",
      padding: "2rem 1.5rem 4rem",
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1
    },
    header: {
      textAlign: "center",
      padding: "3rem 1rem 2.5rem",
      marginBottom: "2.5rem",
      borderBottom: "1px solid rgba(248, 113, 113, 0.3)",
      position: "relative"
    },
    mainTitle: {
      fontSize: "2.9rem",
      fontWeight: "800",
      background: "linear-gradient(135deg, #f87171, #fbbf24, #22d3ee)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      marginBottom: "0.75rem",
      lineHeight: "1.3",
      letterSpacing: "-0.02em"
    },
    subtitle: {
      fontSize: "1.3rem",
      color: "#94a3b8",
      maxWidth: "750px",
      margin: "0 auto 1rem"
    },
    warningBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      background: "linear-gradient(135deg, rgba(248, 113, 113, 0.2), rgba(251, 191, 36, 0.15))",
      border: "1px solid rgba(248, 113, 113, 0.3)",
      borderRadius: "50px",
      padding: "0.6rem 1.75rem",
      fontSize: "0.95rem",
      fontWeight: "600",
      marginTop: "1rem",
      backdropFilter: "blur(10px)",
      color: "#fecaca"
    },
    card: {
      background: "rgba(23, 35, 61, 0.9)",
      backdropFilter: "blur(12px)",
      borderRadius: "1.5rem",
      padding: "2rem",
      marginBottom: "1.75rem",
      border: "1px solid rgba(248, 113, 113, 0.3)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
      transition: "all 0.3s ease"
    },
    sectionTitle: {
      fontSize: "1.8rem",
      fontWeight: "700",
      marginBottom: "1.25rem",
      paddingRight: "0.75rem",
      borderRight: "4px solid #f87171",
      color: "#fecaca",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    },
    highlightBox: {
      background: "linear-gradient(135deg, rgba(248, 113, 113, 0.15), rgba(251, 191, 36, 0.08))",
      borderRight: "3px solid #f87171",
      borderRadius: "1rem",
      padding: "1.25rem 1.5rem",
      margin: "1.25rem 0"
    },
    dangerBox: {
      background: "rgba(248, 113, 113, 0.1)",
      borderRight: "3px solid #f87171",
      borderRadius: "0.875rem",
      padding: "1rem 1.25rem",
      margin: "1rem 0",
      fontSize: "0.95rem"
    },
    opportunityBox: {
      background: "rgba(52, 211, 153, 0.1)",
      borderRight: "3px solid #34d399",
      borderRadius: "0.875rem",
      padding: "1rem 1.25rem",
      margin: "1rem 0",
      fontSize: "0.95rem"
    },
    grid2: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "1.5rem",
      margin: "1.25rem 0"
    },
    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "1rem",
      margin: "1rem 0"
    },
    conceptCard: {
      background: "rgba(30, 41, 59, 0.7)",
      borderRadius: "1rem",
      padding: "1.25rem",
      border: "1px solid rgba(248, 113, 113, 0.25)",
      transition: "all 0.2s ease"
    },
    weaponCard: {
      background: "linear-gradient(135deg, rgba(248, 113, 113, 0.08), rgba(30, 41, 59, 0.8))",
      border: "1px solid rgba(248, 113, 113, 0.3)",
      borderRadius: "1rem",
      padding: "1.25rem",
      marginBottom: "1rem"
    },
    quoteBox: {
      background: "linear-gradient(135deg, rgba(167, 139, 250, 0.12), rgba(34, 211, 238, 0.08))",
      borderRight: "4px solid #a78bfa",
      borderRadius: "1rem",
      padding: "1.5rem",
      margin: "1.5rem 0",
      fontStyle: "italic"
    },
    faqItem: {
      background: "rgba(30, 41, 59, 0.6)",
      borderRadius: "1rem",
      marginBottom: "0.75rem",
      border: "1px solid rgba(248, 113, 113, 0.2)",
      overflow: "hidden",
      transition: "all 0.2s ease"
    },
    faqQuestion: {
      width: "100%",
      padding: "1rem 1.25rem",
      background: "none",
      border: "none",
      color: "#f1f5f9",
      fontSize: "1.05rem",
      fontWeight: "500",
      textAlign: "right",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "1rem",
      direction: "rtl"
    },
    faqAnswer: {
      maxHeight: "0",
      overflow: "hidden",
      transition: "max-height 0.35s ease, padding 0.35s ease",
      padding: "0 1.25rem",
      color: "#94a3b8",
      fontSize: "0.95rem",
      lineHeight: "1.6"
    },
    comparisonTable: {
      width: "100%",
      borderCollapse: "collapse",
      margin: "1rem 0",
      fontSize: "0.95rem"
    },
    appItem: {
      background: "rgba(30, 41, 59, 0.6)",
      borderRadius: "0.875rem",
      padding: "1rem",
      border: "1px solid rgba(248, 113, 113, 0.2)",
      transition: "all 0.2s ease",
      textAlign: "center"
    },
    timeline: {
      position: "relative",
      paddingRight: "2rem",
      margin: "1.5rem 0"
    },
    timelineItem: {
      position: "relative",
      paddingRight: "1.5rem",
      marginBottom: "1.5rem"
    },
    caseStudy: {
      background: "rgba(34, 211, 238, 0.08)",
      border: "1px solid rgba(34, 211, 238, 0.3)",
      borderRadius: "1rem",
      padding: "1.25rem",
      margin: "1rem 0"
    }
  };

  const faqs = [
    {
      question: "1. ئىدراك ئۇرۇشى دېگەن نېمە؟",
      answer: "ئىدراك ئۇرۇشى — ئادەمنىڭ پىكرى، ئىشەنچىسى، ھېسسىياتى، قارارى ۋە دۇنيا قارىشىنى تېخنىكا، ئۇچۇر، مېدىيا، AI ۋە پسىخولوگىيە ئارقىلىق ئۆزگەرتىش ياكى كونترول قىلىش جەريانى. بۇ ئۇرۇشتا دۈشمەن سىزنىڭ جىسمىڭىزغا ئەمەس، مېڭىڭىزغا ھۇجۇم قىلىدۇ."
    },
    {
      question: "2. ئىدراك ئۇرۇشى بىلەن ئەنئەنىۋى ئۇرۇشنىڭ پەرقى نېمە؟",
      answer: "ئەنئەنىۋى ئۇرۇشتا نىشان جىسمانىي كۈچ، تۇپراق ۋە بايلىق بولىدۇ. ئىدراك ئۇرۇشىدا نىشان ئادەمنىڭ پىكرى، ئىشەنچىسى ۋە كىملىكى بولىدۇ. ئەنئەنىۋى ئۇرۇش ئاشكارا ۋە چەكلىك، ئىدراك ئۇرۇشى يوشۇرۇن ۋە توختىمايدىغان."
    },
    {
      question: "3. Deepfake نېمە ۋە قانداق خەۋپى بار؟",
      answer: "Deepfake — AI تېخنىكىسى ئارقىلىق ئادەمنىڭ رەسىمى ياكى ئاۋازىنى ئىشلىتىپ، ئۇ ئېيتمىغان سۆزلەرنى «ئېيتقۇزۇش» ياكى قىلمىغان ھەرىكەتلەرنى «قىلغۇزۇش» تېخنىكىسى. خەۋپى: يالغان خەۋەر تارقىتىش، سىياسىي تەسىر يارىتىش، شەخسىي ھۆرمەتنى بۇزۇش."
    },
    {
      question: "4. ئۇيغۇرلار ئۈچۈن ئەڭ چوڭ خەۋپ نېمە؟",
      answer: "ئۇيغۇرلار ئۈچۈن ئەڭ چوڭ خەۋپ — تىل ۋە كىملىك يوقىلىشى. ئەگەر يېڭى ئەلاد ئۇيغۇرچە سۆزلىيەلمەيدىغان، ئۆز تارىخى ۋە مەدەنىيىتىنى بىلمەيدىغان بولۇپ قالسا، بۇ خەلقنىڭ كىملىكى ئاستا-ئاستا يوقىلىدۇ. بۇ جىسمانىي ئۇرۇشتىنمۇ خەتەرلىك."
    },
    {
      question: "5. تېخنىكىدىن قانداق پايدىلىنىپ، ئۆزىمىزنى قوغدىيالايمىز؟",
      answer: "تېخنىكىنى ئۆز مەدەنىيىتىمىزنى ساقلاش ۋە تەرەققىي قىلدۇرۇش ئۈچۈن ئىشلىتىش كېرەك: 1) ئۇيغۇرچە رەقەملىك مەزمۇن ياساش، 2) تور ئارقىلىق مائارىپ تارقىتىش، 3) Cloud تېخنىكىسى ئارقىلىق مەدەنىيەت ئارخىپى قۇرۇش، 4) ئۆزىمىزنىڭ AI قوراللىرىمىزنى ياساش."
    },
    {
      question: "6. يالغان خەۋەرنى قانداق پەرقلەندۈرەلەيمەن؟",
      answer: "1) مەنبەنى تەكشۈرۈڭ: بۇ خەۋەر قەيەردىن كەلدى؟ 2) باشقا مەنبەلەر بىلەن سېلىشتۇرۇڭ: باشقا ئىشەنچلىك مەنبەلەرمۇ شۇنداق دېدىمۇ؟ 3) ۋاقتىنى تەكشۈرۈڭ: بۇ خەۋەر يېڭىمۇ ياكى كونامى؟ 4) ھېسسىياتقا ئاساسەن قارار چىقارماڭ: قورقۇنچلۇق ياكى ھاياجانلىق خەۋەرلەر كۆپىنچە يالغان بولىدۇ."
    },
    {
      question: "7. بالىلارنى ئىدراك ئۇرۇشىدىن قانداق قوغدىيالايمەن؟",
      answer: "1) بالىلارغا تەنقىدىي پىكىرنى ئۆگىتىڭ: «ھەر نېمىگە ئىشەنمە، سۈرۈشتۈر» دېگەن پىكىرنى سىڭدۈرۈڭ. 2) ئانا تىلدا سۆزلەش ۋە ئوقۇشنى تەشكىللەڭ. 3) ئۇچۇر مەنبەلىرىنى تونۇتۇڭ: قايسى مەنبە ئىشەنچلىك، قايسىسى ئەمەسلىكىنى ئۆگىتىڭ. 4) تېخنىكا بىلەن مەدەنىيەتنى بىرلەشتۈرۈڭ: بالىلار تېخنىكىنى ئۆگەنسۇن، ئەمما ئۆز كىملىكىنىمۇ ئۇنتۇمىسۇن."
    },
    {
      question: "8. بۇ بىلىمنى قەيەردىن ئۆگىنەلەيمەن؟",
      answer: "• كىتاب: \"Cognitive Warfare: The Future of Conflict\" — NATO Strategic Communications\n• تور دەرسلىكلىرى: Coursera دىكى \"Media Literacy\" دەرسلىكلىرى\n• تەتقىقات: Stanford Internet Observatory نىڭ تەتقىقاتلىرى\n• ئۇيغۇرچە مەنبەلەر: ئۇيغۇر تەتقىقات مەركەزلىرىنىڭ تەھلىللىرى"
    },
    {
      question: "9. ئىدراك ئۇرۇشىدىن قوغدىنىش ئۈچۈن كۈندىلىك تۇرمۇشتا نېمە قىلىش كېرەك؟",
      answer: "1) ھەر كۈنى 30 مىنۇت ئوقۇش ۋە تەھلىل قىلىش. 2) سوتسىيال مېدىيادا كۆرگەن ھەر بىر خەۋەرنى تەكشۈرۈش. 3) ئۆز تىلىدا مەزمۇن ياساش ۋە تارقىتىش. 4) بالىلار بىلەن ئۇچۇر ھەققىدە پاراڭلىشىش. 5) تېخنىكا بىلىمىنى ئۆگىنىش. 6) ئۆز-ئارا ئىشەنچ ۋە ھەمكارلىقنى كۈچەيتىش."
    },
    {
      question: "10. كەلگۈسىدە بۇ ساھە قانداق تەرەققىي قىلىدۇ؟",
      answer: "كەلگۈسىدە ئىدراك ئۇرۇشى تېخىمۇ يۇقىرى تېخنىكا بىلەن بىرلەشىدۇ: 1) Brain-Computer Interface تېخنىكىسى ئارقىلىق پىكرىي كونترول، 2) Quantum AI ئارقىلىق تېخىمۇ مۇرەككەپ تەھلىل، 3) Metaverse دىكى يېڭى ئىدراك مۇھىتى. شۇڭا بىز بۈگۈندىن باشلاپ بۇ تېخنىكىلارنى ئۆگىنىشىمىز ۋە ئۆز مەدەنىيىتىمىز بىلەن بىرلەشتۈرۈشىمىز كېرەك."
    }
  ];

  return (
    <div style={styles.container}>
      {/* Background decoration */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background: "#f87171",
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.06,
          top: "-250px",
          right: "-150px",
          animation: "float 25s ease-in-out infinite"
        }} />
        <div style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "#22d3ee",
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.06,
          bottom: "-150px",
          left: "-100px",
          animation: "float 25s ease-in-out infinite",
          animationDelay: "-8s"
        }} />
        <div style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "#a78bfa",
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.06,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "float 25s ease-in-out infinite",
          animationDelay: "-16s"
        }} />
      </div>

      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>ئىدراك ئۇرۇشى</h1>
        <p style={styles.subtitle}>Cognitive Warfare · 认知战 · زامانىۋى تېخنىكا دەۋرىدىكى يېڭى خەۋپ</p>
        <p style={{maxWidth: "800px", margin: "0 auto 1rem", color: "#94a3b8"}}>
          ئادەمنىڭ ئەقلى، ئىدراكى، قارىشى ۋە ئىشەنچىسىنى كونترول قىلىش ئۇرۇشى — بۈگۈنكى كۈندىكى ئەڭ خەتەرلىك ۋە ئەڭ مۇرەككەپ ئۇرۇش شەكلى
        </p>
        <div style={styles.warningBadge}>⚠️ ئۇچۇر دەۋرىدىكى ئەڭ چوڭ خەۋپ: پىكرىڭىزنى كونترول قىلىش</div>
      </header>

      {/* Section 1: Introduction */}
      <section className="card" style={styles.card}>
        <h2 style={styles.sectionTitle}>📘 1-بۆلەك — كىرىش سۆز: ئۇرۇش شەكلى ئۆزگەردى</h2>
        <p>بۈگۈنكى دۇنيا پەقەت قورال-ياراغ بىلەنلا ئۇرۇش قىلىدىغان دەۋر ئەمەس. ئەڭ چو ئۇرۇش — <strong>ئادەمنىڭ ئەقلى، ئىدراكى، قارىشى ۋە ئىشەنچىسىنى كونترول قىلىش ئۇرۇشى</strong> بولۇپ قالدى.</p>
        
        <div style={styles.grid2}>
          <div style={styles.conceptCard}>
            <h4 style={{color: "#f87171", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem"}}>🏛️ بۇرۇنقى ئۇرۇشلار</h4>
            <ul style={{margin: 0, paddingRight: "1.5rem", color: "#94a3b8"}}>
              <li style={{marginBottom: "0.5rem", position: "relative", paddingRight: "1.25rem"}}>تۇپراق ئۈچۈن ئۇرۇش</li>
              <li style={{marginBottom: "0.5rem", position: "relative", paddingRight: "1.25rem"}}>بايلىق ئۈچۈن ئۇرۇش</li>
              <li style={{marginBottom: "0.5rem", position: "relative", paddingRight: "1.25rem"}}>سىياسىي ھۆكۈمرانلىق ئۈچۈن ئۇرۇش</li>
              <li style={{marginBottom: "0.5rem", position: "relative", paddingRight: "1.25rem"}}>ھەربىي كۈچ بىلەن غەلىبە قىلىش</li>
            </ul>
          </div>
          <div style={styles.conceptCard}>
            <h4 style={{color: "#f87171", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem"}}>🎯 ھازىرقى ئۇرۇشلار</h4>
            <ul style={{margin: 0, paddingRight: "1.5rem", color: "#94a3b8"}}>
              <li style={{marginBottom: "0.5rem", position: "relative", paddingRight: "1.25rem"}}>كىمنىڭ ئۇچۇرنى كونترول قىلىشى</li>
              <li style={{marginBottom: "0.5rem", position: "relative", paddingRight: "1.25rem"}}>كىمنىڭ ئادەمنىڭ پىكرىنى ئۆزگەرتىشى</li>
              <li style={{marginBottom: "0.5rem", position: "relative", paddingRight: "1.25rem"}}>كىمنىڭ روھىي دۇنيانى باشقۇرۇشى</li>
              <li style={{marginBottom: "0.5rem", position: "relative", paddingRight: "1.25rem"}}>ئۇچۇر ۋە تېخنىكا بىلەن غەلىبە قىلىش</li>
            </ul>
          </div>
        </div>

        <div style={styles.highlightBox}>
          <p style={{margin: 0, color: "#f1f5f9"}}><strong>ئەڭ مۇھىم نۇقتا:</strong> بۈگۈنكى كۈندە، دۈشمەن سىزنىڭ جىسمىڭىزغا ھۇجۇم قىلمايدۇ، بەلكى سىزنىڭ <strong>مېڭىڭىزغا، پىكرىڭىزگە، ئىشەنچىڭىزگە</strong> ھۇجۇم قىلىدۇ. بۇنى بىز <strong>"ئىدراك ئۇرۇشى"</strong> ياكى <span style={{direction: "ltr", display: "inline-block"}}>"Cognitive Warfare"</span> دەيمىز.</p>
        </div>

        <div style={styles.quoteBox}>
          <p style={{margin: 0, fontSize: "1.1rem", color: "#f1f5f9", lineHeight: "1.8"}}>«ئۇچۇرنى كونترول قىلغانلار — ئادەمنىڭ ئىدراكىنى كونترول قىلىدۇ. ئىدراكنى كونترول قىلغانلار — كەلگۈسىنى كونترول قىلىدۇ.»</p>
          <span style={{display: "block", marginTop: "0.75rem", fontSize: "0.9rem", color: "#22d3ee", fontStyle: "normal", fontWeight: 500}}>— زامانىۋى ئۇرۇش نەزەرىيەسى</span>
        </div>
      </section>

      {/* Section 2: What is Cognition */}
      <section className="card" style={styles.card}>
        <h2 style={styles.sectionTitle}>🧠 2-بۆلەك — ئىدراك (Cognition) نېمە؟</h2>
        
        <p><strong>ئىدراك</strong> — ئىنساننىڭ ئەقلىي پائالىيەتلىرىنىڭ جەمئىيى:</p>
        
        <div style={styles.grid3}>
          <div style={styles.conceptCard}>
            <h4 style={{color: "#f87171", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem"}}>👁️ چۈشىنىش</h4>
            <p style={{margin: 0, fontSize: "0.95rem", color: "#94a3b8"}}>ئۇچۇرنى قوبۇل قىلىش ۋە مەنىسىنى ئېچىش</p>
          </div>
          <div style={styles.conceptCard}>
            <h4 style={{color: "#f87171", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem"}}>💭 پىكىر قىلىش</h4>
            <p style={{margin: 0, fontSize: "0.95rem", color: "#94a3b8"}}>لوگىكىلىق تەھلىل ۋە قارار چىقىرىش جەريانى</p>
          </div>
          <div style={styles.conceptCard}>
            <h4 style={{color: "#f87171", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem"}}>❤️ سېزىش</h4>
            <p style={{margin: 0, fontSize: "0.95rem", color: "#94a3b8"}}>ھېسسىيات ۋە روھىي ھالەتنى بايقاش</p>
          </div>
          <div style={styles.conceptCard}>
            <h4 style={{color: "#f87171", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem"}}>⚖️ قارار چىقىرىش</h4>
            <p style={{margin: 0, fontSize: "0.95rem", color: "#94a3b8"}}>تاللاش ۋە ھەرىكەت يۆنىلىشىنى بەلگىلەش</p>
          </div>
          <div style={styles.conceptCard}>
            <h4 style={{color: "#f87171", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem"}}>💾 ئەسلەش</h4>
            <p style={{margin: 0, fontSize: "0.95rem", color: "#94a3b8"}}>ئۆتمۈش تەجرىبىلىرىنى ساقلاش ۋە ئەسلەش</p>
          </div>
          <div style={styles.conceptCard}>
            <h4 style={{color: "#f87171", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem"}}>🔍 مەنىنى تونۇش</h4>
            <p style={{margin: 0, fontSize: "0.95rem", color: "#94a3b8"}}>ئۇچۇرنىڭ چوڭقۇر مەنىسىنى چۈشىنىش</p>
          </div>
        </div>

        <div style={styles.caseStudy}>
          <h5 style={{color: "#22d3ee", fontWeight: 600, marginBottom: "0.5rem", fontSize: "1rem"}}>💡 ئەمەلىي مىسال: خەۋەر كۆرۈش جەريانى</h5>
          <p style={{margin: 0, fontSize: "0.95rem"}}>بىر ئادەم سوتسىيال مېدىيادا خەۋەر كۆردى → ئۇنىڭ راست-يالغانلىقىنى تەھلىل قىلدى → ھېسسىياتىغا تەسىر قىلدى → ئاخىرىدا بۇ خەۋەرگە ئىشىنىش ياكى ئىشەنمەسلىك قارارىنى چىقاردى. بۇ پۈتۈن جەريان — <strong>ئىدراك</strong>.</p>
        </div>
      </section>

      {/* Section 3: What is Cognitive Warfare */}
      <section className="card" style={styles.card}>
        <h2 style={styles.sectionTitle}>⚔️ 3-بۆلەك — ئىدراك ئۇرۇشى نېمە؟</h2>
        
        <p><strong>ئىدراك ئۇرۇشى</strong> — ئادەمنىڭ پىكرى، ئىشەنچىسى، ھېسسىياتى، قارارى ۋە دۇنيا قارىشىنى تېخنىكا، ئۇچۇر، مېدىيا، <span style={{direction: "ltr", display: "inline-block"}}>AI</span> ۋە پسىخولوگىيە ئارقىلىق ئۆزگەرتىش ياكى كونترول قىلىش جەريانى.</p>

        <div style={styles.highlightBox}>
          <p style={{margin: 0, color: "#f1f5f9"}}><strong>ئەڭ مۇھىم پەرق:</strong></p>
          <p style={{margin: "0.5rem 0 0"}}>❌ ئەنئەنىۋى ئۇرۇش: دۈشمەن سىزنىڭ <strong>جىسمىڭىزغا</strong> ھۇجۇم قىلىدۇ</p>
          <p style={{margin: "0.5rem 0 0"}}>✅ ئىدراك ئۇرۇشى: دۈشمەن سىزنىڭ <strong>مېڭىڭىزغا</strong> ھۇجۇم قىلىدۇ</p>
        </div>

        <table style={styles.comparisonTable}>
          <thead>
            <tr>
              <th style={{background: "rgba(248, 113, 113, 0.15)", padding: "1rem", color: "#f87171", fontWeight: 700, border: "1px solid rgba(248, 113, 113, 0.3)"}}>ئالاھىدىلىك</th>
              <th style={{background: "rgba(248, 113, 113, 0.15)", padding: "1rem", color: "#f87171", fontWeight: 700, border: "1px solid rgba(248, 113, 113, 0.3)"}}>ئەنئەنىۋى ئۇرۇش</th>
              <th style={{background: "rgba(248, 113, 113, 0.15)", padding: "1rem", color: "#f87171", fontWeight: 700, border: "1px solid rgba(248, 113, 113, 0.3)"}}>ئىدراك ئۇرۇشى</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding: "0.875rem 1rem", border: "1px solid rgba(248, 113, 113, 0.2)", color: "#94a3b8"}}>نىشان</td>
              <td style={{padding: "0.875rem 1rem", border: "1px solid rgba(248, 113, 113, 0.2)", color: "#94a3b8"}}>جىسمانىي كۈچ، تۇپراق</td>
              <td style={{padding: "0.875rem 1rem", border: "1px solid rgba(248, 113, 113, 0.2)", color: "#22d3ee", fontWeight: 500}}>ئىدراك، پىكىر، ئىشەنچ</td>
            </tr>
            <tr>
              <td style={{padding: "0.875rem 1rem", border: "1px solid rgba(248, 113, 113, 0.2)", color: "#94a3b8"}}>قورال</td>
              <td style={{padding: "0.875rem 1rem", border: "1px solid rgba(248, 113, 113, 0.2)", color: "#94a3b8"}}>توپ، تانكا، ئايروپىلان</td>
              <td style={{padding: "0.875rem 1rem", border: "1px solid rgba(248, 113, 113, 0.2)", color: "#22d3ee", fontWeight: 500}}>ئۇچۇر، <span style={{direction: "ltr", display: "inline-block"}}>AI</span>, مېدىيا</td>
            </tr>
            <tr>
              <td style={{padding: "0.875rem 1rem", border: "1px solid rgba(248, 113, 113, 0.2)", color: "#94a3b8"}}>ۋاقىت</td>
              <td style={{padding: "0.875rem 1rem", border: "1px solid rgba(248, 113, 113, 0.2)", color: "#94a3b8"}}>چەكلىك، ئېنىق</td>
              <td style={{padding: "0.875rem 1rem", border: "1px solid rgba(248, 113, 113, 0.2)", color: "#22d3ee", fontWeight: 500}}>توختىمايدىغان، يوشۇرۇن</td>
            </tr>
            <tr>
              <td style={{padding: "0.875rem 1rem", border: "1px solid rgba(248, 113, 113, 0.2)", color: "#94a3b8"}}>كۆرۈنۈشى</td>
              <td style={{padding: "0.875rem 1rem", border: "1px solid rgba(248, 113, 113, 0.2)", color: "#94a3b8"}}>ئاشكارا، كۆرۈنىدىغان</td>
              <td style={{padding: "0.875rem 1rem", border: "1px solid rgba(248, 113, 113, 0.2)", color: "#22d3ee", fontWeight: 500}}>يوشۇرۇن، بايقاش قىيىن</td>
            </tr>
            <tr>
              <td style={{padding: "0.875rem 1rem", border: "1px solid rgba(248, 113, 113, 0.2)", color: "#94a3b8"}}>نەتىجە</td>
              <td style={{padding: "0.875rem 1rem", border: "1px solid rgba(248, 113, 113, 0.2)", color: "#94a3b8"}}>جىسمانىي زىيان</td>
              <td style={{padding: "0.875rem 1rem", border: "1px solid rgba(248, 113, 113, 0.2)", color: "#22d3ee", fontWeight: 500}}>پىكرىي ئۆزگىرىش، كىملىك يوقىلىشى</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Section 4: Etymology */}
      <section className="card" style={styles.card}>
        <h2 style={styles.sectionTitle}>📚 4-بۆلەك — <span style={{direction: "ltr", display: "inline-block"}}>Cognitive Warfare</span> ئاتالغۇسىنىڭ مەنىسى</h2>
        
        <div style={styles.grid2}>
          <div style={styles.conceptCard}>
            <h4 style={{color: "#f87171", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem"}}>🧠 <span style={{direction: "ltr", display: "inline-block"}}>Cognitive</span></h4>
            <p style={{margin: 0, fontSize: "0.95rem", color: "#94a3b8"}}>بۇ سۆز تۆۋەندىكى مەنىلەرنى بىلدۈرىدۇ:</p>
            <ul style={{margin: "0.5rem 0 0 1.5rem", color: "#94a3b8"}}>
              <li style={{marginBottom: "0.5rem"}}>پىكىر، ئوي-پىكىر</li>
              <li style={{marginBottom: "0.5rem"}}>چۈشەنچە، تونۇش</li>
              <li style={{marginBottom: "0.5rem"}}>ئىدراك، ئەقلىي جەريان</li>
              <li style={{marginBottom: "0.5rem"}}>بىلىم ھاسىل قىلىش</li>
            </ul>
          </div>
          <div style={styles.conceptCard}>
            <h4 style={{color: "#f87171", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem"}}>⚔️ <span style={{direction: "ltr", display: "inline-block"}}>Warfare</span></h4>
            <p style={{margin: 0, fontSize: "0.95rem", color: "#94a3b8"}}>بۇ سۆز تۆۋەندىكى مەنىلەرنى بىلدۈرىدۇ:</p>
            <ul style={{margin: "0.5rem 0 0 1.5rem", color: "#94a3b8"}}>
              <li style={{marginBottom: "0.5rem"}}>ئۇرۇش، جەڭ</li>
              <li style={{marginBottom: "0.5rem"}}>ھۇجۇم، رىقابەت</li>
              <li style={{marginBottom: "0.5rem"}}>ستراتېگىيە، تەكتىكا</li>
              <li style={{marginBottom: "0.5rem"}}>غەلىبە قازىنىش ئۇرۇشى</li>
            </ul>
          </div>
        </div>

        <div style={styles.highlightBox}>
          <p style={{margin: 0, color: "#f1f5f9"}}><strong>بىرلەشتۈرگەندە:</strong> <span style={{direction: "ltr", display: "inline-block"}}>Cognitive Warfare</span> — «ئىنساننىڭ ئىدراكىنى، پىكرىنى ۋە قارىشىنى نىشان قىلغان ئۇرۇش» دېگەن مەنىنى بىلدۈرىدۇ. بۇ ئۇرۇشتا غەلىبە قازىنىش ئۈچۈن دۈشمەننىڭ جىسمىنى ئەمەس، بەلكى <strong>مېڭىسىنى</strong> ئىشغال قىلىش كېرەك.</p>
        </div>
      </section>

      {/* Section 5: Targets */}
      <section className="card" style={styles.card}>
        <h2 style={styles.sectionTitle}>🎯 5-بۆلەك — ئىدراك ئۇرۇشىنىڭ نىشانى نېمە؟</h2>
        
        <p>ئىدراك ئۇرۇشىنىڭ ئەڭ چو مەقسىتى — ئادەمنىڭ ئىچكى دۇنياسىنى كونترول قىلىش:</p>

        <div style={styles.grid2}>
          <div style={styles.weaponCard}>
            <h4 style={{color: "#fbbf24", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem"}}>🧭 قانداق ئويلىشىنى بەلگىلەش</h4>
            <p style={{margin: 0, fontSize: "0.95rem", color: "#94a3b8"}}>ئادەمنىڭ تەپەككۇر يۆنىلىشىنى، لوگىكىسىنى ۋە تەھلىل ئۇسۇلىنى ئاستا-ئاستا ئۆزگەرتىش.</p>
          </div>
          <div style={styles.weaponCard}>
            <h4 style={{color: "#fbbf24", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem"}}>💭 نېمىگە ئىشىنىشىنى كونترول قىلىش</h4>
            <p style={{margin: 0, fontSize: "0.95rem", color: "#94a3b8"}}>راست-يالغاننى پەرقلەندۈرۈش قابىلىيىتىنى ئاجىزلاشتۇرۇپ، بەلگىلەنگەن ئۇچۇرلارغا ئىشەندۈرۈش.</p>
          </div>
          <div style={styles.weaponCard}>
            <h4 style={{color: "#fbbf24", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem"}}>👥 كىمنى قوللىشىنى يېتەكلەش</h4>
            <p style={{margin: 0, fontSize: "0.95rem", color: "#94a3b8"}}>سىياسىي، ئىجتىمائىي ياكى مەدەنىي جەھەتتە كىمنى قوللاش كېرەكلىكىنى يوشۇرۇن يۆنىلىش بېرىش.</p>
          </div>
          <div style={styles.weaponCard}>
            <h4 style={{color: "#fbbf24", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem"}}>👿 كىمنى دۈشمەن كۆرۈشىنى شەكىللەندۈرۈش</h4>
            <p style={{margin: 0, fontSize: "0.95rem", color: "#94a3b8"}}>ئۆز-ئارا ئىشەنچسىزلىك ۋە دۈشمەنلىك ھېسسىياتىنى پەيدا قىلىپ، جەمئىيەتنى بۆلۈش.</p>
          </div>
        </div>

        <div style={styles.dangerBox}>
          <strong>خەتەرلىك نۇقتا:</strong> بۇ نىشانلارغا يەتكەندە، بىر خەلق ئۆز ئىرادىسى بىلەن ئەمەس، بەلكى باشقىلارنىڭ كونترول قىلىشى بىلەن ھەرىكەت قىلىدىغان بولۇپ قالىدۇ.
        </div>
      </section>

      {/* FAQ Section */}
      <section className="card" style={styles.card}>
        <h2 style={styles.sectionTitle}>❓ كۆپ ئۇچرايدىغان سوئال-جاۋابلار</h2>
        
        <div id="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} style={{
              ...styles.faqItem,
              borderColor: activeFaq === index ? "#f87171" : "rgba(248, 113, 113, 0.2)"
            }}>
              <button 
                style={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <span style={{
                  fontSize: "0.9rem",
                  color: "#f87171",
                  transition: "transform 0.3s ease",
                  transform: activeFaq === index ? "rotate(180deg)" : "rotate(0deg)"
                }}>▼</span>
              </button>
              <div style={{
                ...styles.faqAnswer,
                maxHeight: activeFaq === index ? "800px" : "0",
                padding: activeFaq === index ? "0 1.25rem 1.25rem" : "0 1.25rem"
              }}>
                {faq.answer.split('\n').map((line, i) => (
                  <p key={i} style={{margin: i === 0 ? "0" : "0.5rem 0 0", color: "#94a3b8"}}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: "center",
        paddingTop: "2.5rem",
        marginTop: "2rem",
        borderTop: "1px solid rgba(248, 113, 113, 0.3)",
        color: "#94a3b8",
        fontSize: "0.9rem"
      }}>
        <p>© 2024 Cognitive Warfare Awareness · ئىدراك ئۇرۇشى ئاڭلىنىش ھەرىكىتى</p>
        <p style={{marginTop: "0.5rem"}}>بۇ مەزمۇنلار ئوقۇش، تەتقىقات ۋە ئاڭلىنىش ئۈچۈن تەييارلاندى | مەنبە: خەلقئارا بىخەتەرلىك تەتقىقاتلىرى، پىسخولوگىيە، <span style={{direction: "ltr", display: "inline-block"}}>AI</span> ئىلمى</p>
        <p style={{marginTop: "0.75rem", fontSize: "0.85rem"}}>
          <a href="#" style={{color: "#22d3ee", textDecoration: "none"}}>بىلىم — ئەڭ كۈچلۈك قورال</a> · 
          <a href="#" style={{color: "#22d3ee", textDecoration: "none", margin: "0 0.5rem"}}>ئىدراك — ئەڭ مۇھىم مۇداپىئە</a> · 
          <a href="#" style={{color: "#22d3ee", textDecoration: "none"}}>كىملىك — ئەڭ قىممەتلىك بايلىق</a>
        </p>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.03); }
          66% { transform: translate(-30px, 40px) scale(0.97); }
        }
        
        .card:hover {
          transform: translateY(-4px);
          border-color: rgba(248, 113, 113, 0.6);
          box-shadow: 0 16px 48px rgba(248, 113, 113, 0.2);
        }
        
        .concept-card:hover {
          border-color: #f87171;
          background: rgba(30, 41, 59, 0.9);
          transform: translateX(-3px);
        }
        
        .app-item:hover {
          border-color: #22d3ee;
          transform: translateY(-3px);
          background: rgba(30, 41, 59, 0.8);
        }
        
        .faq-item:hover {
          border-color: #f87171;
        }
        
        ul li::before {
          content: '◆';
          position: absolute;
          right: 0;
          top: 2px;
          color: #f87171;
          font-size: 0.7rem;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          right: 8px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #f87171, #22d3ee);
        }
        
        .timeline-item::before {
          content: '';
          position: absolute;
          right: -5px;
          top: 4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #f87171;
          border: 2px solid rgba(23, 35, 61, 0.9);
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #111827;
        }
        ::-webkit-scrollbar-thumb {
          background: #f87171;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #fbbf24;
        }
      `}</style>
    </div>
  );
};

export default CognitiveWarfare;