// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
//     theme: {
//         extend: {
//             colors: {
//                 primary: '#3D416E', // Mörk lila
//                 accent: '#99D1F8', // Ljus blå
//                 secondary: '#F3C48B' // Ljus orange
//             },
//             backgroundImage: {
//                 'gradient-dark': 'linear-gradient(to bottom, #3D416E, #000000)'
//             }
//         }
//     },
//     plugins: []
// }

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
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                pulse: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' }
                }
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                pulse: 'pulse 2s infinite'
            }
        }
    },
    plugins: []
}
