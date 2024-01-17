/*import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link
            href={href} 
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
        >
            {title}
        </Link>
    );
};

export default NavLink;*/

import React from 'react';

const NavLink = ({ href, title }) => {
  const handleClick = (event) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </a>
  );
};

export default NavLink;



