import { useState } from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleLogin = (e) => {
    e.preventDefault();

    // سىناق ئۈچۈن: توغرا ئىسم ۋە پارول
    if (username === 'Kawuljan99' && password === '123456') {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">لوگىن</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="ئىسمىڭىز"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="مەخپى نۇمۇر"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          لوگىن قىلسۇن
        </button>
      </form>

      {/* ✅ ئۇچۇر كۆرسىتىش */}
      {status === 'success' && (
        <p className="mt-4 text-green-600 text-center font-semibold">
          ✅ كىرۈش مۇۋاپىقيەتلىك بولدى!
        </p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-600 text-center font-semibold">
          ❌ خاتالىق! قايتا كىرگۈزۈڭ ياكى سايىن ئاپ قىلىڭ.
        </p>
      )}
    </div>
  );
}