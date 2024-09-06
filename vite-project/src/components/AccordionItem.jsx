import React from 'react'

function AccordionItem({ id, question, answer, setCurOpen, curOpen }) {
   
   const isOpen = id === curOpen

   function handleClick () {
      setCurOpen(isOpen ? null : id)
   }

   return (
      <li 
         onClick={ handleClick }
         className={ `${ isOpen ? 'border-t-4 border-cyan-500' : '' } bg-slate-100 shadow-md p-4 rounded-xl cursor-pointer hover:bg-slate-200 transition-colors ease-in-out dark:bg-slate-600` }
      >
         <p className='flex'>
            <span className='mr-4'>{ id }</span>
            <span className='font-bold'>{ question }</span>
            <button className='ml-auto font-bold'>
               { isOpen ? '-' : '+' }
            </button>
         </p>
         { 
            isOpen && 
               <p className='mt-4 ml-6'>{ answer }</p>
         }
      </li>
   )
}

export default AccordionItem