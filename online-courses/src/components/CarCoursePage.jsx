import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, BookOpen, Users, Mail, Moon, Sun, Cpu, Brain, 
  CircuitBoard, Atom, ChevronRight, Star, Target, 
  Globe, Code, Lock, Unlock, Download, Upload,
  Smartphone, Database, Cloud, Server, Coffee,
  Gift, Users as UsersIcon, CreditCard, DollarSign,
  Link
} from 'lucide-react';

const QuantumRoadmap2026 = () => {
  const handleGoogleForm = () => {
    window.open("https://docs.google.com/forms/d/1vFswu8GvhBe9toQZ1akpI0n7SYPKodmyIe4Fy1u7DKU/edit", "_blank");
  }
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    whatsapp: '',
    level: 'beginner',
    experience: '',
    referral: '',
    paymentMethod: 'crypto'
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState('prerequisites');
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const canvasRef = useRef(null);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Google Form submission URL - Replace with your actual Google Form URL
   
    // Create form data for Google Form
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = googleFormUrl;
    form.target = '_blank';
    
    // Add hidden fields for Google Form
    const fields = [
      { name: 'entry.1234567890', value: formData.name }, // Replace with your field IDs
      { name: 'entry.1234567891', value: formData.email },
      { name: 'entry.1234567892', value: formData.telegram },
      { name: 'entry.1234567893', value: formData.whatsapp },
      { name: 'entry.1234567894', value: formData.level },
      { name: 'entry.1234567895', value: formData.experience },
      { name: 'entry.1234567896', value: formData.referral },
      { name: 'entry.1234567897', value: formData.paymentMethod }
    ];
    
    fields.forEach(field => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = field.name;
      input.value = field.value;
      form.appendChild(input);
    });
    
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    
    // Also send email notification
    const emailSubject = encodeURIComponent(`QML 2026 تىزىملىتىش - ${formData.name}`);
    const emailBody = encodeURIComponent(
      `يېڭى تىزىملىتىش:\n\n` +
      `ئىسىم: ${formData.name}\n` +
      `ئېلېكترونلۇق خەت: ${formData.email}\n` +
      `Telegram: ${formData.telegram}\n` +
      `WhatsApp: ${formData.whatsapp}\n` +
      `سەۋىيە: ${formData.level}\n` +
      `تەجرىبە: ${formData.experience}\n` +
      `تەۋسىيە: ${formData.referral || 'يوق'}\n` +
      `ھەق تۆلەش: ${formData.paymentMethod}\n` +
      `ۋاقتى: ${new Date().toLocaleString()}`
    );
    
    window.open(`mailto:kelbil.tech@gmail.com?subject=${emailSubject}&body=${emailBody}`);
    
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  // Quantum Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(200, (canvas.width * canvas.height) / 8000);
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: Math.random() * 0.5 + 0.3,
          size: Math.random() * 3 + 1,
          color: darkMode 
            ? `hsla(${200 + Math.random() * 60}, 80%, 65%, ${0.3 + Math.random() * 0.4})`
            : `hsla(${260 + Math.random() * 40}, 70%, 55%, ${0.3 + Math.random() * 0.4})`,
          connectionDistance: 80 + Math.random() * 70
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < Math.min(p1.connectionDistance, p2.connectionDistance)) {
            ctx.beginPath();
            ctx.strokeStyle = darkMode 
              ? `rgba(79, 195, 247, ${0.15 * (1 - distance / 150)})`
              : `rgba(94, 53, 177, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      
      // Draw particles
      particles.forEach(p => {
        // Glow effect
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Particle core
        ctx.beginPath();
        ctx.fillStyle = p.color.replace('0.3', '0.8').replace('0.4', '0.9');
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Movement
        p.x += p.vx;
        p.y += p.vy;
        
        // Bounce off walls
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
      
      animationId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();
    
    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [darkMode]);

  // Complete Roadmap Data
  const roadmap = [
    {
      id: 'prerequisites',
      title: '0️⃣ ئالدىنقى تەييارلىق (Prerequisites)',
      icon: <Lock size={24} />,
      color: 'from-blue-500 to-cyan-500',
      topics: [
        {
          category: '🔹 ماتېماتىكا',
          items: [
            'Linear Algebra (Vector, Matrix, Tensor Product)',
            'Probability & Statistics (Distribution, Bayesian)',
            'Calculus (Gradient Descent, Partial Derivative)'
          ],
          goal: 'فورمۇلانى قورقماي ئوقۇيالايدىغان دەرىجە'
        },
        {
          category: '🔹 پروگراممىلىق ئاساس',
          items: [
            'Python ۋە ئاساسلىق كۇتۇپخانىلار',
            'NumPy, SciPy ۋە ماتېماتىكا ھېسابلاش',
            'Jupyter Notebook ئىشلەتۈش',
            'Git/GitHub بىلەن تونۇشۇش'
          ],
          goal: 'سانلىق مەلۇمات بىلەن ئىشلەشنى ئەركىن قىلىش'
        }
      ]
    },
    {
      id: 'classical-ml',
      title: '1️⃣ كىلاسسىك ماشىنا ئۈگىنىش',
      icon: <Brain size={24} />,
      color: 'from-purple-500 to-pink-500',
      topics: [
        {
          category: '🔹 Supervised Learning',
          items: ['Linear/Logistic Regression', 'SVM', 'Decision Tree', 'Random Forest']
        },
        {
          category: '🔹 Unsupervised Learning',
          items: ['K-Means', 'PCA', 'Hierarchical Clustering']
        },
        {
          category: '🔹 Neural Network',
          items: ['Perceptron', 'MLP', 'Activation Functions', 'Backpropagation']
        }
      ]
    },
    {
      id: 'quantum-foundations',
      title: '2️⃣ كىۋانىت فىزىكىسى ئاساسى',
      icon: <Atom size={24} />,
      color: 'from-green-500 to-emerald-500',
      topics: [
        {
          category: '🔹 Qubit ۋە Superposition',
          items: ['Classical Bit vs Qubit', '|0⟩ ۋە |1⟩', 'Bloch Sphere']
        },
        {
          category: '🔹 Quantum States',
          items: ['State Vector', 'Measurement', 'Collapse']
        },
        {
          category: '🔹 Quantum Probability',
          items: ['Amplitude vs Probability', 'Measurement Operator']
        }
      ]
    },
    {
      id: 'quantum-circuits',
      title: '3️⃣ كىۋانىت گەيت ۋە چەمبىرەك',
      icon: <CircuitBoard size={24} />,
      color: 'from-orange-500 to-red-500',
      topics: [
        {
          category: '🔹 Single-Qubit Gates',
          items: ['X, Y, Z Gates', 'Hadamard (H) Gate', 'Phase Gate']
        },
        {
          category: '🔹 Multi-Qubit Gates',
          items: ['CNOT', 'CZ', 'SWAP']
        },
        {
          category: '🔹 Quantum Circuits',
          items: ['Circuit Diagram', 'Depth', 'Noise Modeling']
        }
      ]
    },
    {
      id: 'quantum-programming',
      title: '4️⃣ كىۋانىت پروگراممىلاش',
      icon: <Code size={24} />,
      color: 'from-indigo-500 to-blue-500',
      topics: [
        {
          category: '🔹 Qiskit (IBM)',
          items: ['QuantumCircuit', 'Aer Simulator', 'Real Quantum Computer']
        },
        {
          category: '🔹 PennyLane (ML Focus)',
          items: ['Hybrid Models', 'Gradient Calculation', 'Automatic Diff']
        },
        {
          category: '🔹 ئەمەلىي مىساللار',
          items: ['Bell State', 'Quantum Teleportation', 'GHZ State']
        }
      ]
    },
    {
      id: 'qml-basics',
      title: '5️⃣ QML ئاساسى',
      icon: <Cpu size={24} />,
      color: 'from-cyan-500 to-teal-500',
      topics: [
        {
          category: '🔹 Data Encoding',
          items: ['Basis Encoding', 'Amplitude Encoding', 'Angle Encoding']
        },
        {
          category: '🔹 Hybrid Models',
          items: ['Classical + Quantum', 'Parameter Passing', 'Feature Extraction']
        }
      ]
    },
    {
      id: 'vqc',
      title: '6️⃣ Variational Quantum Circuits',
      icon: <Server size={24} />,
      color: 'from-violet-500 to-purple-500',
      topics: [
        {
          category: '🔹 Parameterized Gates',
          items: ['Trainable Parameters', 'Optimization', 'Gradient Descent']
        },
        {
          category: '🔹 VQC Structure',
          items: ['Ansatz Design', 'Cost Function', 'Training Loop']
        }
      ]
    },
    {
      id: 'qnn',
      title: '7️⃣ Quantum Neural Network',
      icon: <Brain size={24} />,
      color: 'from-pink-500 to-rose-500',
      topics: [
        {
          category: '🔹 QNN Architecture',
          items: ['Input Encoding', 'Quantum Layers', 'Measurement']
        },
        {
          category: '🔹 Training Methods',
          items: ['Parameter Shift Rule', 'Quantum Gradients', 'Backpropagation']
        }
      ]
    },
    {
      id: 'hybrid-ml',
      title: '8️⃣ Hybrid Quantum-Classical ML',
      icon: <Cloud size={24} />,
      color: 'from-yellow-500 to-orange-500',
      topics: [
        {
          category: '🔹 Hybrid Architectures',
          items: ['CNN + QNN', 'Classical Feature Extractors', 'Quantum Classifiers']
        },
        {
          category: '🔹 ئەمەلىي پروجېكتلار',
          items: ['MNIST with QML', 'Quantum Kernels', 'Hybrid Optimization']
        }
      ]
    },
    {
      id: 'qml-algorithms',
      title: '9️⃣ QML Algorithms',
      icon: <Database size={24} />,
      color: 'from-lime-500 to-green-500',
      topics: [
        {
          category: '🔹 Classical ML نىڭ كىۋانىت نۇسخىلىرى',
          items: ['Quantum SVM', 'Quantum KNN', 'Quantum PCA', 'Quantum Boltzmann']
        }
      ]
    },
    {
      id: 'nisq-era',
      title: '🔟 NISQ Era & Real Devices',
      icon: <Smartphone size={24} />,
      color: 'from-gray-500 to-slate-500',
      topics: [
        {
          category: '🔹 NISQ Challenges',
          items: ['Noise & Decoherence', 'Limited Qubits', 'Error Mitigation']
        },
        {
          category: '🔹 Real Quantum Computers',
          items: ['IBM Quantum', 'Google Sycamore', 'Rigetti', 'IonQ']
        }
      ]
    },
    {
      id: 'advanced-research',
      title: '🔬 ئالىي دەرىجە & تەتقىقات',
      icon: <Star size={24} />,
      color: 'from-amber-500 to-yellow-500',
      topics: [
        {
          category: '🔹 Research Areas',
          items: ['Quantum Advantage', 'Quantum Kernel Methods', 'Quantum RL', 'QGAN']
        },
        {
          category: '🔹 ئىلمىي تەتقىقات',
          items: ['Paper Reading', 'Research Proposal', 'Experiment Design']
        }
      ]
    }
  ];

  const learningOutcomes = [
    'QML دەرس ئۆتەلەيسىز',
    'Research Project قىلالايسىز',
    'GitHub Project چىقارالايسىز',
    'كىۋانىت ساھەسىدە ئىش تېپەلەيسىز'
  ];

  const contactLinks = [
    { name: 'ۋاتسئاپ', url: 'https://chat.whatsapp.com/FLaJ33cp8qv0iwLNvRwZjC?mode=gi_t', icon: '💬' },
    { name: 'تىلېگرام', url: 'https://t.me/+5uXhIZoVzPxmNGE1', icon: '📱' },
    { name: 'GitHub', url: 'https:uyhub.qutadguai.com', icon: '💻' },
    { name: 'Discord', url: 'https://discord.gg/pdPryBn5', icon: '🎮' }
  ];

  // Pricing and discounts
  const pricing = {
    original: 125,
    discount: 0.20, // 20%
    groupDiscount: 0.20, // Additional 20% for groups
    earlyBird: 0.10, // 10% early bird discount
    finalPrice: 125 * (1 - 0.20) // $100 after 20% discount
  };

  const discounts = [
    { type: 'ئەڭ يۇقىرى چېكىم', amount: '20%', icon: <Gift size={20} />, desc: 'دەرسلەر باشلانغۇچە' },
    { type: 'گۇرۇپپا چېكىمى', amount: '20%', icon: <UsersIcon size={20} />, desc: '3 كىشى بىرلىكتە' },
    { type: 'ئېتىبار', amount: '10%', icon: <Star size={20} />, desc: 'ئالدىنقى تىزىملىتىش' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Quantum Background */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" />
      
      <div className="relative z-10">
        {/* Navigation */}
        <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-lg border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-cyan-900/30' : 'bg-purple-100'}`}>
                  <Zap className={darkMode ? 'text-cyan-400' : 'text-purple-600'} size={28} />
                </div>
                <div>
                  <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    QML 2026
                  </h1>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    كىۋانىت ماشىنا ئۈگىنىش
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="hidden md:flex space-x-6">
                  {roadmap.slice(0, 4).map(section => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`transition ${activeSection === section.id ? (darkMode ? 'text-cyan-400' : 'text-purple-600') : (darkMode ? 'text-gray-400 hover:text-cyan-300' : 'text-gray-600 hover:text-purple-500')}`}
                    >
                      {section.title.split(' ')[0]}
                    </button>
                  ))}
                  <button
                    onClick={() => setActiveSection('pricing')}
                    className={`transition ${activeSection === 'pricing' ? (darkMode ? 'text-cyan-400' : 'text-purple-600') : (darkMode ? 'text-gray-400 hover:text-cyan-300' : 'text-gray-600 hover:text-purple-500')}`}
                  >
                    باھاسى
                  </button>
                </div>
                
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-yellow-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-cyan-900/30' : 'bg-purple-100'}`}>
                  <Atom className={darkMode ? 'text-cyan-400' : 'text-purple-600'} size={40} />
                </div>
                <h1 className={`text-4xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  كىۋانىت ماشىنا ئۈگىنىش
                </h1>
              </div>
              
              <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-cyan-300' : 'text-purple-500'}`}>
                2026 - كەلگۈسى تېخنىكىلار
              </p>
              
              <p className={`text-lg mb-12 max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                بۇ يول خەرىتىسى كىۋانىت ماشىنا ئۈگىنىش ساھەسىدىكى تولۇق ئۆگىنىش يولىنى كۆرسىتىدۇ.
                نەزەرىيە ۋە ئەمەلىيەتنى بىرلەشتۈرۈپ، كەلگۈسى تېخنىكىلارنى ئىگىلەڭ.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setActiveSection('prerequisites')}
                  className={`px-8 py-3 rounded-lg font-bold transition ${darkMode ? 'bg-cyan-600 hover:bg-cyan-700' : 'bg-purple-600 hover:bg-purple-700'} text-white`}
                >
                  يول خەرىتىسىنى كۆرۈش
                </button>
                <button
  onClick={handleGoogleForm}
  className={`px-8 py-3 rounded-lg font-bold border transition ${darkMode ? 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10' : 'border-purple-500 text-purple-600 hover:bg-purple-50'}`}
>
  ھازىر تىزىملىتىڭ
</button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          {/* Pricing Section */}
          {activeSection === 'pricing' && (
            <div className={`mb-12 p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'}`}>
              <div className="flex items-center justify-center mb-8">
                <DollarSign className={`mr-3 ${darkMode ? 'text-cyan-400' : 'text-purple-600'}`} size={32} />
                <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  ئوقۇش ھەققى ۋە ئېتىبارلار
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {discounts.map((discount, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-lg ${darkMode ? 'bg-cyan-900/30' : 'bg-purple-100'}`}>
                        {discount.icon}
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                          {discount.type}
                        </h3>
                        <p className={`text-2xl font-bold mt-2 ${darkMode ? 'text-cyan-400' : 'text-purple-600'}`}>
                          {discount.amount}
                        </p>
                      </div>
                    </div>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {discount.desc}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-800' : 'bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200'}`}>
                <div className="text-center">
                  <div className="mb-4">
                    <span className={`text-2xl line-through mr-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      ${pricing.original}
                    </span>
                    <span className={`text-4xl font-bold ${darkMode ? 'text-cyan-400' : 'text-purple-600'}`}>
                      ${pricing.finalPrice}
                    </span>
                    <span className={`ml-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                      ({pricing.discount * 100}% ئېتىبار)
                    </span>
                  </div>
                  
                  <div className="space-y-4 max-w-2xl mx-auto">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                      <h4 className={`font-bold mb-2 ${darkMode ? 'text-cyan-300' : 'text-purple-600'}`}>
                        💳 ھەق تۆلەش ئۇسۇللىرى:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <div className="font-bold">Cryptocurrency</div>
                          <div className="text-sm mt-1">BTC, ETH, USDT</div>
                        </div>
                        <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <div className="font-bold">ئامېرىكا دوللىرى</div>
                          <div className="text-sm mt-1">Western Union</div>
                        </div>
                        <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <div className="font-bold">ئۇيغۇرچە ھەق تۆلەش</div>
                          <div className="text-sm mt-1">ئالاقىلىشىڭ</div>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setActiveSection('register')}
                      className={`w-full py-4 rounded-lg font-bold text-lg transition ${darkMode ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700' : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'} text-white`}
                    >
                      ھازىر تىزىملىتىڭ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Roadmap Navigation */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {roadmap.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeSection === section.id 
                    ? (darkMode ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white' : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white')
                    : (darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300')
                  }`}
                >
                  {section.title.split(' ')[0]}
                </button>
              ))}
              <button
                onClick={() => setActiveSection('pricing')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeSection === 'pricing'
                  ? (darkMode ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white' : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white')
                  : (darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300')
                }`}
              >
                باھاسى
              </button>
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className={`mb-12 p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'}`}>
            <h2 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-cyan-300' : 'text-purple-600'}`}>
              🎓 ئاخىرقى نەتىجە (Final Outcome)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningOutcomes.map((outcome, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-cyan-900/30' : 'bg-purple-100'}`}>
                      <ChevronRight className={darkMode ? 'text-cyan-400' : 'text-purple-600'} size={16} />
                    </div>
                    <span className={darkMode ? 'text-gray-200' : 'text-gray-700'}>
                      {outcome}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Section Details */}
          <div className="mb-12">
            {roadmap.map(section => (
              section.id === activeSection && (
                <div key={section.id} className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'}`}>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${section.color}`}>
                        {section.icon}
                      </div>
                      <h2 className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {section.title}
                      </h2>
                    </div>
                    <span className={`px-4 py-1 rounded-full text-sm font-bold ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                      {section.id === 'prerequisites' ? 'مۇھىم' : 
                       section.id === 'classical-ml' ? 'ئاساس' :
                       section.id === 'advanced-research' ? 'ئالىي' : 'ئوتتۇرا'}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {section.topics.map((topic, index) => (
                      <div key={index} className="space-y-4">
                        <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-purple-600'}`}>
                          {topic.category}
                        </h3>
                        <ul className="space-y-3">
                          {topic.items.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <ChevronRight className={`mt-1 mr-2 ${darkMode ? 'text-cyan-400' : 'text-purple-500'}`} size={16} />
                              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                        {topic.goal && (
                          <div className={`mt-4 p-4 rounded-lg ${darkMode ? 'bg-cyan-900/20 border border-cyan-800' : 'bg-purple-50 border border-purple-200'}`}>
                            <p className={`font-bold mb-1 ${darkMode ? 'text-cyan-300' : 'text-purple-600'}`}>
                              📌 مەقسەت:
                            </p>
                            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                              {topic.goal}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Registration Form */}
          <div id="register" className={`mb-12 p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'}`}>
            <div className="flex items-center justify-center mb-8">
              <Mail className={`mr-3 ${darkMode ? 'text-cyan-400' : 'text-purple-600'}`} size={32} />
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                تىزىملىتىش
              </h2>
            </div>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${darkMode ? 'bg-cyan-900/30' : 'bg-purple-100'}`}>
                  <Mail className={darkMode ? 'text-cyan-400' : 'text-purple-600'} size={40} />
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-cyan-400' : 'text-purple-600'}`}>
                  مۇۋەپپەقىيەتلىك تىزىملاندىڭىز!
                </h3>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  تىزىملاتقانلىقىڭىز ئۈچۈن رەھمەت. سىزگە تېخىمۇ كۆپ ئۇچۇر
                  ئېلېكترونلۇق خەت ئارقىلىق يوللىنىدۇ.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      ئىسمىڭىز
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg transition ${darkMode ? 'bg-gray-700 border-gray-600 text-white focus:border-cyan-500 focus:ring-cyan-500/20' : 'bg-white border-gray-300 text-gray-800 focus:border-purple-500 focus:ring-purple-500/20'} border focus:outline-none focus:ring-2`}
                      placeholder="ئىسمىڭىزنى كىرگۈزۈڭ"
                    />
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      ئېلېكترونلۇق خەت
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg transition ${darkMode ? 'bg-gray-700 border-gray-600 text-white focus:border-cyan-500 focus:ring-cyan-500/20' : 'bg-white border-gray-300 text-gray-800 focus:border-purple-500 focus:ring-purple-500/20'} border focus:outline-none focus:ring-2`}
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Telegram ID
                    </label>
                    <input
                      type="text"
                      name="telegram"
                      value={formData.telegram}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg transition ${darkMode ? 'bg-gray-700 border-gray-600 text-white focus:border-cyan-500 focus:ring-cyan-500/20' : 'bg-white border-gray-300 text-gray-800 focus:border-purple-500 focus:ring-purple-500/20'} border focus:outline-none focus:ring-2`}
                      placeholder="@username"
                    />
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      WhatsApp نومۇرى
                    </label>
                    <input
                      type="text"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg transition ${darkMode ? 'bg-gray-700 border-gray-600 text-white focus:border-cyan-500 focus:ring-cyan-500/20' : 'bg-white border-gray-300 text-gray-800 focus:border-purple-500 focus:ring-purple-500/20'} border focus:outline-none focus:ring-2`}
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      تەجرىبە سەۋىيەڭىز
                    </label>
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg transition ${darkMode ? 'bg-gray-700 border-gray-600 text-white focus:border-cyan-500 focus:ring-cyan-500/20' : 'bg-white border-gray-300 text-gray-800 focus:border-purple-500 focus:ring-purple-500/20'} border focus:outline-none focus:ring-2`}
                    >
                      <option value="beginner">باشلانغۇچ - يېڭى باشلاۋاتقان</option>
                      <option value="intermediate">ئوتتۇرا - بىر قەدەر بىلىم بار</option>
                      <option value="advanced">ئالىي - كەسپىي تەجرىبە بار</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      پروگراممىلاش تەجرىبىڭىز
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows={3}
                      className={`w-full px-4 py-3 rounded-lg transition ${darkMode ? 'bg-gray-700 border-gray-600 text-white focus:border-cyan-500 focus:ring-cyan-500/20' : 'bg-white border-gray-300 text-gray-800 focus:border-purple-500 focus:ring-purple-500/20'} border focus:outline-none focus:ring-2`}
                      placeholder="پروگراممىلاش تەجرىبىڭىزنى بايان قىلىڭ..."
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      تەۋسىيە قىلغۇچى (ئىختىيارى)
                    </label>
                    <input
                      type="text"
                      name="referral"
                      value={formData.referral}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg transition ${darkMode ? 'bg-gray-700 border-gray-600 text-white focus:border-cyan-500 focus:ring-cyan-500/20' : 'bg-white border-gray-300 text-gray-800 focus:border-purple-500 focus:ring-purple-500/20'} border focus:outline-none focus:ring-2`}
                      placeholder="باشقا ئوقۇغۇچىنىڭ ئىسمى"
                    />
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      ھەق تۆلەش ئۇسۇلى
                    </label>
                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg transition ${darkMode ? 'bg-gray-700 border-gray-600 text-white focus:border-cyan-500 focus:ring-cyan-500/20' : 'bg-white border-gray-300 text-gray-800 focus:border-purple-500 focus:ring-purple-500/20'} border focus:outline-none focus:ring-2`}
                    >
                      <option value="crypto">Cryptocurrency (BTC/ETH/USDT)</option>
                      <option value="western">Western Union (ئامېرىكا دوللىرى)</option>
                      <option value="other">باشقا ئۇسۇل (ئالاقىلىشىمىز)</option>
                    </select>
                  </div>
                </div>
                
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-cyan-900/20 border border-cyan-800' : 'bg-purple-50 border border-purple-200'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                      ئوقۇش ھەققى:
                    </span>
                    <div className="text-right">
                      <span className={`text-2xl font-bold ${darkMode ? 'text-cyan-400' : 'text-purple-600'}`}>
                        ${pricing.finalPrice}
                      </span>
                      <span className={`ml-2 text-sm line-through ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        ${pricing.original}
                      </span>
                    </div>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    ✅ {pricing.discount * 100}% ئېتىبار (دەرس باشلانغۇچە)
                  </p>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className={`px-12 py-4 rounded-lg font-bold text-lg transition-all ${darkMode ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 active:scale-95' : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 active:scale-95'} text-white`}
                  >
                    تىزىملىتىشنى تاماملاڭ
                  </button>
                  <p className={`mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    تىزىملىتىشنى باسقاندىن كېيىن، Google Form ۋە ئېلېكترونلۇق خەت ئارقىلىق تېخىمۇ كۆپ ئۇچۇر ئېلىپ بېرىلىدۇ
                  </p>
                </div>
              </form>
            )}
            
            {/* Payment Information Modal */}
            {showPaymentInfo && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className={`max-w-md w-full p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ھەق تۆلەش ئۇچۇرلىرى
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className={`font-bold mb-2 ${darkMode ? 'text-cyan-300' : 'text-purple-600'}`}>
                        Cryptocurrency:
                      </h4>
                      <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <p className="font-mono break-all">BTC: bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</p>
                        <p className="font-mono break-all mt-2">ETH: 0x71C7656EC7ab88b098defB751B7401B5f6d8976F</p>
                      </div>
                    </div>
                    <div>
                      <h4 className={`font-bold mb-2 ${darkMode ? 'text-cyan-300' : 'text-purple-600'}`}>
                        ئالاقە ئۇچۇرى:
                      </h4>
                      <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <p>ئېلېكترونلۇق خەت: kelbil.tech@gmail.com</p>
                        <p className="mt-2">Telegram: @kelbil_tech</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowPaymentInfo(false)}
                    className={`mt-6 w-full py-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                  >
                    تاقاش
                  </button>
                </div>
              </div>
            )}
            
            {/* Contact Links */}
            <div className={`mt-12 pt-12 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-xl font-bold mb-6 text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                ئالاقە ئۇلىنىشلىرى
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                  <Zap className={darkMode ? 'text-cyan-400' : 'text-purple-600'} />
                  <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    QML 2026
                  </span>
                </div>
                <p className={`max-w-md ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  كەلگۈسى تېخنىكىلارنى ئۆگىنىش يول خەرىتىسى.
                  كىۋانىت ماشىنا ئۈگىنىش ساھەسىدە ئەمەلىي قابىلىيەت يېتىلدۈرۈش.
                </p>
              </div>
              
              <div className="text-center">
                <h4 className={`text-lg font-bold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  مۇھىم ئۇچۇرلار
                </h4>
                <div className="space-y-2">
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    📅 باشلاش: 2026-يىلى 4-ئاينىڭ 1-كۈنى
                  </p>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    ⏰ ۋاقىت: دۇشەنبە-چارشەنبە، جۇمە 23:00-22:00
                  </p>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    💰 قىممەت: ${pricing.finalPrice} (${pricing.original} دىن {pricing.discount * 100}% ئېتىبار)
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`mt-12 pt-8 border-t text-center ${darkMode ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-400'}`}>
              <p>© 2026 كىۋانىت ماشىنا ئۈگىنىش (QML) | تېخنىكا KeLBiL</p>
              <p className="mt-2">ئېلېكترونلۇق خەت: kelbil.tech@gmail.com | Telegram: @kelbil_tech</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Uyghur Wisdom Quote */}
      <div className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-lg rounded-xl p-4 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-xl`}>
        <div className="flex items-start space-x-3">
          <div className={`p-2 rounded-lg ${darkMode ? 'bg-amber-900/30' : 'bg-amber-100'}`}>
            <Coffee className={darkMode ? 'text-amber-400' : 'text-amber-600'} size={20} />
          </div>
          <div>
            <p className={`text-sm italic ${darkMode ? 'text-amber-300' : 'text-amber-700'}`}>
              "ئىلىم-پەن دېگەن دەريا، چوڭقۇرلۇقىنى ئارىلاپ ئۆلچەيدۇ. كىۋانىت ماشىنا ئۈگىنىش دەرياسىنىڭ ئەڭ چوڭقۇر جايىدۇر..."
            </p>
          </div>
        </div>
      </div>

      {/* Ad Banner at Bottom */}
      <div className={`fixed bottom-0 left-0 right-0 ${darkMode ? 'bg-gradient-to-r from-cyan-900/80 to-blue-900/80' : 'bg-gradient-to-r from-purple-600 to-indigo-600'} text-white py-3 px-4 z-40`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-2 md:mb-0">
            <span className="font-bold">🚀 ئەڭ يۇقىرى چېكىم 20%! </span>
            <span>ھازىر تىزىملىتىڭ - ${pricing.finalPrice} غىنا (${pricing.original} دىن)</span>
          </div>
          <button
            onClick={() => setActiveSection('register')}
            className={`px-6 py-2 rounded-lg font-bold ${darkMode ? 'bg-white text-cyan-700 hover:bg-gray-100' : 'bg-white text-purple-700 hover:bg-gray-100'}`}
          >
            ھازىر تىزىملىتىڭ
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantumRoadmap2026;