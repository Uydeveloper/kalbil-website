import React, { useState, useEffect, useRef } from 'react';
import { 
  Cloud, Cpu, Brain, Map, Building2, Car, 
  Stethoscope, Camera, Globe, Code, Database,
  BarChart3, Layers, Cctv, Smartphone, Zap,
  TrendingUp, Target, Shield, Users, Rocket,
  ChevronRight, Play, Pause, Maximize2, Download,
  Star, Award, Lightbulb, RefreshCw, Share2,
  GitBranch, Wifi, Battery, Satellite, RotateCw,
  FileCode, Terminal, Package, Server, DatabaseZap,
  ScanEye, Grid3x3, Cube, Box, CloudCog 
} from 'lucide-react';

const PointCloudD = () => {
  const [activeTab, setActiveTab] = useState('definition');
  const [animationPlaying, setAnimationPlaying] = useState(true);
  const [progress] = useState(75);
  const [particleCount, setParticleCount] = useState(500);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // ئىستىل (Styles)
  const styles = {
    container: {
      direction: 'rtl',
      fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: '#f8fafc',
      padding: '0 1rem',
      overflowX: 'hidden',
    },
    header: {
      textAlign: 'center',
      padding: '4rem 1rem 3rem',
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderRadius: '0 0 2rem 2rem',
      marginBottom: '2rem',
      position: 'relative',
      overflow: 'hidden',
    },
    title: {
      fontSize: '3.5rem',
      background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1rem',
      fontWeight: 'bold',
      letterSpacing: '1px',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    },
    subtitle: {
      fontSize: '1.4rem',
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
      fontSize: '2.2rem',
      color: '#f1f5f9',
      marginBottom: '2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      borderBottom: '3px solid rgba(59, 130, 246, 0.3)',
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
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
      borderColor: '#3b82f6',
      color: '#fff',
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 25px rgba(59, 130, 246, 0.2)',
    },
    featureCard: {
      background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))',
      borderRadius: '1.2rem',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      height: '100%',
      transition: 'all 0.4s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    progressBar: {
      height: '8px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '4px',
      overflow: 'hidden',
      marginTop: '1rem',
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
      borderRadius: '4px',
      transition: 'width 0.5s ease',
    },
    codeBlock: {
      background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
      borderRadius: '1rem',
      padding: '2rem',
      fontFamily: 'monospace',
      direction: 'ltr',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    button: {
      background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
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
      boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
    },
  };

  // 3D نۇقتا بۇلۇت ئانىماتسىيەسى
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    let particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * rect.width;
        this.y = Math.random() * rect.height;
        this.z = Math.random() * 300;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.speedZ = (Math.random() - 0.5) * 0.5;
        this.color = `hsla(${Math.random() * 60 + 200}, 70%, 60%, ${Math.random() * 0.5 + 0.3})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.z += this.speedZ;

        if (this.x > rect.width) this.x = 0;
        if (this.x < 0) this.x = rect.width;
        if (this.y > rect.height) this.y = 0;
        if (this.y < 0) this.y = rect.height;
        if (this.z > 300) this.z = 0;
        if (this.z < -100) this.z = 300;
      }

      draw() {
        const scale = 300 / (this.z + 300);
        const x = this.x + (this.x - rect.width / 2) * scale * 0.5;
        const y = this.y + (this.y - rect.height / 2) * scale * 0.5;
        const radius = this.size * scale;

        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();

        // نورمال خەت
        if (radius > 1) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.lineWidth = 0.5;
          ctx.moveTo(x, y);
          ctx.lineTo(x + radius * 2, y);
          ctx.stroke();
        }
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!animationPlaying) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      
      // ئارقا كۆرۈنۈش
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      // گرادىيېنت
      const gradient = ctx.createRadialGradient(
        rect.width / 2, rect.height / 2, 0,
        rect.width / 2, rect.height / 2, rect.width / 2
      );
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.05)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // نۇقتىلار ئارىسىدىكى خەتلەر
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 0.3;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 50) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [animationPlaying, particleCount]);

  // تارقىتىش فۇنكسىيەسى
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'نۇقتا بۇلۇت سانلىق مەلۇماتى - كەسپىي ئۆگىنىش يول يېتەكچىسى',
        text: '3D نۇقتا بۇلۇت تېخنىكىسى ھەققىدە تولۇق ئۆگىنىش ماتېرىيالى',
        url: window.location.href
      });
    } else {
      alert('تارقىتىش ئىقتىدارى قوللىنىلمايدۇ. ئۇلىنىشنى كۆچۈرۈڭ: ' + window.location.href);
    }
  };

  // پارتىكۇل سانىنى ئۆزگەرتىش
  const handleParticleChange = (count) => {
    setParticleCount(count);
  };

  // ئىشلىتىش ساھەلىرى
  const applications = [
    {
      icon: <Car size={32} />,
      title: 'ئۆز-ئاپتوموبىل سانلىق مەلۇماتى',
      description: 'تېسلا، وەيمو قاتارلىق شىركەتلەر لىدار ئارقىلىق نۇقتا بۇلۇت يىغىپ، ئاپتوموبىللارنىڭ ئەتراپنى تونۇش سىستېمىسىنى قۇرىدۇ',
      stats: '2030-يىلغا قەدەر 800 مىليارد دوللار بازار',
      color: '#3b82f6',
      iconBg: 'rgba(59, 130, 246, 0.1)',
    },
    {
      icon: <Building2 size={32} />,
      title: 'ئىنژېنېرلىق ۋە قۇرۇلۇش',
      description: 'يۇقىرى بىنالار، كۆۋرۈكلەرنىڭ 3D سىكانىرى، قۇرۇلۇش پىلانى ۋە خەتەرنى بايقاش',
      stats: 'خاڭجو كۆۋرىكى مىسالى',
      color: '#10b981',
      iconBg: 'rgba(16, 185, 129, 0.1)',
    },
    {
      icon: <Stethoscope size={32} />,
      title: 'مېدىتسىنا ۋە ساغلاملىق',
      description: 'MRI ۋە CT سىكانلاش نەتىجىسىدىن 3D نۇقتا بۇلۇت ھاسىل قىلىپ، ئۆسمىلەرنى تەھلىل قىلىش',
      stats: 'يۈرەك ئۆسمىسى جراحىيە پىلانى',
      color: '#ef4444',
      iconBg: 'rgba(239, 68, 68, 0.1)',
    },
    {
      icon: <Camera size={32} />,
      title: 'رەقەملىك ئەسەرلەر',
      description: 'قەدىمىي ئەسەرلەرنى 3D سىكانلاش ئارقىلىق رەقەملىك ئارخىپ قۇرۇش',
      stats: 'پارىژ "نوتر دام" چىرايۋانى مودېلى',
      color: '#8b5cf6',
      iconBg: 'rgba(139, 92, 246, 0.1)',
    },
    {
      icon: <Globe size={32} />,
      title: 'مېتافېرس',
      description: 'ھەقىقىي دۇنيا مۇھىتىنى 3D سىكانلاش ئارقىلىق مېتافېرس ئىچىدە قايتا قۇرۇش',
      stats: '2030-يىلغا قەدەر 5 تريليون دوللار بازار',
      color: '#f59e0b',
      iconBg: 'rgba(245, 158, 11, 0.1)',
    },
    {
      icon: <Cctv size={32} />,
      title: 'ئاقىللىق شەھەر',
      description: 'تۇرالغۇ، يول، مۇلازىمەت تورلىرىنىڭ 3D مودېللىرى ۋە باشقۇرۇش',
      stats: 'دۇنياۋى ئىشەنچلىك تور سىستېمىسى',
      color: '#6366f1',
      iconBg: 'rgba(99, 102, 241, 0.1)',
    },
  ];

  // پايدىلار
  const advantages = [
    { icon: <Target size={24} />, title: 'ئېنىقلىق يۇقىرى', desc: 'مىللىمېتىر دەرىجىسىدە ئېنىق 3D ئۇچۇر' },
    { icon: <Layers size={24} />, title: 'كۆرۈنمەيدىغان قۇرۇلۇشنى كۆرسىتىدۇ', desc: 'ئىچكى قۇرۇلۇش ياكى تەبىئىي شەكىللەرنى رەسىمگە ئالالايدۇ' },
    { icon: <Brain size={24} />, title: 'ئاپتوماتىك تەھلىل', desc: 'AI بىلەن بىرلەشتۈرۈلگەندە ئۆزىدىن ئۆزگىرىش ۋە زىيان بايقاش' },
    { icon: <Zap size={24} />, title: 'ۋاقىت تېجەيدۇ', desc: 'ئەنئەنىۋى ئۆلچەش ئۇسۇلىدىن تېز ۋە ئىشچىل' },
    { icon: <Database size={24} />, title: 'كۆپ خىل ئۇچۇر', desc: 'رەڭ، كۈچلۈكلۈك، نورمال ۋېكتور قاتارلىق ئۇچۇرلارنى ئۆز ئىچىگە ئالىدۇ' },
    { icon: <BarChart3 size={24} />, title: 'سانلىق مەلۇمات تەھلىلى', desc: 'كەڭ دائىرىلىك سانلىق مەلۇمات تەھلىلى ۋە سېلىشتۇرۇش' },
  ];

  // ئۆگىنىش يول خەرىتىسى
  const roadmap = [
    { step: 1, title: 'ئاساسىي نەزەرىيە', desc: '3D گېئومېتىرىيە، كوئوردىنات سىستېمىسى', icon: <Box size={24} /> },
    { step: 2, title: 'سانلىق مەلۇمات فورماتى', desc: 'PLY, LAS, XYZ, PCD فورماتلىرى', icon: <FileCode size={24} /> },
    { step: 3, title: 'ئالاھىدە ئۈسكۈنىلەر', desc: 'LiDAR, Depth Camera (Kinect, RealSense)', icon: <ScanEye size={24} /> },
    { step: 4, title: 'كۆرسىتىش ئىقتىدارى', desc: 'Python (Open3D, PyVista), JavaScript', icon: <Terminal size={24} /> },
    { step: 5, title: 'پىروسېسلاش ئۇسۇلى', desc: 'Downsampling, Denoising, Registration', icon: <Package size={24} /> },
    { step: 6, title: 'ماشىنا ئۆگىنىش', desc: 'PointNet, PointCNN، چوڭقۇر ئۆگىنىش', icon: <Brain size={24} /> },
    { step: 7, title: 'دۇنياۋى قۇرۇلما', desc: 'ROS، Cloud Platforms (AWS Point Cloud)', icon: <Server size={24} /> },
  ];

  // تېخنىكىلىق كود مىسالى
  const codeExamples = [
    {
      language: 'Python',
      title: 'Open3D بىلەن نۇقتا بۇلۇت كۆرسىتىش',
      code: `import open3d as o3d
import numpy as np

# نۇقتا بۇلۇت ياساش
points = np.random.rand(10000, 3)
pcd = o3d.geometry.PointCloud()
pcd.points = o3d.utility.Vector3dVector(points)

# رەڭ بېرىش
colors = np.random.rand(10000, 3)
pcd.colors = o3d.utility.Vector3dVector(colors)

# كۆرسىتىش
o3d.visualization.draw_geometries([pcd])

# نۇقتا بۇلۇت تەڭشەش
downsampled = pcd.voxel_down_sample(voxel_size=0.05)
denoised, _ = pcd.remove_statistical_outlier(nb_neighbors=20, std_ratio=2.0)`
    },
    {
      language: 'JavaScript',
      title: 'Three.js بىلەن 3D كۆرسىتىش',
      code: `import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// سەھنە قۇرۇش
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

// نۇقتا بۇلۇت ياساش
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array(10000 * 3);
for (let i = 0; i < 10000 * 3; i++) {
    vertices[i] = (Math.random() - 0.5) * 10;
}
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

const material = new THREE.PointsMaterial({ 
    color: 0x3498db, 
    size: 0.05,
    transparent: true 
});
const pointCloud = new THREE.Points(geometry, material);
scene.add(pointCloud);

// كونترول قىلىش
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;`
    }
  ];

  // تېب مەزمۇنلىرى
  const tabContents = {
    definition: (
      <div>
        <h2 style={styles.sectionTitle}>
          <Target size={32} color="#3b82f6" />
          نۇقتا بۇلۇت نېمە؟ / What is a Point Cloud?
        </h2>
        <div style={{ lineHeight: '1.9', fontSize: '1.1rem' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            <strong>نۇقتا بۇلۇت</strong> دېگىنىمىز — 3D دائىرىدىكى ھەر بىر نۇقتىنىڭ (x, y, z) كوئوردىناتى بىلەن بىرگە،
            قوشۇمچە ئۇچۇرلارنى (مەسىلەن: رەڭ، نۇر ياكى نورمال يۆنىلىش) ئۆز ئىچىگە ئالغان سانلىق مەلۇمات گۇرۇپپىسىدۇر.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            ھەر بىر <strong>نۇقتا بۇلۇت</strong> 3D فەزادىكى مەلۇمات نۇقتىلىرى توپىمى بولۇپ، ئادەتتە بىر نەرسىنىڭ ياكى مۇھىتنىڭ سىرتىقى يۈزىنى كۆرسىتىدۇ.
            ھەر بىر نۇقتا كوئوردىناتلار (x, y, z) گە ئىگە، شۇنداقلا رەڭ (RGB)، كۈچلۈكلۈك، نورمال ۋېكتور ياكى ۋاقىت بەلگىسىنىمۇ ئۆز ئىچىگە ئالىدۇ.
          </p>
          <div style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
            padding: '1.5rem',
            borderRadius: '1rem',
            borderRight: '4px solid #3b82f6',
            marginTop: '2rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Satellite size={24} color="#3b82f6" />
              <strong style={{ color: '#3b82f6', fontSize: '1.2rem' }}>🔍 مىسال:</strong>
            </div>
            <p style={{ color: '#cbd5e1', margin: 0 }}>
              لىدار (LiDAR) قۇرۇلمىسى بىلەن ئېلىنغان شەھەر ۋە يەر شەكلى 3D مودېلى — نۇقتا بۇلۇت ھېسابلىنىدۇ.
              بۇ تېخنىكا ئارقىلىق بىنالارنىڭ ئېگىزلىكى، يوللارنىڭ كەڭلىكى ۋە يەر شەكىلىنىڭ تەپسىلاتلىرىنى ئۆلچەش مۇمكىن.
            </p>
          </div>
        </div>
      </div>
    ),
    applications: (
      <div>
        <h2 style={styles.sectionTitle}>
          <Map size={32} color="#3b82f6" />
          ئىشلىتىش ساھەلىرى / Application Areas
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2rem',
          marginTop: '2rem',
        }}>
          {applications.map((app, index) => (
            <div
              key={index}
              style={{
                ...styles.featureCard,
                background: `linear-gradient(135deg, ${app.iconBg}, rgba(15, 23, 42, 0.9))`,
                borderLeft: `4px solid ${app.color}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = `0 25px 50px ${app.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  background: app.iconBg,
                  padding: '0.8rem',
                  borderRadius: '0.8rem',
                  border: `2px solid ${app.color}`,
                }}>
                  {app.icon}
                </div>
                <h3 style={{ margin: 0, fontSize: '1.4rem', color: '#f1f5f9' }}>
                  {app.title}
                </h3>
              </div>
              <p style={{ color: '#cbd5e1', marginBottom: '1rem', lineHeight: '1.7' }}>
                {app.description}
              </p>
              <div style={{
                background: 'rgba(0, 0, 0, 0.2)',
                padding: '0.8rem',
                borderRadius: '0.6rem',
                borderRight: `3px solid ${app.color}`,
              }}>
                <strong style={{ color: app.color }}>📈 سانلىق مەلۇمات:</strong>{' '}
                <span style={{ color: '#cbd5e1' }}>{app.stats}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    advantages: (
      <div>
        <h2 style={styles.sectionTitle}>
          <TrendingUp size={32} color="#3b82f6" />
          ئىشلىتىشنىڭ پايدىلىرى / Advantages
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem',
        }}>
          {advantages.map((adv, index) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))',
                padding: '1.5rem',
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', width: '100%', justifyContent: 'flex-end' }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#f1f5f9', textAlign: 'right' }}>
                  {adv.title}
                </h3>
                <div style={{ color: '#3b82f6' }}>
                  {adv.icon}
                </div>
              </div>
              <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.95rem', textAlign: 'right' }}>
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
    roadmap: (
      <div>
        <h2 style={styles.sectionTitle}>
          <Rocket size={32} color="#3b82f6" />
          ئۆگىنىش يول خەرىتىسى / Learning Roadmap
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '2rem',
        }}>
          {roadmap.map((step, index) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))',
                padding: '2rem',
                borderRadius: '1.2rem',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(59, 130, 246, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
              }}>
                {step.step}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', justifyContent: 'flex-end' }}>
                <h3 style={{ 
                  margin: 0, 
                  fontSize: '1.3rem', 
                  color: '#f1f5f9',
                  textAlign: 'right',
                }}>
                  {step.title}
                </h3>
                <div style={{ color: '#3b82f6' }}>
                  {step.icon}
                </div>
              </div>
              <p style={{ 
                margin: 0, 
                color: '#cbd5e1', 
                textAlign: 'right',
                lineHeight: '1.7',
                fontSize: '0.95rem',
              }}>
                {step.desc}
              </p>
              <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '100%',
                height: '3px',
                background: `linear-gradient(90deg, transparent, #3b82f6)`,
              }} />
            </div>
          ))}
        </div>
      </div>
    ),
    code: (
      <div>
        <h2 style={styles.sectionTitle}>
          <Code size={32} color="#3b82f6" />
          كود مىساللىرى / Code Examples
        </h2>
        <div style={{ marginTop: '2rem' }}>
          {codeExamples.map((example, index) => (
            <div key={index} style={{ marginBottom: '2rem' }}>
              <div style={{
                background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                padding: '1rem 1.5rem',
                borderTopRightRadius: '1rem',
                borderTopLeftRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}>
                <Code size={20} color="#3b82f6" />
                <h3 style={{ margin: 0, color: '#f1f5f9' }}>
                  {example.language}: {example.title}
                </h3>
              </div>
              <div style={styles.codeBlock}>
                <pre style={{ 
                  margin: 0, 
                  color: '#93c5fd',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  overflowX: 'auto',
                }}>
                  {example.code}
                </pre>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  display: 'flex',
                  gap: '0.5rem',
                }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    future: (
      <div>
        <h2 style={styles.sectionTitle}>
          <Lightbulb size={32} color="#3b82f6" />
          كەلگۈسى ئىستىقبالى / Future Prospects
        </h2>
        <div style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
          padding: '2rem',
          borderRadius: '1rem',
          marginTop: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ color: '#f1f5f9', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem', justifyContent: 'flex-end' }}>
                <span>ئەقلىي ئاپتوموبىل سىستېمىسى</span>
                <Car size={24} color="#3b82f6" />
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.7', textAlign: 'right' }}>
                پۈتۈن دۇنيا بازارى 2030-يىلغا قەدەر 800 مىليارد دوللارغا يېتىدۇ
              </p>
            </div>
            <div>
              <h3 style={{ color: '#f1f5f9', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem', justifyContent: 'flex-end' }}>
                <span>رەقەملىك قوشۇمچە ھەقىقىيەت</span>
                <Smartphone size={24} color="#8b5cf6" />
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.7', textAlign: 'right' }}>
                ساغلاملىق، مائارىپ، كەسپىي مەشغۇلاتلاردا كەڭ قوللىنىلىدۇ
              </p>
            </div>
            <div>
              <h3 style={{ color: '#f1f5f9', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem', justifyContent: 'flex-end' }}>
                <span>ئاقىللىق شەھەر</span>
                <Building2 size={24} color="#ec4899" />
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.7', textAlign: 'right' }}>
                تۇرالغۇ، يول، مۇلازىمەت تورلىرىنىڭ 3D مودېللىرى
              </p>
            </div>
          </div>
          
          <div style={{
            background: 'rgba(0, 0, 0, 0.2)',
            padding: '1.5rem',
            borderRadius: '1rem',
            marginTop: '2rem',
            borderRight: '4px solid #10b981',
          }}>
            <h4 style={{ color: '#10b981', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <span>سانلىق مەلۇمات پەرەزلىرى</span>
              <TrendingUp size={20} />
            </h4>
            <ul style={{ color: '#cbd5e1', lineHeight: '1.8', paddingRight: '1rem', textAlign: 'right' }}>
              <li>سانلىق زىرائەتچىلىكى — مەھسۇلات تەھلىلى ۋە باشقۇرۇش</li>
              <li>سانلىق بايقالما ئىلمى — قەدىمىي ئەسەرلەرنى ساقلاش</li>
              <li>سانلىق تەبىئەت مۇھىتى — ئېكولوگىيەلىك تەكشۈرۈش</li>
              <li>سانلىق ساغلاملىق — شەخسىيلەشتۈرۈلگەن تىببىي پىلان</li>
            </ul>
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
          background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          zIndex: 0,
        }} />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={styles.title}>
            <Cloud size={48} style={{ display: 'inline-block', marginLeft: '1rem' }} />
            نۇقتا بۇلۇت سانلىق مەلۇماتى
          </h1>
          <p style={styles.subtitle}>
            Point Cloud Data — 3D دۇنيا كەسپىي ئۆگىنىش يول يېتەكچىسى
          </p>
          
          {/* ئىقتىدار تۇمشۇقلىرى */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '2rem',
            flexWrap: 'wrap',
          }}>
            <button 
              style={{
                ...styles.button,
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
              }}
              onClick={() => setAnimationPlaying(!animationPlaying)}
            >
              {animationPlaying ? <Pause size={20} /> : <Play size={20} />}
              {animationPlaying ? 'توختىتىش' : 'ئىجرا قىلىش'}
            </button>
            <button 
              style={{
                ...styles.button,
                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
              }}
              onClick={() => handleParticleChange(particleCount === 500 ? 1000 : 500)}
            >
              <RotateCw size={20} />
              {particleCount === 500 ? '1000 نۇقتا' : '500 نۇقتا'}
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

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1rem' }}>
        {/* 3D ئانىماتسىيە پانېلى */}
        <div style={{ ...styles.card, marginBottom: '3rem' }}>
          <div style={styles.sectionTitle}>
            <Cpu size={32} color="#3b82f6" />
            3D نۇقتا بۇلۇت ئانىماتسىيەسى
            <span style={{ 
              fontSize: '1rem', 
              color: '#cbd5e1', 
              marginRight: 'auto',
              background: 'rgba(59, 130, 246, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Box size={16} />
              {particleCount} نۇقتا
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
                background: 'linear-gradient(135deg, #0f172a, #1e293b)',
                display: 'block',
              }}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#f1f5f9', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end' }}>
                <span>ئانىماتسىيە پارامېتىرلىرى</span>
                <Zap size={24} />
              </h3>
              <div style={styles.progressBar}>
                <div style={{ ...styles.progressFill, width: `${progress}%` }} />
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '0.5rem',
                color: '#cbd5e1',
                fontSize: '0.9rem',
                textAlign: 'right',
              }}>
                <span>ئۈچ ئۆلچەملىك ھەرىكەت</span>
                <span>رەڭلىك كۆرسىتىش</span>
                <span>ھەقىقىي ۋاقىت</span>
              </div>
            </div>
            
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#f1f5f9', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end' }}>
                <span>ئانىماتسىيە ئۇچۇرلىرى</span>
                <Brain size={24} />
              </h3>
              <ul style={{ color: '#cbd5e1', lineHeight: '1.8', paddingRight: '1rem', textAlign: 'right' }}>
                <li>ھەقىقىي ۋاقىتلىق 3D نۇقتا بۇلۇت</li>
                <li>دىنامىك رەڭ ۋە ھەرىكەت مودېلى</li>
                <li>نۇقتىلار ئارىسىدىكى باغلانغان خەتلەر</li>
                <li>GPU تەڭشەشچان كۆرسىتىش</li>
              </ul>
            </div>
          </div>
        </div>

        {/* تېبىلەر بۆلۈمى */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            display: 'flex',
            gap: '1rem',
            overflowX: 'auto',
            paddingBottom: '1rem',
            marginBottom: '2rem',
            scrollbarWidth: 'thin',
            scrollbarColor: '#3b82f6 rgba(30, 41, 59, 0.5)',
          }}>
            {[
              { id: 'definition', label: 'چۈشەندۈرۈش', icon: <Cloud size={20} /> },
              { id: 'applications', label: 'ئىشلىتىش ساھەلىرى', icon: <Map size={20} /> },
              { id: 'advantages', label: 'پايدىلار', icon: <TrendingUp size={20} /> },
              { id: 'roadmap', label: 'ئۆگىنىش يول خەرىتىسى', icon: <Rocket size={20} /> },
              { id: 'code', label: 'كود مىساللىرى', icon: <Code size={20} /> },
              { id: 'future', label: 'كەلگۈسى ئىستىقبالى', icon: <Lightbulb size={20} /> },
            ].map(tab => (
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

        {/* كەسپىي ماھارەت پانېلى */}
        <div style={{ ...styles.card, marginBottom: '3rem' }}>
          <div style={styles.sectionTitle}>
            <Award size={32} color="#f59e0b" />
            كەسپىي ماھارەت ۋە ئىمكانىيەتلەر
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
          }}>
            {[
              { skill: '3D گېئومېتىرىيە', level: 90 },
              { skill: 'سانلىق مەلۇمات پىروسېسى', level: 85 },
              { skill: 'Python/Open3D', level: 80 },
              { skill: 'JavaScript/Three.js', level: 75 },
              { skill: 'ماشىنا ئۆگىنىش', level: 70 },
              { skill: 'بۇلۇت كومپيۇتىر', level: 65 },
            ].map((item, index) => (
              <div key={index} style={{ textAlign: 'right' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>{item.level}%</span>
                  <span style={{ color: '#f1f5f9', fontWeight: 'bold' }}>{item.skill}</span>
                </div>
                <div style={styles.progressBar}>
                  <div style={{ ...styles.progressFill, width: `${item.level}%` }} />
                </div>
              </div>
            ))}
          </div>
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
          border: '1px solid rgba(255, 255, 255, 0.05)',
        }}>
          <p style={{ marginBottom: '1rem' }}>
            <strong style={{ color: '#cbd5e1' }}>© 2025 — KeLBiL Educational Resource</strong>
          </p>
          <p style={{ margin: 0 }}>
            رەقەملىك تەلىم تەربىيە ۋە زامانىۋى تېخنىكىلار
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
            <button 
              style={{ 
                ...styles.button, 
                padding: '0.8rem 1.5rem', 
                fontSize: '0.9rem',
                background: 'linear-gradient(135deg, #10b981, #059669)' 
              }}
              onClick={() => setAnimationPlaying(!animationPlaying)}
            >
              {animationPlaying ? <Pause size={16} /> : <Play size={16} />}
              {animationPlaying ? 'توختىتىش' : 'باشلاش'}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PointCloudD;