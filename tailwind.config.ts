import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'container': '77.5rem',
      },
      colors:{
        'bg-wht': '#D9D9D9',
        'bg-bl':'#050505'
      },
      borderRadius:{
        'rounded':'7.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
