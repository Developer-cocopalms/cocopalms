module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-teal': 'rgb(0, 113, 113)', // or '#007171'
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      fontSize: {
        'heading': '30px',
        'subheading': '18px',
        'paragraph': '16px',
      },
    },
  },
  plugins: [],
}