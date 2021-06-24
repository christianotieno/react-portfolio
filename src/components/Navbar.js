import React from 'react';
// import { Transition } from '@headlessui/react';
import iconForMail from '../assets/icons/light-icons/mail.png';

const Navbar = () => (
  <nav className="z-50 fixed w-full bg-portfolio_mineShaft text-portfolio_mercury p-6">
    <div className="container mx-auto flex justify-between">
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
          <a href="#contact" className="mr-10">
            Contact
          </a>
          <a href="#contact">
            <img src={iconForMail} alt="mail-icon" />
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
