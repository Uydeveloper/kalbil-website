// src/components/CoursePage.jsx
import React, { useState, useRef, useEffect } from "react";
import CourseData from "./CourseData";

/* 🔹 ياردەمچى فۇنكسىيە: يۇتيۇب URL نى تازىلاش ۋە ۋىدىئو كودىنى ئايرىش */
const cleanUrl = (url) => url?.trim().replace(/\s+/g, '') || '';
const getYoutubeVideoId = (url) => {
  const cleaned = cleanUrl(url);
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = cleaned.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

/* 🔹 ياردەمچى فۇنكسىيە: رەڭدىن گىرادىئىنت ياساش */
const getColorGradient = (hexColor) => {
  if (!hexColor) return "from-blue-600 to-cyan-500";
  
  const colorMap = {
    '#3b82f6': 'from-blue-600 to-blue-500',
    '#10b981': 'from-green-600 to-green-500', 
    '#f59e0b': 'from-amber-600 to-amber-500',
    '#ef4444': 'from-red-600 to-red-500',
    '#8b5cf6': 'from-purple-600 to-purple-500',
    '#ec4899': 'from-pink-600 to-pink-500',
    '#14b8a6': 'from-teal-600 to-teal-500',
    '#f97316': 'from-orange-600 to-orange-500'
  };
  
  return colorMap[hexColor] || "from-blue-600 to-cyan-500";
};

/* 🔹 ياردەمچى فۇنكسىيە: ۋاقىت فورماتلاش */
const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

/* 🔹 YouTube Player كومپونېنتى */
const YouTubePlayer = ({ videoUrl, onReady, onStateChange }) => {
  const iframeRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [playerError, setPlayerError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.body.appendChild(script);
        
        window.onYouTubeIframeAPIReady = () => {
          if (window.YT?.Player) initializePlayer();
        };
      } else if (window.YT?.Player) {
        initializePlayer();
      }
    };

    const initializePlayer = () => {
      if (!iframeRef.current || !videoUrl) return;
      
      const videoId = getYoutubeVideoId(videoUrl);
      if (!videoId) {
        setPlayerError("ئىناۋەتسىز يۇتيۇب ئادرېسى");
        setIsLoading(false);
        return;
      }

      if (player) {
        try { player.destroy(); } catch (e) {}
      }

      const ytPlayer = new window.YT.Player(iframeRef.current, {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          controls: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          fs: 1,
          hl: 'ug',
          cc_load_policy: 1
        },
        events: {
          onReady: (event) => {
            setPlayer(event.target);
            setIsLoading(false);
            onReady?.(event);
          },
          onStateChange: (event) => {
            onStateChange?.(event);
          },
          onError: (event) => {
            const errorMap = {
              2: "ئىناۋەتسىز ۋىدىئو كودى",
              5: "پىلاتكىدە خاتالىق",
              100: "بۇ ۋىدىئو تېپىلمىدى",
              101: "بۇ ۋىدىئونى بۇ توربەتتە كۆرسىتىشكە بولمايدۇ",
              150: "بۇ ۋىدىئونى بۇ توربەتتە كۆرسىتىشكە بولمايدۇ"
            };
            setPlayerError(errorMap[event.data] || `خاتالىق كودى: ${event.data}`);
            setIsLoading(false);
          }
        }
      });

      return () => {
        if (ytPlayer?.destroy) ytPlayer.destroy();
      };
    };

    loadYouTubeAPI();
  }, [videoUrl]);

  return (
    <div className="relative w-full h-full bg-black rounded-xl overflow-hidden border-4 border-white shadow-2xl">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-white font-medium text-lg">يۇتيۇب ۋىدىئوسى يۈكلىنىۋاتىدۇ...</p>
            <p className="text-gray-400 text-sm mt-2">بىراز سەۋر قىلىڭ</p>
          </div>
        </div>
      )}
      
      {playerError && (
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 to-red-800/80 flex flex-col items-center justify-center p-4 z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md">
            <svg className="w-20 h-20 text-white mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-bold text-2xl text-white mb-3 text-center">ۋىدىئو يۈكلەش مەغلۇپ بولدى</p>
            <p className="text-white/80 text-center text-lg mb-6">{playerError}</p>
            <button
              onClick={() => {
                setPlayerError(null);
                setIsLoading(true);
                if (player) player.loadVideoById(getYoutubeVideoId(videoUrl));
              }}
              className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-500 hover:to-red-600 transition-all font-bold text-lg shadow-lg"
            >
              قايتا سىناش
            </button>
          </div>
        </div>
      )}
      
      <div ref={iframeRef} className="w-full h-full" />
    </div>
  );
};

/* 🔹 پۇل تۆلەش مودالى */
const PaymentModal = ({ isOpen, onClose, plan, onPaymentComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [email, setEmail] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentCode, setPaymentCode] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [paymentVerified, setPaymentVerified] = useState(false);

  // PayPal ئادرېسى
  const paypalEmail = "https://www.paypal.com/paypalme/KawulAbduryim";
  const adminEmail = "kelbil@gmail.com.org";

  const generatePaymentCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("ئېلېكترونلۇق خەت ئادرېسىڭىزنى كىرگۈزۈڭ");
      return;
    }

    // Payment ID قۇرۇش
    const newPaymentId = `PAY-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    setPaymentId(newPaymentId);
    
    // Payment Code قۇرۇش
    const newPaymentCode = generatePaymentCode();
    setPaymentCode(newPaymentCode);
    
    setShowConfirmation(true);
  };

  const handleConfirmPayment = () => {
    // پۇل تۆلىنىدىغان PayPal ئادرېسىغا يۆلەش
    window.open(`https://www.paypal.com/paypalme/KawulAbduryim/${paypalEmail}?amount=${plan.price.replace('₺', '')}&item_name=${plan.name}`, '_blank');
    
    // Payment ID نى ئىلخەتكە يۆلەش
    const mailtoLink = `mailto:${adminEmail}?subject=پۇل تۆلەش ئىسپاتى - ${paymentId}&body=Payment ID: ${paymentId}%0APlan: ${plan.name}%0AAmount: ${plan.price}%0AEmail: ${email}%0A%0Aلۇتپەتە مەن بۇ پۇلنى تۆلىدىم.`;
    window.open(mailtoLink, '_blank');
    
    setTimeout(() => {
      setPaymentVerified(true);
      setTimeout(() => {
        onPaymentComplete(paymentCode, plan.id);
        setShowConfirmation(false);
      }, 2000);
    }, 2000);
  };

  const handlePaymentVerification = () => {
    // پۇل تۆلىنىشى تەستىقلاندى
    setPaymentVerified(true);
    setTimeout(() => {
      onPaymentComplete(paymentCode, plan.id);
      setShowConfirmation(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden">
        {/* مودال باش بېتى */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
          <h3 className="text-2xl font-bold">پۇل تۆلەش</h3>
          <p className="text-green-100 mt-2">{plan.name} - {plan.price} {plan.period}</p>
        </div>

        <div className="p-6">
          {!showConfirmation ? (
            // پۇل تۆلەش فورمىسى
            <form onSubmit={handlePaymentSubmit}>
              {/* تاللاش تىپى */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-3">پۇل تۆلەش ئۇسۇلى</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("paypal")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === "paypal"
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-300 hover:border-blue-300"
                    }`}
                  >
                    <div className="text-lg font-bold mb-1">💳</div>
                    <div className="font-medium">PayPal</div>
                    <div className="text-sm text-gray-600">خەلقئارالىق پۇل تۆلەش</div>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("bank")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === "bank"
                        ? "border-green-500 bg-green-50 text-green-700"
                        : "border-gray-300 hover:border-green-300"
                    }`}
                  >
                    <div className="text-lg font-bold mb-1">🏦</div>
                    <div className="font-medium">بانكا ھېساباتى</div>
                    <div className="text-sm text-gray-600">يەرلىك بانكا</div>
                  </button>
                </div>
              </div>

              {/* ئىلخەت ئادرېسى */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  ئېلېكترونلۇق خەت ئادرېسىڭىز
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="مەسىلەن: ismingiz@email.com"
                  className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  required
                />
                <p className="text-sm text-gray-500 mt-2">
                  تەستىق نۇمۇرى بۇ ئادرېسقا يوللىنىدۇ
                </p>
              </div>

              {/* پۇل تۆلەش ئۇچۇرلىرى */}
              <div className="mb-6 bg-gray-50 p-4 rounded-xl">
                <h4 className="font-medium text-gray-700 mb-2">پۇل تۆلەش تەپسىلاتى:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">تاللاش تىپى:</span>
                    <span className="font-bold text-gray-800">{plan.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">پۇل مىقدارى:</span>
                    <span className="font-bold text-gray-800">{plan.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">مۇددەت:</span>
                    <span className="font-bold text-gray-800">{plan.period}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">پۇل تۆلەش ئۇسۇلى:</span>
                    <span className="font-bold text-blue-600">
                      {paymentMethod === "paypal" ? "PayPal" : "بانكا ھېساباتى"}
                    </span>
                  </div>
                </div>
              </div>

              {/* PayPal ئۇچۇرى */}
              {paymentMethod === "paypal" && (
                <div className="mb-6 bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <span className="text-blue-600 font-bold">PayPal</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">پۇل تۆلىنىدىغان ئادرېس:</p>
                      <p className="text-lg font-bold text-blue-600">{paypalEmail}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    پۇل تۆلەشتىن كېيىن، ئىسپات رەسىمىنى {adminEmail} گە يوللاڭ
                  </p>
                </div>
              )}

              {/* بانكا ئۇچۇرى */}
              {paymentMethod === "bank" && (
                <div className="mb-6 bg-green-50 p-4 rounded-xl border border-green-200">
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-700 mb-1">بانكا ئۇچۇرى:</p>
                      <p className="text-lg font-bold text-green-600">KeLBiL  ئاكادېمىيەسى</p>
                      <p className="text-gray-600">IBAN: TR00 0000 0000 0000 0000 0000 00</p>
                    </div>
                    <p className="text-sm text-gray-600">
                      پۇل تۆلەشتىن كېيىن، ئىسپات رەسىمىنى {adminEmail} گە يوللاڭ
                    </p>
                  </div>
                </div>
              )}

              {/* ھەرىكەت تۈرگىلىكلىرى */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 px-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-medium"
                >
                  بىكار قىلىش
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-500 hover:to-emerald-500 transition-all font-bold shadow-lg"
                >
                  داۋام قىلىش
                </button>
              </div>
            </form>
          ) : paymentVerified ? (
            // پۇل تۆلىنىش تەستىقلاندى
            <div className="text-center py-8">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">پۇل تۆلىنىش تەستىقلاندى!</h3>
              <p className="text-gray-600 mb-6">
                تەستىق نۇمۇرىڭىز ئەۋەتىلدى. ھازىر دەرسلەرنى كۆرەلەيسىز.
              </p>
              
              <div className="mb-6 bg-gray-50 p-4 rounded-xl">
                <p className="text-sm text-gray-600 mb-2">سىزنىڭ تەستىق نۇمۇرىڭىز:</p>
                <p className="text-2xl font-bold text-gray-900 font-mono tracking-wider">
                  {paymentCode}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  بۇ نۇمۇرنى قەدەپلەڭ، كېيىن تەستىق نۇمۇرى كىرگۈزۈش بېتىدە كىرگۈزۈڭ.
                </p>
              </div>
              
              <button
                onClick={() => {
                  setShowConfirmation(false);
                  onClose();
                }}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all font-bold shadow-lg"
              >
                تامام
              </button>
            </div>
          ) : (
            // پۇل تۆلەشنى جەزملەش
            <div>
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-yellow-100 to-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">پۇل تۆلەش تەپسىلاتى</h3>
              </div>

              <div className="mb-6 bg-gray-50 p-4 rounded-xl">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">پۇل تۆلىنىدىغان ئادرېس:</p>
                    <p className="font-bold text-lg text-blue-600">{paypalEmail}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600">پۇل مىقدارى:</p>
                    <p className="font-bold text-2xl text-gray-900">{plan.price}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600">Payment ID (ئىسپات ئۈچۈن):</p>
                    <p className="font-bold text-gray-800 font-mono">{paymentId}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600">ئىسپات يوللىنىدىغان ئادرېس:</p>
                    <p className="font-bold text-green-600">{adminEmail}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h1m0 0h-1m1 0v4m-5-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">ئەسكەرتىش:</p>
                    <p className="text-sm text-gray-600">
                      1. PayPal ئادرېسىغا پۇل تۆلەڭ<br/>
                      2. ئىسپات رەسىمىنى ئىلخەتكە يوللاڭ<br/>
                      3. بىز پۇل تۆلىنىشنى تەكشۈرىمىز<br/>
                      4. تەستىق نۇمۇرىڭىزنى ئەۋەتىمىز
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1 py-3 px-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-medium"
                >
                  ئارقا قايتىش
                </button>
                <button
                  onClick={handleConfirmPayment}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all font-bold shadow-lg"
                >
                  PayPal غا ئۆتۈش
                </button>
                <button
                  onClick={handlePaymentVerification}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-500 hover:to-emerald-500 transition-all font-bold shadow-lg"
                >
                  مەن پۇل تۆلىدىم
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* 🔹 تەستىق نۇمۇرى مودالى */
const VerificationModal = ({ isOpen, onClose, onVerify, paymentCode }) => {
  const [verificationCode, setVerificationCode] = useState(paymentCode || "");
  const [verificationType, setVerificationType] = useState("course");
  const [errorMessage, setErrorMessage] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [showCode, setShowCode] = useState(false);

  // پۇل تۆلەشتىن كەلگەن كودنى ئىشلىتىش
  useEffect(() => {
    if (paymentCode) {
      setVerificationCode(paymentCode);
    }
  }, [paymentCode]);

  // ئىشلەتكۈچىنىڭ تەستىق نۇمۇرلىرى (LocalStorage دىن ئېلىنىدۇ)
  const getUserVerificationCodes = () => {
    const savedCodes = localStorage.getItem('userVerificationCodes');
    return savedCodes ? JSON.parse(savedCodes) : [];
  };

  const saveUserVerificationCode = (code, type, planName) => {
    const codes = getUserVerificationCodes();
    const newCode = {
      code,
      type,
      planName,
      date: new Date().toISOString(),
      used: false
    };
    codes.push(newCode);
    localStorage.setItem('userVerificationCodes', JSON.stringify(codes));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsVerifying(true);

    // LocalStorage دىكى تەستىق نۇمۇرلىرىنى تەكشۈرۈش
    const userCodes = getUserVerificationCodes();
    const validCode = userCodes.find(c => 
      c.code === verificationCode && !c.used
    );

    setTimeout(() => {
      if (validCode) {
        // تەستىق نۇمۇرىنى ئىشلىتىلگەن دەپ بەلگىلەش
        validCode.used = true;
        localStorage.setItem('userVerificationCodes', JSON.stringify(userCodes));
        
        onVerify(verificationType, validCode.planName);
        setIsVerifying(false);
      } else {
        // ئومۇمىي تەستىق نۇمۇرلىرى (ۋاقىتلىق)
        const generalCodes = {
          "KeLBiL_UYG2025": { type: "member", name: "Premium Member" },
          "KeLBiL_ACADEMY2025": { type: "member", name: "Academy Member" },
          "KeLBiL_TEST123": { type: "course", name: "Test Course Access" }
        };
        
        if (generalCodes[verificationCode]) {
          const codeInfo = generalCodes[verificationCode];
          onVerify(codeInfo.type, codeInfo.name);
          setIsVerifying(false);
        } else {
          setErrorMessage("ئىناۋەتسىز تەستىق نۇمۇرى. قايتا سىناپ بېقىڭ.");
          setIsVerifying(false);
        }
      }
    }, 1500);
  };

  // ئىشلەتكۈچىنىڭ تەستىق نۇمۇرلىرىنى كۆرسىتىش
  const renderUserCodes = () => {
    const userCodes = getUserVerificationCodes();
    const validCodes = userCodes.filter(code => !code.used);

    if (validCodes.length === 0) return null;

    return (
      <div className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-200">
        <h4 className="font-medium text-gray-700 mb-3">سىزنىڭ تەستىق نۇمۇرلىرىڭىز:</h4>
        <div className="space-y-2">
          {validCodes.map((code, index) => (
            <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg">
              <div>
                <div className="font-mono font-bold text-gray-800">{code.code}</div>
                <div className="text-sm text-gray-600">{code.planName}</div>
              </div>
              <button
                onClick={() => {
                  setVerificationCode(code.code);
                  setVerificationType(code.type);
                }}
                className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
              >
                تاللاش
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <h3 className="text-2xl font-bold">تەستىق نۇمۇرى كىرگۈزۈڭ</h3>
          <p className="text-blue-100 mt-2">پۇل تۆلىگەندىن كېيىن بېرىلگەن تەستىق نۇمۇرىنى كىرگۈزۈڭ</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* ئىشلەتكۈچىنىڭ تەستىق نۇمۇرلىرى */}
          {renderUserCodes()}

          {/* كود كىرگۈزۈش */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              تەستىق نۇمۇرى
            </label>
            <div className="relative">
              <input
                type={showCode ? "text" : "password"}
                value={verificationCode}
                onChange={(e) => {
                  setVerificationCode(e.target.value.toUpperCase());
                  setErrorMessage("");
                }}
                placeholder="تەستىق نۇمۇرىڭىزنى كىرگۈزۈڭ"
                className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all pr-12"
                required
                maxLength={20}
              />
              <button
                type="button"
                onClick={() => setShowCode(!showCode)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showCode ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-gray-500">
                پۇل تۆلىگەندىن كېيىن بېرىلگەن 8 خانىلىق نۇمۇر
              </p>
              <button
                type="button"
                onClick={() => {
                  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                  let result = '';
                  for (let i = 0; i < 8; i++) {
                    result += chars.charAt(Math.floor(Math.random() * chars.length));
                  }
                  setVerificationCode(result);
                }}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                تەستىق نۇمۇرى ئىزدەش
              </button>
            </div>
          </div>

          {/* خاتالىق ئۇچۇرى */}
          {errorMessage && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">{errorMessage}</span>
              </div>
            </div>
          )}

          {/* سىناق تەستىق نۇمۇرلىرى (باشقۇرغۇچىلار ئۈچۈن)
          <div className="mb-6 bg-gray-50 p-4 rounded-xl">
            <h4 className="font-medium text-gray-700 mb-2">سىناق تەستىق نۇمۇرلىرى:</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-white p-2 rounded-lg">
                <span className="font-mono font-bold text-blue-600">UYG2024</span>
                <div className="text-gray-600">ئەزا كودى</div>
              </div>
              <div className="bg-white p-2 rounded-lg">
                <span className="font-mono font-bold text-purple-600">ACADEMY2024</span>
                <div className="text-gray-600">ئەزا كودى</div>
              </div>
            </div>
          </div> */}

          {/* ھەرىكەت تۈرگىلىكلىرى */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-medium"
              disabled={isVerifying}
            >
              بىكار قىلىش
            </button>
            <button
              type="submit"
              className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all font-bold shadow-lg"
              disabled={isVerifying}
            >
              {isVerifying ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  تەكشۈرۈۋاتىدۇ...
                </span>
              ) : (
                "تەستىقلاش"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

/* 🔹 ئاساسىي كۇرس بەت كومپونېنتى */
export default function CoursePage() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [youtubePlayer, setYoutubePlayer] = useState(null);
  const [activeTab, setActiveTab] = useState("courses");
  const [membershipType, setMembershipType] = useState("monthly");
  const [isVerified, setIsVerified] = useState(false);
  const [verificationType, setVerificationType] = useState(null);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentCode, setPaymentCode] = useState("");
  const [userAccess, setUserAccess] = useState({
    isMember: false,
    memberType: null,
    expiryDate: null,
    accessedCourses: [],
    specialAccess: []
  });

  /* 🔹 كاتېگورىيە كارتنى چەكسە */
  const openCourse = (course) => {
    setSelectedCourse(course);
    setCurrentLesson(course.videos[0]);
    setIsPlaying(false);
    setProgress(0);
    setYoutubePlayer(null);
    setActiveTab("course");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* 🔹 ئارقا قايتىش */
  const backToCourses = () => {
    setSelectedCourse(null);
    setCurrentLesson(null);
    setIsPlaying(false);
    setProgress(0);
    setYoutubePlayer(null);
    setActiveTab("courses");
  };

  /* 🔹 دەرس ئالماشتۇرۇش */
  const handleLessonChange = (lesson) => {
    setCurrentLesson(lesson);
    setIsPlaying(false);
    setProgress(0);
    
    if (youtubePlayer) {
      const videoId = getYoutubeVideoId(lesson.youtubeUrl || lesson.url);
      if (videoId) youtubePlayer.cueVideoById(videoId);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* 🔹 يۇتيۇب ھالىتىنى كۈزىتىش */
  const handleYouTubeStateChange = (event) => {
    const state = event.data;
    if (state === 1) setIsPlaying(true);
    else if (state === 2) setIsPlaying(false);
    else if (state === 0) {
      setIsPlaying(false);
      markLessonCompleted();
    }
  };

  /* 🔹 دەرسنى تاماملانغان دەپ بەلگىلەش */
  const markLessonCompleted = () => {
    if (!selectedCourse || !currentLesson) return;
    
    const updatedCourse = {
      ...selectedCourse,
      videos: selectedCourse.videos.map(l =>
        l.id === currentLesson.id ? { ...l, completed: true } : l
      )
    };
    setSelectedCourse(updatedCourse);
    
    const completedCount = updatedCourse.videos.filter(v => v.completed).length;
    setProgress((completedCount / updatedCourse.videos.length) * 100);
  };

  /* 🔹 كېيىنكى/ئالدىنقى دەرس */
  const nextLesson = () => {
    if (!selectedCourse || !currentLesson) return;
    const currentIndex = selectedCourse.videos.findIndex(l => l.id === currentLesson.id);
    if (currentIndex < selectedCourse.videos.length - 1) {
      handleLessonChange(selectedCourse.videos[currentIndex + 1]);
    }
  };

  const prevLesson = () => {
    if (!selectedCourse || !currentLesson) return;
    const currentIndex = selectedCourse.videos.findIndex(l => l.id === currentLesson.id);
    if (currentIndex > 0) {
      handleLessonChange(selectedCourse.videos[currentIndex - 1]);
    }
  };

  /* 🔹 ۋىدىئونى قايتا باشلاش */
  const restartVideo = () => {
    if (youtubePlayer) {
      youtubePlayer.seekTo(0);
      youtubePlayer.playVideo();
    }
  };

  /* 🔹 كۇرسنىڭ ئۇمۇمىي پىلانى */
  const getTotalProgress = () => {
    if (!selectedCourse) return 0;
    const completed = selectedCourse.videos.filter(v => v.completed)?.length || 0;
    return Math.round((completed / selectedCourse.videos.length) * 100);
  };

  /* 🔹 پۇل تۆلەش تاماملاندى */
  const handlePaymentComplete = (code, planId) => {
    // پىلاننى تاللاش
    const plan = membershipPlans.find(p => p.id === planId);
    setPaymentCode(code);
    
    // ئىشلەتكۈچىنىڭ تەستىق نۇمۇرلىرىنى LocalStorage غا ساقلاش
    const userCodes = JSON.parse(localStorage.getItem('userVerificationCodes') || '[]');
    userCodes.push({
      code: code,
      type: "member",
      planName: plan.name,
      date: new Date().toISOString(),
      used: false
    });
    localStorage.setItem('userVerificationCodes', JSON.stringify(userCodes));
    
    // تەستىق مودالىنى ئاچىش
    setTimeout(() => {
      setShowVerificationModal(true);
    }, 500);
    
    setShowPaymentModal(false);
  };

  /* 🔹 تەستىق نۇمۇرىنى تەستىقلاش */
  const handleVerification = (type, accessName) => {
    setIsVerified(true);
    setVerificationType(type);
    
    const expiryDate = new Date();
    if (type === "member") {
      const plan = membershipPlans.find(p => p.name === accessName);
      let daysToAdd = 30;
      if (plan?.id === "yearly") daysToAdd = 365;
      if (plan?.id === "premium") daysToAdd = 9999; // مۇددەتسىز
      
      expiryDate.setDate(expiryDate.getDate() + daysToAdd);
      setUserAccess({
        isMember: true,
        memberType: accessName,
        expiryDate: expiryDate.toISOString().split('T')[0],
        accessedCourses: CourseData.map(course => course.id),
        specialAccess: ["All Courses", "Premium Content", "Live Sessions"]
      });
    } else {
      expiryDate.setMonth(expiryDate.getMonth() + 1);
      setUserAccess({
        isMember: false,
        memberType: "Course Access",
        expiryDate: expiryDate.toISOString().split('T')[0],
        accessedCourses: selectedCourse ? [selectedCourse.id] : [],
        specialAccess: [accessName]
      });
    }
    
    setShowVerificationModal(false);
    
    // تەستىقلاش ئۇچۇرى
    setTimeout(() => {
      alert(`مۇبارەك بولسۇن! ${accessName} ھوقۇقىڭىز قوزغىتىلدى.`);
    }, 300);
  };

  /* 🔹 دەرسنى زىيارەت قىلىش ھوقۇقىنى تەكشۈرۈش */
  const canAccessCourse = (courseId) => {
    if (!isVerified) return false;
    if (userAccess.isMember) return true;
    return userAccess.accessedCourses.includes(courseId);
  };

  /* 🔹 ۋىدىئو زىيارەت قىلىش ھوقۇقى */
  const canWatchVideo = () => {
    if (!isVerified) return false;
    if (!selectedCourse) return false;
    return canAccessCourse(selectedCourse.id);
  };

  /* 🔹 تېخىمۇ ياخشى كۆرۈنۈش ئۈچۈن تەسۋىر يولىنى تازىلاش */
  const getThumbnailUrl = (url) => {
    if (!url) return "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=250&fit=crop&q=80";
    if (url.startsWith('/images/') || url.startsWith('public/') || url.startsWith('online-courses/')) {
      return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&q=80";
    }
    return url;
  };

  /* 🔹 ئەزا تىپلىرى مەلۇماتى */
  const membershipPlans = [
    {
      id: "monthly",
      name: "ئايلىق ئەزا",
      price: "₺299",
      period: "ئايىغا",
      description: "ئاساسىي دەرسلەرگە قاتنىشىش",
      features: ["30 كۈنلۈك زىيارەت", "پۈتۈن دەرسلەر", "ئاساسىي ماتېرىياللار", "ئىنترنېت جەمئىيىتى"],
      color: "blue",
      popular: false
    },
    {
      id: "yearly",
      name: "يىللىق ئەزا",
      price: "₺2,999",
      period: "يىلغا",
      description: "تولۇق دەرس پروگراممىسى",
      features: ["365 كۈنلۈك زىيارەت", "پۈتۈن دەرسلەر", "ئەمەلىي پروگراممىلار", "ئالاھىدە مۇھىت", "ئۆسۈم قايتۇرۇش"],
      color: "purple",
      popular: true
    },
    {
      id: "premium",
      name: "ئېلىتا ئەزا",
      price: "₺9,999",
      period: "مۇددەتسىز",
      description: "ئېلىتا تەربىيە پروگراممىسى",
      features: ["مۇددەتسىز زىيارەت", "پۈتۈن دەرسلەر + يېڭىلانمىلار", "شەخسىي مەشۋەرچى", "ئىشقا ئورۇنلاشتۇرۇش", "ھايات بويى دەستەك", "ئېكسكلۇزىۋ ئىشلار"],
      color: "gold",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-4 md:p-6">
      {/* ======================== */}
      {/* 🏆 ئۇستىنكى بار - لوگو ۋە مەنۇ */}
      {/* ======================== */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 shadow-2xl mb-8 rounded-b-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* لوگو ۋە ئىسىم */}
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="relative">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-300 shadow-xl">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                     ئۇ 
                    </span>
                  </div>
                </div>
                {isVerified && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center bg-green-500 shadow-lg animate-pulse">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              
              <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  ئۇيغۇر ئاكادېمىيەسى KeLBiL
                </h1>
                <p className="text-sm text-blue-200 font-medium tracking-wider">
                  KeLBiL Uyghur Academy - بىلىم كەشىفخانىسى
                </p>
              </div>
            </div>

            {/* ئىشلەتكۈچى ھالىتى */}
            <div className="flex flex-wrap items-center gap-4 justify-center">
              {isVerified ? (
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-white">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${verificationType === 'member' ? 'bg-green-400' : 'bg-blue-400'}`}></div>
                      <span className="font-medium">
                        {userAccess.memberType}
                      </span>
                    </div>
                    <div className="text-xs text-blue-200">
                      مۇددىتى: {userAccess.expiryDate}
                    </div>
                  </div>
                  <button
                    onClick={() => setShowVerificationModal(true)}
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-400 hover:to-green-500 transition-all font-medium shadow-lg"
                  >
                    باشقا تەستىق نۇمۇرى
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowVerificationModal(true)}
                  className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all font-bold shadow-lg animate-pulse"
                >
                  🔑 تەستىق نۇمۇرى كىرگۈزۈش
                </button>
              )}
              
              <nav className="flex items-center gap-4">
                <button 
                  onClick={() => setActiveTab("courses")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${activeTab === "courses" ? 'bg-white text-blue-700' : 'text-white hover:bg-white/20'}`}
                >
                  دەرسلەر
                </button>
                <button 
                  onClick={() => setActiveTab("membership")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${activeTab === "membership" ? 'bg-white text-blue-700' : 'text-white hover:bg-white/20'}`}
                >
                  ئەزا بولۇش
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* موداللار */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        plan={selectedPlan}
        onPaymentComplete={handlePaymentComplete}
      />
      
      <VerificationModal
        isOpen={showVerificationModal}
        onClose={() => setShowVerificationModal(false)}
        onVerify={handleVerification}
        paymentCode={paymentCode}
      />

      {/* 🔙 Back Button */}
      {selectedCourse && (
        <div className="container mx-auto px-4 mb-6">
          <button
            onClick={backToCourses}
            className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-all duration-300 transform hover:scale-105 bg-white px-4 py-2 rounded-lg shadow-md"
            aria-label="بارلىق دەرسلەرگە قايتىش"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            بارلىق دەرسلەرگە قايتىش
          </button>
        </div>
      )}

      {/* ======================== */}
      {/* 🟦 دەرس كاتېگورىيىلىرى */}
      {/* ======================== */}
      {!selectedCourse && activeTab === "courses" && (
        <div className="container mx-auto px-4 py-6">
          {/* تەستىق ئېسىلاتى */}
          {!isVerified && (
            <div className="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">دەرسلەرنى كۆرۈش ئۈچۈن تەستىق كېرەك</h3>
                    <p className="text-gray-600">تەستىق نۇمۇرىڭىزنى كىرگۈزۈپ، ۋىدىئولارنى تولۇق ۋاقىت كۆرۈڭ</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowVerificationModal(true)}
                  className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all font-bold shadow-lg whitespace-nowrap"
                >
                  تەستىق نۇمۇرى كىرگۈزۈش
                </button>
              </div>
            </div>
          )}

          <div className="text-center mb-10">
            <div className="inline-block relative mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
                📚 دەرس كاتېگورىيىلىرى
              </h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              سىزنىڭ بىلىم يولۇڭىزنى باشلايدىغان ياخشى جاي. زامانىۋى تېخنىكىلارنى 0 دىن ئۆگىنىڭ.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CourseData.map((course, index) => {
              const hasAccess = canAccessCourse(course.id);
              
              return (
                <div
                  key={course.id}
                  className={`group transform transition-all duration-500 ${
                    hasAccess ? 'hover:-translate-y-3 cursor-pointer' : 'opacity-80'
                  }`}
                  onClick={() => hasAccess && openCourse(course)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && hasAccess && openCourse(course)}
                >
                  <div className={`rounded-2xl shadow-xl overflow-hidden border ${
                    hasAccess 
                      ? 'border-gray-200 hover:shadow-2xl bg-gradient-to-br from-white to-gray-50' 
                      : 'border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100'
                  }`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={getThumbnailUrl(course.thumbnail)}
                        alt={course.title}
                        className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=250&fit=crop&q=80";
                        }}
                      />
                      
                      {/* زىيارەت ھوقۇقى بەلگىسى */}
                      <div className="absolute top-4 right-4">
                        {hasAccess ? (
                          <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                            ✅ زىيارەت ھوقۇقى بار
                          </span>
                        ) : (
                          <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                            🔒 تەستىق تەلەپ قىلىنىدۇ
                          </span>
                        )}
                      </div>
                      
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          course.level === 'باشلانغۇچ' 
                            ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
                            : course.level === 'ئوتتۇرا' 
                            ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' 
                            : 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                        }`}>
                          {course.level}
                        </span>
                      </div>
                      
                      <div className={`absolute bottom-4 left-4 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg ${
                        hasAccess 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                          : 'bg-gradient-to-r from-gray-400 to-gray-500 text-white'
                      }`}>
                        {index + 1}
                      </div>
                    </div>

                    <div className="p-5 md:p-6">
                      <div className="mb-3">
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                          {course.title}
                        </h2>
                        
                        <p className="text-sm text-gray-600 line-clamp-2 min-h-[48px]">
                          {course.description}
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{course.duration}</span>
                          </div>
                          
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <span className="font-bold ml-1 text-gray-800">{course.rating || 4.5}</span>
                          </div>
                        </div>
                        
                        <button 
                          onClick={() => hasAccess ? openCourse(course) : setShowVerificationModal(true)}
                          className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                            hasAccess
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'
                              : 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700'
                          }`}
                        >
                          {hasAccess ? 'دەرسكە كىرىش' : 'تەستىق تەلەپ قىلىش'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ======================== */}
      {/* 💎 ئەزا تىپلىرى */}
      {/* ======================== */}
      {!selectedCourse && activeTab === "membership" && (
        <div className="container mx-auto px-4 py-8">
          {/* ئەزا بولغانلار ئۇچۇرى */}
          {userAccess.isMember && (
            <div className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {userAccess.memberType} ئەزا - {userAccess.expiryDate} مۇددىتىگىچە
                    </h3>
                    <p className="text-gray-600">
                      سىز {userAccess.accessedCourses.length} دەرسنى زىيارەت قىلىش ھوقۇقىغا ئىگەسىز
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowVerificationModal(true)}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-400 hover:to-emerald-500 transition-all font-bold shadow-lg whitespace-nowrap"
                >
                  باشقا تەستىق نۇمۇرى
                </button>
              </div>
            </div>
          )}

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
              💎 ئەزا تىپلىرى
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ئۆزۈڭىزگە ماس كېلىدىغان ئەزا تىپىنى تاللاڭ ۋە پۈتۈن دەرسلەردىن بەھرىمەن بولۇڭ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipPlans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 ${
                  plan.popular 
                    ? 'border-4 border-yellow-400 scale-110 z-10' 
                    : 'border-2 border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    ✨ ئەڭ ئېلىقتىنۋاتقان
                  </div>
                )}
                
                <div className={`pt-10 pb-6 px-6 text-center ${
                  plan.color === 'blue' ? 'bg-gradient-to-b from-blue-50 to-white' :
                  plan.color === 'purple' ? 'bg-gradient-to-b from-purple-50 to-white' :
                  'bg-gradient-to-b from-yellow-50 to-white'
                }`}>
                  <div className={`inline-block p-4 rounded-2xl mb-4 ${
                    plan.color === 'blue' ? 'bg-blue-100' :
                    plan.color === 'purple' ? 'bg-purple-100' :
                    'bg-yellow-100'
                  }`}>
                    <span className="text-3xl">
                      {plan.color === 'blue' ? '🌙' : plan.color === 'purple' ? '⭐' : '👑'}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                    <div className="text-gray-600">{plan.period}</div>
                  </div>
                  
                  <button 
                    onClick={() => {
                      setSelectedPlan(plan);
                      setShowPaymentModal(true);
                    }}
                    className={`w-full py-3 rounded-xl font-bold text-lg mb-6 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-400 hover:to-orange-400' 
                        : plan.color === 'blue'
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-400 hover:to-blue-500'
                        : plan.color === 'purple'
                        ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-400 hover:to-purple-500'
                        : 'bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 hover:from-yellow-400 hover:to-amber-400'
                    } transition-all shadow-lg hover:shadow-xl`}
                  >
                    {plan.popular ? 'ھازىر سېتىۋېلىش' : 'تاللاش'}
                  </button>
                  
                  <div className="space-y-3 text-left">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                          plan.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                          'bg-yellow-100 text-amber-600'
                        }`}>
                          ✓
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* پۇل تۆلەش ئۇسۇللىرى */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">پۇل تۆلەش ئۇسۇللىرى</h3>
                <p className="text-gray-600">تۆۋەندىكى ئۇسۇللار بىلەن پۇل تۆلەڭ</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💳</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">PayPal</h4>
                  <p className="text-sm text-gray-600 mb-4">paypalme/KawulAbduryim</p>
                  <button
                    onClick={() => window.open(`https://www.paypal.com/paypalme/KawulAbduryim`, '_blank')}
                    className="w-full py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all"
                  >
                    PayPal غا ئۆتۈش
                  </button>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏦</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">بانكا ھېساباتى</h4>
                  <p className="text-sm text-gray-600 mb-4">IBAN: TR00 0000 0000 0000 0000 0000 00</p>
                  <button
                    onClick={() => alert("بانكا ھېساباتى ئۇچۇرى كۆرسىتىلدى")}
                    className="w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-400 hover:to-green-500 transition-all"
                  >
                    تەپسىلاتىنى كۆرۈش
                  </button>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">ئىلخەت ئادىرىسى</h4>
                  <p className="text-sm text-gray-600 mb-4">kelbil@uyghuracademy.org</p>
                  <button
                    onClick={() => window.open('mailto:kelbil@uyghuracademy.org', '_blank')}
                    className="w-full py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-400 hover:to-purple-500 transition-all"
                  >
                    ئىلخەت ئەۋەتىش
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================== */}
      {/* 🎬 دەرس تىزىملىكى + ۋىدىئو */}
      {/* ======================== */}
      {selectedCourse && currentLesson && (
        <div className="container mx-auto px-4">
          {/* ئەسكەرتىش: تەستىق تەلەپ قىلىنىدۇ */}
          {!canWatchVideo() && (
            <div className="mb-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">ۋىدىئونى كۆرۈش ئۈچۈن تەستىق كېرەك</h3>
                    <p className="text-gray-600">بۇ دەرسنى زىيارەت قىلىش ئۈچۈن تەستىق نۇمۇرىڭىزنى كىرگۈزۈڭ</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowVerificationModal(true)}
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl hover:from-red-400 hover:to-pink-500 transition-all font-bold shadow-lg whitespace-nowrap"
                >
                  تەستىق نۇمۇرى كىرگۈزۈش
                </button>
              </div>
            </div>
          )}

          {/* كۇرس مايىسى */}
          <div className={`bg-gradient-to-r ${getColorGradient(selectedCourse.colorScheme)} rounded-3xl shadow-2xl p-6 md:p-8 mb-8 overflow-hidden relative`}>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="text-white">
                  <h1 className="text-3xl md:text-4xl font-bold mb-3">
                    {selectedCourse.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-4 opacity-90">
                    {selectedCourse.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                      {selectedCourse.level}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                      {selectedCourse.category}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                      {selectedCourse.duration}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 min-w-[120px] text-center">
                    <div className="text-white/80 text-sm mb-1">ئۇمۇمىي پىلان</div>
                    <div className="text-white font-bold text-3xl">
                      {getTotalProgress()}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* دەرس تىزىملىكى */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                <div className={`bg-gradient-to-r ${getColorGradient(selectedCourse.colorScheme)} p-5 md:p-6 text-white`}>
                  <h2 className="font-bold text-xl flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    دەرس تىزىملىكى ({selectedCourse.videos.length})
                  </h2>
                </div>

                <div className="divide-y divide-gray-200 max-h-[calc(100vh-350px)] overflow-y-auto custom-scrollbar">
                  {selectedCourse.videos.map((lesson, index) => (
                    <div
                      key={lesson.id}
                      onClick={() => canWatchVideo() && handleLessonChange(lesson)}
                      className={`p-4 md:p-5 transition-all duration-300 ${
                        currentLesson.id === lesson.id
                          ? "bg-gradient-to-r from-blue-50 to-blue-100 border-r-4 border-blue-600"
                          : canWatchVideo() ? "hover:bg-gray-50 cursor-pointer" : "opacity-60"
                      }`}
                      role="button"
                      tabIndex={0}
                      onKeyPress={(e) => e.key === 'Enter' && canWatchVideo() && handleLessonChange(lesson)}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md ${
                            currentLesson.id === lesson.id
                              ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                              : lesson.completed
                              ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
                              : "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700"
                          }`}>
                            {lesson.completed ? (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : index + 1}
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className={`font-bold text-base md:text-lg line-clamp-1 ${
                              currentLesson.id === lesson.id ? "text-blue-700" : "text-gray-900"
                            }`}>
                              {lesson.title}
                            </h3>
                            {lesson.completed && (
                              <span className="text-green-700 text-xs font-semibold bg-green-100 px-2 py-1 rounded-full whitespace-nowrap">
                                ✅ تامام
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm line-clamp-1 mb-3">
                            {lesson.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-500">
                              {lesson.duration}
                            </span>
                            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                              🔴 يۇتيۇب
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* يۆنىلىش تۈرگىلىكلىرى */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  onClick={prevLesson}
                  disabled={!canWatchVideo() || !selectedCourse.videos.some(l => l.id === currentLesson.id - 1)}
                  className={`py-3 px-4 rounded-xl font-bold transition-all ${
                    canWatchVideo() && selectedCourse.videos.some(l => l.id === currentLesson.id - 1)
                      ? "bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-800 shadow-md"
                      : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  ← ئالدىنقى
                </button>
                <button
                  onClick={nextLesson}
                  disabled={!canWatchVideo() || !selectedCourse.videos.some(l => l.id === currentLesson.id + 1)}
                  className={`py-3 px-4 rounded-xl font-bold transition-all ${
                    canWatchVideo() && selectedCourse.videos.some(l => l.id === currentLesson.id + 1)
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white shadow-md hover:shadow-lg"
                      : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  كېيىنكى →
                </button>
              </div>
            </div>

            {/* ۋىدىئو پىلاتكىسى */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                {/* يۇتيۇب ۋىدىئو پىلاتكىسى */}
                <div className="relative w-full aspect-video md:h-[500px] lg:h-[550px]">
                  {canWatchVideo() ? (
                    <YouTubePlayer
                      videoUrl={cleanUrl(currentLesson.youtubeUrl || currentLesson.url)}
                      onReady={(event) => setYoutubePlayer(event.target)}
                      onStateChange={handleYouTubeStateChange}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-6">
                      <div className="text-center">
                        <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-6 rounded-full inline-block mb-6">
                          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">ۋىدىئو قۇلۇپلانغان</h3>
                        <p className="text-gray-300 mb-6 text-lg">
                          بۇ ۋىدىئونى كۆرۈش ئۈچۈن تەستىق نۇمۇرىڭىزنى كىرگۈزۈشىڭىز كېرەك
                        </p>
                        <button
                          onClick={() => setShowVerificationModal(true)}
                          className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl hover:from-red-400 hover:to-pink-500 transition-all font-bold text-lg shadow-lg"
                        >
                          تەستىق نۇمۇرى كىرگۈزۈش
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* ۋىدىئو مەزمۇنى */}
                {canWatchVideo() && (
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {currentLesson.title}
                      </h2>
                      <div className={`bg-gradient-to-r ${getColorGradient(selectedCourse.colorScheme)} text-white px-5 py-2 rounded-full font-bold text-lg whitespace-nowrap shadow-md`}>
                        ⏱️ {currentLesson.duration}
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8 bg-gradient-to-r from-gray-50 to-blue-50 p-5 rounded-2xl border border-gray-200">
                      {currentLesson.description}
                    </p>

                    {/* پىلان سىزىقى */}
                    <div className="mb-8">
                      <div className="flex justify-between items-center text-sm mb-3">
                        <span className="font-bold text-gray-700">ئوقۇش نىسبىتى</span>
                        <span className="font-bold text-blue-600 text-lg">{Math.round(progress)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-3 rounded-full transition-all duration-500 ${
                            progress > 0 ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600' : 'bg-gray-300'
                          }`}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* ھەرىكەت تۈرگىلىكلىرى */}
                    <div className="flex flex-wrap gap-4">
                      <button
                        onClick={restartVideo}
                        className="px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all font-bold flex items-center gap-3 shadow-lg hover:shadow-xl"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        قايتا باشلاش
                      </button>
                      
                      <button
                        onClick={markLessonCompleted}
                        className={`px-5 py-3 rounded-xl transition-all font-bold flex items-center gap-3 shadow-md ${
                          currentLesson.completed
                            ? "bg-gradient-to-r from-green-100 to-green-200 text-green-700 hover:from-green-200 hover:to-green-300"
                            : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300"
                        }`}
                      >
                        {currentLesson.completed ? (
                          <>
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            تاماملاندى
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            تاماملاندى دەپ بەلگىلەش
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}