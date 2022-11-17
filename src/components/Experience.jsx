import React from 'react';
import experience from '../data/experience';
import ExperienceItem from './ExperienceItem';
import Title from './Title';

function Experience() {
   return (
      <div className="flex flex-col md:flex-row justify-center my-20">
         <div className="w-full md:w-9/12">
            <Title>Work Experience</Title>
            {experience.map(item => (
               <ExperienceItem 
                  year={item.year}
                  title={item.title}
                  location={item.location}
                  company={item.company}
                  details={item.details}
               />
            ))}
         </div>
      </div>
   )
}

export default Experience;
