import type { Config } from 'tailwindcss'


const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'main-logo': "url('/mainlogo.svg')",

      },
      colors: {
        'black_2f': '#2f2f2f',
        'gray_a6': '#a6a5ad',
        'gray_c2': '#c2c2c2',
        'gray_9c': '#9c9c9c',
        'gray_63': '#636363',
        'gray_71': '#717171',
        'gray_76': '#76757D',
        'gray_b0': '#b0afb2',
        'black_0d': '#0d1014',
        'black_11': '#11161c',
        'black_19': '#191e23',
        'black_223': 'rgba(223, 223, 223)',




      },
      borderRadius: {
        '4xl': '32px',
      },
      boxShadow: {
        '3xl': '0 -12px 24px 0px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
