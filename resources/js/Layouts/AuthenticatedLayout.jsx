import Header from '@/Components/Dashboard/Header';
import Sidebar from '@/Components/Dashboard/Sidebar';

export default function Authenticated({ children }) {

    return (
        <>
            <Header />
            <Sidebar />
            {/* Main Section */}
            <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
                <main>{children}</main>
            </div>
        </>
    );
}