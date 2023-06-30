import React from 'react';

function ModuleItem({ title, stack, info }) {
   return (
    <div>
      <a className="duck-33 border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
         <div className="w-full p-4">
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
            <ul className=" dark:text-white mb-1 md:mb-5">
               {stack.map(item => (
                  <li >
                     {item}
                  </li>
               ))}
            </ul>
            <h4 className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">{info}</h4>
         </div>
      </a>
      </div>
   )
}

export default ModuleItem;