import React from 'react';
import LogoImage from "/public/images/logoF2.png";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className=' footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
        <div className='container mx-auto p-10 flex justify-between'>
            <Image href={"/"} src={LogoImage} alt="Logo" className="lg:ml-7 h-12 w-12" priority />
            <p className='text-slate-600'>All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer