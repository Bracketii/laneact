// Assuming this is in Welcome.jsx or a similar file
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Header from '@/Components/Home/Header'; // Adjust the import path as needed
import Hero from '@/Components/Home/Hero';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div>
                <div className="min-h-screen flex flex-col">
                    <Header auth={auth} />
                    <Hero />
                </div>
            </div>
        </>
    );
}
