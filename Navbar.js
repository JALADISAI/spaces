import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul className='NavBar' >
        <li><a href="/about">About</a></li>
        <li><a href="/price">Price</a></li>
        <li><a href="/purchase">Purchase</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
