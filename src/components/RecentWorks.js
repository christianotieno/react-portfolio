import React from 'react';
import './RecentWorks.css';
import vectorBar from '../assets/images/Vector.png';
import roshan from '../assets/images/roshan-game.png';

const RecentWorks = () => (
  <div className="bg-portfolio_mercury recent-works">
    <div className="container mx-auto">
      <div className="title pt-20 pb-20 flex justify-between align-center">
        <h1 className="recent-text  font-creteRound text-portfolio_downriver text-4xl self-center mt-2 mb-2">
          My Recent Works
        </h1>
        <div className="vector-img-div self-center md:object-scale-down">
          <img src={vectorBar} className="w-11/12" alt="" />
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-2">
          <div className="left-div">
            <div className="rounded top-project-img">
              <img src={roshan} alt="" className="rounded" />
            </div>
          </div>
          <div className="right-div rounded ml-10">
            <h3 className="font-creteRound text-portfolio_downriver text-4xl">
              Roshan, the treasure hunter.
            </h3>
            <div className="mt-8 text-3xl text-portfolio_downriver">
              This game was inspired by the endless runner game
              (5-part tutorial). Inspiration was drawn to design
              a simple but creative game, and implement it using Phaser.
              Therefore, I did spend some time designing the game before programming it.
            </div>
            <div className=" text-2xl tools-div grid grid-cols-4 mt-8">
              <div className="rounded text-center mr-2 tool-used">Phaser-3</div>
              <div className="rounded text-center mr-2 tool-used">JavaScript</div>
              <div className="rounded text-center mr-2 tool-used">Webpack</div>
              <div className="rounded text-center tool-used">Netlify</div>
            </div>
            <div className="rounded text-center project-btn mt-5 text-portfolio_mercury font-bold py-2 px-4">
              See project
            </div>
          </div>
        </div>
        <div className="my-10 grid grid-cols-3 gap-5">
          <div className="bg-center bg-cover bg-no-repeat shadow-2xl h-half_screen bg-book-store rounded p-10">
            <div className="bg-portfolio_mercury p-2 rounded w-3/4 mx-auto mt-40 text-center text-portfolio_cod_gray font-creteRound text-4xl">
              Bookstore App
            </div>
            <div className="text-2xl text-center text-portfolio_mercury rounded m-2">
              A Bookstore project built
              with React and Redux and hosted live on Netlify.
            </div>
            <div className="text-portfolio_mercury m-5 grid grid-cols-3 gap-1">
              <div className="bg-portfolio_downriver rounded m-1 p-1 text-center">React</div>
              <div className="bg-portfolio_downriver rounded m-1 p-1 text-center">Redux</div>
              <div className="bg-portfolio_downriver rounded m-1 p-1 text-center">Node-js</div>
            </div>
          </div>
          <div className="bg-center bg-cover bg-no-repeat shadow-2xl h-half_screen bg-tic-tac-toe rounded p-10">
            <div className="bg-portfolio_mercury p-2 rounded w-3/4 mx-auto mt-40 text-center text-portfolio_cod_gray font-creteRound text-4xl">
              Tic Tac Toe
            </div>
            <div className="text-2xl text-center text-portfolio_mercury rounded m-2">
              A tic-tac-toe project built
              with vanilla javascript and tested with the jest framework.
            </div>
            <div className="text-portfolio_mercury m-5 grid grid-cols-3 gap-1">
              <div className="bg-portfolio_downriver rounded m-1 p-1 text-center">JavaScript</div>
              <div className="bg-portfolio_downriver rounded m-1 p-1 text-center">Node-js</div>
              <div className="bg-portfolio_downriver rounded m-1 p-1 text-center">Jest</div>
            </div>
          </div>
          <div className="bg-center bg-cover bg-no-repeat shadow-2xl h-half_screen bg-covid-19-tracker rounded p-10">
            <div className="bg-portfolio_mercury p-2 rounded w-3/4 mx-auto mt-40 text-center text-portfolio_cod_gray font-creteRound text-4xl">
              React Capstone.
            </div>
            <div className="text-2xl text-center text-portfolio_mercury rounded m-2">
              A React capstone based project
              for catalogue of statistics tested with the jest framework.
            </div>
            <div className="text-portfolio_mercury m-5 grid grid-cols-3 gap-1">
              <div className="bg-portfolio_downriver rounded m-1 p-1 text-center">React</div>
              <div className="bg-portfolio_downriver rounded m-1 p-1 text-center">Netlify</div>
              <div className="bg-portfolio_downriver rounded m-1 p-1 text-center">Html</div>
            </div>
          </div>
          <div className="bg-center bg-cover bg-no-repeat shadow-2xl h-half_screen bg-library-app rounded p-10">
            <div className="bg-portfolio_mercury p-2 rounded w-3/4 mx-auto mt-40 text-center text-portfolio_cod_gray font-creteRound text-4xl">
              Library app
            </div>
            <div className="text-2xl text-center text-portfolio_mercury rounded m-2">
              A library project built
              with JavaScript and collaboratively (pair-programming).
            </div>
            <div className="text-portfolio_mercury m-5 grid grid-cols-3 gap-1">
              <div className="bg-portfolio_downriver rounded m-1 p-1 text-center">JavaScript</div>
              <div className="bg-portfolio_downriver rounded m-1 p-1 text-center">Dom</div>
              <div className="bg-portfolio_downriver rounded m-1 p-1 text-center">Html</div>
            </div>
          </div>
          <div className="bg-center bg-cover bg-no-repeat shadow-2xl h-half_screen bg-schedule-tracker rounded p-10">
            <div className="bg-portfolio_mercury p-2 rounded w-3/4 mx-auto mt-40 text-center text-portfolio_cod_gray font-creteRound text-4xl">
              Schedule Tracker
            </div>
            <div className="text-2xl text-center text-portfolio_mercury rounded m-2">
              A schedule tracker built
              with React/Redux for tracking tasks inside of schedules from rails API.
            </div>
            <div className="text-portfolio_mercury m-5 grid grid-cols-3 gap-1">
              <div className="bg-portfolio_downriver rounded m-1 p-1 text-center">React</div>
              <div className="bg-portfolio_downriver rounded m-1 p-1 text-center">Redux</div>
              <div className="bg-portfolio_downriver rounded m-1 p-1 text-center">Json-API</div>
            </div>
          </div>
          <div className="bg-center bg-cover bg-no-repeat shadow-2xl h-half_screen rounded p-10">
            <div className="bg-portfolio_mineShaft p-2 rounded w-3/4 mx-auto mt-40 text-center text-portfolio_mercury font-creteRound text-4xl">
              heading
            </div>
            <div className="text-2xl text-center text-portfolio_mercury rounded m-2">description</div>
            <div className="text-portfolio_mercury m-5 grid grid-cols-3 gap-1">
              <div className="bg-portfolio_downriver rounded m-1 p-1 text-center">button</div>
              <div className="bg-portfolio_downriver rounded m-1 p-1 text-center">button</div>
              <div className="bg-portfolio_downriver rounded m-1 p-1 text-center">button</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RecentWorks;
