/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
      ],
      theme: {
        extend: {
          colors: {
            primary: '#3b49df',
            secondary: '#f6f6f6',
            accent: '#f5f5f5',
            border: '#e5e5e5',
            card: '#ffffff',
            foreground: '#000000',
            background: '#ffffff'
          }
        }
      },
      plugins: []
    }
