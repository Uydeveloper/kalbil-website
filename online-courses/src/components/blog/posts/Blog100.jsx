import React from 'react';

const Blog100 = () => {
  return (
    <div
      dir="rtl"
      style={{
        fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
        backgroundColor: '#ffffff',
        color: '#1e293b',
        lineHeight: '1.85',
        padding: '2rem',
        maxWidth: '900px',
        margin: '0 auto',
        borderRadius: '12px',
        boxShadow: '0 6px 24px rgba(0,0,0,0.07)',
      }}
    >
      {/* باش رەسىم */}
      <img
        src="https://via.placeholder.com/900x400/0c4a6e/ffffff?text=7-%D9%82%D9%8A%D8%B3%D9%8A%D9%85+%28%D8%A2%D8%AE%D9%8A%D8%B1%D9%82%D9%8A%29%3A+%D8%A6%D9%8A%D9%86%D8%B3%D8%A7%D9%86%D9%84%D8%A7%D8%B1+%D9%8A%DB%96%D9%86%D9%8A%D9%84%D8%A7+%D8%AF%D8%A7%D9%88%D8%A7%D9%84%D8%A7%D8%B4+%D9%88%D9%8E+%D9%85%D8%A7%D8%A6%D8%A7%D8%B1%D9%8A%D9%BE%D9%86%D9%8A+%D8%A6%D9%8A%D9%84%D9%8A%D9%BE+%D8%A8%D9%8A%D8%B1%D9%8A%D8%B4%D9%8A+%D9%83%D9%8A%D8%B1%D9%8A%D9%83"
        alt="ئىنسانلار يەنىلا داۋالاش ۋە مائارىپنى ئېلىپ بېرىشى كېرەك"
        style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '1.5rem' }}
      />

      {/* ماۋزۇ & ساناجەت */}
      <h1 style={{ fontSize: '2.0rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '0.5rem', color: '#0f172a' }}>
        7-قىسىم (ئاخىرقى قىسىم): نېمە ئۈچۈن ئىنسانلار يەنىلا داۋالاش ۋە مائارىپنى ئېلىپ بېرىشى كېرەك؟
      </h1>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 'normal', textAlign: 'center', marginBottom: '1.5rem', color: '#64748b' }}>
        فىزىكىلىق سۈنئىي ئەقىل دەۋرىدە ئىنسانلارنىڭ خىزمىتى ساقلىنىپ قالدى
      </h2>
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2rem', fontSize: '1rem' }}>
        KeLBiL | 2026-يىلى 1-ئاينىڭ 15-كۈنى، سائەت 23:59
      </p>

      {/* مۇقەددىمە */}
      <p>
        بىز بۇ يۈرۈشلۈك ماقالىنى باشلىغاندا، بىر سوئالدىن كەلدىك:  
        <em>«فىزىكىلىق سۈنئىي ئەقىل دەۋرىدە تېببىي ۋە مائارىپ قەيەرگە قاراپ ماڭىدۇ؟»</em>
      </p>
      <p>
        7 قىسىم بويىچە ساياھەت قىلغاندىن كېيىن، بىز بىر جاۋابقا يېتتۇق:
      </p>
      <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '12px', margin: '1.5rem 0', borderRight: '4px solid #0ea5e9', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold', color: '#0c4a6e' }}>
          فيزيكىلىق سۈنئىي ئەقىل — بۇ <strong>خىزمەتلەرنى يوقىتىش ئەمەس</strong>، بەلكى <strong>ئىنسان بولۇشنىڭ مەنىسىنى قايتا كۆتۈرۈش</strong>.
        </p>
      </div>

      {/* بۆلەك 1: داۋالاش — نېمە ئۈچۈن ئىنسان كېرەك؟ */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
        داۋالاش — نېمە ئۈچۈن ئىنسان كېرەك؟
      </h2>
      <p>
        سۈنئىي ئەقىل دىئاگنوز قويالايدۇ، لېكىن:
      </p>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li>بىر بالىنىڭ قورقۇنىچىنى ھېس قىلالمايدۇ.</li>
        <li>بىر ئائىلەنىڭ ماددىي ئەھۋالىنى باھالايمىدۇ.</li>
        <li>بىر پاتسىيەنتنىڭ «ياشىش ئۈچۈن سەۋەبى» نى چۈشىنەلمەيدۇ.</li>
      </ul>
      <p>
        داۋالاش — بۇ پەقەت «نېمە بار؟» دېگەن سوئالغا جاۋاب بېرىش ئەمەس. بەلكى:
      </p>
      <blockquote style={{ borderRight: '4px solid #0ea5e9', paddingRight: '1rem', margin: '1.5rem 0', fontStyle: 'italic', color: '#334155' }}>
        «بۇ كىشىنىڭ ياشىشى ئۈچۈن نېمە قىلىش كېرەك؟» دېگەن سوئالغا جاۋاب بېرىش.
      </blockquote>
      <p>
        بۇ سوئال — <strong>ئىنساننىڭ قەلبىدىلا تۇغۇلىدۇ</strong>.
      </p>

      {/* بۆلەك 2: مائارىپ — نېمە ئۈچۈن ئىنسان كېرەك؟ */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
        مائارىپ — نېمە ئۈچۈن ئىنسان كېرەك؟
      </h2>
      <p>
        سۈنئىي ئەقىل تاپشۇرۇق ياسايمىدۇ، لېكىن:
      </p>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li>بىر ئوقۇغۇچىنىڭ قىزغىنچىقلىقىنى ئويغىتالمايدۇ.</li>
        <li>بىر بالىنىڭ «مەن بۇنى قىلالايمەن» دېگەن ئىشەنچىنى قۇرالمايدۇ.</li>
        <li>بىر سىنىپتا «بىز بىللە ئۆگىنىمەن» دېگەن ھېسسىياتنى ياراتالمايدۇ.</li>
      </ul>
      <p>
        مائارىپ — بۇ پەقەت «جاۋاب» يەتكۈزۈش ئەمەس. بەلكى:
      </p>
      <blockquote style={{ borderRight: '4px solid #16a34a', paddingRight: '1rem', margin: '1.5rem 0', fontStyle: 'italic', color: '#334155' }}>
        «بۇ بالىنىڭ ئۆمۈر بويى ئۆگىنىش ئىستىقبالىنى قۇرۇش.»
      </blockquote>
      <p>
        بۇ — <strong>مۇئەللىمنىڭ قەلبىدىلا بولىدۇ</strong>.
      </p>

      {/* بۆلەك 3: فيزيكىلىق سۈنئىي ئەقىل — بىر قورال، بىر ھەمراھ */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
        فيزيكىلىق سۈنئىي ئەقىل — بىر قورال، بىر ھەمراھ
      </h2>
      <p>
        CES 2026 دىكى NVIDIA، Boston Dynamics، LG قاتارلىق شىركەتلەرنىڭ كۆرگەزمىلىرى بىزگە بىر نەرسىنى ئېنىق كۆرسىتتى:
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', margin: '1.5rem 0' }}>
        <div style={{ flex: '1 1 250px', backgroundColor: '#f8fafc', padding: '1.2rem', borderRadius: '10px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontWeight: 'bold', color: '#1e40af' }}>روبوت</p>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem', color: '#334155' }}>فىزىكىلىق ھەرىكەت</p>
        </div>
        <div style={{ flex: '1 1 250px', backgroundColor: '#f0fdf4', padding: '1.2rem', borderRadius: '10px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontWeight: 'bold', color: '#166534' }}>سۈنئىي ئەقىل</p>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem', color: '#334155' }}>تېخنىكىلىق قارار</p>
        </div>
        <div style={{ flex: '1 1 250px', backgroundColor: '#fffbeb', padding: '1.2rem', borderRadius: '10px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontWeight: 'bold', color: '#92400e' }}>ئىنسان</p>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem', color: '#334155' }}>قارار، مەسئۇلىيەت، مۇھەببەت</p>
        </div>
      </div>
      <p>
        فيزيكىلىق سۈنئىي ئەقىل — بۇ <strong>ئىنساننىڭ قىستۇرۇشىنى كۈچەيتىدىغان قورال</strong>، بەلكى ئالماشتۇرۇش ئەمەس.
      </p>

      {/* بۆلەك 4: ئىنسان بولۇش — ئاخىرقى قەلب */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
        ئىنسان بولۇش — ئاخىرقى قەلب
      </h2>
      <p>
        بىز بۇ يۈرۈشلۈك ماقالىدا تۆۋەندىكى نۇقتىلارنى بايان قىلدىق:
      </p>
      <ol style={{ paddingLeft: '1.5rem' }}>
        <li>مائارىپ «بىلىم يەتكۈزۈش» دىن «ھۆكۈم چىقىرىشنى تەربىيەلەش» كە يۆتكەلدى.</li>
        <li>داۋالاشتا «دىئاگنوز» نىڭ مەنىسى «تېخنىكىلىق نەتىجە» دىن «ئىنسانىي قارار» غا يۆتكەلدى.</li>
        <li>خىزمەتلەر يوقىتىلمىدى — بەلكى يېڭىلاندى.</li>
        <li>«توختىتىش» — بۇ سۈنئىي ئەقىلگە قالدۇرۇلماسلىقى كېرەك بولغان ئاخىرقى قارار.</li>
      </ol>
      <p>
        بۇ ھەممىسى بىر نەرسىنى كۆرسىتىدۇ:
      </p>
      <div style={{ backgroundColor: '#fdf2f8', padding: '1.3rem', borderRadius: '10px', margin: '1.5rem 0', borderRight: '4px solid #be123c', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '1.15rem', fontWeight: 'bold', color: '#991b1b' }}>
          <strong>سۈنئىي ئەقىل بولسا، ئىنسان تېخىمۇ زۆرۈر.</strong>
        </p>
      </div>

      {/* خۇلاسە — يۈرۈشلۈك ماقالىنى تاماملاش */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2.5rem', color: '#1e293b' }}>
        خۇلاسە
      </h2>
      <p>
        فيزيكىلىق سۈنئىي ئەقىل دەۋرى — بۇ ئىنساننىڭ ئاخىرى بولۇش دەۋرى ئەمەس. بەلكى، <strong>ئىنسان بولۇشنىڭ ھەقىقىي مەنىسىنى تاپىش دەۋرى</strong>.
      </p>
      <p>
        داۋالاش ۋە مائارىپ — بۇ ئىككى ساھە ھەرگىز ماشىنا بىلەن ئالماشتۇرۇلالمىسى، چۈنكى بۇ ساھەلەردە:
      </p>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li><strong>مۇھەببەت</strong> كېرەك.</li>
        <li><strong>ئىشەنچ</strong> كېرەك.</li>
        <li><strong>مەسئۇلىيەت</strong> كېرەك.</li>
        <li><strong>تۇيغۇ</strong> كېرەك.</li>
      </ul>
      <p>
        بۇ نەرسىلەر — <strong>سانلىق مەلۇمات بولۇپ قوبۇل قىلىنمايدۇ</strong>. بۇ نەرسىلەر — <strong>ئىنساننىڭ قەلبىدە تۇغۇلىدۇ</strong>.
      </p>
      <p style={{ fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center', marginTop: '1.5rem', fontStyle: 'italic', lineHeight: '1.6' }}>
        سۈنئىي ئەقىل دۇنياغا كەلدى.<br />
        لېكىن دۇنيانى <strong>ئىنسان بىلەن بىرلىكتە</strong> قۇرۇش كېرەك.
      </p>

      {/* ئاخىرلىشىش — ئوقۇرمەنگە ئەنگە ئېيتىش */}
      <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #e2e8f0', textAlign: 'center', color: '#475569' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          بۇ 7 قىسىملىق يۈرۈشلۈك ماقالىنىڭ ئاخىرىغا كەلدىق.
        </p>
        <p>
          سۈنئىي ئەقىل دەۋرىدە، بىزنىڭ ئەڭ چوڭ قورقۇنمۇ — «خىزمەتىمىز يوقىتىلىدۇ» دېگەن قورقۇن.  
          لېكىن ھەقىقىي قورقۇن — «<strong>ئىنسان بولۇشنى ئۇنتۇپ قالىمىز</strong>» دېگەن قورقۇن.
        </p>
        <p style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>
          داۋالاشنى، مائارىپنى، ئىنسانلىقنى — <strong>بىز ئېلىپ بېرىشىمىز كېرەك</strong>.
        </p>
        <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#64748b' }}>
          رەھمەت سىزگە، بۇ ساياھەتكە ھەمراھ بولغانلىقىڭىز ئۈچۈن. ☺️
        </p>
      </div>
    </div>
  );
};

export default Blog100;