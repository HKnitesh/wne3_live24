import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'main-logo': "url('/mainlogo.svg')"
      },
      colors: {
        'black_2f': '#2f2f2f',
        'gray_a6': '#a6a5ad',
        'gray_c2': '#c2c2c2',
        'gray_9c': '#9c9c9c',
        'gray_63': '#636363',
        'black_0d': '#0d1014',
        'black_11': '#11161c',
        'black_223': 'rgba(223, 223, 223)',
        
      },
      borderRadius: {
        '4xl': '32px',
      },
    },
  },
  plugins: [],
}
export default config
