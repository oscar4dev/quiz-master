import React from 'react'
import { useQuiz } from '../contexts/QuizContext'

function ProgressBar() {

   const { index, numQuestions, points, totalPoints, answer } = useQuiz()

   return (
      <div className='mt-2 md:w-5/6 md:mx-auto '>
         <progress 
            max={ numQuestions }
            value={ index + Number(answer !== null) }
            className='w-full '
         />
         <div className='flex justify-between text-sm'>
            <span>Question { index + 1} / { numQuestions }</span>
            <span>Points: { points } / { totalPoints }</span>
         </div>
      </div>
   )
}

export default ProgressBar