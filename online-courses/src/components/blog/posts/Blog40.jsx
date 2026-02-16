// Blog40.jsx - قۇتادغۇبىلىك توغرىسىدىكى بىر بەت
import React from 'react';

const Blog40 = () => {
  // ئەسەر ھەققىدە ئاساسلىق ئۇچۇرلار
  const qutadghuBilikInfo = {
    title: "قۇتادغۇبىلىك",
    author: "يۈسۈپ خاس ھاجىپ (يۈسۈپ بەلىساغۇنىي، تەخمىنەن 1019-1085)",
    century: "11-ئەسىر",
    writtenPeriod: "1069-1070-يىللار",
    location: "قەشقەر شەھرى",
    meaning: "قۇتلوق بىلىك",
    language: "قەدىمىي ئۇيغۇر (قاراخانىلار) تىلى",
    script: "ئۇيغۇر ۋە ئەرەب يېزىقى",
    description: "بۇ ئەسەر قەدىمكى ئۇيغۇر ئەدەبىياتىنىڭ مۇھىم ئەسىرى بولۇپ، دۆلەت باشقۇرۇش، دۇنيا تۇرمۇشى، ئادالەت ۋە پەزىلەتلىك ئەخلاق توغرىسىدىكى ھېكمەتلىرى بىلەن تونۇلغان. تۈركىي تىللاردىكى ئەڭ قەدىمكى مەسنىۋى-ھېكمەت توپلامى دەپ قارىلىدۇ.",
    structure: "6644 قۇرۇقلۇق بەيت (ھېكمەت)، 85 بابقا بۆلۈنگەن.",
    form: "مەسنەۋى (جۈپلەر) شەكلىدە، ئارۇز ۋەزنى بىلەن يېزىلغان.",
    manuscripts: [
      "ۋىيېنا نۇسخىسى (ئۇيغۇر يېزىقى، 1439-يىلى)",
      "قاھىرە نۇسخىسى (ئەرەب يېزىقى، 14-ئەسىر)",
      "نەمەنگان نۇسخىسى (ئەرەب يېزىقى، ئەڭ تولۇق)"
    ],
    unesco: "2019-يىلى يەسۈپ خاس ھاجىپنىڭ تۇغۇلغانلىقىنىڭ 1000 يىللىقى ۋە «قۇتادغۇبىلىك» نىڭ يېزىلغانلىقىنىڭ 950 يىللىقى يۇنېسكو تەرىپىدىن خەلقئارالىق دەرىجىدە خاتىرىلەندى.",
    availability: "ئەسەر PDF شەكلىدە تارقىتىلىپ، تور ئارقىلىق قولغا كېلىش مۇمكىن."
  };

  // تۆت ئاساسىي ئوبرازلارنىڭ تەپسىلىي چۈشەندۈرۈلۈشى
  const fourSymbols = [
    {
      name: "كۈنتۇغدى",
      meaning: "قانۇن ۋە ئادىللىق",
      description: "ئەسەردە ئىپادىلەنگەن قانۇن ۋە ئادىللىق ئىدىيەسىنىڭ ئوبرازى. كۈنتۇغدى ئارقىلىق يۈسۈپ خاس ھاجىپ دۆلەتنىڭ ئۇزۇن مۇددەت تىنچ-مۇقىم بولۇشى ئۈچۈن قانۇن ۋە ئادىللىقنىڭ قانداق قېلىپ بولۇشى كېرەكلىكىنى بايان قىلغان. بۇ ئوبراز ئىجتىمائىي تەرتىپ ۋە ھۆكۈمرانلىقنىڭ ئەقلىي ئاساسىنى سىمۋوللاشتۇرىدۇ."
    },
    {
      name: "ئاي تولدى",
      meaning: "بەخت ۋە تەقدىر",
      description: "ھاياتتىكى بەخت، پۇرسەت ۋە تەقدىر كۈچلىرىنىڭ سىمۋولى. ئاي تولدى ئارقىلىق ئىنسان ھاياتىنىڭ ئۆزگىرىشچانلىقى، ئۇنىڭغا كەلگۈسىدە قانداق يولتۇتۇشى مۇمكىنلىكى ۋە بەختنىڭ قانداق پەيتلەردە يۈز بېرىشى مۇمكىنلىكى توغرىسىدىكى قاراشلار ئىپادىلەنگەن. بۇ ئىنسان ھاياتىنىڭ ئۆزگىرىشچان تەبىئىتىگە دىققەت قىلىدۇ."
    },
    {
      name: "ئۆكدۈلمىش",
      meaning: "ئەقىل ۋە دانا",
      description: "ئەقىل-پاراسەت، دانالىق ۋە ھېكمەتنىڭ ئوبرازى. ئۆكدۈلمىش ئىنسانغا قاراش، مەسىلىلەرنى ھەل قىلىش ۋە توغرا قارار چىقىرىشتىكى ئەڭ مۇھىم قورال بولۇپ، پەزىلەتلىك ھەرىكەت ۋە توغرا تاللاشنىڭ ئاساسى سۈپىتىدە تەسۋىرلەنگەن. بۇ ئوبراز ئەقىل-پاراسەتنىڭ پەزىلەتلىك تۇرمۇش ۋە باشقۇرۇشنىڭ ئاساسى ئىكەنلىكىنى ئورىتىدۇ."
    },
    {
      name: "ئۆدكۈرمىش",
      meaning: "ئاخىرەت ۋە زاھىتلىق",
      description: "ئاخىرەت ھاياتى، دىنىي ئېتىقاد ۋە زاھىتلىق تۇرمۇشنىڭ سىمۋولى. ئۆدكۈرمىش ئارقىلىق مەدىيە ھاياتىنىڭ ئەھمىيىتى، دىنىي ئېتىقادنىڭ كۈچى ۋە روھىي پاكلىققا ئېرىشىش ئۇسۇلى بايان قىلىنىدۇ. بۇ ئوبراز ئىنساننىڭ مەنىۋى تەرەققىياتى ۋە مەدىيە ھاياتىغا تەييارلىقىنى ئەھمىيەتلەندۈرىدۇ."
    }
  ];

  // ئەسەردىن ئىبارە (مىسال)
  const sampleVerse = {
    line1: "كىشىكى ئىسمى بىلەن يوقىتىدۇ،",
    line2: "ئىسمى يوق كىشى ئۆلگەن بىلەن تەڭ."
  };

  return (
    <div style={{
      fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
      direction: 'rtl',
      textAlign: 'right',
      maxWidth: '1000px',
      margin: '40px auto',
      padding: '40px',
      backgroundColor: '#f9f5eb',
      border: '2px solid #8B4513',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(139, 69, 19, 0.2)'
    }}>
      {/* تېما ماۋزۇسى */}
      <h1 style={{
        color: '#8B4513',
        borderBottom: '3px solid #D2691E',
        paddingBottom: '15px',
        fontSize: '2.8em',
        textAlign: 'center'
      }}>
        {qutadghuBilikInfo.title} - {qutadghuBilikInfo.meaning}
      </h1>
      
      {/* ئەسەر توغرىسىدا ئاساسلىق ئۇچۇر */}
      <div style={{
        marginBottom: '30px',
        padding: '25px',
        backgroundColor: '#f0e6d6',
        borderRadius: '10px',
        borderRight: '5px solid #8B4513'
      }}>
        <h2 style={{ color: '#8B4513', borderBottom: '2px dashed #D2691E', paddingBottom: '10px' }}>ئاساسىي ئۇچۇرلار</h2>
        <p><strong>مۇئەللىف:</strong> {qutadghuBilikInfo.author}</p>
        <p><strong>يېزىلغان ۋاقىت:</strong> {qutadghuBilikInfo.writtenPeriod} ({qutadghuBilikInfo.century})</p>
        <p><strong>يېزىلغان جاي:</strong> {qutadghuBilikInfo.location}</p>
        <p><strong>تىل ۋە يېزىق:</strong> {qutadghuBilikInfo.language}، {qutadghuBilikInfo.script} يېزىقىدا</p>
        <p><strong>قۇرۇلۇشى:</strong> {qutadghuBilikInfo.structure} {qutadghuBilikInfo.form}</p>
        <p><strong>تەسۋىرى:</strong> {qutadghuBilikInfo.description}</p>
        <p><strong>يۇنېسكو خاتىرىسى:</strong> {qutadghuBilikInfo.unesco}</p>
        <p><strong>تارقىتىلىشى:</strong> {qutadghuBilikInfo.availability}</p>
      </div>
      
      {/* تۆت ئاساسىي ئوبرازلارنىڭ تەپسىلىي تەسۋىرى */}
      <div style={{ marginBottom: '35px' }}>
        <h2 style={{
          color: '#8B4513',
          borderBottom: '2px solid #D2691E',
          paddingBottom: '10px',
          textAlign: 'center',
          fontSize: '2em'
        }}>
          ئەسەردىكى تۆت ئاساسىي ئوبرازلار
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '20px'
        }}>
          {fourSymbols.map((symbol, index) => (
            <div key={index} style={{
              backgroundColor: '#fff8dc',
              padding: '20px',
              borderRadius: '10px',
              border: '1px solid #D2691E',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <h3 style={{ color: '#A0522D', marginTop: '0', fontSize: '1.5em' }}>
                {symbol.name}
              </h3>
              <p style={{ fontWeight: 'bold', color: '#8B4513' }}>
                مەنىسى: {symbol.meaning}
              </p>
              <p style={{ lineHeight: '1.6', textAlign: 'justify' }}>
                {symbol.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* قول يازما نۇسخىلىرى */}
      <div style={{
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: '#e8f4f8',
        borderRadius: '10px',
        border: '1px dashed #4682b4'
      }}>
        <h3 style={{ color: '#2f4f4f', marginTop: '0' }}>ھازىرغىچە قالغان قول يازما نۇسخىلىرى:</h3>
        <ul style={{ paddingRight: '20px' }}>
          {qutadghuBilikInfo.manuscripts.map((manuscript, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>{manuscript}</li>
          ))}
        </ul>
      </div>
      
      {/* ئەسەردىن مىسال */}
      <div style={{
        backgroundColor: '#fff8dc',
        padding: '25px',
        borderRight: '6px solid #D2691E',
        borderRadius: '10px',
        margin: '25px 0',
        fontStyle: 'italic',
        fontSize: '1.2em',
        lineHeight: '1.8'
      }}>
        <h3 style={{ color: '#A0522D', marginTop: '0', textAlign: 'center' }}>ئەسەردىن بىر پارچە:</h3>
        <p style={{ textAlign: 'center' }}>{sampleVerse.line1}</p>
        <p style={{ textAlign: 'center' }}>{sampleVerse.line2}</p>
      </div>
      
      {/* ھازىرقى زامان قىممىتى ۋە قوللىنىشى */}
      <div style={{
        marginTop: '30px',
        padding: '25px',
        backgroundColor: '#f0f8ff',
        borderRadius: '10px',
        border: '2px solid #4682b4'
      }}>
        <h3 style={{ color: '#4682b4', marginTop: '0', fontSize: '1.8em' }}>
          «قۇتادغۇبىلىك» نىڭ ھازىرقى زامان قىممىتى ۋە قوللىنىشى
        </h3>
        <div style={{ lineHeight: '1.8' }}>
          <p><strong>مەدەنىيەت تارىخىدىكى ئورنى:</strong> «قۇتادغۇبىلىك» تۈرك-ئىسلام مەدەنىيىتىنىڭ ئاساس تاشلىرىدىن بولۇپ، تۈركىي خەلقلەرنىڭ ئىسلام دىنىنى قوبۇل قىلغاندىن كېيىنكى ئەڭ مۇھىم ئەسەردۇر. ئۇ بىزگە ئۇ دەۋرنىڭ ئىجتىمائىي قۇرۇلمىسى، ئىدىيە ۋە دىنىي قاراشلىرى ھەققىدە پرىمىتلىك مەنبە بولۇپ خىزمەت قىلىدۇ.</p>
          
          <p><strong>مائارىپتىكى قىممىتى:</strong> ئەسەردىكى ئەخلاقىي دەرسلەر ھازىرقى مائارىپ سىستېمىسىدا ئەخلاق تەربىيەسى، ۋەتەنپەرۋەرلىك تەربىيەسى قاتارلىق ساھەلەردە قىممەتلىك ماتېرىيال سۈپىتىدە ئىشلىتىلىشى مۇمكىن.</p>
          
          <p><strong>تېخنىكىلىق قوللىنىش ئىمكانىيىتى:</strong> ئەسەرنى <strong>PDF</strong> ھۆججىتى سۈپىتىدە چۈشۈرۈپ ئوقۇش، زېمىنلاشتۇرۇش ياكى تەتقىقات ئېلىپ بېرىش ئىنتايىن قولاي. بۇ كومپونېنتنىڭ ئۆزىمۇ زامانىۋى تېخنىكىلار (React[citation:2][citation:5], CSS) ئارقىلىق ئەسەرنى تونۇشتۇرۇشنىڭ ئۈنۈملۈك بىر مىسالىدۇر.</p>
          
          <p><strong>بۇ كومپونېنتنىڭ قىممىتى:</strong> بۇ <strong>Blog40.jsx</strong> كومپونېنتى «قۇتادغۇبىلىك» نىڭ قىممىتىنى ياش ئەۋلادقا يەتكۈزۈش، شۇنداقلا ئۇيغۇرچە فونتلارنى زامانىۋى تور تېخنىكىلىرى بىلەن بىرلەشتۈرۈشنىڭ ئۈنۈملۈك بىر يولىدۇر.</p>
        </div>
      </div>
      
      {/* فونت ھەققىدە ئەسكەرتىش */}
      <div style={{
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#e6f7ff',
        border: '1px dashed #4682b4',
        borderRadius: '8px',
        fontSize: '0.9em',
        color: '#2f4f4f'
      }}>
        <h4 style={{ marginTop: '0', color: '#4682b4' }}>فونت ھەققىدە ئەسكەرتىش:</h4>
        <p>بۇ بەتتە تۆۋەندىكى ئۇيغۇرچە فونتلار قوللاندى:</p>
        <ul style={{ paddingRight: '20px' }}>
          <li><strong>UKIJ Tuz:</strong> <em>Uyghur Computer Science Association</em> تەرىپىدىن ئىشلەنگەن، ھەقسىز ۋە يۇقىرى سۈپەتلىك فونت.</li>
          <li><strong>UKIJ Nasq:</strong> ئاۋاز بەلگىسى (ئاكسېنت)، ياۋرو ۋە باشقا بەلگىلەرنى قوللايدىغان فونت.</li>
          <li><strong>Microsoft Uighur:</strong> Microsoft سىستېمىلىرىغا كىرىتىلگەن، كىچىكرەك چوڭلۇقتا ئوچۇق كۆرۈنىدىغان فونت.</li>
        </ul>
      </div>
    </div>
  );
};

export default Blog40;