import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginModal({ onClose, onSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    username: '',
    password: '',
    phone: '',
    confirm: '',
    avatar: ''
  });
  const [message, setMessage] = useState('');
  const { setUser } = useContext(UserContext);
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const persistUser = (user) => {
    setUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.username.trim() || !form.password.trim()) {
      setMessage("❌ ئىسم ۋە مەخپى نۇمۇرنى تولدۇرۇڭ!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find(
      (u) => u.username === form.username && u.password === form.password
    );

    if (found) {
      persistUser(found);
      login(found.role || "user");
      toast.success("✅ كىرىش مۇۋەپپەقىيەتلىك بولدى!", { position: "top-center" });
      setTimeout(() => {
        onSuccess(); // Modal نى يېپىدۇ
      }, 1000);
    } else {
      setMessage("❌ ئىسم ياكى مەخپى نۇمۇر خاتا!");
    }
  };

  const handleAdminLogin = () => {
    const adminUser = {
      username: 'kkkk',
      password: 'kkk',
      role: 'admin',
      avatar: '',
      phone: ''
    };

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const exists = users.find((u) => u.username === 'admin');

    if (!exists) {
      users.push(adminUser);
      localStorage.setItem("users", JSON.stringify(users));
    }

    persistUser(adminUser);
    login("admin");
    toast.success("✅ باشقۇرچى كىرىش مۇۋەپپەقىيەتلىك بولدى!", { position: "top-center" });
    setTimeout(() => {
      onSuccess();
    }, 1000);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!form.username.trim() || !form.password.trim()) {
      setMessage("❌ ئىسم ۋە مەخپى نۇمۇرنى تولدۇرۇڭ!");
      return;
    }

    if (form.password !== form.confirm) {
      setMessage('❌ مەخپى نۇمۇر تەستىقلىنىشى خاتا!');
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const exists = users.find((u) => u.username === form.username);

    if (exists) {
      setMessage('❌ بۇ ئىسم ئاللىقاچان تىزىملىتىلگەن!');
      return;
    }

    const newUser = {
      username: form.username,
      password: form.password,
      phone: form.phone,
      avatar: form.avatar,
      role: 'user'
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    persistUser(newUser);
    login("user");
    toast.success(`✅ ${form.username} تىزىملىتىلدى!`, { position: "top-center" });
    setTimeout(() => {
      setIsLogin(true);
      onSuccess();
    }, 1000);
  };

  return (
    
    <div className="fixed mt-40 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md mt-20">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          {isLogin ? '🔐 Login' : '🆕 Sign Up'}
        </h2>

        <form onSubmit={isLogin ? handleLogin : handleSignup} className="space-y-4">
          {!isLogin && (
            <>
              <input
                type="text"
                name="phone"
                placeholder="📱 تېلېفون نۇمۇرى"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
                required
              />
              <input
                type="text"
                name="avatar"
                placeholder="🖼️ Avatar URL (ئىختىيارى)"
                value={form.avatar}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
              />
            </>
          )}

          <input
            type="text"
            name="username"
            placeholder="👤 ئىسم"
            value={form.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="🔒 مەخپى نۇمۇر"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
            required
          />

          {!isLogin && (
            <input
              type="password"
              name="confirm"
              placeholder="✅ تەستىق مەخپى نۇمۇر"
              value={form.confirm}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
              required
            />
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {isLogin ? '🔓 لوگىن قىلىش' : '📝 تىزىملىتىش'}
          </button>

          <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
            🧑‍💼 <button onClick={handleAdminLogin} className="text-blue-500 hover:underline">باشقۇرچى</button>
          </div>
        </form>

        {message && (
          <p className="mt-4 text-center text-red-600 dark:text-red-400 font-semibold">
            {message}
          </p>
        )}

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline"
          >
            {isLogin ? '🆕 تىزىملىتىش' : '🔐 لوگىن قايتىش'}
          </button>
        </div>

        <div className="mt-2 text-center">
          <button
            onClick={onClose}
            className="text-red-500 hover:underline"
          >
            ❌ تاقاش
          </button>
        </div>
      </div>
    </div>
   
  );
}