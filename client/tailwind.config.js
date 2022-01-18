module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'arizonia': ['Arizonia', 'cursive'],
        'lobster': ['Lobster', 'cursive'],
        'pacifico': ['Pacifico', 'cursive'],
        'rancho': ['Rancho', 'cursive'],
        'sacramento': ['Sacramento', 'cursive'],
        'yesteryear': ['Yesteryear', 'cursive']
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
