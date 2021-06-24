import React from 'react';
import './Landing.css';
import github from '../assets/icons/light-icons/github.png';
import linkedin from '../assets/icons/light-icons/linkedin.png';
import medium from '../assets/icons/light-icons/medium.png';
import twitter from '../assets/icons/light-icons/twitter.png';
import angelList from '../assets/icons/light-icons/angel_list.png';
import illustration from '../assets/images/IllustrationHeader.png';

const Landing = () => (
  <div className="bg-portfolio_cod_gray landing">
    <div className="social_icons absolute">
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
        <p className="font-creteRound text-portfolio_orange text-4xl laptop:text-7xl">
          Hey There.
          <br />
          I&apos;m Christian
        </p>
        <p className="my-5 text-portfolio_mercury laptop:text-4xl text-3xl font-medium">
          I am a Software Engineer
        </p>
        <p className="my-5 text-portfolio_mercury laptop:text-3xl">
          I can help you build a product, feature or website.
          Look through some of my work and experience.
          If you like what you see and have a project
          you need coding on, don&apos;t hesitate to contact me.
        </p>
      </div>
    </div>
    <div className="">
      <img className="invisible laptop:visible illustrator-header absolute" src={illustration} alt="" />
    </div>
  </div>
);

export default Landing;
