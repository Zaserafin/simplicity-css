module.exports = {
  server: {
    baseDir: './',
    index: 'index.html'
  },
  files: ['dist/css/*.css', '*.html'],
  port: 3001,
  open: false,
  watchEvents: ['change'],
  notify: false,
  ui: false
};
