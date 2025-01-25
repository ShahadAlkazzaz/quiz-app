/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#3D416E', // Mörk lila
                accent: '#99D1F8', // Ljus blå
                secondary: '#F3C48B' // Ljus orange
            },
            backgroundImage: {
                'gradient-dark': 'linear-gradient(to bottom, #3D416E, #000000)'
            }
        }
    },
    plugins: []
}
