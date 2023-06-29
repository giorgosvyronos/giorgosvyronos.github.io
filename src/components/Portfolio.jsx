import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';

function Portfolio() {
   return (
      <div className="flex flex-col md:flex-row items-center justify-center">
      <div className= "w-full" >
         <Title>Projects</Title>
         <div class="slider flex flex-col md:flex-row items-center justify-center">
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