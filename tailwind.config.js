export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#090909',
        'void-2': '#111111',
        snow: '#F5F5F5',
        gold: '#B89B72',
        'gold-light': '#D4B896',
        'gold-dim': '#8A7255',
        stone: '#8E8E8E',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
