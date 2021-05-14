import React from 'react';
import github from '../assets/icons/dark-icons/github-dark.png';
import linkedin from '../assets/icons/dark-icons/linkedin-dark.png';
import medium from '../assets/icons/dark-icons/medium-dark.png';
import twitter from '../assets/icons/dark-icons/twitter-dark.png';
import angelList from '../assets/icons/dark-icons/angelist-dark.png';

const Footer = () => (
  <div className="bg-portfolio_mercury border-t">
    <div className="flex justify-center gap-5 p-5">
      <a href="#social">
        <img src={github} className="" alt="" />
      </a>
      <a href="#social">
        <img src={linkedin} className="" alt="" />
      </a>
      <a href="#social">
        <img src={angelList} className="" alt="" />
      </a>
      <a href="#social">
        <img src={twitter} className="" alt="" />
      </a>
      <a href="#social">
        <img src={medium} className="" alt="" />
      </a>
    </div>
  </div>
);

export default Footer;
