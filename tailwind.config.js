import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Ensure this is set to 'class' for manual dark mode toggling
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Fira Mono', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Define your custom colors
                customBlue: '#2E3192',
                lightBlue: '#0162F9',
                veryLightBlue: '#EBF2FF',
                darkBlue: '#001029',
                deepDarkBlue: '#0A0A1F',
            }
        },
    },
    plugins: [forms],
};
