import React from 'react';
import './RecentWorks.css';
import vectorBar from '../assets/images/Vector.png';

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
        <div className="border-2">
          1
        </div>
        <div className="grid grid-cols-3">
          <div className="border-2">
            2
          </div>
          <div className="border-2">
            3
          </div>
          <div className="border-2">
            4
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="border-2">
            5
          </div>
          <div className="border-2">
            6
          </div>
          <div className="border-2">
            7
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RecentWorks;
