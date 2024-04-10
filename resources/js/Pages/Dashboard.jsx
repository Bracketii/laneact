import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-2">
                    <div className="bg-gray-100 overflow-hidden shadow-sm rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-white">You're logged in!</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
