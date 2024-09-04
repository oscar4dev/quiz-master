import React from 'react'
import { useQuiz } from '../contexts/QuizContext'
import styles from './OptionItem.module.css'

function OptionItem({ index, item, correctOption }) {

   const { dispatch, answer, individualQuestion } = useQuiz()
   const hasAnswered = answer !== null

   return (
      <div className='flex items-center justify-center gap-2'>
         { 
            hasAnswered 
               ? index === individualQuestion.correctOption ? '✔' : '❌' 
               : '' 
         }
         <button
            className={ 
               `${styles.button} 
               ${ answer === index ? styles.answer : '' }
               ${ 
                  hasAnswered 
                     ? index === individualQuestion.correctOption 
                        ? styles.correct 
                        : styles.wrong 
                     : '' 
               }` 
            }
            disabled={ hasAnswered }
            onClick={ () => dispatch({ type: 'newAnswer', payload: index }) }
         >
            { item }
         </button>
      </div>
   )
}

export default OptionItem