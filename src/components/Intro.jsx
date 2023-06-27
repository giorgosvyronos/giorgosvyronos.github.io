import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Giorgos Vyronos</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Hello There! 👋</p>
         <p className="text-justify text-sm max-w-xl mb- font-bold">
            I am a 4th year student at Imperial College London on my way to obtaining
            my degree in MEng Electronic and Information Engineering.
            <br />
            After completing my 6-month Industrial Placement at
            Amazon.com, Inc. as a Systems Development Engineer Intern I have returned
            to London for my final year at College.
            <br />
            I am passionate about Cloud Computing, Systems Design and their
            application in modern technologies and strive towards becoming a
            successful Engineer.
         </p>
         <p><a className="button-33" href="./assets/giorgosVyronos.pdf" download class="button-33">Download my Resume</a></p>
      </div>
   )
}

export default Intro;
