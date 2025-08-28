import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import students from '../data/students.json'; // ✅ ئوقۇغۇچىلار جەيسونى
import 'react-toastify/dist/ReactToastify.css';

export default function LoginModal({ onClose, onSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
    phone: '',
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

  // ✅ باشقۇرغۇچى login
  const ADMIN_CREDENTIALS = {
    username: "uyghurjan",
    password: "uyghurjan"
  };

  // 🔐 Login (كىرىش)
  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.username.trim() || !form.password.trim()) {
      setMessage("❌ ئىسم ۋە مەخپى نۇمۇرنى تولدۇرۇڭ!");
      return;
    }

    // 🔑 باشقۇرغۇچى
    if (
      form.username === ADMIN_CREDENTIALS.username &&
      form.password === ADMIN_CREDENTIALS.password
    ) {
      const adminUser = {
        username: "uyghurjan",
        role: "admin",
        avatar: "",
        phone: ""
      };
      persistUser(adminUser);
      login("admin");
      toast.success("✅ باشقۇرغۇچى كىرىش مۇۋاپىقىيەتلىك بولدى!", { position: "top-center" });
      setTimeout(() => onSuccess(), 1000);
      return;
    }

    // 🔑 ئوقۇغۇچى (students.json دىن تەكشۈرۈش)
    const student = students.find(
      (s) => s.username === form.name && s.password === form.password
    );
    if (student) {
      const studentUser = { ...student, role: "student" };
      persistUser(studentUser);
      login("student");
      toast.success("✅ ئوقۇغۇچى كىرىش مۇۋاپىقىيەتلىك بولدى!", { position: "top-center" });
      setTimeout(() => onSuccess(), 1000);
      return;
    }

    // 🔑 ئادەتتىكى user (localStorage)
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find(
      (u) => u.username === form.username && u.password === form.password
    );
    if (found) {
      persistUser({ ...found, role: found.role || "user" });
      login(found.role || "user");
      toast.success("✅ كىرىش مۇۋاپىقىيەتلىك بولدى!", { position: "top-center" });
      setTimeout(() => onSuccess(), 1000);
      return;
    }

    // 🔑 مىھمان
    if (form.username === "guest" && form.password === "guest") {
      const guestUser = {
        username: "زىيارەتچى",
        role: "guest"
      };
      persistUser(guestUser);
      login("guest");
      toast.info("👤 مىھمان سۈپىتىدە كىردىڭىز", { position: "top-center" });
      setTimeout(() => onSuccess(), 1000);
      return;
    }

    // ❌ خاتا بولسا
    setMessage("❌ ئىسم ياكى مەخپى نۇمۇر خاتا!");
  };

  // 📝 SignUp (تىزىملاتقۇچى)
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password || !form.confirm) {
      setMessage("❌ بارلىق ئورۇنلارنى تولدۇرۇڭ!");
      return;
    }

    if (form.password !== form.confirm) {
      setMessage("❌ مەخپى نۇمۇر ماس كەلمىدى!");
      return;
    }

    // يىڭى user نى قوشۇش
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((u) => u.username === form.username)) {
      setMessage("❌ بۇ ئىسم ئاللىبۇرۇن بار!");
      return;
    }

    const newUser = {
      username: form.username,
      email: form.email,
      password: form.password,
      avatar: form.avatar || "",
      role: "user"
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    toast.success("✅ تىزىملىتىش مۇۋاپىقىيەتلىك بولدى!", { position: "top-center" });

    // قايتىدىن Login بەتتە كۆرۈنسۇن
    setIsLogin(true);
    setForm({ username: '', email: '', password: '', confirm: '', avatar: '' });
    setMessage('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 pt-20">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          {isLogin ? '🔐 كىرىش' : '🆕 تىزىملىتىش'}
        </h2>

        <form onSubmit={isLogin ? handleLogin : handleSignUp} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="👤 ئىسم"
            value={form.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
            required
          />

          {!isLogin && (
            <input
              type="email"
              name="email"
              placeholder="📧 ئىلخەت"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
              required
            />
          )}

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
              placeholder="✅ مەخپى نۇمۇر تەستىقلاش"
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
