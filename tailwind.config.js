module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./pages/**/*.vue",
    "./components/**/*.vue",
    "./plugins/**/*.vue",
    "./static/**/*.vue",
    "./store/**/*.vue"
  ],
  theme: {
    extend: {
      colors: {
        "black": "#2F2F2F",
        "pure-black": "#1D1D1D",
      }
    },
  },
  variants: {},
  plugins: [],
}
