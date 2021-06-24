import React from 'react';
import './RecentWorks.css';
// import vectorBar from '../assets/images/Vector.png';
import roshan from '../assets/images/roshan-game.png';

const RecentWorks = () => (
  <div className="bg-portfolio_mercury pb-10">
    <div className="container mx-auto pt-5 laptop:pt-20">
      <div className="text-3xl text-portfolio_downriver font-creteRound  laptop:text-6xl text-center laptop:text-left pb-5 laptop: pb-10 ">
        My Recent Works
      </div>
      <div className="">
        <div className="laptop:grid laptop:grid-cols-2">
          <div className="m-1">
            <img src={roshan} alt="" className="laptop:rounded" />
          </div>
          <div className="right-div rounded m-3 laptop:ml-10">
            <h3 className="font-creteRound text-portfolio_downriver text-2xl laptop:text-4xl">
              Roshan, the treasure hunter.
            </h3>
            <div className="mt-4 laptop:mt-8 laptop:text-3xl text-portfolio_downriver">
              This game was inspired by the endless runner game
              (5-part series). Inspiration was drawn to design
              a simple but creative game, and implement it using the Phaser-3 game engine.
              Therefore, I did spend some time designing the game before programming it.
            </div>
            <div className="laptop:text-2xl grid grid-cols-4 gap-1 mt-8">
              <div className="rounded text-center border">Phaser-3</div>
              <div className="rounded text-center border">ES6</div>
              <div className="rounded text-center border">Webpack</div>
              <div className="rounded text-center border">Netlify</div>
            </div>
            <div className="rounded text-center project-btn mt-5 text-portfolio_mercury font-bold py-2 px-4">
              See project
            </div>
          </div>
        </div>
        <div className="my-10 laptop:grid laptop:grid-cols-3 laptop:gap-5">
          <div className="mt-1 bg-center bg-cover bg-no-repeat shadow-2xl h-half_screen bg-book-store laptop:rounded p-10">
            <div className="bg-portfolio_orange p-1 w-3/4 mx-auto text-center text-portfolio_downriver font-creteRound text-2xl mt-5">
              Bookstore App
            </div>
            <div className="bg-portfolio_mercury rounded text-center text-portfolio_downriver m-1">
              This is a React/Redux Bookstore app hosted live on Netlify.
            </div>
            <div className="text-portfolio_mercury laptop:m-5 grid grid-cols-3 gap-1">
              <div className="bg-portfolio_downriver laptop:rounded w-full m-1 p-1 text-center">React</div>
              <div className="bg-portfolio_downriver laptop:rounded w-full m-1 p-1 text-center">Redux</div>
              <div className="bg-portfolio_downriver laptop:rounded w-full m-1 p-1 text-center">Node-js</div>
            </div>
          </div>
          <div className="mt-1 bg-center bg-cover bg-no-repeat shadow-2xl h-half_screen bg-tic-tac-toe laptop:rounded p-10">
            <div className="bg-portfolio_orange p-1 w-3/4 mx-auto text-center text-portfolio_downriver font-creteRound text-2xl mt-5">
              Tic Tac Toe
            </div>
            <div className="bg-portfolio_mercury rounded text-center text-portfolio_downriver m-1">
              A tic-tac-toe vanilla ES6 app; TDD carried out with the jest framework.
            </div>

            <div className="text-portfolio_mercury laptop:m-5 grid grid-cols-3 gap-1">
              <div className="bg-portfolio_downriver laptop:rounded w-full m-1 p-1 text-center">ES6</div>
              <div className="bg-portfolio_downriver laptop:rounded w-full m-1 p-1 text-center">Node-js</div>
              <div className="bg-portfolio_downriver laptop:rounded w-full m-1 p-1 text-center">Jest</div>
            </div>
          </div>
          <div className="mt-1 bg-center bg-cover bg-no-repeat shadow-2xl h-half_screen bg-covid-19-tracker laptop:rounded p-10">
            <div className="bg-portfolio_orange p-1 w-3/4 mx-auto text-center text-portfolio_cod_gray font-creteRound text-2xl mt-5">
              React Capstone.
            </div>
            <div className="bg-portfolio_mercury rounded text-center text-portfolio_downriver m-1">
              A React app
              for catalogue of statistics tested with the jest framework.
            </div>
            <div className="text-portfolio_mercury laptop:m-5 grid grid-cols-3 gap-1">
              <div className="bg-portfolio_downriver laptop:rounded w-full m-1 p-1 text-center">React</div>
              <div className="bg-portfolio_downriver laptop:rounded w-full m-1 p-1 text-center">Netlify</div>
              <div className="bg-portfolio_downriver laptop:rounded w-full m-1 p-1 text-center">Html</div>
            </div>
          </div>
          <div className="mt-1 bg-center bg-cover bg-no-repeat shadow-2xl h-half_screen bg-library-app laptop:rounded p-10">
            <div className="bg-portfolio_orange p-1 w-3/4 mx-auto text-center text-portfolio_downriver font-creteRound text-2xl mt-5">
              Library app
            </div>
            <div className="bg-portfolio_mercury rounded text-center text-portfolio_downriver m-1">
              A library project built
              with ES6 and collaboratively (pair-programming).
            </div>
            <div className="text-portfolio_mercury laptop:m-5 grid grid-cols-3 gap-1">
              <div className="bg-portfolio_downriver laptop:rounded w-full m-1 p-1 text-center">ES6</div>
              <div className="bg-portfolio_downriver laptop:rounded w-full m-1 p-1 text-center">Dom</div>
              <div className="bg-portfolio_downriver laptop:rounded w-full m-1 p-1 text-center">Html</div>
            </div>
          </div>
          <div className="mt-1 bg-center bg-cover bg-no-repeat shadow-2xl h-half_screen bg-schedule-tracker laptop:rounded p-10">
            <div className="bg-portfolio_orange p-1 w-3/4 mx-auto text-center text-portfolio_downriver font-creteRound text-2xl mt-5">
              Schedule Tracker
            </div>
            <div className="bg-portfolio_mercury rounded text-center text-portfolio_downriver m-1">
              A React/Redux app
              to track tasks inside of schedules from a rails API.
            </div>
            <div className="text-portfolio_mercury laptop:m-5 grid grid-cols-3 gap-1">
              <div className="bg-portfolio_downriver laptop:rounded w-full m-1 p-1 text-center">React</div>
              <div className="bg-portfolio_downriver laptop:rounded w-full m-1 p-1 text-center">Redux</div>
              <div className="bg-portfolio_downriver laptop:rounded w-full m-1 p-1 text-center">Json-API</div>
            </div>
          </div>
          <div className="mt-1 bg-center bg-cover bg-no-repeat shadow-2xl h-half_screen laptop:rounded p-10">
            <div className="bg-portfolio_orange p-1 w-3/4 mx-auto text-center text-portfolio_downriver font-creteRound text-2xl mt-5">
              Heading
            </div>
            <div className="bg-portfolio_mercury rounded text-center text-portfolio_downriver m-1">description</div>
            <div className="text-portfolio_mercury laptop:m-5 grid grid-cols-3 gap-1">
              <div className="bg-portfolio_downriver laptop:rounded w-full m-1 p-1 text-center">button</div>
              <div className="bg-portfolio_downriver laptop:rounded w-full m-1 p-1 text-center">button</div>
              <div className="bg-portfolio_downriver laptop:rounded w-full m-1 p-1 text-center">button</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RecentWorks;
