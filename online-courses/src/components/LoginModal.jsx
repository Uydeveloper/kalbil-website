import { useState, useContext, useRef, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
import students from '../data/students.json'; // 📁 تەمىنلەنگەن ئوقۇغۇچىلار JSON ھۆججىتى
import 'react-toastify/dist/ReactToastify.css';
import * as faceapi from 'face-api.js';

export default function LoginModal({ onClose, onSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    identifier: '',   // 🌟 ھەم ID ھەم Name نى قوبۇل قىلىش ئۈچۈن ئۆزگەرتىلدى
    password: '',
    email: '',
    name: '',        // يېڭىدىن تىزىملىتىدىغانلار ئۈچۈن تولۇق ئىسىم
    confirm: ''
  });
  
  const [message, setMessage] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  
  const { setUser } = useContext(UserContext);
  const { login } = useAuth();
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // كۆزنەك يېپىلغاندا كامېرانى ئاپتوماتىك ئۆچۈرۈش
  useEffect(() => {
    return () => stopCamera();
  }, []);

  // Face API مودېللىرىنى يۈكلەش
  useEffect(() => {
    const loadModels = async () => {
      try {
        const MODEL_URL = process.env.PUBLIC_URL + '/models';
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL)
        ]);
        setModelsLoaded(true);
      } catch (err) {
        console.error("Face-API مودېل يۈكلەشتە خاتالىق:", err);
      }
    };
    loadModels();
  }, []);

  // كامېرانى قوزغىتىش
  const startCamera = async () => {
    setIsScanning(true);
    setMessage('📷 كامېرا قوزغىلىۋاتىدۇ...');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 } });
      videoRef.current.srcObject = stream;
      streamRef.current = stream;
      setMessage('🤖 يۈز تەسۋىرى تەكشۈرۈلۈۋاتىدۇ، كامېراغا قاراپ تۇرۇڭ...');
      
      // 3 سېكۇنتتىن كېيىن ئاپتوماتىك يۈز تونۇش
      setTimeout(() => {
        handleFaceRecognition();
      }, 3000);

    } catch (err) {
      console.error(err);
      setMessage('❌ كامېرانى قوزغاتقىلى بولمىدى. رۇخسەت بەردىڭىزمۇ؟');
      setIsScanning(false);
    }
  };

  // كامېرانى ئۆچۈرۈش
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsScanning(false);
  };

  // يۈز تونۇش لوگىكىسى
  const handleFaceRecognition = async () => {
    if (!videoRef.current || !modelsLoaded) return;

    const detections = await faceapi.detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptor();

    if (!detections) {
      setMessage('😕 يۈز تەسۋىرى ئېنىق تېپىلمىدى. قايتا سىناڭ.');
      stopCamera();
      return;
    }

    // 🧪 بۇ يەردە سىناق ئۈچۈن بىرىنچى ئوقۇغۇچى سۈپىتىدە كىرىشنى تەقلىد قىلىمىز
    // ئەمەلىيەتتە بارلىق ئوقۇغۇچىلارنىڭ رەسىم ماترىسساسى بىلەن سېلىشتۇرۇلىدۇ
    const mockStudent = students.find(s => s.role === 'student'); 
    if (mockStudent) {
      setUser(mockStudent);
      login(mockStudent);
      toast.success(`👋 قايتىپ كەلگىنىڭىزنى قارشى ئالىمىز، ${mockStudent.name}! (يۈز تونۇش)`, { position: "top-center" });
      stopCamera();
      onSuccess();
    } else {
      setMessage('❌ سىستېمىدا سىزگە ماس كېلىدىغان ئوقۇغۇچى تېپىلمىدى.');
      stopCamera();
    }
  };

  // جەدۋەل ئەۋەتىش (ئادەتتىكى كىرىش ۋە تىزىملىتىش)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // 🌟 [تۈزىتىلدى] ھەم ID ھەم ئىسىم بويىچە ئابونتنى ئىزدەش
      const inputAccount = form.identifier.trim().toLowerCase();
      
      const foundStudent = students.find(
        (s) =>
          s.id.toLowerCase() === inputAccount || 
          s.name.toLowerCase() === inputAccount
      );

      if (!foundStudent) {
        toast.error('❌ كىرگۈزگەن كىملىك (ID) ياكى ئىسىم تېپىلمىدى!', { position: "top-right" });
        return;
      }

      if (foundStudent.password !== form.password) {
        toast.error('❌ مەخپىي شېپىر خاتا!', { position: "top-right" });
        return;
      }

      // مۇۋەپپەقىيەتلىك كىرىش
      setUser(foundStudent);
      login(foundStudent);
      toast.success(`👋 قايتىپ كەلگىنىڭىزنى قارشى ئالىمىز، ${foundStudent.name}!`, { position: "top-center" });
      onSuccess();
    } else {
      // تىزىملىتىش لوگىكىسى
      if (form.password !== form.confirm) {
        toast.error('❌ ئىككى قېتىم كىرگۈزگەن مەخپىي شېپىر ئوخشىمىدى!', { position: "top-right" });
        return;
      }
      toast.info('🚀 تىزىملىتىش ئىلتىماسى ئەۋەتىلدى (ھازىرچە سىناق ھالەتتە).', { position: "top-center" });
      setIsLogin(true);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto p-2">
      {/* باش قىسىم */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-uyghur text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
          {isLogin ? 'سۇپىغا كىرىش' : 'يېڭى ھېسابات ئېچىش'}
        </h2>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          ✖️
        </button>
      </div>

      {/* نورمال كىرىش جەدۋىلى قىسمى */}
      {!isScanning ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          {isLogin ? (
            <>
              {/* 🌟 كىملىك نومۇرى ياكى ئابونت ئىسمى */}
              <div className="space-y-1 text-right">
                <label className="font-uyghur text-sm font-medium text-slate-700 dark:text-slate-300">
                  ئىشلەتكۈچى نامى ياكى كىملىك (ID):
                </label>
                <input
                  type="text"
                  required
                  placeholder="مەسىلەن: KeLBiL ياكى KeLBiL-K2025"
                  value={form.identifier}
                  onChange={(e) => setForm({ ...form, identifier: e.target.value })}
                  className="w-full px-4 py-2.5 font-sans rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-left transition-all"
                />
              </div>
            </>
          ) : (
            <>
              {/* تىزىملىتىش قۇتىلىرى */}
              <div className="space-y-1 text-right">
                <label className="font-uyghur text-sm font-medium text-slate-700 dark:text-slate-300">تولۇق ئىسىم:</label>
                <input
                  type="text"
                  required
                  placeholder="ئىسمىڭىزنى كىرگۈزۈڭ"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 font-uyghur rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right transition-all"
                />
              </div>
              <div className="space-y-1 text-right">
                <label className="font-uyghur text-sm font-medium text-slate-700 dark:text-slate-300">ئېلېكترونلۇق خەت (Email):</label>
                <input
                  type="email"
                  required
                  placeholder="example@kelbil.edu"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 font-sans rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-left transition-all"
                />
              </div>
            </>
          )}

          {/* مەخپىي شېپىر قۇتىسى (ھەم كىرىش ھەم تىزىملىتىشقا ئورتاق) */}
          <div className="space-y-1 text-right">
            <label className="font-uyghur text-sm font-medium text-slate-700 dark:text-slate-300">مەخپىي شېپىر:</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-2.5 font-sans rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-left transition-all"
            />
          </div>

          {!isLogin && (
            <div className="space-y-1 text-right">
              <label className="font-uyghur text-sm font-medium text-slate-700 dark:text-slate-300">مەخپىي شېپىرنى دەستىكلەش:</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={form.confirm}
                onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                className="w-full px-4 py-2.5 font-sans rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-left transition-all"
              />
            </div>
          )}

          {/* كىرىش / تىزىملىتىش كۇنۇپكىسى */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl font-medium transition-all shadow-md shadow-blue-500/10 active:scale-[0.98] font-uyghur text-lg cursor-pointer"
          >
            {isLogin ? '🔐 كىرىش' : '🚀 تىزىملىتىش'}
          </button>

          {/* يۈز تونۇش ئارقىلىق كىرىش كۇنۇپكىسى (پەقەت كىرىش ھالىتىدە كۆرۈنىدولار) */}
          {isLogin && (
            <button
              type="button"
              onClick={startCamera}
              className="w-full py-2.5 border border-dashed border-blue-400 dark:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 text-blue-600 dark:text-blue-400 rounded-xl font-medium transition-all flex items-center justify-center gap-2 font-uyghur cursor-pointer text-base"
            >
              🤖 يۈز تونۇش ئارقىلىق كىرىش
            </button>
          )}
        </form>
      ) : (
        /* يۈز تونۇش كامېرا قىسمى */
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group shadow-inner">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover scale-x-[-1]"
          />
          {/* يۈز تونۇش ئەينىكىنىڭ لىنىيە لىپىلدىشى */}
          <div className="absolute inset-4 border-2 border-dashed border-cyan-400/30 rounded-xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-cyan-400 rounded-full opacity-40 animate-pulse pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#22d3ee] animate-[bounce_3s_infinite]" />
        </div>
      )}

      {/* ئۇچۇرلار قىسمى */}
      {message && (
        <motion.div 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-2.5 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-100 dark:border-rose-900/50 text-center"
        >
          <p className="font-uyghur text-sm text-rose-600 dark:text-rose-400 font-medium">{message}</p>
        </motion.div>
      )}

      {/* ئاستى قىسىم ئالماشتۇرۇش كۇنۇپكىلىرى */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between font-uyghur text-base">
        <button
          onClick={() => { stopCamera(); setIsLogin(!isLogin); setMessage(''); }}
          className="text-blue-500 hover:text-blue-600 hover:underline transition-colors cursor-pointer"
        >
          {isLogin ? 'يېڭى ھېسابات ئېچىشمۇ؟' : 'بۇرۇن تىزىملاتقانمۇ؟ كىرىش'}
        </button>
      </div>
    </div>
  );
}