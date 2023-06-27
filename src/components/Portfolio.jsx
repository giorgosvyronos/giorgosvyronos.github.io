import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';

function Portfolio() {
   return (
      <div>
         <h1 class="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white">Projects</h1>
         <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
   )
}

export default Portfolio;