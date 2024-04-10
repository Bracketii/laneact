import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function NavLink({ href, icon, name, submenus = [], className = '' }) {
  const { url } = usePage();
  const isActive = url.startsWith(href); // Updated to startsWith if you have nested routes
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  // Toggle visibility of submenus
  const handleSubMenuToggle = (e) => {
    if (submenus.length > 0) {
      e.preventDefault(); // Avoid navigating for parent menu items
      setIsSubMenuOpen(!isSubMenuOpen);
    }
  };

  return (
    <li className={`${className} ${isActive ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-slate-700 dark:text-gray-400'} rounded-lg`}>
      <div
        onClick={handleSubMenuToggle}
        className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 cursor-pointer dark:hover:bg-gray-900 dark:hover:text-white ${isActive ? 'hover:bg-gray-100 dark:hover:bg-gray-600' : 'hover:bg-gray-100 dark:hover:bg-gray-800'} rounded-lg`}
      >
        {icon}
        <span className="flex-grow">
          {submenus.length === 0 ? (
            <Link href={href} className="inline-flex items-center w-full h-full">
              {name}
            </Link>
          ) : (
            <>{name}</>
          )}
        </span>
        {submenus.length > 0 && (
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isSubMenuOpen ? <path d="m18 15-6-6-6 6" /> : <path d="m6 9 6 6 6-6" />}
          </svg>
        )}
      </div>
      {isSubMenuOpen && submenus.length > 0 && (
        <div className="pl-4 mt-2">
          {submenus.map((submenu, index) => (
            <Link key={index} href={submenu.href} className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg dark:hover:text-white">
              {submenu.name}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
