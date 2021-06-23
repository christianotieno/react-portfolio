import React from 'react';
import './RecentWorks.css';
// import vectorBar from '../assets/images/Vector.png';
import roshan from '../assets/images/roshan-game.png';

const RecentWorks = () => (
  <div className="bg-portfolio_mercury pb-10">
    <div className="container mx-auto pt-5 md:pt-20">
      <div className="text-3xl text-portfolio_downriver font-creteRound  md:text-6xl text-center md:text-left pb-5 md: pb-10 ">
        My Recent Works
      </div>
      <div className="">
        <div className="md:grid md:grid-cols-2">
          <div className="m-1">
            <img src={roshan} alt="" className="md:rounded" />
          </div>
          <div className="right-div rounded m-3 md:ml-10">
            <h3 className="font-creteRound text-portfolio_downriver text-2xl md:text-4xl">
              Roshan, the treasure hunter.
            </h3>
            <div className="mt-4 md:mt-8 md:text-3xl text-portfolio_downriver">
              This game was inspired by the endless runner game
              (5-part series). Inspiration was drawn to design
              a simple but creative game, and implement it using the Phaser-3 game engine.
              Therefore, I did spend some time designing the game before programming it.
            </div>
            <div className="md:text-2xl grid grid-cols-4 gap-1 mt-8">
              <div className="rounded text-center border">Phaser-3</div>
              <div className="rounded text-center border">JavaScript</div>
              <div className="rounded text-center border">Webpack</div>
              <div className="rounded text-center border">Netlify</div>
            </div>
            <div className="rounded text-center project-btn mt-5 text-portfolio_mercury font-bold py-2 px-4">
              See project
            </div>
          </div>
        </div>
        <div className="my-10 md:grid md:grid-cols-3 md:gap-5">
          <div className="mt-1 bg-center bg-cover bg-no-repeat shadow-2xl h-half_screen bg-book-store md:rounded p-10">
            <div className="bg-portfolio_mercury p-1 md:p-2 md:rounded w-3/4 mx-auto md:mt-40 text-center text-portfolio_cod_gray font-creteRound text-2xl md:text-4xl">
              Bookstore App
            </div>
            <div className="text-2xl text-center text-portfolio_mercury rounded m-2">
              A Bookstore project built
              with React and Redux and hosted live on Netlify.
            </div>
            <div className="text-portfolio_mercury md:m-5 grid grid-cols-3 gap-1">
              <div className="bg-portfolio_downriver md:rounded w-full m-1 p-1 text-center">React</div>
              <div className="bg-portfolio_downriver md:rounded w-full m-1 p-1 text-center">Redux</div>
              <div className="bg-portfolio_downriver md:rounded w-full m-1 p-1 text-center">Node-js</div>
            </div>
          </div>
          <div className="mt-1 bg-center bg-cover bg-no-repeat shadow-2xl h-half_screen bg-tic-tac-toe md:rounded p-10">
            <div className="bg-portfolio_mercury p-1 md:p-2 md:rounded w-3/4 mx-auto md:mt-40 text-center text-portfolio_cod_gray font-creteRound text-2xl md:text-4xl">
              Tic Tac Toe
            </div>
            <div className="text-2xl text-center text-portfolio_mercury rounded m-2">
              A tic-tac-toe project built
              with vanilla javascript and tested with the jest framework.
            </div>
            <div className="text-portfolio_mercury md:m-5 grid grid-cols-3 gap-1">
              <div className="bg-portfolio_downriver md:rounded w-full m-1 p-1 text-center">JavaScript</div>
              <div className="bg-portfolio_downriver md:rounded w-full m-1 p-1 text-center">Node-js</div>
              <div className="bg-portfolio_downriver md:rounded w-full m-1 p-1 text-center">Jest</div>
            </div>
          </div>
          <div className="mt-1 bg-center bg-cover bg-no-repeat shadow-2xl h-half_screen bg-covid-19-tracker md:rounded p-10">
            <div className="bg-portfolio_mercury p-1 md:p-2 md:rounded w-3/4 mx-auto md:mt-40 text-center text-portfolio_cod_gray font-creteRound text-2xl md:text-4xl">
              React Capstone.
            </div>
            <div className="text-2xl text-center text-portfolio_mercury m-2">
              A React capstone based project
              for catalogue of statistics tested with the jest framework.
            </div>
            <div className="text-portfolio_mercury md:m-5 grid grid-cols-3 gap-1">
              <div className="bg-portfolio_downriver md:rounded w-full m-1 p-1 text-center">React</div>
              <div className="bg-portfolio_downriver md:rounded w-full m-1 p-1 text-center">Netlify</div>
              <div className="bg-portfolio_downriver md:rounded w-full m-1 p-1 text-center">Html</div>
            </div>
          </div>
          <div className="mt-1 bg-center bg-cover bg-no-repeat shadow-2xl h-half_screen bg-library-app md:rounded p-10">
            <div className="bg-portfolio_mercury p-1 md:p-2 md:rounded w-3/4 mx-auto md:mt-40 text-center text-portfolio_cod_gray font-creteRound text-2xl md:text-4xl">
              Library app
            </div>
            <div className="text-2xl text-center text-portfolio_mercury m-2">
              A library project built
              with JavaScript and collaboratively (pair-programming).
            </div>
            <div className="text-portfolio_mercury md:m-5 grid grid-cols-3 gap-1">
              <div className="bg-portfolio_downriver md:rounded w-full m-1 p-1 text-center">JavaScript</div>
              <div className="bg-portfolio_downriver md:rounded w-full m-1 p-1 text-center">Dom</div>
              <div className="bg-portfolio_downriver md:rounded w-full m-1 p-1 text-center">Html</div>
            </div>
          </div>
          <div className="mt-1 bg-center bg-cover bg-no-repeat shadow-2xl h-half_screen bg-schedule-tracker md:rounded p-10">
            <div className="bg-portfolio_mercury p-1 md:p-2 md:rounded w-3/4 mx-auto md:mt-40 text-center text-portfolio_cod_gray font-creteRound text-2xl md:text-4xl">
              Schedule Tracker
            </div>
            <div className="text-2xl text-center text-portfolio_mercury rounded m-2">
              A schedule tracker built
              with React/Redux for tracking tasks inside of schedules from rails API.
            </div>
            <div className="text-portfolio_mercury md:m-5 grid grid-cols-3 gap-1">
              <div className="bg-portfolio_downriver md:rounded w-full m-1 p-1 text-center">React</div>
              <div className="bg-portfolio_downriver md:rounded w-full m-1 p-1 text-center">Redux</div>
              <div className="bg-portfolio_downriver md:rounded w-full m-1 p-1 text-center">Json-API</div>
            </div>
          </div>
          <div className="mt-1 bg-center bg-cover bg-no-repeat shadow-2xl h-half_screen md:rounded p-10">
            <div className="bg-portfolio_mercury p-1 md:p-2 md:rounded w-3/4 mx-auto md:mt-40 text-center text-portfolio_cod_gray font-creteRound text-2xl md:text-4xl">
              heading
            </div>
            <div className="text-2xl text-center text-portfolio_mercury rounded m-2">description</div>
            <div className="text-portfolio_mercury md:m-5 grid grid-cols-3 gap-1">
              <div className="bg-portfolio_downriver md:rounded w-full m-1 p-1 text-center">button</div>
              <div className="bg-portfolio_downriver md:rounded w-full m-1 p-1 text-center">button</div>
              <div className="bg-portfolio_downriver md:rounded w-full m-1 p-1 text-center">button</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RecentWorks;
