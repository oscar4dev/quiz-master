import React from 'react'
import { useQuiz } from '../contexts/QuizContext'
import OptionItem from './OptionItem'

function Questions() {

   const { individualQuestion } = useQuiz()
   const { correctOption, options, question } = individualQuestion

   return (
      <div className='md:w-5/6 md:mx-auto'>
         <p className='text-lg mb-4'>{ question }</p>
         { options.map((item, index) => {
            return <OptionItem 
               key={ item } 
               item={ item } 
               index={ index }
               correctOption={ correctOption }
            />
         }) }
      </div>
   )
}

export default Questions