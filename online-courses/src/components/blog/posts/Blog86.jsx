// newtonian-physics-babies.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Apple, Rocket, Target, ArrowDown, ArrowUp, 
  ArrowRight, ArrowLeft, Zap, Scale, Weight, 
  Triangle, Circle, Square, Hexagon, Play, 
  Pause, Home, Maximize2, Minimize2, Volume2, 
  VolumeX, RotateCw, Car, Train, Plane, Ship,
  Clock, Compass, Ruler, Calculator, Gauge,
  BarChart2, TrendingUp, TrendingDown, Wind,
  Thermometer, Droplets, Sun, Cloud, Moon,
  Battery, BatteryCharging, RefreshCw, AlertCircle
} from 'lucide-react';

const NewtonianPhysicsForBabies = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);
  const [showForces, setShowForces] = useState(true);
  const bookRef = useRef(null);
  const audioContextRef = useRef(null);

  const totalPages = 26;

  const pages = [
    {
      title: "نىيۇتون فىزىكىسى",
      subtitle: "كىچىك بالىلار ئۈچۈن",
      content: "كىرىس فېررىيە",
      element: <ClassicalPhysicsScene />,
      pageNumber: 1
    },
    {
      title: "نىيۇتون فىزىكىسى",
      subtitle: "كىچىك بالىلار ئۈچۈن",
      content: "ھەرىكەت ۋە كۈچ قانۇنلىرى",
      element: <MotionAndForceScene />,
      pageNumber: 2
    },
    {
      title: "بۇ بىر توپ",
      content: "بۇ ئادەتتىكى بىر توپ",
      element: <SimpleBall />,
      pageNumber: 3
    },
    {
      title: "توپ تىنچ ھالەتتە",
      content: "ھەرىكەتسىز توپ تىنچ ھالەتتە قالىدۇ",
      element: <BallAtRest />,
      pageNumber: 4
    },
    {
      title: "توپنى ئىتەلەيمىز",
      content: "كۈچ بىلەن ئىتەلسەك، توپ ھەرىكەتلىنىدۇ",
      element: <PushingBall />,
      pageNumber: 5
    },
    {
      title: "ھەرىكەتلىك توپ",
      content: "ھەرىكەتلىك توپ ھەرىكەتتە داۋاملاشىدۇ",
      element: <BallInMotion />,
      pageNumber: 6
    },
    {
      title: "ئىككىنچى قانۇن",
      content: "كۈچ كۆپرەك بولسا، تېزلىكىمۇ كۆپرەك",
      element: <SecondLawDemo />,
      pageNumber: 7
    },
    {
      title: "ئېغىر توپ",
      content: "ئېغىر توپنى ئىتەش تېخىمۇ قىيىن",
      element: <HeavyBallPush />,
      pageNumber: 8
    },
    {
      title: "يېنىك توپ",
      content: "يېنىك توپنى ئىتەش ئاسان",
      element: <LightBallPush />,
      pageNumber: 9
    },
    {
      title: "ئۈچىنچى قانۇن",
      content: "ھەر بىر ھەرىكەتكە تەڭ كۈچلۈك قارشى ھەرىكەت بار",
      element: <ThirdLawDemo />,
      pageNumber: 10
    },
    {
      title: "توپنى ئىتەش",
      content: "توپنى ئىتەگەندە، قولىڭىزغا قارشى كۈچ تۇغۇلىدۇ",
      element: <ActionReaction />,
      pageNumber: 11
    },
    {
      title: "بۇ بىر ئالما",
      content: "ئالما دەرەختىن تۆۋەنگە چۈشىدۇ",
      element: <AppleFalling />,
      pageNumber: 12
    },
    {
      title: "جاذىبىيەت كۈچى",
      content: "ھەممە نەرسە يەر شارىغا تارتىلىدۇ",
      element: <GravityForce />,
      pageNumber: 13
    },
    {
      title: "ئېغىرلىق",
      content: "ئېغىرلىق جاذىبىيەت كۈچىنىڭ بىر تۈرى",
      element: <WeightDemonstration />,
      pageNumber: 14
    },
    {
      title: "بۇ بىر ماشىنا",
      content: "ماشىنا ئىلگىرىلەيدۇ ۋە توختايدۇ",
      element: <CarMotion />,
      pageNumber: 15
    },
    {
      title: "تېزلىك",
      content: "ماشىنا تېزلىكى زامان بىلەن ئۆزگىرىدۇ",
      element: <SpeedChange />,
      pageNumber: 16
    },
    {
      title: "تېزلىتىش",
      content: "ماشىنا تېزلىقى ئۆزگەرگەندە، تېزلىتىش بار",
      element: <AccelerationDemo />,
      pageNumber: 17
    },
    {
      title: "بۇ بىر راكېتا",
      content: "راكېتا ئېگىزلىككە چىقىدۇ",
      element: <RocketLaunch />,
      pageNumber: 18
    },
    {
      title: "راكېتا ھەرىكىتى",
      content: "راكېتا ئارقىغا ئوت ئاتقاندا ئىلگىرىلەيدۇ",
      element: <RocketMotion />,
      pageNumber: 19
    },
    {
      title: "ئېنېرگىيە",
      content: "ھەرىكەت ئېنېرگىيەسى",
      element: <KineticEnergy />,
      pageNumber: 20
    },
    {
      title: "ئېنېرگىيە ئالماشتۇرۇش",
      content: "ئېنېرگىيە بىر شەكىلدىن يەنە بىر شەكىلگە ئۆزگىرىدۇ",
      element: <EnergyConversion />,
      pageNumber: 21
    },
    {
      title: "بۇ بىر مايەن",
      content: "مايەن ئىككى تەرەپكە سېلىنىدۇ",
      element: <PendulumSwing />,
      pageNumber: 22
    },
    {
      title: "مايەن ھەرىكىتى",
      content: "مايەن ئۆز ھەرىكىتىنى داۋاملاشتۇرىدۇ",
      element: <PendulumMotion />,
      pageNumber: 23
    },
    {
      title: "ئىنېرتسىيە",
      content: "ھەرىكەتسىز جىسىم ھەرىكەتسىز قالىدۇ",
      element: <InertiaDemo />,
      pageNumber: 24
    },
    {
      title: "ھەممە جىسىملار بۇ قانۇنلارغا بويسۇنىدۇ",
      content: "كىچىكتىن چوڭغىچە ھەممە جىسىملار",
      element: <UniversalLaws />,
      pageNumber: 25
    },
    {
      title: "ھازىر سىز بىر فىزىكىچى",
      content: "سىز نىيۇتون فىزىكىسىنى چۈشەندىڭىز!",
      element: <CelebrationPhysics />,
      pageNumber: 26
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
      
      oscillator.frequency.value = 300 + Math.random() * 200;
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
      } else if (e.key === 'c' || e.key === 'C') {
        setShowForces(!showForces);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, showForces]);

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

  const toggleForceVectors = () => {
    setShowForces(!showForces);
  };

  // Page components
  function ClassicalPhysicsScene() {
    return (
      <motion.div 
        className="relative w-72 h-72"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Newton's apple tree scene */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          {/* Tree trunk */}
          <div className="w-8 h-32 bg-gradient-to-b from-amber-900 to-amber-800 rounded-t-lg" />
          
          {/* Tree crown */}
          <div className="absolute -top-24 -left-20 w-56 h-48 rounded-full bg-gradient-to-b from-green-800 to-green-600">
            {/* Apples */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-6 h-6 rounded-full bg-gradient-to-b from-red-600 to-red-800"
                style={{
                  left: `${10 + (i % 3) * 40}%`,
                  top: `${20 + Math.floor(i / 2) * 30}%`
                }}
                animate={{
                  y: [0, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Falling apple */}
        <motion.div 
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2
                     w-10 h-10 rounded-full bg-gradient-to-b from-red-500 to-red-700"
          animate={{
            y: [0, 100, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            boxShadow: '0 0 20px rgba(239, 68, 68, 0.6)'
          }}
        >
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-sm" />
        </motion.div>
        
        {/* Classical elements */}
        <div className="absolute top-4 left-4 w-12 h-12">
          <Triangle className="w-full h-full text-blue-500" fill="currentColor" />
        </div>
        <div className="absolute top-4 right-4 w-12 h-12">
          <Circle className="w-full h-full text-red-500" fill="currentColor" />
        </div>
        <div className="absolute bottom-4 left-4 w-12 h-12">
          <Square className="w-full h-full text-green-500" fill="currentColor" />
        </div>
        <div className="absolute bottom-4 right-4 w-12 h-12">
          <Hexagon className="w-full h-full text-yellow-500" fill="currentColor" />
        </div>
        
        {/* Motion arrows */}
        <motion.div 
          className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: [0, 20, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <ArrowRight className="w-12 h-12 text-blue-600" />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2"
          animate={{
            x: [0, -20, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        >
          <ArrowLeft className="w-12 h-12 text-blue-600" />
        </motion.div>
      </motion.div>
    );
  }

  function MotionAndForceScene() {
    return (
      <div className="relative w-80 h-80">
        {/* Central physics symbols */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div 
            className="w-24 h-24 rounded-full border-4 border-blue-600 flex items-center justify-center"
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
          >
            <span className="text-2xl font-bold text-blue-600">F=ma</span>
          </motion.div>
        </div>
        
        {/* Orbiting physics concepts */}
        {[
          { icon: <ArrowDown className="w-8 h-8" />, color: 'text-red-500', label: 'جاذىبىيەت' },
          { icon: <ArrowRight className="w-8 h-8" />, color: 'text-blue-500', label: 'ھەرىكەت' },
          { icon: <Scale className="w-8 h-8" />, color: 'text-green-500', label: 'تەڭلىك' },
          { icon: <Zap className="w-8 h-8" />, color: 'text-yellow-500', label: 'ئېنېرگىيە' }
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.color}`}
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
            <div className="flex flex-col items-center">
              {item.icon}
              <div className="text-xs font-semibold mt-1">{item.label}</div>
            </div>
          </motion.div>
        ))}
        
        {/* Force vectors */}
        {showForces && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-t from-blue-500 to-transparent"
                style={{
                  transformOrigin: 'bottom center',
                  transform: `translate(-50%, -100%) rotate(${i * 45}deg)`
                }}
                animate={{
                  height: ['20px', '30px', '20px'],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </>
        )}
      </div>
    );
  }

  function SimpleBall() {
    return (
      <motion.div 
        className="w-40 h-40 rounded-full relative"
        style={{
          background: 'linear-gradient(145deg, #3b82f6, #1d4ed8)',
          boxShadow: `
            inset 0 -8px 16px rgba(0, 0, 0, 0.3),
            inset 0 8px 16px rgba(255, 255, 255, 0.6),
            0 10px 30px rgba(59, 130, 246, 0.4)
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
        <div className="absolute top-4 left-8 w-12 h-12 bg-white/70 rounded-full blur-sm" />
        
        {/* Grid lines for measurement */}
        <div className="absolute inset-0 rounded-full border-2 border-white/30">
          <div className="absolute top-0 left-1/2 w-px h-full bg-white/30 transform -translate-x-1/2" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/30 transform -translate-y-1/2" />
        </div>
        
        {/* Measurement label */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                       text-blue-600 font-bold bg-white/90 px-3 py-1 rounded-full">
          توپ
        </div>
      </motion.div>
    );
  }

  function BallAtRest() {
    return (
      <div className="relative w-80 h-80">
        {/* Stationary ball */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"
          style={{
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
          }}
          animate={{
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Rest indicators */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div 
            className="text-4xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            ⏸️
          </motion.div>
          <div className="text-lg font-bold text-slate-600 mt-2">تىنچ ھالەت</div>
        </div>
        
        {/* Force balance */}
        {showForces && (
          <div className="absolute inset-0">
            {/* Equal and opposite forces */}
            <motion.div 
              className="absolute top-1/2 left-1/3 w-16 h-1 bg-red-500"
              animate={{
                scaleX: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              <ArrowRight className="absolute -right-4 -top-2 w-8 h-8 text-red-500" />
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 right-1/3 w-16 h-1 bg-red-500"
              animate={{
                scaleX: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5
              }}
            >
              <ArrowLeft className="absolute -left-4 -top-2 w-8 h-8 text-red-500" />
            </motion.div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                           text-red-600 font-bold">
              = =
            </div>
          </div>
        )}
        
        {/* Newton's 1st law text */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                     text-blue-600 font-bold text-lg bg-white/90 backdrop-blur-sm rounded-full px-6 py-2"
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        >
          1-قانۇن: تىنچ ھالەتتە قالىدۇ
        </motion.div>
      </div>
    );
  }

  function PushingBall() {
    return (
      <div className="relative w-80 h-80">
        {/* Ball */}
        <motion.div 
          className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2
                     w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"
          style={{
            boxShadow: '0 0 25px rgba(59, 130, 246, 0.6)'
          }}
        />
        
        {/* Hand pushing */}
        <motion.div 
          className="absolute top-1/2 left-1/4 transform -translate-y-1/2"
          animate={{
            x: [0, 40, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="w-12 h-20 bg-gradient-to-b from-pink-300 to-pink-500 rounded-lg relative">
            {/* Fingers */}
            <div className="absolute -right-2 top-4 w-4 h-8 bg-pink-400 rounded-l-full" />
            <div className="absolute -right-2 top-12 w-4 h-6 bg-pink-400 rounded-l-full" />
          </div>
        </motion.div>
        
        {/* Force vector */}
        {showForces && (
          <motion.div 
            className="absolute top-1/2 left-1/3 w-32 h-2 bg-green-500"
            animate={{
              scaleX: [1, 1.3, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            <ArrowRight className="absolute -right-4 -top-3 w-8 h-8 text-green-500" />
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                           text-green-600 font-bold text-sm">
              كۈچ (F)
            </div>
          </motion.div>
        )}
        
        {/* Motion arrow */}
        <motion.div 
          className="absolute top-1/2 left-2/3 transform -translate-y-1/2"
          animate={{
            x: [0, 20, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
        >
          <ArrowRight className="w-16 h-16 text-blue-600" />
        </motion.div>
        
        {/* Explanation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                       text-center text-slate-700 font-medium">
          كۈچ → ھەرىكەت
        </div>
      </div>
    );
  }

  function BallInMotion() {
    return (
      <div className="relative w-80 h-80 overflow-hidden">
        {/* Moving ball */}
        <motion.div 
          className="absolute top-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700"
          style={{
            boxShadow: '0 0 25px rgba(59, 130, 246, 0.7)'
          }}
          animate={{
            x: [-100, 100]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        >
          <div className="absolute top-2 left-4 w-8 h-8 bg-white/70 rounded-full blur-sm" />
          
          {/* Motion trail */}
          <motion.div 
            className="absolute -left-12 top-1/2 transform -translate-y-1/2
                       w-12 h-4 bg-gradient-to-r from-blue-400/30 to-transparent rounded-full"
            animate={{
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity
            }}
          />
        </motion.div>
        
        {/* Track */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
        
        {/* Speed indicator */}
        <motion.div 
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2
                     flex items-center gap-2 text-blue-600 font-bold"
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
        >
          <Gauge className="w-6 h-6" />
          <span>تېزلىك: داۋاملاشماقتا</span>
        </motion.div>
        
        {/* Newton's 1st law */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                       bg-white/90 backdrop-blur-sm rounded-full px-6 py-3">
          <div className="text-blue-600 font-bold text-center">
            1-قانۇن: ھەرىكەت داۋاملاشىدۇ
          </div>
        </div>
        
        {/* Velocity vectors */}
        {showForces && (
          <motion.div 
            className="absolute top-1/2 left-1/2 w-32 h-1 bg-blue-500"
            style={{
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              scaleX: [1, 1.2, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity
            }}
          >
            <ArrowRight className="absolute -right-4 -top-3 w-8 h-8 text-blue-500" />
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                           text-blue-600 font-bold text-sm">
              ھەرىكەت سۈرئىتى (v)
            </div>
          </motion.div>
        )}
      </div>
    );
  }

  function SecondLawDemo() {
    const [force, setForce] = useState(5);
    const [mass, setMass] = useState(2);
    
    const acceleration = force / mass;
    
    useEffect(() => {
      const interval = setInterval(() => {
        setForce(prev => prev === 10 ? 5 : prev + 1);
        setMass(prev => prev === 5 ? 2 : prev + 1);
      }, 2000);
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="relative w-80 h-80">
        {/* F=ma equation */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div 
            className="text-4xl font-bold"
            animate={{
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            <span className="text-red-600">F</span>
            <span className="text-slate-700"> = </span>
            <span className="text-blue-600">m</span>
            <span className="text-slate-700"> × </span>
            <span className="text-green-600">a</span>
          </motion.div>
          <div className="text-sm text-slate-600 text-center mt-2">
            كۈچ = ماسسا × تېزلىتىش
          </div>
        </div>
        
        {/* Visual demonstration */}
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Force slider */}
          <div className="flex items-center gap-2 mb-4">
            <div className="text-red-600 font-bold">كۈچ (F): {force} N</div>
            <div className="w-32 h-2 bg-gradient-to-r from-red-400 to-red-600 rounded-full">
              <motion.div 
                className="h-full bg-red-600 rounded-full"
                style={{ width: `${(force / 10) * 100}%` }}
                animate={{
                  width: [`${(force / 10) * 100}%`, `${((force + 1) / 10) * 100}%`, `${(force / 10) * 100}%`]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
            </div>
          </div>
          
          {/* Mass slider */}
          <div className="flex items-center gap-2 mb-4">
            <div className="text-blue-600 font-bold">ماسسا (m): {mass} kg</div>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full">
              <motion.div 
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${(mass / 5) * 100}%` }}
                animate={{
                  width: [`${(mass / 5) * 100}%`, `${((mass + 1) / 5) * 100}%`, `${(mass / 5) * 100}%`]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5
                }}
              />
            </div>
          </div>
          
          {/* Acceleration result */}
          <div className="flex items-center gap-2">
            <div className="text-green-600 font-bold">تېزلىتىش (a): {acceleration.toFixed(1)} m/s²</div>
            <motion.div 
              className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center"
              animate={{
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity
              }}
            >
              <span className="text-white font-bold">{acceleration.toFixed(0)}</span>
            </motion.div>
          </div>
        </div>
        
        {/* Ball with force */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"
          animate={{
            x: [0, 50, 0],
            transition: {
              duration: acceleration,
              repeat: Infinity
            }
          }}
          style={{
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)'
          }}
        />
        
        {/* Force vector */}
        {showForces && (
          <motion.div 
            className="absolute top-1/3 left-1/4 w-32 h-1 bg-red-500"
            style={{
              transform: 'translate(32px, 32px)'
            }}
            animate={{
              scaleX: [1, force/5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            <ArrowRight className="absolute -right-4 -top-3 w-8 h-8 text-red-500" />
          </motion.div>
        )}
        
        {/* Newton's 2nd law text */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2
                       text-center text-slate-700 font-bold">
          2-قانۇن: F = ma
        </div>
      </div>
    );
  }

  function HeavyBallPush() {
    return (
      <div className="relative w-80 h-80">
        {/* Heavy ball */}
        <motion.div 
          className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2
                     w-32 h-32 rounded-full bg-gradient-to-br from-slate-700 to-slate-900"
          style={{
            boxShadow: '0 0 30px rgba(30, 41, 59, 0.8)'
          }}
          animate={{
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="absolute top-4 left-6 w-10 h-10 bg-white/40 rounded-full blur-sm" />
          
          {/* Weight label */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                         text-slate-700 font-bold bg-white/90 px-3 py-1 rounded-full">
            ئېغىر
          </div>
        </motion.div>
        
        {/* Person pushing with effort */}
        <motion.div 
          className="absolute top-1/2 left-1/4 transform -translate-y-1/2"
          animate={{
            x: [0, 10, 0],
            scale: [1, 0.98, 1]
          }}
          transition={{
            duration: 1,
            repeat: Infinity
          }}
        >
          {/* Effort indicator */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2
                         text-red-600 font-bold animate-pulse">
            قىيىن!
          </div>
          
          <div className="w-12 h-20 bg-gradient-to-b from-pink-300 to-pink-500 rounded-lg relative">
            <div className="absolute -right-2 top-4 w-4 h-8 bg-pink-400 rounded-l-full" />
          </div>
        </motion.div>
        
        {/* Small movement */}
        <motion.div 
          className="absolute top-1/2 left-2/3 transform -translate-y-1/2"
          animate={{
            x: [0, 5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          <ArrowRight className="w-8 h-8 text-blue-600 opacity-50" />
        </motion.div>
        
        {/* Force required */}
        {showForces && (
          <motion.div 
            className="absolute top-1/2 left-1/3 w-40 h-2 bg-red-600"
            style={{
              transform: 'translate(16px, 0)'
            }}
            animate={{
              scaleX: [1, 1.5, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity
            }}
          >
            <ArrowRight className="absolute -right-4 -top-3 w-8 h-8 text-red-600" />
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                           text-red-600 font-bold">
              كۈچ كۆپ
            </div>
          </motion.div>
        )}
      </div>
    );
  }

  function LightBallPush() {
    return (
      <div className="relative w-80 h-80">
        {/* Light ball */}
        <motion.div 
          className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2
                     w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500"
          style={{
            boxShadow: '0 0 25px rgba(251, 191, 36, 0.6)'
          }}
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="absolute top-2 left-3 w-6 h-6 bg-white/70 rounded-full blur-sm" />
          
          {/* Weight label */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                         text-yellow-700 font-bold bg-white/90 px-3 py-1 rounded-full">
            يېنىك
          </div>
        </motion.div>
        
        {/* Person pushing easily */}
        <motion.div 
          className="absolute top-1/2 left-1/4 transform -translate-y-1/2"
          animate={{
            x: [0, 20, 0]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {/* Easy indicator */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2
                         text-green-600 font-bold">
            ئاسان!
          </div>
          
          <div className="w-12 h-20 bg-gradient-to-b from-pink-300 to-pink-500 rounded-lg relative">
            <div className="absolute -right-2 top-4 w-4 h-8 bg-pink-400 rounded-l-full" />
          </div>
        </motion.div>
        
        {/* Large movement */}
        <motion.div 
          className="absolute top-1/2 left-2/3 transform -translate-y-1/2"
          animate={{
            x: [0, 20, 0]
          }}
          transition={{
            duration: 1,
            repeat: Infinity
          }}
        >
          <ArrowRight className="w-12 h-12 text-green-600" />
        </motion.div>
        
        {/* Force applied */}
        {showForces && (
          <motion.div 
            className="absolute top-1/2 left-1/3 w-32 h-2 bg-green-500"
            style={{
              transform: 'translate(10px, 0)'
            }}
            animate={{
              scaleX: [1, 1.2, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity
            }}
          >
            <ArrowRight className="absolute -right-4 -top-3 w-8 h-8 text-green-500" />
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                           text-green-600 font-bold">
              كۈچ ئاز
            </div>
          </motion.div>
        )}
        
        {/* Comparison text */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                       text-center text-slate-700 font-medium">
          يېنىك توپ → ئاسان ھەرىكەت
        </div>
      </div>
    );
  }

  function ThirdLawDemo() {
    return (
      <div className="relative w-80 h-80">
        {/* Two balls colliding */}
        <motion.div 
          className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2
                     w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"
          style={{
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)'
          }}
          animate={{
            x: [-40, 0, -40]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2
                     w-20 h-20 rounded-full bg-gradient-to-br from-red-400 to-red-600"
          style={{
            boxShadow: '0 0 20px rgba(239, 68, 68, 0.6)'
          }}
          animate={{
            x: [40, 0, 40]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        {/* Collision point */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       w-4 h-4 bg-yellow-500 rounded-full"
             style={{
               boxShadow: '0 0 15px rgba(234, 179, 8, 0.8)'
             }} />
        
        {/* Action-Reaction arrows */}
        {showForces && (
          <>
            <motion.div 
              className="absolute top-1/2 left-1/2 w-32 h-1 bg-blue-500"
              style={{
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                scaleX: [0, 1, 0]
              }}
              transition={{
                duration: 1,
                repeat: Infinity
              }}
            >
              <ArrowLeft className="absolute -left-4 -top-3 w-8 h-8 text-blue-500" />
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                             text-blue-600 font-bold text-sm">
                Action
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 left-1/2 w-32 h-1 bg-red-500"
              style={{
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                scaleX: [0, 1, 0]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0.5
              }}
            >
              <ArrowRight className="absolute -right-4 -top-3 w-8 h-8 text-red-500" />
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                             text-red-600 font-bold text-sm">
                Reaction
              </div>
            </motion.div>
          </>
        )}
        
        {/* Equal sign */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-12
                       text-2xl font-bold text-slate-700">
          =
        </div>
        
        {/* Newton's 3rd law */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                       bg-white/90 backdrop-blur-sm rounded-full px-6 py-3">
          <div className="text-purple-600 font-bold text-center">
            3-قانۇن: Action = Reaction
          </div>
        </div>
      </div>
    );
  }

  function ActionReaction() {
    return (
      <div className="relative w-80 h-80">
        {/* Person pushing wall */}
        <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2">
          {/* Wall */}
          <div className="w-4 h-40 bg-gradient-to-b from-slate-600 to-slate-800 rounded-lg" />
          
          {/* Person */}
          <motion.div 
            className="absolute -left-16 top-1/2 transform -translate-y-1/2"
            animate={{
              x: [0, -5, 0]
            }}
            transition={{
              duration: 1,
              repeat: Infinity
            }}
          >
            <div className="w-12 h-20 bg-gradient-to-b from-pink-300 to-pink-500 rounded-lg relative">
              <div className="absolute -right-2 top-4 w-4 h-8 bg-pink-400 rounded-l-full" />
            </div>
          </motion.div>
        </div>
        
        {/* Action-Reaction forces */}
        {showForces && (
          <>
            {/* Action force (person pushing wall) */}
            <motion.div 
              className="absolute top-1/2 left-1/3 w-24 h-1 bg-blue-500"
              style={{
                transform: 'translate(-24px, -0.5px)'
              }}
              animate={{
                scaleX: [1, 1.3, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity
              }}
            >
              <ArrowRight className="absolute -right-4 -top-3 w-8 h-8 text-blue-500" />
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                             text-blue-600 font-bold text-xs">
                ئىش-ھەرىكەت
              </div>
            </motion.div>
            
            {/* Reaction force (wall pushing back) */}
            <motion.div 
              className="absolute top-1/2 left-1/3 w-24 h-1 bg-red-500"
              style={{
                transform: 'translate(2px, -0.5px)'
              }}
              animate={{
                scaleX: [1, 1.3, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0.5
              }}
            >
              <ArrowLeft className="absolute -left-4 -top-3 w-8 h-8 text-red-500" />
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                             text-red-600 font-bold text-xs">
                قارشى تەسىر
              </div>
            </motion.div>
          </>
        )}
        
        {/* Person's feet slipping */}
        <motion.div 
          className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2
                     flex gap-1"
          animate={{
            x: [0, 5, 0]
          }}
          transition={{
            duration: 1,
            repeat: Infinity
          }}
        >
          <div className="w-6 h-10 bg-gradient-to-b from-gray-400 to-gray-600 rounded-lg" />
          <div className="w-6 h-10 bg-gradient-to-b from-gray-400 to-gray-600 rounded-lg" />
        </motion.div>
        
        {/* Explanation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                       text-center text-slate-700 font-medium max-w-xs">
          دىۋار سىزنى قايتا ئىتەيدۇ!
        </div>
      </div>
    );
  }

  function AppleFalling() {
    return (
      <div className="relative w-80 h-80">
        {/* Tree */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
          {/* Trunk */}
          <div className="w-6 h-32 bg-gradient-to-b from-amber-900 to-amber-800 rounded-t-lg" />
          
          {/* Leaves */}
          <div className="absolute -top-16 -left-12 w-36 h-32 rounded-full bg-gradient-to-b from-green-800 to-green-600" />
        </div>
        
        {/* Falling apple */}
        <motion.div 
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2
                     w-12 h-12 rounded-full bg-gradient-to-b from-red-500 to-red-700"
          animate={{
            y: [0, 120],
            rotate: 180
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeIn"
            },
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          style={{
            boxShadow: '0 0 20px rgba(239, 68, 68, 0.6)'
          }}
        >
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-600 rounded-sm" />
          
          {/* Gravity force vector */}
          {showForces && (
            <motion.div 
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2
                         w-1 h-16 bg-gradient-to-b from-orange-500 to-transparent"
              animate={{
                height: ['16px', '24px', '16px']
              }}
              transition={{
                duration: 1,
                repeat: Infinity
              }}
            />
          )}
        </motion.div>
        
        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-amber-800 to-amber-900 rounded-t-xl" />
        
        {/* Impact effect */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2
                     w-20 h-4 bg-gradient-to-t from-yellow-500/50 to-transparent rounded-full"
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: 1.9
          }}
        />
        
        {/* Gravity label */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2
                       text-orange-600 font-bold bg-white/90 px-4 py-2 rounded-full">
          جاذىبىيەت كۈچى
        </div>
      </div>
    );
  }

  function GravityForce() {
    return (
      <div className="relative w-80 h-80">
        {/* Earth */}
        <motion.div 
          className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 via-green-600 to-blue-800"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)'
          }}
        >
          {/* Continents */}
          <div className="absolute top-1/4 left-1/4 w-16 h-8 bg-gradient-to-b from-green-700 to-green-800 rounded-full" />
          <div className="absolute top-1/2 right-1/4 w-12 h-10 bg-gradient-to-b from-green-700 to-green-800 rounded-full" />
        </motion.div>
        
        {/* Gravity field lines */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-1/4 left-1/2 w-1 h-20 bg-gradient-to-t from-orange-500/50 to-transparent"
            style={{
              transformOrigin: 'bottom center',
              transform: `translate(-50%, 24px) rotate(${i * 30}deg)`
            }}
            animate={{
              height: ['20px', '30px', '20px'],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1
            }}
          />
        ))}
        
        {/* Falling objects */}
        {[
          { x: '30%', color: 'from-red-500 to-red-700', delay: 0 },
          { x: '50%', color: 'from-blue-500 to-blue-700', delay: 0.3 },
          { x: '70%', color: 'from-green-500 to-green-700', delay: 0.6 }
        ].map((obj, i) => (
          <motion.div
            key={i}
            className={`absolute w-8 h-8 rounded-full bg-gradient-to-b ${obj.color}`}
            style={{
              left: obj.x,
              top: '10%'
            }}
            animate={{
              y: [0, 180]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: obj.delay,
              ease: "easeIn"
            }}
          />
        ))}
        
        {/* Gravity equation */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2
                       text-2xl font-bold">
          <span className="text-orange-600">g</span>
          <span className="text-slate-700"> = 9.8 m/s²</span>
        </div>
        
        {/* Everything falls text */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                       text-orange-600 font-bold text-lg bg-white/90 backdrop-blur-sm rounded-full px-6 py-2">
          ھەممە نەرسە چۈشىدۇ!
        </div>
      </div>
    );
  }

  function WeightDemonstration() {
    const [mass, setMass] = useState(1);
    
    const weight = mass * 9.8;
    
    useEffect(() => {
      const interval = setInterval(() => {
        setMass(prev => prev === 5 ? 1 : prev + 1);
      }, 2000);
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="relative w-80 h-80">
        {/* Scale */}
        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
          {/* Scale base */}
          <div className="w-32 h-4 bg-gradient-to-b from-slate-600 to-slate-800 rounded-t-lg" />
          
          {/* Scale beam */}
          <motion.div 
            className="absolute -top-16 left-1/2 transform -translate-x-1/2
                       w-2 h-32 bg-gradient-to-b from-slate-500 to-slate-700 origin-bottom"
            animate={{
              rotate: mass === 1 ? 0 : mass === 5 ? -10 : 10
            }}
            transition={{
              duration: 1
            }}
          />
          
          {/* Scale pans */}
          <div className="absolute -top-48 left-1/2 transform -translate-x-1/2
                         flex gap-32">
            {/* Left pan with weights */}
            <div className="relative">
              <div className="w-20 h-4 bg-gradient-to-b from-slate-500 to-slate-700 rounded-lg" />
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                {[...Array(mass)].map((_, i) => (
                  <div key={i} className="w-12 h-4 bg-gradient-to-b from-blue-600 to-blue-800 rounded-lg mb-1" />
                ))}
              </div>
            </div>
            
            {/* Right pan with object */}
            <div className="relative">
              <div className="w-20 h-4 bg-gradient-to-b from-slate-500 to-slate-700 rounded-lg" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-700" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Weight calculation */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-2xl font-bold">
            <span className="text-purple-600">ئېغىرلىق</span>
            <span className="text-slate-700"> = </span>
            <span className="text-blue-600">ماسسا</span>
            <span className="text-slate-700"> × </span>
            <span className="text-orange-600">جاذىبىيەت</span>
          </div>
          <div className="text-lg text-slate-600 mt-2">
            W = m × g
          </div>
          <div className="text-xl font-bold text-purple-600 mt-2">
            {weight.toFixed(1)} N
          </div>
        </div>
        
        {/* Mass changing indicator */}
        <motion.div 
          className="absolute top-1/3 right-1/4 transform translate-y-1/2
                     text-blue-600 font-bold"
          animate={{
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 1,
            repeat: Infinity
          }}
        >
          ماسسا: {mass} kg
        </motion.div>
        
        {/* Gravity constant */}
        <div className="absolute top-1/3 left-1/4 transform translate-y-1/2
                       text-orange-600 font-bold">
          g = 9.8 m/s²
        </div>
      </div>
    );
  }

  function CarMotion() {
    return (
      <div className="relative w-80 h-80 overflow-hidden">
        {/* Road */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-700 to-slate-900">
          {/* Road lines */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
          {[...Array(3)].map((_, i) => (
            <div key={i} className="absolute top-1/2 w-8 h-1 bg-yellow-500"
                 style={{ left: `${25 + i * 25}%` }} />
          ))}
        </div>
        
        {/* Moving car */}
        <motion.div 
          className="absolute bottom-16 w-32 h-16"
          animate={{
            x: [-100, 100]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        >
          {/* Car body */}
          <div className="w-full h-12 bg-gradient-to-b from-red-500 to-red-700 rounded-lg">
            {/* Windows */}
            <div className="absolute top-1 left-4 right-4 h-4 bg-gradient-to-b from-blue-300 to-blue-500 rounded-t-lg" />
            {/* Wheels */}
            <div className="absolute -bottom-2 left-4 w-8 h-8 rounded-full bg-gradient-to-b from-black to-gray-800" />
            <div className="absolute -bottom-2 right-4 w-8 h-8 rounded-full bg-gradient-to-b from-black to-gray-800" />
          </div>
          
          {/* Motion trail */}
          <motion.div 
            className="absolute -left-8 bottom-4
                       w-8 h-2 bg-gradient-to-r from-red-400/30 to-transparent rounded-full"
            animate={{
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity
            }}
          />
        </motion.div>
        
        {/* Speedometer */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
          <div className="flex items-center gap-2">
            <Gauge className="w-6 h-6 text-blue-600" />
            <div>
              <div className="text-blue-600 font-bold">تېزلىك</div>
              <div className="text-2xl font-bold text-green-600">60 km/h</div>
            </div>
          </div>
        </div>
        
        {/* Brake lights (when stopping) */}
        <motion.div 
          className="absolute bottom-20 right-4 w-4 h-4 rounded-full bg-red-500"
          animate={{
            scale: [1, 1.5, 1],
            boxShadow: ['0 0 0 rgba(239, 68, 68, 0)', '0 0 20px rgba(239, 68, 68, 0.8)', '0 0 0 rgba(239, 68, 68, 0)']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
        
        {/* Start/Stop indicators */}
        <div className="absolute top-4 left-4 flex gap-2">
          <motion.div 
            className="px-3 py-2 bg-green-500/20 rounded-lg"
            animate={{
              backgroundColor: ['rgba(34, 197, 94, 0.2)', 'rgba(34, 197, 94, 0.4)', 'rgba(34, 197, 94, 0.2)']
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            <div className="text-green-600 font-bold">باشلاش</div>
          </motion.div>
          
          <motion.div 
            className="px-3 py-2 bg-red-500/20 rounded-lg"
            animate={{
              backgroundColor: ['rgba(239, 68, 68, 0.2)', 'rgba(239, 68, 68, 0.4)', 'rgba(239, 68, 68, 0.2)']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1
            }}
          >
            <div className="text-red-600 font-bold">توختاش</div>
          </motion.div>
        </div>
      </div>
    );
  }

  function SpeedChange() {
    const [speed, setSpeed] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setSpeed(prev => {
          if (prev < 10) return prev + 2;
          if (prev === 10) return 8;
          return 0;
        });
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="relative w-80 h-80">
        {/* Speed visualization */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Speedometer */}
          <div className="relative">
            {/* Gauge */}
            <div className="w-40 h-40 rounded-full border-8 border-slate-200">
              {/* Speed segments */}
              <div className="absolute inset-8 rounded-full border-4 border-transparent"
                   style={{
                     borderTopColor: speed >= 2 ? '#10b981' : 'transparent',
                     borderRightColor: speed >= 4 ? '#10b981' : 'transparent',
                     borderBottomColor: speed >= 6 ? '#f59e0b' : 'transparent',
                     borderLeftColor: speed >= 8 ? '#ef4444' : 'transparent'
                   }} />
              
              {/* Needle */}
              <motion.div 
                className="absolute top-1/2 left-1/2 w-1 h-16 bg-red-500 origin-top"
                style={{
                  transform: `translate(-50%, -100%) rotate(${speed * 18}deg)`
                }}
                animate={{
                  rotate: `${speed * 18}deg`
                }}
                transition={{
                  type: "spring",
                  stiffness: 100
                }}
              />
            </div>
            
            {/* Speed value */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                           text-3xl font-bold">
              <span className={speed < 6 ? "text-green-600" : speed < 9 ? "text-yellow-600" : "text-red-600"}>
                {speed * 10}
              </span>
              <span className="text-slate-600 text-sm"> km/h</span>
            </div>
          </div>
        </div>
        
        {/* Car showing speed */}
        <motion.div 
          className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2
                     w-24 h-12 bg-gradient-to-b from-blue-500 to-blue-700 rounded-lg"
          animate={{
            x: speed * 5
          }}
          transition={{
            type: "spring",
            stiffness: 50
          }}
        >
          {/* Motion effect based on speed */}
          <motion.div 
            className="absolute -left-4 bottom-2
                       w-4 h-2 bg-gradient-to-r from-blue-400/30 to-transparent rounded-full"
            animate={{
              opacity: speed > 0 ? [0, 0.5, 0] : 0,
              width: `${speed * 4}px`
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity
            }}
          />
        </motion.div>
        
        {/* Speed labels */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
          <div className="text-green-600 font-bold">ئاستا</div>
          <div className="text-yellow-600 font-bold">ئوتتۇرا</div>
          <div className="text-red-600 font-bold">تېز</div>
        </div>
        
        {/* Speed change explanation */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2
                       text-center text-slate-700 font-medium">
          تېزلىك ئۆزگىرىدۇ: {speed * 10} km/h
        </div>
      </div>
    );
  }

  function AccelerationDemo() {
    const [acceleration, setAcceleration] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setAcceleration(prev => {
          if (prev < 3) return prev + 1;
          return 0;
        });
      }, 1500);
      return () => clearInterval(interval);
    }, []);
    
    const accelerationLabels = ['توختاش', 'ئاستا تېزلىتىش', 'تېز تېزلىتىش', 'ئېغىز تېزلىتىش'];
    const accelerationColors = ['text-slate-600', 'text-green-600', 'text-yellow-600', 'text-red-600'];
    
    return (
      <div className="relative w-80 h-80 overflow-hidden">
        {/* Accelerating car */}
        <motion.div 
          className="absolute bottom-1/3 w-28 h-14 bg-gradient-to-b from-purple-500 to-purple-700 rounded-lg"
          animate={{
            x: [0, 100, 200],
            transition: {
              duration: acceleration === 0 ? 999 : 4 / (acceleration || 1),
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        >
          {/* Acceleration indicator */}
          <motion.div 
            className="absolute -right-4 bottom-1/4 w-8 h-1 bg-gradient-to-r from-purple-400 to-transparent"
            animate={{
              scaleX: acceleration
            }}
            transition={{
              type: "spring",
              stiffness: 100
            }}
          />
        </motion.div>
        
        {/* Road */}
        <div className="absolute bottom-1/3 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400" />
        
        {/* Acceleration meter */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-3xl font-bold text-center">
            <span className={accelerationColors[acceleration]}>
              a = {acceleration === 0 ? '0' : acceleration}m/s²
            </span>
          </div>
          <div className="text-lg text-slate-600 mt-2">
            {accelerationLabels[acceleration]}
          </div>
        </div>
        
        {/* Acceleration visualization */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-2">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-8 h-8 rounded-full ${i <= acceleration ? 'bg-gradient-to-b from-purple-500 to-purple-700' : 'bg-slate-200'}`}
                animate={{
                  scale: i === acceleration ? [1, 1.2, 1] : 1
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity
                }}
              />
            ))}
          </div>
          <div className="text-sm text-slate-600 text-center mt-2">
            تېزلىتىش دەرىجىسى
          </div>
        </div>
        
        {/* Equation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                       text-lg font-bold">
          <span className="text-green-600">تېزلىتىش</span>
          <span className="text-slate-700"> = </span>
          <span className="text-blue-600">تېزلىك ئۆزگىرىشى</span>
          <span className="text-slate-700"> / </span>
          <span className="text-orange-600">ۋاقىت</span>
        </div>
      </div>
    );
  }

  function RocketLaunch() {
    return (
      <div className="relative w-80 h-80 overflow-hidden">
        {/* Launch pad */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          {/* Pad base */}
          <div className="w-24 h-8 bg-gradient-to-b from-slate-700 to-slate-900 rounded-t-lg" />
          
          {/* Support arms */}
          <div className="absolute -top-12 left-1/4 w-2 h-12 bg-gradient-to-b from-gray-600 to-gray-800 transform -rotate-12" />
          <div className="absolute -top-12 right-1/4 w-2 h-12 bg-gradient-to-b from-gray-600 to-gray-800 transform rotate-12" />
        </div>
        
        {/* Rocket */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                     w-16 h-40"
          animate={{
            y: [0, -200, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {/* Rocket body */}
          <div className="w-full h-32 bg-gradient-to-b from-red-600 via-orange-500 to-yellow-400 rounded-t-lg">
            {/* Fins */}
            <div className="absolute -bottom-4 left-0 w-4 h-8 bg-gradient-to-b from-red-700 to-red-800 transform -rotate-45" />
            <div className="absolute -bottom-4 right-0 w-4 h-8 bg-gradient-to-b from-red-700 to-red-800 transform rotate-45" />
            
            {/* Windows */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-b from-blue-300 to-blue-500" />
          </div>
          
          {/* Exhaust flame */}
          <motion.div 
            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2
                       w-12 h-16 bg-gradient-to-t from-yellow-500 via-orange-600 to-red-700 rounded-b-full"
            animate={{
              height: ['16px', '24px', '16px'],
              scaleY: [1, 1.2, 1]
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity
            }}
            style={{
              filter: 'blur(2px)'
            }}
          />
          
          {/* Smoke trail */}
          <motion.div 
            className="absolute -bottom-24 left-1/2 transform -translate-x-1/2
                       w-24 h-24 bg-gradient-to-t from-gray-300/50 to-transparent rounded-full blur-sm"
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 1,
              repeat: Infinity
            }}
          />
        </motion.div>
        
        {/* Countdown */}
        <motion.div 
          className="absolute top-8 left-1/2 transform -translate-x-1/2
                     text-3xl font-bold text-red-600 bg-white/90 rounded-full w-16 h-16 flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
            backgroundColor: ['rgba(255, 255, 255, 0.9)', 'rgba(239, 68, 68, 0.2)', 'rgba(255, 255, 255, 0.9)']
          }}
          transition={{
            duration: 1,
            repeat: Infinity
          }}
        >
          3
        </motion.div>
        
        {/* Thrust label */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2
                       text-orange-600 font-bold bg-white/90 px-4 py-2 rounded-full">
          ئوت كۈچى
        </div>
      </div>
    );
  }

  function RocketMotion() {
    return (
      <div className="relative w-80 h-80 overflow-hidden">
        {/* Rocket in space */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-20 h-40"
          animate={{
            x: [-80, 80],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{
            x: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            },
            rotate: {
              duration: 2,
              repeat: Infinity
            }
          }}
        >
          {/* Rocket */}
          <div className="w-full h-32 bg-gradient-to-b from-blue-600 to-blue-800 rounded-t-lg">
            {/* Fins */}
            <div className="absolute -bottom-4 left-0 w-4 h-8 bg-gradient-to-b from-blue-700 to-blue-900 transform -rotate-45" />
            <div className="absolute -bottom-4 right-0 w-4 h-8 bg-gradient-to-b from-blue-700 to-blue-900 transform rotate-45" />
          </div>
          
          {/* Exhaust */}
          <motion.div 
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                       w-8 h-12 bg-gradient-to-t from-blue-400 to-blue-600 rounded-b-full"
            animate={{
              height: ['12px', '16px', '12px']
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity
            }}
          />
        </motion.div>
        
        {/* Action-Reaction demonstration */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex items-center justify-center gap-4 mb-2">
            {/* Exhaust particles going down */}
            <motion.div 
              className="flex flex-col items-center"
              animate={{
                y: [0, 20]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity
              }}
            >
              <div className="w-2 h-2 rounded-full bg-orange-500 mb-1" />
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <ArrowDown className="w-4 h-4 text-orange-600" />
              <div className="text-xs text-orange-600">ئوت (تۆۋەنگە)</div>
            </motion.div>
            
            {/* Equal sign */}
            <div className="text-2xl font-bold text-slate-700">=</div>
            
            {/* Rocket going up */}
            <motion.div 
              className="flex flex-col items-center"
              animate={{
                y: [0, -20]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity
              }}
            >
              <ArrowUp className="w-4 h-4 text-blue-600" />
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-1" />
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="text-xs text-blue-600">راكېتا (ئېگىزلىككە)</div>
            </motion.div>
          </div>
          
          <div className="text-sm font-bold text-slate-700">
            Action = Reaction
          </div>
        </div>
        
        {/* Stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    );
  }

  function KineticEnergy() {
    const [velocity, setVelocity] = useState(1);
    const mass = 2;
    const kineticEnergy = 0.5 * mass * velocity * velocity;
    
    useEffect(() => {
      const interval = setInterval(() => {
        setVelocity(prev => prev === 5 ? 1 : prev + 1);
      }, 2000);
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="relative w-80 h-80">
        {/* Energy equation */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-3xl font-bold">
            <span className="text-yellow-600">KE</span>
            <span className="text-slate-700"> = ½ × </span>
            <span className="text-blue-600">m</span>
            <span className="text-slate-700"> × </span>
            <span className="text-green-600">v²</span>
          </div>
          <div className="text-lg text-slate-600 mt-2">
            ھەرىكەت ئېنېرگىيەسى = يېرىم × ماسسا × تېزلىك²
          </div>
        </div>
        
        {/* Visualization */}
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Moving ball showing energy */}
          <motion.div 
            className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600"
            animate={{
              x: velocity * 10,
              scale: 1 + velocity * 0.1
            }}
            transition={{
              type: "spring",
              stiffness: 100
            }}
            style={{
              boxShadow: `0 0 ${velocity * 10}px rgba(234, 179, 8, 0.6)`
            }}
          />
          
          {/* Energy value */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2
                         text-2xl font-bold text-yellow-600">
            {kineticEnergy.toFixed(1)} J
          </div>
        </div>
        
        {/* Parameters */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6">
          <div className="text-center">
            <div className="text-blue-600 font-bold">ماسسا</div>
            <div className="text-xl font-bold">{mass} kg</div>
          </div>
          
          <div className="text-center">
            <div className="text-green-600 font-bold">تېزلىك</div>
            <motion.div 
              className="text-xl font-bold"
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity
              }}
            >
              {velocity} m/s
            </motion.div>
          </div>
        </div>
        
        {/* Energy indicator */}
        <motion.div 
          className="absolute top-1/2 right-8 transform -translate-y-1/2
                     w-4 h-32 bg-gradient-to-t from-yellow-400 via-yellow-500 to-yellow-600 rounded-full"
          style={{
            height: `${kineticEnergy * 10}px`
          }}
          animate={{
            height: `${kineticEnergy * 10}px`
          }}
          transition={{
            type: "spring",
            stiffness: 50
          }}
        >
          <div className="absolute -left-8 top-0 text-yellow-600 font-bold">
            ئېنېرگىيە
          </div>
        </motion.div>
      </div>
    );
  }

  function EnergyConversion() {
    const [energyState, setEnergyState] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setEnergyState(prev => (prev + 1) % 3);
      }, 2000);
      return () => clearInterval(interval);
    }, []);
    
    const energyStates = [
      { type: 'پوتېنسىيال', color: 'from-blue-500 to-blue-700', icon: '📐', desc: 'يۇقىرىدا' },
      { type: 'كىنېتىك', color: 'from-yellow-500 to-yellow-700', icon: '⚡', desc: 'ھەرىكەت' },
      { type: 'ئىسسىقلىق', color: 'from-red-500 to-red-700', icon: '🔥', desc: 'ئىسسىقلىق' }
    ];
    
    const currentEnergy = energyStates[energyState];
    
    return (
      <div className="relative w-80 h-80">
        {/* Energy transformation cycle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Circular path */}
          <div className="w-48 h-48 rounded-full border-4 border-dashed border-slate-300" />
          
          {/* Energy states on circle */}
          {energyStates.map((energy, i) => (
            <motion.div
              key={i}
              className={`absolute w-16 h-16 rounded-full bg-gradient-to-br ${energy.color} flex items-center justify-center text-2xl
                         ${i === energyState ? 'scale-125' : 'scale-100'}`}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 120}deg) translateX(96px) rotate(-${i * 120}deg)`
              }}
              animate={{
                scale: i === energyState ? [1, 1.2, 1] : 1
              }}
              transition={{
                duration: 1,
                repeat: Infinity
              }}
            >
              {energy.icon}
            </motion.div>
          ))}
          
          {/* Current energy in center */}
          <motion.div 
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       w-20 h-20 rounded-full bg-gradient-to-br ${currentEnergy.color} flex items-center justify-center text-3xl`}
            animate={{
              scale: [1, 1.1, 1],
              rotate: 360
            }}
            transition={{
              scale: {
                duration: 1,
                repeat: Infinity
              },
              rotate: {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {currentEnergy.icon}
          </motion.div>
        </div>
        
        {/* Current energy description */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-2xl font-bold mb-2">
            {currentEnergy.type} ئېنېرگىيە
          </div>
          <div className="text-lg text-slate-600">
            {currentEnergy.desc}
          </div>
        </div>
        
        {/* Transformation arrows */}
        <motion.div 
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-3xl"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🔄
        </motion.div>
        
        {/* Energy conservation */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2
                       text-slate-700 font-bold text-center">
          ئېنېرگىيە يوققا چىقماس ۋە يوقتىن پەيدا بولمايدۇ
        </div>
      </div>
    );
  }

  function PendulumSwing() {
    const [angle, setAngle] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setAngle(prev => {
          if (prev >= 30) return -30;
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="relative w-80 h-80">
        {/* Pendulum setup */}
        <div className="absolute top-1/4 left-1/2">
          {/* Support */}
          <div className="w-32 h-4 bg-gradient-to-b from-slate-600 to-slate-800 rounded-lg" />
          
          {/* String */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2
                         w-1 h-40 bg-gradient-to-b from-slate-500 to-slate-700"
               style={{
                 transform: `translate(-50%, 0) rotate(${angle}deg)`,
                 transformOrigin: 'top center'
               }} />
          
          {/* Bob */}
          <motion.div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2
                       w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-700"
            style={{
              transform: `translate(-50%, 50%) rotate(${angle}deg)`,
              transformOrigin: 'top center'
            }}
            animate={{
              rotate: angle
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
          />
        </div>
        
        {/* Energy transformation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
          {/* Potential energy at extremes */}
          <motion.div 
            className={`px-4 py-2 rounded-lg ${Math.abs(angle) > 20 ? 'bg-blue-500/30' : 'bg-slate-200/30'}`}
            animate={{
              scale: Math.abs(angle) > 20 ? [1, 1.1, 1] : 1
            }}
            transition={{
              duration: 1
            }}
          >
            <div className={`font-bold ${Math.abs(angle) > 20 ? 'text-blue-600' : 'text-slate-400'}`}>
              پوتېنسىيال
            </div>
          </motion.div>
          
          {/* Kinetic energy at center */}
          <motion.div 
            className={`px-4 py-2 rounded-lg ${Math.abs(angle) < 10 ? 'bg-yellow-500/30' : 'bg-slate-200/30'}`}
            animate={{
              scale: Math.abs(angle) < 10 ? [1, 1.1, 1] : 1
            }}
            transition={{
              duration: 1
            }}
          >
            <div className={`font-bold ${Math.abs(angle) < 10 ? 'text-yellow-600' : 'text-slate-400'}`}>
              كىنېتىك
            </div>
          </motion.div>
        </div>
        
        {/* Swing path */}
        <svg className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-64 h-40 overflow-visible">
          <path
            d="M 128 0 A 128 256 0 0 1 0 40"
            fill="none"
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="2"
            strokeDasharray="4"
          />
          <path
            d="M 128 0 A 128 256 0 0 0 256 40"
            fill="none"
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="2"
            strokeDasharray="4"
          />
        </svg>
        
        {/* Period display */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2
                       text-slate-700 font-bold">
          مايەن ۋاقتى: 2s
        </div>
      </div>
    );
  }

  function PendulumMotion() {
    return (
      <div className="relative w-80 h-80 overflow-hidden">
        {/* Multiple pendulums with different lengths */}
        {[
          { length: 40, color: 'from-red-500 to-red-700', delay: 0 },
          { length: 60, color: 'from-blue-500 to-blue-700', delay: 0.2 },
          { length: 80, color: 'from-green-500 to-green-700', delay: 0.4 }
        ].map((pendulum, i) => (
          <div key={i} className="absolute top-0" style={{ left: `${25 + i * 25}%` }}>
            {/* String */}
            <motion.div 
              className="w-1 bg-gradient-to-b from-slate-500 to-slate-700"
              style={{ height: `${pendulum.length}px` }}
              animate={{
                rotate: [0, 20, 0, -20, 0]
              }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                delay: pendulum.delay,
                ease: "easeInOut"
              }}
            />
            
            {/* Bob */}
            <motion.div 
              className={`w-8 h-8 rounded-full bg-gradient-to-br ${pendulum.color} transform -translate-x-1/2`}
              style={{ marginTop: `${pendulum.length - 16}px` }}
              animate={{
                x: [0, 30, 0, -30, 0]
              }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                delay: pendulum.delay,
                ease: "easeInOut"
              }}
            />
          </div>
        ))}
        
        {/* Support bar */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-slate-600 to-slate-800 rounded-lg" />
        
        {/* Motion persistence text */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                       text-center text-slate-700 font-medium">
          مايەن ھەرىكىتى داۋاملاشىدۇ
        </div>
        
        {/* Newton's 1st law application */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2
                       text-blue-600 font-bold bg-white/90 px-4 py-2 rounded-full">
          1-قانۇن: ھەرىكەت داۋاملاشىدۇ
        </div>
      </div>
    );
  }

  function InertiaDemo() {
    const [forceApplied, setForceApplied] = useState(false);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setForceApplied(prev => !prev);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="relative w-80 h-80 overflow-hidden">
        {/* Table with objects */}
        <div className="absolute bottom-1/3 left-0 right-0 h-8 bg-gradient-to-b from-amber-800 to-amber-900 rounded-t-xl" />
        
        {/* Objects on table */}
        <div className="absolute bottom-1/3 left-0 right-0">
          {/* Stationary objects */}
          <div className="absolute left-1/4 transform -translate-x-1/2 translate-y-2">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700" />
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700" />
          </div>
          
          <div className="absolute left-3/4 transform -translate-x-1/2 translate-y-2">
            <div className="w-10 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-lg" />
          </div>
        </div>
        
        {/* Force application (table pulled quickly) */}
        <motion.div 
          className="absolute bottom-1/3 left-0 right-0"
          animate={{
            x: forceApplied ? 50 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10
          }}
        />
        
        {/* Objects staying in place (inertia) */}
        <div className="absolute bottom-1/3 left-0 right-0">
          {/* These objects should appear to stay in place when table moves */}
          <motion.div 
            className="absolute left-1/4 transform -translate-x-1/2 translate-y-2"
            animate={{
              x: forceApplied ? -50 : 0
            }}
            transition={{
              type: "spring",
              stiffness: 50
            }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700" />
          </motion.div>
          
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 translate-y-2"
            animate={{
              x: forceApplied ? -50 : 0
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              delay: 0.1
            }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700" />
          </motion.div>
          
          <motion.div 
            className="absolute left-3/4 transform -translate-x-1/2 translate-y-2"
            animate={{
              x: forceApplied ? -50 : 0
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              delay: 0.2
            }}
          >
            <div className="w-10 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-lg" />
          </motion.div>
        </div>
        
        {/* Force indicator */}
        <motion.div 
          className="absolute bottom-1/2 left-4 w-32 h-2 bg-red-500"
          animate={{
            scaleX: forceApplied ? [0, 1, 0] : 0
          }}
          transition={{
            duration: 0.5
          }}
        >
          <ArrowRight className="absolute -right-4 -top-3 w-8 h-8 text-red-500" />
        </motion.div>
        
        {/* Inertia explanation */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-2xl font-bold text-purple-600 mb-2">
            ئىنېرتسىيە
          </div>
          <div className="text-slate-700">
            جىسىم ھەرىكەت ھالىتىنى ساقلايدۇ
          </div>
        </div>
        
        {/* Objects falling off (when force is too strong) */}
        {forceApplied && (
          <motion.div 
            className="absolute left-3/4 transform -translate-x-1/2
                       w-10 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-lg"
            initial={{ y: 0 }}
            animate={{ y: 100 }}
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
          />
        )}
      </div>
    );
  }

  function UniversalLaws() {
    return (
      <div className="relative w-80 h-80">
        {/* Universe of objects following Newton's laws */}
        <div className="absolute inset-0">
          {/* Multiple objects with different motions */}
          {[
            { x: '20%', y: '30%', size: 16, color: 'from-blue-500 to-blue-700', motion: 'linear' },
            { x: '40%', y: '60%', size: 20, color: 'from-red-500 to-red-700', motion: 'circular' },
            { x: '60%', y: '40%', size: 12, color: 'from-green-500 to-green-700', motion: 'linear' },
            { x: '80%', y: '70%', size: 24, color: 'from-yellow-500 to-yellow-700', motion: 'elliptical' },
            { x: '30%', y: '80%', size: 18, color: 'from-purple-500 to-purple-700', motion: 'linear' }
          ].map((obj, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full bg-gradient-to-br ${obj.color}`}
              style={{
                left: obj.x,
                top: obj.y,
                width: `${obj.size}px`,
                height: `${obj.size}px`,
                translateX: '-50%',
                translateY: '-50%'
              }}
              animate={
                obj.motion === 'linear' ? {
                  x: [0, 20, 0, -20, 0],
                  y: [0, 10, 0, -10, 0]
                } : obj.motion === 'circular' ? {
                  x: [0, 20, 0, -20, 0],
                  y: [0, 0, 20, 0, -20],
                  rotate: 360
                } : {
                  x: [0, 30, 0, -30, 0],
                  y: [0, 15, 30, 15, 0]
                }
              }
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        {/* Newton's laws displayed */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-2xl font-bold text-slate-800 mb-4">
            نىيۇتون قانۇنلىرى
          </div>
          
          <div className="space-y-2">
            <div className="text-blue-600 font-bold">1. ئىنېرتسىيە قانۇنى</div>
            <div className="text-green-600 font-bold">2. F = ma</div>
            <div className="text-red-600 font-bold">3. Action = Reaction</div>
          </div>
        </div>
        
        {/* Universal application text */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                       text-center text-slate-700 font-medium max-w-xs">
          كىچىكتىن چوڭغىچە ھەممە جىسىملار بۇ قانۇنلارغا بويسۇنىدۇ
        </div>
        
        {/* Force vectors connecting objects */}
        {showForces && (
          <svg className="absolute inset-0 w-full h-full">
            {[
              { x1: 20, y1: 30, x2: 40, y2: 60 },
              { x1: 40, y1: 60, x2: 60, y2: 40 },
              { x1: 60, y1: 40, x2: 80, y2: 70 },
              { x1: 80, y1: 70, x2: 30, y2: 80 }
            ].map((line, i) => (
              <motion.line
                key={i}
                x1={`${line.x1}%`}
                y1={`${line.y1}%`}
                x2={`${line.x2}%`}
                y2={`${line.y2}%`}
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1"
                strokeDasharray="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.5
                }}
              />
            ))}
          </svg>
        )}
      </div>
    );
  }

  function CelebrationPhysics() {
    return (
      <div className="relative w-80 h-80">
        {/* Newton portrait style celebration */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-48 h-48 rounded-full border-8 border-amber-600 bg-gradient-to-br from-amber-200 to-amber-400"
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
        >
          {/* Newton-style hair */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2
                         w-32 h-16 bg-gradient-to-b from-amber-800 to-amber-900 rounded-full" />
          
          {/* Apple */}
          <motion.div 
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2
                       w-12 h-12 rounded-full bg-gradient-to-b from-red-500 to-red-700"
            animate={{
              y: [0, 20, 0],
              rotate: 360
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-600 rounded-sm" />
          </motion.div>
        </motion.div>
        
        {/* Orbiting physics symbols */}
        {[
          { symbol: 'F=ma', color: 'text-blue-600' },
          { symbol: 'a=v/t', color: 'text-green-600' },
          { symbol: 'p=mv', color: 'text-red-600' },
          { symbol: 'E=½mv²', color: 'text-yellow-600' }
        ].map((eq, i) => (
          <motion.div
            key={i}
            className={`absolute text-lg font-bold ${eq.color} bg-white/90 rounded-full w-16 h-16 flex items-center justify-center`}            style={{
              left: '50%',
              top: '50%',
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
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              },
              y: {
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              },
              rotate: {
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {eq.symbol}
          </motion.div>
        ))}

        {/* Celebration particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"
            style={{
              left: '50%',
              top: '50%'
            }}
            initial={{
              x: 0,
              y: 0,
              opacity: 1
            }}
            animate={{
              x: Math.cos((i * Math.PI * 2) / 15) * 100,
              y: Math.sin((i * Math.PI * 2) / 15) * 100,
              opacity: 0
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1
            }}
          />
        ))}

        {/* Congratulations text */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                     text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.5
          }}
        >
          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            تەبرىكلەيمىز!
          </div>
          <div className="text-lg text-slate-700 mt-2">
            سىز نىيۇتون فىزىكىسىنى چۈشەندىڭىز!
          </div>
        </motion.div>

        {/* Mini physics icons floating */}
        {[Apple, Rocket, Car, Scale, Target].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: '20%'
            }}
            animate={{
              y: [0, -20, 0],
              rotate: 360
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              delay: i * 0.3
            }}
          >
            <Icon className="w-8 h-8 text-blue-600" />
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                نىيۇتون فىزىكىسى
              </h1>
              <p className="text-slate-600">كىچىك بالىلار ئۈچۈن ئوقۇتۇش قورالى</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{currentPage + 1}</div>
              <div className="text-sm text-slate-600">بەت / {totalPages}</div>
            </div>
          </div>
        </div>

        {/* Main Book Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Book Viewer */}
          <div className="flex-1">
            <div 
              ref={bookRef}
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white"
            >
              {/* Book Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />
              
              {/* Current Page Content */}
              <div className="relative p-8 md:p-12 min-h-[600px] flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex flex-col items-center justify-center"
                  >
                    <div className="text-center mb-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                        {pages[currentPage].title}
                      </h2>
                      {pages[currentPage].subtitle && (
                        <p className="text-xl text-slate-600 mb-4">
                          {pages[currentPage].subtitle}
                        </p>
                      )}
                      <p className="text-lg text-slate-700">
                        {pages[currentPage].content}
                      </p>
                    </div>
                    
                    <div className="w-full flex items-center justify-center">
                      {pages[currentPage].element}
                    </div>
                    
                    <div className="mt-8 text-slate-500">
                      بەت: {pages[currentPage].pageNumber} / {totalPages}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Controls and Navigation */}
          <div className="lg:w-80 space-y-6">
            {/* Control Buttons */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-slate-800 mb-4">كونتروللار</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl transition-all ${
                    currentPage === 0 
                      ? 'bg-slate-100 text-slate-400' 
                      : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                  }`}
                >
                  <ArrowLeft className="w-5 h-5" />
                  ئالدىنقى بەت
                </button>
                
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1}
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl transition-all ${
                    currentPage === totalPages - 1
                      ? 'bg-slate-100 text-slate-400'
                      : 'bg-green-100 text-green-600 hover:bg-green-200'
                  }`}
                >
                  كېيىنكى بەت
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => goToPage(0)}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-amber-100 text-amber-600 hover:bg-amber-200 transition-all"
                >
                  <Home className="w-5 h-5" />
                  باش بەت
                </button>
                
                <button
                  onClick={toggleFullscreen}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-purple-100 text-purple-600 hover:bg-purple-200 transition-all"
                >
                  {isFullscreen ? (
                    <>
                      <Minimize2 className="w-5 h-5" />
                      كىچىكلەت
                    </>
                  ) : (
                    <>
                      <Maximize2 className="w-5 h-5" />
                      تولۇق ئېكران
                    </>
                  )}
                </button>
                
                <button
                  onClick={toggleSound}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-pink-100 text-pink-600 hover:bg-pink-200 transition-all"
                >
                  {soundOn ? (
                    <>
                      <Volume2 className="w-5 h-5" />
                      ئاۋاز يوق
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-5 h-5" />
                      ئاۋاز چىقار
                    </>
                  )}
                </button>
                
                <button
                  onClick={toggleAutoPlay}
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl transition-all ${
                    autoPlay
                      ? 'bg-red-100 text-red-600 hover:bg-red-200'
                      : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                  }`}
                >
                  {autoPlay ? (
                    <>
                      <Pause className="w-5 h-5" />
                      توختات
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      ئاپتومات قويۇش
                    </>
                  )}
                </button>
              </div>
              
              {/* Page Navigation */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">بەتلەر:</span>
                  <button
                    onClick={toggleForceVectors}
                    className={`text-sm px-3 py-1 rounded-full ${
                      showForces
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {showForces ? 'كۈچ كۆرسەتكۈچلەرنى يوشۇر' : 'كۈچ كۆرسەتكۈچلەرنى كۆرسەت'}
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {pages.slice(0, 12).map((page, index) => (
                    <button
                      key={index}
                      onClick={() => goToPage(index)}
                      className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                        currentPage === index
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {pages.slice(12).map((page, index) => (
                    <button
                      key={index + 12}
                      onClick={() => goToPage(index + 12)}
                      className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                        currentPage === index + 12
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {index + 13}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Physics Concepts */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-slate-800 mb-4">فىزىكا ئۇقۇملىرى</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <Weight className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-blue-700">كۈچ (Force)</div>
                    <div className="text-sm text-slate-600">جىسىمنى ھەرىكەتلەندۈرىدۇ</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                  <div className="p-2 bg-green-500 rounded-lg">
                    <Gauge className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-green-700">ماسسا (Mass)</div>
                    <div className="text-sm text-slate-600">ماددا مىقدارى</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-red-50 to-red-100 rounded-xl">
                  <div className="p-2 bg-red-500 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-red-700">تېزلىتىش (Acceleration)</div>
                    <div className="text-sm text-slate-600">تېزلىق ئۆزگىرىشى</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                  <div className="p-2 bg-purple-500 rounded-lg">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-purple-700">ئېنېرگىيە (Energy)</div>
                    <div className="text-sm text-slate-600">ئىش قىلىش ئىقتىدارى</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keyboard Shortcuts */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-slate-800 mb-4">تېز كونتروللار</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 hover:bg-slate-50 rounded-lg">
                  <span className="text-slate-600">كىيىنكى بەت:</span>
                  <kbd className="px-2 py-1 bg-slate-100 rounded text-slate-700">←</kbd>
                </div>
                <div className="flex justify-between items-center p-2 hover:bg-slate-50 rounded-lg">
                  <span className="text-slate-600">ئالدىنقى بەت:</span>
                  <kbd className="px-2 py-1 bg-slate-100 rounded text-slate-700">→</kbd>
                </div>
                <div className="flex justify-between items-center p-2 hover:bg-slate-50 rounded-lg">
                  <span className="text-slate-600">باش بەت:</span>
                  <kbd className="px-2 py-1 bg-slate-100 rounded text-slate-700">Home</kbd>
                </div>
                <div className="flex justify-between items-center p-2 hover:bg-slate-50 rounded-lg">
                  <span className="text-slate-600">تولۇق ئېكران:</span>
                  <kbd className="px-2 py-1 bg-slate-100 rounded text-slate-700">F</kbd>
                </div>
                <div className="flex justify-between items-center p-2 hover:bg-slate-50 rounded-lg">
                  <span className="text-slate-600">كۈچ كۆرسەتكۈچ:</span>
                  <kbd className="px-2 py-1 bg-slate-100 rounded text-slate-700">C</kbd>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-500 text-sm">
          <p>  KeLBiL باللار مائارىپ تەتقىقاتى</p>
          <p className="mt-1">Newtonian Physics for Babies - KeLBiL Education</p>
        </div>
      </div>
    </div>
  );
};

export default NewtonianPhysicsForBabies;