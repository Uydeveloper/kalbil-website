export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-12 lg:px-24 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
        {/* 📜 Copyright */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">KalBil EduCourses</h3>
          <p>© 2025 Kal Bil EduCourses. All rights reserved.</p>
          <p className="text-sm mt-1">Empowering learners worldwide 🌍</p>
        </div>

        {/* 🔗 Social Links */}
        <div>
          <h4 className="text-md font-semibold text-white mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-blue-400 transition">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition">Instagram</a>
          </div>
        </div>

        {/* 📬 Newsletter or Logo */}
        <div>
          <h4 className="text-md font-semibold text-white mb-2">Stay Updated</h4>
          <form className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* 🔻 Bottom Line */}
      <div className="mt-10 text-center text-sm text-gray-500">
        Made with ❤️ by KalBil EduCourses Team
      </div>
    </footer>
  );
}