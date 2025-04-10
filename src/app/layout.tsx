import React from 'react';
import Header from '../components/layout/header';
import Footer from '../components/ui/footer';
import '../globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;