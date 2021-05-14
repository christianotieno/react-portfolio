import React from 'react';
import './About.css';
import illustrationAboutMe from '../assets/images/illustration-about-me.png';
import Devider from '../assets/images/Devider.png';
import titledSquare from '../assets/images/titled-square-skills.png';
import square from '../assets/images/square-skills.png';
import circle from '../assets/images/circle-skills.png';

const About = () => (
  <div className="bg-portfolio_cod_gray text-portfolio_mercury">
    <div className="container mx-auto pt-20">
      <div className="grid grid-cols-2">
        <div className="">
          <div className="text-portfolio_orange font-creteRound text-6xl self-center">About me</div>
          <div className="text-2xl mt-10">
            Hello, I’m a software engineer!
            I can help you build a product, feature, or website.
            Look through some of my work and experience!
            If you like what you see and have a project
            you need coding on, don’t hesitate to contact me.
          </div>
          <div className="rounded text-center project-btn mt-10 text-portfolio_mercury font-bold py-2">
            Get My Resume
          </div>
        </div>
        <div className="">
          <img className="absolute about-me-img" src={illustrationAboutMe} alt="" />
        </div>
      </div>
      <div className="grid justify-items-center">
        <img className="mt-80 w-full" src={Devider} alt="" />
      </div>
      <div className="grid grid-cols-3 pt-5 pb-5 h-half_screen gap-10">
        <div className="p-10">
          <div className="flex mb-2">
            <img className="mr-3" src={titledSquare} alt="" />
            <p className="text-2xl font-semibold">Language</p>
          </div>
          <ul className="text-2xl">
            <li className="mt-5">JavaScript</li>
            <li className="mt-5">Ruby</li>
            <li className="mt-5">Python</li>
            <li className="mt-5">Html</li>
            <li className="mt-5">CSS</li>
          </ul>
        </div>
        <div className="p-10">
          <div className="flex mb-2">
            <img className="mr-3" src={square} alt="" />
            <p className="text-2xl font-semibold">Frameworks</p>
          </div>
          <ul className="text-2xl">
            <li className="mt-5">React</li>
            <li className="mt-5">Ruby on Rails</li>
            <li className="mt-5">Django</li>
            <li className="mt-5">Tailwind</li>
            <li className="mt-5">Bootstrap</li>
          </ul>
        </div>
        <div className="p-10">
          <div className="flex mb-2">
            <img className="mr-3" src={circle} alt="" />
            <p className="text-2xl font-semibold">Skills</p>
          </div>
          <ul className="text-2xl">
            <li className="mt-5">Codekit</li>
            <li className="mt-5">Github</li>
            <li className="mt-5">Codepen</li>
            <li className="mt-5">Gitlab</li>
            <li className="mt-5">Terminal</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default About;
