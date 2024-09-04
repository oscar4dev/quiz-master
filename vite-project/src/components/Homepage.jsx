import React from 'react'
import { useQuiz } from '../contexts/QuizContext'
import StartScreen from './StartScreen'
import Questions from './Questions'
import NextQuestion from './NextQuestion'
import ProgressBar from './ProgressBar'
import FinishScreen from './FinishScreen'
import Timer from './Timer'
import Error from './Error'
import Loader from './Loader'

function Homepage() {

   const { status } = useQuiz()

   return (
      <div className='h-full overflow-auto'>
         { status === 'loading' && <Loader /> }
         { status === 'failed' && <Error /> }
         { status === 'ready' && <StartScreen /> } 
         { 
            status === 'active' 
               && <div className=' h-full flex flex-col px-4 md:w-5/6 md:mx-auto'>
                  <ProgressBar />
                  <Timer />
                  <Questions />
                  <NextQuestion />
               </div> 
         }
         { status === 'finish' && <FinishScreen /> }
      </div>
   )
}

export default Homepage