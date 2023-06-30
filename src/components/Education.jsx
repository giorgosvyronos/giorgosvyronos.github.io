import React from 'react';
import education from '../data/education';
import EducationItem from './EducationItem';
import Title from './Title';

function Education() {
  return (
   <div>
      <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-9/12">
         <Title>Education</Title>
         {education.map(item => (
            <EducationItem
               year={item.year}
               title={item.title}
               location={item.location}
               company={item.company}
               details={item.details}
            />
         ))}
      </div>
   </div>
   </div>
)
}
export default Education;