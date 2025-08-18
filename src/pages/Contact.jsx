// src/pages/Contact.jsx
export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const mailtoLink = `mailto:kawuljan.uyghur@gmail.com?subject=KalBil ئالاقە&body=👤 ئىسمى: ${name}%0A📧 Email: ${email}%0A💬 ئۇچۇر: ${message}`;
    window.location.href = mailtoLink;
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 dark:from-blue-400 dark:to-teal-300">
            📬 ئالاقىلىشىڭ
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-lg">
            بىز بىلەن ئالاقىلىشىڭ — سىزنىڭ سۆزىڭىز بىز ئۈچۈن قىممەتلىك
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <p>KalBil Quantum Lab & High Tech</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">📞</span>
              <p>+81 90-1234-5678</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">✉️</span>
              <p>support@kalbil.ai</p>
            </div>
            <p className="mt-6 text-gray-600 dark:text-gray-400">
              كۋانتۇم ئۆگىنىش، ئەقلىي ئىقتىدار، ياكى پەقەت بىر سالام دىگەن بولسىڭىزمۇ — سىزنىڭ سۆزىڭىز بىز ئۈچۈن قىممەتلىك. KalBil بىلەن ئالاقىلىشىڭ، چۈنكى بىز سىزنىڭ قىزىقىشىڭىزنى، ئارزۇيىڭىزنى، ۋە سۆزىڭىزنى قەلبتىن قوبۇل قىلىمىز.
            </p>

            {/* Map Block */}
            <div className="mt-8 space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">نىڭ ئورنى KalBil Lab📍 </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                   ئوقۇتۇش ۋە پەن - تېخنىكا تەتقىقات تەرەققىيات مەركىزى KalBiL
              </p>
              <div className="rounded-lg overflow-hidden shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
                <iframe
                  title="KalBil Lab Location"
                  src="https://www.google.com/maps/place/Tianshan+District,+%C3%9Cr%C3%BCmqi,+Xinjiang,+China/@43.7152592,87.4048996,11z/data=!3m1!4b1!4m15!1m8!3m7!1s0x3806008cfd7b4dab:0xaa5952ebac7a708a!2zw5xyw7xtcWksIFhpbmppYW5nLCBDaGluYQ!3b1!8m2!3d43.8266299!4d87.61688!16zL20vMDFjOHQ2!3m5!1s0x3805fc2f86544087:0x2630f3e0a750eb78!8m2!3d43.7954699!4d87.63356!16zL20vMGdzaHI2?authuser=0&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter dark:brightness-75"
                ></iframe>
              </div>

              <a
                href="https://www.google.com/maps/place/%C3%9Cr%C3%BCmqi,+Xinjiang,+China/@43.8218415,87.3976013,11z/data=!3m1!4b1!4m6!3m5!1s0x3806008cfd7b4dab:0xaa5952ebac7a708a!8m2!3d43.8266299!4d87.61688!16zL20vMDFjOHQ2?authuser=0&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                🗺 Google خەرىتىدە كۆرۈش
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="peer w-full px-4 pt-6 pb-2 border rounded dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-sm text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                👤 ئىسمىڭىز
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="peer w-full px-4 pt-6 pb-2 border rounded dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-sm text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                📧 Email ئادرىسىڭىز
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="5"
                className="peer w-full px-4 pt-6 pb-2 border rounded dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-sm text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                💬 ئۇچۇرىڭىز
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-2 rounded hover:from-blue-700 hover:to-green-600 transition"
            >
              🚀 ئۇچۇر يوللاش
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}