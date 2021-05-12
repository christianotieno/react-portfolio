import React from 'react';
import './Landing.css';
import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';
import medium from '../assets/icons/medium.png';
import twitter from '../assets/icons/twitter.png';
import angelList from '../assets/icons/angel_list.png';
import illustration from '../assets/images/IllustrationHeader.png';

const Landing = () => (
  <div className="bg-portfolio_cod_gray landing">
    <div className="social_icons">
      <a href="#social">
        <img src={github} alt="" />
      </a>
      <a href="#social">
        <img className="my-6" src={twitter} alt="" />
      </a>
      <a href="#social">
        <img className="my-6" src={linkedin} alt="" />
      </a>
      <a href="#social">
        <img className="my-6" src={medium} alt="" />
      </a>
      <a href="#social">
        <img className="my-6" src={angelList} alt="" />
      </a>
    </div>
    <div className="container mx-auto flex justify-between">
      <div className="headline">
        <p className="font-creteRound text-portfolio_orange text-7xl">
          Hey There.
          <br />
          I&apos;m Christian
        </p>
        <p className="my-5 text-portfolio_mercury text-4xl font-medium">
          I am a Software Engineer
        </p>
        <p className="my-5 text-portfolio_mercury text-3xl">
          I can help you build a product, feature or website.
          Look through some of my work and experience.
          If you like what you see and have a project
          you need coding on, don&apos;t hesitate to contact me.
        </p>
      </div>
    </div>
    <div className="illustrator-header">
      <img src={illustration} alt="" />
    </div>
  </div>
);

export default Landing;
