/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["../*.html"],
    theme: {
        extend: {
            colors: {
                'custom_blue': '#7887b2',
                'custom_blue2': {
                    50: "#f9fafb",
                    100: "#f3f4f6",
                    200: "#e5e7eb",
                    300: "#d1d5db",
                    400: "#9ca3af",
                    500: "#7887b2",
                    600: "#5b6a94",
                    700: "#3f4f76",
                    800: "#22365a",
                    900: "#021e40",
                    950: "#030712",
                },
            },
        },
    },
    plugins: [],
}

