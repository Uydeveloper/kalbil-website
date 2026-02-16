// src/components/learn-modules/ml-components/MLDeepLearning.jsx
import React from 'react';
import { Brain, Layers, Network, Cpu, Zap, Activity } from 'lucide-react';

const MLDeepLearning = ({ onComplete }) => {
  const networks = [
    { name: 'CNN', description: 'رەسىم تەھلىلى', icon: Layers, color: 'from-blue-500 to-cyan-500' },
    { name: 'RNN', description: 'ۋاقىت قاتارى', icon: Activity, color: 'from-green-500 to-emerald-500' },
    { name: 'GAN', description: 'سۈنئىي رەسىم', icon: Network, color: 'from-purple-500 to-violet-500' },
    { name: 'Transformer', description: 'تىل بىر تەرەپ قىلىش', icon: Brain, color: 'from-red-500 to-pink-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
        <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Brain className="w-5 h-5 text-green-500" />
          چوڭقۇر ئۆگىنىش نېرۋا تورلىرى
        </h5>
        <div className="grid grid-cols-5 gap-4">
          {['كىرگۈزۈش', 'ئىلمىكىلىك', 'يوشۇرۇن', 'ئاكتىۋاتسىيە', 'چىقىرىش'].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                {index + 1}
              </div>
              <div className="text-xs text-gray-700">{step}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {networks.map((net, index) => (
          <div key={index} className={`bg-gradient-to-br ${net.color} text-white rounded-xl p-6`}>
            <div className="flex flex-col items-center text-center">
              <net.icon className="w-8 h-8 mb-3" />
              <div className="font-bold text-lg">{net.name}</div>
              <div className="text-sm opacity-90 mt-1">{net.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h5 className="font-bold text-gray-800 mb-4">CNN (كونڤولىۇتسىيە نېرۋا تورى) مىسالى:</h5>
          <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`import tensorflow as tf
from tensorflow.keras import layers, models

# CNN مودېلى قۇرۇش
model = models.Sequential([
    # كونڤولىۇتسىيە قاتلامى
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    layers.MaxPooling2D((2, 2)),
    
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    
    layers.Conv2D(64, (3, 3), activation='relu'),
    
    # تولۇق باغلانغان قاتلام
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dense(10, activation='softmax')  # 10 تۈر
])

# مودېلنى قۇرۇش
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# مودېل ئۇچۇرى
model.summary()

# مودېلنى تەربىيەلەش
history = model.fit(
    train_images, train_labels,
    epochs=10,
    validation_data=(test_images, test_labels)
)`}
            </pre>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h5 className="font-bold text-gray-800 mb-4">مودېل ئىنچىكەلىكى:</h5>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">تەربىيە ئىنچىكە</span>
                <span className="text-sm font-semibold text-green-600">98.7%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '98.7%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">ئىمتىھان ئىنچىكە</span>
                <span className="text-sm font-semibold text-blue-600">96.3%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '96.3%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">ئۆگىنىش سۈرئىتى</span>
                <span className="text-sm font-semibold text-purple-600">0.001</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-100">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-yellow-500" />
              <div>
                <div className="font-semibold text-gray-800">GPU ئىشلىتىش</div>
                <div className="text-sm text-gray-600">چوڭقۇر ئۆگىنىش GPU نىڭ ياردىمى بىلەن تېزلىشىدۇ</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
        >
          <Brain className="w-5 h-5" />
          چوڭقۇر ئۆگىنىشنى تاماملا
        </button>
      </div>
    </div>
  );
};

export default MLDeepLearning;