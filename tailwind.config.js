module.exports = {
  purge: ['./index.html', './**/index.html', './src/**/*.js', './src/**/*.scss'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Arial', 'ui-sans-serif', 'system-ui'],
      'serif': ['Times New Roman CE', 'TimesNewRoman', 'Times New Roman', 'ui-serif', 'system-ui'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
