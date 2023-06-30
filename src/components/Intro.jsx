import React from 'react';
import 'animate.css'

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <div class="text-4xl md:text-4xl dark:text-white mb-1 md:mb-3 font-bold animate__animated animate__backInDown">
         <p class="glitch">
            <span aria-hidden="true">Giorgos Vyronos</span>
            Giorgos Vyronos
            <span aria-hidden="true">Giorgos Vyronos</span>
         </p>
         </div>
         <div class='console-container'><span id='text'></span><div class='console-underscore' id='console'>&#95;</div></div>
         <p><a className="button-33" href="./assets/giorgosVyronos.pdf" download class="button-33">Download my Resume</a></p>
         
   </div>
   )
}

export default Intro;