// Assuming this is in Welcome.jsx or a similar file
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Header from '@/Components/Home/Header'; // Adjust the import path as needed

export default function Welcome({ auth }) {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    return (
        <>
            <Head title="Welcome" />
            <div className={`${darkTheme ? 'dark' : ''} bg-gray-50 dark:bg-black text-black dark:text-white`}>
                <div className="min-h-screen flex flex-col">
                    <Header auth={auth} toggleTheme={toggleTheme} darkTheme={darkTheme} />
                    {/* Other content */}
                </div>
            </div>
        </>
    );
}
