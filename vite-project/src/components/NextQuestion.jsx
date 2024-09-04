import React from 'react'
import { useQuiz } from '../contexts/QuizContext'

function NextQuestion() {

   const { answer, numQuestions, index, dispatch } = useQuiz()

   if (answer === null) return

   if (index < numQuestions - 1)
   return (
      <>
         <button
            className='my-8 mx-auto block bg-blue-500 w-4/6 py-3 text-sm rounded-full text-slate-50 md:w-2/6 hover:bg-blue-700 hover:tracking-wider transition-all ease-in-out'
            onClick={ () => dispatch({ type: 'next' }) }
         >
            Next question &rarr;
         </button>
         <button 
            className='mx-auto block bg-slate-200 text-slate-800 capitalize w-4/6 py-3 text-sm rounded-full md:w-2/6 hover:bg-slate-400 hover:tracking-wider transition-all ease-in-out'
            onClick={ () => dispatch({ type: 'reset' }) }
         >restart quiz</button>
      </>
   ) 
      
   if (index === numQuestions - 1) 
   return (
      <button 
         className='my-8 mx-auto block bg-blue-500 w-4/6 py-3 text-sm rounded-full text-slate-50 hover:bg-blue-700 hover:tracking-wider transition-all'
         onClick={ () => dispatch({ type: 'finish' }) }
      >
         Finish
      </button> 
   )
}

export default NextQuestion