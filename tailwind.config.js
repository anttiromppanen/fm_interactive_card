/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    // },
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        userGradient1: "hsl(249, 99%, 64%)",
        userGradient2: "hsl(278, 94%, 30%)",
        userRed: "hsl(0, 100%, 66%)",
        userWhite: "hsl(0, 0%, 100%)",
        userLightGrayViolet: "hsl(270, 3%, 87%)",
        userDarkGrayViolet: "hsl(279, 6%, 55%)",
        userVeryDarkViolet: "hsl(278, 68%, 11%)",
      },
      backgroundImage: {
        "userCardFrontBg": "url('/bg-card-front.png')",
        "userCardBackBg": "url('/bg-card-back.png')",
        "userMainBgMobile": "url('/bg-main-mobile.png')",
        "userMainBgDesktop": "url('/bg-main-desktop.png')",
      }
    },
  },
  plugins: [],
}