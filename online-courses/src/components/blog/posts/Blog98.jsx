import React from 'react';

const Blog98 = () => {
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
        src="https://via.placeholder.com/900x400/7c2d12/ffffff?text=5-%D9%82%D9%8A%D8%B3%D9%8A%D9%85%3A+%D8%AE%D9%8A%D8%B2%D9%85%D9%8E%D8%AA%D9%84%D9%8E%D8%B1+%D9%8A%D9%88%D9%82%D9%8A%D9%84%D9%8A%D9%BE+%D9%83%D9%8A%D8%AA%D9%8A%D9%85%D9%8F%D9%8A+%D9%8A%D8%A7%D9%83%D9%8A+%D9%88%D9%96%D8%B2%DA%AF%DB%96%D8%B1%D9%8A%D9%85%D9%8F%D9%8A%3F"
        alt="خىزمەتلەر يوقىلىپ كېتەمدۇ ياكى ئۆزگىرەمدۇ؟"
        style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '1.5rem' }}
      />

      {/* ماۋزۇ & ساناجەت */}
      <h1 style={{ fontSize: '2.0rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '0.5rem', color: '#0f172a' }}>
        5-قىسىم: خىزمەتلەر يوقىلىپ كېتەمدۇ ياكى ئۆزگىرەمدۇ؟
      </h1>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 'normal', textAlign: 'center', marginBottom: '1.5rem', color: '#64748b' }}>
        سۈنئىي ئەقىل بىلەن ھەمكارلىشىپ ئىشلەشنىڭ كەلگۈسى
      </h2>
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2rem', fontSize: '1rem' }}>
        KeLBiL | 2026-يىلى 1-ئاينىڭ 15-كۈنى، سائەت 22:00
      </p>

      {/* مۇقەددىمە */}
      <p>
        «سۈنئىي ئەقىل بارلىق خىزمەتلەرنى يوقىتىدۇ» دېگەن خەۋەرلەر ھەر يىلى يېڭىدىن يېڭىغا چىقىدۇ. لېكىن 2026-يىلنىڭ باشىدا CES 2026، NVIDIA، Boston Dynamics قاتارلىق تەجرىبىلەر بىزگە بىر نەرسىنى ئېنىق كۆرسىتتى:
      </p>
      <div style={{ backgroundColor: '#f0fdf4', padding: '1.3rem', borderRadius: '10px', margin: '1.5rem 0', borderRight: '4px solid #16a34a', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold', color: '#166534' }}>
          سۈنئىي ئەقىل خىزمەتلەرنى يوقىتىپلا قالمايدۇ — بەلكى <strong>خىزمەتلەرنىڭ مەزمۇنىنى ئۆزگەرتىدۇ</strong>.
        </p>
      </div>
      <p>
        بۇ يېڭى دەۋردە، «خىزمەت» دېگەن سۆزنىڭ مەنىسى ئۆزگەردى. ئەمدى مۇھىمى «نېمە قىلىش» ئەمەس، بەلكى «<strong>قانداق قىلىش</strong>».
      </p>

      {/* بۆلەك 1: «خىزمەت يوقىتىش» مىفى — نېمە ئۈچۈن خاتا؟ */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
        «خىزمەت يوقىتىش» مىفى — نېمە ئۈچۈن خاتا؟
      </h2>
      <p>
        سۈنئىي ئەقىلنىڭ يېتىلىشى بىلەن، كۆپ خىزمەتلەر «ئاپتوماتىكلاشتى» دېيىلىدۇ. لېكىن ھەقىقەت شۇكى:
      </p>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li><strong>خىزمەت يوقىتىلمىدى</strong> — بەلكى <strong>خىزمەتنىڭ بىر قىسىمى ئاپتوماتىكلاشتى</strong>.</li>
        <li><strong>خىزمەتچى يوقىتىلمىدى</strong> — بەلكى <strong>خىزمەتچىنىڭ رولى ئۆزگەردى</strong>.</li>
      </ul>
      <p>
        مەسىلەن:
      </p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', fontSize: '0.95rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f1f5f9' }}>
            <th style={{ padding: '0.6rem', textAlign: 'right', border: '1px solid #e2e8f0' }}>قەدىمكى خىزمەت</th>
            <th style={{ padding: '0.6rem', textAlign: 'right', border: '1px solid #e2e8f0' }}>يېڭى خىزمەت</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '0.6rem', textAlign: 'right', border: '1px solid #e2e8f0' }}>رادىئوگرافىيە رەسىمىنى كۆز بىلەن تەھلىل قىلىش</td>
            <td style={{ padding: '0.6rem', textAlign: 'right', border: '1px solid #e2e8f0' }}>AI نىڭ تەھلىلىنى باھالاش، پاتسىيەنت بىلەن مۇنازىرە قىلىش</td>
          </tr>
          <tr>
            <td style={{ padding: '0.6rem', textAlign: 'right', border: '1px solid #e2e8f0' }}>تاللاپ يېزىلغان تاپشۇرۇقنى باھالاش</td>
            <td style={{ padding: '0.6rem', textAlign: 'right', border: '1px solid #e2e8f0' }}>سۈنئىي ئەقىل بىلەن يېزىلغان ماتېرىيالنىڭ مەنتىقىيلىقىنى باھالاش</td>
          </tr>
          <tr>
            <td style={{ padding: '0.6rem', textAlign: 'right', border: '1px solid #e2e8f0' }}>ئۈي ئىشلىرىنى قىلىش</td>
            <td style={{ padding: '0.6rem', textAlign: 'right', border: '1px solid #e2e8f0' }}>CLOiD روبوتىنى باشقۇرۇش، مۇناسىۋەت قۇرۇش</td>
          </tr>
        </tbody>
      </table>
      <p>
        بۇ جەدۋەل — <strong>خىزمەت يوقىتىلمىغانلىقىنى</strong>، بەلكى <strong>خىزمەت يېڭىلانغانلىقىنى</strong> كۆرسىتىدۇ.
      </p>

      {/* بۆلەك 2: ھەمكارلىشىش مودېلى — AI + ئىنسان */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
        ھەمكارلىشىش مودېلى — AI + ئىنسان
      </h2>
      <p>
        فيزيكىلىق سۈنئىي ئەقىل دەۋرىدە، ئەڭ مۇۋەپپەقىيەتلىك خىزمەت مودېلى — <strong>«AI + ئىنسان»</strong>. بۇ مودېل تۆۋەندىكى ئۇنسۇرلارنى ئۆز ئىچىگە ئالىدۇ:
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', margin: '1.5rem 0' }}>
        <div style={{ flex: '1 1 200px', backgroundColor: '#f0f9ff', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontWeight: 'bold', color: '#1e40af' }}>AI</p>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#334155' }}>تېخنىكا، تېزلىك، دەقت، تەكرارلاش</p>
        </div>
        <div style={{ flex: '1 1 200px', backgroundColor: '#fffbeb', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontWeight: 'bold', color: '#92400e' }}>+ ئىنسان</p>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#334155' }}>قارار، ئەخلاق، مۇناسىۋەت، توختىتىش</p>
        </div>
        <div style={{ flex: '1 1 200px', backgroundColor: '#dcfce7', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontWeight: 'bold', color: '#166534' }}>= يېڭى خىزمەت</p>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#334155' }}>ئىشلەپچىقىرىش، سەھىيە، مائارىپ</p>
        </div>
      </div>
      <p>
        بۇ مودېل — خىزمەتنى يوقىتىش ئەمەس، بەلكى <strong>خىزمەتنى يۇقىرى دەرىجىگە كۆتۈرۈش</strong>.
      </p>

      {/* بۆلەك 3: ھەقىقىي دۇنيا مىساللىرى */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
        ھەقىقىي دۇنيا مىساللىرى
      </h2>
      <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginTop: '1.2rem', color: '#334155' }}>1. CATL زاۋۇتىدىكى «Moz» روبوتى</h3>
      <p>
        بۇ روبوت باتارېيە زاۋۇتىدا %99 مۇۋەپپەقىيەتلىك يۇقىرى توك سىناقى ئېلىپ باردى. لېكىن بۇ روبوت «ئىشچى يوقىتىلمىدى» — بەلكى «ئىشچى رولى ئۆزگەردى». ئىشچى ھازىر روبوت باشقۇرغۇچى، باھالاشچى، توختىتىشچى بولۇپ قالدى.
      </p>

      <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginTop: '1.2rem', color: '#334155' }}>2. LG «CLOiD» ئائىلە روبوتى</h3>
      <p>
        بۇ روبوت ئۈي ئىشلىرىنى قىلالايدۇ. لېكىن ئائىلە ئەزالىرى «خىزمەتچى يوقىتىلمىدى» — بەلكى «خىزمەتچى رولى ئۆزگەردى». ئاتا-ئانا ھازىر روبوت بىلەن مۇناسىۋەت قۇرۇش، باشقۇرۇش، باھالاش كومپېتېنتسىيىسىنى ئىگىلەش كېرەك.
      </p>

      <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginTop: '1.2rem', color: '#334155' }}>3. Uber روبوت ماشىنىسى</h3>
      <p>
        بۇ ماشىنىلار سان فرانسىسكودا 2026-يىلى خىزمەت قىلىدۇ. لېكىن «شاۋۋۇرچى يوقىتىلمىدى» — بەلكى «شاۋۋۇرچى رولى ئۆزگەردى». يېڭى «روبوت ماشىنا ئوپېراتورى» كەسپى پەيدا بولدى.
      </p>

      {/* بۆلەك 4: قايسى خىزمەتلەر ساقلىنىدۇ؟ */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
        قايسى خىزمەتلەر ساقلىنىدۇ؟
      </h2>
      <p>
        فيزيكىلىق سۈنئىي ئەقىل دەۋرىدە، تۆۋەندىكى خىزمەتلەر ساقلىنىدۇ ۋە يۇقىرى قىممەتكە ئىگە بولىدۇ:
      </p>
      <ol style={{ paddingLeft: '1.5rem' }}>
        <li><strong>مۇرەككەپ ئەھۋالدا قارار چىقىرىش:</strong> AI نىڭ تەخمىنى + ئىنسانىي باھا = ئاخىرقى قارار.</li>
        <li><strong>مۇناسىۋەت قۇرۇش:</strong> پاتسىيەنت، ئوقۇغۇچى، مۇلازىمەتچى بىلەن سەمىمىي مۇناسىۋەت قۇرۇش.</li>
        <li><strong>توختىتىش قابىلىيتى:</strong> غايەت زور ئەھۋالدا «يوق» دېيىش.</li>
        <li><strong>ئەخلاقىي مۇددىئا:</strong> «بۇ قىلىش مۇمكىنمۇ؟» ئەمەس، «بۇ قىلىش كېرەكمۇ؟» دېگەن سوئال قويۇش.</li>
      </ol>
      <p>
        بۇ خىزمەتلەر — <strong>سۈنئىي ئەقىلنىڭ ئالماشتۇرالمايدىغان ئىنسانىي قىممىتى</strong>.
      </p>

      {/* بۆلەك 5: كەلگۈسى — «ھەمكارلىشىش دەۋرى» */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
        كەلگۈسى — «ھەمكارلىشىش دەۋرى»
      </h2>
      <p>
        2030-يىلىغا كەلگەندە، دۇنيادىكى كۆپ خىزمەتلەر «AI + ئىنسان» مودېلى بويىچە ئىشلىيىدۇ. بۇ دەۋردە:
      </p>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li>دوختۇر — AI دىئاگنوزىنى باھالايدىغان قارارچى.</li>
        <li>مۇئەللىم — سۈنئىي ئەقىل بىلەن يېزىلغان ماتېرىيالنى باھالايدىغان مۇھاكىمە يۆتكىگۈچ.</li>
        <li>زاۋۇت ئىشچىسى — روبوت باشقۇرغۇچى.</li>
        <li>شاۋۋۇرچى — روبوت ماشىنا ئوپېراتورى.</li>
      </ul>
      <p>
        بۇ يېڭى دەۋر — <strong>خىزمەت يوقىتىش دەۋرى ئەمەس</strong>، بەلكى <strong>خىزمەت يېڭىلانىش دەۋرى</strong>.
      </p>

      {/* خۇلاسە */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2.5rem', color: '#1e293b' }}>
        خۇلاسە
      </h2>
      <p>
        سۈنئىي ئەقىل خىزمەتلەرنى يوقىتىپلا قالمايدۇ — بەلكى <strong>خىزمەتلەرنىڭ مەزمۇنىنى يېڭىلايدۇ</strong>.
      </p>
      <p>
        كەلگۈسىدە، مۇھىم بولىدىغان نەرسە — «نېمە قىلىش» ئەمەس، بەلكى «<strong>قانداق قىلىش</strong>». سۈنئىي ئەقىل بىلەن ھەمكارلىشىش — بۇ خىزمەتنى ساقلاپ قالىش ئۇسۇلى ئەمەس، بەلكى <strong>خىزمەتنى يۇقىرى دەرىجىگە كۆتۈرۈش يولى</strong>.
      </p>
      <p style={{ fontWeight: 'bold', fontSize: '1.15rem', textAlign: 'center', marginTop: '1.5rem', fontStyle: 'italic' }}>
        خىزمەت يوقىتىلمىدى — بەلكى <strong>ئىنسان بولۇشنىڭ مەنىسى يېڭىلاندى</strong>.
      </p>

      {/* كېيىنكى قىسىم ئىشارىتى */}
      <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0', textAlign: 'center', color: '#64748b' }}>
        <p>كېيىنكى قىسىم: <strong>6-قىسىم — توختىتىلىدىغان ئىنسان بولۇش</strong></p>
        <p>سۈنئىي ئەقىلگە قالدۇرۇلماسلىقى كېرەك بولغان ئاخىرقى قارار</p>
      </div>
    </div>
  );
};

export default Blog98;