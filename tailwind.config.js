module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: "class",
    theme: {
        screens: {
            // max-width breakpoints
            "max-2xl": { max: "1535px" },
            // => @media (max-width: 1535px) { ... }

            "max-xl": { max: "1279px" },
            // => @media (max-width: 1279px) { ... }

            "max-lg": { max: "1023px" },
            // => @media (max-width: 1023px) { ... }

            "max-md": { max: "767px" },
            // => @media (max-width: 767px) { ... }

            "max-sm": { max: "639px" },
            // => @media (max-width: 639px) { ... }


            // min-width breakpoints
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
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
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
}
