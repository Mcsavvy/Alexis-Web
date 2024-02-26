/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        'light-panel': '#f5f5f5',
        'light-gray': '#98a3ae',
        'light-text': '#000',
        'light-primary': '#db3e3e',
        'light-icon': '#333333',
        'light-label-success': '#5cb85c',
        'light-label-default': '#777777',
        'dark-panel': '#313338',
        'dark-text': '#fff',
        'dark-primary': '#db3e3e',
        'dark-icon': '#ddd3d3',
        'dark-label-success': '#5cb85c',
        'dark-label-default': '#121212',
      },
    },
  },
  plugins: [],
}

