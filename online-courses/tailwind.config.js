module.exports = {
  darkMode: 'class', // ✅ بۇنى قوشۇڭ
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    
    extend: {
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      fontFamily: {
        'uyghur': ['UKIJ_Tuz', 'UKIJ_Ekran', 'UKIJ_Mac', 'Microsoft Uighur', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#0f172a',
        'card-bg': '#1e293b',
        'accent-blue': '#3b82f6',
        'accent-purple': '#8b5cf6',
        'accent-green': '#10b981',
        'accent-yellow': '#f59e0b',
        'accent-red': '#ef4444',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
         slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
      }
    },
  },
  plugins: [],
};