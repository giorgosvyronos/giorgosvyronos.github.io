import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';
import 'animate.css'

function Portfolio() {
   return (
      <div className="items-center justify-center animate__animated animate__fadeInUp">
      <div className= "w-w-full" >
      <div className="w-full md:w-9/12">
         <Title>Projects</Title>
         </div>
         <div class="slider w-w-full md:w-9/12">
            <div class="slides">
         {portfolio.map(project => (
                  <PortfolioItem 
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

export default Portfolio;