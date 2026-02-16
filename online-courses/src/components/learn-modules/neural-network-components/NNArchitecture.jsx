// src/components/learn-modules/neural-network-components/NNArchitecture.jsx
import React, { useState, useEffect } from 'react';
import { Layers, Network, Cpu, Zap, Target, BarChart3, ChevronRight } from 'lucide-react';

const NNArchitecture = ({ onComplete }) => {
  const [selectedLayer, setSelectedLayer] = useState('input');
  const [networkSize, setNetworkSize] = useState({ input: 3, hidden: 4, output: 2 });
  const [animationProgress, setAnimationProgress] = useState(0);

  const layerTypes = [
    { 
      id: 'input', 
      name: 'كىرگۈزۈش قاتلامى', 
      neurons: networkSize.input,
      color: 'from-blue-500 to-cyan-500',
      description: 'سانلىق مەلۇماتنى قوبۇل قىلىدۇ',
      icon: Target
    },
    { 
      id: 'hidden', 
      name: 'يوشۇرۇن قاتلام', 
      neurons: networkSize.hidden,
      color: 'from-green-500 to-emerald-500',
      description: 'سانلىق مەلۇماتنى بىر تەرەپ قىلىدۇ',
      icon: Layers
    },
    { 
      id: 'output', 
      name: 'چىقىرىش قاتلامى', 
      neurons: networkSize.output,
      color: 'from-purple-500 to-violet-500',
      description: 'نەتىجىنى چىقىرىدۇ',
      icon: Zap
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationProgress(prev => (prev >= 100 ? 0 : prev + 2));
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      {/* قاتلام كۆرسىتىش */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
        <h5 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Layers className="w-6 h-6 text-blue-500" />
          نېرۋا تورى قاتلاملىرى
        </h5>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* تور كۆرسىتىش */}
          <div className="relative w-full max-w-lg h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 p-6">
            <div className="absolute top-1/2 left-0 right-0 flex items-center justify-center gap-8">
              {/* كىرگۈزۈش قاتلامى */}
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                  selectedLayer === 'input' 
                    ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg' 
                    : 'bg-gradient-to-br from-blue-200 to-cyan-200'
                }`}>
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-semibold text-gray-700">كىرگۈزۈش</div>
                <div className="text-xs text-gray-500">{networkSize.input} نېرۋا</div>
              </div>
              
              <ChevronRight className="w-6 h-6 text-gray-400" />
              
              {/* يوشۇرۇن قاتلام */}
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
                  selectedLayer === 'hidden' 
                    ? 'bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg' 
                    : 'bg-gradient-to-br from-green-200 to-emerald-200'
                }`}>
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <div className="text-xs font-semibold text-gray-700">يوشۇرۇن</div>
                <div className="text-xs text-gray-500">{networkSize.hidden} نېرۋا</div>
              </div>
              
              <ChevronRight className="w-6 h-6 text-gray-400" />
              
              {/* چىقىرىش قاتلامى */}
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                  selectedLayer === 'output' 
                    ? 'bg-gradient-to-br from-purple-500 to-violet-500 shadow-lg' 
                    : 'bg-gradient-to-br from-purple-200 to-violet-200'
                }`}>
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-semibold text-gray-700">چىقىرىش</div>
                <div className="text-xs text-gray-500">{networkSize.output} نېرۋا</div>
              </div>
            </div>
            
            {/* ئۇلانما سىزىقلىرى */}
            <div className="absolute top-1/2 left-20 right-20 h-0.5 bg-gradient-to-r from-blue-300 via-green-300 to-purple-300 opacity-50">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 transition-all duration-300"
                style={{ width: `${animationProgress}%` }}
              ></div>
            </div>
          </div>
          
          {/* قاتلام تەڭشەش */}
          <div className="w-full md:w-64 space-y-4">
            <h6 className="font-semibold text-gray-800">قاتلام تەڭشەش:</h6>
            {layerTypes.map((layer) => (
              <div key={layer.id} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">{layer.name}</span>
                  <span className="text-sm font-semibold">{layer.neurons}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={layer.neurons}
                  onChange={(e) => setNetworkSize(prev => ({ ...prev, [layer.id]: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* قاتلام تەپسىلاتى */}
      <div>
        <h5 className="font-bold text-gray-800 mb-4">قاتلام تەپسىلاتى:</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {layerTypes.map((layer) => (
            <button
              key={layer.id}
              onClick={() => setSelectedLayer(layer.id)}
              className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                selectedLayer === layer.id 
                  ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-300 border-2' 
                  : 'bg-white border-gray-200 hover:border-blue-200'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${layer.color}`}>
                <layer.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="font-bold text-gray-800 text-lg mb-2">{layer.name}</div>
              <div className="text-sm text-gray-600 mb-4">{layer.description}</div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">نېرۋا سانى</span>
                  <span className="font-semibold text-blue-600">{layer.neurons}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">پارامېتر</span>
                  <span className="font-semibold text-green-600">
                    {layer.id === 'input' ? layer.neurons * 3 : 
                     layer.id === 'hidden' ? layer.neurons * 4 : 
                     layer.neurons * 2}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* قاتلام مىسالى */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h5 className="font-bold text-gray-800 mb-4">قاتلام مىسالى:</h5>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`import torch
import torch.nn as nn

class NeuralNetwork(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super().__init__()
        
        # قاتلاملارنى قۇرۇش
        self.input_layer = nn.Linear(input_size, hidden_size)
        self.hidden_layer = nn.Linear(hidden_size, hidden_size)
        self.output_layer = nn.Linear(hidden_size, output_size)
        
        # ئاكتىۋاتسىيە فۇنكسىيەلىرى
        self.relu = nn.ReLU()
        self.sigmoid = nn.Sigmoid()
    
    def forward(self, x):
        # كىرگۈزۈش قاتلامى
        x = self.input_layer(x)
        x = self.relu(x)
        
        # يوشۇرۇن قاتلام
        x = self.hidden_layer(x)
        x = self.relu(x)
        
        # چىقىرىش قاتلامى
        x = self.output_layer(x)
        x = self.sigmoid(x)
        
        return x

# مودېل قۇرۇش
model = NeuralNetwork(
    input_size=${networkSize.input},
    hidden_size=${networkSize.hidden},
    output_size=${networkSize.output}
)

print(f"مودېل قۇرۇلمىسى: {model}")
print(f"پارامېتر سانى: {sum(p.numel() for p in model.parameters())}")`}
            </pre>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-5 h-5 text-green-500" />
                <h6 className="font-semibold text-gray-800">تور ئۇچۇرلىرى</h6>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">تولۇق پارامېتر</span>
                  <span className="font-semibold text-green-600">
                    {(networkSize.input * networkSize.hidden) + 
                     (networkSize.hidden * networkSize.hidden) + 
                     (networkSize.hidden * networkSize.output) + 
                     networkSize.hidden + networkSize.hidden + networkSize.output}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">قاتلام سانى</span>
                  <span className="font-semibold text-green-600">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">تولۇق نېرۋا</span>
                  <span className="font-semibold text-green-600">
                    {networkSize.input + networkSize.hidden + networkSize.output}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-5 h-5 text-blue-500" />
                <h6 className="font-semibold text-gray-800">سۈرئەت تەھلىلى</h6>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">ھېسابلاش ۋاقتى</span>
                  <span className="font-semibold text-blue-600">~5ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">يادرو ئىشلىتىش</span>
                  <span className="font-semibold text-blue-600">GPU</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* تاماملا */}
      <div className="flex justify-end">
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Layers className="w-5 h-5" />
          <span className="font-semibold">قۇرۇلما بۆلۈمىنى تاماملا</span>
        </button>
      </div>
    </div>
  );
};

export default NNArchitecture;