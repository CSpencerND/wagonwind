module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "drac-bg": "hsl(231 15% 18% / 1)",
                "drac-bgl": "hsl(232 14% 31% / 1)",
                "drac-fg": "hsl(60 30% 96% / 1)",
                "drac-magenta": "hsl(326 100% 74% / 1)",
                "drac-purple": "hsl(265 89% 78% / 1)",
                "drac-blue": "hsl(225 27% 51% / 1)",
                "drac-cyan": "hsl(191 97% 77% / 1)",
                "drac-green": "hsl(135 94% 65% / 1)",
                "drac-yellow": "hsl(65 92% 76% / 1)",
                "drac-orange": "hsl(31 100% 71% / 1)",
                "drac-red": "hsl(0 100% 76% / 1)",
            }
        },
    },
    plugins: [
        require("@tailwindcss/forms")
    ],
}
