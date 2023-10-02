import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/*.{js,ts,jsx,tsx,mdx}',
    './components/**/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#FF6330',
        secondary: 'text-gray-500',
        success: 'text-green-500',
        error: 'text-red-500',
      },
      backgroundColor: {
        primary: '#4f46e5',
        secondary: 'bg-gray-200',
        success: 'bg-green-200',
        error: 'bg-red-200',
      },
    },
  },
  plugins: [],
};
export default config;
