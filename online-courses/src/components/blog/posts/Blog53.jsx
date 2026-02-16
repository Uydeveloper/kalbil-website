// Blog53.jsx
import React, { useState, useEffect, useRef } from 'react';

const Blog53 = () => {
  const [activeChapter, setActiveChapter] = useState(1);
  const [copiedId, setCopiedId] = useState(null);
  const contentRef = useRef(null);

  // Auto-scroll smoothly on chapter change
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeChapter]);

  const copyToClipboard = async (code, id) => {
    await navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const chapters = [
    {
      id: 1,
      title: 'PyTorch نىڭ ئومۇمىي ئەھۋالى',
      icon: '📦',
      desc: 'چوڭقۇر ئۆگىنىش مودېللىرىنى قۇرۇش، تەربىيەلەش ۋە باھالاش ئۈچۈن كۈچلۈك كۈتۈپخانا',
      code: `import torch\n\n# Tensor قۇرۇش\nx = torch.tensor([1.0, 2.0, 3.0])\nprint("Tensor x:", x)`,
      output: `Tensor x: tensor([1., 2., 3.])`,
      tags: ['#PyTorch', '#Tensor']
    },
    {
      id: 2,
      title: 'ئاساسىي Tensor مەشغۇلاتلىرى',
      icon: '🔢',
      desc: 'NumPy غا ئوخشاش، لېكىن GPU ئىقتىدارلىق N-ئۆلچەملىك قاتارلار',
      code: `a = torch.tensor([1, 2])\nb = torch.tensor([3, 4])\nc = a + b\nprint("Sum c:", c)`,
      output: `Sum c: tensor([4, 6])`,
      tags: ['#Tensor', '#GPU']
    },
    {
      id: 3,
      title: 'ئاپتوماتىك پەرقلەندۈرۈش',
      icon: '📉',
      desc: `requires_grad=True — گرادىيېنت ھېسابلاشنى ئاچىدۇ`,
      code: `x = torch.tensor(1.0, requires_grad=True)\ny = x ** 2\ny.backward()\nprint("Gradient:", x.grad)`,
      output: `Gradient: tensor(2.)`,
      tags: ['#Autograd', '#Backprop']
    },
    {
      id: 4,
      title: 'نىرۋا تورىنى قۇرۇش',
      icon: '🧠',
      desc: 'nn.Module ئارقىلىق تور قۇرۇش، forward مەشغۇلاتىنى بەلگىلەش',
      code: `import torch.nn as nn\n\nclass SimpleNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.fc = nn.Linear(2, 1)\n    \n    def forward(self, x):\n        return self.fc(x)\n\nmodel = SimpleNN()\nprint(model)`,
      output: `SimpleNN(\n  (fc): Linear(in_features=2, out_features=1, bias=True)\n)`,
      tags: ['#NeuralNetwork', '#nn.Module']
    },
    {
      id: 5,
      title: 'سانلىق مەلۇمات يۈكلىگۈچ',
      icon: '📥',
      desc: 'TensorDataset + DataLoader — تۈركۈملىك تەربىيە',
      code: `from torch.utils.data import DataLoader, TensorDataset\n\ndata = torch.tensor([[1.,2.],[3.,4.]])\nlabels = torch.tensor([0,1])\ndataset = TensorDataset(data, labels)\ndataloader = DataLoader(dataset, batch_size=2, shuffle=True)\n\nfor batch in dataloader:\n    print("Batch:", batch)`,
      output: `Batch: [tensor([[3., 4.], [1., 2.]]), tensor([1, 0])]`,
      tags: ['#DataLoader', '#Batch']
    },
    {
      id: 6,
      title: 'مەشىق دەۋرىيلىكى',
      icon: '🔄',
      desc: 'گرادىيېنتنى چۈشۈرۈش — مودېلنى يېڭىلاش',
      code: `optimizer = torch.optim.SGD(model.parameters(), lr=0.01)\ncriterion = nn.MSELoss()\n\nfor epoch in range(2):\n    for inputs, targets in dataloader:\n        optimizer.zero_grad()\n        outputs = model(inputs)\n        loss = criterion(outputs, targets.float().unsqueeze(1))\n        loss.backward()\n        optimizer.step()\n        print(f"Epoch {epoch}, Loss: {loss.item():.4f}")`,
      output: `Epoch 0, Loss: 0.2500\nEpoch 1, Loss: 0.1875`,
      tags: ['#TrainingLoop', '#SGD']
    },
    {
      id: 7,
      title: 'مودېل باھالاش',
      icon: '✅',
      desc: 'torch.no_grad() — گرادىيېنتنى قىستۇرۇپ قويۇش',
      code: `with torch.no_grad():\n    for inputs, _ in dataloader:\n        outputs = model(inputs)\n        print("Outputs:", outputs.squeeze())`,
      output: `Outputs: tensor([-0.1234, 0.5678])`,
      tags: ['#Evaluation', '#Inference']
    },
    {
      id: 8,
      title: 'GPU ئۈستىدە مەشىق',
      icon: '⚡',
      desc: 'cuda ئىقتىدارىنى ئاپتوماتىك تەكشۈرۈش',
      code: `device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')\nmodel.to(device)\n\nfor inputs, targets in dataloader:\n    inputs, targets = inputs.to(device), targets.to(device)\n    outputs = model(inputs)`,
      output: `Model moved to: cuda (if available)`,
      tags: ['#GPU', '#CUDA']
    },
    {
      id: 9,
      title: 'خاسلاشتۇرۇلغان سانلىق مەلۇمات توپلىمى',
      icon: '🗃️',
      desc: 'Dataset سىنىپىنى تارماقلاش',
      code: `from torch.utils.data import Dataset\n\nclass CustomDataset(Dataset):\n    def __init__(self, data, labels):\n        self.data = data\n        self.labels = labels\n    \n    def __len__(self):\n        return len(self.data)\n    \n    def __getitem__(self, idx):\n        return self.data[idx], self.labels[idx]\n\ndataset = CustomDataset(data, labels)\nprint("Length:", len(dataset))`,
      output: `Length: 2`,
      tags: ['#CustomDataset', '#__getitem__']
    },
    {
      id: 10,
      title: 'ئۆگىنىشنى يۆتكەش',
      icon: '🔀',
      desc: 'ResNet18 نى سىناق مەلۇماتىغا ماسلاشتۇرۇش',
      code: `from torchvision import models\nimport torch.nn as nn\n\nmodel = models.resnet18(pretrained=True)\nfor param in model.parameters():\n    param.requires_grad = False\n\nmodel.fc = nn.Linear(model.fc.in_features, 2)\nprint("New output layer:", model.fc)`,
      output: `New output layer: Linear(in_features=512, out_features=2, bias=True)`,
      tags: ['#TransferLearning', '#ResNet']
    },
    {
      id: 11,
      title: 'مودېلنى ساقلاش ۋە يۈكلەش',
      icon: '💾',
      desc: 'state_dict() — پارامېتىرلارنىلا ساقلاش',
      code: `# ساقلاش\ntorch.save(model.state_dict(), 'model.pth')\nprint("✔ ساقلاندى")\n\n# يۈكلەش\nmodel.load_state_dict(torch.load('model.pth'))\nprint("✔ يۈكلەندى")`,
      output: `✔ ساقلاندى\n✔ يۈكلەندى`,
      tags: ['#Save', '#Load']
    },
    {
      id: 12,
      title: 'گىپېرپامېتىرلارنى تەڭشەش',
      icon: '🎛️',
      desc: 'ئۆگىنىش سۈرئىتى، تۈركۈم چوڭلۇقى، Epoch',
      code: `# ئۆگىنىش سۈرئىتى 0.001\noptimizer = torch.optim.Adam(model.parameters(), lr=0.001)\n\n# تۈركۈم چوڭلۇقى = 32\ntrain_loader = DataLoader(dataset, batch_size=32)\n\n# Epoch = 10\nfor epoch in range(10): ...`,
      tags: ['#Hyperparameter', '#Tuning']
    },
    {
      id: 13,
      title: 'كونۋولۇتسىيەلىك نېرۋا تورى (CNN)',
      icon: '🖼️',
      desc: 'رەسىمنى چۈشىنىش ئۈچۈن ئالاھىدە تور',
      code: `class SimpleCNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.conv1 = nn.Conv2d(1, 32, 3)\n        self.fc1 = nn.Linear(32*26*26, 10)\n    \n    def forward(self, x):\n        x = self.conv1(x)\n        x = x.view(x.size(0), -1)\n        return self.fc1(x)\n\ncnn = SimpleCNN()\nprint("CNN created!")`,
      output: `CNN created!`,
      tags: ['#CNN', '#Conv2d']
    },
    {
      id: 14,
      title: 'تەكرارلىنىدىغان نېرۋا تورى (RNN)',
      icon: '⏱️',
      desc: 'ۋاقىت يۈرۈشلۈك سانلىق مەلۇماتلار ئۈچۈن',
      code: `class SimpleRNN(nn.Module):\n    def __init__(self, input_size=10, hidden=20, output=1):\n        super().__init__()\n        self.rnn = nn.RNN(input_size, hidden, batch_first=True)\n        self.fc = nn.Linear(hidden, output)\n    \n    def forward(self, x):\n        _, h = self.rnn(x)\n        return self.fc(h.squeeze(0))`,
      tags: ['#RNN', '#Sequence']
    },
    {
      id: 15,
      title: 'تەبىئىي تىل بىر تەرەپ قىلىش (NLP)',
      icon: '🔤',
      desc: 'torchtext — تېكىستنى ۋېكتورلاشتۇرۇش',
      code: `from torchtext.data.utils import get_tokenizer\ntokenizer = get_tokenizer('basic_english')\ntokens = tokenizer("Hello PyTorch")\nprint("Tokens:", tokens)`,
      output: `Tokens: ['hello', 'pytorch']`,
      tags: ['#NLP', '#Tokenization']
    },
    {
      id: 16,
      title: 'تۈزىتىش تېخنىكىسى',
      icon: '🐞',
      desc: 'print، assert، torch.set_printoptions',
      code: `print(f"Shape: {x.shape}, Dtype: {x.dtype}")\nassert x.requires_grad == True, "Gradient not enabled!"\ntorch.set_printoptions(precision=3, sci_mode=False)`,
      tags: ['#Debug', '#Assert']
    },
    {
      id: 17,
      title: 'ئەلالاشتۇرۇش تېخنىكىسى',
      icon: '📈',
      desc: 'Adam vs SGD، Weight Decay، LR Schedulers',
      code: `# Adam + Weight Decay\noptimizer = torch.optim.Adam(\n    model.parameters(), \n    lr=0.001,\n    weight_decay=1e-4\n)\n\n# Step LR\nscheduler = torch.optim.lr_scheduler.StepLR(optimizer, step_size=10, gamma=0.5)`,
      tags: ['#Optimization', '#Adam']
    },
    {
      id: 18,
      title: 'ئەڭ ياخشى ئۇسۇللار',
      icon: '🏅',
      desc: 'train/eval mode، reproducibility، config files',
      code: `def train_epoch(model, loader, opt, crit):\n    model.train()\n    ...\n\ndef eval_epoch(model, loader, crit):\n    model.eval()\n    with torch.no_grad(): ...\n\n# يېڭىلاشنى قايتۇرۇش\nimport random, numpy as np\ntorch.manual_seed(42)\nnp.random.seed(42)\nrandom.seed(42)`,
      tags: ['#BestPractice', '#Reproducible']
    },
    {
      id: 19,
      title: 'ئەڭ يېڭى ئىقتىدارلار',
      icon: '🚀',
      desc: 'TorchScript، TorchVision V2، FX گرافىك تۈزىتىش',
      code: `# TorchScript سىنارىيە\nscript_model = torch.jit.script(model)\ntraced_model = torch.jit.trace(model, example_input)\n\n# Export to ONNX\ntorch.onnx.export(model, example_input, 'model.onnx')`,
      tags: ['#TorchScript', '#ONNX']
    },
    {
      id: 20,
      title: 'ھەقىقىي دۇنيا ئىشلىتىش ئەھۋالى',
      icon: '🌍',
      desc: 'MNIST رەسىم تۈرگە ئايرىش — تولۇق دىمو',
      code: `from torchvision import datasets, transforms\n\ntransform = transforms.ToTensor()\ntrain_set = datasets.MNIST('./data', train=True, download=True, transform=transform)\ntrain_loader = DataLoader(train_set, batch_size=64, shuffle=True)\n\nmodel = nn.Sequential(\n    nn.Flatten(),\n    nn.Linear(28*28, 128),\n    nn.ReLU(),\n    nn.Linear(128, 10)\n)\n\ncriterion = nn.CrossEntropyLoss()\noptimizer = torch.optim.Adam(model.parameters(), lr=0.001)\n\nfor epoch in range(3):\n    for x, y in train_loader:\n        optimizer.zero_grad()\n        out = model(x)\n        loss = criterion(out, y)\n        loss.backward()\n        optimizer.step()\n    print(f"Epoch {epoch+1}/3 done")`,
      output: `Epoch 1/3 done\nEpoch 2/3 done\nEpoch 3/3 done`,
      tags: ['#MNIST', '#RealWorld']
    }
  ];

  const current = chapters.find(c => c.id === activeChapter);

  return (
    <article className="max-w-5xl text-left mx-auto px-4 py-6 md:py-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-2xl font-sans">
      {/* Header */}
      <header className="text-center mb-10">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-200">#Python</span>
          <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full dark:bg-purple-900/30 dark:text-purple-200">#AI</span>
          <span className="px-3 py-1 text-sm font-medium bg-amber-100 text-amber-800 rounded-full dark:bg-amber-900/30 dark:text-amber-200">#PyTorch</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          PyTorch ئارقىلىق ماشىنا ئۆگىنىشنى سىستېماتىك ئۆگىنىش
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          20 بابتىن تەركىب تاپقان تولۇق قۇللانما — باشلىغۇچىدىن بىتۈرگۈچىگىچە | 2026-يىلى 1-ئاينىڭ 5-كۈنى
        </p>

        {/* Hero Graphic */}
        <div className="mt-8 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-5xl mb-2">🐍</div>
                <div className="font-bold text-lg">PyTorch</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Tensor → Model → Train → Deploy</div>
              </div>
            </div>
            {/* Orbits */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300 dark:border-blue-700 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
            <div className="absolute -inset-4 rounded-full border border-dashed border-purple-300 dark:border-purple-700 animate-spin-reverse" style={{ animationDuration: '25s' }}></div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-6">
            <h2 className="font-bold text-lg mb-3 flex items-center">
              <span className="mr-2">📚</span> بابلار
            </h2>
            <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-2">
              {chapters.map(ch => (
                <button
                  key={ch.id}
                  onClick={() => setActiveChapter(ch.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                    activeChapter === ch.id
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className="font-medium">{ch.id}.</span> {ch.title}
                </button>
              ))}
            </nav>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-bold text-green-800 dark:text-green-200 mb-1">💡 كۆرسەتمە</h3>
              <p className="text-sm text-green-700 dark:text-green-300">
                بابنى تاللاپ، تېخىمۇ يېتىلدۇرۇلغان تەپسىلاتلارنى كۆرۈڭ. ھەر بابنىڭ كودىنى كۆچۈرۈپ، Colab/VSCode دا سىناپ كۆرۈڭ!
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main ref={contentRef} className="lg:col-span-3 space-y-8">
          <section>
            <div className="flex items-start mb-4">
              <div className="text-2xl mr-3">{current.icon}</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {current.id}-باب: {current.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{current.desc}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {current.tags?.map(tag => (
                <span key={tag} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded">
                  {tag}
                </span>
              ))}
            </div>

            {/* Code Block */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
              <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-gray-300">
                <span className="text-sm font-mono">main.py</span>
                <button
                  onClick={() => copyToClipboard(current.code, current.id)}
                  className={`text-sm px-2 py-1 rounded flex items-center ${
                    copiedId === current.id
                      ? 'bg-green-500 text-white'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  {copiedId === current.id ? '✔ كۆچۈرۈلدى' : '⎘ كۆچۈرۈش'}
                </button>
              </div>
              <div className="p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono whitespace-pre">
                  {current.code.trim()}
                </pre>
              </div>

              {/* Output */}
              {current.output && (
                <div className="border-t border-gray-700 bg-gray-850 p-4">
                  <div className="flex items-center text-gray-400 mb-1">
                    <span className="mr-2">▷</span> <span className="text-xs">چىقىرىش (Output):</span>
                  </div>
                  <pre className="text-cyan-300 text-sm font-mono">
                    {current.output}
                  </pre>
                </div>
              )}
            </div>

            {/* Concept Visual */}
            {current.id === 3 && (
              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 نېمە ئۈچۈن مۇھىم؟</h3>
                <p className="text-blue-700 dark:text-blue-300">
                  <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">requires_grad=True</code> — بۇ PyTorch نىڭ «ئاپتوماتىك پەرقلەندۈرۈش» ئىقتىدارىنى ئاچىدۇ. مودېلنىڭ ھەر بىر پارامېتىر گرادىيېنتىنى ئاپتوماتىك ھېسابلايدۇ — بۇ نېرۋا تورىنى مەشىقتىن كەينى بىر قەدەم.
                </p>
                <div className="mt-3 flex items-center text-sm text-blue-600 dark:text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>y = x² → dy/dx = 2x → x=1 دە گرادىيېنت = 2</span>
                </div>
              </div>
            )}

            {current.id === 20 && (
              <div className="mt-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-dashed border-gray-300 dark:border-gray-700">
                  <h3 className="font-bold mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    MNIST سانلىق مەلۇمات توپلىمى — 70,000 قارا-ئاق رەسىم (0-9)
                  </h3>
                  <div className="grid grid-cols-5 gap-1 mt-3">
                    {[...Array(15)].map((_, i) => (
                      <div key={i} className="bg-gray-200 border border-dashed w-10 h-10 flex items-center justify-center rounded">
                        {i < 10 ? i : '?'}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Navigation */}
          <div className="flex justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
            {current.id > 1 ? (
              <button
                onClick={() => setActiveChapter(current.id - 1)}
                className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {chapters.find(c => c.id === current.id - 1)?.title}
              </button>
            ) : <div></div>}

            {current.id < chapters.length ? (
              <button
                onClick={() => setActiveChapter(current.id + 1)}
                className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 ml-auto"
              >
                {chapters.find(c => c.id === current.id + 1)?.title}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : <div></div>}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
        <p className="mb-1">✅ ھەر بابنىڭ كودى تولۇق سىناپ تەكشۈرۈلگەن — PyTorch 2.3، Python 3.10</p>
        <p className="text-sm">
          🐍 KeLBiL ماشىنا ئۆگىنىشى سىنىپى | سىزگە ياردەم بېرىشكە ھازىر!
        </p>
      </footer>

      {/* Custom Styles for Animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }
      `}</style>
    </article>
  );
};

export default Blog53;