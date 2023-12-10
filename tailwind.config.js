/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'mobile': {'max':'640px'}
    },
    extend: {
      fontFamily: {
        "HankenGrotesk-normal": "HankenGrotesk-normal",
        "HankenGrotesk-medium": "HankenGrotesk-medium",
        "HankenGrotesk-extrabold": "HankenGrotesk-extrabold",
        "HankenGrotesk-bold": "HankenGrotesk-bold"
      },
      colors: {
        'light-slate-blue': 'hsl(252, 100%, 67%)',
        'light-royal-blue': 'hsl(241, 81%, 54%)',
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': 'hsla(241, 72%, 46%, 0)',
        "light-red": {
          'primary': 'hsl(0, 100%, 67%)',
          '50': 'hsl(0, 100%, 96%)'
        },
        "orangey-yellow": {
          'primary': 'hsl(39, 100%, 56%)',
          '50': 'hsl(39, 100%, 96%)'
        },
        "green-teal": {
          'primary': 'hsl(166, 100%, 37%)',
          '50': 'hsl(166, 100%, 96%)'
        },
        "cobalt-blue": {
          'primary': 'hsl(234, 85%, 45%)',
          '50': 'hsl(234, 85%, 96%)'
        },
        'pale-blue': 'hsl(221, 100%, 96%)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)'

      },
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}

