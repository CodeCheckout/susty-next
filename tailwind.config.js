module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            custom: ['Poppins', 'sans-serif'],
        },
        extend: {
            colors: {
                "susty": "#f08080"
            }
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
    ],
}
