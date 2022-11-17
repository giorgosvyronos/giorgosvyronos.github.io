import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Giorgos Vyronos</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Hello There! 👋</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I am a 3rd year student at Imperial College London on my way to obtaining
            my degree in MEng Electronic and Information Engineering.
            <br />
            Currently, I have just finished a 6-month Industrial Placement at
            Amazon.com, Inc. as a System Development Engineer Intern and return
            to London for my final year at College.
            <br />
            I am passionate about Cloud Computing and Systems Design and their
            application in modern technologies and strive towards becoming a
            successful Engineer.
         </p>
         <p><a className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md" href="./assets/giorgosVyronos.pdf" download class="btn btn-default btn-lg">Download Resume</a></p>
      </div>
   )
}

export default Intro;
