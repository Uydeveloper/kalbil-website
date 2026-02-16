// quantum01.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Atom, Orbit, Electron, Battery, BatteryCharging, 
  Sun, Moon, Sparkles, ChevronRight, ChevronLeft, 
  Circle, Target, ZapOff, ArrowUp, ArrowDown,
  Home, Star, Maximize2, Minimize2, Volume2, VolumeX
} from 'lucide-react';

const QuantumPhysicsBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);
  const bookRef = useRef(null);
  const audioContextRef = useRef(null);

  const totalPages = 26;

  const pages = [
    {
      title: "كىۋانىت فىزىكىسى",
      subtitle: "كىچىك بالىلار ئۈچۈن",
      content: "ئۇيغۇرچە ",
      element: <EnergyBall energy={100} />,
      pageNumber: 1
    },
    {
      title: "كىۋانىت فىزىكىسى",
      subtitle: "كىچىك بالىلار ئۈچۈن",
      content: "كىچىك دۇنىيىنىڭ زور سىرلىرى",
      element: <EnergyBall energy={100} />,
      pageNumber: 2
    },
    {
      title: "بۇ بىر توپ",
      content: "بۇ رەڭدار ۋە پارقىراق بىر توپ",
      element: <EnergyBall energy={100} />,
      pageNumber: 3
    },
    {
      title: "بۇ توپنىڭ ئېنېرگىيەسى بار",
      content: "ئۇ تەبىئىي ھالدا پارقىرايدۇ ۋە ھەرىكەت قىلالايدۇ",
      element: <EnergyBall energy={100} />,
      pageNumber: 4
    },
    {
      title: "بۇ بىر توپ",
      content: "لېكىن بۇ توپ باشقا - ئېنېرگىيەسى يوق",
      element: <NoEnergyBall />,
      pageNumber: 5
    },
    {
      title: "بۇ توپنىڭ ئېنېرگىيەسى يوق",
      content: "ئۇ سۇس ۋە ھەرىكەتسىز",
      element: <NoEnergyBall />,
      pageNumber: 6
    },
    {
      title: "ھەممە توپلار ئاتوملاردىن تۈزۈلگەن",
      content: "ئاتوملار ھەممە ماددىلارنىڭ قۇرۇلما بىرلىكى",
      element: <AtomStructure />,
      pageNumber: 7
    },
    {
      title: "نىترونلار بار",
      content: "نىترونلار يادرونىڭ مەركىزىي قىسمىدا",
      element: <NeutronAtom />,
      pageNumber: 8
    },
    {
      title: "ھەم پروتونلار",
      content: "پروتونلار يادرودا نىترونلار بىلەن بىللە",
      element: <ProtonAtom />,
      pageNumber: 9
    },
    {
      title: "ھەم ئېلېكترونلار",
      content: "ئېلېكترونلار يادرونىڭ ئەتراپىدا يادىرونى مەركەز قىلىپ ئايلىنىدۇ",
      element: <ElectronAtom />,
      pageNumber: 10
    },
    {
      title: "ئېلېكترونلارنىڭ ئېنېرگىيەسى بار",
      content: "ھەر بىر ئېلېكتروننىڭ ئۆز ئېنېرگىيە دەرىجىسى بار",
      element: <ElectronEnergyLevels />,
      pageNumber: 11
    },
    {
      title: "بۇ ئېلېكتروننىڭ ئەڭ كۆپ ئېنېرگىيەسى بار",
      content: "ئۇ ئەڭ يۇقىرى ئوربىتىدا ۋە ئەڭ كۆپ پارقىرايدۇ",
      element: <MaxEnergyElectron />,
      pageNumber: 12
    },
    {
      title: "بۇ ئېلېكتروننىڭ ئەڭ ئاز ئېنېرگىيەسى بار",
      content: "ئۇ ئەڭ تۆۋەن ئوربىتىدا ۋە ئەڭ ئاز پارقىرايدۇ",
      element: <MinEnergyElectron />,
      pageNumber: 13
    },
    {
      title: "ئېنېرگىيە كوانتلاشتۇرۇلغان",
      content: "ئېنېرگىيە ئارىلاشمايدۇ، ئۇ بىر-بىرلىك بىرلىكلەردە كېلىدۇ",
      element: <QuantizedEnergy />,
      pageNumber: 14
    },
    {
      title: "بىر ئېلېكترون بۇ يەردە بولالايدۇ",
      content: "يېشىل ئوربىتلاردا بولالايدۇ",
      element: <AllowedOrbit position={1} />,
      pageNumber: 15
    },
    {
      title: "ياكى بۇ يەردە",
      content: "يېشىل ئوربىتلارنىڭ ھەر قايسىسىدا بولالايدۇ",
      element: <AllowedOrbit position={2} />,
      pageNumber: 16
    },
    {
      title: "ياكى بۇ يەردە",
      content: "يېشىل ئوربىتلارنىڭ ھەر قايسىسىدا بولالايدۇ",
      element: <AllowedOrbit position={3} />,
      pageNumber: 17
    },
    {
      title: "ئەمما بۇ يەردە ئەمەس",
      content: "قىزىل چىزىقلىق ئوربىتلاردا بولالمايدۇ",
      element: <ForbiddenOrbit />,
      pageNumber: 18
    },
    {
      title: "ياكى بۇ يەردە ئەمەس",
      content: "قىزىل چىزىقلىق ئوربىتلاردا بولالمايدۇ",
      element: <ForbiddenOrbit2 />,
      pageNumber: 19
    },
    {
      title: "ئېنېرگىيەسى يوق ئېلېكترون يوق",
      content: "بارلىق ئېلېكترونلارنىڭ ئېنېرگىيەسى بار",
      element: <AllElectronsHaveEnergy />,
      pageNumber: 20
    },
    {
      title: "ئېلېكترون ئېنېرگىيە ئالىدۇ",
      content: "ئۇ ئېنېرگىيە ئالغاندا يۇقىرىغا سەكرەيدۇ",
      element: <ElectronAbsorbsEnergy />,
      pageNumber: 21
    },
    {
      title: "يۇقىرىغا سەكرەش ئۈچۈن",
      content: "ئېلېكترون يۇقىرى ئوربىتقا سەكرەيدۇ",
      element: <ElectronJumped />,
      pageNumber: 22
    },
    {
      title: "ھەم ئېنېرگىيە بېرىشى كېرەك",
      content: "ئۇ ئېنېرگىيە بەرگەندە تۆۋەنگە چۈشىدۇ",
      element: <ElectronEmitsEnergy />,
      pageNumber: 23
    },
    {
      title: "تۆۋەنگە چۈشۈش ئۈچۈن",
      content: "ئېلېكترون تۆۋەن ئوربىتقا چۈشىدۇ",
      element: <ElectronFell />,
      pageNumber: 24
    },
    {
      title: "بۇ مىقداردىكى ئېنېرگىيە بىر كۋانتا",
      content: "كىۋانتا - ئېنېرگىيەنىڭ كىچىك بىر بۆلۈكى",
      element: <QuantaEnergy />,
      pageNumber: 25
    },
    {
      title: "ھازىر سىز بىر كىۋانىت فىزىكىچىسى",
      content: "سىز كىۋانىت دۇنياسىنىڭ سىرلىرىنى ئۆگەندىڭىز!",
      element: <CelebrationBall />,
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
      
      oscillator.frequency.value = 500 + Math.random() * 200;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
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
      }, 3000);
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
  function EnergyBall({ energy = 100 }) {
    return (
      <motion.div 
        className="relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="w-48 h-48 rounded-full relative"
          style={{
            background: `radial-gradient(circle at 30% 30%, #fbbf24, #f59e0b, #d97706)`,
            boxShadow: `
              0 0 40px rgba(251, 191, 36, 0.8),
              0 0 80px rgba(251, 191, 36, 0.4),
              inset 0 -10px 20px rgba(0, 0, 0, 0.2),
              inset 0 10px 20px rgba(255, 255, 255, 0.8)
            `
          }}
          animate={{
            boxShadow: [
              `
                0 0 40px rgba(251, 191, 36, 0.8),
                0 0 80px rgba(251, 191, 36, 0.4),
                inset 0 -10px 20px rgba(0, 0, 0, 0.2),
                inset 0 10px 20px rgba(255, 255, 255, 0.8)
              `,
              `
                0 0 60px rgba(251, 191, 36, 0.9),
                0 0 120px rgba(251, 191, 36, 0.5),
                inset 0 -10px 20px rgba(0, 0, 0, 0.2),
                inset 0 10px 20px rgba(255, 255, 255, 0.8)
              `,
              `
                0 0 40px rgba(251, 191, 36, 0.8),
                0 0 80px rgba(251, 191, 36, 0.4),
                inset 0 -10px 20px rgba(0, 0, 0, 0.2),
                inset 0 10px 20px rgba(255, 255, 255, 0.8)
              `
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {/* Shine effect */}
          <div className="absolute top-4 left-8 w-12 h-12 bg-white/70 rounded-full blur-sm" />
          
          {/* Energy sparks */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                translateX: '-50%',
                translateY: '-50%'
              }}
              animate={{
                x: Math.cos(i * Math.PI/4) * 120,
                y: Math.sin(i * Math.PI/4) * 120,
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="absolute -inset-4 rounded-full border-4 border-yellow-500/30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        />
      </motion.div>
    );
  }

  function NoEnergyBall() {
    return (
      <motion.div 
        className="w-48 h-48 rounded-full relative"
        style={{
          background: `radial-gradient(circle at 30% 30%, #d1d5db, #9ca3af, #6b7280)`,
          boxShadow: `
            inset 0 -10px 20px rgba(0, 0, 0, 0.2),
            inset 0 10px 20px rgba(255, 255, 255, 0.6)
          `
        }}
        animate={{
          scale: [1, 0.98, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      >
        <div className="absolute top-4 left-8 w-12 h-12 bg-white/50 rounded-full blur-sm opacity-50" />
      </motion.div>
    );
  }

  function AtomStructure() {
    return (
      <div className="relative w-64 h-64">
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700"
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
          style={{
            boxShadow: '0 0 40px #ef4444'
          }}
        />
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 border-2 border-green-500 rounded-full"
            style={{
              width: `${100 + i * 60}px`,
              height: `${100 + i * 60}px`,
              translateX: '-50%',
              translateY: '-50%',
              boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)'
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360
            }}
            transition={{
              duration: 8 - i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div 
              className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                boxShadow: '0 0 20px #3b82f6'
              }}
              animate={{
                rotate: i % 2 === 0 ? -360 : 360
              }}
              transition={{
                duration: 8 - i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        ))}
      </div>
    );
  }

  function NeutronAtom() {
    return (
      <div className="relative w-64 h-64">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-700"
             style={{ boxShadow: '0 0 30px #ef4444' }}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-gray-400 to-gray-600"
              style={{
                left: '50%',
                top: '50%',
                translateX: '-50%',
                translateY: '-50%'
              }}
              animate={{
                x: Math.cos(i * Math.PI/3) * 30,
                y: Math.sin(i * Math.PI/3) * 30,
                rotate: 360
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  function ProtonAtom() {
    return (
      <div className="relative w-64 h-64">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-700"
             style={{ boxShadow: '0 0 30px #ef4444' }}>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700"
              style={{
                left: '50%',
                top: '50%',
                translateX: '-50%',
                translateY: '-50%'
              }}
              animate={{
                x: Math.cos(i * 2*Math.PI/5) * 35,
                y: Math.sin(i * 2*Math.PI/5) * 35,
                rotate: -360
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  function ElectronAtom() {
    return (
      <div className="relative w-64 h-64">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700"
             style={{ boxShadow: '0 0 25px #ef4444' }} />
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 border-2 border-green-500 rounded-full"
            style={{
              width: `${80 + i * 70}px`,
              height: `${80 + i * 70}px`,
              translateX: '-50%',
              translateY: '-50%'
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div 
              className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                boxShadow: '0 0 15px #10b981'
              }}
              animate={{
                rotate: i % 2 === 0 ? -360 : 360
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        ))}
      </div>
    );
  }

  function ElectronEnergyLevels() {
    return (
      <div className="relative w-64 h-64">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700"
             style={{ boxShadow: '0 0 20px #ef4444' }} />
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 border-2 border-green-500 rounded-full"
            style={{
              width: `${80 + i * 70}px`,
              height: `${80 + i * 70}px`,
              translateX: '-50%',
              translateY: '-50%',
              boxShadow: i === 0 ? '0 0 30px rgba(34, 197, 94, 0.6)' : '0 0 15px rgba(34, 197, 94, 0.3)'
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div 
              className={`w-8 h-8 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                         ${i === 0 ? 'bg-gradient-to-br from-green-500 to-green-700' : 'bg-gradient-to-br from-green-400 to-green-600'}`}
              style={{
                boxShadow: i === 0 ? '0 0 25px #10b981' : '0 0 15px #10b981'
              }}
              animate={{
                rotate: i % 2 === 0 ? -360 : 360,
                scale: i === 0 ? [1, 1.1, 1] : 1
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
                scale: {
                  duration: 2,
                  repeat: Infinity
                }
              }}
            />
          </motion.div>
        ))}
      </div>
    );
  }

  function MaxEnergyElectron() {
    return (
      <div className="relative w-64 h-64">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700"
             style={{ boxShadow: '0 0 20px #ef4444' }} />
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 border-2 border-green-500 rounded-full"
            style={{
              width: `${80 + i * 70}px`,
              height: `${80 + i * 70}px`,
              translateX: '-50%',
              translateY: '-50%'
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360
            }}
            transition={{
              duration: 10 - i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {i === 2 && (
              <motion.div 
                className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  rotate: i % 2 === 0 ? -360 : 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 10 - i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  scale: {
                    duration: 1,
                    repeat: Infinity
                  }
                }}
                style={{
                  boxShadow: '0 0 40px #f59e0b'
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    );
  }

  function MinEnergyElectron() {
    return (
      <div className="relative w-64 h-64">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700"
             style={{ boxShadow: '0 0 20px #ef4444' }} />
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 border-2 border-green-500 rounded-full"
            style={{
              width: `${80 + i * 70}px`,
              height: `${80 + i * 70}px`,
              translateX: '-50%',
              translateY: '-50%'
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360
            }}
            transition={{
              duration: 12 - i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {i === 0 && (
              <motion.div 
                className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  rotate: i % 2 === 0 ? -360 : 360,
                  scale: [1, 0.9, 1]
                }}
                transition={{
                  duration: 12 - i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  scale: {
                    duration: 3,
                    repeat: Infinity
                  }
                }}
                style={{
                  boxShadow: '0 0 15px #10b981'
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    );
  }

  function QuantizedEnergy() {
    const [showBeam, setShowBeam] = useState(true);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setShowBeam(prev => !prev);
      }, 1500);
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="relative w-64 h-64">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700"
             style={{ boxShadow: '0 0 20px #ef4444' }} />
        
        {showBeam && (
          <motion.div 
            className="absolute w-2 bg-gradient-to-t from-yellow-500 to-transparent rounded-full"
            style={{
              left: '50%',
              bottom: '50%',
              height: '150px',
              transform: 'translateX(-50%)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </div>
    );
  }

  function AllowedOrbit({ position = 1 }) {
    return (
      <div className="relative w-64 h-64">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700"
             style={{ boxShadow: '0 0 20px #ef4444' }} />
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute top-1/2 left-1/2 rounded-full ${i === position - 1 ? 'border-2 border-green-500' : 'border border-gray-300'}`}
            style={{
              width: `${80 + i * 70}px`,
              height: `${80 + i * 70}px`,
              translateX: '-50%',
              translateY: '-50%',
              boxShadow: i === position - 1 ? '0 0 20px rgba(34, 197, 94, 0.6)' : 'none'
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {i === position - 1 && (
              <motion.div 
                className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-700 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  rotate: i % 2 === 0 ? -360 : 360
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  boxShadow: '0 0 20px #10b981'
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    );
  }

  function ForbiddenOrbit() {
    return (
      <div className="relative w-64 h-64">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700"
             style={{ boxShadow: '0 0 20px #ef4444' }} />
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute top-1/2 left-1/2 rounded-full ${i === 1 ? 'border-2 border-dashed border-red-500' : 'border-2 border-green-500'}`}
            style={{
              width: `${80 + i * 70}px`,
              height: `${80 + i * 70}px`,
              translateX: '-50%',
              translateY: '-50%',
              boxShadow: i === 1 ? '0 0 15px rgba(239, 68, 68, 0.3)' : '0 0 10px rgba(34, 197, 94, 0.3)'
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {i === 0 && (
              <motion.div 
                className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-700 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  rotate: i % 2 === 0 ? -360 : 360
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    );
  }

  function ForbiddenOrbit2() {
    return (
      <div className="relative w-64 h-64">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700"
             style={{ boxShadow: '0 0 20px #ef4444' }} />
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute top-1/2 left-1/2 rounded-full ${i === 2 ? 'border-2 border-dashed border-red-500' : 'border-2 border-green-500'}`}
            style={{
              width: `${80 + i * 70}px`,
              height: `${80 + i * 70}px`,
              translateX: '-50%',
              translateY: '-50%',
              boxShadow: i === 2 ? '0 0 15px rgba(239, 68, 68, 0.3)' : '0 0 10px rgba(34, 197, 94, 0.3)'
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {i === 0 && (
              <motion.div 
                className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-700 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  rotate: i % 2 === 0 ? -360 : 360
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    );
  }

  function AllElectronsHaveEnergy() {
    return (
      <div className="relative w-64 h-64">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700"
             style={{ boxShadow: '0 0 20px #ef4444' }} />
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 border-2 border-green-500 rounded-full"
            style={{
              width: `${80 + i * 70}px`,
              height: `${80 + i * 70}px`,
              translateX: '-50%',
              translateY: '-50%',
              boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)'
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div 
              className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{
                rotate: i % 2 === 0 ? -360 : 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
                scale: {
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity
                }
              }}
              style={{
                boxShadow: '0 0 15px #10b981'
              }}
            />
          </motion.div>
        ))}
      </div>
    );
  }

  function ElectronAbsorbsEnergy() {
    const [isJumping, setIsJumping] = useState(false);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setIsJumping(prev => !prev);
      }, 2000);
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="relative w-64 h-64">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700"
             style={{ boxShadow: '0 0 20px #ef4444' }} />
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 border-2 border-green-500 rounded-full"
            style={{
              width: `${80 + i * 70}px`,
              height: `${80 + i * 70}px`,
              translateX: '-50%',
              translateY: '-50%'
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {i === 0 && (
              <motion.div 
                className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-700 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={isJumping ? {
                  scale: [1, 0.3, 0.3, 1],
                  opacity: [1, 0, 0, 1],
                  y: [0, -100, -100, 0]
                } : {
                  rotate: i % 2 === 0 ? -360 : 360
                }}
                transition={isJumping ? {
                  duration: 2,
                  times: [0, 0.3, 0.7, 1]
                } : {
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  boxShadow: '0 0 20px #10b981'
                }}
              />
            )}
          </motion.div>
        ))}
        
        {isJumping && (
          <motion.div 
            className="absolute w-2 bg-gradient-to-t from-yellow-500 to-transparent rounded-full"
            style={{
              left: '50%',
              bottom: '30%',
              height: '100px',
              transform: 'translateX(-50%)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </div>
    );
  }

  function ElectronJumped() {
    return (
      <div className="relative w-64 h-64">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700"
             style={{ boxShadow: '0 0 20px #ef4444' }} />
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 border-2 border-green-500 rounded-full"
            style={{
              width: `${80 + i * 70}px`,
              height: `${80 + i * 70}px`,
              translateX: '-50%',
              translateY: '-50%'
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {i === 1 && (
              <motion.div 
                className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-700 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  rotate: i % 2 === 0 ? -360 : 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  scale: {
                    duration: 1,
                    repeat: Infinity
                  }
                }}
                style={{
                  boxShadow: '0 0 25px #10b981'
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    );
  }

  function ElectronEmitsEnergy() {
    const [isFalling, setIsFalling] = useState(false);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setIsFalling(prev => !prev);
      }, 2000);
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="relative w-64 h-64">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700"
             style={{ boxShadow: '0 0 20px #ef4444' }} />
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 border-2 border-green-500 rounded-full"
            style={{
              width: `${80 + i * 70}px`,
              height: `${80 + i * 70}px`,
              translateX: '-50%',
              translateY: '-50%'
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {i === 1 && (
              <motion.div 
                className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={isFalling ? {
                  scale: [1, 0.3, 0.3, 1],
                  opacity: [1, 0, 0, 1],
                  y: [0, 100, 100, 0]
                } : {
                  rotate: i % 2 === 0 ? -360 : 360
                }}
                transition={isFalling ? {
                  duration: 2,
                  times: [0, 0.3, 0.7, 1]
                } : {
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  boxShadow: '0 0 25px #f59e0b'
                }}
              />
            )}
          </motion.div>
        ))}
        
        {isFalling && (
          <motion.div 
            className="absolute w-2 bg-gradient-to-b from-yellow-500 to-transparent rounded-full"
            style={{
              left: '50%',
              top: '30%',
              height: '100px',
              transform: 'translateX(-50%)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </div>
    );
  }

  function ElectronFell() {
    return (
      <div className="relative w-64 h-64">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700"
             style={{ boxShadow: '0 0 20px #ef4444' }} />
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 border-2 border-green-500 rounded-full"
            style={{
              width: `${80 + i * 70}px`,
              height: `${80 + i * 70}px`,
              translateX: '-50%',
              translateY: '-50%'
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {i === 0 && (
              <motion.div 
                className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-700 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  rotate: i % 2 === 0 ? -360 : 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  scale: {
                    duration: 1.5,
                    repeat: Infinity
                  }
                }}
                style={{
                  boxShadow: '0 0 20px #10b981'
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    );
  }

  function QuantaEnergy() {
    const [showQuanta, setShowQuanta] = useState(false);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setShowQuanta(prev => !prev);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="relative w-64 h-64">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700"
             style={{ boxShadow: '0 0 20px #ef4444' }} />
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 border-2 border-green-500 rounded-full"
            style={{
              width: `${80 + i * 70}px`,
              height: `${80 + i * 70}px`,
              translateX: '-50%',
              translateY: '-50%'
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {i === 0 && (
              <motion.div 
                className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-700 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  rotate: i % 2 === 0 ? -360 : 360
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            )}
          </motion.div>
        ))}
        
        {showQuanta && (
          <motion.div 
            className="absolute w-3 bg-gradient-to-t from-yellow-500 via-yellow-400 to-transparent rounded-full"
            style={{
              left: '50%',
              bottom: '50%',
              height: '200px',
              transform: 'translateX(-50%)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
        
        {showQuanta && (
          <motion.div 
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-yellow-600 font-bold text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
          >
            كۋانتا
          </motion.div>
        )}
      </div>
    );
  }

  function CelebrationBall() {
    return (
      <motion.div 
        className="relative"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <motion.div 
          className="w-48 h-48 rounded-full relative"
          style={{
            background: `radial-gradient(circle at 30% 30%, #fbbf24, #f59e0b, #d97706, #b45309)`,
            boxShadow: `
              0 0 60px rgba(251, 191, 36, 0.9),
              0 0 120px rgba(251, 191, 36, 0.6),
              inset 0 -10px 20px rgba(0, 0, 0, 0.2),
              inset 0 10px 20px rgba(255, 255, 255, 0.8)
            `
          }}
          animate={{
            rotate: 360,
            boxShadow: [
              `
                0 0 60px rgba(251, 191, 36, 0.9),
                0 0 120px rgba(251, 191, 36, 0.6),
                inset 0 -10px 20px rgba(0, 0, 0, 0.2),
                inset 0 10px 20px rgba(255, 255, 255, 0.8)
              `,
              `
                0 0 80px rgba(251, 191, 36, 1),
                0 0 160px rgba(251, 191, 36, 0.8),
                inset 0 -10px 20px rgba(0, 0, 0, 0.2),
                inset 0 10px 20px rgba(255, 255, 255, 0.8)
              `,
              `
                0 0 60px rgba(251, 191, 36, 0.9),
                0 0 120px rgba(251, 191, 36, 0.6),
                inset 0 -10px 20px rgba(0, 0, 0, 0.2),
                inset 0 10px 20px rgba(255, 255, 255, 0.8)
              `
            ]
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            },
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        >
          <div className="absolute top-4 left-8 w-16 h-16 bg-white/80 rounded-full blur-sm" />
          
          {/* Celebration sparks */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                translateX: '-50%',
                translateY: '-50%',
                background: i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#3b82f6' : '#10b981'
              }}
              animate={{
                x: Math.cos(i * Math.PI/6) * 180,
                y: Math.sin(i * Math.PI/6) * 180,
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="absolute -inset-6 rounded-full border-4 border-yellow-500/40"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        />
      </motion.div>
    );
  }

  return (
    <div 
      ref={bookRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
                 overflow-hidden font-['UKIJ_Tuz'] text-white"
      dir="rtl"
    >
      {/* Background stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              opacity: Math.random() * 0.7 + 0.3
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Progress dots */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
          className="p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-colors"
        >
          {soundOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleAutoPlay}
          className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
            autoPlay ? 'bg-green-500/30 hover:bg-green-500/50' : 'bg-black/30 hover:bg-black/50'
          }`}
        >
          <BatteryCharging size={20} />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleFullscreen}
          className="p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-colors"
        >
          {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => goToPage(0)}
          className="p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-colors"
        >
          <Home size={20} />
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
            className="relative w-full max-w-2xl h-[80vh] bg-gradient-to-br from-white to-slate-50 
                       rounded-2xl shadow-2xl shadow-blue-500/20 border-8 border-white 
                       overflow-hidden flex flex-col items-center justify-center p-8"
            style={{
              boxShadow: `
                0 25px 50px -12px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.9),
                0 0 40px rgba(59, 130, 246, 0.3)
              `
            }}
          >
            {/* Colorful top border */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500" />
            
            {/* Bottom decorative line */}
            <div className="absolute bottom-4 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            
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
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 via-yellow-600 via-green-600 to-blue-600 
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
                           bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/80"
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
                           backdrop-blur-sm rounded-full px-4 py-2"
              >
                بەت {pages[currentPage].pageNumber} / 26
              </motion.div>
              
              {/* Author credit for last page */}
              {currentPage === 25 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-8 right-8 text-slate-500 text-sm bg-white/80 
                             backdrop-blur-sm rounded-full px-4 py-2"
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
                       : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'}`}
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
                       : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'}`}
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
                     bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 
                     flex items-center gap-2"
        >
          <BatteryCharging size={16} />
          <span className="text-sm">ئاپتوماتىك ئالماشتۇرۇش</span>
        </motion.div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-slate-400 text-sm">
        <span className="hidden md:inline">تاختا تەكشىسى: ← → ، سىنبىلەش: سوۋغا قىلىش ، F: تولۇق ئېكران</span>
      </div>
    </div>
  );
};

// Custom font setup (should be in a global CSS file or inline)
const styles = `
@font-face {
  font-family: 'UKIJ_Tuz';
  src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic&display=swap');
  font-display: swap;
}

* {
  font-family: 'UKIJ_Tuz', 'Noto Sans Arabic', sans-serif;
}
`;

export default QuantumPhysicsBook;