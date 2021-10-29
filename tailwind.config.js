module.exports = {
  purge: {
    enabled: true,
    content: [
      './_layouts/questcraft_home.html',
      './_layouts/questcraft_blank.html',
      './_layouts/questcraft_404.html',
      './_layouts/post.html',
      './news.html',
      './privacypolicy.md',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
