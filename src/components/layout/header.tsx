import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    <Link href="/">Next.js Demo Vehicle</Link>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:underline">About</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;