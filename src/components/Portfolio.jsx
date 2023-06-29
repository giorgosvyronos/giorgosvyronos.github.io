import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';

function Portfolio() {
   return (
      <div className="flex flex-col md:flex-row items-center justify-center">
      <div className= "w-w-full md:w-9/12" >
         <Title>Projects</Title>
         <div class="slider w-w-full md:w-9/12">
            <div class="slides w-w-full md:w-9/12">
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