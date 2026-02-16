// src/components/learn-modules/neural-network-components/NNTraining.jsx
import React, { useState, useEffect } from 'react';
import { Activity, LineChart, TrendingDown, Target, Zap, Cpu, Play, Pause, RotateCcw } from 'lucide-react';

const NNTraining = ({ onComplete }) => {
  const [trainingStatus, setTrainingStatus] = useState('stopped');
  const [epoch, setEpoch] = useState(0);
  const [loss, setLoss] = useState(0.8);
  const [accuracy, setAccuracy] = useState(0.2);
  const [learningRate, setLearningRate] = useState(0.01);
  const [gradientFlow, setGradientFlow] = useState([]);

  const trainingSteps = [
    { step: 1, name: 'ئالدى يۆنىلىش', description: 'كىرگۈزۈشتەن چىقىرىشقىچە' },
    { step: 2, name: 'خاتالىق ھېسابلاش', description: 'ئورۇنلۇق ۋە ھەقىقىي ئوتتۇرىسى' },
    { step: 3, name: 'كەينىگە تارقىلىش', description: 'خاتالىقتىن ئېغىرلىققىچە' },
    { step: 4, name: 'ئېغىرلىق يېڭىلاش', description: 'گرادىيېنت چۈشۈش' },
  ];

  useEffect(() => {
    let interval;
    
    if (trainingStatus === 'training') {
      interval = setInterval(() => {
        setEpoch(prev => prev + 1);
        setLoss(prev => Math.max(0.05, prev * 0.95));
        setAccuracy(prev => Math.min(0.99, prev + 0.05));
        
        // گرادىيېنت ئېقىمى
        setGradientFlow(prev => {
          const newFlow = [...prev, Math.random() * 0.1 - 0.05];
          return newFlow.slice(-20);
        });
      }, 500);
    }
    
    return () => clearInterval(interval);
  }, [trainingStatus]);

  const startTraining = () => {
    setTrainingStatus('training');
  };

  const pauseTraining = () => {
    setTrainingStatus('paused');
  };

  const resetTraining = () => {
    setTrainingStatus('stopped');
    setEpoch(0);
    setLoss(0.8);
    setAccuracy(0.2);
    setGradientFlow([]);
  };

  return (
    <div className="space-y-8">
      {/* ئۆگىنىش كونترول پانېلى */}
      <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-2xl border border-purple-100">
        <h5 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Activity className="w-6 h-6 text-purple-500" />
          نېرۋا تورى ئۆگىنىش كونترولى
        </h5>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* كونترول كونۇپكىلىرى */}
          <div className="col-span-full md:col-span-2 lg:col-span-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={startTraining}
                disabled={trainingStatus === 'training'}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
                  trainingStatus === 'training' 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                <Play className="w-4 h-4" />
                ئۆگىتىشنى باشلاش
              </button>
              
              <button
                onClick={pauseTraining}
                disabled={trainingStatus !== 'training'}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
                  trainingStatus !== 'training' 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                }`}
              >
                <Pause className="w-4 h-4" />
                توختىتىش
              </button>
              
              <button
                onClick={resetTraining}
                className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg"
              >
                <RotateCcw className="w-4 h-4" />
                قايتا باشلاش
              </button>
            </div>
          </div>
          
          {/* ئۆگىتىش پارامېترلىرى */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">ئۆگىنىش سۈرئىتى</span>
                <span className="text-sm font-semibold text-purple-600">{learningRate.toFixed(4)}</span>
              </div>
              <input
                type="range"
                min="0.0001"
                max="0.1"
                step="0.0001"
                value={learningRate}
                onChange={(e) => setLearningRate(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">ئەۋر سانى</span>
                <span className="text-sm font-semibold text-purple-600">{epoch}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-violet-500 h-2 rounded-full"
                  style={{ width: `${Math.min(100, (epoch / 100) * 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* ئۆگىتىش نەتىجىلىرى */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="w-4 h-4 text-red-500" />
                <span className="font-semibold text-gray-800">Loss</span>
              </div>
              <div className="text-2xl font-bold text-red-600">{loss.toFixed(4)}</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-green-500" />
                <span className="font-semibold text-gray-800">Accuracy</span>
              </div>
              <div className="text-2xl font-bold text-green-600">{(accuracy * 100).toFixed(1)}%</div>
            </div>
          </div>
        </div>
      </div>

      {/* ئۆگىنىش قەدەملىرى */}
      <div>
        <h5 className="font-bold text-gray-800 mb-4">ئۆگىنىش قەدەملىرى:</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trainingSteps.map((step) => (
            <div key={step.step} className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-violet-100 text-purple-600 rounded-full flex items-center justify-center mb-4 font-bold">
                {step.step}
              </div>
              <div className="font-semibold text-gray-800 mb-2">{step.name}</div>
              <div className="text-sm text-gray-600">{step.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* گرادىيېنت كۆرسىتىش */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h5 className="font-bold text-gray-800 mb-4">گرادىيېنت ئېقىمى:</h5>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-48 bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <LineChart className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium text-gray-700">گرادىيېنت مىقدارى</span>
              </div>
              <span className="text-xs text-gray-500">ئەۋر: {epoch}</span>
            </div>
            
            <div className="relative h-32">
              {gradientFlow.length > 0 && (
                <svg className="w-full h-full" viewBox={`0 0 ${gradientFlow.length * 10} 100`}>
                  <path
                    d={`M 0,50 ${gradientFlow.map((val, i) => `L ${i * 10},${50 - val * 200}`).join(' ')}`}
                    fill="none"
                    stroke="url(#gradientGradient)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient id="gradientGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-green-500" />
                <h6 className="font-semibold text-gray-800">گرادىيېنت چۈشۈش</h6>
              </div>
              <div className="text-sm text-gray-600">
                ئېغىرلىقلارنى گرادىيېنت يۆنىلىشى بويىچە يېڭىلاپ، loss نى تۆۋەنلىتىش
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 text-blue-500" />
                <h6 className="font-semibold text-gray-800">ئۆگىنىش سۈرئىتى</h6>
              </div>
              <div className="text-sm text-gray-600">
                پارامېتر يېڭىلاش چوڭقۇرلىقىنى بەلگىلەيدۇ. تېخىمۇ چوڭ بولسا تېز ئۆگىنىدۇ
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* مىسال كود */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h5 className="font-bold text-gray-800 mb-4">كەينىگە تارقىلىش مىسالى:</h5>
        <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
          <pre className="text-sm overflow-x-auto">
{`import torch
import torch.nn as nn
import torch.optim as optim

# مودېل قۇرۇش
class SimpleNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(10, 5)
        self.fc2 = nn.Linear(5, 2)
        self.relu = nn.ReLU()
    
    def forward(self, x):
        x = self.relu(self.fc1(x))
        x = self.fc2(x)
        return x

# مودېل ۋە ئۆگىنىش
model = SimpleNN()
criterion = nn.CrossEntropyLoss()
optimizer = optim.SGD(model.parameters(), lr=${learningRate})

# ئۆگىتىش
for epoch in range(${epoch}):
    # ئالدى يۆنىلىش
    outputs = model(inputs)
    loss = criterion(outputs, labels)
    
    # كەينىگە تارقىلىش
    optimizer.zero_grad()
    loss.backward()
    
    # پارامېتر يېڭىلاش
    optimizer.step()
    
    if epoch % 10 == 0:
        print(f'Epoch [{epoch}/100], Loss: {loss.item():.4f}')

print(f"ئاخىرقى Loss: {loss.item():.4f}")
print(f"ئۆگىنىش سۈرئىتى: ${learningRate}")`}
          </pre>
        </div>
      </div>

      {/* تاماملا */}
      <div className="flex justify-end">
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl hover:from-purple-600 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Activity className="w-5 h-5" />
          <span className="font-semibold">ئۆگىتىش بۆلۈمىنى تاماملا</span>
        </button>
      </div>
    </div>
  );
};

export default NNTraining;