// src/components/learn-modules/neural-network-components/NNTypes.jsx
import React, { useState } from 'react';
import { Network, Layers, Cpu, Zap, Camera, MessageSquare, Video, Music } from 'lucide-react';

const NNTypes = ({ onComplete }) => {
  const [selectedType, setSelectedType] = useState('cnn');

  const networkTypes = [
    { 
      id: 'cnn', 
      name: 'كونڤولىۇتسىيە نېرۋا تورى', 
      icon: Camera,
      color: 'from-blue-500 to-cyan-500',
      description: 'رەسىم ۋە ۋىدىئو تەھلىلى',
      useCase: 'يۈز تونۇش، نەرسە بايقاش',
      layers: ['كونڤولىۇتسىيە', 'Pooling', 'Fully Connected']
    },
    { 
      id: 'rnn', 
      name: 'قايتىرما نېرۋا تورى', 
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500',
      description: 'ۋاقىت قاتارى ۋە تېكىست',
      useCase: 'تىل مودېللاش، ھېس-ھال تەھلىلى',
      layers: ['RNN', 'LSTM', 'GRU']
    },
    { 
      id: 'gan', 
      name: 'توقۇنۇش نېرۋا تورى', 
      icon: Video,
      color: 'from-purple-500 to-violet-500',
      description: 'سۈنئىي رەسىم ۋە مەزمۇن',
      useCase: 'رەسىم ياساش، ئۇسلۇب يۆتكەش',
      layers: ['Generator', 'Discriminator']
    },
    { 
      id: 'transformer', 
      name: 'Transformer', 
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      description: 'تىل بىر تەرەپ قىلىش',
      useCase: 'تەرجىمە، تېكىست ئۇچۇرلاش',
      layers: ['Attention', 'Feed Forward', 'Layer Norm']
    },
  ];

  return (
    <div className="space-y-8">
      {/* تور خىللىرى */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
        <h5 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Network className="w-6 h-6 text-blue-500" />
          نېرۋا تورى خىللىرى
        </h5>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {networkTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`p-4 rounded-xl border transition-all duration-300 ${
                selectedType === type.id 
                  ? `bg-gradient-to-br ${type.color} text-white border-transparent transform scale-105` 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <type.icon className="w-8 h-8 mb-3" />
                <div className="font-semibold mb-1">{type.name}</div>
                <div className="text-sm opacity-90">{type.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* تەپسىلاتلار */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h6 className="font-bold text-gray-800 mb-4">تۇر قۇرۇلمىسى:</h6>
            <div className="space-y-3">
              {networkTypes.find(t => t.id === selectedType)?.layers.map((layer, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div className="font-medium text-gray-800">{layer}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
            <h6 className="font-bold text-gray-800 mb-4">ئىشلىتىش ساھەلىرى:</h6>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">
                  {networkTypes.find(t => t.id === selectedType)?.useCase}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                {selectedType === 'cnn' && 'رەسىملەردىكى ئالاھىدە ئالاھىدىلىكلەرنى بايقاش'}
                {selectedType === 'rnn' && 'ۋاقىت بويىچە مۇناسىۋەتلەرنى ساقلاش'}
                {selectedType === 'gan' && 'ئەسلىدىن يېڭى سانلىق مەلۇمات ياساش'}
                {selectedType === 'transformer' && 'ئۇزۇن مۇناسىۋەتلەرنى چۈشىنىش'}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h6 className="font-bold text-gray-800 mb-4">مىسال كود:</h6>
          <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`import torch
import torch.nn as nn
${selectedType === 'cnn' ? 'import torch.nn.functional as F' : ''}
${selectedType === 'transformer' ? 'from torch.nn import Transformer' : ''}

class ${networkTypes.find(t => t.id === selectedType)?.name.replace(' ', '')}(nn.Module):
    def __init__(self):
        super().__init__()
        ${selectedType === 'cnn' ? `
        # CNN قۇرۇلمىسى
        self.conv1 = nn.Conv2d(3, 16, 3, padding=1)
        self.conv2 = nn.Conv2d(16, 32, 3, padding=1)
        self.pool = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(32 * 8 * 8, 128)
        self.fc2 = nn.Linear(128, 10)` : 
        selectedType === 'rnn' ? `
        # RNN قۇرۇلمىسى
        self.rnn = nn.LSTM(input_size=256, hidden_size=512, num_layers=2, batch_first=True)
        self.fc = nn.Linear(512, 10)` :
        selectedType === 'gan' ? `
        # GAN قۇرۇلمىسى
        # Generator
        self.gen_fc1 = nn.Linear(100, 256)
        self.gen_fc2 = nn.Linear(256, 512)
        self.gen_fc3 = nn.Linear(512, 784)
        
        # Discriminator
        self.dis_fc1 = nn.Linear(784, 512)
        self.dis_fc2 = nn.Linear(512, 256)
        self.dis_fc3 = nn.Linear(256, 1)` : `
        # Transformer قۇرۇلمىسى
        self.transformer = Transformer(d_model=512, nhead=8, num_encoder_layers=6)
        self.fc = nn.Linear(512, 10)`}
    
    def forward(self, x):
        ${selectedType === 'cnn' ? `
        # CNN forward
        x = self.pool(F.relu(self.conv1(x)))
        x = self.pool(F.relu(self.conv2(x)))
        x = x.view(-1, 32 * 8 * 8)
        x = F.relu(self.fc1(x))
        x = self.fc2(x)` :
        selectedType === 'rnn' ? `
        # RNN forward
        x, _ = self.rnn(x)
        x = x[:, -1, :]  # ئاخىرقى ھالەت
        x = self.fc(x)` :
        selectedType === 'gan' ? `
        # GAN forward
        if self.training:  # Generator
            x = F.relu(self.gen_fc1(x))
            x = F.relu(self.gen_fc2(x))
            x = torch.tanh(self.gen_fc3(x))
        else:  # Discriminator
            x = F.relu(self.dis_fc1(x))
            x = F.relu(self.dis_fc2(x))
            x = torch.sigmoid(self.dis_fc3(x))` : `
        # Transformer forward
        x = self.transformer(x, x)
        x = self.fc(x[:, -1, :])`}
        return x

# مودېل قۇرۇش
model = ${networkTypes.find(t => t.id === selectedType)?.name.replace(' ', '')}()
print(f"${networkTypes.find(t => t.id === selectedType)?.name} قۇرۇلدى")
print(f"پارامېتر سانى: {sum(p.numel() for p in model.parameters())}")`}
            </pre>
          </div>
        </div>
      </div>

      {/* سېلىشتۇرما جەدۋەل */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h5 className="font-bold text-gray-800 mb-4">تور خىللىرى سېلىشتۇرمىسى:</h5>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">تور</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">ئىشلىتىش</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">ئىنچىكە</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">ھېسابلاش</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">قىيىنچىلىق</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {networkTypes.map((type) => (
                <tr key={type.id} className={selectedType === type.id ? 'bg-blue-50' : 'hover:bg-gray-50'}>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <type.icon className="w-4 h-4" />
                      <span className="font-medium text-gray-800">{type.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">{type.useCase}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className={`h-2 rounded-full ${
                            type.id === 'cnn' ? 'bg-blue-500' :
                            type.id === 'rnn' ? 'bg-green-500' :
                            type.id === 'gan' ? 'bg-purple-500' :
                            'bg-orange-500'
                          }`}
                          style={{ width: type.id === 'cnn' ? '95%' : 
                                   type.id === 'rnn' ? '90%' : 
                                   type.id === 'gan' ? '85%' : '92%' }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">
                        {type.id === 'cnn' ? '95%' :
                         type.id === 'rnn' ? '90%' :
                         type.id === 'gan' ? '85%' : '92%'}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {type.id === 'cnn' ? 'تېز' :
                     type.id === 'rnn' ? 'ئوتتۇرا' :
                     type.id === 'gan' ? 'قىيىن' : 'تېز'}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      type.id === 'cnn' ? 'bg-blue-100 text-blue-800' :
                      type.id === 'rnn' ? 'bg-green-100 text-green-800' :
                      type.id === 'gan' ? 'bg-purple-100 text-purple-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {type.id === 'cnn' ? 'ئوتتۇرا' :
                       type.id === 'rnn' ? 'قىيىن' :
                       type.id === 'gan' ? 'يۇقىرى' : 'ئوتتۇرا'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* تاماملا */}
      <div className="flex justify-end">
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Network className="w-5 h-5" />
          <span className="font-semibold">تور خىللىرى بۆلۈمىنى تاماملا</span>
        </button>
      </div>
    </div>
  );
};

export default NNTypes;