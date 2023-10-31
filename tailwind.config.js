/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {

      backgroundImage: {
        'head': "url('../public/img/head_bgi.png')",
        'card': "url('../public/img/img_tejarat_card_bg.jpg')",
      },


      // animation: {
      //   rightAnime: 'rightAnime',
      //   fade: 'fade',
      //   upAnime500: 'upAnime500',
      //   upAnime5: 'upAnime5',
      // },
      keyframes: {
        rightAnime: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        upAnime5: {
          '0%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(0)' },
        },
        upAnime10: {
          '0%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
        downAnime10: {
          '0%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        downAnime20: {
          '0%': { transform: 'translateY(30px)' },
          '100%': { transform: 'translateY(0)' },
        },
        downAnime50: {
          '0%': { transform: 'translateY(50px)' },
          '100%': { transform: 'translateY(0)' },
        },
        fade: {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
        unfade: {
          '0%': { opacity: "1" },
          '100%': { opacity: "0" },
        },
        upAnime500: {
          '0%': { height: "5px" },
          '100%': { height: "500px" },
        },
        scaleClick: {
          '0%': { transform: 'scale(0.9,0.9)' },
          '100%': { transform: 'scale(1,1)' },
        },
        scaleClick0: {
          '0%': { transform: 'scale(0.8,0.8)' },
          '100%': { transform: 'scale(1,1)' },
        },
        rotate360: {
          '0%': { transform: 'rotateY(0)' },
          '50%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        pers: {
        '0%': { transform: 'perspective(0cm) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          // '50%': { transform: 'perspective(2cm) rotateX(-15deg) rotateY(30deg) rotateZ(90deg)' },
          '100%': { transform: 'perspective(1200px)  rotateY(-180deg) rotateX(0deg)' },
        },
      },



      colors: {
        blue: {
          DEFAULT: '#3273dc',
          1: '#3273dc',
        },
        cyan: {
          DEFAULT: '#006D75',
          50: '#08979C',
          100: '#006D75',
          200: '#17b8be'
        },
        darkMode: {
          black: '#334155',
          gray: 'gray',
          grayDark: '#475569',
          graylight: 'lightgray',
        },
        itemSelect: {
          cyan: '#0891a7',
          grayDark: '#475569',
          purple: '#5654c1',
          purpleLight: '#8F60BE',
          red: '#c84332',
          cyanDark: '#2a697a',
          blue: '#1364C0',
          green: '#419E69',
          orange: '#CC7740',
          yellow: '#B9A149',
          graylight: 'lightgray',
        },
      }
    },
  },
  plugins: [],
}