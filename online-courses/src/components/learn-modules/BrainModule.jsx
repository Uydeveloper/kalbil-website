import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, Users, Globe, Brain, Sparkles, Waveform, 
  Link, Shield, Database, Zap, Target, Lock,
  Cctv, Satellite, Wifi, Cloud, Network, 
  Activity, GitBranch, Eye, Fingerprint,
  TrendingUp, AlertTriangle, CheckCircle, 
  Play, Pause, RefreshCw, Maximize2,
  ChevronRight, ChevronLeft, Share2, Download,
  BarChart, Globe2, Cpu as CpuIcon, Brain as BrainIcon,
  Radio, Smartphone, Monitor, Server, CircuitBoard,
  Atom, Microscope, Beaker, TestTube
} from 'lucide-react';

const BrainModule = () => {
  const [activeTab, setActiveTab] = useState('BCI');
  const [animationPlaying, setAnimationPlaying] = useState(true);
  const [simulationData, setSimulationData] = useState([]);
  const [neuralNetwork, setNeuralNetwork] = useState([]);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // ئىستىل (Styles)
  const styles = {
    container: {
      direction: 'rtl',
      fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1a1e35 100%)',
      color: '#f8fafc',
      padding: '0 1rem',
    },
    header: {
      textAlign: 'center',
      padding: '4rem 1rem 3rem',
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(26, 30, 53, 0.95) 100%)',
      borderRadius: '0 0 2rem 2rem',
      marginBottom: '2rem',
      position: 'relative',
      overflow: 'hidden',
    },
    title: {
      fontSize: '3.2rem',
      background: 'linear-gradient(90deg, #8b5cf6, #3b82f6, #06b6d4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1rem',
      fontWeight: 'bold',
      letterSpacing: '1px',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    },
    subtitle: {
      fontSize: '1.3rem',
      color: '#cbd5e1',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.8',
      opacity: 0.9,
    },
    card: {
      background: 'rgba(30, 41, 59, 0.7)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1.5rem',
      padding: '2.5rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.4s ease',
      marginBottom: '2rem',
    },
    sectionTitle: {
      fontSize: '2rem',
      color: '#f1f5f9',
      marginBottom: '2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      borderBottom: '3px solid rgba(139, 92, 246, 0.3)',
      paddingBottom: '1rem',
    },
    tabButton: {
      background: 'rgba(30, 41, 59, 0.6)',
      border: '2px solid transparent',
      borderRadius: '1rem',
      padding: '1rem 2rem',
      color: '#cbd5e1',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      flexShrink: 0,
    },
    activeTab: {
      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))',
      borderColor: '#8b5cf6',
      color: '#fff',
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 25px rgba(139, 92, 246, 0.2)',
    },
    statCard: {
      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))',
      borderRadius: '1rem',
      padding: '1.5rem',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(139, 92, 246, 0.2)',
    },
    progressBar: {
      height: '6px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '3px',
      overflow: 'hidden',
      marginTop: '1rem',
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)',
      borderRadius: '3px',
      transition: 'width 0.5s ease',
    },
    button: {
      background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
      border: 'none',
      borderRadius: '2rem',
      padding: '1rem 2rem',
      color: 'white',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.8rem',
      boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)',
    },
  };

  // نېرون تورى سىمۇلاتسىيەسى
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.clientWidth * 2;
    canvas.height = canvas.clientHeight * 2;
    ctx.scale(2, 2);

    // نېرون تورى يارىتىش
    const createNeuralNetwork = () => {
      const neurons = [];
      const connections = [];
      const width = canvas.width / 2;
      const height = canvas.height / 2;

      for (let i = 0; i < 50; i++) {
        neurons.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 3 + 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, 0.8)`,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.05 + 0.02,
        });
      }

      // باغلىنىشلار
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[i].x - neurons[j].x;
          const dy = neurons[i].y - neurons[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            connections.push({
              from: i,
              to: j,
              strength: 1 - distance / 100,
            });
          }
        }
      }

      return { neurons, connections };
    };

    const { neurons, connections } = createNeuralNetwork();

    const animate = () => {
      if (!animationPlaying) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width / 2, canvas.height / 2);

      // باغلىنىشلار
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
      ctx.lineWidth = 0.5;
      
      connections.forEach(conn => {
        const from = neurons[conn.from];
        const to = neurons[conn.to];
        
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
      });

      // نېرونلار
      neurons.forEach(neuron => {
        // ھەرىكەت
        neuron.x += neuron.speedX;
        neuron.y += neuron.speedY;
        neuron.pulse += neuron.pulseSpeed;

        // چېگرا
        if (neuron.x < 0 || neuron.x > canvas.width / 2) neuron.speedX *= -1;
        if (neuron.y < 0 || neuron.y > canvas.height / 2) neuron.speedY *= -1;

        // نۇر يورۇقى
        const pulseFactor = Math.sin(neuron.pulse) * 0.5 + 0.5;
        const currentRadius = neuron.radius * (0.8 + pulseFactor * 0.4);

        // نېرون سىزىش
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = neuron.color;
        ctx.fill();

        // ئاكتىپلىك ھەلەقىسى
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, currentRadius * 2.5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 + pulseFactor * 0.2})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animationPlaying]);

  // تارقىتىش فۇنكسىيەسى
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'مېڭى-كومپيۇتېر ئارا يۈزى - كەسپىي ئۆگىنىش يول يېتەكچىسى',
        text: 'نېوروتېخنىكىنىڭ كەلگۈسى ھەققىدە تولۇق ئۆگىنىش ماتېرىيالى',
        url: window.location.href
      });
    } else {
      alert('تارقىتىش ئىقتىدارى قوللىنىلمايدۇ. ئۇلىنىشنى كۆچۈرۈڭ.');
    }
  };

  // تېبىلەر
  const tabs = [
    { id: 'BCI', label: 'مېڭى-كومپيۇتېر ئارا يۈزى', icon: <Cpu size={20} /> },
    { id: 'BBI', label: 'مېڭى-مېڭى ئارا يۈزى', icon: <Users size={20} /> },
    { id: 'BQI', label: 'مېڭى-كۋانت ئارا يۈزى', icon: <Sparkles size={20} /> },
    { id: 'applications', label: 'قوللىنىش ساھەلىرى', icon: <Target size={20} /> },
    { id: 'future', label: 'كەلگۈسى ئىستىقبالى', icon: <Globe2 size={20} /> },
  ];

  // سانلىق مەلۇماتلار
  const bciStats = [
    { label: 'Neuralink تەجرىبىلىك ئىجراسى', value: '2024', icon: <CheckCircle size={20} /> },
    { label: 'سىگنال توغرۇلۇق دەرىجىسى', value: '95%+', icon: <Activity size={20} /> },
    { label: 'ۋاقىتلىق ئوخشاشلىق', value: '<20ms', icon: <Zap size={20} /> },
    { label: 'بازار كۆلىمى 2030', value: '2.8B$', icon: <TrendingUp size={20} /> },
  ];

  const technologies = [
    { name: 'EEG', desc: 'ئېلېكتروئېنسېفالوگرافىيە', color: '#3b82f6' },
    { name: 'fNIRS', desc: 'پۇنكتىسىون نۇرلىق سېپكتروسكوپىيە', color: '#8b5cf6' },
    { name: 'ECoG', desc: 'ئېلېكتروكورتېكوگرافىيە', color: '#10b981' },
    { name: 'MEG', desc: 'ماغنىت ئېنسېفالوگرافىيە', color: '#f59e0b' },
    { name: 'fMRI', desc: 'فۇنكسىيونلىق ماغنىت رېزونانس سۈرەت', color: '#ef4444' },
  ];

  // تېب مەزمۇنلىرى
  const tabContents = {
    BCI: (
      <div>
        <h2 style={styles.sectionTitle}>
          <Cpu size={32} color="#8b5cf6" />
          مېڭى-كومپيۇتېر ئارا يۈزى (BCI)
        </h2>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            مېڭى-كومپيۇتېر ئارا يۈزى (BCI) دېگەن سۆز، <strong style={{ color: '#8b5cf6' }}>ئىنسان مېڭىسىنىڭ نېيرون سىگناللىرىنى</strong> تىزلەپ بايقاش، 
            تەھلىل قىلىش ۋە كومپيۇتېر، روبوت ياكى باشقا ئېلېكترون قۇرۇلما بىلەن ئالاقىلىشىش ئۈچۈن ئىشلىتىشنى كۆرسىتىدۇ.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            margin: '2rem 0',
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))',
              padding: '1.5rem',
              borderRadius: '1rem',
              borderRight: '4px solid #3b82f6',
            }}>
              <h3 style={{ color: '#3b82f6', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Cpu size={20} />
                قوللىنىش دائىرىسى
              </h3>
              <ul style={{ color: '#cbd5e1', lineHeight: '1.7', paddingRight: '1rem', textAlign: 'right' }}>
                <li>ئەزالىرىنى يوقىتىپ قويغان نەچچىلەرنىڭ ئالاقىلىشىشى</li>
                <li>نېرورو-روبوت كونترولى (مېڭى بىلەن روبوت قولىنى باشقۇرۇش)</li>
                <li>سىن-ۋىرتۇئال ھەقىقەت (VR/AR) دۇنياسىغا كىرىش</li>
                <li>ئۇزۇن مۇددەتلىك مېڭى ھۆججەتلىرىنى تەھلىل قىلىش</li>
              </ul>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05))',
              padding: '1.5rem',
              borderRadius: '1rem',
              borderRight: '4px solid #8b5cf6',
            }}>
              <h3 style={{ color: '#8b5cf6', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Shield size={20} />
                چەكلىمىلەر
              </h3>
              <ul style={{ color: '#cbd5e1', lineHeight: '1.7', paddingRight: '1rem', textAlign: 'right' }}>
                <li>سىگنالنىڭ تۆۋەن قوبۇل قىلىش دەرىجىسى (SNR)</li>
                <li>تاقىلىدىغان ئۈسكۈنىلەرنىڭ ئەنسىزلىقى</li>
                <li>تېخىمۇ يېتىلمايدىغان قوللىنىشچانلىق</li>
                <li>شەخسىي مەلۇمات بىخەتەرلىكى مەسىلىسى</li>
              </ul>
            </div>
          </div>
          
          <div style={{
            background: 'rgba(0, 0, 0, 0.2)',
            padding: '1.5rem',
            borderRadius: '1rem',
            marginTop: '1.5rem',
            border: '1px solid rgba(139, 92, 246, 0.2)',
          }}>
            <h4 style={{ color: '#10b981', marginBottom: '0.8rem' }}>
              🏢 تىجارەتلىك مىساللار
            </h4>
            <p style={{ margin: 0, color: '#cbd5e1' }}>
              <strong style={{ color: '#10b981' }}>Neuralink</strong>، <strong style={{ color: '#10b981' }}>Synchron</strong>، 
              <strong style={{ color: '#10b981' }}> Blackrock Neurotech</strong> قاتارلىق شىركەتلەر ئىچكى باغلىنىش 
              (invasive) ۋە سىرتقى باغلىنىش (non-invasive) BCI نى تەرەققىي قىلدۇرۇۋاتىدۇ.
            </p>
          </div>
        </div>
      </div>
    ),

    BBI: (
      <div>
        <h2 style={styles.sectionTitle}>
          <Users size={32} color="#10b981" />
          مېڭى-مېڭى ئارا يۈزى (BBI)
        </h2>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            مېڭى-مېڭى ئارا يۈزى (BBI) دېگەن تېخنىكىدا، <strong style={{ color: '#10b981' }}>بىر كىشىنىڭ مېڭى سىگنالى باشقا كىشىنىڭ مېڭىسىگە يەتكۈزۈلىدۇ</strong>. 
            بۇ «تىكىلكە-ئۇلاش» (direct brain-to-brain communication) دەپمۇ ئاتىلىدۇ.
          </p>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05))',
            padding: '1.5rem',
            borderRadius: '1rem',
            marginBottom: '1.5rem',
            borderRight: '4px solid #10b981',
          }}>
            <h3 style={{ color: '#10b981', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Link size={20} />
              تەجرىبىلىك ئۈلگىلەر
            </h3>
            <ul style={{ color: '#cbd5e1', lineHeight: '1.7', paddingRight: '1rem', textAlign: 'right' }}>
              <li><strong>ۋاشىنگتون ئۇنىۋېرسىتېتى (2013)</strong>: ئىككى كىشى ئوتتۇرىسىدا «تىل سۆزلىمەيدىكى ئالاقە»</li>
              <li><strong>جۇڭگو تەجربىلىك گۇرۇپپىسى (2019)</strong>: 3 كىشىلىك «مېڭى تورى» قۇرۇش</li>
              <li>بارلىق تەجرىبىلەر ئالامزىز-مۇندەرىجىلىك، يەنى تىجارەتكە چىققان يوق</li>
            </ul>
          </div>
          
          <div style={{
            background: 'rgba(245, 158, 11, 0.1)',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid rgba(245, 158, 11, 0.2)',
          }}>
            <h4 style={{ color: '#f59e0b', marginBottom: '0.8rem' }}>
              ⚠️ ئەخلاق مەسىلىلىرى
            </h4>
            <p style={{ margin: 0, color: '#cbd5e1' }}>
              BBI نىڭ كەلگۈسى ھەمكارلىق-زىرەكلىك (collaborative intelligence) دۇنياسىغا ئاچقۇچ بولۇشى مۇمكىن. 
              لېكىن ئوي غەيرىتى، شەخسىي مەلۇمات ھوقۇقى، نورون تېخنىكىسىنىڭ تېخى يېتىلمىگەنلىكى 
              سەۋەبلىك، مۇرەككەپ چەكلىمىلەرگە دۇچ كېلىدۇ.
            </p>
          </div>
        </div>
      </div>
    ),

    BQI: (
      <div>
        <h2 style={styles.sectionTitle}>
          <Sparkles size={32} color="#ec4899" />
          مېڭى-كۋانت ئارا يۈزى (BQI)
        </h2>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            مېڭى-كۋانت ئارا يۈزى (BQI) — بۇ <strong style={{ color: '#ec4899' }}>گىپوتېزىلىك تېخنىكا</strong> بولۇپ، 
            <strong style={{ color: '#ec4899' }}> ئىنسان مېڭىسىنىڭ نېيرون ئەمەلىيىتى بىلەن كۋانت دۆلەت</strong> 
            (quantum states) ياكى كۋانت كومپيۇتېر (QC) نىڭ ھېسابى بىرلەشكەنلىكىنى كۆزدە تۇتىدۇ.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            margin: '2rem 0',
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05))',
              padding: '1.5rem',
              borderRadius: '1rem',
              borderRight: '4px solid #8b5cf6',
            }}>
              <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>ئىلمىي ئاساس</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: '1.7', paddingRight: '1rem', textAlign: 'right' }}>
                <li>نېيروننىڭ مىكروتۇبۇللىرى (microtubules) دا كۋانت ھالەت بارمۇ؟</li>
                <li>Penrose-Hameroff «Orch-OR» نەزەرىيىسى</li>
                <li>ھازىر تېخى تەجرىبە دەلىللىرى يوق</li>
              </ul>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))',
              padding: '1.5rem',
              borderRadius: '1rem',
              borderRight: '4px solid #3b82f6',
            }}>
              <h3 style={{ color: '#3b82f6', marginBottom: '1rem' }}>كەلگۈسىدىكى بىلەت</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: '1.7', paddingRight: '1rem', textAlign: 'right' }}>
                <li>كۋانت كومپيۇتېر ئىنسان مېڭىسى بىلەن بىرلەشىش</li>
                <li>مېڭى دۆلەتلىرىنى كۋانت كودلاش</li>
                <li>كۋانت ئاچقۇچ تارقىتىش (QKD) ئارقىلىق بىخەتەرلەش</li>
              </ul>
            </div>
          </div>
          
          <div style={{
            background: 'rgba(245, 158, 11, 0.1)',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid rgba(245, 158, 11, 0.3)',
            marginTop: '1.5rem',
          }}>
            <p style={{ margin: 0, color: '#f59e0b', fontSize: '0.95rem', textAlign: 'right' }}>
              ⚠️ ئەھمىيەت: BQI ھازىرغا قەدەر تىزىملىك ئىلمىي نەزەرىيە دەرىجىسىدە، تېخنىكىلىق ھەقىقەت ئەمەس. 
              لېكىن Google Quantum AI، IBM، ۋە يېپونىيە NICT قاتارلىق تەشكىلاتلار بۇ يۆنىلىشتە 
              باشلىنىش تەتقىقاتلىرىنى باشلىغان.
            </p>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div style={styles.container}>
      {/* باش بەت */}
      <header style={styles.header}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
          zIndex: 0,
        }} />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={styles.title}>
            <Brain size={48} style={{ display: 'inline-block', marginLeft: '1rem' }} />
            مېڭى-كومپيۇتېر ئارا يۈزى
          </h1>
          <p style={styles.subtitle}>
            نېروروتېخنىكىنىڭ كەلگۈسى: مېڭى، مېڭى-مېڭى ۋە مېڭى-كۋانت ئارا ئالاقىلىرىنىڭ ئىلمىي ئاساسى ۋە تەتقىقات دەرىجىسى
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '2rem',
            flexWrap: 'wrap',
          }}>
            <button 
              style={styles.button}
              onClick={() => setAnimationPlaying(!animationPlaying)}
            >
              {animationPlaying ? <Pause size={20} /> : <Play size={20} />}
              {animationPlaying ? 'توختىتىش' : 'باشلاش'}
            </button>
            <button 
              style={{
                ...styles.button,
                background: 'linear-gradient(135deg, #10b981, #059669)'
              }}
              onClick={handleShare}
            >
              <Share2 size={20} />
              تارقىتىش
            </button>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {/* نېرون تورى سىمۇلاتسىيەسى */}
        <div style={styles.card}>
          <div style={styles.sectionTitle}>
            <Network size={32} color="#8b5cf6" />
            نېرون تورى سىمۇلاتسىيەسى
            <span style={{ 
              fontSize: '1rem', 
              color: '#cbd5e1', 
              marginRight: 'auto',
              background: 'rgba(139, 92, 246, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Activity size={16} />
              50 نېرون | 125 باغلىنىش
            </span>
          </div>
          
          <div style={{
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '1rem',
            padding: '1rem',
            marginBottom: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}>
            <canvas 
              ref={canvasRef} 
              style={{
                width: '100%',
                height: '400px',
                borderRadius: '0.5rem',
                background: 'linear-gradient(135deg, #0f172a, #1a1e35)',
                display: 'block',
              }}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#f1f5f9', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end' }}>
                <span>سىمۇلاتسىيە پارامېتىرلىرى</span>
                <Zap size={24} />
              </h3>
              <div style={styles.progressBar}>
                <div style={{ ...styles.progressFill, width: '85%' }} />
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '0.5rem',
                color: '#cbd5e1',
                fontSize: '0.9rem',
                textAlign: 'right',
              }}>
                <span>دىنامىك باغلىنىشلار</span>
                <span>نۇر يورۇقى</span>
                <span>ھەقىقىي ۋاقىت</span>
              </div>
            </div>
          </div>
        </div>

        {/* تېخنىكىلار تونۇشتۇرۇش */}
        <div style={{
          ...styles.card,
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))',
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            color: '#f1f5f9',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
          }}>
            <Monitor size={28} color="#8b5cf6" />
            BCI تېخنىكىلىرى
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}>
            {technologies.map((tech, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(30, 41, 59, 0.6)',
                  borderRadius: '0.8rem',
                  padding: '1.2rem',
                  textAlign: 'center',
                  border: `2px solid ${tech.color}`,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 10px 25px ${tech.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: tech.color,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}>
                  {tech.name.charAt(0)}
                </div>
                <div style={{ fontWeight: 'bold', color: '#f1f5f9' }}>
                  {tech.name}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginTop: '0.3rem' }}>
                  {tech.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* تەكشۈرگۈچ تاختىسى */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            display: 'flex',
            gap: '1rem',
            overflowX: 'auto',
            paddingBottom: '1rem',
            marginBottom: '2rem',
            scrollbarWidth: 'thin',
          }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  ...styles.tabButton,
                  ...(activeTab === tab.id && styles.activeTab),
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* تېب مەزمۇنلىرى */}
          <div style={styles.card}>
            {tabContents[activeTab]}
          </div>
        </div>

        {/* سانلىق مەلۇمات پانېلى */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          {bciStats.map((stat, index) => (
            <div key={index} style={styles.statCard}>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {stat.value}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                {stat.icon}
                <span style={{ fontSize: '0.9rem' }}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ئاخىرقى ئۇچۇر */}
        <footer style={{
          textAlign: 'center',
          padding: '3rem 1rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#94a3b8',
          fontSize: '0.9rem',
          background: 'rgba(15, 23, 42, 0.5)',
          borderRadius: '1rem',
          marginBottom: '2rem',
        }}>
          <p style={{ marginBottom: '1rem' }}>
            <strong style={{ color: '#cbd5e1' }}>© 2025 — نېروروتېخنىكىلىق تەتقىقات بايانلىرى</strong>
          </p>
          <p style={{ margin: 0 }}>
            مەزمۇن: Nature Neuroscience، IEEE BCI Conference، 2023–2025
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '2rem',
            flexWrap: 'wrap',
          }}>
            <button 
              style={{ 
                ...styles.button, 
                padding: '0.8rem 1.5rem', 
                fontSize: '0.9rem',
                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' 
              }}
              onClick={handleShare}
            >
              <Share2 size={16} />
              تارقىتىش
            </button>
            <button 
              style={{ 
                ...styles.button, 
                padding: '0.8rem 1.5rem', 
                fontSize: '0.9rem',
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' 
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ChevronRight size={16} />
              يۇقىرىغا قايتىش
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BrainModule;