import React from 'react';

const Contact = () => (
  <div className="bg-portfolio_mercury">
    <div className="container mx-auto">
      <div className="pt-20 pb-20">
        <div className="contact mt-10 mb-10 flex">
          <div className="w-1/2">
            <h1 className="text-portfolio_downriver p-20 font-bold text-4xl leading-tight">
              I&apos;m always interested
              <br />
              in hearing about new projects,
              <br />
              so if you&apos;d like to chat please get in touch.
            </h1>
          </div>
          <div className="w-1/2">
            <form className="w-full">
              <div className="grid grid-cols-2 justify-between gap-3 pb-1">
                <div className="first-name">
                  <input className="bg-portfolio_mercury border-b font-semibold text-2xl text-portfolio_downriver w-full py-1 px-2 leading-loose focus:outline-none" type="text" placeholder="First Name" aria-label="first name" />
                </div>
                <div className="last-name">
                  <input className="bg-portfolio_mercury border-b font-semibold text-2xl text-portfolio_downriver w-full py-1 px-2 leading-loose focus:outline-none" type="text" placeholder="Last Name" aria-label="last Name" />
                </div>
              </div>
              <div className="email">
                <input className="bg-portfolio_mercury border-b w-full font-semibold text-2xl text-portfolio_downriver py-2 px-2 leading-loose focus:outline-none" type="email" placeholder="Email Address" aria-label="email" />
              </div>
              <div className="">
                <textarea className="bg-portfolio_spring_wood h-thirty_screen mt-5 p-2 font-semibold text-2xl w-full text-portfolio_cod_gray focus:outline-none" type="string" placeholder="Hello Christian. Glad to see you..." aria-label="email" />
              </div>
              <div className="text-center project-btn mt-1 text-portfolio_mercury font-bold py-2 px-1">
                Get in touch
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
