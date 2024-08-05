/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#4361ee',
                    light: '#eaf1ff',
                    'dark-light': 'rgba(67,97,238,.15)',
                },
                dark950: {
                    DEFAULT: '#020617',
                },
                dark900: {
                    DEFAULT: '#0f172a',
                },
                dark800: {
                    DEFAULT: '#1e293b',
                },
                dark700: {
                    DEFAULT: '#334155',
                },
                dark600: {
                    DEFAULT: '#475569',
                },
                dark500: {
                    DEFAULT: '#64748b',
                },
                dark400: {
                    DEFAULT: '#94a3b8',
                },
                dark300: {
                    DEFAULT: '#cbd5e1',
                },
                emerald: {
                    DEFAULT: '#059669',
                },
                cyan: {
                    DEFAULT: '#06b6d4',
                },
                blue: {
                    DEFAULT: '#2563eb',
                },
                indigo: {
                    DEFAULT: '#818cf8',
                },
                pink: {
                    DEFAULT: '#f472b6',
                },
                rose: {
                    DEFAULT: '#e11d48',
                },
                lime: {
                    DEFAULT: '#84cc16',
                },
                yellow: {
                    DEFAULT: '#facc15',
                },
                secondary: {
                    DEFAULT: '#805dca',
                    light: '#ebe4f7',
                    'dark-light': 'rgb(128 93 202 / 15%)',
                },
                success: {
                    DEFAULT: '#00ab55',
                    light: '#ddf5f0',
                    'dark-light': 'rgba(0,171,85,.15)',
                },
                danger: {
                    DEFAULT: '#e7515a',
                    light: '#fff5f5',
                    'dark-light': 'rgba(231,81,90,.15)',
                },
                warning: {
                    DEFAULT: '#e2a03f',
                    light: '#fff9ed',
                    'dark-light': 'rgba(226,160,63,.15)',
                },
                info: {
                    DEFAULT: '#2196f3',
                    light: '#e7f7ff',
                    'dark-light': 'rgba(33,150,243,.15)',
                },
                dark: {
                    DEFAULT: '#3b3f5c',
                    light: '#eaeaec',
                    'dark-light': 'rgba(59,63,92,.15)',
                },
                brown: {
                    DEFAULT: '#854d0e'
                },
                darkRose: {
                    DEFAULT: '#4a044e'
                },
             
                lightRose: {
                    DEFAULT:"#fecdd3"
                },
                lightIndigo: {
                    DEFAULT:"#c7d2fe"
                },
                lightGreen: {
                    DEFAULT:"#6ee7b7"
                },
                lightYellow: {
                    DEFAULT:"#fef08a"
                },
                black: {
                    DEFAULT: '#0e1726',
                    light: '#e3e4eb',
                    'dark-light': 'rgba(14,23,38,.15)',
                },
                white: {
                    DEFAULT: '#ffffff',
                    light: '#e0e6ed',
                    dark: '#888ea8',
                },
            },
         
           
        },
    
      }
  },
  plugins: [],
}
}

