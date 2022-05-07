module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-img':
          "url('https://img.freepik.com/free-vector/father-son-buying-food-supermarket_74855-5245.jpg?t=st=1651866848~exp=1651867448~hmac=66a30102a665748cb2500187de5bfa488b953a81360d59ed681073017086e9e7&w=1380')",
        'footer-texture': "url('/img/footer-texture.png')",
        'registration-img':
          "url('https://img.freepik.com/free-vector/people-donate-food-tiny-characters-put-grocery-product-charity-box-volunteer-community-help-poor-holiday-food-drive-vector-concept_102902-4744.jpg?w=2000')",
      },
      gridTemplateColumns: {
        responsive: 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
