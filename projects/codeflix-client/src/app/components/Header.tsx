'use client';

import React, { useState, useEffect } from 'react';



export default function Header() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const Logo = () => (
        <img
            src='./Netflix_logo.svg'
            alt='netflix'
            width={120}
            height={120} />
    );

    const NavLinks = () => (
        <nav>
            <ul className='hidden md:flex md:space-x-4'>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Latest</li>
            </ul>
        </nav>
    );

    const UserProfile = () => (
        <div className='flex items-center space-x-4'>
            <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
            <img
                src='./profile.png'
                alt='user'
                width={40}
                height={40} />
        </div>
    );

    return (
        <header className={`${isScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-all lg:px-10 lg:py-6`}>
            <div className='flex items-center space-x-2 md:space-x-8'>

                <Logo />
                <NavLinks />

            </div>
            <UserProfile />

        </header>
    );
}
