module.exports = {
    content: [
        "./src/Pages/*.{js,jsx,ts,tsx}",
        "./src/Components/*/*.{js,jsx,ts,tsx}",
        "./src/Components/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            primary: '#a72929',
            red: '#a72929',
        },
        container: {
            // you can configure the container to be centered
            center: true,
            // or have default horizontal padding
            padding: '1rem',
            // default breakpoints but with 40px removed
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1160px',
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: true,
    },
}
