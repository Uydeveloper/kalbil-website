// src/components/learn-modules/LiteratureModule.jsx
import React, { useState, useEffect } from 'react';

// تەپ قوشۇش مودالى
const AddTopicModal = ({ isOpen, onClose, onSave, editTopic = null }) => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    icon: '📖',
    introduction: '',
    mainContent: [{ title: '', content: '', examples: '', analysis: '' }],
    keyConcepts: [{ term: '', definition: '' }],
    applications: ''
  });

  useEffect(() => {
    if (editTopic) {
      setFormData({
        id: editTopic.id || `topic-${Date.now()}`,
        title: editTopic.title || '',
        description: editTopic.description || '',
        icon: editTopic.icon || '📖',
        introduction: editTopic.fullContent?.introduction || '',
        mainContent: editTopic.fullContent?.mainContent || [{ title: '', content: '', examples: '', analysis: '' }],
        keyConcepts: editTopic.fullContent?.keyConcepts || [{ term: '', definition: '' }],
        applications: editTopic.fullContent?.applications || ''
      });
    } else {
      setFormData({
        id: `topic-${Date.now()}`,
        title: '',
        description: '',
        icon: '📖',
        introduction: '',
        mainContent: [{ title: '', content: '', examples: '', analysis: '' }],
        keyConcepts: [{ term: '', definition: '' }],
        applications: ''
      });
    }
  }, [editTopic, isOpen]);

  const getMainContent = () => {
    return Array.isArray(formData.mainContent) ? formData.mainContent : [{ title: '', content: '', examples: '', analysis: '' }];
  };

  const getKeyConcepts = () => {
    return Array.isArray(formData.keyConcepts) ? formData.keyConcepts : [{ term: '', definition: '' }];
  };

  const handleInputChange = (section, index, field, value) => {
    const newData = { ...formData };
    
    if (section === 'mainContent') {
      const mainContent = getMainContent();
      mainContent[index] = { ...mainContent[index], [field]: value };
      newData.mainContent = mainContent;
    } else if (section === 'keyConcepts') {
      const keyConcepts = getKeyConcepts();
      keyConcepts[index] = { ...keyConcepts[index], [field]: value };
      newData.keyConcepts = keyConcepts;
    } else {
      newData[section] = value;
    }
    
    setFormData(newData);
  };

  const addSection = (section) => {
    const newData = { ...formData };
    
    if (section === 'mainContent') {
      const mainContent = getMainContent();
      newData.mainContent = [...mainContent, { title: '', content: '', examples: '', analysis: '' }];
    } else if (section === 'keyConcepts') {
      const keyConcepts = getKeyConcepts();
      newData.keyConcepts = [...keyConcepts, { term: '', definition: '' }];
    }
    
    setFormData(newData);
  };

  const removeSection = (section, index) => {
    const newData = { ...formData };
    
    if (section === 'mainContent') {
      const mainContent = getMainContent();
      if (mainContent.length > 1) {
        mainContent.splice(index, 1);
        newData.mainContent = mainContent;
      }
    } else if (section === 'keyConcepts') {
      const keyConcepts = getKeyConcepts();
      if (keyConcepts.length > 1) {
        keyConcepts.splice(index, 1);
        newData.keyConcepts = keyConcepts;
      }
    }
    
    setFormData(newData);
  };

  const handleSave = () => {
    if (!formData.title.trim() || !formData.description.trim()) {
      alert('ماۋزۇ ۋە چۈشەندۈرۈش مەزمۇنى تولدۇرۇلۇشى زۆرۈر!');
      return;
    }

    const topicData = {
      id: formData.id,
      title: formData.title,
      description: formData.description,
      icon: formData.icon,
      fullContent: {
        introduction: formData.introduction,
        mainContent: getMainContent().filter(section => section.title.trim() !== '' || section.content.trim() !== ''),
        keyConcepts: getKeyConcepts().filter(concept => concept.term.trim() !== '' || concept.definition.trim() !== ''),
        applications: formData.applications
      }
    };

    onSave(topicData);
    onClose();
  };

  if (!isOpen) return null;

  const mainContent = getMainContent();
  const keyConcepts = getKeyConcepts();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">
            {editTopic ? 'تەپنى ئىدىت قىلىش' : 'يېڭى تەپ قوشۇش'}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">
            ✕
          </button>
        </div>

        {/* ئاساسىي ئۇچۇرلار */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ماۋزۇ نامى *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('', 0, 'title', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="ماۋزۇ نامىنى كىرگۈزۈڭ"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">چۈشەندۈرۈش *</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('', 0, 'description', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              rows="2"
              placeholder="ماۋزۇ چۈشەندۈرۈشىنى كىرگۈزۈڭ"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">سىمۋول</label>
            <select
              value={formData.icon}
              onChange={(e) => handleInputChange('', 0, 'icon', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="📖">📖 ئومۇمىي</option>
              <option value="✍️">✍️ شېئىرىيەت</option>
              <option value="📚">📚 ناسىر</option>
              <option value="🎭">🎭 دراما</option>
              <option value="🖋️">🖋️ ئەدەبىي تەنقىد</option>
              <option value="📜">📜 تارىخىي ئەسەر</option>
              <option value="🌟">🌟 مەشھۇر شائىر</option>
              <option value="💭">💭 ئىجتىمائىي رومان</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">كىرىش سۆزى</label>
            <textarea
              value={formData.introduction}
              onChange={(e) => handleInputChange('', 0, 'introduction', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              rows="3"
              placeholder="ماۋزۇغا كىرىش سۆزىنى كىرگۈزۈڭ"
            />
          </div>
        </div>

        {/* ئاساسىي مەزمۇن بۆلەكلىرى */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-bold text-gray-800">ئاساسىي مەزمۇن بۆلەكلىرى</h4>
            <button
              onClick={() => addSection('mainContent')}
              className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
            >
              + بۆلەك قوشۇش
            </button>
          </div>

          {mainContent.map((section, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-3">
                <h5 className="font-bold text-gray-700">بۆلەك {index + 1}</h5>
                {mainContent.length > 1 && (
                  <button
                    onClick={() => removeSection('mainContent', index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="space-y-3">
                <input
                  type="text"
                  value={section.title || ''}
                  onChange={(e) => handleInputChange('mainContent', index, 'title', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500"
                  placeholder="بۆلەك نامى"
                />

                <textarea
                  value={section.content || ''}
                  onChange={(e) => handleInputChange('mainContent', index, 'content', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500"
                  rows="4"
                  placeholder="بۆلەك مەزمۇنى"
                />

                <textarea
                  value={section.examples || ''}
                  onChange={(e) => handleInputChange('mainContent', index, 'examples', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500"
                  rows="3"
                  placeholder="مىساللار (ئىختىيارىي)"
                />

                <textarea
                  value={section.analysis || ''}
                  onChange={(e) => handleInputChange('mainContent', index, 'analysis', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500"
                  rows="3"
                  placeholder="تەھلىل ۋە چۈشەندۈرۈش (ئىختىيارىي)"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ئاچقۇچلۇق سۆزلەر */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-bold text-gray-800">ئاچقۇچلۇق سۆزلەر</h4>
            <button
              onClick={() => addSection('keyConcepts')}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              + سۆز قوشۇش
            </button>
          </div>

          {keyConcepts.map((concept, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 mb-3">
              <div className="flex justify-between items-center mb-3">
                <h5 className="font-bold text-gray-700">سۆز {index + 1}</h5>
                {keyConcepts.length > 1 && (
                  <button
                    onClick={() => removeSection('keyConcepts', index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  value={concept.term || ''}
                  onChange={(e) => handleInputChange('keyConcepts', index, 'term', e.target.value)}
                  className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="تېرمىن"
                />

                <input
                  type="text"
                  value={concept.definition || ''}
                  onChange={(e) => handleInputChange('keyConcepts', index, 'definition', e.target.value)}
                  className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="چۈشەندۈرۈش"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ئىشلىتىش ساھەلىرى */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">ئىشلىتىش ساھەلىرى</label>
          <textarea
            value={formData.applications}
            onChange={(e) => handleInputChange('', 0, 'applications', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            rows="3"
            placeholder="ئىشلىتىش ساھەلىرىنى كىرگۈزۈڭ"
          />
        </div>

        {/* ھەرىكەت بوتانلىرى */}
        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            بىكار قىلىش
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
          >
            {editTopic ? 'ساقلاش' : 'قوشۇش'}
          </button>
        </div>
      </div>
    </div>
  );
};

// ئاساسىي ئەدەبىيات مودۇلى
const LiteratureModule = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [completedTopics, setCompletedTopics] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingTopic, setEditingTopic] = useState(null);
  const [customTopics, setCustomTopics] = useState([]);

  // تولۇق ئەدەبىيات تەپلىرى
  const defaultTopics = [
    {
      id: 'poetry-theory',
      title: 'نەزىرىيە (شېئىرىيەت)',
      description: 'شېئىرىيەت نەزىرىيەسى — شېئىر ئۇرۇقى، ۋەزىن، قافىيە ۋە ئەدەبىي سەنئەتلەرنى ئۆز ئىچىگە ئالىدۇ',
      icon: '✍️',
      fullContent: {
        introduction: `شېئىرىيەت نەزىرىيەسى ئۇيغۇر ئەدەبىياتىنىڭ مۇھىم تەركىبىي قىسمى بولۇپ، شېئىر يېزىشنىڭ ئاساسىي قائىدىلىرى، ئۇسۇللىرى ۋە سەنئەت پرىنسىپلىرىنى ئۆز ئىچىگە ئالىدۇ. بۇ ساھەدە ئەنئەنىۋى ۋە زامانىۋى شېئىرىيەت نەزەرىيەلىرى ئارىلاشقان.`,
        mainContent: [
          {
            title: 'شېئىر ئۇرۇقى ۋە ۋەزىن',
            content: `**شېئىر ئۇرۇقى**
            • شېئىرنىڭ ئاساسىي قۇرۇلما بىرلىكى
            • تەلەپپۇز ۋە مۇزىكالىق ئەڭ مۇھىم ئامىل
            • ئۇيغۇر شېئىرىيىتىدە 7، 8، 11 بوغۇز ئۇرۇقلار كەڭ قوللىنىلىدۇ
            
            **ۋەزىن (رىتىم)**
            • بوغۇزلارنىڭ تەرتىپلىك تەكرارلىنىشى
            • شېئىرنىڭ مۇزىكالىق خاراكتېرىنى بەلگىلەيدۇ
            • ئارۇز ۋەزنىى ۋە خەلق ۋەزنىى قاتارلىق تۈرلەر بار`,
            examples: `11 بوغۇز ئۇرۇقى مىسالى:
            "كۆك ║ تاغلار ║ بېشىدا ║ قار ║ بار" (5 بوغۇز)
            "يېزى ║ لار ║ يېنى ║ دا ║ گۈل ║ بار" (6 بوغۇز)`,
            analysis: `شېئىر ئۇرۇقى شېئىرنىڭ ئىچكى قۇرۇلمىسىنى شەكىللەندۈرىدۇ. ھەر بىر بوغۇز بىر مەنىنى ئىپادىلەيدۇ ۋە شېئىرنىڭ ئومۇمىي رىتىمىنى بەلگىلەيدۇ.`
          },
          {
            title: 'قافىيە ۋە رەدىف',
            content: `**قافىيە**
            • شېئىر ئۇرۇقلارىنىڭ ئاخىرقى بوغۇزلىرىنىڭ ئاۋاز جەھەتتىن ئوخشاشلىقى
            • شېئىرنىڭ ئاھەنگە ئىگە بولۇشىنى تەمىنلەيدۇ
            • تامام قافىيە، يېرىم قافىيە قاتارلىق تۈرلەر بار
            
            **رەدىف**
            • قافىيەدىن كېيىن تەكرارلىنىدىغان سۆز ياكى سۆز گۇرۇپپىسى
            • شېئىرنىڭ بىرلىكىنى كۈچەيتىدۇ
            • مەلۇم بىر تېمىنى تاكىتلاش ئۈچۈن ئىشلىتىلىدۇ`,
            examples: `قافىيە مىسالى:
            "كۆك تاغلار بېشىدا قار بار،
            يېزىلار يېنىدا گۈل بار."
            
            بۇ يەردە "بار" سۆزى رەدىف سۈپىتىدە ئىشلىتىلگەن.`,
            analysis: `قافىيە ۋە رەدىف شېئىرنىڭ ئاھەڭگە ئىگە بولۇشى ۋە ئەسەرنىڭ يادرو قېلىشىغا ياردەم بېرىدۇ. بۇ ئۇنۇملار شېئىرنىڭ ئەستەتۇتتىن چۈشۈپ قالماستىن ساقلنىشىنى تەمىنلەيدۇ.`
          },
          {
            title: 'ئەدەبىي سەنئەتلەر',
            content: `**تەشبىه (سىمىلىك)**
            • بىر نەرسىنى يەنە بىر نەرسىگە ئوخشىتىش
            • "قەلبىم دېڭىزگە ئوخشايدۇ" دېگەندەك
            
            **ئىستىئارە (كۆچۈرۈش)**
            • جانلىق نەرسىلەرنى جانسىز نەرسىلەرگە ئوخشىتىش
            • "تاغلار كۈلۈمسىرەيدۇ" دېگەندەك
            
            **كينايە (ئىشارەت)**
            • بىر نەرسىنى ئوچۇق ئەمەس، بىۋاسىتە ئەمەس ئۇسۇلدا ئىپادىلەش
            • "قەلبىمدە ياز كەلدى" دېگەندە يېڭىلىق ۋە ئۇمىدنى بىلدۈرىدۇ`,
            examples: `تەشبىه مىسالى:
            "كۆزلىرىڭ يۇلتۇزغا ئوخشايدۇ"
            
            ئىستىئارە مىسالى:
            "بۇلۇتلار يىغلاپ يامغۇر ياغدۇردى"
            
            كينايە مىسالى:
            "قەلبىمدە قىش كەلدى" (قايغۇ ۋە قاراڭغۇلۇقنى بىلدۈرىدۇ)`,
            analysis: `ئەدەبىي سەنئەتلەر شېئىرنىڭ ئىپادىلىش كۈچىنى ئاشۇرىدۇ ۋە ئوقۇرمەننىڭ خىيالىغا تەسىر كۆرسىتىدۇ. بۇ سەنئەتلەر شېئىرنى ساددا تىل ئىپادىسىدىن ئەدەبىي سەنئەت دەرىجىسىگە كۆتۈرىدۇ.`
          }
        ],
        keyConcepts: [
          { term: 'شېئىر ئۇرۇقى', definition: 'شېئىرنىڭ ئاساسىي قۇرۇلما بىرلىكى بولۇپ، بوغۇزلاردىن تەركىب تاپىدۇ' },
          { term: 'ۋەزىن', definition: 'شېئىردىكى بوغۇزلارنىڭ تەرتىپلىك تەكرارلىنىشى ۋە رىتىمى' },
          { term: 'قافىيە', definition: 'شېئىر ئۇرۇقلارىنىڭ ئاخىرقى بوغۇزلىرىنىڭ ئاۋاز جەھەتتىن ئوخشاشلىقى' },
          { term: 'رەدىف', definition: 'قافىيەدىن كېيىن تەكرارلىنىدىغان سۆز ياكى سۆز گۇرۇپپىسى' },
          { term: 'تەشبىه', definition: 'بىر نەرسىنى يەنە بىر نەرسىگە ئوخشىتىش ئەدەبىي سەنئىتى' }
        ],
        applications: `كۈندىلىك تۇرمۇش ۋە ئەدەبىي ئىجادىيەتتە قوللىنىشلار:
        
        ✍️ شېئىر يېزىش
        ✍️ ئەدەبىي تەنقىد
        ✍️ تىل ئىجادىيىتى
        ✍️ مەدەنىيەت تەتقىقاتى
        ✍️ ئەدەبىي تەرجىمە`
      }
    },
    {
      id: 'prose-literature',
      title: 'ناسىر (ھېكايە، رومان)',
      description: 'ناسىر ئەدەبىياتى — ھېكايە، رومان، ھېكايە ۋە باشقا ناسىرىي ژانرلارنى ئۆز ئىچىگە ئالىدۇ',
      icon: '📚',
      fullContent: {
        introduction: `ناسىر ئەدەبىياتى ئۇيغۇر ئەدەبىياتىنىڭ كەڭ دائىرىلىك ساھەسى بولۇپ، ھېكايە، رومان، پوۋېست، ئەسەر ۋە باشقا ناسىرىي ژانرلارنى ئۆز ئىچىگە ئالىدۇ. بۇ ژانرلار ئارقىلىق ئىجتىمائىي ھايات، تارىخىي ۋەقەلەر ۋە شەخسىي تەجرىبيلەر تەسۋىرلىنىدۇ.`,
        mainContent: [
          {
            title: 'رومان ژانىرى',
            content: `**روماننىڭ خاسلىقلىرى**
            • كەڭ ھەجىملىك ئەسەر
            • كۆپ شەخسلىك ۋە ۋەقەلىك
            • مۇرەككەپ قۇرۇلما ۋە تېما
            • ئىجتىمائىي ھاياتنىڭ تولۇق ئەكس ئەتتۈرۈلۈشى
            
            **ئۇيغۇر رومانچىلىقى**
            • زامانىۋى ئۇيغۇر رومانچىلىقى 20-ئەسىردە تەرەققىي قىلغان
            • تارىخىي رومان، ئىجتىمائىي رومان، سىياسىي رومان قاتارلىق تۈرلەر
            • زىيا سەمەدى، ئابدۇشۈكۈر قاتارلىق رومانچىلار`,
            examples: `مەشھۇر رومانلار:
            • "يولداشلار" (ئابدۇشۈكۈر)
            • "ئىز" (زىيا سەمەدى)
            • "قۇربانلىق بۇلبۇل" (تېيپ يەسىن)`,
            analysis: `رومان ئارقىلىق ئۇيغۇر خەلقىنىڭ تارىخىي تەجرىبىلىرى، ئىجتىمائىي ئۆزگىرىشلەر ۋە مەدەنىيەت قىممەتلىرى ئەكس ئەتتۈرۈلگەن. بۇ ئەسەرلەر ئوقۇرمەنلەرنىڭ مىللىي كىملىك ۋە تارىخىي شۇۇرنى يېتىلدۈرۈشكە خىزمەت قىلىدۇ.`
          },
          {
            title: 'ھېكايە ۋە پوۋېست',
            content: `**ھېكايە ژانىرى**
            • روماندىن قىسقا، ئەمما تولۇق ھېكايە
            • بىر ياكى بىر نەچچە ئاساسىي ۋەقە
            • چەكلىك سانىدىكى شەخسلەر
            • مەلۇم بىر تېمىغا يۆنىلىش
            
            **پوۋېست**
            • ھېكايە بىلەن رومان ئارىسىدىكى ژانر
            • روماندىن قىسقا، ھېكايەدىن ئۇزۇن
            • مۇرەككەپ قۇرۇلما ۋە تېما
            • كۆپرەك شەخس ۋە ۋەقەلەرنى ئۆز ئىچىگە ئالىدۇ`,
            examples: `مەشھۇر ھېكايىلەر:
            • "قەھرىتان تاغ" (زۇنۇن قادىر)
            • "ئۆلۈم ياخشى كۆرەرمۇ؟" (ئەخمەتجان ئۆسمان)
            
            مەشھۇر پوۋېستلار:
            • "سۇ يۈزىدىكى چىراق" (ئىسمائىل بىلقىز)
            • "ئاي يۈزى" (ھەلەت نازىم)`,
            analysis: `ھېكايە ۋە پوۋېستلار ئارقىلىق كۈندىلىك ھاياتتىكى كىشىلىك مۇناسىۋەتلەر، ئىجتىمائىي مەسىلىلەر ۋە شەخسىي تەجرىبيلەر تەسۋىرلىنىدۇ. بۇ ژانرلار ئوقۇرمەنلەرنىڭ قىسقا ۋاقىتتا مەلۇم بىر تېمىغا دىققەت قىلىشىغا ئىمكانىيەت يارىتىدۇ.`
          }
        ],
        keyConcepts: [
          { term: 'رومان', definition: 'كەڭ ھەجىملىك، مۇرەككەپ قۇرۇلمىلىق ۋە كۆپ شەخسلىك ناسىرىي ئەسەر' },
          { term: 'ھېكايە', definition: 'قىسقا، مەلۇم بىر تېمىغا يۆنىلگەن ناسىرىي ئەسەر' },
          { term: 'پوۋېست', definition: 'ھېكايە بىلەن رومان ئارىسىدىكى ئوتتۇرا ھەجىملىك ناسىرىي ژانر' },
          { term: 'قۇرۇلما', definition: 'ئەسەرنىڭ ۋەقەلەر تەرتىپى ۋە تەركىبى' },
          { term: 'تېما', definition: 'ئەسەرنىڭ ئاساسىي مەزمۇنى ۋە ئىپادىلەيدىغان ئاساسىي پىكىر' }
        ],
        applications: `ئەدەبىي ئىجادىيەت ۋە تەربىيە ساھەسىدىكى قوللىنىشلار:
        
        📚 ئەدەبىي ئىجادىيەت
        📚 تىل ئۆگىتىش
        📚 مەدەنىيەت تەتقىقاتى
        📚 ئىجتىمائىي تەنقىد
        📚 تارىخىي تەتقىقات`
      }
    },
    {
      id: 'famous-poets',
      title: 'مەشھۇر شائىرلار',
      description: 'نازۇگۇم، ئابدۇرېھىم ئۆتكۈر قاتارلىق ئۇيغۇر ئەدەبىياتىنىڭ مۇھىم شائىرلىرى',
      icon: '🌟',
      fullContent: {
        introduction: `ئۇيغۇر ئەدەبىياتى تارىخىدا نۇرغۇن مەشھۇر شائىرلار چىققان بولۇپ، ئۇلار ئۆز دەۋرىنىڭ ئەدەبىي مۇھىتى ۋە مەدەنىيەت قىممەتلىرىنى ئەسەرلىرىدە ئەكس ئەتتۈرگەن. بۇ شائىرلار ئۇيغۇر تىلى، مەدەنىيىتى ۋە مىللىي شۇۇرىنىڭ ساقلىنىشى ۋە تەرەققىياتىغا مۇھىم تۆھپە قوشقان.`,
        mainContent: [
          {
            title: 'نازۇگۇم (17-ئەسىر)',
            content: `**ھاياتى ۋە ئىجادىيەت دەۋرى**
            • 17-ئەسىردە ياشىغان مەشھۇر خوتەنلىك شائىرە
            • ئەرزۇ ۋە ھەسرىت شېئىرلىرى بىلەن تونۇلغان
            • ئۇيغۇر خەلق شېئىرىيىتىنىڭ كۆركەم ۋەكىلى
            
            **ئەدەبىي ئۇسلۇبى**
            • ساددا، تەسىرلىك تىل ئىشلىتىش
            • قەلبىي ھېسسىياتلارنى چوڭقۇر ئىپادىلەش
            • خەلق تىلى ۋە ئەنئەنىۋى شېئىرىيەت ئۇسۇللىرىنى قوللىنىش`,
            examples: `مەشھۇر شېئىرى "ئانا":
            "كۆك تاغلار بېشىدا قار بار،
            يېزىلار يېنىدا گۈل بار.
            بىزنىڭ يۇرتۇمدا ئەتەگەن,
            ئانىلىرىم بار، ئانا بار."
            
            "سەن ئۈچۈن" ناملىق شېئىرى:
            "سەن ئۈچۈن كۆڭلۈمدە گۈل ئېچىلدى,
            سەن ئۈچۈن قەلبىمدە چىراق يانىدۇ."`,
            analysis: `نازۇگۇمنىڭ شېئىرلىرى ئۇيغۇر ئاياللىرىنىڭ قەلبىي دۇنياسى، ئەرزۇ-ئارمانلىرى ۋە ھەسرىتلىرىنى ئىپادىلەيدۇ. ئۇنىڭ ئەسەرلىرى ئۇيغۇر خەلق شېئىرىيىتىنىڭ ئەڭ كۆركەم مىساللىرىدىن سانىلىدۇ.`
          },
          {
            title: 'ئابدۇرېھىم ئۆتكۈر (1923-1995)',
            content: `**ھاياتى ۋە ئىجادىيەت دەۋرى**
            • زامانىۋى ئۇيغۇر ئەدەبىياتىنىڭ ئەڭ مۇھىم ۋەكىللىرىنىڭ بىرى
            • شائىر، يازغۇچى، ئەدەبىياتشۇناس
            • "ئۇيغۇر" ژۇرنىلىنىڭ مۇئەللىپى
            
            **ئەدەبىي ئۇسلۇبى**
            • مىللىي شۇۇر ۋە تارىخىي مەزمۇنلارنى ئەسەرلىرىدە ئەكس ئەتتۈرۈش
            • زامانىۋى شېئىرىيەت تېخنىكىلىرىنى قوللىنىش
            • تىل ئىجادچانلىقى ۋە ئەدەبىي تەجرىبىلەر`,
            examples: `مەشھۇر شېئىرى "ئانا تۈپرۈكى":
            "ئانا تۈپرۈكىدە تۇغۇلغان بالا،
            قەلبىدە ساڭا بولغان مۇھەببەت قالا.
            
            ئانا تىلىدا سۆزلىگەن بالا،
            تىلىدا ساڭا بولغان ھېسسىيات قالا."
            
            "ئۇيغۇر" ناملىق شېئىرى:
            "ئۇيغۇر دېسەڭ، تارىختىن كەلگەن نام،
            ئۇيغۇر دېسەڭ، مەدەنىيەتتىن قالغان نام."`,
            analysis: `ئابدۇرېھىم ئۆتكۈرنىڭ ئەسەرلىرى ئۇيغۇر مىللىي كىملىكى، تارىخىي شۇۇر ۋە مەدەنىيەت قىممەتلىرىنى كۈچلۈك ئىپادىلەيدۇ. ئۇنىڭ شېئىرلىرى ئۇيغۇر خەلقىنىڭ روھىي دۇنياسىنى چوڭقۇر ئەكس ئەتتۈرۈپ، مىللىي بىرلىك ۋە غۇرۇرنى قوزغايدۇ.`
          }
        ],
        keyConcepts: [
          { term: 'خەلق شائىرى', definition: 'خەلق ئارىسىدا ياشاپ، خەلق تىلى ۋە ئۇسۇلىدا ئىجاد قىلغان شائىر' },
          { term: 'زامانىۋى شائىر', definition: 'زامانىۋى ئەدەبىي تېخنىكىلار ۋە ئۇسۇللارنى قوللىنىدىغان شائىر' },
          { term: 'مىللىي شۇۇر', definition: 'شائىر ئەسەرلىرىدە ئىپادىلەنگەن مىللىي كىملىك ۋە تارىخىي شۇۇر' },
          { term: 'ئەدەبىي مىراس', definition: 'شائىرلار قالدۇرغان ئەدەبىي ئەسەرلەر ۋە مەدەنىيەت قىممەتلىرى' },
          { term: 'تىل ئىجادچانلىقى', definition: 'شائىرلارنىڭ تىل ۋە ئىپادىلەش usullaridagi يېڭىلىقلىرى' }
        ],
        applications: `مەدەنىيەت ۋە مائارىپ ساھەسىدىكى قوللىنىشلار:
        
        🌟 ئەدەبىيات تەتقىقاتى
        🌟 مەدەنىيەت مىراسىنى ساقلاش
        🌟 تىل ئۆگىتىش
        🌟 مىللىي تەربىيە
        🌟 ئەدەبىي تەرجىمە`
      }
    },
    {
      id: 'literary-styles',
      title: 'ئەدەبىي ئۇسلۇب ۋە تىل ئېنىقلىقى',
      description: 'ئۇيغۇر ئەدەبىياتىدىكى ئۇسلۇب ۋە تىل ئىشلىتىش ئالاھىدىلىكلىرى',
      icon: '🖋️',
      fullContent: {
        introduction: `ئۇيغۇر ئەدەبىياتى تارىخىي جەرياندا نۇرغۇن ئۇسلۇب ۋە تىل ئىشلىتىش ئالاھىدىلىكلىرىنى ياراتقان. بۇ ئالاھىدىلىكلەر ئەدەبىي ئەسەرلەرنىڭ ئىپادىلىش كۈچى، تەسىرچانلىقى ۋە ئەدەبىي قىممىتىنى بەلگىلەيدۇ.`,
        mainContent: [
          {
            title: 'ئەدەبىي ئۇسلۇبلار',
            content: `**رېئالىستىك ئۇسلۇب**
            • ھاياتنى ھەقىقىي ھالەتتە ئەكس ئەتتۈرۈش
            • كۈندىلىك ھايات ۋە ئىجتىمائىي مەسىلىلەرنى تەسۋىرلەش
            • شەخسلەر ۋە ۋەقەلەرنى ھەقىقىي ھالەتتە سەلمەلەش
            
            **رومانتىك ئۇسلۇب**
            • ھېسسىيات ۋە خىيالغا ئەھمىيەت بېرىش
            • ئىدېئال ۋە ئەرزۇلارنى ئىپادىلەش
            • تەبىئەت ۋە كىشىلىك ھېسسىياتلارنى رومانتىك ئۇسۇلدا تەسۋىرلەش
            
            **سىمۋولىك ئۇسلۇب**
            • سىمۋول ۋە ئىشارەتلەر ئارقىلىق مەنىلەرنى ئىپادىلەش
            • ئەسەرلەرگە چوڭقۇر مەنى ۋە تەبىرەتلەرنى كىرگۈزۈش
            • ئوقۇرمەننىڭ ئويلىنىشىغا سەۋەب بولۇش`,
            examples: `رېئالىستىك ئۇسلۇب مىسالى:
            "ئۇيغۇر يېزىسىدىكى كۈندىلىك ھايات تەسۋىرى"
            
            رومانتىك ئۇسلۇب مىسالى:
            "سەپەرۋەرنىڭ يۇرت ھەسرىتى"
            
            سىمۋولىك ئۇسلۇب مىسالى:
            "قۇش سىمۋولى ئارقىلىق ئەركىنلىك تېمىسى"`,
            analysis: `ھەر بىر ئۇسلۇب ئۆزىگە خاس ئىپادىلەش كۈچى ۋە تەسىرچانلىقىغا ئىگە. مۇئەللىپلەر ئەسەر تېمىسى، مەزمۇنى ۋە مەقسىتىگە قاراپ مۇۋاپىق ئۇسلۇبني تاللايدۇ.`
          },
          {
            title: 'تىل ئېنىقلىقى ۋە ئىپادىلەش',
            content: `**تىل ساددىلىكى**
            • كەڭ خەلق قەۋمى تەرىپىدىن چۈشىنىلىدىغان تىل
            • مۇرەككەپ جۈملىلەردىن ساقلىنىش
            • تەبىئىي ۋە جانلىق تىل ئىشلىتىش
            
            **تىل گۈزەللىكى**
            • ئەدەبىي سەنئەتلەرنى مۇۋاپىق ئىشلىتىش
            • تىلنىڭ ئاھەڭگە ئىگە بولۇشى
            • سۆزلەرنىڭ تالانتلىق تەرتىپلىنىشى
            
            **تىل چوڭقۇرلۇقى**
            • ساددا تىل ئارقىلىق چوڭقۇر مەنىلەرنى ئىپادىلەش
            • كىنايە ۋە ئىشارەتلەر ئارقىلىق كۆپ قاتلاملىق مەنىلەرنى بەرمەك
            • ئوقۇرمەننىڭ ئويلىنىشىغا سەۋەب بولۇش`,
            examples: `تىل ساددىلىكى مىسالى:
            "كۈن چىقتى، مەن تۇرۇپ كەتتىم"
            
            تىل گۈزەللىكى مىسالى:
            "باهار كەلگەندە، تەبىئەت يېڭى كىيىم كىيىپ، گۈل-چېچەكلەر بىلەن بېزەلدى"
            
            تىل چوڭقۇرلۇقى مىسالى:
            "قەلبىمدە قىش كەلدى" (قايغۇ ۋە قاراڭغۇلۇقنى بىلدۈرىدۇ)`,
            analysis: `تىل ئېنىقلىقى ئەدەبىي ئەسەرنىڭ تەسىرچانلىقىنى بەلگىلەيدىغان مۇھىم ئامىل. ياخشى تىل ئىشلىتىش ئەسەرنىڭ ئوقۇرمەنلەر تەرىپىدىن چۈشىنىلىشى ۋە قەلبىدە قالىشىغا ياردەم بېرىدۇ.`
          }
        ],
        keyConcepts: [
          { term: 'رېئالىستىك ئۇسلۇب', definition: 'ھاياتنى ھەقىقىي ھالەتتە ئەكس ئەتتۈرىدىغان ئەدەبىي ئۇسلۇب' },
          { term: 'رومانتىك ئۇسلۇب', definition: 'ھېسسىيات ۋە خىيالغا ئەھمىيەت بېرىدىغان ئەدەبىي ئۇسلۇب' },
          { term: 'سىمۋولىك ئۇسلۇب', definition: 'سىمۋول ۋە ئىشارەتلەر ئارقىلىق مەنىلەرنى ئىپادىلەيدىغان ئۇسلۇب' },
          { term: 'تىل ساددىلىكى', definition: 'كەڭ قەۋم تەرىپىدىن چۈشىنىلىدىغان ساددا ۋە ئوچۇق تىل ئىشلىتىش' },
          { term: 'تىل گۈزەللىكى', definition: 'تىلنىڭ ئەدەبىي جەھەتتىن گۈزەل ۋە تەسىرلىك بولۇشى' }
        ],
        applications: `ئەدەبىي ئىجادىيەت ۋە تىل تەربىيەسى ساھەسىدىكى قوللىنىشلار:
        
        🖋️ ئەدەبىي ئىجادىيەت
        🖋️ تىل ئۆگىتىش
        🖋️ ئەدەبىي تەنقىد
        🖋️ تەرجىمە خىزمىتى
        🖋️ مەدەنىيەت ئالماشتۇرۇش`
      }
    },
    {
      id: 'drama-literature',
      title: 'دراما ئەدەبىياتى',
      description: 'تاماشا، كىنو سىنارىيىسى ۋە رادىئو ئويۇنلىرى قاتارلىق دراما ژانرلىرى',
      icon: '🎭',
      fullContent: {
        introduction: `ئۇيغۇر دراما ئەدەبىياتى كىنو، تىياتىر ۋە رادىئو ئەدەبىياتىنى ئۆز ئىچىگە ئالىدۇ. بۇ ژانرلار ئارقىلىق ھاياتتىكى ھەقىقىي ۋەقەلەر، كىشىلىك مۇناسىۋەتلەر ۋە ئىجتىمائىي مەسىلىلەر سەھنە ئارقىلىق ئەكس ئەتتۈرۈلۈشى مۇمكىن.`,
        mainContent: [
          {
            title: 'تىياتىر ئەدەبىياتى',
            content: `**تىياتىر ژانىرىنىڭ خاسلىقلىرى**
            • سەھنىلىك ئەسەر
            • شەخسلەرنىڭ سۆز ۋە ھەرىكەتلىرى ئارقىلىق ھېكايە قىلىش
            • ۋاقىت ۋە مەكان بىرلىكى
            • كۆرۈنەرلىك ۋە ئاڭلاشقا بولىدىغان ئېلېمېنتلار
            
            **ئۇيغۇر تىياتىر ئەدەبىياتى**
            • ئەنئەنىۋى ۋە زامانىۋى تىياتىرلار
            • تارىخىي، ئىجتىمائىي ۋە كۈندىلىك ھايات تېمىلىرى
            • تىل ۋە مەدەنىيەت ئالاھىدىلىكلىرىنى ئەكس ئەتتۈرۈش`,
            examples: `مەشھۇر تىياتىرلار:
            • "قەھرىتان تاغ" (زۇنۇن قادىر)
            • "گۈل ۋە نەۋبەت" (ئىبراهيم مۇتىئى)
            • "ئۆلۈم ياخشى كۆرەرمۇ؟" (ئەخمەتجان ئۆسمان)`,
            analysis: `تىياتىر ئەدەبىياتى ئوقۇرمەنلەرگە ھېكايىنى كۆرۈنەرلىك ۋە ئاڭلاشقا بولىدىغان شەكىلدە تەقدىم قىلىدۇ. بۇ ئوقۇرمەنلەرنىڭ ھېكايە بىلەن بىۋاسىتە ئالاقىلىشىشىغا ئىمكانىيەت يارىتىدۇ.`
          },
          {
            title: 'كىنو سىنارىيىسى',
            content: `**كىنو سىنارىيىسىنىڭ خاسلىقلىرى**
            • كۆرۈنەرلىك ھېكايە قىلىش
            • سەھنىلەر ۋە كادرلار ئارقىلىق ھېكايە قىلىش
            • دىئالوگ ۋە ھەرىكەتلەر ئارقىلىق شەخسلەرنى ئىپادىلەش
            • ۋىزۇئال ۋە ئاۋدىئو ئېلېمېنتلىرىنى ئىشلىتىش
            
            **ئۇيغۇر كىنو سىنارىيىسى**
            • ئۇيغۇر ھاياتى ۋە مەدەنىيىتىنى ئەكس ئەتتۈرۈش
            • تارىخىي ۋە ئىجتىمائىي تېمىلار
            • تىل ۋە مەدەنىيەت ئالاھىدىلىكلىرىنى ساقلاش`,
            examples: `مەشھۇر كىنو سىنارىيىلىرى:
            • "ئىز" (زىيا سەمەدى)
            • "يولداشلار" (ئابدۇشۈكۈر)
            • "قۇربانلىق بۇلبۇل" (تېيپ يەسىن)`,
            analysis: `كىنو سىنارىيىسى ھېكايىنى كۆرۈنەرلىك ۋە ئاڭلاشقا بولىدىغان شەكىلدە تەقدىم قىلىدۇ. بۇ ئوقۇرمەنلەرنىڭ ھېكايە بىلەن بىۋاسىتە ئالاقىلىشىشىغا ئىمكانىيەت يارىتىدۇ ۋە ھېكايىنىڭ تەسىرچانلىقىنى كۈچەيتىدۇ.`
          }
        ],
        keyConcepts: [
          { term: 'تىياتىر', definition: 'سەھنىدە ئىجرا قىلىنىدىغان دراما ئەسىرى' },
          { term: 'كىنو سىنارىيىسى', definition: 'كىنو ئۈچۈن يېزىلغان سەھنىلىك ئەسەر' },
          { term: 'سەھنى', definition: 'تىياتىر ياكى كىنودىكى بىر ۋەقە ياكى ھادىسە' },
          { term: 'دىئالوگ', definition: 'شەخسلەر ئارىسىدىكى سۆزلىشىش' },
          { term: 'كادر', definition: 'كىنودا بىر ۋاقىتتا كۆرۈلىدىغان كۆرۈنۈش' }
        ],
        applications: `تاماشا سەنئىتى ۋە كىنو سانائىتى ساھەسىدىكى قوللىنىشلار:
        
        🎭 تىياتىر ئىجادىيىتى
        🎭 كىنو سىنارىيىسى يېزىش
        🎭 رادىئو ئويۇنلىرى
        🎭 تەلەۋىزىيە پروگراممىلىرى
        🎭 مەدەنىيەت سانائىتى`
      }
    },
    {
      id: 'literary-criticism',
      title: 'ئەدەبىي تەنقىد',
      description: 'ئەدەبىي ئەسەرلەرنى تەھلىل قىلىش ۋە باھالاش ئۇسۇللىرى',
      icon: '💭',
      fullContent: {
        introduction: `ئەدەبىي تەنقىد ئەدەبىي ئەسەرلەرنى تەھلىل قىلىش، باھالاش ۋە چۈشەندۈرۈش ساھەسىدۇر. بۇ ساھە ئەدەبىي ئەسەرلەرنىڭ قىممىتى، تەسىرچانلىقى ۋە مەنىسىنى چۈشىنىشكە ياردەم بېرىدۇ.`,
        mainContent: [
          {
            title: 'تەنقىد ئۇسۇللىرى',
            content: `**فورمىالىستىك تەنقىد**
            • ئەسەرنىڭ فورمىسى ۋە تېخنىكىسىغا دىققەت قىلىش
            • تىل، ئۇسلۇب ۋە قۇرۇلما تەھلىلى
            • ئەسەرنىڭ ئىچكى قۇرۇلمىسىنى تەتقىق قىلىش
            
            **تارىخىي-مەدەنىي تەنقىد**
            • ئەسەرنى تارىخىي ۋە مەدەنىي مۇھىتتا چۈشىنىش
            • مۇئەللىپنىڭ ھاياتى ۋە دەۋرىنى ئويغا ئېلىش
            • ئەسەرنىڭ مەدەنىي ۋە ئىجتىمائىي مەزمۇنىنى تەھلىل قىلىش
            
            **پسىخولوگىيەلىك تەنقىد**
            • شەخسلەرنىڭ پسىخولوگىيەسىنى تەھلىل قىلىش
            • مۇئەللىپنىڭ روھىي دۇنياسىنى ئويغا ئېلىش
            • ئەسەردىكى روھىي تېمىلارنى تەتقىق قىلىش`,
            examples: `فورمىالىستىك تەنقىد مىسالى:
            "شېئىرنىڭ ۋەزنى ۋە قافىيە قۇرۇلمىسىنى تەھلىل قىلىش"
            
            تارىخىي-مەدەنىي تەنقىد مىسالى:
            "ئەسەرنىڭ يازىلغان دەۋرنىڭ ئىجتىمائىي شارائىتىدا چۈشىنىش"
            
            پسىخولوگىيەلىك تەنقىد مىسالى:
            "شەخسلەرنىڭ روھىي ئالەمى ۋە Motivations نى تەھلىل قىلىش"`,
            analysis: `ھەر بىر تەنقىد ئۇسۇلى ئەسەرنى تۈرلۈك پىكىرلەر ئاستىدا تەھلىل قىلىش imkaniyetini beredu. Bu esa eserning tolıq we çüşençliklikini anlaxlıkqa yardem beredu.`
          },
          {
            title: 'تەنقىد ئېلېمېنتلىرى',
            content: `**تېما تەھلىلى**
            • ئەسەرنىڭ ئاساسىي تېمىسىنى ئانىقلىش
            • تېمىنىڭ ئىپادىلىش ئۇسۇلىنى تەھلىل قىلىش
            • تېمىنىڭ ئوقۇرمەنگە قانداق تەسىر كۆرسەتكەنلىكىنى باھالاش
            
            **شەخس تەھلىلى**
            • شەخسلەرنىڭ خاراكتېرى ۋە تەرەققىياتىنى تەھلىل قىلىش
            • شەخسلەر ئارىسىدىكى مۇناسىۋەتلەرنى چۈشەندۈرۈش
            • شەخسلەرنىڭ ئەسەر تېمىسىغا قوشقان تۆھپىسىنى باھالاش
            
            **ئۇسلۇب تەھلىلى**
            • مۇئەللىپنىڭ تىل ئىشلىتىش ئۇسۇلىنى تەھلىل قىلىش
            • ئەدەبىي سەنئەتلەرنىڭ قوللىنىلىشىنى باھالاش
            • ئۇسلۇبنىڭ ئەسەرنىڭ تەسىرچانلىقىغا قوشقان تۆھپىسىنى ئانىقلىش`,
            examples: `تېما تەھلىلى مىسالى:
            "ئەسەردىكى مىللىي كىملىك تېمىسىنى تەھلىل قىلىش"
            
            شەخس تەھلىلى مىسالى:
            "ئاساسىي شەخسنىڭ خاراكتېر تەرەققىياتىنى تەھلىل قىلىش"
            
            ئۇسلۇب تەھلىلى مىسالى:
            "مۇئەللىپنىڭ تىل ئىشلىتىش ئالاھىدىلىكلىرىنى تەھلىل قىلىش"`,
            analysis: `تەنقىد ئېلېمېنتلىرى ئەسەرنى ھەر تەرەپلىمە تەھلىل قىلىش ئۈچۈن قوللايدۇ. بۇ ئوقۇرمەنلەرنىڭ ئەسەرنى چوڭقۇر ۋە تولۇق چۈشىنىشىغا ياردەم بېرىدۇ.`
          }
        ],
        keyConcepts: [
          { term: 'فورمىالىستىك تەنقىد', definition: 'ئەسەرنىڭ فورمىسى ۋە تېخنىكىسىغا دىققەت قىلىدىغان تەنقىد ئۇسۇلى' },
          { term: 'تارىخىي-مەدەنىي تەنقىد', definition: 'ئەسەرنى تارىخىي ۋە مەدەنىي مۇھىتتا چۈشىنىدىغان تەنقىد ئۇسۇلى' },
          { term: 'پسىخولوگىيەلىك تەنقىد', definition: 'شەخسلەرنىڭ پسىخولوگىيەسى ۋە روھىي دۇنياسىغا دىققەت قىلىدىغان تەنقىد' },
          { term: 'تېما تەھلىلى', definition: 'ئەسەرنىڭ ئاساسىي تېمىسىنى تەھلىل قىلىش' },
          { term: 'شەخس تەھلىلى', definition: 'ئەسەردىكى شەخسلەرنىڭ خاراكتېرى ۋە تەرەققىياتىنى تەھلىل قىلىش' }
        ],
                applications: `ئەدەبىيات تەتقىقاتى ۋە مائارىپ ساھەسىدىكى قوللىنىشلار:
        
        💭 ئەدەبىيات تەتقىقاتى
        💭 ئەدەبىي تەنقىد يېزىش
        💭 ئەدەبىيات دەرسلىكى
        💭 ئەدەبىي مۇسابىقە
        💭 مەدەنىيەت ئالماشتۇرۇش`
      }
    }
  ];

  const allTopics = [...defaultTopics, ...customTopics];

  // باقىقى ئوخشاش...
  const getTopics = () => {
    return Array.isArray(allTopics) ? allTopics : [];
  };

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(topicId);
  };

  const handleTopicComplete = (topicId) => {
    if (!completedTopics.includes(topicId)) {
      setCompletedTopics([...completedTopics, topicId]);
    }
    setSelectedTopic(null);
  };

  const handleAddTopic = (newTopic) => {
    setCustomTopics(prev => [...prev, newTopic]);
    setShowAddModal(false);
  };

  const handleEditTopic = (topicId) => {
    const topic = getTopics().find(t => t.id === topicId);
    if (topic) {
      setEditingTopic(topic);
      setShowAddModal(true);
    }
  };

  const handleUpdateTopic = (updatedTopic) => {
    setCustomTopics(prev => prev.map(topic => 
      topic.id === updatedTopic.id ? updatedTopic : topic
    ));
    setShowAddModal(false);
    setEditingTopic(null);
  };

  const handleDeleteTopic = (topicId) => {
    if (window.confirm('بۇ تەپنى راستىنلا يۇيۇشنى خالامسىز؟')) {
      setCustomTopics(prev => prev.filter(topic => topic.id !== topicId));
    }
  };

  const getCompletionPercentage = () => {
    const topics = getTopics();
    return topics.length > 0 ? Math.round((completedTopics.length / topics.length) * 100) : 0;
  };

  const renderContentWithDiagrams = (content) => {
    if (!content) return null;
    
    return content.split('\n').map((line, index) => {
      if (line.includes('**') && line.includes('**')) {
        const boldContent = line.match(/\*\*(.*?)\*\*/)?.[1] || '';
        return (
          <div key={index} className="font-bold text-amber-700 mt-3 mb-2">
            {boldContent}
          </div>
        );
      }
      return <div key={index} className="mb-1">{line}</div>;
    });
  };

  const topics = getTopics();

  return (
    <div className="space-y-6">
      {/* ئىلگىرىلەش يەكۈنلەش */}
      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold text-gray-800">ئىلگىرىلەش ھالىتى</h3>
          <span className="text-amber-600 font-bold">{getCompletionPercentage()}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-amber-600 to-orange-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${getCompletionPercentage()}%` }}
          ></div>
        </div>
      </div>

      {/* ئاساسىي ئەدەبىيات تەپلىرى */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold text-amber-800">ئەدەبىيات — رۇھىي دۇنيا</h3>
            <p className="text-gray-700 mt-2">
              ئۇيغۇر ئەدەبىياتى — مىللىي رۇھ، تارىخ، ھېسسىياتنىڭ ئېگىز كۆرۈنۈشى.
            </p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg hover:from-amber-700 hover:to-orange-600 shadow-md transition-all"
          >
            + يېڭى تەپ قوشۇش
          </button>
        </div>
        
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topics.map((topic) => (
            <div 
              key={topic.id}
              className={`bg-white p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                selectedTopic === topic.id ? 'border-amber-500 ring-2 ring-amber-200' : 
                completedTopics.includes(topic.id) ? 'border-amber-500' : 'border-gray-200'
              }`}
              onClick={() => handleTopicSelect(topic.id)}
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">{topic.icon || '📖'}</span>
                <div>
                  <h4 className="font-bold text-gray-800">{topic.title}</h4>
                  {completedTopics.includes(topic.id) && (
                    <span className="text-amber-500 text-sm">✓ تاماملاندى</span>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{topic.description}</p>
              
              <div className="space-y-1">
                {(topic.fullContent?.keyConcepts || []).slice(0, 3).map((concept, index) => (
                  <div key={index} className="flex items-center text-xs text-gray-500">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                    {concept.term}
                  </div>
                ))}
                {(topic.fullContent?.keyConcepts || []).length > 3 && (
                  <div className="text-xs text-amber-600">
                    + {(topic.fullContent?.keyConcepts || []).length - 3} تېخىمۇ كۆپ...
                  </div>
                )}
              </div>

              {/* بوتانلار گۇرۇپپىسى */}
              <div className="flex justify-between mt-3 pt-3 border-t border-gray-100">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditTopic(topic.id);
                  }}
                  className="text-xs text-blue-600 hover:text-blue-800 px-2 py-1 rounded hover:bg-blue-50"
                >
                  ئىدىت
                </button>
                {customTopics.some(t => t.id === topic.id) && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteTopic(topic.id);
                    }}
                    className="text-xs text-red-600 hover:text-red-800 px-2 py-1 rounded hover:bg-red-50"
                  >
                    يۇيۇش
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* تاللانغان تەپنىڭ تولۇق مەزمۇنى */}
      {selectedTopic && (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          {topics.filter(topic => topic.id === selectedTopic).map(topic => (
            <div key={topic.id}>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{topic.icon || '📖'}</span>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">{topic.title}</h4>
                    <p className="text-gray-600">{topic.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedTopic(null)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>
              </div>
              
              {/* كىرىش سۆز */}
              {topic.fullContent?.introduction && (
                <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
                  <h5 className="font-bold text-blue-800 mb-2">كىرىش سۆز</h5>
                  <p className="text-blue-700 whitespace-pre-line">
                    {topic.fullContent.introduction}
                  </p>
                </div>
              )}

              {/* ئاساسىي مەزمۇنلار */}
              <div className="space-y-8">
                {(topic.fullContent?.mainContent || []).map((section, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <h5 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h5>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* مەتنىي مەزمۇن */}
                      <div className="space-y-4">
                        <div className="text-gray-700 leading-relaxed">
                          {renderContentWithDiagrams(section.content)}
                        </div>
                        
                        {/* مىساللار */}
                        {section.examples && (
                          <div className="bg-amber-50 p-4 rounded border border-amber-200">
                            <div className="font-bold text-amber-800 mb-2">مىساللار:</div>
                            <div className="text-gray-700 whitespace-pre-line text-sm">
                              {section.examples}
                            </div>
                          </div>
                        )}
                        
                        {/* تەھلىل */}
                        {section.analysis && (
                          <div className="bg-purple-50 p-3 rounded border border-purple-200">
                            <div className="font-bold text-purple-800 mb-1">تەھلىل:</div>
                            <div className="text-gray-700 whitespace-pre-line text-sm">
                              {section.analysis}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* ئەدەبىي ئېلېمېنتلار */}
                      <div className="space-y-4">
                        {section.diagram && (
                          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
                            <div className="font-mono text-sm whitespace-pre leading-relaxed">
                              {section.diagram}
                            </div>
                          </div>
                        )}
                        
                        {section.diagrams && (
                          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
                            <div className="font-mono text-sm whitespace-pre leading-relaxed">
                              {section.diagrams}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ئاچقۇچلۇق سۆزلەر */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                  <h5 className="font-bold text-amber-800 mb-4">ئاچقۇچلۇق سۆزلەر (15%)</h5>
                  <div className="space-y-3">
                    {(topic.fullContent?.keyConcepts || []).map((concept, index) => (
                      <div key={index} className="bg-white p-3 rounded border border-amber-200">
                        <div className="font-bold text-amber-700 text-sm">{concept.term}</div>
                        <div className="text-gray-600 text-xs mt-1">{concept.definition}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ئىشلىتىش ساھەلىرى */}
                {topic.fullContent?.applications && (
                  <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                    <h5 className="font-bold text-blue-800 mb-4">ئىشلىتىش ساھەلىرى (5%)</h5>
                    <div className="text-blue-700 whitespace-pre-line leading-relaxed">
                      {topic.fullContent.applications}
                    </div>
                  </div>
                )}
              </div>

              {/* ھەرىكەت بوتانلىرى */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button 
                  onClick={() => setSelectedTopic(null)}
                  className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  ئارقا
                </button>
                <div className="space-x-3">
                  <button 
                    onClick={() => handleEditTopic(topic.id)}
                    className="px-6 py-2 text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50"
                  >
                    تەپنى ئىدىت قىلىش
                  </button>
                  <button 
                    onClick={() => handleTopicComplete(topic.id)}
                    className="px-8 py-2 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg hover:from-amber-700 hover:to-orange-600 shadow-md transition-all"
                  >
                    تاماملاش
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* تەپ قوشۇش/ئىدىت مودالى */}
      <AddTopicModal
        isOpen={showAddModal}
        onClose={() => {
          setShowAddModal(false);
          setEditingTopic(null);
        }}
        onSave={editingTopic ? handleUpdateTopic : handleAddTopic}
        editTopic={editingTopic}
      />

      {/* تېست باشلاش بوتانى */}
      <div className="text-center">
        <button className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg hover:from-amber-700 hover:to-orange-600 shadow-md transition-all">
          ئەدەبىيات تېستىنى باشلاش
        </button>
        <p className="text-gray-500 text-sm mt-2">6 سۇئال • 10 دەقىقە</p>
      </div>
    </div>
  );
};

export default LiteratureModule;