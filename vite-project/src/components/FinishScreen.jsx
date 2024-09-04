import React from 'react'
import { useQuiz } from '../contexts/QuizContext'

function FinishScreen() {

   const { dispatch, points, totalPoints, highScore } = useQuiz()
   const percentage = (points / totalPoints) * 100

   return (
      <div className='px-4 mt-8 '>
         <p className='text-xl font-bold text-center mb-8'>
            You scored { points } out of { totalPoints } points
            <span className='ml-1'>{ percentage }</span>%
         </p>
         <p className='text-center text-lg'>
            HighScore: { highScore } points
         </p>
         <button
            onClick={ () => dispatch({ type: 'reset' }) }
            className='my-8 mx-auto block bg-blue-500 w-40 h-12 text-sm rounded-full text-slate-50 hover:bg-blue-700 hover:tracking-wider transition-all ease-in-out'
         >
            Restart Quiz
         </button>
      </div>
   )
}

export default FinishScreen