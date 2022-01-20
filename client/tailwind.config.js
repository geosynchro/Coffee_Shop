module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'coffee': "url('../src/assets/CoffeeBG.jpeg')",
        'coffee2': "url('../src/assets/coffeeBG2.jpeg')",
        'coffee3': "url('../src/assets/coffeebg3.jpeg')",
        'coffee4': "url('../src/assets/coffeebg4.jpeg')",
        'coffee4sm': "url('../src/assets/coffee4sm.jpeg')",
        'coffee6': "url('../src/assets/coffeebg6.jpeg')",
        'coffee6sm': "url('../src/assets/coffeebg6sm.jpeg')",
        'coffee7': "url('../src/assets/coffeebg7.jpeg')"

      },
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
