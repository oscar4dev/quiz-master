import React, { useEffect } from 'react'
import { useQuiz } from '../contexts/QuizContext'

function Timer() {

   const { secRemaining, dispatch } = useQuiz()

   useEffect(() => {
      const id = setInterval(() => {
         dispatch({ type: 'tick' })
      }, 1000);

      return () => clearInterval(id)
   }, [dispatch])

   return (
      <div>
         <p className='text-center my-4'>
            Time remaining: 
            <span className={`mx-1 ${ secRemaining < 50 ? 'bg-red-600 p-1 text-slate-200' : '' }`}>{ secRemaining }</span> 
            secs
         </p>
      </div>
   )
}

export default Timer