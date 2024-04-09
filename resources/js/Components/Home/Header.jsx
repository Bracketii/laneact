// Landing Page header component
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import ThemeSwitcher from '../ThemeSwitcher';

export default function Header({ auth, toggleTheme, darkTheme }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="flex justify-between items-center w-full p-4">
            <ApplicationLogo theme={darkTheme ? 'dark' : 'light'} alt="Logo" className="h-10" />

            {/* Desktop & Mobile Navigation */}
            <div className="flex items-center">
                {/* Mobile Menu Toggle */}
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="mr-6 md:hidden dark:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMobileMenuOpen ? (
                        // Cross icon for when the menu is open
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        // Two-line hamburger icon for when the menu is closed
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 9h16M4 15h16" />
                    )}
                </svg>
                </button>

                {/* Desktop Links */}
                <nav className="hidden md:flex gap-5">
                    <Link href={route('features')} className="text-base hover:text-opacity-80 dark:text-white hover:bg-gray-100 px-4 py-2 rounded-md dark:hover:bg-slate-800">Features</Link>
                    <Link href="/" className="text-base hover:text-opacity-80 dark:text-white hover:bg-gray-100 px-4 py-2 rounded-md dark:hover:bg-slate-800">Community</Link>
                    <Link href="/" className="text-base hover:text-opacity-80 dark:text-white hover:bg-gray-100 px-4 py-2 rounded-md dark:hover:bg-slate-800">About</Link>
                    <Link href="/" className="text-base hover:text-opacity-80 dark:text-white hover:bg-gray-100 px-4 py-2 rounded-md dark:hover:bg-slate-800">Get a quote</Link>
                </nav>
            </div>

            {/* Authentication Links for Desktop */}
            <div className="hidden md:flex items-center gap-4">
                <ThemeSwitcher iconClassName="size-6" />
                {auth.user ? (
                    <Link href={route('dashboard')} className="px-4 py-2 text-base font-medium rounded-md text-white bg-[#FF2D20] hover:bg-[#FF5733]">
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link href={route('login')} className="px-4 py-2 text-base font-medium rounded-md dark:text-white text-dark hover:bg-gray-100 hover:text-gray-900 dark:hover:text-gray-900">
                            Log in
                        </Link>
                        <Link href={route('register')} className="px-4 py-2 text-base font-medium rounded-md text-dark bg-[#FEE715] hover:bg-[#F4DB01]">
                            Register
                        </Link>
                    </>
                )}
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 right-0 z-10 flex flex-col items-center bg-gray-50 dark:bg-[#101820] p-4 md:hidden">
                    <Link href="/" className="text-base hover:text-opacity-80 dark:text-white mb-4">Features</Link>
                    <Link href="/" className="text-base hover:text-opacity-80 dark:text-white mb-4">Community</Link>
                    <Link href="/" className="text-base hover:text-opacity-80 dark:text-white mb-4">About</Link>
                    <Link href="/" className="text-base hover:text-opacity-80 dark:text-white mb-4">Get a quote</Link>
                    <hr className="border-t dark:border-gray-800 w-full my-4" />
                    {/* Authentication Links repeated for Mobile */}
                    {auth.user ? (
                        <Link href={route('dashboard')} className="px-4 py-2 text-base font-medium rounded-md text-white bg-[#FF2D20] hover:bg-[#FF5733] w-full text-center">Dashboard</Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="px-4 py-2 text-base font-medium rounded-md dark:text-white text-dark hover:bg-gray-100 hover:text-gray-900 dark:hover:text-gray-900 w-full text-center">Log in</Link>
                            <Link href={route('register')} className="mt-2 px-4 py-2 text-base font-medium rounded-md text-dark bg-[#FEE715] hover:bg-[#F4DB01] w-full text-center">Register</Link>
                        </>
                    )}
                </div>
            )}
        </header>
    );
}
