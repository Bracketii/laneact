// Landing Page header component
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';

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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop Links */}
                <nav className="hidden md:flex gap-5">
                    <Link href="/" className="text-base hover:text-opacity-80 dark:text-white hover:bg-gray-100 px-4 py-2 rounded-md dark:hover:bg-slate-800">Features</Link>
                    <Link href="/" className="text-base hover:text-opacity-80 dark:text-white hover:bg-gray-100 px-4 py-2 rounded-md dark:hover:bg-slate-800">Community</Link>
                    <Link href="/" className="text-base hover:text-opacity-80 dark:text-white hover:bg-gray-100 px-4 py-2 rounded-md dark:hover:bg-slate-800">About</Link>
                    <Link href="/" className="text-base hover:text-opacity-80 dark:text-white hover:bg-gray-100 px-4 py-2 rounded-md dark:hover:bg-slate-800">Contact</Link>
                </nav>
            </div>

            {/* Authentication Links for Desktop */}
            <div className="hidden md:flex items-center gap-4">
                <button onClick={toggleTheme} className="focus:outline-none md:ml-4 hover:bg-gray-100 dark:hover:bg-slate-800 p-2 rounded-full">
                {darkTheme ? (
                        // Light mode icon (moon)
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>

                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                        
                    )}
                </button>
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
                    <Link href="/" className="text-base hover:text-opacity-80 dark:text-white mb-4">Contact</Link>
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
