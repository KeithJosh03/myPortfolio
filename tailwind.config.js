module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        customMono: ["Space Mono", "monospace"],
        arimoFont: ["Arimo", "sans-serif"],
        interFont:["Inter", "sans-serif"],
        vollkorn: ["Vollkorn", "serif"]
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-9deg)" },
          "50%": { transform: "rotate(9deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 1s linear infinite",
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [
  ],
};


// Inter