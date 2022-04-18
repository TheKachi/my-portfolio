module.exports = {
  purge: [
    "./pages/**/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class", // or false or 'class'
  theme: {
    fontSize: {
      // 12. 14, 16, 18, 20, 24, 32, 48, 64
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "32px",
      "4xl": "48px",
      "5xl": "64px",
      "6xl": "80px",
    },

    spacing: {
      0: "0px",
      1: "1px",
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      20: "20px",
      24: "24px",
      28: "28px",
      32: "32px",
      36: "36px",
      40: "40px",
      44: "44px",
      48: "48px",
      52: "52px",
      56: "56px",
      60: "60px",
      80: "80px",
      100: "100px",
      120: "120px",
      180: "180px",
    },

    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: {
          light: "#f5f4fc",
          DEFAULT: "#fff",
        },
        black: "#000",
        grey: "#3d3d3d",
        text: "#263547",
        brown: "#2C2C2C",
        light: "rgba(245, 244, 252, 0.62)",
      },

      fontFamily: {
        futuralight: "Futura-Light, sans-serif",
        futuraregular: "Futura-Book, sans-serif",
        futurabold: "Futura-Medium, sans-serif",
      },

      gridTemplateColumns: {
        custom: "repeat(2, minmax(140px, 200px))",
      },
    },
  },

  variants: {
    extend: {
      fill: ["hover", "focus"],
    },
  },
  // plugins: [require("@tailwindcss/forms")],
};
