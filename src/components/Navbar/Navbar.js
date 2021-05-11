import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="bg-portfolio_mineShaft text-portfolio_mercury p-6">
    <div className="container mx-auto flex justify-between ">
      <div>
        <span className="font-bold text-xl">
          Christian Otieno
        </span>
      </div>
      <div className="m-0 p-0">
        <div className=" flex font-semibold justify-between">
          <a href="#portfolio" className="mr-10">
            Portfolio
          </a>
          <a href="#about" className="mr-10">
            About
          </a>
          <a href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
