// src/components/learn-modules/HistoryModule.jsx
import React, { useState, useEffect } from 'react';
import QorTopic from './topics/QorTopic';
import UyghurKhanateTopic from './topics/UyghurKhanateTopic';
import KasgharTarixTopic from './topics/KasgharTarixTopic';
import SidiqUtlugTopic from './topics/SidiqUtlugTopic';
import TwentiethCenturyMedeniyetTopic from './topics/TwentiethCenturyMedeniyetTopic';
import OghuzNameTopic from './topics/OghuzNameTopic';
import OrkhonInscriptionsTopic from './topics/OrkhonInscriptionsTopic';
import ThickBlackDoctrineTopic from './topics/ThickBlackDoctrineTopic'; // 🆕 يېڭى تېما ئىمپورت قىلىندى
import TutimU from './topics/TutimU';

const HistoryModule = () => {
  const [activeSection, setActiveSection] = useState('qor');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // URL دىن تېما ئوتتۇرىغا قويۇش
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic') || 'qor';
    setActiveSection(topic);
  }, []);

  // تېما ئۆزگەرگەندە URL يېڭىلاش ۋە مودال ئېچىش
  const handleSectionChange = (topicId) => {
    setActiveSection(topicId);
    setIsModalOpen(true);
    const newUrl = `${window.location.pathname}?topic=${topicId}`;
    window.history.pushState({ topic: topicId }, '', newUrl);
  };

  // ھازىرقى ۋاقىت (2025-12-05)
  const currentDate = new Date('2025-12-05');
  const oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

  const allTopics = [
    { id: 'qor', title: 'ئۇيغۇر نامىنىڭ ماددى ئىسپاتى «قور» ھەيكىلى', icon: '🔍', date: new Date('2025-11-20'), views: 1500, likes: 300 },
    { id: 'uyghur_khanate', title: 'ئۇيغۇر خانلىقى (744-840)', icon: '👑', date: new Date('2025-11-28'), views: 1200, likes: 250 },
    { id: 'kasghar_tarix', title: 'قەشقەر شەھىرى تارىخى', icon: '🏰', date: new Date('2025-12-01'), views: 800, likes: 150 },
    { id: 'sidiq_utluq', title: 'سېيدى قوتلىغ قەشقەرىيى', icon: '📖', date: new Date('2025-11-25'), views: 2000, likes: 400 },
    { id: '20_asir_medeniyet', title: '20-ئەسىردىكى ئۇيغۇر مەدەنىيىتى', icon: '🎨', date: new Date('2025-12-03'), views: 600, likes: 100 },
    { id: 'thick_black_doctrine', title: 'قېلىن-قارا تەلىماتى (داپشاقنامە)', icon: '🧠', date: new Date('2025-12-04'), views: 750, likes: 200 }, // 🆕 يېڭى تېما
    { id: 'oghuz_name', title: 'ئوغۇز نامىنىڭ تارىخى', icon: '📜', date: new Date('2025-11-30'), views: 900, likes: 180 },
    { id: 'orkhon_inscriptions', title: 'ئورخون يازمىلىرى', icon: '📜', date: new Date('2025-11-15'), views: 1800, likes: 350 },
    { id: 'tutim_u', title: '  بۆرە: ئۇيغۇر مەدەنىيىتىدىكى بەش روھ', icon: '🧠', date: new Date('2025-12-02'), views: 400, likes: 80 },
  ];

  // بىر ھەپپىدىن ئۆتكەن تېمىلار (ئەڭ كۆپ كۆرۈلگەن + ياقتۇرغان بويىچە)
  const olderTopics = allTopics
    .filter(topic => topic.date < oneWeekAgo)
    .sort((a, b) => (b.views + b.likes) - (a.views + a.likes));

  // يېڭى تېمىلار (ھەپتە ئىچىدىكى)
  const recentTopics = allTopics
    .filter(topic => topic.date >= oneWeekAgo)
    .sort((a, b) => (b.views + b.likes) - (a.views + a.likes));

  const PayPalBanner = () => (
    <div 
      className="font-uyghur text-2xl w-full bg-gradient-to-br from-red-500 to-pink-600 text-white p-5 rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 text-center hover:shadow-xl"
      onClick={() => window.open('https://www.paypal.com/paypalme/KawulAbduryim', '_blank')}
    >
      <div className="font-uyghur text-2xl mb-2 animate-pulse">❤️</div>
      <div className="font-uyghur text-2xl mb-1">بىزنىڭ</div>
      <div className="font-uyghur text-2xl mb-1">قوللىشىڭىزنى</div>
      <div className="font-uyghur text-2xl">ئۈمىد قىلىمىز</div>
      <div className="font-uyghur text-2xl mt-2 opacity-90 bg-white/20 p-1 rounded">چېكىلسە PayPal غا يۆتكىلىدۇ</div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'qor': return <QorTopic />;
      case 'uyghur_khanate': return <UyghurKhanateTopic />;
      case 'kasghar_tarix': return <KasgharTarixTopic />;
      case 'sidiq_utluq': return <SidiqUtlugTopic />;
      case '20_asir_medeniyet': return <TwentiethCenturyMedeniyetTopic />;
      case 'thick_black_doctrine': return <ThickBlackDoctrineTopic />; // 🆕 يېڭى case
      case 'oghuz_name': return <OghuzNameTopic />;
      case 'orkhon_inscriptions': return <OrkhonInscriptionsTopic />;
      case 'tutim_u': return <TutimU />;
      default: return <QorTopic />;
    }
  };

  const renderTopicButton = (topic, isPopular = false) => (
    <button
      key={topic.id}
      onClick={() => handleSectionChange(topic.id)}
      className={`w-full text-right font-uyghur text-2xl px-3 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 justify-between ${
        activeSection === topic.id 
          ? 'bg-gradient-to-l from-amber-500 to-orange-500 text-white font-bold shadow-lg transform scale-105' 
          : 'bg-gray-50 text-gray-700 hover:bg-amber-50 hover:text-amber-800 hover:shadow-md'
      } ${isPopular ? 'border-r-4 border-amber-400' : ''}`}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg">{topic.icon}</span>
        <span className="flex-1 text-right">{topic.title}</span>
      </div>
      {isPopular && (
        <span className="text-xs bg-amber-200 text-amber-800 px-2 py-1 rounded-full">
          🔥 {topic.views + topic.likes} + 
        </span>
      )}
    </button>
  );

  const containerClass = isModalOpen 
    ? 'flex flex-col lg:flex-row gap-1 max-w-full mx-1 p-4 min-h-screen'
    : 'flex flex-col lg:flex-row gap-1 max-w-full mx-auto p-4 min-h-screen';

  const sidebarWidth = 'lg:w-1/5';

  return (
    <div className={containerClass}>
      {/* سول تەرەپ: PayPal بانىرى ۋە ئەڭ كۆپ كۆرۈلگەن تېمىلار */}
      <div className={`hidden lg:block ${sidebarWidth}`}>
        <div className="flex flex-col items-center gap-6 sticky top-4">
          <PayPalBanner />
          <div className="text-xs text-gray-500 text-center bg-white/80 p-2 rounded-lg">
            ھەر بىر تىللا — بىزگە تارىخىمىزنى ساقلاشقا ياردەم قىلىدۇ ❤️
          </div>
          {olderTopics.length > 0 && (
            <div className="w-full bg-white rounded-2xl shadow-md p-3 border-2 border-gray-200">
              <h4 className="text-sm font-bold text-gray-800 mb-2 text-center">🔥 ئەڭ كۆپ كۆرۈلگەن تېمىلار</h4>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {olderTopics.slice(0, 10).map(topic => renderTopicButton(topic, true))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ئوتتۇرا: مەزمۇن */}
      <div className="w-full lg:w-3/5">
        <div className="text-center mb-8 bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-2xl border-2 border-amber-300 shadow-lg">
          <h1 className="font-uyghur text-2xl md:text-5xl font-bold text-amber-900 mb-3">
            ئۇيغۇر تارىخى ۋە مەدەنىيىتى
          </h1>
          <p className="font-uyghur text-2xl text-amber-700 font-medium">ئىزدىنىش مۇنبىرى › قەدىمقى زامان ئۇيغۇر تارىخى</p>
        </div>

        {/* كىچىك ئېكران تىزىملىكى */}
        <div className="lg:hidden mb-6 bg-white rounded-2xl shadow-lg p-4 border-2 border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">📂 يېڭى تېمىلار</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {recentTopics.map((topic) => (
              <button
                key={topic.id}font-uyghur text-2xl
                onClick={() => handleSectionChange(topic.id)}
                className={`flex items-center gap-2 font-uyghur text-2xl px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === topic.id 
                    ? 'bg-amber-500 text-white font-bold shadow-lg transform scale-105' 
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-800'
                }`}
              >
                <span>{topic.icon}</span>
                <span className="max-w-[120px] truncate">{topic.title}</span>
                {topic.views + topic.likes > 500 && (
                  <span className="font-uyghur text-2xl bg-amber-200 text-amber-800 px-1 rounded">🔥</span>
                )}
              </button>
            ))}
          </div>
          {olderTopics.length > 0 && (
            <>
              <h4 className="font-uyghur text-2xl font-bold text-gray-800 mt-4 mb-2 text-center">🔥 ئەڭ كۆپ كۆرۈلگەن</h4>
              <div className="font-uyghur text-2xl flex flex-wrap gap-2 justify-center">
                {olderTopics.slice(0, 2).map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleSectionChange(topic.id)}
                    className={`flex items-center gap-2 font-uyghur text-2xl px-3 py-1 rounded-full transition-all duration-300 bg-amber-100 text-amber-800 hover:bg-amber-200`}
                  >
                    <span>{topic.icon}</span>
                    <span className="max-w-[100px] truncate">{topic.title}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* مەزمۇن */}
        <div className="font-uyghur text-2xl bg-white p-6 rounded-2xl border-2 border-amber-200 shadow-xl min-h-[600px]">
          {renderContent()}
        </div>

        {/* كوممېنتار قۇتۇسى */}
        <div className="mt-8 pt-6 border-t-2 border-amber-200">
          <h4 className="font-uyghur text-2xl text-gray-800 text-right mb-4 text-xl">💬 بۇ تېما ھەققىدە پىكىر يېزىڭ:</h4>
          <textarea
            placeholder="مەزمۇنغا باغلىق كوممېنتار يېزىڭ..."
            className="font-uyghur text-2xl w-full mt-2 p-4 border-2 border-gray-300 rounded-xl text-right text-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
            rows="4"
          />
          <button className="font-uyghur text-2xl mt-4 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-bold text-lg">
            📤 يوللاش
          </button>
        </div>
      </div>

      {/* ئوڭ تەرەپ: يېڭى تېمىلار */}
      <div className={`hidden lg:block ${sidebarWidth}`}>
        <div className={`bg-white rounded-2xl shadow-xl p-4 sticky top-4 h-[80vh] overflow-y-auto border-2 border-gray-200 ${isModalOpen ? 'ml-1' : ''}`}>
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">📂 يېڭى تېمىلار</h3>
          <div className="space-y-3">
            {recentTopics.map(topic => renderTopicButton(topic))}
          </div>
          <div className="mt-6 text-xs text-gray-500 text-center bg-gray-100 p-2 rounded-lg">
            ⭐ يەنە كۆپ تېما كېيىنكى نەشرىلەردە...
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryModule;