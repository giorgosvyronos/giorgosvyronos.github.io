import React from 'react';
import Title from './Title';
import module from '../data/module';
import ModuleItem from './ModuleItem';

function Module() {
   return (
      <div className="items-center justify-center">
      <div className= "w-w-full" >
      <div className="w-full md:w-9/12">
         <Title>Modules</Title>
         </div>
         <div class="slider">
            <div class="slides">
         {module.map(project => (
                  <ModuleItem 
                     title={project.title}
                     stack={project.stack}
                     info={project.info}
                  />
               ))}
               </div>
        </div>
      </div>
    </div>
   )
}

export default Module;