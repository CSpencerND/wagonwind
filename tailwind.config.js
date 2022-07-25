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
                "drac-hard": "hsl(231, 15%, 12%)",
                "drac-soft": "hsl(231, 15%, 18%)",
                "drac-hl": "hsl(232, 14%, 31%)",
                "drac-fg": "hsl(60, 30%, 96%)",
                "drac-magenta": "hsl(326, 100%, 74%)",
                "drac-purple": "hsl(265, 89%, 78%)",
                "drac-blue": "hsl(225, 27%, 51%)",
                "drac-cyan": "hsl(191, 97%, 77%)",
                "drac-green": "hsl(135, 94%, 65%)",
                "drac-yellow": "hsl(65, 92%, 76%)",
                "drac-orange": "hsl(31, 100%, 71%)",
                "drac-red": "hsl(0, 100%, 67%)",
            },
            fontSize: {
                sm: ["clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)", "1.5"],
                base: [
                    "clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)",
                    "1.5",
                ],
                lg: ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)", "1.5"],
                xl: ["clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)", "1.4"],
                "2xl": [
                    "clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)",
                    "1.2",
                ],
                "3xl": [
                    "clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)",
                    "1.1",
                ],
                "4xl": ["clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)", "1"],
                "5xl": ["clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)", "1"],
                "6xl": ["clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)", "1"],
            },
            boxShadow: {
                std: "0 2px 6px 1px rgb(0 0 0 / 0.75), 0 2px 4px -2px rgb(0 0 0 / 0.75)",
            },
            transitionProperty: {
                height: "height",
                spacing: "margin, padding",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
}
