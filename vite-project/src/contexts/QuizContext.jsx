import React, { createContext, useContext, useEffect, useReducer } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

const QuizContext =  createContext()
const SEC_PER_QUESTION = 20

const initialState = {
   questions: [],
   status: 'loading',
   index: 0,
   answer: null,
   points: 0,
   highScore: 0,
   secRemaining: null,
}

function reducer (state, action) {
   if (action.type === 'data/Loaded') {
      return {
         ...state,
         questions: action.payload,
         status: 'ready',
      }
   }
   if (action.type === 'loading/Failed') {
      return {
         ...state,
         status: 'failed',
      }
   }
   if (action.type === 'start') {
      return {
         ...state,
         status: 'active',
         secRemaining: state.questions.length * SEC_PER_QUESTION
      }
   }
   if (action.type === 'newAnswer') {

      const curQuestion = state.questions.at(state.index)

      return {
         ...state,
         answer: action.payload,
         points: action.payload === curQuestion.correctOption 
            ? curQuestion.points + state.points 
            : state.points,
      }
   }
   if (action.type === 'next') {
      return {
         ...state,
         index: state.index + 1,
         answer: null,
      }
   }
   if (action.type === 'finish') {
      return {
         ...state,
         status: 'finish',
         highScore: state.points > state.highScore 
            ? state.points 
            : state.highScore
      }
   }
   if (action.type === 'reset') {
      return {
         ...initialState,
         questions: state.questions,
         status: 'ready',
      }
   }
   if (action.type === 'tick') {
      return {
         ...state,
         secRemaining: state.secRemaining - 1,
         status: state.secRemaining === 0 
            ? "finish" 
            : state.status,
      }
   } else {
      throw new Error('Action unknown')
   }
}

function QuizProvider ({ children }) {

   const [{ questions, status, index, answer, points, secRemaining, highScore }, dispatch] = useReducer(reducer, initialState)

   const numQuestions = questions.length
   const totalPoints = questions.reduce((total, cur) => {
      return total + cur.points
   }, 0)
   const individualQuestion = questions.at(index)

   const questionsCollectionRef = collection(db, "questions")

   useEffect(() => {
      async function getQuestions () {
         try {
            const data = await getDocs(questionsCollectionRef)
            const questionData = data.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
         })
         dispatch({ type: 'data/Loaded', payload: questionData })
         } catch (error) {
            throw new Error(dispatch({ type: 'loading/Failed', payload: error }))
         }
      }
      getQuestions()
   }, [])

   return (
      <QuizContext.Provider value={{
         questions,
         status,
         dispatch,
         numQuestions,
         answer,
         index,
         points,
         totalPoints,
         secRemaining,
         highScore,
         individualQuestion
      }}>
         { children }
      </QuizContext.Provider>
   )
}

function useQuiz () {
   const context = useContext(QuizContext)
   if (context === undefined) throw new Error('the context should not be used outside the provider')
   return context      
}

export { QuizProvider, useQuiz }