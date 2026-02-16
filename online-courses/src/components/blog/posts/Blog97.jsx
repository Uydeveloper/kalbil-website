import React from 'react';

const Blog97 = () => {
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
        src="https://via.placeholder.com/900x400/1d4ed8/ffffff?text=4-%D9%82%D9%8A%D8%B3%D9%8A%D9%85%3A+%D9%81%D9%8A%D8%B2%D9%8A%D9%83%D9%8A%D9%84%D9%8A%D9%82+%D8%B3%D9%88%D9%86%D8%A6%D9%8A+%D8%A6%D9%82%D9%8A%D9%84+%D8%AF%DB%96%D9%88%D8%B1%D9%8A%D8%AF%D9%8A%D9%83%D9%8A+%D9%82%D8%A7%D9%8A%D8%AA%D8%A7+%D8%A6%DB%96%DA%AF%DB%96%D9%86%D9%8A%D8%B4"
        alt="فيزيكىلىق سۈنئىي ئەقىل دەۋرىدە قايتا ئۆگىنىش"
        style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '1.5rem' }}
      />

      {/* ماۋزۇ & ساناجەت */}
      <h1 style={{ fontSize: '2.0rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '0.5rem', color: '#0f172a' }}>
        4-قىسىم: فىزىكىلىق سۈنئىي ئەقىل دەۋرىدە قايتا ئۆگىنىش
      </h1>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 'normal', textAlign: 'center', marginBottom: '1.5rem', color: '#64748b' }}>
        داۋالاش كەسپىي خادىملىرى ۋە مائارىپچىلار ئۈچۈن يېڭى ساۋاتلىق كېرەك؟
      </h2>
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2rem', fontSize: '1rem' }}>
        KeLBiL | 2026-يىلى 1-ئاينىڭ 15-كۈنى، سائەت 20:15
      </p>

      {/* مۇقەددىمە */}
      <p>
        CES 2026 دا، NVIDIA نىڭ «Alpamayo» سىستېمىسى، LG نىڭ «CLOiD» روبوتى، Boston Dynamics نىڭ «Atlas» روبوتى — بۇلارنىڭ ھەممىسى بىر نەرسىنى كۆرسىتىدۇ: فيزيكىلىق سۈنئىي ئەقىل ھازىر «ئېكران ئىچىدە» ئەمەس، بەلكى «ھەقىقىي دۇنيادا» ئىشلەيدۇ.
      </p>
      <p>
        بۇ ئۆزگىرىش پەقەت تېخنىكا ساھەسىگە تەسىر كۆرسىتىپلا قالمايدۇ. بەلكى، <strong>داۋالاش خادىملىرى</strong> ۋە <strong>مائارىپچىلار</strong> قانداق ئىشلىشى، قانداق ئۆگىنىشى، قانداق تەربىيەلەشى كېرەكلىكىنى تامامەن ئۆزگەرتىدۇ.
      </p>
      <p>
        بۇ يېڭى دەۋردە، «قايتا ئۆگىنىش» — بۇ تاللاش ئەمەس، بەلكى <strong>زۆرۈرىيەت</strong>.
      </p>

      {/* بۆلەك 1: نېمە ئۈچۈن «قايتا ئۆگىنىش» زۆرۈر؟ */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
        نېمە ئۈچۈن «قايتا ئۆگىنىش» زۆرۈر؟
      </h2>
      <p>
        فيزيكىلىق سۈنئىي ئەقىل دەۋرىدە، كەسپىي خادىملەرنىڭ رولى ئۆزگەردى:
      </p>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li><strong>قەدىمكى رول:</strong> بىلىم بار، تەجرىبە بار، ئىشلەيدىغان ئادەم.</li>
        <li><strong>يېڭى رول:</strong> سۈنئىي ئەقىل بىلەن ھەمكارلىشىپ، ئىنسانىي قىممەتلەرنى ساقلايدىغان قارارچى.</li>
      </ul>
      <p>
        بۇ ئۆزگىرىش بىلەن بىرگە، تاللاپ ئالىدىغان كومپېتېنتسىيىلەرمۇ ئۆزگەردى:
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', margin: '1.5rem 0' }}>
        <div style={{ flex: '1 1 250px', backgroundColor: '#f0f9ff', padding: '1rem', borderRadius: '8px', borderRight: '3px solid #3b82f6' }}>
          <p style={{ margin: 0, fontWeight: 'bold', color: '#1e40af' }}>قەدىمكى ساۋاتلىق</p>
          <ul style={{ margin: '0.5rem 0 0 1rem', fontSize: '0.95rem' }}>
            <li>فان بىلىمى</li>
            <li>تەجرىبە</li>
            <li>ئىشلەش تېزلىكى</li>
          </ul>
        </div>
        <div style={{ flex: '1 1 250px', backgroundColor: '#fffbeb', padding: '1rem', borderRadius: '8px', borderRight: '3px solid #ca8a04' }}>
          <p style={{ margin: 0, fontWeight: 'bold', color: '#92400e' }}>يېڭى ساۋاتلىق</p>
          <ul style={{ margin: '0.5rem 0 0 1rem', fontSize: '0.95rem' }}>
            <li>AI بىلەن ھەمكارلىشىش</li>
            <li>قارار باھالاش</li>
            <li>ئەخلاقىي مۇددىئا</li>
            <li>مۇناسىۋەت قۇرۇش</li>
          </ul>
        </div>
      </div>

      {/* بۆلەك 2: داۋالاش خادىملىرى ئۈچۈن يېڭى ساۋاتلىق */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
        داۋالاش خادىملىرى ئۈچۈن يېڭى ساۋاتلىق
      </h2>
      <p>
        بىر دوختۇر ھازىر تۆۋەندىكى كومپېتېنتسىيىلەرنى ئىگىلەشى كېرەك:
      </p>
      <ol style={{ paddingLeft: '1.5rem' }}>
        <li><strong>AI نىڭ چەكلىمىلىرىنى چۈشىنىش:</strong> سۈنئىي ئەقىلنىڭ نەتىجىسىنى «جاۋاب» دەپ قوبۇل قىلماسلىق، بەلكى «تەخمىن» دەپ باھالاش.</li>
        <li><strong>مۇرەككەپ ئەھۋالدا توختىتىش:</strong> AI «داۋالاش كېرەك» دەيدىغاندا، بۇنىڭ ماددىي، مەدەنىي، ئەخلاقىي ئۆلچىمى بارلىقىنى بايقاش.</li>
        <li><strong>پاتسىيەنت بىلەن مۇناسىۋەت قۇرۇش:</strong> AI نىڭ قىلغان تەخمىنىنى ئادەمچە ئېيتىش، تۈشۈندۈرۈش، مۇنازىرە قىلىش.</li>
        <li><strong>تېخنىكىلىق ساۋاتلىق:</strong> AI سىستېمىسىنى ئىشلىتىش، خاتالىقنى بايقاش، بايانات تەھرىرلەش.</li>
      </ol>
      <p>
        بۇ كومپېتېنتسىيىلەر — دوختۇرلۇق كەسپىنىڭ يېڭى ئاساسى.
      </p>

      {/* بۆلەك 3: مائارىپچىلار ئۈچۈن يېڭى ساۋاتلىق */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
        مائارىپچىلار ئۈچۈن يېڭى ساۋاتلىق
      </h2>
      <p>
        مۇئەللىم ھازىر تۆۋەندىكى روللارنى ئۈستىگە ئېلىشى كېرەك:
      </p>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li><strong>«سوئال قويۇشنى ئۆگىتىشچى»:</strong> ئوقۇغۇچىلارنىڭ «توغرا جاۋاب» ئىزدەشتىن «ياخشى سوئال» قويۇشقا يۆتكەش.</li>
        <li><strong>«باھالاشچى»:</strong> سۈنئىي ئەقىل بىلەن يېزىلغان ماتېرىيالنىڭ مەزمۇنى، مەنبەسى، مەنتىقىيلىقىنى باھالاش.</li>
        <li><strong>«مۇھاكىمە يۆتكىگۈچ»:</strong> سىنىپتا «سۈنئىي ئەقىل نېمە دەيدۇ؟ بىز نېمە دەيمىز؟» دېگەن مۇنازىرىلەرنى ئورگىلىتىش.</li>
        <li><strong>«ئەخلاق مۇددىئىچى»:</strong> AI نىڭ ئىشلىتىلىشىدىكى چەكلىمىلەر، خەۋپ-خەتەر، ئەخلاقىي مەسىلىلەر توغرىسىدا ئوقۇغۇچىلار بىلەن سۆزلەشىش.</li>
      </ul>
      <p>
        بۇ يېڭى روللار — مۇئەللىمنى «بىلىم بەخشى» دىن «ھۆكۈم چىقىرىشنى يېتىلدۈرگۈچ» قىلىدۇ.
      </p>

      {/* بۆلەك 4: قايتا ئۆگىنىش — قانداق باشلايمىز؟ */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
        قايتا ئۆگىنىش — قانداق باشلايمىز؟
      </h2>
      <p>
        بۇ يېڭى ساۋاتلىقنى ئىگىلەش ئۈچۈن، تۆۋەندىكى قەدەملەر زۆرۈر:
      </p>
      <div style={{ backgroundColor: '#f8fafc', padding: '1.3rem', borderRadius: '10px', margin: '1.5rem 0' }}>
        <h3 style={{ margin: '0 0 0.8rem 0', color: '#1e40af', fontWeight: 'bold' }}>1. ئۆزىڭىزنىڭ AI بىلەن مۇناسىۋىتىڭىزنى باھالاڭ</h3>
        <p style={{ margin: 0 }}>سۈنئىي ئەقىلنى قانداق ئىشلىتىسىز؟ قاچان ئىشلىتىسىز؟ قاچان ئىشلىتىمسىز؟</p>
      </div>
      <div style={{ backgroundColor: '#f0fdf4', padding: '1.3rem', borderRadius: '10px', margin: '1.5rem 0' }}>
        <h3 style={{ margin: '0 0 0.8rem 0', color: '#166534', fontWeight: 'bold' }}>2. «قارار چىقىرىش جەريانى» نى ئۆگىنىڭ</h3>
        <p style={{ margin: 0 }}>AI نىڭ نەتىجىسى + ئىنسانىي باھا = ئاخىرقى قارار</p>
      </div>
      <div style={{ backgroundColor: '#fffbeb', padding: '1.3rem', borderRadius: '10px', margin: '1.5rem 0' }}>
        <h3 style={{ margin: '0 0 0.8rem 0', color: '#92400e', fontWeight: 'bold' }}>3. كەسپىي تورغا قوشۇلىڭ</h3>
        <p style={{ margin: 0 }}>AI بىلەن ھەمكارلىشىشنى ئۆگىنىۋاتقان دوختۇرلار، مۇئەللىملەر بىلەن ئالاقىلىشىڭ.</p>
      </div>
      <div style={{ backgroundColor: '#f0f4ff', padding: '1.3rem', borderRadius: '10px', margin: '1.5rem 0' }}>
        <h3 style={{ margin: '0 0 0.8rem 0', color: '#4f46e5', fontWeight: 'bold' }}>4. ئۆزىڭىزنىڭ «ئىنسانىي قىممىتى» نى ئېنىقلاڭ</h3>
        <p style={{ margin: 0 }}>AI قىلالمايدىغان نەرسىلەر — بۇ سىزنىڭ كومپېتېنتسىيىڭىز.</p>
      </div>

      {/* بۆلەك 5: ھەقىقىي دۇنيا مىسالى — سان فرانسىسكودىكى AI روبوت ماشىنىسى */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem', color: '#1e293b' }}>
        ھەقىقىي دۇنيا مىسالى: سان فرانسىسكودىكى AI روبوت ماشىنىسى
      </h2>
      <p>
        Uber، Lucid Motors ۋە Nuro شىركەتلىرى 2026-يىلىنىڭ ئاخىرىدا سان فرانسىسكودا روبوت ماشىنىسى خىزمىتىنى باشلايدۇ. بۇ ماشىنىلار AI بىلەن باشقۇرۇلىدۇ.
      </p>
      <p>
        لېكىن بۇ ماشىنىلارنى باشقۇرۇش ئۈچۈن، <strong>«روبوت ماشىنا ئوپېراتورى»</strong> دەپ ئاتىلىدىغان يېڭى كەسپ پەيدا بولدى. بۇ كەسپنىڭ تەلەپ قىلغان ساۋاتلىقى:
      </p>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li>AI سىستېمىسىنى باشقۇرۇش</li>
        <li>خەۋپ-خەتەر باھالاش</li>
        <li>يولۇچى بىلەن مۇناسىۋەت قۇرۇش</li>
        <li>غايەت زور ئەھۋالدا توختىتىش</li>
      </ul>
      <p>
        بۇ مىسال — <strong>«AI بىلەن ھەمكارلىشىش» نىڭ كەسپىي شەكلى</strong>. داۋالاش ۋە مائارىپ ساھەسىمۇ شۇنداق بولىدۇ.
      </p>

      {/* خۇلاسە */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2.5rem', color: '#1e293b' }}>
        خۇلاسە
      </h2>
      <p>
        فيزيكىلىق سۈنئىي ئەقىل دەۋرىدە، «قايتا ئۆگىنىش» — بۇ قورقۇش ئەمەس، بەلكى <strong>ئىمكانىيەت</strong>.
      </p>
      <p>
        داۋالاش خادىملىرى ۋە مائارىپچىلار ئۈچۈن، يېڭى ساۋاتلىق — بۇ ئىشنى ساقلاپ قالىش ئۇسۇلى ئەمەس، بەلكى <strong>ئىنسانىي قىممىتىنى يۇقىرى كۆتۈرۈش يولى</strong>.
      </p>
      <p style={{ fontWeight: 'bold', fontSize: '1.15rem', textAlign: 'center', marginTop: '1.5rem', fontStyle: 'italic' }}>
        AI بىلەن ھەمكارلىشىشنى ئۆگىنىش — بۇ ئىشنى يوقىتىش ئەمەس، بەلكى <strong>ئىنسان بولۇشنى تەكىدلىتىش</strong>.
      </p>

      {/* كېيىنكى قىسىم ئىشارىتى */}
      <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0', textAlign: 'center', color: '#64748b' }}>
        <p>كېيىنكى قىسىم: <strong>5-قىسىم — خىزمەتلەر يوقىلىپ كېتەمدۇ ياكى ئۆزگىرەمدۇ؟</strong></p>
        <p>سۈنئىي ئەقىل بىلەن ھەمكارلىشىپ ئىشلەشنىڭ كەلگۈسى</p>
      </div>
    </div>
  );
};

export default Blog97;