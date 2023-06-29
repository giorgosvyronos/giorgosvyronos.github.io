import React from 'react';
import Title from './Title';
import portfolio from '../data/portfolio';
import ModuleItem from './ModuleItem';

function Module() {
   return (
      <div className="flex flex-col md:flex-row items-center justify-center">
      <div className= "w-full" >
         <Title>Modules</Title>
         <div class="slider">
            <div class="slides">
         {portfolio.map(project => (
                  <ModuleItem 
                     imgUrl={project.imgUrl}
                     title={project.title}
                     stack={project.stack}
                     link={project.link}
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