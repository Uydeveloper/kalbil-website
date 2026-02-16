// src/components/learn-modules/ml-components/MLUnsupervised.jsx
import React, { useState } from 'react';
import { PieChart, Database, Target, BarChart } from 'lucide-react';

const MLUnsupervised = ({ onComplete }) => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('kmeans');

  const algorithms = [
    { 
      id: 'kmeans', 
      name: 'K-مېڭىز', 
      description: 'سانلىق مەلۇماتنى گۇرۇپپىلاشتۇرۇش',
      type: 'گۇرۇپپىلاشتۇرۇش',
      useCase: 'كۇستۇمر ئۆلچىمى، رەسىم تەھلىلى'
    },
    { 
      id: 'pca', 
      name: 'ئاساسىي كومپونېنت تەھلىلى', 
      description: 'سانلىق مەلۇماتنى ساددەلاشتۇرۇش',
      type: 'ساددەلاشتۇرۇش',
      useCase: 'سۈرەت سىقىش، ئالاھىدە ئۆلچەم'
    },
    { 
      id: 'dbscan', 
      name: 'DBSCAN', 
      description: 'شكىلسىز گۇرۇپپىلاشتۇرۇش',
      type: 'گۇرۇپپىلاشتۇرۇش',
      useCase: 'ئانومالىيە بايقاش، شەكىل تەھلىلى'
    },
    { 
      id: 'hierarchical', 
      name: 'قاتلاملىق گۇرۇپپىلاشتۇرۇش', 
      description: 'درېجىلىك گۇرۇپپىلاشتۇرۇش',
      type: 'گۇرۇپپىلاشتۇرۇش',
      useCase: 'جەمەت شەجەرىسى، تۈر سىستېمىسى'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-100">
        <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <PieChart className="w-5 h-5 text-purple-500" />
          نازارەتسىز ئۆگىنىش ئالگورىزىملىرى
        </h5>
        <p className="text-gray-700">
          باھالمىغان سانلىق مەلۇماتلارنىڭ قۇرۇلمىسى ۋە مۇناسىۋىتىنى بايقاش
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="font-bold text-gray-800 mb-4">ئالگورىزىملار:</h5>
          <div className="space-y-3">
            {algorithms.map((algo) => (
              <button
                key={algo.id}
                onClick={() => setSelectedAlgorithm(algo.id)}
                className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                  selectedAlgorithm === algo.id 
                    ? 'bg-purple-50 border-purple-300 border-2' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">{algo.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{algo.description}</div>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {algo.type}
                      </span>
                      <span className="text-xs text-gray-500">{algo.useCase}</span>
                    </div>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${selectedAlgorithm === algo.id ? 'bg-purple-500' : 'bg-gray-300'}`} />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h5 className="font-bold text-gray-800 mb-4">
            {algorithms.find(a => a.id === selectedAlgorithm)?.name} مىسالى
          </h5>
          
          <div className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4">
            <pre className="text-sm overflow-x-auto">
{`from sklearn.cluster import ${selectedAlgorithm === 'kmeans' ? 'KMeans' :
                                  selectedAlgorithm === 'dbscan' ? 'DBSCAN' :
                                  selectedAlgorithm === 'hierarchical' ? 'AgglomerativeClustering' :
                                  'PCA'}
from sklearn import datasets
import matplotlib.pyplot as plt

# سانلىق مەلۇمات يۈكلەش
X, _ = datasets.make_blobs(n_samples=300, centers=4, random_state=42)

# مودېل قۇرۇش
model = ${selectedAlgorithm === 'kmeans' ? 'KMeans(n_clusters=4, random_state=42)' :
               selectedAlgorithm === 'dbscan' ? 'DBSCAN(eps=0.5, min_samples=5)' :
               selectedAlgorithm === 'hierarchical' ? 'AgglomerativeClustering(n_clusters=4)' :
               'PCA(n_components=2)'}

${selectedAlgorithm === 'pca' ? '# ساددەلاشتۇرۇش' : '# گۇرۇپپىلاشتۇرۇش'}
${selectedAlgorithm === 'pca' ? 'X_transformed = model.fit_transform(X)' : 'labels = model.fit_predict(X)'}

# نەتىجىلەر
${selectedAlgorithm === 'pca' ? 
'print(f"ئىزدىنىش: {model.explained_variance_ratio_}")' :
'print(f"گۇرۇپپىلار سانى: {len(set(labels))}")'}

# كۆرسىتىش
plt.figure(figsize=(8, 6))
${selectedAlgorithm === 'pca' ? 
'plt.scatter(X_transformed[:, 0], X_transformed[:, 1], alpha=0.6)' :
'plt.scatter(X[:, 0], X[:, 1], c=labels, cmap="viridis", alpha=0.6)'}
plt.title("${algorithms.find(a => a.id === selectedAlgorithm)?.name} نەتىجىسى")
plt.show()`}
            </pre>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="font-bold text-purple-600 text-lg">4</div>
              <div className="text-xs text-gray-600">گۇرۇپپا سانى</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="font-bold text-purple-600 text-lg">300</div>
              <div className="text-xs text-gray-600">سانلىق مەلۇمات سانى</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="font-bold text-purple-600 text-lg">95%</div>
              <div className="text-xs text-gray-600">ئىزدىنىش</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          <span className="font-semibold">{algorithms.length}</span> ئالگورىزىمنى تونۇشتۇرۇلدى
        </div>
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all duration-300"
        >
          <PieChart className="w-5 h-5" />
          نازارەتسىز ئۆگىنىشنى تاماملا
        </button>
      </div>
    </div>
  );
};

export default MLUnsupervised;