const { createGlobPatternsForDependencies } = require("@nx/angular/tailwind");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, "src/**/!(*.stories|*.spec).{ts,html}"),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        'light': {
           'primary' : '#570df8',
           'primary-focus' : '#4506cb',
           'primary-content' : '#ffffff',

           'secondary' : '#f000b8',
           'secondary-focus' : '#bd0091',
           'secondary-content' : '#ffffff',

           'accent' : '#37cdbe',
           'accent-focus' : '#2ba69a',
           'accent-content' : '#ffffff',

           'neutral' : '#3b424e',
           'neutral-focus' : '#2a2e37',
           'neutral-content' : '#ffffff',

           'base-100' : '#ededed',
           'base-200' : '#f9fafb',
           'base-300' : '#ced3d9',
           'base-content' : '#1e2734',

           'info' : '#1c92f2',
           'success' : '#009485',
           'warning' : '#ff9900',
           'error' : '#ff5724',

          '--rounded-box': '1rem',          
          '--rounded-btn': '.5rem',        
          '--rounded-badge': '1.9rem',      

          '--animation-btn': '.25s',       
          '--animation-input': '.2s',       

          '--btn-text-case': 'uppercase',   
          '--navbar-padding': '.5rem',      
          '--border-btn': '1px',            
        },
      }, 
    {
      'dark': {
        'primary' : '#793ef9',
        'primary-focus' : '#570df8',
        'primary-content' : '#ffffff',

        'secondary' : '#f000b8',
        'secondary-focus' : '#bd0091',
        'secondary-content' : '#ffffff',

        'accent' : '#37cdbe',
        'accent-focus' : '#2ba69a',
        'accent-content' : '#ffffff',

        'neutral' : '#23272e',
        'neutral-focus' : '#16181d',
        'neutral-content' : '#ffffff',

        'base-100' : '#34373c',
        'base-200' : '#24272d',
        'base-300' : '#16181d',
        'base-content' : '#ebecf0',

        'info' : '#66c7ff',
        'success' : '#87cf3a',
        'warning' : '#e1d460',
        'error' : '#ff6b6b',

       '--rounded-box': '1rem',          
       '--rounded-btn': '.7rem',        
       '--rounded-badge': '1.9rem',      

       '--animation-btn': '.25s',       
       '--animation-input': '.2s',       

       '--btn-text-case': 'uppercase',   
       '--navbar-padding': '.5rem',      
       '--border-btn': '1px',            
     },
    }, "cupcake",
      {
        'forest': {
          'primary' : '#1eb854',
          'primary-focus' : '#188c40',
          'primary-content' : '#ffffff',

          'secondary' : '#20d55f',
          'secondary-focus' : '#18aa4b',
          'secondary-content' : '#ffffff',

          'accent' : '#d99330',
          'accent-focus' : '#b57721',
          'accent-content' : '#ffffff',

          'neutral' : '#110e0e',
          'neutral-focus' : '#060404',
          'neutral-content' : '#ffffff',

          'base-100' : '#171212',
          'base-200' : '#110e0e',
          'base-300' : '#060404',
          'base-content' : '#ffffff',

          'info' : '#66c7ff',
          'success' : '#87cf3a',
          'warning' : '#e1d460',
          'error' : '#ff6b6b',

          '--rounded-box': '1rem',          
          '--rounded-btn': '.5rem',        
          '--rounded-badge': '1.9rem',      

          '--animation-btn': '.25s',       
          '--animation-input': '.2s',       

          '--btn-text-case': 'uppercase',   
          '--navbar-padding': '.5rem',      
          '--border-btn': '1px',            
        }
      }
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
