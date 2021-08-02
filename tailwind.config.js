module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}", 
      "./components/**/*.{js,ts,jsx,tsx}",
      "./_posts/**/*.{md}",
      "./_projects/**/*.{md}",
      "./_talks/**/*.{md}"
    ],
    transform: {
      md: (content) => {
        return remark().process(content)
      }
    },  
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "CalibreWeb",
      serif: "TiemposTextWeb",
    },
    colors: {
      tan: {
        DEFAULT: "#f9f0e0",
      },
      black: {
        DEFAULT: "#25231b",
        lighter: "#8F897C",
      },
      yellow: {
        DEFAULT: "#F4AE23",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
