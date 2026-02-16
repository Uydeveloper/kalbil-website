// src/components/learn-modules/neural-network-components/NNApplications.jsx
import React, { useState } from 'react';
import { Cpu, Camera, MessageSquare, Music, Globe, Shield, Stethoscope, Car } from 'lucide-react';

const NNApplications = ({ onComplete }) => {
  const [selectedApp, setSelectedApp] = useState('vision');

  const applications = [
    {
      id: 'vision',
      title: 'كۆرۈش سىستېمىسى',
      icon: Camera,
      color: 'from-blue-500 to-cyan-500',
      accuracy: '98.5%',
      examples: ['يۈز تونۇش', 'نەرسە بايقاش', 'رەسىم تەقسىملەش'],
      companies: ['Google Vision', 'AWS Rekognition', 'Azure CV']
    },
    {
      id: 'nlp',
      title: 'تىل بىر تەرەپ قىلىش',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500',
      accuracy: '96.7%',
      examples: ['تەرجىمە', 'چاتبوت', 'ھېس-ھال تەھلىلى'],
      companies: ['GPT-4', 'BERT', 'T5']
    },
    {
      id: 'audio',
      title: 'ئاۋاز تەھلىلى',
      icon: Music,
      color: 'from-purple-500 to-violet-500',
      accuracy: '95.2%',
      examples: ['ئاۋاز تونۇش', 'مۇزىكا تەقسىملەش', 'ئاۋاز يوللىش'],
      companies: ['DeepSpeech', 'WaveNet', 'Tacotron']
    },
    {
      id: 'health',
      title: 'تېببىي تەشخىس',
      icon: Stethoscope,
      color: 'from-red-500 to-pink-500',
      accuracy: '94.8%',
      examples: ['تۇمور بايقاش', 'ئىكەن ئالدىن بىلىش', 'دورا بايقاش'],
      companies: ['DeepMind', 'IBM Watson', 'NVIDIA Clara']
    },
    {
      id: 'autonomous',
      title: 'ئاپتوماتىك ھەيدەش',
      icon: Car,
      color: 'from-orange-500 to-amber-500',
      accuracy: '99.9%',
      examples: ['يول تونۇش', 'توققانلاردىن ساقلىنىش', 'پاركىڭ'],
      companies: ['Tesla', 'Waymo', 'Cruise']
    },
    {
      id: 'security',
      title: 'خەۋپسىزلىك',
      icon: Shield,
      color: 'from-indigo-500 to-blue-500',
      accuracy: '97.3%',
      examples: ['ئالدامچىلىق بايقاش', 'يۈز كىملىكى', 'سىستېما كۆزىتىش'],
      companies: ['Darktrace', 'Cylance', 'CrowdStrike']
    },
  ];

  return (
    <div className="space-y-8">
      {/* ئەمەلىي ئىشلىتىشلەر */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-2xl border border-indigo-100">
        <h5 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Globe className="w-6 h-6 text-indigo-500" />
          نېرۋا تورىنىڭ ھەقىقىي دۇنيادىكى ئىشلىتىشلىرى
        </h5>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {applications.map((app) => (
            <button
              key={app.id}
              onClick={() => setSelectedApp(app.id)}
              className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                selectedApp === app.id 
                  ? 'bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-300 border-2' 
                  : 'bg-white border-gray-200 hover:border-indigo-200'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${app.color}`}>
                  <app.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-lg mb-1">{app.title}</div>
                  <div className="text-sm text-gray-600">ئىنچىكە: {app.accuracy}</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex flex-wrap gap-1">
                  {app.examples.map((example, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {example}
                    </span>
                  ))}
                </div>
                
                <div className="text-xs text-gray-500">
                  شىركەتلەر: {app.companies.join(', ')}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* تەپسىلاتلار */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h6 className="font-bold text-gray-800 mb-4">
            {applications.find(a => a.id === selectedApp)?.title} تەھلىلى
          </h6>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center justify-between mb-3">
                <div className="font-semibold text-gray-800">تېخنىكىلىق ئۇچۇرلار</div>
                <span className="text-sm font-semibold text-blue-600">
                  {applications.find(a => a.id === selectedApp)?.accuracy}
                </span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">تور خىلى</span>
                    <span className="text-sm font-medium">
                      {selectedApp === 'vision' ? 'CNN' :
                       selectedApp === 'nlp' ? 'Transformer' :
                       selectedApp === 'audio' ? 'RNN/CNN' :
                       selectedApp === 'health' ? 'CNN/RNN' :
                       selectedApp === 'autonomous' ? 'CNN/RL' : 'GAN/CNN'}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">پارامېتر سانى</span>
                    <span className="text-sm font-medium">
                      {selectedApp === 'vision' ? '100M+' :
                       selectedApp === 'nlp' ? '1B+' :
                       selectedApp === 'audio' ? '50M+' :
                       selectedApp === 'health' ? '500M+' :
                       selectedApp === 'autonomous' ? '1B+' : '200M+'}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-lg border border-purple-100">
              <div className="font-semibold text-gray-800 mb-3">ئىشلىتىش مىسالى:</div>
              <div className="text-sm text-gray-600">
                {selectedApp === 'vision' && 'يۈز تونۇش سىستېمىسى ھەر خىل يورۇقلۇق ۋە ئېگىلىشتە 98% ئىنچىكە بىلەن ئىشلەيدۇ'}
                {selectedApp === 'nlp' && 'تېز تەرجىمە سىستېمىسى 50 دىن ئارتۇق تىلنى 96% ئىنچىكە بىلەن تەرجىمە قىلالايدۇ'}
                {selectedApp === 'audio' && 'ئاۋاز تونۇش سىستېمىسى ھەر خىل ئەۋاز ۋە نۇقتىدا 95% ئىنچىكە بىلەن ئىشلەيدۇ'}
                {selectedApp === 'health' && 'تۇمور بايقاش سىستېمىسى تېببىي رەسىملەردىكى تۇمورلارنى 94% ئىنچىكە بىلەن بايقايدۇ'}
                {selectedApp === 'autonomous' && 'ئاپتوماتىك ھەيدەش سىستېمىسى مىليونلىغان كىلومېتىرلۇق يولنى 99.9% بىخەتەرلىك بىلەن ئۆتتى'}
                {selectedApp === 'security' && 'ئالدامچىلىق بايقاش سىستېمىسى ھەقىقىي ئالدامچىلىقلارنى 97% ئىنچىكە بىلەن بايقايدۇ'}
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
import torchvision.models as models

# ${applications.find(a => a.id === selectedApp)?.title} مودېلى
class ${applications.find(a => a.id === selectedApp)?.title.replace(' ', '')}Model(nn.Module):
    def __init__(self, num_classes):
        super().__init__()
        
        # ئاساسىي مودېل
        ${selectedApp === 'vision' ? `
        self.backbone = models.resnet50(pretrained=True)
        num_features = self.backbone.fc.in_features
        self.backbone.fc = nn.Linear(num_features, num_classes)` :
        selectedApp === 'nlp' ? `
        self.embedding = nn.Embedding(10000, 256)
        self.lstm = nn.LSTM(256, 512, num_layers=2, batch_first=True)
        self.fc = nn.Linear(512, num_classes)` :
        selectedApp === 'audio' ? `
        self.conv1 = nn.Conv1d(1, 32, 3)
        self.conv2 = nn.Conv1d(32, 64, 3)
        self.pool = nn.MaxPool1d(2)
        self.fc1 = nn.Linear(64 * 128, 256)
        self.fc2 = nn.Linear(256, num_classes)` :
        selectedApp === 'health' ? `
        self.cnn = nn.Sequential(
            nn.Conv2d(1, 32, 3),
            nn.ReLU(),
            nn.MaxPool2d(2),
            nn.Conv2d(32, 64, 3),
            nn.ReLU(),
            nn.MaxPool2d(2),
            nn.Flatten()
        )
        self.fc = nn.Linear(64 * 5 * 5, num_classes)` :
        selectedApp === 'autonomous' ? `
        self.vision_cnn = nn.Sequential(
            nn.Conv2d(3, 32, 3),
            nn.ReLU(),
            nn.MaxPool2d(2),
            nn.Conv2d(32, 64, 3),
            nn.ReLU(),
            nn.MaxPool2d(2),
            nn.Flatten()
        )
        self.fc = nn.Linear(64 * 26 * 26, num_classes)` : `
        self.generator = nn.Sequential(
            nn.Linear(100, 256),
            nn.ReLU(),
            nn.Linear(256, 512),
            nn.ReLU(),
            nn.Linear(512, 784),
            nn.Tanh()
        )
        self.discriminator = nn.Sequential(
            nn.Linear(784, 512),
            nn.ReLU(),
            nn.Linear(512, 256),
            nn.ReLU(),
            nn.Linear(256, 1),
            nn.Sigmoid()
        )`}
    
    def forward(self, x):
        ${selectedApp === 'vision' ? `
        # كۆرۈش مودېلى
        x = self.backbone(x)` :
        selectedApp === 'nlp' ? `
        # تىل مودېلى
        x = self.embedding(x)
        x, _ = self.lstm(x)
        x = x[:, -1, :]
        x = self.fc(x)` :
        selectedApp === 'audio' ? `
        # ئاۋاز مودېلى
        x = self.pool(torch.relu(self.conv1(x)))
        x = self.pool(torch.relu(self.conv2(x)))
        x = x.view(x.size(0), -1)
        x = torch.relu(self.fc1(x))
        x = self.fc2(x)` :
        selectedApp === 'health' ? `
        # تېببىي مودېل
        x = self.cnn(x)
        x = self.fc(x)` :
        selectedApp === 'autonomous' ? `
        # ئاپتوماتىك ھەيدەش
        x = self.vision_cnn(x)
        x = self.fc(x)` : `
        # خەۋپسىزلىك مودېلى
        if self.training:
            x = self.generator(x)  # Generator
        else:
            x = self.discriminator(x)  # Discriminator`}
        return x

# مودېل قۇرۇش
model = ${applications.find(a => a.id === selectedApp)?.title.replace(' ', '')}Model(num_classes=10)
print(f"${applications.find(a => a.id === selectedApp)?.title} مودېلى قۇرۇلدى")`}
            </pre>
          </div>
        </div>
      </div>

      {/* تەكشۈرۈش ۋە تاماملاش */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
        <div className="text-sm text-gray-600">
          {applications.find(a => a.id === selectedApp)?.title} ئىلمىنى تەكشۈردىڭىز
        </div>
        <button
          onClick={onComplete}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center gap-2"
        >
          <Cpu className="w-5 h-5" />
          كېلەر دەرسكە ئۆتۈش
        </button>
      </div>
    </div>
  );
};

export default NNApplications;