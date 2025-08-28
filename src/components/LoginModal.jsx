import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginModal({ onClose, onSuccess }) {
  const { login, user, isLoggedIn, isAdmin, isStudent, authLoading } = useAuth();
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
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const persistUser = (user) => {
    setUser(user);
    try {
      // پەقەت مۇھىم مەلۇماتلارنى ساقلايمىز
      const minimalUser = {
        username: user.username,
        role: user.role || 'user',
        avatar: user.avatar || '',
        phone: user.phone || ''
      };
      localStorage.setItem("currentUser", JSON.stringify(minimalUser));
    } catch (err) {
      console.error("LocalStorage quota exceeded", err);
      toast.error("⚠️ سىستېما ساقلاش چەكلىمىسىدىن ئېشىپ كەتتى. Login مۇۋەپپەقىيەتلىك بولمىدى.", { position: "top-center" });
    }
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
      setTimeout(() => onSuccess(), 1000);
    } else {
      setMessage("❌ ئىسم ياكى مەخپى نۇمۇر خاتا!");
    }
  };


//   const ADMIN_CREDENTIALS = {
//   id: "kaalbil",
//   password: "kalbil3120",
//   name: "kawuuljan99"
// };
  const ADMIN_CREDENTIALS = { username: "kawuljan99", password: "kalbil3120" };

  const handleAdminLogin = () => {
    if (!form.username.trim() || !form.password.trim()) {
      setMessage("❌ باشقۇرچى login ئۈچۈن ئىسم ۋە مەخپى نۇمۇرنى تولدۇرۇڭ!");
      return;
    }

    if (form.username === ADMIN_CREDENTIALS.username && form.password === ADMIN_CREDENTIALS.password) {
      const adminUser = {
        id: "kaalbil",
        password: "kalbil3120",
        name: "kawuljan99",
        role: "admin",
        avatar: "",
        phone: ""
      };

      const users = JSON.parse(localStorage.getItem("users") || "[]");
      if (!users.find(u => u.username === "admin")) {
        users.push(adminUser);
        localStorage.setItem("users", JSON.stringify(users));
      }

      persistUser(adminUser);
      login("admin");
      toast.success("✅ باشقۇرچى كىرىش مۇۋەپپەقىيەتلىك بولدى!", { position: "top-center" });
      setTimeout(() => onSuccess(), 1000);
    } else {
      setMessage("❌ باشقۇرچى ئىسم ياكى مەخپى نۇمۇر خاتا!");
    }
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
    if (users.find(u => u.username === form.username)) {
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
          {!isLogin && <>
            <input
              type="text"
              name="phone"
              placeholder="📱 تېلېفون نۇمۇرى"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
            />
            <input
              type="text"
              name="avatar"
              placeholder="🖼️ Avatar URL (ئىختىيارى)"
              value={form.avatar}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
            />
          </>}

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
            {isLogin ? '🔓  تىزىملىتىش' : '📝 تىزىملىتىش'}
          </button>

          <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
            🧑‍💼 <button type="button" onClick={handleAdminLogin} className="text-blue-500 hover:underline">باشقۇرغۇچى</button>
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
            {isLogin ? '🆕 تىزىملىتىش' : '🔐 تىزىملىتشىقا قايتىش'}
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
