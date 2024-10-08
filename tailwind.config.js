const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        cyan: "#151030",
        violet: "#100D25",
        "rich-black": "#040716ff",
        white: "#fdfdfdff",
        "davys-gray": "#50515dff",
        "cadet-gray": "#a0a1acff",
        "kelly-green": "#6eb440ff",
        "picton-blue": "#38b3e7ff",
        "medium-slate-blue": "#925dfeff",
        "arylide-yellow": "#e5d650ff",
        "safety-orange": "#f67a1dff",
        "cornell-red": "#b9181eff",
        "french-gray": "#b7b0b6ff",
        mint: "#5ba87fff",
        "ultra-violet": "#6d669cff",
        "magenta-haze": "#a6366fff",
        "cool-gray": "#9897a1ff",
        "russian-violet": "#160e36ff",
        "process-cyan": "#42b2e0ff",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "hero-pattern-light": "url('/src/assets/herobg-gray.png')",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
