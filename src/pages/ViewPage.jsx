import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ViewPage() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') setDarkMode(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen flex flex-col`}>
      {/* Logo/Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow bg-white dark:bg-gray-800">
        <h1 className="text-xl font-bold">🎓 KaLBiL EduCourses</h1>
        <nav className="space-x-4">
          <button onClick={() => navigate('/')} className="hover:underline">Home</button>
          <button onClick={() => navigate('/register')} className="hover:underline">Courses</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="bg-white dark:bg-gray-700 p-8 rounded shadow-md w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">📚KaLBiL Online Courses Platform</h2>
          <p className="mb-6">تىزىملىتىڭ ياكى تىزىملىتىلگەن ئۇچۇرلارنى كۆرۈڭ</p>

          <div className="space-y-4">
            <button
              onClick={() => navigate('/register')}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              ➕ تىزىملىتىش
            </button>

            <button
              onClick={() => navigate('/view-registration')}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              👁️ تىزىملىتىلگەن ئۇچۇرنى كۆرۈش
            </button>

            <button
              onClick={toggleDarkMode}
              className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition"
            >
              🌓 Dark Mode {darkMode ? 'ئۆچۈر' : 'قوزغات'}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 text-center py-4 text-sm border-t">
        <p>© 2025 EduCourses — All rights reserved.</p>
        <div className="mt-2 space-x-2">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
      </footer>
    </div>
  );
}