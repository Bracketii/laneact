// ApplicationLogo component adjustment
export default function ApplicationLogo({ theme, ...props }) {
    // Choose the logo source based on the theme prop
    const logoSrc = theme === 'dark' ? '/logo-dark.svg' : '/logo-white.svg';

    return (
        // <img src={logoSrc} alt="Application Logo" {...props} />
        <h4 className="text-2xl font-bold text-gray-800 dark:text-white">Bracketi</h4>
    );
}
