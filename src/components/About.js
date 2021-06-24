import React from 'react';
import './About.css';
import illustrationAboutMe from '../assets/images/illustration-about-me.png';
import Devider from '../assets/images/Devider.png';
import titledSquare from '../assets/images/titled-square-skills.png';
import square from '../assets/images/square-skills.png';
import circle from '../assets/images/circle-skills.png';

const About = () => (
  <div className="bg-portfolio_cod_gray text-portfolio_mercury">
    <div className="container mx-auto pt-5 laptop:pt-20">
      <div className="laptop:grid laptop:grid-cols-2">
        <div className="w-full">
          <div className="text-3xl text-portfolio_orange font-creteRound  laptop:text-6xl laptop:text-6xl text-center laptop:text-left">
            About me
          </div>
          <div className="m-2 mb:text-2xl laptop:text-2xl mt-10">
            Hello, I’m a software engineer!
            I can help you build a product, feature, or website.
            Look through some of my work and experience!
            If you like what you see and have a project
            you need coding on, don’t hesitate to contact me.
          </div>
          <div className="justify-center laptop:justify-start flex">
            <div className="mt-1 rounded text-center project-btn text-portfolio_mercury w-1/2 font-bold py-2">
              Get My Resume
            </div>
          </div>
        </div>
        <div className="">
          <img className="invisible laptop:visible absolute about-me-img w-1/2" src={illustrationAboutMe} alt="" />
        </div>
      </div>
      <div className="justify-items-center">
        <img className="mt-10 laptop:mt-80 w-full" src={Devider} alt="" />
      </div>
      <div className="text-center laptop:grid laptop:grid-cols-3 laptop:pt-5 laptop:pb-5 laptop:h-half_screen laptop:gap-10">
        <div className="pt-2 laptop:p-10">
          <div className="justify-center flex mb-2">
            <img className="mr-3" src={titledSquare} alt="" />
            <p className="text-2xl font-semibold">Languages</p>
          </div>
          <ul className="laptop:text-2xl">
            <li className="mt-2 laptop:mt-5">JavaScript</li>
            <li className="mt-2 laptop:mt-5">Ruby</li>
            <li className="mt-2 laptop:mt-5">Python</li>
            <li className="mt-2 laptop:mt-5">Html</li>
            <li className="mt-2 laptop:mt-5">CSS</li>
          </ul>
        </div>
        <div className="pt-2 laptop:p-10">
          <div className="flex justify-center mb-2">
            <img className="mr-3" src={square} alt="" />
            <p className="text-2xl font-semibold">Frameworks</p>
          </div>
          <ul className="laptop:text-2xl">
            <li className="mt-2 laptop:mt-5">React</li>
            <li className="mt-2 laptop:mt-5">Ruby on Rails</li>
            <li className="mt-2 laptop:mt-5">Django</li>
            <li className="mt-2 laptop:mt-5">Tailwind</li>
            <li className="mt-2 laptop:mt-5">Bootstrap</li>
          </ul>
        </div>
        <div className="p-10">
          <div className="flex justify-center mb-2">
            <img className="mr-3" src={circle} alt="" />
            <p className="text-2xl font-semibold">Skills</p>
          </div>
          <ul className="laptop:text-2xl">
            <li className="mt-2 laptop:mt-5">Codekit</li>
            <li className="mt-2 laptop:mt-5">Github</li>
            <li className="mt-2 laptop:mt-5">Codepen</li>
            <li className="mt-2 laptop:mt-5">Gitlab</li>
            <li className="mt-2 laptop:mt-5">Terminal</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default About;
