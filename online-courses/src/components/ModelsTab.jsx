import React from 'react';
import { Brain, Sparkles, Key, Send, RotateCcw } from 'lucide-react';

const ModelsTab = ({ 
  availableModels, 
  selectedModels, 
  setSelectedModels, 
  modelsInput, 
  setModelsInput, 
  modelsOutput, 
  setModelsOutput, 
  loading, 
  handleModelQuery, 
  apiKeys, 
  setApiKeys 
}) => {
  // باشلاش/تازىلاش
  const handleClear = () => {
    setModelsInput('');
    setModelsOutput([]);
  };

  // مودېلنى تاللاش/چىقىرىش
  const toggleModel = (modelId) => {
    if (selectedModels.includes(modelId)) {
      setSelectedModels(selectedModels.filter(id => id !== modelId));
    } else {
      setSelectedModels([...selectedModels, modelId]);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 transition-all">
      {/* باشلىق */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg text-white">
          <Brain className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">AI Models Comparison</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Select one or more models to query and compare responses
          </p>
        </div>
      </div>

      {/* 🔑 API كۇنۇپكىلار */}
      <div className="mb-8 p-5 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-amber-900/20 dark:to-yellow-900/10 rounded-xl border border-yellow-200 dark:border-amber-800/50">
        <div className="flex items-center gap-2 mb-3">
          <Key className="w-5 h-5 text-yellow-700 dark:text-amber-400" />
          <h4 className="font-bold text-yellow-800 dark:text-amber-300">API Keys Setup</h4>
        </div>
        <p className="text-xs text-yellow-700 dark:text-amber-300 mb-4">
          Enter your API keys to enable real model queries. Keys are stored locally only.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            { key: 'openai', label: 'OpenAI' },
            { key: 'google', label: 'Google' },
            { key: 'anthropic', label: 'Anthropic' },
            { key: 'perplexity', label: 'Perplexity' },
            { key: 'xai', label: 'xAI (Grok)' }
          ].map(({ key, label }) => (
            <div key={key} className="relative">
              <input
                type="password"
                placeholder={`${label} API Key`}
                value={apiKeys[key] || ''}
                onChange={(e) => setApiKeys(prev => ({ ...prev, [key]: e.target.value }))}
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Key className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🤖 مودېل تاللاش */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-600" />
          Select Models to Compare
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {availableModels.map((model) => (
            <button
              key={model.id}
              onClick={() => toggleModel(model.id)}
              className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-200 group ${
                selectedModels.includes(model.id)
                  ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/30 shadow-md ring-2 ring-teal-300/30'
                  : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700/50 hover:border-teal-400 dark:hover:border-teal-500'
              }`}
            >
              <div className="text-2xl mb-2">{model.icon || '🤖'}</div>
              <div className="text-xs font-bold text-gray-800 dark:text-white text-center">
                {model.name}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {model.provider}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ✍️ سوئال كىرگۈزۈش */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-gray-800 dark:text-white">
            Your Prompt
          </label>
          <button
            onClick={handleClear}
            disabled={!modelsInput && modelsOutput.length === 0}
            className="text-xs flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-red-500 disabled:opacity-30"
          >
            <RotateCcw className="w-3 h-3" />
            Clear
          </button>
        </div>
        <textarea
          value={modelsInput}
          onChange={(e) => setModelsInput(e.target.value)}
          placeholder="e.g., Translate 'Hello, how are you?' into Uyghur..."
          className="w-full min-h-[120px] p-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none text-sm leading-relaxed"
          onKeyDown={(e) => {
            if (e.ctrlKey && e.key === 'Enter') {
              handleModelQuery();
            }
          }}
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs">Ctrl</kbd> + 
          <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs">Enter</kbd> 
          &nbsp;to submit
        </p>
      </div>

      {/* ▶️ سوئال يوللاش */}
      <button
        onClick={handleModelQuery}
        disabled={loading || selectedModels.length === 0 || !modelsInput.trim()}
        className={`w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all ${
          loading || selectedModels.length === 0 || !modelsInput.trim()
            ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
            : 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
        }`}
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Processing...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Query {selectedModels.length} Model{selectedModels.length !== 1 ? 's' : ''}
          </>
        )}
      </button>

      {/* 💬 جاۋابلار */}
      {modelsOutput && modelsOutput.length > 0 && (
        <div className="mt-8">
          <h3 className="font-bold text-gray-800 dark:text-white mb-4 text-lg flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            Model Responses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modelsOutput.map((result, index) => {
              const model = availableModels.find(m => m.id === result.modelId);
              if (!model) return null;
              return (
                <div
                  key={index}
                  className="p-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{model.icon || '🤖'}</span>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white">{model.name}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{model.provider}</p>
                    </div>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 text-sm whitespace-pre-wrap leading-relaxed">
                    {result.response || <span className="text-gray-400 italic">No response</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelsTab;