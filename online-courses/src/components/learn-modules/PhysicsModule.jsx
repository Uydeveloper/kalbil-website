// src/components/learn-modules/PhysicsModule.jsx
import React, { useState, useEffect } from 'react';

// تەپ قوشۇش مودالى (ئوخشاش، ئەمما قىسقارتىپ كۆرسەتەيلى)
const AddTopicModal = ({ isOpen, onClose, onSave, editTopic = null }) => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    icon: '📚',
    introduction: '',
    mainContent: [{ title: '', content: '', formula: '', diagram: '' }],
    keyConcepts: [{ term: '', definition: '' }],
    applications: ''
  });

  useEffect(() => {
    if (editTopic) {
      setFormData({
        id: editTopic.id || `topic-${Date.now()}`,
        title: editTopic.title || '',
        description: editTopic.description || '',
        icon: editTopic.icon || '📚',
        introduction: editTopic.fullContent?.introduction || '',
        mainContent: editTopic.fullContent?.mainContent || [{ title: '', content: '', formula: '', diagram: '' }],
        keyConcepts: editTopic.fullContent?.keyConcepts || [{ term: '', definition: '' }],
        applications: editTopic.fullContent?.applications || ''
      });
    } else {
      setFormData({
        id: `topic-${Date.now()}`,
        title: '',
        description: '',
        icon: '📚',
        introduction: '',
        mainContent: [{ title: '', content: '', formula: '', diagram: '' }],
        keyConcepts: [{ term: '', definition: '' }],
        applications: ''
      });
    }
  }, [editTopic, isOpen]);

  const getMainContent = () => {
    return Array.isArray(formData.mainContent) ? formData.mainContent : [{ title: '', content: '', formula: '', diagram: '' }];
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
      newData.mainContent = [...mainContent, { title: '', content: '', formula: '', diagram: '' }];
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

        {/* Form content remains the same as before */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ماۋزۇ نامى *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('', 0, 'title', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="ماۋزۇ نامىنى كىرگۈزۈڭ"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">چۈشەندۈرۈش *</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('', 0, 'description', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              rows="2"
              placeholder="ماۋزۇ چۈشەندۈرۈشىنى كىرگۈزۈڭ"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">سىمۋول</label>
            <select
              value={formData.icon}
              onChange={(e) => handleInputChange('', 0, 'icon', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="📚">📚 ئومۇمىي</option>
              <option value="⚖️">⚖️ نېۋتۇن قانۇنلىرى</option>
              <option value="🏃">🏃 كۈچ ۋە ھەرىكەت</option>
              <option value="⚡">⚡ ئېلېكتىر ۋە مېگنىت</option>
              <option value="🔍">🔍 ئوپتىكا</option>
              <option value="🔬">🔬 تەجىربە</option>
              <option value="📐">📐 فورمۇلا</option>
              <option value="🌡️">🌡️ تېرمودىنامىكا</option>
              <option value="🌀">🌀 دولقۇنلار</option>
              <option value="🔊">🔊 ئاۋاز</option>
              <option value="🧲">🧲 مېگنىت</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">كىرىش سۆزى</label>
            <textarea
              value={formData.introduction}
              onChange={(e) => handleInputChange('', 0, 'introduction', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              rows="3"
              placeholder="ماۋزۇغا كىرىش سۆزىنى كىرگۈزۈڭ"
            />
          </div>
        </div>

        {/* باقىسى ئوخشاش... */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-bold text-gray-800">ئاساسىي مەزمۇن بۆلەكلىرى</h4>
            <button
              onClick={() => addSection('mainContent')}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
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
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                  placeholder="بۆلەك نامى"
                />
                <textarea
                  value={section.content || ''}
                  onChange={(e) => handleInputChange('mainContent', index, 'content', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                  rows="4"
                  placeholder="بۆلەك مەزمۇنى"
                />
                <input
                  type="text"
                  value={section.formula || ''}
                  onChange={(e) => handleInputChange('mainContent', index, 'formula', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                  placeholder="فورمۇلا (ئىختىيارىي)"
                />
                <textarea
                  value={section.diagram || ''}
                  onChange={(e) => handleInputChange('mainContent', index, 'diagram', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 font-mono text-sm"
                  rows="3"
                  placeholder="دىئاگرامما (ئىختىيارىي)"
                />
              </div>
            </div>
          ))}
        </div>

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

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">ئىشلىتىش ساھەلىرى</label>
          <textarea
            value={formData.applications}
            onChange={(e) => handleInputChange('', 0, 'applications', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            rows="3"
            placeholder="ئىشلىتىش ساھەلىرىنى كىرگۈزۈڭ"
          />
        </div>

        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            بىكار قىلىش
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            {editTopic ? 'ساقلاش' : 'قوشۇش'}
          </button>
        </div>
      </div>
    </div>
  );
};

// ئاساسىي فىزىكا مودۇلى
const PhysicsModule = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [completedTopics, setCompletedTopics] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingTopic, setEditingTopic] = useState(null);
  const [customTopics, setCustomTopics] = useState([]);

  // تولۇق فىزىكا تەپلىرى
  const defaultTopics = [
    {
      id: 'newton-laws',
      title: 'نېۋتۇن قانۇنلىرى',
      description: 'نېۋتۇن قانۇنلىرى — كلاسسىك مىخانىكىنىڭ ئاساسى بولۇپ، كۈچ ۋە ھەرىكەت ئارىسىدىكى مۇناسىۋەتنى تەسۋىرلەيدۇ',
      icon: '⚖️',
      fullContent: {
        introduction: `نېۋتۇن قانۇنلىرى - سىئىر ئىساك نېۋتۇن تەرىپىدىن 1687-يىلى "تەبىئەت پەلسەپىسىنىڭ ماتېماتىكىلىق پرىنسىپلىرى" كىتابىدا ئوتتۇرىغا قويۇلغان ئۈچ قانۇندىن تەركىب تاپقان بولۇپ، كلاسسىك مىخانىكىنىڭ ئاساسىنى شەكىللەندۈرگەن.`,
        mainContent: [
          {
            title: 'بىرىنچى قانۇن: ئىنېرتسىيە قانۇنى',
            content: `**"ھەر بىر جىسىم ئۆزىنىڭ تىنچ ھالەتتىكى ياكى توغرا سىزىق بويىچە تەڭشەك ھەرىكەتلىك ھالىتىدە قالماقچى بولىدۇ، مەگەر ئۇنىڭغا سىرتتىن كۈچ تەسىر قىلىپ ئۇنىڭ ھالىتىنى ئۆزگەرتۈشكە مەجبۇرلىمىغان بولسا."**

            چۈشەندۈرۈش:
            • تىنچ ھالەتتىكى جىسىم: ھەرىكەت قىلمايدۇ
            • ھەرىكەتلىك ھالەتتىكى جىسىم: ئوخشاش سۈرئەت ۋە يۆنىلىشتا ھەرىكەت قىلىدۇ
            • كۈچ تەسىر قىلغاندىلا ھەرىكەت ئۆزگىرىدۇ
            
            [ئىنېرتسىيە مىسالى]
            ┌─────────────┐
            │     ●       │ ← تىنچ ھالەتتىكى جىسىم
            │   جىسىم     │
            └─────────────┘
            
            ┌─────────────┐
            │     ● →     │ ← ھەرىكەتلىك ھالەتتىكى جىسىم
            │   جىسىم     │
            └─────────────┘`,
            formula: 'ΣF = 0 → a = 0'
          },
          {
            title: 'ئىككىنچى قانۇن: كۈچ قانۇنى',
            content: `**"جىسىمنىڭ تىزلىنىشى ئۇنىڭغا تەسىر قىلغان كۈچكە توغرا پروپورتسىيونال بولۇپ، كۈچنىڭ يۆنىلىشى بويىچە بولىدۇ."**

            فورمۇلا: F = ma
            
            مەنىسى:
            • F: كۈچ (نىۇتون)
            • m: ماسسا (كىلوگرام)
            • a: تىزلىنىش (m/s²)
            
            [كۈچ-ماسس-تىزلىنىش مۇناسىۋىتى]
            كۈچ (F) → ┌─────────┐ → تىزلىنىش (a)
                      │ ماسسا (m) │
                      └─────────┘`,
            formula: 'F = m × a'
          },
          {
            title: 'ئۈچىنچى قانۇن: ھەرىكەت-رىئاكسىيە قانۇنى',
            content: `**"ھەر قانداق ھەرىكەتكە تەڭ مىقداردا ۋە قارمۇ-قارشى يۆنىلىشتە ريئاكسىيە بولىدۇ."**

            مەنىسى:
            • ھەر بىر كۈچكە تەڭ ۋە قارشى كۈچ بار
            • ئىككى كۈچ ئوخشاش ماددىغا تەسىر قىلمايدۇ
            
            [ھەرىكەت-رىئاكسىيە مىسالى]
            ┌─────────┐    ┌─────────┐
            │   A     │ ←→ │   B     │
            │  كۈچ    │    │  كۈچ    │
            └─────────┘    └─────────┘
            F(A→B) = -F(B→A)`,
            formula: 'F₁₂ = -F₂₁'
          }
        ],
        keyConcepts: [
          { term: 'ئىنېرتسىيە', definition: 'جىسىمنىڭ ھەرىكەت ھالىتىنى ساقلاپ قېلىش خاسلىقى' },
          { term: 'كۈچ (F)', definition: 'جىسىمنىڭ ھەرىكەت ھالىتىنى ئۆزگەرتەلىدىغان تەسىر، بىرلىكى: نىۇتون (N)' },
          { term: 'ماسسا (m)', definition: 'جىسىمنىڭ ئىنېرتسىيە مىقدارىنى ئىپادىلەيدىغان سكالېر مىقدار، بىرلىكى: كىلوگرام (kg)' },
          { term: 'تىزلىنىش (a)', definition: 'سۈرئەتنىڭ ۋاقىت بويىچە ئۆزگىرىش نىسبىتى، بىرلىكى: m/s²' },
          { term: 'ھەرىكەت-رىئاكسىيە', definition: 'ھەر بىر ھەرىكەتكە تەڭ ۋە قارشى تەسىرنىڭ مەۋجۇت بولۇشى' }
        ],
        applications: `كۈندىلىك تۇرمۇشتىكى قوللىنىشلار:
        
        ⚖️ ماشىنا ھەرىكىتى
        ⚖️ قايتۇرۇش ھەرىكىتى
        ⚖️ يۈرۈش ۋە يۈگۈرۈش
        ⚖️ راكېتا ھەرىكىتى
        ⚖️ بىنانىلارنىڭ قۇرۇلۇشى`
      }
    },
    {
      id: 'force-motion',
      title: 'كۈچ ۋە ھەرىكەت',
      description: 'كۈچ ۋە ھەرىكەت — جىسىملارنىڭ ھەرىكەت سەۋەبلىرى ۋە ئۇلارنىڭ تەسىرلىرى',
      icon: '🏃',
      fullContent: {
        introduction: `كۈچ ۋە ھەرىكەت - فىزىكىنىڭ ئاساسىي تەتقىقات دېيارى بولۇپ، جىسىملارنىڭ قانداق ھەرىكەت قىلىشى ۋە بۇ ھەرىكەتلەرگە قانداق كۈچلەر سەۋەب بولىدىغانلىقىنى ئىزدىنىدۇ.`,
        mainContent: [
          {
            title: 'كۈچ تۈرلىرى',
            content: `**1. ئېغىرلىق كۈچى (Gravity)**
            • يەر شارى تەرىپىدىن جىسىمغا تەسىر قىلىدىغان كۈچ
            • فورمۇلا: F_g = m × g
            • g = 9.8 m/s² (يەر شارىدىكى تىزلىنىش)
            
            **2. نورمال كۈچ (Normal Force)**
            • جىسىم بىلەن يەكە تەسىر قىلغان ستىھىك تەرىپىدىن بولغان كۈچ
            • ھەمىشە يەكەگە پېرپېندىكۇلار
            
            **3. سۈرتىلىش كۈچى (Friction)**
            • ئىككى يۈز ئارىسىدىكى نىسبىي ھەرىكەتكە قارشى كۈچ
            • فورمۇلا: F_f = μ × F_N
            • μ: سۈرتىلىش كوئېففىتسېنتى`,
            formulas: `ئېغىرلىق كۈچى: F_g = m × g
سۈرتىلىش كۈچى: F_f = μ × F_N
نورمال كۈچ: F_N = m × g × cos(θ)`
          },
          {
            title: 'ھەرىكەت تۈرلىرى',
            content: `**1. توغرا سىزىقلىق ھەرىكەت**
            • بىر يۆنىلىشتىكى ھەرىكەت
            • تىزلىنىش مۇقىم
            • فورمۇلا: x = x₀ + v₀t + ½at²
            
            **2. ئەگرى سىزىقلىق ھەرىكەت**
            • يۆنىلىشى ئۆزگىرىدىغان ھەرىكەت
            • مەسىلەن: ئەتراپلىق ھەرىكەت
            
            **3. قۇتقۇزۇش ھەرىكىتى**
            • ئوڭۇش بۇلۇڭى بىلەن ئېتىلغان جىسىمنىڭ ھەرىكىتى
            • ئوڭۇش ۋە تىك ھەرىكەتلەرنىڭ بىرىكمىسى`,
            formulas: `توغرا سىزىقلىق ھەرىكەت:
x = x₀ + v₀t + ½at²
v = v₀ + at
v² = v₀² + 2a(x - x₀)

قۇتقۇزۇش ھەرىكىتى:
x = v₀cos(θ)t
y = v₀sin(θ)t - ½gt²`
          }
        ],
        keyConcepts: [
          { term: 'ئېغىرلىق كۈچى', definition: 'يەر شارى تەرىپىدىن جىسىمغا تەسىر قىلىدىغان جەذبىلىش كۈچى' },
          { term: 'سۈرتىلىش كۈچى', definition: 'ئىككى يۈز ئارىسىدىكى نىسبىي ھەرىكەتكە قارشى تۇرىدىغان كۈچ' },
          { term: 'كىنىتىك ئېنېرگىيە', definition: 'جىسىمنىڭ ھەرىكەتى سەۋەبىدىن بولغان ئېنېرگىيە' },
          { term: 'پوتېنسىيال ئېنېرگىيە', definition: 'جىسىمنىڭ ئورنى ياكى ھالىتى سەۋەبىدىن بولغان ئېنېرگىيە' },
          { term: 'خىزمەت', definition: 'كۈچ تەسىرى ئاستىدا ئېنېرگىيە ئالماشتۇرۇش' }
        ],
        applications: `كۈندىلىك تۇرمۇشتىكى مىساللار:
        
        🏃 ماشىنا ھەرىكىتى
        🏃 قۇتقۇزۇش ھەرىكىتى (توب قايتۇرۇش)
        🏃 ئېسكىلىتور ۋە لىفت
        🏃 ئۇچقۇچ ۋە راكېتا
        🏃 ئىسپورت ھەرىكەتلىرى`
      }
    },
    {
      id: 'electricity-magnetism',
      title: 'ئېلېكتىر ۋە مېگنىت',
      description: 'ئېلېكتىر ۋە مېگنىت — ئېلېكتىر يۈك ۋە مېگنىت مەيدانلىرىنىڭ خاراكتېرى ۋە ئۇلارنىڭ ئۆز-ئارا مۇناسىۋىتى',
      icon: '⚡',
      fullContent: {
        introduction: `ئېلېكتىر ۋە مېگنىت - ئېلېكتىر يۈكلەرنىڭ ھەرىكىتى ۋە مېگنىت مەيدانلىرىنىڭ خاراكتېرىنى ئىزدىنىدىغان فىزىكا ساھەسى بولۇپ، زامانىۋى تېخنىكىنىڭ ئاساسىنى شەكىللەندۈرگەن.`,
        mainContent: [
          {
            title: 'ئېلېكتىر يۈك ۋە كۈچ',
            content: `**ئېلېكتىر يۈك (Electric Charge)**
            • ئېلېكتىر مەيدانىنى ھاسىل قىلىدىغان ئاساسىي خاسلىق
            • تۈرلىرى: مۇسبەت (+) ۋە مەنپىي (-)
            • بىرلىكى: كۇلوم (C)
            
            **كۇلوم قانۇنى (Coulomb's Law)**
            • ئىككى ئېلېكتىر يۈك ئارىسىدىكى كۈچ
            • فورمۇلا: F = k × (q₁q₂)/r²
            • k = 9×10⁹ N·m²/C²`,
            formulas: `كۇلوم قانۇنى: F = k × (q₁ × q₂)/r²
k = 9 × 10⁹ N·m²/C²
ئېلېكتىر مەيدان: E = F/q`
          },
          {
            title: 'ئېلېكتىر مەيدانى',
            content: `**ئېلېكتىر مەيدانى (Electric Field)**
            • ئېلېكتىر يۈككە كۈچ تەسىر قىلىدىغان مەيدان
            • فورمۇلا: E = F/q
            • بىرلىكى: N/C
            
            **مەيدان سىزىقلىرى**
            • مۇسبەت يۈكتىن مەنپىي يۈككە قاراپ يۆنىلىدۇ
            • مەيدان سىزىقلىرى بىر-بىرىنى كېسىپ ئۆتمەيدۇ`,
            diagrams: `ئىككى مۇسبەت يۈك:
              →││←
             →│││←
            ●─────●
             ←│││→
              ←││→
              
ئىككى مەنپىي يۈك:
              ││
             │││
            ●─────●
             │││
              ││`
          }
        ],
        keyConcepts: [
          { term: 'ئېلېكتىر يۈك', definition: 'ئېلېكتىر مەيدانىنى ھاسىل قىلىدىغان ئاساسىي خاسلىق' },
          { term: 'كۇلوم قانۇنى', definition: 'ئىككى ئېلېكتىر يۈك ئارىسىدىكى كۈچنى تەسۋىرلەيدىغان قانۇن' },
          { term: 'ئېلېكتىر مەيدانى', definition: 'ئېلېكتىر يۈككە كۈچ تەسىر قىلىدىغان مەيدان' },
          { term: 'مېگنىت مەيدانى', definition: 'مېگنىت يۈك ياكى ھەرىكەتلىك ئېلېكتىر يۈككە كۈچ تەسىر قىلىدىغان مەيدان' },
          { term: 'ئوڭ قول قانۇنى', definition: 'مېگنىت كۈچىنىڭ يۆنىلىشىنى بەلگىلەيدىغان قائىدە' }
        ],
        applications: `ئەمەلىي قوللىنىش ساھەلىرى:
        
        ⚡ ئېلېكتىر دولقۇنى
        ⚡ موتور ۋە گېنېراتور
        ⚡ ترانسفورماتور
        ⚡ MRI ئاپپاراتلىرى
        ⚡ كۆرۈنەرلىك ئېلېكتىر`
      }
    },
    {
      id: 'optics',
      title: 'ئوپتىكا (نۇر ئىلمى)',
      description: 'ئوپتىكا — نۇرنىڭ خاراكتېرى، ھەرىكىتى ۋە ماددا بىلەن ئۆز-ئارا تەسىرىنى ئىزدىنىدۇ',
      icon: '🔍',
      fullContent: {
        introduction: `ئوپتىكا - نۇرنىڭ خاراكتېرى، ھەرىكىتى ۋە ماددا بىلەن ئۆز-ئارا تەسىرىنى ئىزدىنىدىغان فىزىكا ساھەسى بولۇپ، گېئومېترىيەلىك ئوپتىكا ۋە فيزىكا ئوپتىكىسى دەپ ئىككىگە بۆلۈنىدۇ.`,
        mainContent: [
          {
            title: 'نۇرنىڭ خاراكتېرى',
            content: `**نۇرنىڭ تەبىئىتى**
            • نۇر بىر ۋاقىتتا دولقۇن ۋە بөلەكچە خاراكتېرگە ئىگە
            • ئېنېرگىيەنىڭ بىر شەكلى
            • بوشلۇقتا 300,000 km/s سۈرئەت بىلەن تارقىلىدۇ
            
            **نۇرنىڭ تارقىلىشى**
            • توغرا سىزىق بويىچە تارقىلىدۇ
            • بىر-بىرىدىن مۇستەقىل
            • سۇپەرپوزىتسىيە پرىنسىپى`,
            properties: `نۇرنىڭ ئاساسىي خاسلىقلىرى:
            • توغرا سىزىقلىق تارقىلىش
            • ئەكس ئېتىش
            • سىندىرىش
            • تارقىلىش
            • قۇتىلاش`
          },
          {
            title: 'ئەكس ئېتىش ۋە سىندىرىش',
            content: `**ئەكس ئېتىش قانۇنى (Reflection)**
            • كېلىش بۇلۇڭى ئەكس بۇلۇڭىغا تەڭ
            • θ₁ = θ₂
            
            **سىندىرىش قانۇنى (Refraction)**
            • سىنېل قانۇنى: n₁sin(θ₁) = n₂sin(θ₂)
            • n: سىندىرىش كوئېففىتسېنتى`,
            formulas: `ئەكس ئېتىش: θ₁ = θ₂
سىنېل قانۇنى: n₁ × sin(θ₁) = n₂ × sin(θ₂)
سىندىرىش كوئېففىتسېنتى: n = c/v`
          }
        ],
        keyConcepts: [
          { term: 'ئەكس ئېتىش', definition: 'نۇرنىڭ يۈزگە ئۇرۇپ قايتىشى' },
          { term: 'سىندىرىش', definition: 'نۇرنىڭ بىر مۇھىتتىن يەنە بىر مۇھىتكا ئۆتكەندە يۆنىلىشىنىڭ ئۆزگىرىشى' },
          { term: 'سىندىرىش كوئېففىتسېنتى', definition: 'نۇرنىڭ بوشلۇقتىكى سۈرئىتى بىلەن مۇھىتتىكى سۈرئىتىنىڭ نىسبىتى' },
          { term: 'فوكۇس ئارىلىقى', definition: 'لېنزا بىلەن فوكۇس نۇقتىسى ئارىسىدىكى ئارىلىق' },
          { term: 'سىنېل قانۇنى', definition: 'سىندىرىش بۇلۇڭى بىلەن كېلىش بۇلۇڭى ئارىسىدىكى مۇناسىۋەتنى تەسۋىرلەيدىغان قانۇن' }
        ],
        applications: `ئەمەلىي قوللىنىشلار:
        
        🔍 مىكروسكوپ
        🔍 تېلېسكوپ
        🔍 كۆزەيلىك
        🔍 لازېر
        🔍 فىبېر ئوپتىكا`
      }
    },
    {
      id: 'thermodynamics',
      title: 'تېرمودىنامىكا',
      description: 'تېرمودىنامىكا — ئىسسىقلىق، خىزمەت ۋە ئېنېرگىيە ئالماشتۇرۇشنى ئىزدىنىدۇ',
      icon: '🌡️',
      fullContent: {
        introduction: `تېرمودىنامىكا - ئىسسىقلىق، خىزمەت ۋە ئېنېرگىيە ئالماشتۇرۇشنى ئىزدىنىدىغان فىزىكا ساھەسى بولۇپ، ئېنېرگىيەنىڭ تارقىلىشى ۋە ئۆزگىرىشىنى تەسۋىرلەيدۇ.`,
        mainContent: [
          {
            title: 'تېرمودىنامىكىنىڭ بىرىنچى قانۇنى',
            content: `**ئېنېرگىيە ساقلىنىش قانۇنى**
            • ئېنېرگىيە يوقىتىلمايدۇ ۋە يوقىتىلمايدۇ، پەقەت شەكىلىنى ئۆزگەرتەلەيدۇ
            • فورمۇلا: ΔU = Q - W
            
            مەنىسى:
            • ΔU: ئىچكى ئېنېرگىيە ئۆزگىرىشى
            • Q: سىستېمىغا قوشۇلغان ئىسسىقلىق
            • W: سىستېمە تەرىپىدىن قىلىنغان خىزمەت`,
            formula: 'ΔU = Q - W'
          },
          {
            title: 'تېرمودىنامىكىنىڭ ئىككىنچى قانۇنى',
            content: `**ئېنتروپىيە قانۇنى**
            • ئېنتروپىيە ھەرۋاقىت ئۆسىدۇ ياكى مۇقىم قالىدۇ
            • ئىسسىقلىق ئۆزىدىن سوقۇق ماددىغا ئۆتمەيدۇ
            • تەبىئىي جەريانلار ئېنتروپىيەنى ئۆستۈرىدۇ`,
            formula: 'ΔS ≥ 0'
          }
        ],
        keyConcepts: [
          { term: 'ئىسسىقلىق', definition: 'تېمپېراتۇرا پەرقى سەۋەبىدىن ئېنېرگىيە ئالماشتۇرۇش' },
          { term: 'خىزمەت', definition: 'كۈچ تەسىرى ئاستىدا ئېنېرگىيە ئالماشتۇرۇش' },
          { term: 'ئىچكى ئېنېرگىيە', definition: 'سىستېمىنىڭ ئىچكى قىسمىدىكى بارلىق ئېنېرگىيە' },
          { term: 'ئېنتروپىيە', definition: 'سىستېمىنىڭ تەرتىپسىزلىك دەرىجىسى' },
          { term: 'تېمپېراتۇرا', definition: 'ماددىنىڭ ئىسسىقلىق ھالىتىنى ئىپادىلەيدىغان مىقدار' }
        ],
        applications: `ئەمەلىي قوللىنىش ساھەلىرى:
        
        🌡️ ئىسسىقلىق ماتورلىرى
        🌡️ مۇزلاتقۇچ ۋە كوندىتسىيونېر
        🌡️ ئىسسىقلىق ئالماشتۇرغۇچ
        🌡️ ئىسسىقلىق ئېلېكتىر ئىستانسىلىرى
        🌡️ كىمىۋى رېئاكسىيەلەر`
      }
    },
    {
      id: 'waves-sound',
      title: 'دولقۇنلار ۋە ئاۋاز',
      description: 'دولقۇنلار ۋە ئاۋاز — مېخانىكىلىق دولقۇنلارنىڭ خاراكتېرى ۋە ئۇلارنىڭ تارقىلىشى',
      icon: '🌀',
      fullContent: {
        introduction: `دولقۇنلار ۋە ئاۋاز - ماددا ئارقىلىق تارقىلىدىغان مېخانىكىلىق دولقۇنلارنى ئىزدىنىدىغان فىزىكا ساھەسى بولۇپ، ئاۋاز دولقۇنلىرى ۋە ئۇلارنىڭ خاسلىقلىرىنى تەتقىق قىلىدۇ.`,
        mainContent: [
          {
            title: 'دولقۇن خاراكتېرى',
            content: `**دولقۇن پارامېترلىرى**
            • دەۋرىيىتى (T): بىر تولۇق دولقۇن ۋاقتى
            • چاستوتىسى (f): ۋاقىت بىرلىكىدىكى دولقۇن سانى
            • دولقۇن ئۇزۇنلۇقى (λ): ئىككى چوڭقۇر ئارىلىقى
            • ئامپلىتۇدسى (A): دولقۇننىڭ ئەڭ چوڭ يۆتكىلىشى
            
            **دولقۇن تەڭلىمىسى**
            • v = f × λ
            • v: دولقۇن سۈرئىتى
            • f: چاستوتا
            • λ: دولقۇن ئۇزۇنلۇقى`,
            formulas: `دولقۇن سۈرئىتى: v = f × λ
چاستوتا: f = 1/T
دولقۇن ئۇزۇنلۇقى: λ = v/f`
          },
          {
            title: 'ئاۋاز دولقۇنلىرى',
            content: `**ئاۋاز خاراكتېرى**
            • مېخانىكىلىق دولقۇن
            • ماددا ئارقىلىق تارقىلىدۇ
            • ئاۋاز سۈرئىتى: 343 m/s (ھاۋادا)
            
            **ئاۋاز خاسلىقلىرى**
            • قايناقلىق: چاستوتىسىغا باغلىق
            • كۈچلۈكلۈكى: ئامپلىتۇدسىغا باغلىق
            • تىمبىر: دولقۇن شەكلىگە باغلىق`,
            diagrams: `ئاۋاز دولقۇنى:
            ↗↘↗↘↗↘
           ↗    ↘    ↗
          ↗        ↘        ↗
         →            →            →
        ↙        ↗        ↙
       ↙    ↗    ↙
      ↙↗↙↗↙↗`
          }
        ],
        keyConcepts: [
          { term: 'دەۋرىيىتى', definition: 'بىر تولۇق دولقۇن ۋاقتى' },
          { term: 'چاستوتا', definition: 'ۋاقىت بىرلىكىدىكى دولقۇن سانى' },
          { term: 'دولقۇن ئۇزۇنلۇقى', definition: 'ئىككى چوڭقۇر ئارىلىقى' },
          { term: 'ئامپلىتۇدا', definition: 'دولقۇننىڭ ئەڭ چوڭ يۆتكىلىشى' },
          { term: 'قايناقلىق', definition: 'ئاۋازنىڭ يۇقىرى-تۆۋەنلىكىنى بەلگىلەيدىغان خاسلىق' }
        ],
        applications: `ئەمەلىي قوللىنىش ساھەلىرى:
        
        🌀 مۇزىكا ئەسۋابلارى
        🌀 ئاۋاز تېخنىكىسى
        🌀 ئۇلتراساۋۇت
        🌀 زىلزىلە تەدبىرلىرى
        🌀 رادىار سىستېمىلىرى`
      }
    },
    {
      id: 'modern-physics',
      title: 'زامانىۋى فىزىكا',
      description: 'زامانىۋى فىزىكا — نىسبىيەت نەزەرىيەسى، كىۋانىت مىخانىكىسى ۋە ئاتوم فىزىكىسى',
      icon: '🔬',
      fullContent: {
        introduction: `زامانىۋى فىزىكا - 20-ئەسىردە ئوتتۇرىغا چىققان فىزىكا نەزەرىيەلىرىنى ئۆز ئىچىگە ئالىدۇ. بۇ نەزەرىيەلەر كلاسسىك فىزىكا چەكلىمىلىرىدىن چىقىپ، مىكرو ۋە ماكرو دۇنيادىكى ھادىسىلەرنى تەسۋىرلەيدۇ.`,
        mainContent: [
          {
            title: 'نىسبىيەت نەزەرىيەسى',
            content: `**ئالاھىدە نىسبىيەت نەزەرىيەسى**
            • ئېينشتېين تەرىپىدىن ئوتتۇرىغا قويۇلغان
            • يورۇقلۇق سۈرئىتى ھەممە جايدا ۋە ھەممە كۆزەتكۈچىگە نىسبەتەن ئوخشاش
            • ۋاقىت كېڭىيىشى: ھەرىكەتلىك سىستېمىدا ۋاقىت ئاستا ئۆتىدۇ
            
            **ئومۇمىي نىسبىيەت نەزەرىيەسى**
            • گراۋىتاتسىيەنى بوشلۇق-زامان ئەگرىلىكى سۈپىتىدە چۈشەندۈرىدۇ
            • گراۋىتاتسىيونىڭ دولقۇن شەكلىدە تارقىلىشى`,
            formulas: `ئېنېرگىيە-ماسسا مۇناسىۋىتى: E = mc²
ۋاقىت كېڭىيىشى: Δt = Δt₀/√(1-v²/c²)`
          },
          {
            title: 'كىۋانىت مىخانىكىسى',
            content: `**كىۋانىت نەزەرىيەسى**
            • ماددا ۋە ئېنېرگىيەنىڭ بىرلىكتە ئىپادىلىنىشى
            • تۆلەتمۇتلۇق پەرقى
            • ئېنېرگىيە سەۋىيەلىرى
            
            **ئاساسىي ئۇقۇملار**
            • قوش يېرىق تەجىربىسى
            • ئالاھىدە ھالەت (Superposition)
            • كىۋانىت چىقرمىشش (Quantum Entanglement)`,
            diagrams: `كىۋانىت بىت (Qubit):
               │
               ● 0 ھالىتى
              ╱ ╲
             ╱   ╲
            ●─────● 1 ھالىتى
            ئالاھىدە ھالەت`
          }
        ],
        keyConcepts: [
          { term: 'نىسبىيەت نەزەرىيەسى', definition: 'ئېينشتېين تەرىپىدىن ئوتتۇرىغا قويۇلغان، ۋاقىت ۋە بوشلۇقنىڭ نىسبىيلىكىنى چۈشەندۈرىدىغان نەزەرىيە' },
          { term: 'كىۋانىت مىخانىكىسى', definition: 'ئاتوم ۋە ئاتوم ئاستى بөلەكچىلىرىنىڭ ھەرىكىتىنى تەسۋىرلەيدىغان نەزەرىيە' },
          { term: 'ئاتوم فىزىكىسى', definition: 'ئاتوم نۇۋىسى ۋە ئېلېمېنتار بөلەكچىلەرنى ئىزدىنىدىغان ساھە' },
          { term: 'يادرو فىزىكىسى', definition: 'ئاتوم نۇۋىسىنىڭ قۇرۇلمىسى ۋە ھەرىكىتىنى ئىزدىنىدىغان ساھە' },
          { term: 'كۆپ ئۆلچەملىك نەزەرىيە', definition: 'بارلىق ئاساسىي كۈچلەرنى بىرلەشتۈرۈشنى مەقسەت قىلغان نەزەرىيە' }
        ],
        applications: `ئەمەلىي قوللىنىش ساھەلىرى:
        
        🔬 يادرو ئېنېرگىيەسى
        🔬 لازېر تېخنىكىسى
        🔬 كىۋانىت كومپيۇتېر
        🔬 MRI ئاپپاراتلىرى
        🔬 GPS سىستېمىلىرى`
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
          <div key={index} className="font-bold text-green-700 mt-3 mb-2">
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
          <span className="text-green-600 font-bold">{getCompletionPercentage()}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-green-600 to-emerald-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${getCompletionPercentage()}%` }}
          ></div>
        </div>
      </div>

      {/* ئاساسىي فىزىكا تەپلىرى */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold text-green-800">فىزىكا — تەبىئەت قانۇنى</h3>
            <p className="text-gray-700 mt-2">
              فىزىكا — كۈچ، ھەرىكەت، ئېنېرگىيە ۋە زامان-بوشلۇقنىڭ قانۇنىيىتى.
            </p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg hover:from-green-700 hover:to-emerald-600 shadow-md transition-all"
          >
            + يېڭى تەپ قوشۇش
          </button>
        </div>
        
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topics.map((topic) => (
            <div 
              key={topic.id}
              className={`bg-white p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                selectedTopic === topic.id ? 'border-green-500 ring-2 ring-green-200' : 
                completedTopics.includes(topic.id) ? 'border-green-500' : 'border-gray-200'
              }`}
              onClick={() => handleTopicSelect(topic.id)}
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">{topic.icon || '📚'}</span>
                <div>
                  <h4 className="font-bold text-gray-800">{topic.title}</h4>
                  {completedTopics.includes(topic.id) && (
                    <span className="text-green-500 text-sm">✓ تاماملاندى</span>
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
                  <div className="text-xs text-green-600">
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
                  <span className="text-3xl mr-4">{topic.icon || '📚'}</span>
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
                        
                        {/* فورمۇلا */}
                        {section.formula && (
                          <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-center text-lg">
                            {section.formula}
                          </div>
                        )}
                        
                        {/* كۆپ فورمۇلالار */}
                        {section.formulas && (
                          <div className="bg-green-50 p-4 rounded border border-green-200">
                            <div className="font-mono text-sm whitespace-pre-line">
                              {section.formulas}
                            </div>
                          </div>
                        )}
                        
                        {/* خاسلىقلار */}
                        {section.properties && (
                          <div className="bg-purple-50 p-3 rounded border border-purple-200">
                            <div className="text-gray-700 whitespace-pre-line text-sm">
                              {section.properties}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* دىئاگرامما ۋە رەسىملەر */}
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
                <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                  <h5 className="font-bold text-green-800 mb-4">ئاچقۇچلۇق سۆزلەر (15%)</h5>
                  <div className="space-y-3">
                    {(topic.fullContent?.keyConcepts || []).map((concept, index) => (
                      <div key={index} className="bg-white p-3 rounded border border-green-200">
                        <div className="font-bold text-green-700 text-sm">{concept.term}</div>
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
                    className="px-8 py-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg hover:from-green-700 hover:to-emerald-600 shadow-md transition-all"
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
        <button className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg hover:from-green-700 hover:to-emerald-600 shadow-md transition-all">
          فىزىكا تېستىنى باشلاش
        </button>
        <p className="text-gray-500 text-sm mt-2">10 سۇئال • 15 دەقىقە</p>
      </div>
    </div>
  );
};

export default PhysicsModule;