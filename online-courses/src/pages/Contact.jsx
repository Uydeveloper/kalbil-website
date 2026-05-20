import React, { useState, useEffect, useRef } from "react";
import users from "../data/userscopy.json";
import albums from "../data/albums.json";

export default function NewLabelCourses() {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState({ identifier: "", password: "" });
  const [openAlbum, setOpenAlbum] = useState(null);
  
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem("course_progress");
    return saved ? JSON.parse(saved) : {};
  });

  const videoRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("course_progress", JSON.stringify(progress));
  }, [progress]);

  const handleOpenAlbum = (albumId) => {
    setOpenAlbum(albumId);
    const album = albums.find((a) => a.id === albumId);
    if (album && album.lessons && album.lessons.length > 0) {
      setCurrentVideo(album.lessons[0]);
      setCurrentIndex(0);
    } else {
      setCurrentVideo(null);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (videoRef.current && currentVideo && user) {
      const videoKey = `${user.id}_${openAlbum}_${currentIndex}`;
      const savedTime = progress[videoKey]?.currentTime || 0;
      
      const handleLoadedMetadata = () => {
        videoRef.current.currentTime = savedTime;
      };

      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        }
      };
    }
  }, [currentVideo, currentIndex, user, openAlbum]);

  const handleTimeUpdate = () => {
    if (!videoRef.current || !user || !currentVideo) return;
    
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    if (!duration) return;

    const percent = (currentTime / duration) * 100;
    const videoKey = `${user.id}_${openAlbum}_${currentIndex}`;
    const isCompleted = progress[videoKey]?.completed || percent > 90;

    setProgress((prev) => ({
      ...prev,
      [videoKey]: {
        userId: user.id,
        userName: user.name,
        albumId: openAlbum,
        videoTitle: currentVideo.title,
        currentTime,
        duration,
        percent: Math.round(percent),
        completed: isCompleted,
        lastWatched: new Date().toLocaleString()
      },
    }));
  };

  const handleVideoEnded = () => {
    if (!autoplay) return;
    const album = albums.find((a) => a.id === openAlbum);
    if (album && album.lessons && currentIndex < album.lessons.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setCurrentVideo(album.lessons[nextIdx]);
    }
  };

  const handleLogin = () => {
    const inputKey = login.identifier.trim();
    const inputPass = login.password.trim();
    const found = users.find((u) => (u.id === inputKey || u.name === inputKey) && u.password === inputPass);

    if (!found) {
      alert("ئىسمى/ID ياكى مەخپىي نومۇر خاتا!");
      return;
    }
    setUser(found);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 p-6 select-none" dir="rtl">
        <div />
        <div className="w-full max-w-md flex flex-col items-center">
          <div className="mb-8 flex flex-col items-center text-center group">
            <div className="relative w-20 h-20 mb-3 flex items-center justify-center bg-slate-900 rounded-2xl border-2 border-cyan-500/60 shadow-[0_0_25px_rgba(6,182,212,0.15)]">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">K</span>
            </div>
            <h1 className="text-xl font-bold tracking-wide text-slate-100">KELBIL HIGH TECH</h1>
            <p className="text-[10px] text-cyan-400/60 tracking-wider font-mono mt-0.5">Advanced Learning Hub</p>
          </div>

          <div className="w-full bg-slate-900/60 backdrop-blur-xl border border-slate-800/60 rounded-2xl p-6 shadow-2xl">
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 mr-1">ئىسمىڭىز ياكى كىملىك ID نومۇرىڭىز</label>
                <input
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-right"
                  placeholder="كىملىك كىرگۈزۈڭ"
                  value={login.identifier}
                  onChange={(e) => setLogin((prev) => ({ ...prev, identifier: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 mr-1">مەخپىي نومۇر</label>
                <input
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-left font-mono"
                  placeholder="••••••••"
                  type="password"
                  value={login.password}
                  onChange={(e) => setLogin((prev) => ({ ...prev, password: e.target.value }))}
                />
              </div>
              <button onClick={handleLogin} className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-slate-950 font-bold py-2.5 rounded-xl transition-all text-sm shadow-md">
                سىستېمىغا كىرىش
              </button>
            </div>
          </div>
        </div>
        <footer className="mt-12 text-center text-xs text-slate-600 font-mono">© 2026 KELBIL ACADEMY</footer>
      </div>
    );
  }

  const allowedAlbums = albums.filter((album) => {
    if (user.role === "admin") return true; 
    if (user.role === "student") return album.id !== 1; 
    if (user.role === "user") return album.id === 1; 
    return false;
  });

  const selectedAlbumData = albums.find(a => a.id === openAlbum);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200 p-4 md:p-6" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* باشقۇرۇش بالدىقى */}
        <header className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-cyan-500/30 rounded-xl font-bold text-cyan-400 text-lg">K</div>
            <div>
              <h1 className="text-base font-bold text-slate-100">كەلبىل ئوقۇتۇش باشقۇرۇش سىستېمىسى</h1>
              <p className="text-xs text-slate-400 mt-0.5">ئىشلەتكۈچى: <span className="text-cyan-400 font-semibold">{user.name}</span> ({user.role})</p>
            </div>
          </div>
          <button
            onClick={() => { setUser(null); setOpenAlbum(null); }}
            className="px-3 py-1.5 border border-slate-800 text-xs text-slate-400 hover:text-red-400 hover:border-red-500/20 rounded-xl transition-all bg-slate-900/30"
          >
            بىخەتەر چىكىنىش
          </button>
        </header>

        {/* ----------------- باشقۇرۇچى دوكلات تاختىسى (ADMIN PANEL) ----------------- */}
        {user.role === "admin" && !openAlbum && (
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <h3 className="text-sm font-bold text-cyan-400">ئوقۇغۇچىلارنىڭ ئۆگىنىش مۇساپىسى دوكلاتى (Admin)</h3>
            </div>
            {Object.keys(progress).length === 0 ? (
              <p className="text-xs text-slate-500 py-1">تېخى ئوقۇغۇچىلارنىڭ كۆرۈش خاتىرىسى يوق.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 bg-slate-950/40">
                      <th className="p-3">ئوقۇغۇچى</th>
                      <th className="p-3">كۇرس / ۋىدىئو تېمىسى</th>
                      <th className="p-3">كۆرۈش پىرسەنتى</th>
                      <th className="p-3">ھالىتى</th>
                      <th className="p-3">ئاخىرقى كۆرگەن ۋاقتى</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-900/60">
                    {Object.values(progress).map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/20 transition-colors">
                        <td className="p-3 font-semibold text-slate-300">{item.userName}</td>
                        <td className="p-3 text-slate-400">{item.videoTitle}</td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-800">
                              <div className="bg-gradient-to-r from-cyan-500 to-teal-400 h-full" style={{ width: `${item.percent}%` }}></div>
                            </div>
                            <span className="font-mono text-[11px]">%{item.percent}</span>
                          </div>
                        </td>
                        <td className="p-3">
                          {item.completed ? (
                            <span className="text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 rounded-md text-[10px]">تۈگەتتى</span>
                          ) : (
                            <span className="text-amber-400 bg-amber-500/5 border border-amber-500/10 px-2 py-0.5 rounded-md text-[10px]">كۆرۈۋاتىدۇ</span>
                          )}
                        </td>
                        <td className="p-3 text-slate-500 font-mono text-[11px]">{item.lastWatched}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ----------------- كۆركەم ئەلبۇملار تىزىملىكى ----------------- */}
        {!openAlbum && (
          <div className="space-y-4 animate-fadeIn">
            <h2 className="text-sm font-bold text-slate-300 mr-1">سىزگە ئېچىۋېتىلگەن ئاكادېمىك ئەلبۇملار</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allowedAlbums.map((album) => (
                <div 
                  key={album.id} 
                  className="bg-slate-900/30 border border-slate-800/80 hover:border-cyan-500/30 rounded-2xl overflow-hidden flex flex-col justify-between hover:bg-slate-900/50 shadow-lg group transition-all duration-300"
                >
                  {/* رەسىملىك رايون */}
                  <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden border-b border-slate-900">
                    <img 
                      src={album.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"} 
                      alt={album.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                    />
                    {/* رەسمنىڭ ئۈستى سول تەرىپىدىكى ۋىدىئو سانى بەلگىسى */}
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-cyan-400 text-[10px] font-bold px-2.5 py-1 rounded-lg font-mono tracking-wide shadow-sm">
                      {album.lessons?.length || 0} VIDEOS
                    </div>
                    {/* قاپلاش سايىسى */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* رەسمنىڭ ئاستىدىكى تەپسىلات ئۇچۇرلىرى */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-sm font-bold text-slate-100 group-hover:text-cyan-400 transition-colors leading-snug">
                        {album.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-2">
                        {album.desc || "مەزكۇر تەتقىقات يۆنىلىشى يۇقىرى تېخنىكىلىق ئۆلچەمدە تۈزۈلگەن سىستېمىلىق ئاكادېمىك كۇرسلارنى ئۆز ئىچىگە ئالىدۇ."}
                      </p>
                    </div>

                    {/* سۆزلىگۈچى ۋە يوللانغان ۋاقىت قىسمى */}
                    <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500">مۇئەللىم:</span>
                        <span className="font-semibold text-slate-300">{album.author || "ئاكادېمىيە گۇرۇپپىسى"}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500">ۋاقتى:</span>
                        <span className="font-mono text-slate-400">{album.date || "2026-04"}</span>
                      </div>
                    </div>
                  </div>

                  {/* كىرىش تۈگمىسى */}
                  <div className="p-4 bg-slate-950/40 border-t border-slate-900/60">
                    <button
                      onClick={() => handleOpenAlbum(album.id)}
                      className="w-full text-xs bg-slate-900 hover:bg-cyan-600 hover:text-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-200 font-bold py-2 rounded-xl transition-all shadow-inner"
                    >
                      كۇرسنى باشلاش
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ----------------- قويغۇچ ئورۇنلاشتۇرۇشى ----------------- */}
        {openAlbum && selectedAlbumData && (
          <div className="space-y-4 animate-fadeIn">
            
            <div className="flex items-center justify-between bg-slate-900/40 border border-slate-800 px-4 py-2.5 rounded-xl">
              <h2 className="text-xs font-bold text-cyan-400">{selectedAlbumData.title}</h2>
              <button
                onClick={() => setOpenAlbum(null)}
                className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 rounded-lg transition-all"
              >
                <span>← ئەلبۇملارغا قايتىش</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* سول تەرەپ: چوڭ ۋىدىئو قويغۇچ */}
              <div className="lg:col-span-2 space-y-4">
                {currentVideo ? (
                  <div className="bg-slate-900/20 border border-slate-800/60 rounded-2xl p-4 shadow-xl">
                    
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-slate-900 shadow-2xl">
                      {currentVideo.youtube ? (
                        <iframe
                          src={`${currentVideo.youtube}?autoplay=1`}
                          title={currentVideo.title}
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <video
                          ref={videoRef}
                          src={currentVideo.video}
                          controls
                          autoPlay
                          onTimeUpdate={handleTimeUpdate}
                          onEnded={handleVideoEnded}
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>

                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-900 pt-3">
                      <div>
                        <span className="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded font-mono">
                          LECTURE {(currentIndex + 1).toString().padStart(2, "0")}
                        </span>
                        <h3 className="text-sm font-bold text-slate-100 mt-1">{currentVideo.title}</h3>
                      </div>

                      <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-900">
                        <span className="text-xs text-slate-400">ئاپتوماتىك كېيىنكى سىنغا ئۆتۈش:</span>
                        <button
                          onClick={() => setAutoplay(!autoplay)}
                          className={`text-xs font-bold px-2.5 py-1 rounded-md transition-all ${
                            autoplay ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-slate-500"
                          }`}
                        >
                          {autoplay ? "ئوچۇق" : "تاقاق"}
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 mt-2 bg-slate-950/40 p-3 rounded-xl border border-slate-900/60 leading-relaxed">
                      {currentVideo.desc || "مەزكۇر دەرسكە مۇناسىۋەتلىك تەجرىبە قوللانمىلىرى ئاستىدىكى ھۆججەتلەر قىسمىغا كىرگۈزۈلگەن."}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <a href={currentVideo.pdf || "#"} download className="flex items-center justify-center bg-slate-950 border border-slate-800 hover:border-emerald-500/30 text-slate-300 hover:text-emerald-400 py-2 rounded-xl text-xs font-semibold transition-all shadow-sm">
                        PDF ھۆججەت چۈشۈرۈش
                      </a>
                      <a href={currentVideo.html || "#"} download className="flex items-center justify-center bg-slate-950 border border-slate-800 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 py-2 rounded-xl text-xs font-semibold transition-all shadow-sm">
                        HTML دەستۇر چۈشۈرۈش
                      </a>
                    </div>

                  </div>
                ) : (
                  <div className="text-center py-12 bg-slate-900/10 border border-dashed border-slate-800 rounded-2xl">
                    <p className="text-xs text-slate-500">مەزكۇر ئەلبۇمدە قويىدىغان ۋىدىئو تېپىلمىدى.</p>
                  </div>
                )}
              </div>

              {/* ئوڭ تەرەپ: تىك كارتا تىزىملىكى */}
              <div className="space-y-3 lg:max-h-[580px] lg:overflow-y-auto pr-1">
                <h3 className="text-xs font-bold text-slate-400 mb-1 mr-1">ئەلبۇمدىكى بارلىق دەرسلەر:</h3>
                
                {selectedAlbumData.lessons?.map((lesson, idx) => {
                  const isPlaying = currentIndex === idx;
                  const videoKey = `${user.id}_${openAlbum}_${idx}`;
                  const isCompleted = progress[videoKey]?.completed;

                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        setCurrentVideo(lesson);
                        setCurrentIndex(idx);
                      }}
                      className={`cursor-pointer p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                        isPlaying
                          ? "bg-cyan-950/30 border-cyan-500/50 shadow-md"
                          : isCompleted
                          ? "bg-emerald-950/20 border-emerald-900/60 hover:border-emerald-700"
                          : "bg-slate-900/30 border-slate-900 hover:border-slate-800"
                      }`}
                    >
                      <div className="flex-1 min-w-0 text-right">
                        <span className={`text-[9px] font-mono block ${isPlaying ? "text-cyan-400" : isCompleted ? "text-emerald-400" : "text-slate-500"}`}>
                          LESSON {(idx + 1).toString().padStart(2, "0")} {isCompleted && "✓ كۆرۈلدى"}
                        </span>
                        <h4 className={`text-xs font-bold mt-0.5 truncate ${isPlaying ? "text-cyan-400" : "text-slate-200"}`}>
                          {lesson.title}
                        </h4>
                      </div>

                      <div className="flex-shrink-0">
                        {isPlaying ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                        ) : isCompleted ? (
                          <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[9px] text-emerald-400 font-bold">✓</div>
                        ) : (
                          <span className="text-[10px] text-slate-600 font-mono">%{progress[videoKey]?.percent || 0}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}