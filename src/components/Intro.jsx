import React from 'react';
import 'animate.css'

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 id="title" className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold animate__animated animate__backInDown">Giorgos Vyronos</h1>
         <div class='console-container'><span id='text'></span><div class='console-underscore' id='console'>&#95;</div></div>
         <p><a className="button-33" href="./assets/giorgosVyronos.pdf" download class="button-33">Download my Resume</a></p>
         
   </div>
   )
}

export default Intro;