import Image from 'next/image';
import React from 'react';



export const Logo = () => (
        <Image
            src='./Netflix_logo.svg'
            alt='netflix'
            width={120}
            height={120} 
            className='flex items-center space-x-2 md:space-x-8'/>
    );