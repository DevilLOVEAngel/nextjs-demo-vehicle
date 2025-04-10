import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}>
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Our Vehicle Showcase</h1>
                    <p className="text-lg mb-8">Discover the best vehicles tailored for you.</p>
                    <a href="#features" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                        Explore Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;