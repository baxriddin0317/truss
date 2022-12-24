/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            black: "#011931",
            primary: "#3384FB",
            light: "#091832",
            back: "#001931"
          },
          gray: {
            primary: "#D0D0D0",
            light: "#EDF2F7"
          },
          sky: {
            light: "#F7FBFF"
          }
        }
      },
      backgroundImage: {
        'hero-gradient': "linear-gradient(119.23deg, #FAEDDD 1.74%, #DBF0FB 93.78%)",
        'features': "linear-gradient(118.88deg, #FAEDDD 8.32%, #DBF0FB 66.32%)"
      },
      fontSize: {
        description: ["22px", "24px"],
        h2: ["40px", "44px"]
      },
      boxShadow: {
        card: "0px 3px 23px rgba(0, 0, 0, 0.161)",
        eventCard: "0px 3px 15px rgba(0, 0, 0, 0.161)"
      },
      letterSpacing: {
        tightest: '.5em',
      }
    },
  },
  plugins: [],
}
