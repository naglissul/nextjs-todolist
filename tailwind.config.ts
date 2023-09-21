import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.{ts,js}",
  ],
  theme: {
    extend: {
      colors: {
        nice: "#5B0888",
        milkshake: "#E5CFF7",
        buttonHover: "#713ABE",
        moldLight: "#9D76C1",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
