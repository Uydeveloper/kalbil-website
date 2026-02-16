// general-relativity-babies.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Star, Sun, Moon, Orbit, Compass, Target,
  Zap, Atom, Gravity, Circle, Triangle, Square,
  ChevronRight, ChevronLeft, Home, Maximize2,
  Minimize2, Volume2, VolumeX, Play, Pause,
  Cloud, Layers, Waves, Filter, Sparkles,
  RotateCw, Rocket, Satellite, Navigation,
  Map, Earth, Galaxy, Telescope, Planet
} from 'lucide-react';

const GeneralRelativityForBabies = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);
  const [gravityStrength, setGravityStrength] = useState(1);
  const bookRef = useRef(null);
  const audioContextRef = useRef(null);

  const totalPages = 24;

  const pages = [
    {
      title: "ئومۇمىي نىسبىيەت نەزەرىيىسى",
      subtitle: "كىچىك بالىلار ئۈچۈن",
      content: "قاۋۇلجان ئابدۇرھىم ",
      element: <CosmicScene />,
      pageNumber: 1
    },
    {
      title: "ئومۇمىي نىسبىيەت نەزەرىيىسى",
      subtitle: "كىچىك بالىلار ئۈچۈن",
      content: "ئالەمنىڭ زور سىرلىرى",
      element: <SpacetimeFabric />,
      pageNumber: 2
    },
    {
      title: "بۇ بىر توپ",
      content: "بۇ ئادەتتىكى بىر توپ",
      element: <SimpleBall />,
      pageNumber: 3
    },
    {
      title: "بۇ بىر ئېغىر توپ",
      content: "بۇ توپ ناھايىتى ئېغىر",
      element: <HeavyBall />,
      pageNumber: 4
    },
    {
      title: "ئېغىر توپ بوشلۇقنى ئېگىلەيدۇ",
      content: "ئۇ ئەتراپىدىكى بوشلۇقنى ئېگىلەيدۇ",
      element: <WarpingSpace />,
      pageNumber: 5
    },
    {
      title: "بۇ كىچىك توپ",
      content: "بۇ توپ ئېغىر توپنىڭ ئەتراپىدا",
      element: <SmallBallNearHeavy />,
      pageNumber: 6
    },
    {
      title: "كىچىك توپ ئېگىلگەن بوشلۇقتا",
      content: "ئۇ ئېگىلگەن بوشلۇقتا ئۆرلەيدۇ",
      element: <OrbitingBall />,
      pageNumber: 7
    },
    {
      title: "بۇ چوڭ كۆز",
      content: "بۇ كۆز يورۇقنى كۆرەلەيدۇ",
      element: <LightBeam />,
      pageNumber: 8
    },
    {
      title: "يورۇق ئېگىلگەن بوشلۇقتىن ئۆتەر",
      content: "يورۇق ئېگىلگەن بوشلۇقتا ئېگىلىدۇ",
      element: <BendingLight />,
      pageNumber: 9
    },
    {
      title: "بۇ ۋاقىت",
      content: "ۋاقىت ھەممە ئورۇندا ئوخشاش ئېقمايدۇ",
      element: <TimeDilation />,
      pageNumber: 10
    },
    {
      title: "ئېغىر توپنىڭ يېنىدا ۋاقىت ئاستا",
      content: "ئېغىر جىسىملار ۋاقىتنى ئاستايلايدۇ",
      element: <TimeSlowsDown />,
      pageNumber: 11
    },
    {
      title: "بۇ بىر قارا چۇڭقۇر",
      content: "ئېگىلىش بەك كۈچلۈك بولغاندا",
      element: <BlackHoleConcept />,
      pageNumber: 12
    },
    {
      title: "قارا چۇڭقۇردا ھەممە ئېگىلىدۇ",
      content: "يورۇق ھەتتا قايتالمايدۇ",
      element: <BlackHoleIntense />,
      pageNumber: 13
    },
    {
      title: "بۇ كۆكتە بىر يۇلتۇز",
      content: "يۇلتۇزلار ئېغىر توپلار",
      element: <StarGravity />,
      pageNumber: 14
    },
    {
      title: "بۇ كۆكتە بىر سەييارىە",
      content: "سەييارىلەر يۇلتۇزلارنى ئۆرلەيدۇ",
      element: <PlanetOrbit />,
      pageNumber: 15
    },
    {
      title: "بۇ كۆكتە بىر ھەلقە",
      content: "ئۇ يۇلتۇزنىڭ ئەتراپىدا ئۆرلەيدۇ",
      element: <RingsOfSaturn />,
      pageNumber: 16
    },
    {
      title: "بۇ كۆكتە بىر گالاكتىكا",
      content: "مىلياردلارچە يۇلتۇزلار",
      element: <GalaxySpiral />,
      pageNumber: 17
    },
    {
      title: "گالاكتىكىلار ئۆرلەيدۇ",
      content: "ئۇلار ئۆز ئارا تارتىشىدۇ",
      element: <GalaxiesOrbiting />,
      pageNumber: 18
    },
    {
      title: "بۇ كۆكتە گراۋىتاتسىيە دولقۇنى",
      content: "ئېغىر جىسىملار ھەرىكەت قىلغاندا",
      element: <GravitationalWaves />,
      pageNumber: 19
    },
    {
      title: "گراۋىتاتسىيە دولقۇنى تارقىلىدۇ",
      content: "ئۇ بوشلۇقتا دولقۇن سۈپىتىدە تارقىلىدۇ",
      element: <WavePropagation />,
      pageNumber: 20
    },
    {
      title: "بۇ كۆكتە كۆزەتكۈچ",
      content: "ئىنسانلار بۇ دولقۇنلارنى بايقىدى",
      element: <LIGODetector />,
      pageNumber: 21
    },
    {
      title: "بارلىق جىسىملار ئېگىلەيدۇ",
      content: "ھەممىمىز ئېگىلگەن بوشلۇقتا",
      element: <EverythingWarps />,
      pageNumber: 22
    },
    {
      title: "ئالەم بىر پارچە مېخانىكا",
      content: "ھەممە نەرسە بىر-بىرى بىلەن باغلانغان",
      element: <UniverseFabric />,
      pageNumber: 23
    },
    {
      title: "ھازىر سىز بىر نىسبىيەتچى",
      content: "سىز ئالەمنىڭ قۇرۇلۇشىنى چۈشەندىڭىز!",
      element: <CelebrationRelativity />,
      pageNumber: 24
    }
  ];

  // Play page turn sound
  const playPageSound = () => {
    if (!soundOn) return;
    
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      
      const audioContext = audioContextRef.current;
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 400 + Math.random() * 300;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.15);
    } catch (e) {
      console.log("Audio not supported");
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        nextPage();
        e.preventDefault();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevPage();
        e.preventDefault();
      } else if (e.key === 'Home') {
        goToPage(0);
        e.preventDefault();
      } else if (e.key === 'End') {
        goToPage(totalPages - 1);
        e.preventDefault();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
        e.preventDefault();
      } else if (e.key === 'g' || e.key === 'G') {
        setGravityStrength(prev => prev === 3 ? 1 : prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (autoPlay && currentPage < totalPages - 1) {
      interval = setInterval(() => {
        nextPage();
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [autoPlay, currentPage]);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
      playPageSound();
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      playPageSound();
    }
  };

  const goToPage = (page) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
      playPageSound();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      bookRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleSound = () => {
    setSoundOn(!soundOn);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  // Page components
  function CosmicScene() {
    return (
      <motion.div 
        className="relative w-72 h-72"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
        
        {/* Central cosmic object */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-32 h-32 font-uyghur rounded-full bg-gradient-to-br from-blue-900 via-purple-900 to-black"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
          style={{
            boxShadow: '0 0 60px rgba(79, 70, 229, 0.6), inset 0 0 30px rgba(139, 92, 246, 0.4)'
          }}
        >
          {/* Spiral arms */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full border-2 border-purple-500/30"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 120}deg)`,
                clipPath: 'polygon(50% 50%, 100% 0%, 100% 100%)'
              }}
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 30 - i * 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>
        
        {/* Orbiting planets */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`planet-${i}`}
            className="absolute w-8 h-8 rounded-full"
            style={{
              background: i === 0 ? 'linear-gradient(to bottom, #f59e0b, #d97706)' :
                         i === 1 ? 'linear-gradient(to bottom, #3b82f6, #1d4ed8)' :
                         i === 2 ? 'linear-gradient(to bottom, #10b981, #047857)' :
                         'linear-gradient(to bottom, #ef4444, #b91c1c)',
              top: '50%',
              left: '50%',
              translateX: '-50%',
              translateY: '-50%'
            }}
            animate={{
              x: Math.cos(i * Math.PI/2) * 120,
              y: Math.sin(i * Math.PI/2) * 120,
              rotate: 360
            }}
            transition={{
              x: {
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear"
              },
              y: {
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear"
              },
              rotate: {
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />
        ))}
      </motion.div>
    );
  }

  function SpacetimeFabric() {
    return (
      <div className="relative w-80 h-80">
        {/* Grid representing spacetime */}
        <div className="absolute inset-0">
          {/* Horizontal lines */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full h-px bg-blue-300/30"
              style={{ top: `${i * 10}%` }}
            />
          ))}
          {/* Vertical lines */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full w-px bg-blue-300/30"
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </div>
        
        {/* Warping effect in center */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-48 h-48 rounded-full border-4 border-purple-500/50"
          animate={{
            scale: [1, 1.2, 1],
            borderWidth: ['4px', '8px', '4px']
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            boxShadow: 'inset 0 0 40px rgba(139, 92, 246, 0.3)'
          }}
        >
          {/* Distorted grid inside warp */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <defs>
              <radialGradient id="warpGradient">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#warpGradient)" />
          </svg>
        </motion.div>
        
        {/* Particles flowing into warp */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 50 - Math.random() * 100],
              y: [0, 50 - Math.random() * 100],
              opacity: [1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>
    );
  }

  function SimpleBall() {
    return (
      <motion.div 
        className="w-40 h-40 rounded-full relative"
        style={{
          background: 'linear-gradient(145deg, #6b7280, #9ca3af)',
          boxShadow: `
            inset 0 -8px 16px rgba(0, 0, 0, 0.2),
            inset 0 8px 16px rgba(255, 255, 255, 0.6),
            0 10px 30px rgba(0, 0, 0, 0.3)
          `
        }}
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="absolute top-4 left-8 w-12 h-12 bg-white/60 rounded-full blur-sm" />
      </motion.div>
    );
  }

  function HeavyBall() {
    return (
      <motion.div 
        className="relative"
        animate={{
          scale: [1, 1.02, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div 
          className="w-48 h-48 rounded-full relative"
          style={{
            background: 'linear-gradient(145deg, #1e293b, #0f172a, #000000)',
            boxShadow: `
              inset 0 -12px 24px rgba(0, 0, 0, 0.4),
              inset 0 12px 24px rgba(100, 116, 139, 0.4),
              0 20px 40px rgba(0, 0, 0, 0.5),
              0 0 60px rgba(30, 41, 59, 0.6)
            `
          }}
        >
          <div className="absolute top-6 left-10 w-16 h-16 bg-white/40 rounded-full blur-sm" />
          
          {/* Gravity field lines */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-px h-20 bg-gradient-to-t from-slate-500/50 to-transparent"
              style={{
                transformOrigin: 'bottom center',
                transform: `translate(-50%, -100%) rotate(${i * 45}deg)`
              }}
              animate={{
                height: ['20px', '40px', '20px'],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </div>
        
        {/* Gravity effect aura */}
        <motion.div 
          className="absolute -inset-8 rounded-full border-4 border-slate-600/30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        />
      </motion.div>
    );
  }

  function WarpingSpace() {
    return (
      <div className="relative w-80 h-80">
        {/* Spacetime grid */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <React.Fragment key={i}>
              <div
                className="absolute w-full h-px bg-blue-400/20"
                style={{ top: `${i * 14.28}%` }}
              />
              <div
                className="absolute h-full w-px bg-blue-400/20"
                style={{ left: `${i * 14.28}%` }}
              />
            </React.Fragment>
          ))}
        </div>
        
        {/* Heavy ball causing warp */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       w-24 h-24 rounded-full bg-gradient-to-br from-slate-900 to-black"
             style={{
               boxShadow: '0 0 40px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(100, 116, 139, 0.4)'
             }} />
        
        {/* Warped grid lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="warpEffect">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </radialGradient>
          </defs>
          
          {/* Curved grid lines */}
          {[...Array(5)].map((_, i) => {
            const radius = 15 + i * 10;
            return (
              <path
                key={i}
                d={`M ${50 - radius} 50 A ${radius} ${radius} 0 0 1 ${50 + radius} 50`}
                fill="none"
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="0.5"
              />
            );
          })}
          
          <circle cx="50" cy="50" r="40" fill="url(#warpEffect)" />
        </svg>
        
        {/* Particles falling into warp */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-blue-500 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: '20%'
            }}
            animate={{
              x: 50 - (20 + i * 10),
              y: 30,
              scale: [1, 1.5, 0.5],
              opacity: [1, 0.8, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    );
  }

  function SmallBallNearHeavy() {
    return (
      <div className="relative w-80 h-80">
        {/* Heavy ball */}
        <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2
                       w-32 h-32 rounded-full bg-gradient-to-br from-slate-900 to-black"
             style={{
               boxShadow: '0 0 50px rgba(0, 0, 0, 0.8)'
             }}>
          <div className="absolute top-4 left-6 w-10 h-10 bg-white/30 rounded-full blur-sm" />
        </div>
        
        {/* Small ball */}
        <motion.div 
          className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2
                     w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"
          animate={{
            x: [-60, -50, -60],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)'
          }}
        >
          <div className="absolute top-2 left-3 w-5 h-5 bg-white/50 rounded-full blur-xs" />
        </motion.div>
        
        {/* Gravity field lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="gravityField">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </radialGradient>
          </defs>
          
          <ellipse cx="33" cy="50" rx="40" ry="25" fill="url(#gravityField)" />
          
          {/* Curved path for small ball */}
          <path
            d="M 67 50 Q 50 30 33 50"
            fill="none"
            stroke="rgba(59, 130, 246, 0.5)"
            strokeWidth="1"
            strokeDasharray="4"
          />
        </svg>
      </div>
    );
  }

  function OrbitingBall() {
    return (
      <div className="relative w-80 h-80">
        {/* Heavy central ball */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       w-28 h-28 rounded-full bg-gradient-to-br from-slate-900 to-black"
             style={{
               boxShadow: '0 0 40px rgba(0, 0, 0, 0.8)'
             }} />
        
        {/* Orbiting ball */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600"
          style={{
            translateX: '-50%',
            translateY: '-50%',
            boxShadow: '0 0 20px rgba(34, 197, 94, 0.6)'
          }}
          animate={{
            x: Math.cos(0) * 120,
            y: Math.sin(0) * 120,
            rotate: 360
          }}
          transition={{
            x: {
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            },
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          <div className="absolute top-1 left-1 w-4 h-4 bg-white/60 rounded-full blur-xs" />
        </motion.div>
        
        {/* Orbit path */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       w-60 h-60 rounded-full border-2 border-green-500/30" />
        
        {/* Gravity well visualization */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="gravityWell">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0.1)" />
              <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#gravityWell)" />
        </svg>
      </div>
    );
  }

  function LightBeam() {
    return (
      <div className="relative w-72 h-72">
        {/* Light source */}
        <motion.div 
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 40px rgba(251, 191, 36, 0.8)',
              '0 0 60px rgba(251, 191, 36, 1)',
              '0 0 40px rgba(251, 191, 36, 0.8)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Light beam */}
        <motion.div 
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2
                     w-2 h-48 bg-gradient-to-b from-yellow-400/80 to-transparent"
          animate={{
            height: ['48px', '52px', '48px'],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Target at bottom */}
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2
                       w-12 h-12 rounded-full border-4 border-red-500/50" />
        
        {/* Light particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full"
            style={{
              left: '50%',
              top: '25%',
              translateX: '-50%'
            }}
            animate={{
              y: [0, 150],
              opacity: [1, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.1
            }}
          />
        ))}
      </div>
    );
  }

  function BendingLight() {
    return (
      <div className="relative w-80 h-80">
        {/* Heavy mass causing bending */}
        <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2
                       w-28 h-28 rounded-full bg-gradient-to-br from-slate-900 to-black"
             style={{
               boxShadow: '0 0 40px rgba(0, 0, 0, 0.8)'
             }} />
        
        {/* Light source */}
        <div className="absolute top-1/3 left-1/4 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500"
             style={{
               boxShadow: '0 0 20px rgba(251, 191, 36, 0.8)'
             }} />
        
        {/* Target */}
        <div className="absolute top-1/3 left-3/4 w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-red-600"
             style={{
               boxShadow: '0 0 20px rgba(239, 68, 68, 0.8)'
             }} />
        
        {/* Straight light path (dotted) */}
        <div className="absolute top-1/3 left-1/4 w-1/2 h-px bg-yellow-500/30">
          <div className="absolute inset-0 border-t-2 border-dashed border-yellow-500/50" />
        </div>
        
        {/* Bent light path */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="lightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(251, 191, 36, 0.8)" />
              <stop offset="100%" stopColor="rgba(251, 191, 36, 0.8)" />
            </linearGradient>
          </defs>
          
          <path
            d="M 25 33 Q 40 50, 25 67"
            fill="none"
            stroke="url(#lightBeam)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Light particles along curved path */}
          {[...Array(5)].map((_, i) => {
            const t = i / 4;
            const x = 25 + 15 * t;
            const y = 33 + 34 * t;
            return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="1"
                fill="rgba(251, 191, 36, 1)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4
                }}
              />
            );
          })}
        </svg>
      </div>
    );
  }

  function TimeDilation() {
    const [timeFactor, setTimeFactor] = useState(1);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setTimeFactor(prev => prev === 3 ? 1 : prev + 1);
      }, 2000);
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="relative w-80 h-80">
        {/* Clock faces */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <Clock speed={1} label="ئادەتتىكى" />
        </div>
        
        <div className="absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
          <Clock speed={0.5} label="ئاستا" />
        </div>
        
        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Clock speed={2} label="تېز" />
        </div>
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <path
            d="M 25 25 L 50 50 L 75 25"
            fill="none"
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="1"
            strokeDasharray="4"
          />
        </svg>
        
        {/* Time dilation explanation */}
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2
                     text-blue-600 font-bold text-lg bg-white/80 backdrop-blur-sm rounded-full px-4 py-2"
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          ۋاقىت ئوخشاش ئاقمايدۇ!
        </motion.div>
      </div>
    );
  }

  function Clock({ speed = 1, label = "" }) {
    return (
      <div className="relative">
        {/* Clock face */}
        <div className="w-20 h-20 rounded-full border-4 border-slate-700 bg-slate-100 relative">
          {/* Clock numbers */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs">12</div>
          <div className="absolute top-1/2 right-1 transform -translate-y-1/2 text-xs">3</div>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs">6</div>
          <div className="absolute top-1/2 left-1 transform -translate-y-1/2 text-xs">9</div>
          
          {/* Hour hand */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-1 h-6 bg-slate-800 origin-top"
            animate={{ rotate: 360 }}
            transition={{
              duration: 12 / speed,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ transform: 'translate(-50%, -100%)' }}
          />
          
          {/* Minute hand */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-0.5 h-8 bg-slate-900 origin-top"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1 / speed,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ transform: 'translate(-50%, -100%)' }}
          />
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-slate-900 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        {/* Label */}
        <div className="text-center mt-2 text-sm font-semibold text-slate-700">
          {label}
        </div>
      </div>
    );
  }

  function TimeSlowsDown() {
    return (
      <div className="relative w-80 h-80">
        {/* Heavy mass */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       w-32 h-32 rounded-full bg-gradient-to-br from-slate-900 to-black"
             style={{
               boxShadow: '0 0 50px rgba(0, 0, 0, 0.9), inset 0 0 30px rgba(100, 116, 139, 0.3)'
             }}>
          {/* Slow clock on heavy mass */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Clock speed={0.3} size="small" />
          </div>
        </div>
        
        {/* Fast clock far away */}
        <motion.div 
          className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          <Clock speed={2} size="small" />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5
          }}
        >
          <Clock speed={1.8} size="small" />
        </motion.div>
        
        {/* Time dilation gradient */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="timeGradient">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#timeGradient)" />
        </svg>
        
        {/* "Time slows here" label */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                     text-red-600 font-bold text-lg bg-white/90 backdrop-blur-sm rounded-full px-4 py-2"
          animate={{
            scale: [1, 1.05, 1],
            color: ['#dc2626', '#ef4444', '#dc2626']
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          ۋاقىت بۇ يەردە ئاستا!
        </motion.div>
      </div>
    );
  }

  function BlackHoleConcept() {
    return (
      <div className="relative w-80 h-80">
        {/* Event horizon */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-48 h-48 rounded-full border-8 border-red-600/70"
          animate={{
            borderWidth: ['8px', '12px', '8px'],
            borderColor: [
              'rgba(220, 38, 38, 0.7)',
              'rgba(239, 68, 68, 0.9)',
              'rgba(220, 38, 38, 0.7)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            boxShadow: 'inset 0 0 60px rgba(220, 38, 38, 0.4), 0 0 60px rgba(220, 38, 38, 0.6)'
          }}
        />
        
        {/* Singularity */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-16 h-16 rounded-full bg-black"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 40px rgba(0, 0, 0, 0.9)',
              '0 0 60px rgba(0, 0, 0, 1)',
              '0 0 40px rgba(0, 0, 0, 0.9)'
            ]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Accretion disk */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 border-2 border-orange-500/50 rounded-full"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              translateX: '-50%',
              translateY: '-50%'
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360
            }}
            transition={{
              duration: 10 - i * 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Hot spots on accretion disk */}
            {[...Array(4)].map((_, j) => (
              <motion.div
                key={j}
                className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-yellow-500 to-red-600"
                style={{
                  left: '50%',
                  top: '0%',
                  translateX: '-50%',
                  translateY: '-50%'
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: j * 0.5
                }}
              />
            ))}
          </motion.div>
        ))}
        
        {/* Matter falling in */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"
            style={{
              left: `${20 + i * 8}%`,
              top: '20%'
            }}
            animate={{
              x: 50 - (20 + i * 8),
              y: 50 - 20,
              scale: [1, 1.5, 0.2],
              opacity: [1, 0.8, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>
    );
  }

  function BlackHoleIntense() {
    return (
      <div className="relative w-80 h-80">
        {/* Intense black hole */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-40 h-40 rounded-full bg-gradient-to-br from-black via-gray-900 to-black"
          animate={{
            scale: [1, 1.02, 1],
            rotate: 360
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            },
            rotate: {
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          style={{
            boxShadow: 'inset 0 0 80px rgba(0, 0, 0, 1), 0 0 100px rgba(220, 38, 38, 0.8)'
          }}
        />
        
        {/* Photon sphere */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-60 h-60 rounded-full border-2 border-yellow-500/70"
          animate={{
            borderWidth: ['2px', '4px', '2px'],
            borderColor: [
              'rgba(234, 179, 8, 0.7)',
              'rgba(250, 204, 21, 0.9)',
              'rgba(234, 179, 8, 0.7)'
            ]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Light beams getting bent */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-px h-40 bg-gradient-to-t from-yellow-400/80 to-transparent"
            style={{
              transformOrigin: 'bottom center',
              transform: `translate(-50%, -100%) rotate(${i * 90}deg)`
            }}
            animate={{
              height: ['40px', '60px', '40px'],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
        
        {/* "No escape" text */}
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2
                     text-red-600 font-bold text-xl bg-black/70 backdrop-blur-sm rounded-full px-6 py-3"
          animate={{
            scale: [1, 1.1, 1],
            color: ['#dc2626', '#f87171', '#dc2626']
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          ھېچقانداق قايتالمايدۇ!
        </motion.div>
      </div>
    );
  }

  function StarGravity() {
    return (
      <div className="relative w-80 h-80">
        {/* Star */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-36 h-36 rounded-full bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600"
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              '0 0 60px rgba(251, 191, 36, 0.8)',
              '0 0 90px rgba(251, 191, 36, 1)',
              '0 0 60px rgba(251, 191, 36, 0.8)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {/* Star surface details */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-yellow-200/50 to-orange-400/30 blur-sm" />
          
          {/* Solar flares */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-20 bg-gradient-to-t from-red-600 to-transparent"
              style={{
                transformOrigin: 'bottom center',
                transform: `translate(-50%, -100%) rotate(${i * 60}deg)`
              }}
              animate={{
                height: ['20px', '30px', '20px'],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
        
        {/* Gravity field */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="starGravity">
              <stop offset="0%" stopColor="rgba(251, 191, 36, 0.2)" />
              <stop offset="50%" stopColor="rgba(251, 191, 36, 0.1)" />
              <stop offset="100%" stopColor="rgba(251, 191, 36, 0)" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#starGravity)" />
          
          {/* Gravity field lines */}
          {[...Array(8)].map((_, i) => {
            const angle = i * 45;
            return (
              <path
                key={i}
                d={`M 50 50 L ${50 + 45 * Math.cos(angle * Math.PI/180)} ${50 + 45 * Math.sin(angle * Math.PI/180)}`}
                fill="none"
                stroke="rgba(251, 191, 36, 0.3)"
                strokeWidth="0.5"
                strokeDasharray="4"
              />
            );
          })}
        </svg>
      </div>
    );
  }

  function PlanetOrbit() {
    return (
      <div className="relative w-80 h-80">
        {/* Sun */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"
             style={{
               boxShadow: '0 0 50px rgba(251, 191, 36, 0.9)'
             }}>
          <div className="absolute top-2 left-3 w-8 h-8 bg-white/60 rounded-full blur-sm" />
        </div>
        
        {/* Planets */}
        {[
          { color: 'from-gray-400 to-gray-600', size: 8, distance: 60, speed: 3 },
          { color: 'from-yellow-300 to-yellow-500', size: 10, distance: 90, speed: 6 },
          { color: 'from-blue-400 to-blue-600', size: 12, distance: 120, speed: 10 },
          { color: 'from-red-400 to-red-600', size: 10, distance: 150, speed: 15 }
        ].map((planet, i) => (
          <motion.div
            key={i}
            className={`absolute w-${planet.size} h-${planet.size} rounded-full bg-gradient-to-br ${planet.color}`}
            style={{
              top: '50%',
              left: '50%',
              translateX: '-50%',
              translateY: '-50%',
              boxShadow: '0 0 10px currentColor'
            }}
            animate={{
              x: Math.cos(i) * planet.distance,
              y: Math.sin(i) * planet.distance,
              rotate: 360
            }}
            transition={{
              x: {
                duration: planet.speed,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              },
              y: {
                duration: planet.speed,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              },
              rotate: {
                duration: planet.speed / 2,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            <div className="absolute top-1 left-1 w-2 h-2 bg-white/50 rounded-full blur-xs" />
          </motion.div>
        ))}
        
        {/* Orbit paths */}
        {[60, 90, 120, 150].map((radius, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       rounded-full border border-gray-400/20"
            style={{
              width: `${radius * 2}px`,
              height: `${radius * 2}px`
            }}
          />
        ))}
      </div>
    );
  }

  function RingsOfSaturn() {
    return (
      <div className="relative w-80 h-80">
        {/* Planet */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-32 h-32 rounded-full bg-gradient-to-br from-yellow-200 via-amber-300 to-orange-400"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            boxShadow: 'inset 0 -10px 20px rgba(0, 0, 0, 0.3), 0 0 30px rgba(251, 191, 36, 0.6)'
          }}
        >
          {/* Planet bands */}
          <div className="absolute top-1/4 left-0 right-0 h-4 bg-amber-500/50 rounded-full" />
          <div className="absolute top-1/2 left-0 right-0 h-6 bg-orange-500/60 rounded-full" />
          <div className="absolute bottom-1/4 left-0 right-0 h-4 bg-amber-600/50 rounded-full" />
        </motion.div>
        
        {/* Rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       w-64 h-8 rounded-full border-2"
            style={{
              borderColor: i === 0 ? 'rgba(251, 191, 36, 0.7)' :
                          i === 1 ? 'rgba(245, 158, 11, 0.5)' :
                          'rgba(217, 119, 6, 0.3)',
              width: `${80 + i * 40}px`,
              height: `${4 + i * 2}px`,
              transform: `translate(-50%, -50%) rotateX(60deg) rotate(${i * 15}deg)`
            }}
            animate={{
              rotateZ: i % 2 === 0 ? 360 : -360
            }}
            transition={{
              duration: 30 - i * 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Ring details */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-current to-transparent opacity-30" />
          </motion.div>
        ))}
        
        {/* Moon */}
        <motion.div 
          className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-500"
          style={{
            top: '50%',
            left: '50%',
            translateX: '-50%',
            translateY: '-50%'
          }}
          animate={{
            x: Math.cos(0) * 100,
            y: Math.sin(0) * 100,
            rotate: 360
          }}
          transition={{
            x: {
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            },
            y: {
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            },
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          <div className="absolute top-1 left-1 w-3 h-3 bg-white/60 rounded-full blur-xs" />
        </motion.div>
      </div>
    );
  }

  function GalaxySpiral() {
    return (
      <motion.div 
        className="relative w-80 h-80"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Galaxy core */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       w-32 h-32 rounded-full bg-gradient-to-br from-yellow-900 via-orange-800 to-red-900"
             style={{
               boxShadow: '0 0 40px rgba(120, 53, 15, 0.8), inset 0 0 30px rgba(251, 191, 36, 0.3)'
             }} />
        
        {/* Spiral arms */}
        {[...Array(4)].map((_, armIndex) => (
          <div key={armIndex} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {[...Array(20)].map((_, starIndex) => {
              const angle = armIndex * 90 + starIndex * 18;
              const distance = 40 + starIndex * 8;
              return (
                <motion.div
                  key={`${armIndex}-${starIndex}`}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    transform: `rotate(${angle}deg) translateX(${distance}px)`,
                    opacity: 0.3 + Math.random() * 0.7
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              );
            })}
          </div>
        ))}
        
        {/* Dust clouds */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-purple-900/20 to-blue-900/10 blur-xl"
            style={{
              top: `${20 + i * 15}%`,
              left: `${20 + (i * 20) % 60}%`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i
            }}
          />
        ))}
      </motion.div>
    );
  }

  function GalaxiesOrbiting() {
    return (
      <div className="relative w-80 h-80">
        {/* Central galaxy */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-40 h-40 rounded-full bg-gradient-to-br from-purple-900/70 to-blue-900/50"
          animate={{
            rotate: 360,
            scale: [1, 1.02, 1]
          }}
          transition={{
            rotate: {
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
          style={{
            boxShadow: 'inset 0 0 40px rgba(139, 92, 246, 0.4), 0 0 60px rgba(79, 70, 229, 0.5)'
          }}
        >
          {/* Galaxy core */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                         w-16 h-16 rounded-full bg-gradient-to-br from-yellow-600 to-orange-600" />
        </motion.div>
        
        {/* Orbiting galaxies */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-blue-900/60 to-purple-900/50"
            style={{
              top: '50%',
              left: '50%',
              translateX: '-50%',
              translateY: '-50%'
            }}
            animate={{
              x: Math.cos(i * 120 * Math.PI/180) * 120,
              y: Math.sin(i * 120 * Math.PI/180) * 120,
              rotate: i % 2 === 0 ? 360 : -360
            }}
            transition={{
              x: {
                duration: 30 + i * 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              },
              y: {
                duration: 30 + i * 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              },
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {/* Small galaxy core */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                           w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500" />
          </motion.div>
        ))}
        
        {/* Gravity connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="gravityConnection">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.5)" />
              <stop offset="100%" stopColor="rgba(79, 70, 229, 0.5)" />
            </linearGradient>
          </defs>
          
          {[...Array(3)].map((_, i) => {
            const angle = i * 120;
            const x2 = 50 + 24 * Math.cos(angle * Math.PI/180);
            const y2 = 50 + 24 * Math.sin(angle * Math.PI/180);
            return (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={x2}
                y2={y2}
                stroke="url(#gravityConnection)"
                strokeWidth="1"
                strokeDasharray="4"
              />
            );
          })}
        </svg>
      </div>
    );
  }

  function GravitationalWaves() {
    return (
      <div className="relative w-80 h-80">
        {/* Two orbiting black holes */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-black to-gray-900"
            style={{
              top: '50%',
              left: '50%',
              translateX: '-50%',
              translateY: '-50%',
              boxShadow: '0 0 30px rgba(0, 0, 0, 0.9)'
            }}
            animate={{
              x: Math.cos(i * Math.PI) * 40,
              y: Math.sin(i * Math.PI) * 40,
              rotate: 360
            }}
            transition={{
              x: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              },
              rotate: {
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {/* Accretion disk */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                           w-32 h-4 rounded-full border border-red-500/50"
                 style={{
                   transform: 'translate(-50%, -50%) rotateX(60deg)'
                 }} />
          </motion.div>
        ))}
        
        {/* Gravitational waves */}
        {[...Array(4)].map((waveIndex) => (
          <motion.div
            key={waveIndex}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       rounded-full border border-blue-400/30"
            style={{
              width: `${80 + waveIndex * 40}px`,
              height: `${80 + waveIndex * 40}px`
            }}
            animate={{
              scale: [1, 1.5],
              opacity: [0.5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: waveIndex * 0.3
            }}
          />
        ))}
        
        {/* Spacetime grid distortion */}
        <div className="absolute inset-0">
          {/* Grid */}
          {[...Array(5)].map((_, i) => (
            <React.Fragment key={i}>
              <div 
                className="absolute w-full h-px bg-blue-300/20"
                style={{ top: `${i * 25}%` }}
              />
              <div 
                className="absolute h-full w-px bg-blue-300/20"
                style={{ left: `${i * 25}%` }}
              />
            </React.Fragment>
          ))}
          
          {/* Distorted areas near black holes */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={`distort-${i}`}
              className="absolute w-16 h-16 rounded-full border-2 border-blue-500/40"
              style={{
                top: '50%',
                left: '50%',
                translateX: i === 0 ? '-90%' : '10%',
                translateY: '-50%'
              }}
              animate={{
                scale: [1, 1.2, 1],
                borderWidth: ['2px', '4px', '2px']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  function WavePropagation() {
    return (
      <div className="relative w-80 h-80">
        {/* Wave source */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600"
          animate={{
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            boxShadow: '0 0 40px rgba(79, 70, 229, 0.8)'
          }}
        />
        
        {/* Propagating waves */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       rounded-full border-2 border-blue-400/50"
            style={{
              width: `${40 + i * 30}px`,
              height: `${40 + i * 30}px`
            }}
            animate={{
              scale: [1, 1.5],
              opacity: [0.6, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4
            }}
          />
        ))}
        
        {/* Spacetime grid showing distortion */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
            
            {/* Wave deformation */}
            <path
              d="M 0 50 Q 25 45, 50 50 T 100 50"
              fill="none"
              stroke="rgba(59, 130, 246, 0.5)"
              strokeWidth="1"
              strokeDasharray="4"
            />
            <path
              d="M 0 30 Q 25 35, 50 30 T 100 30"
              fill="none"
              stroke="rgba(59, 130, 246, 0.5)"
              strokeWidth="1"
              strokeDasharray="4"
            />
            <path
              d="M 0 70 Q 25 65, 50 70 T 100 70"
              fill="none"
              stroke="rgba(59, 130,246, 0.5)"
              strokeWidth="1"
              strokeDasharray="4"
            />
          </svg>
        </div>
        
        {/* Wave detectors */}
        {[
          { x: '20%', y: '20%', color: 'from-green-500 to-emerald-600' },
          { x: '80%', y: '20%', color: 'from-green-500 to-emerald-600' },
          { x: '20%', y: '80%', color: 'from-green-500 to-emerald-600' },
          { x: '80%', y: '80%', color: 'from-green-500 to-emerald-600' }
        ].map((detector, i) => (
          <motion.div
            key={i}
            className={`absolute w-12 h-12 rounded-full bg-gradient-to-br ${detector.color}`}
            style={{
              left: detector.x,
              top: detector.y,
              translateX: '-50%',
              translateY: '-50%'
            }}
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                '0 0 10px rgba(34, 197, 94, 0.5)',
                '0 0 20px rgba(34, 197, 94, 0.8)',
                '0 0 10px rgba(34, 197, 94, 0.5)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2
            }}
          >
            <div className="absolute top-1 left-1 w-4 h-4 bg-white/60 rounded-full blur-xs" />
          </motion.div>
        ))}
      </div>
    );
  }

  function LIGODetector() {
    return (
      <div className="relative w-80 h-80">
        {/* L-shaped detector */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Vertical arm */}
          <div className="absolute w-4 h-40 bg-gradient-to-b from-slate-700 to-slate-900 rounded-lg"
               style={{ left: '-2px', top: '-100px' }}>
            {/* Laser beam */}
            <motion.div 
              className="absolute w-1 h-full bg-gradient-to-b from-green-400 to-emerald-600 left-1/2 transform -translate-x-1/2"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Mirrors */}
            <div className="absolute w-8 h-8 rounded-full border-4 border-blue-500 bg-slate-800 left-1/2 transform -translate-x-1/2 top-0" />
            <div className="absolute w-8 h-8 rounded-full border-4 border-blue-500 bg-slate-800 left-1/2 transform -translate-x-1/2 bottom-0" />
          </div>
          
          {/* Horizontal arm */}
          <div className="absolute w-40 h-4 bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg"
               style={{ left: '-100px', top: '-2px' }}>
            {/* Laser beam */}
            <motion.div 
              className="absolute h-1 w-full bg-gradient-to-r from-green-400 to-emerald-600 top-1/2 transform -translate-y-1/2"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Mirrors */}
            <div className="absolute w-8 h-8 rounded-full border-4 border-blue-500 bg-slate-800 top-1/2 transform -translate-y-1/2 left-0" />
            <div className="absolute w-8 h-8 rounded-full border-4 border-blue-500 bg-slate-800 top-1/2 transform -translate-y-1/2 right-0" />
          </div>
          
          {/* Central detector */}
          <div className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600"
               style={{
                 boxShadow: '0 0 30px rgba(192, 38, 211, 0.8)'
               }}>
            <motion.div 
              className="absolute inset-2 rounded-full bg-gradient-to-br from-white to-purple-300"
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
          </div>
        </div>
        
        {/* Incoming gravitational wave */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.8)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M 0 50 Q 25 45, 50 50 T 100 50"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </svg>
        
        {/* Detection indicator */}
        <motion.div 
          className="absolute top-4 left-1/2 transform -translate-x-1/2
                     text-green-600 font-bold text-lg bg-white/90 backdrop-blur-sm rounded-full px-6 py-3"
          animate={{
            scale: [1, 1.1, 1],
            color: ['#16a34a', '#22c55e', '#16a34a']
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          دولقۇن بايقالدى!
        </motion.div>
      </div>
    );
  }

  function EverythingWarps() {
    return (
      <div className="relative w-80 h-80">
        {/* Multiple objects warping spacetime */}
        {[
          { x: '30%', y: '30%', color: 'from-red-500 to-pink-600', size: 20 },
          { x: '70%', y: '30%', color: 'from-blue-500 to-cyan-600', size: 24 },
          { x: '50%', y: '60%', color: 'from-green-500 to-emerald-600', size: 28 },
          { x: '30%', y: '70%', color: 'from-yellow-500 to-orange-600', size: 18 },
          { x: '70%', y: '70%', color: 'from-purple-500 to-violet-600', size: 22 }
        ].map((obj, i) => (
          <React.Fragment key={i}>
            {/* Object */}
            <motion.div
              className={`absolute rounded-full bg-gradient-to-br ${obj.color}`}
              style={{
                left: obj.x,
                top: obj.y,
                width: `${obj.size}px`,
                height: `${obj.size}px`,
                translateX: '-50%',
                translateY: '-50%',
                boxShadow: '0 0 20px currentColor'
              }}
              animate={{
                y: [0, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            >
              <div className="absolute top-1 left-1 w-4 h-4 bg-white/60 rounded-full blur-xs" />
            </motion.div>
            
            {/* Spacetime warp around object */}
            <motion.div
              className="absolute rounded-full border-2 border-current/30"
              style={{
                left: obj.x,
                top: obj.y,
                width: `${obj.size * 3}px`,
                height: `${obj.size * 3}px`,
                translateX: '-50%',
                translateY: '-50%'
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          </React.Fragment>
        ))}
        
        {/* Interconnected spacetime */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {[
            { x1: 30, y1: 30, x2: 70, y2: 30 },
            { x1: 30, y1: 30, x2: 50, y2: 60 },
            { x1: 70, y1: 30, x2: 50, y2: 60 },
            { x1: 30, y1: 30, x2: 30, y2: 70 },
            { x1: 70, y1: 30, x2: 70, y2: 70 },
            { x1: 50, y1: 60, x2: 30, y2: 70 },
            { x1: 50, y1: 60, x2: 70, y2: 70 }
          ].map((line, i) => (
            <motion.line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="rgba(139, 92, 246, 0.3)"
              strokeWidth="1"
              strokeDasharray="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                repeatType: "reverse"
              }}
            />
          ))}
        </svg>
        
        {/* Title */}
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2
                     text-purple-600 font-bold text-xl bg-white/90 backdrop-blur-sm rounded-full px-8 py-4"
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        >
          ھەممە ئېگىلەيدۇ!
        </motion.div>
      </div>
    );
  }

  function UniverseFabric() {
    return (
      <div className="relative w-80 h-80">
        {/* Spacetime fabric with multiple warps */}
        <div className="absolute inset-0">
          {/* Grid */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="universeGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#universeGrid)" />
            
            {/* Warped areas */}
            {[
              { cx: 30, cy: 30, r: 15 },
              { cx: 70, cy: 30, r: 12 },
              { cx: 50, cy: 60, r: 18 },
              { cx: 30, cy: 70, r: 10 },
              { cx: 70, cy: 70, r: 14 }
            ].map((warp, i) => (
              <g key={i}>
                <circle
                  cx={warp.cx}
                  cy={warp.cy}
                  r={warp.r}
                  fill="rgba(139, 92, 246, 0.05)"
                  stroke="rgba(139, 92, 246, 0.2)"
                  strokeWidth="0.5"
                />
                
                {/* Distorted grid lines */}
                <path
                  d={`M ${warp.cx - warp.r} ${warp.cy} A ${warp.r} ${warp.r} 0 0 1 ${warp.cx + warp.r} ${warp.cy}`}
                  fill="none"
                  stroke="rgba(139, 92, 246, 0.3)"
                  strokeWidth="0.5"
                />
                <path
                  d={`M ${warp.cx} ${warp.cy - warp.r} A ${warp.r} ${warp.r} 0 0 0 ${warp.cx} ${warp.cy + warp.r}`}
                  fill="none"
                  stroke="rgba(139, 92, 246, 0.3)"
                  strokeWidth="0.5"
                />
              </g>
            ))}
          </svg>
        </div>
        
        {/* Cosmic objects */}
        {[
          { x: '30%', y: '30%', type: 'star', size: 12 },
          { x: '70%', y: '30%', type: 'planet', size: 10 },
          { x: '50%', y: '60%', type: 'galaxy', size: 16 },
          { x: '30%', y: '70%', type: 'blackhole', size: 14 },
          { x: '70%', y: '70%', type: 'nebula', size: 18 }
        ].map((obj, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: obj.x,
              top: obj.y,
              translateX: '-50%',
              translateY: '-50%'
            }}
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3
            }}
          >
            {obj.type === 'star' && (
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"
                   style={{ boxShadow: '0 0 10px rgba(251, 191, 36, 0.8)' }} />
            )}
            {obj.type === 'planet' && (
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"
                   style={{ boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)' }} />
            )}
            {obj.type === 'galaxy' && (
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"
                   style={{ boxShadow: '0 0 12px rgba(192, 38, 211, 0.7)' }} />
            )}
            {obj.type === 'blackhole' && (
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-black to-gray-800"
                   style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.9)' }} />
            )}
            {obj.type === 'nebula' && (
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 opacity-70 blur-sm" />
            )}
          </motion.div>
        ))}
        
        {/* Interconnections */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <motion.path
            d="M 30 30 Q 50 20, 70 30 T 50 60 T 30 70 T 70 70"
            fill="none"
            stroke="rgba(139, 92, 246, 0.4)"
            strokeWidth="1"
            strokeDasharray="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </svg>
      </div>
    );
  }

  function CelebrationRelativity() {
    return (
      <div className="relative w-80 h-80">
        {/* Einstein-inspired celebration */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-48 h-48 rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
          style={{
            boxShadow: '0 0 80px rgba(139, 92, 246, 0.8), inset 0 0 40px rgba(6, 182, 212, 0.4)'
          }}
        >
          {/* E=mc² */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                         text-white font-bold text-2xl">
            E=mc²
          </div>
        </motion.div>
        
        {/* Orbiting equations */}
        {[
          { symbol: 'G', color: 'text-green-500' },
          { symbol: 'μν', color: 'text-blue-500' },
          { symbol: 'R', color: 'text-yellow-500' },
          { symbol: 'Λ', color: 'text-red-500' }
        ].map((eq, i) => (
          <motion.div
            key={i}
            className={`absolute text-2xl font-bold ${eq.color} bg-white/90 rounded-full w-12 h-12 flex items-center justify-center`}
            style={{
              top: '50%',
              left: '50%',
              translateX: '-50%',
              translateY: '-50%'
            }}
            animate={{
              x: Math.cos(i * Math.PI/2) * 100,
              y: Math.sin(i * Math.PI/2) * 100,
              rotate: 360
            }}
            transition={{
              x: {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              },
              y: {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              },
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {eq.symbol}
          </motion.div>
        ))}
        
        {/* Celebration particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              translateX: '-50%',
              translateY: '-50%',
              background: i % 4 === 0 ? '#ef4444' : 
                         i % 4 === 1 ? '#3b82f6' : 
                         i % 4 === 2 ? '#10b981' : 
                         '#f59e0b'
            }}
            animate={{
              x: Math.cos(i * Math.PI/10) * 150,
              y: Math.sin(i * Math.PI/10) * 150,
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
              repeatDelay: 1
            }}
          />
        ))}
        
        {/* Congratulations text */}
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2
                     text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 
                     bg-clip-text text-transparent"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          مۇبارەك بولسۇن!
        </motion.div>
      </div>
    );
  }

  return (
    <div 
      ref={bookRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black 
                 overflow-hidden font-['UKIJ_Tuz'] text-white"
      dir="rtl"
    >
      {/* Animated cosmic background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              opacity: Math.random() * 0.8 + 0.2
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
        
        {/* Distant galaxies */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`galaxy-${i}`}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-purple-900/20 to-blue-900/10 blur-2xl"
            style={{
              left: `${10 + i * 30}%`,
              top: `${20 + (i * 40) % 60}%`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 2
            }}
          />
        ))}
      </div>

      {/* Progress dots */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-full px-3 py-2">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Control buttons */}
      <div className="absolute top-6 right-6 z-50 flex gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleSound}
          className="p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors"
        >
          {soundOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleAutoPlay}
          className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
            autoPlay ? 'bg-green-500/40 hover:bg-green-500/60' : 'bg-black/40 hover:bg-black/60'
          }`}
        >
          {autoPlay ? <Pause size={20} /> : <Play size={20} />}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleFullscreen}
          className="p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors"
        >
          {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => goToPage(0)}
          className="p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors"
        >
          <Home size={20} />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setGravityStrength(prev => prev === 3 ? 1 : prev + 1)}
          className="p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors"
        >
          <Atom size={20} />
          <span className="text-xs absolute -top-1 -right-1 bg-blue-500 rounded-full w-4 h-4 flex items-center justify-center">
            {gravityStrength}
          </span>
        </motion.button>
      </div>

      {/* Main book content */}
      <div className="container mx-auto px-4 h-screen flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100, rotateY: 180 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -100, rotateY: -180 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="relative w-full max-w-2xl h-[80vh] bg-gradient-to-br from-slate-50 to-white 
                       rounded-2xl shadow-2xl shadow-blue-500/20 border-8 border-white 
                       overflow-hidden flex flex-col items-center justify-center p-8"
            style={{
              boxShadow: `
                0 25px 50px -12px rgba(0, 0, 0, 0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.9),
                0 0 40px rgba(59, 130, 246, 0.4),
                0 0 20px rgba(139, 92, 246, 0.3)
              `
            }}
          >
            {/* Cosmic top border */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500" />
            
            {/* Bottom decorative line */}
            <div className="absolute bottom-4 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            
            {/* Page corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-blue-500/50 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-blue-500/50 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-blue-500/50 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-blue-500/50 rounded-br-lg" />
            
            {/* Page content */}
            <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
              {/* Visual element */}
              <div className="mb-4">
                {pages[currentPage].element}
              </div>
              
              {/* Title */}
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 
                           bg-clip-text text-transparent leading-tight"
              >
                {pages[currentPage].title}
              </motion.h1>
              
              {/* Subtitle if exists */}
              {pages[currentPage].subtitle && (
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-3xl text-slate-600 font-semibold"
                >
                  {pages[currentPage].subtitle}
                </motion.h2>
              )}
              
              {/* Content text */}
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-slate-700 font-medium max-w-2xl leading-relaxed 
                           bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80 shadow-lg"
              >
                {pages[currentPage].content}
              </motion.p>
              
              {/* Author for first page */}
              {currentPage === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-slate-500 italic mt-4"
                >
                 قاۋۇلجان ئابدۇرھىم
                </motion.div>
              )}
              
              {/* Page number */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-8 left-8 text-slate-400 text-sm font-medium bg-white/80 
                           backdrop-blur-sm rounded-full px-4 py-2 shadow-sm"
              >
                بەت {pages[currentPage].pageNumber} / 24
              </motion.div>
              
              {/* Author credit for last page */}
              {currentPage === 23 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-8 right-8 text-slate-500 text-sm bg-white/80 
                             backdrop-blur-sm rounded-full px-4 py-2 shadow-sm"
                >
                KeLBiL باللار مائارىپ تەتقىقاتى 
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-between px-8 z-50">
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold 
                     transition-all ${currentPage === 0 
                       ? 'opacity-50 cursor-not-allowed bg-slate-700' 
                       : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'}`}
        >
          <ChevronRight size={24} />
          <span>ئالدىنقى بەت</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold 
                     transition-all ${currentPage === totalPages - 1 
                       ? 'opacity-50 cursor-not-allowed bg-slate-700' 
                       : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'}`}
        >
          <span>كېيىنكى بەت</span>
          <ChevronLeft size={24} />
        </motion.button>
      </div>

      {/* Auto-play indicator */}
      {autoPlay && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 
                     bg-green-500/30 backdrop-blur-sm rounded-full px-4 py-2 
                     flex items-center gap-2"
        >
          <Play size={16} />
          <span className="text-sm">ئاپتوماتىك ئالماشتۇرۇش</span>
        </motion.div>
      )}

      {/* Gravity strength indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: gravityStrength > 1 ? 1 : 0 }}
        className="absolute top-20 right-6 bg-blue-500/30 backdrop-blur-sm rounded-full px-4 py-2 
                   flex items-center gap-2"
      >
        <Atom size={16} />
        <span className="text-sm">گراۋىتاتسىيە كۈچى: {gravityStrength}</span>
      </motion.div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-slate-400 text-sm text-center">
        <span className="hidden md:inline">تاختا: ← → ، سوۋغا: بەتلەرنى ئالماشتۇرۇش ، F: تولۇق ئېكران ، G: گراۋىتاتسىيە كۈچى</span>
      </div>

      {/* Relativity theme indicator */}
      <div className="absolute top-20 left-6 bg-purple-500/30 backdrop-blur-sm rounded-full px-4 py-2 
                     flex items-center gap-2">
        <Earth size={16} />
        <span className="text-sm">ئومۇمىي نىسبىيەت نەزەرىيىسى</span>
      </div>
    </div>
  );
};

// Add global styles
const styles = `
@font-face {
  font-family: 'UKIJ_Tuz';
  src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap');
  font-display: swap;
}

* {
  font-family: 'UKIJ_Tuz', 'Noto Sans Arabic', sans-serif;
}
`;

export default GeneralRelativityForBabies;