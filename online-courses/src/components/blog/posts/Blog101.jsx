import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Blog101 = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [robotArmUp, setRobotArmUp] = useState(false);
  const contentRef = useRef(null);

  // PDF چاپلاش
  const handleDownloadPDF = () => {
    const input = contentRef.current;
    html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('بالىلارغا_فىزىكىلىق_سۈنئىي_ئەقىل.pdf');
    });
  };

  // ئاۋازلىق ئوقۇش
  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // مەزمۇننى تېكىست قىلىپ ئالىمىز
    const text = contentRef.current.innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Uyghur language code — Chrome supports 'ug'
    utterance.lang = 'ug';
    utterance.rate = 0.9;
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  // روبوت قول كۆتۈرۈش
  const toggleRobotArm = () => {
    setRobotArmUp(!robotArmUp);
  };

  return (
    <div
      dir="rtl"
      style={{
        fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
        backgroundColor: '#ffffff',
        color: '#1e293b',
        lineHeight: '1.8',
        padding: '2rem',
        maxWidth: '900px',
        margin: '0 auto',
        borderRadius: '16px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
      }}
    >
      {/* قورال بالداق */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <button
          onClick={handleDownloadPDF}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          📄 PDF چاپلاش
        </button>
        <button
          onClick={toggleSpeech}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: isSpeaking ? '#ef4444' : '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          🔊 {isSpeaking ? 'توختا' : 'ئاۋازلىق ئوقۇ'}
        </button>
      </div>

      {/* ماۋزۇتىكى مەزمۇن */}
      <div ref={contentRef}>
        {/* باش رەسىم */}
        <img
          src="https://via.placeholder.com/900x400/0891b2/ffffff?text=%D8%A8%D8%A7%D9%84%D9%8A%D9%84%D8%A7%D8%B1%D8%BA%D8%A7+%D9%81%D9%8A%D8%B2%D9%8A%D9%83%D9%8A%D9%84%D9%8A%D9%82+%D8%B3%D9%88%D9%86%D8%A6%D9%8A+%D8%A6%D9%82%D9%8A%D9%84%D9%86%D9%8A+%D9%82%D8%A7%D9%86%D8%AF%D8%A7%D9%82+%D8%B4%D9%8A%D9%84%D9%8A%D9%83+%D8%A6%D9%8A%D9%86%D8%B3%D8%A7%D9%86+%D8%A8%D9%88%D9%84%D9%85%D9%8F%D9%82"
          alt="بالىلارغا «فىزىكىلىق سۈنئىي ئەقىلنى چۈشەندۈرۈش"
          style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '1.5rem' }}
        />

        <h1 style={{ fontSize: '2.3rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '0.5rem', color: '#0f172a' }}>
          بالىلارغا «فىزىكىلىق سۈنئىي ئەقىلنى قانداق چۈشەندۈرۈش كېرەك؟
        </h1>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2rem', fontSize: '1.2rem' }}>
            2026-يىلى 1-ئاينىڭ 15-كۈنى
        </p>

        {/* مۇقەددىمە */}
        <p style={{  fontSize: '1.5rem' }}>
          بالىلار «سۈنئىي ئەقىل» دېگەن سۆزنى ئاڭلىغاندا، كۆپىنچىسى «ئېكران ئىچىدىكى سۆزلەيدىغان ماشىنا» دەپ ئويلايدۇ. لېكىن 2026-يىلى، سۈنئىي ئەقىل ھازىر <strong>ئېكراندىن چىقىپ كەتتى</strong>! ئۇ ھازىر:
        </p>
        <ul style={{ fontSize: '1.5rem', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li>ئۈي ئىشلىرىنى قىلىدۇ (LG CLOiD روبوتى)</li>
          <li>ماشىنىلارنى ھەيدەيدۇ (Alpamayo)</li>
          <li>زاۋۇتلاردا ئىشلەيدۇ (CATL Moz روبوتى)</li>
          <li>تاماق تەييارلايدۇ، قاچا يۇيىدۇ، كىر يۇيىدۇ!</li>
        </ul>
        <p>
          بۇ يېڭى دەۋر — <strong>«فىزىكىلىق سۈنئىي ئەقىل»</strong> دەۋرى. بۇنى بالىلارغا قانداق چۈشەندۈرۈش كېرەك؟
        </p>

        {/* بۆلەك 1: بالىلارغا «فىزىكىلىق» نى قانداق چۈشەندۈرۈش كېرەك؟ */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
          1. «فىزىكىلىق» دېگەن نېمە؟ — بىر بالىنىڭ قولى بىلەن تۇتۇشى
        </h2>
        <p>
          بالىلارغا «فىزىكىلىق» دېگەن سۆزنى ئەمەس، بەلكى <strong>تۇيغۇ</strong> بىلەن چۈشەندۈرۈش كېرەك.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', margin: '1.5rem 0' }}>
          <div style={{ flex: '1 1 250px', backgroundColor: '#f0f9ff', padding: '1rem', borderRadius: '10px', textAlign: 'center' }}>
            <p style={{ margin: 0, fontWeight: 'bold', color: '#1e40af' }}>ئېكراندىكى AI</p>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.5rem', color: '#334155' }}>سۆزلەيدۇ، يازىدۇ — لېكىن تۇتۇشقا بولمايدۇ</p>
          </div>
          <div style={{ flex: '1 1 250px', backgroundColor: '#dcfce7', padding: '1rem', borderRadius: '10px', textAlign: 'center' }}>
            <p style={{ margin: 0, fontWeight: 'bold', color: '#166534' }}>فىزىكىلىق AI</p>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.5rem', color: '#334155' }}>قولى بار، قىمىرىدۇ، تۇتىدۇ، يۈرۈيدۇ!</p>
          </div>
        </div>
        <p>
          مىسال:  
          <em>«ChatGPT — بۇ سىزنىڭ تېلېفونىڭىزدىكى دوست. لېكىن CLOiD روبوتى — بۇ سىزنىڭ ئۈيدىكى دوست، ئۇ سىز بىلەن قول تۇتۇشىپ، قاچا يۇيىدۇ!»</em>
        </p>

        {/* بۆلەك 2: روبوت — بۇ «ياشىمايدىغان دوست» */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
          2. روبوت — بۇ «ياشىمايدىغان دوست»
        </h2>
        <p>
          بالىلار روبوتلارنى «ياشىمايدىغان دوست» دەپ قاراشى كېرەك. بۇنى چۈشەندۈرۈش ئۈچۈن:
        </p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>«روبوت سىزگە ياردەم قىلىدۇ، لېكىن ئۇ سىزنىڭ قورقۇنىچىڭىزنى ھېس قىلالمايدۇ.»</li>
          <li>«روبوت سىز بىلەن ئوينايدۇ، لېكىن ئۇ سىزنىڭ كۈلكىڭىزگە سەۋەب بولالمايدۇ.»</li>
          <li>«روبوت سىزنى سۆيمەيدۇ — لېكىن سىز ئۇنى سۆيىشىڭىز مۇمكىن!»</li>
        </ul>
        <p>
          بۇ — <strong>مۇناسىۋەتنىڭ چەكلىمىسى</strong> نى ئادەمچە چۈشەندۈرۈش.
        </p>

        {/* بۆلەك 3: ئوخشاشلىق بىلەن چۈشەندۈرۈش */}
        <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
          3. ئوخشاشلىق بىلەن چۈشەندۈرۈش
        </h2>
        <p>
          بالىلار ئۇچۇرلارنى «ئوخشاشلىق» ئارقىلىق چۈشىنىدۇ. شۇڭا:
        </p>
        <blockquote style={{ borderRight: '4px solid #7e22ce', paddingRight: '1rem', margin: '1.5rem 0', fontSize: '1.6rem', fontStyle: 'italic', color: '#4c1d95' }}>
          «فىزىكىلىق سۈنئىي ئەقىل — بۇ سىزنىڭ ماشىنىڭىزغا ئوقۇتقۇچى قىستۇرۇشقا ئوخشايدۇ.  
          ماشىنا ئۆزى ئويلىيالايدۇ، يولنى تانىيالايدۇ، ھەتتا توختىتىشىمۇ مۇمكىن!»
        </blockquote>
        <p>
          ياكى:  
          <em>«CLOiD روبوتى — بۇ سىزنىڭ ئۈيىڭىزدىكى «ياشىمايدىغان ئاداش »، ئۇ سىزگە ياردەم قىلىدۇ، لېكىن سىزنىڭ قەلبىڭىزنى ئوقۇيالمايدۇ.»</em>
        </p>

        {/* بۆلەك 4: ئويناش ئارقىلىق ئۆگىنىش */}
        <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
          4. ئويناش ئارقىلىق ئۆگىنىش
        </h2>
        <p>
          بالىلارغا «فىزىكىلىق سۈنئىي ئەقىلنى چۈشەندۈرۈشنىڭ ئەڭ ياخشى ئۇسۇلى — <strong>ئويناش</strong>.
        </p>
        <div style={{ backgroundColor: '#fffbeb', padding: '1.2rem', borderRadius: '10px', margin: '1.5rem 0' }}>
          <h3 style={{ margin: '0 0 0.8rem 0', color: '#92400e', fontWeight: 'bold' }}>ئويناش تەجرىبىسى:</h3>
          <p style={{ margin: 0 }}>
            «بالىڭىز بىلەن بىر روبوت قۇرۇڭ (قاغاز، قارتون ياكى LEGO).  
            ئۇنىڭغا «ئەقىل» قىستۇرۇڭ: «ئۇ نېمە قىلىشى كېرەك؟ نېمە قىلىشى مۇمكىن؟ نېمە قىلىشى مۇمكىن ئەمەس؟»  
            بۇ — «فىزىكىلىق سۈنئىي ئەقىلنىڭ چەكلىمىسىنى ئادەمچە چۈشەندۈرۈش.»
          </p>
        </div>

        {/* بۆلەك 5: ئاتا-ئانىلار ۋە مۇئەللىملەرگە تەكلىپ */}
        <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
          5. ئاتا-ئانىلار ۋە مۇئەللىملەرگە تەكلىپ
        </h2>
        <p>
          بالىلارغا «فىزىكىلىق سۈنئىي ئەقىلنى چۈشەندۈرۈشتە:
        </p>
        <ul style={{fontSize: '1.5rem', paddingLeft: '1.5rem' }}>
          <li>«خاتا» دېگەن سۆزنى ئىشلىتىش ئەمەس، بەلكى «ئۇ بۇنى ئۆگىنمىگەن» دېگەن سۆزنى ئىشلىتىڭ.</li>
          <li>روبوت «ئەقىللىك» دەپ ئەمەس، بەلكى «ئۇنىڭدا بىر داستۇر بار» دەپ تەسۋىرلەڭ.</li>
          <li>بالىنىڭ «روبوت مېنى سۆيمەيدۇ» دېگەن سۆزىگە «ھەئە، لېكىن سەن ئۇنى سۆيىشىڭ مۇمكىن» دەپ جاۋاب بېرىڭ.</li>
        </ul>

        {/* خۇلاسە */}
        <h2 style={{ fontSize: '1.9rem', fontWeight: 'bold', marginTop: '2.5rem', color: '#1e293b' }}>
          خۇلاسە
        </h2>
        <p>
          فىزىكىلىق سۈنئىي ئەقىل — بۇ ماشىنا ئەمەس، بەلكى <strong>يېڭى دوست</strong>. لېكىن بۇ دوستنىڭ چەكلىمىسى بار:
        </p>
        <div style={{ textAlign: 'center', margin: '1.5rem 0', fontSize: '1.1rem', fontStyle: 'italic', color: '#0c4a6e' }}>
          «ئۇ سىز بىلەن قول تۇتۇشىدۇ، لېكىن قەلبىڭىزنى تۇتالمىيدۇ.  
          ئۇ سىزگە ياردەم قىلىدۇ، لېكىن سىزنىڭ ئويىڭىزنى ئوقۇيالمايدۇ.  
          شۇڭلاشقا — <strong>سىز ھەرگىز ئالماشتۇرۇلماسلىق كېرەك بولغان ئىنسان</strong>.»
        </div>

        {/* ئۆزئارا تەسىرلىك روبوت ئوينىقى */}
        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b' }}> QutadguAI🤖 روبوت بىلەن ئوينا!</h2>
          <p>تۆۋەندىكى توپچىنى بېسىپ، روبوتتا قول كۆتۈرۈش/چۈشۈرۈشنى سىناڭ:</p>
          <div
            onClick={toggleRobotArm}
            style={{
              width: '120px',
              height: '180px',
              margin: '1.5rem auto',
              position: 'relative',
              cursor: 'pointer',
            }}
          >
            {/* روبوت بەدەن */}
            <div style={{
              width: '60px',
              height: '100px',
              backgroundColor: '#fb0606ff',
              margin: '0 auto',
              borderRadius: '8px',
            }}></div>
            {/* روبوت قول */}
            <div
              style={{
                position: 'absolute',
                top: '40px',
                left: '-30px',
                width: '60px',
                height: '10px',
                backgroundColor: '#07a7fdff',
                transformOrigin: 'right center',
                transform: robotArmUp ? 'rotate(-60deg)' : 'rotate(0deg)',
                transition: 'transform 0.4s ease',
              }}
            ></div>
          </div>
          <p style={{ color: '#1e00feff', fontSize: '1.5rem' }}>
            {robotArmUp ? 'روبوت قول كۆتۈردى! 👋' : 'روبوت قول چۈشۈردى.'}
          </p>
        </div>
      </div>

      {/* ئاخىرلىشىش */}
      <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0', textAlign: 'center', color: '#006effff' }}>
        <p>
          بالىلار دۇنياسىغا سۈنئىي ئەقىلنى كىرگۈزۈش — بۇ تېخنىكا ئەمەس، بەلكى <strong>مۇھەببەت بىلەن چۈشەندۈرۈش</strong>.
        </p>
        <p style={{ fontSize: '1.5rem', marginTop: '1rem', fontWeight: 'bold' }}>
          چۈنكى بالىلارنىڭ دۇنياسىدا، <strong>ھەر بىر ماشىنا — بىر دوست</strong>.
        </p>
      </div>
    </div>
  );
};

export default Blog101;