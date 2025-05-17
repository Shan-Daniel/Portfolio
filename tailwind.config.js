module.exports = {
    darkMode: 'class',
    content: [
        './**/*.html',
        './js/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                indigo: {
                    600: '#4f46e5',
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81',
                },
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-in-out',
                'bounce': 'bounce 2s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                bounce: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
        },
    },
    plugins: [],
}