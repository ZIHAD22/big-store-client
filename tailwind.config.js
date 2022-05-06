module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-img':
          "url('https://img.freepik.com/free-photo/flat-lay-assortment-vegetables_23-2148853350.jpg?t=st=1651847925~exp=1651848525~hmac=292128c1627fdbb50d99cc17d1f3ce97fa1e920e588c3b7e303aa2076f85cfc2&w=900')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      gridTemplateColumns: {
        responsive: 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
