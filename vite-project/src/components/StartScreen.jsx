import React from 'react'
import { useQuiz } from '../contexts/QuizContext'
import { Link } from 'react-router-dom'
import { IoPersonOutline } from "react-icons/io5";
import QuizPhoto1 from '/quiz-photo1.png'
import QuizPhoto4 from '/quiz-photo4.png'
import QuizPhoto3 from '/quiz-photo3.png'
import QuizPhoto from '/quiz-photo222.png'
import Footer from './Footer';

function StartScreen() {

   const { dispatch } = useQuiz()
   
   return (
      <main className=''>
         <section className='relative'>
            <img 
               src={ QuizPhoto } 
               alt="A quiz enthusiast taking a quiz" 
               className='h-[500px] w-full object-cover'
            />
            <div className='absolute top-0 p-4 text-slate-50 flex flex-col justify-evenly h-full'>
               <h1 className='text-5xl font-bold tracking-wider mb-8'>Welcome to <br /> QuizMaster!</h1>
               <p className='mb-8 text-lg'>
                  Dive into a world of fun and educational quizzes.
                  Challenge yourself and learn something new everyday!
               </p>
               <div className='sm:flex'>
                  <button
                     onClick={ () => dispatch({ type: 'start' }) }
                     className='bg-blue-500 text-slate-200 rounded-full text-sm h-12 w-4/6 mx-auto block mb-4 tracking-wide hover:tracking-wider hover:bg-blue-800 transition-all ease-in-out sm:w-2/6 sm:ml-0'
                  >
                     Start Quiz
                  </button>
                  <Link
                     to='/about'
                     className='bg-slate-200 text-slate-800 text-sm w-4/6 h-12 mx-auto rounded-full flex items-center justify-center capitalize font-bold tracking-wide hover:tracking-wider hover:bg-slate-400 transition-all ease-in-out dark:text-slate-800 sm:w-2/6 sm:ml-0'
                  >
                     learn more &rarr;
                  </Link>
               </div>
            </div>
         </section>

         <section className='mt-8 px-2 sm:px-4'>
            <p className='text-blue-500 text-lg font-bold mb-4'>Engage and Learn</p>
            <h2 className='capitalize text-3xl font-bold tracking-wider mb-4'>discover unique features</h2>
            <p className='mb-4 text-lg max-w-3xl'>
               QuizMaster offers a wide variety of topics
               and interactive questions to keep you entertained
               and educated. From history to pop culture, there
               is something for everyone!
            </p>

            <p className='font-bold text-lg mb-2'>
               <span className='mr-2'>📚</span> Wide Variety of Topics
            </p>
            <p className='ml-8 mb-4 text-lg'>
               Explore quizzes on subjects ranging from 
               science to entertainment.
            </p>

            <p className='font-bold mb-2 text-lg'>
               <span className='mr-4'>❓</span>Interactive Questions
            </p>
            <p className='ml-8 mb-4 text-lg'>
               Engage with quizzes that offer instant feedback
               and explanations.
            </p>

            <p className='font-bold mb-2 text-lg'>
               <span className='mr-2'>💯</span>Track Your Progress
            </p>
            <p className='ml-8 text-lg'>
               Keep an eye on your scores and see how you
               improve over time.
            </p>
         </section>

         <section className='mt-8'>
            <img 
               src={ QuizPhoto1 } 
               alt="A quiz enthusiast taking a quiz" 
               className='h-[500px] w-full object-cover'
            />
         </section>

         <section className='mt-8 px-2 sm:mt-10 sm:px-4'>
            <h2 className='capitalize text-3xl font-bold tracking-wider'>what our users say</h2>
            <span className='block text-slate-500 mb-4 dark:text-slate-400'>3 reviews</span>

            <div className='bg-slate-100 text-lg shadow-lg border rounded-2xl px-2 py-4 mb-8 md:px-4 md:py-8 dark:bg-slate-700 dark:border-none'>
               <p className='flex items-center gap-2 font-bold mb-2'>
                  <span className='text-sm'>⭐⭐⭐⭐⭐</span> Fun and Educational
               </p>
               <p className='text-base mb-2 text-slate-500 dark:text-slate-400'>August 10, 2024</p>
               <p className='mb-2'>
                  QuizMaster offers a fantastic mix of 
                  entertainment and learning. I can not get
                  enough of it!
               </p>
               <p className='flex items-center gap-2'>
                  <span className='bg-slate-400 rounded-full p-2'><IoPersonOutline /></span> 
                  <span className='font-bold'>Jane Doe</span>
               </p>
            </div>

            <div className='bg-slate-100 text-lg mb-8 shadow-lg border rounded-2xl px-2 py-4 md:px-4 md:py-8 dark:bg-slate-700 dark:border-none'>
               <p className='flex items-center gap-2 font-bold mb-2'>
                  <span className='text-sm'>⭐⭐⭐⭐</span> Great Variety
               </p>
               <p className='text-base mb-2 text-slate-500 dark:text-slate-400'>May 10, 2024</p>
               <p className='mb-2'>
                  The variety of quizzes available is amazing.
                  There is always something new to try.
               </p>
               <p className='flex items-center gap-2'>
                  <span className='bg-slate-400 rounded-full p-2'><IoPersonOutline /></span> 
                  <span className='font-bold'>John Smith</span>
               </p>
            </div>

            <div className='bg-slate-100 text-lg shadow-lg border rounded-2xl px-2 py-4 sm:px-4 md:py-8 dark:bg-slate-700 dark:border-none'>
               <p className='flex items-center gap-2 font-bold mb-2'>
                  <span className='text-sm'>⭐⭐⭐⭐⭐</span> User Friendly
               </p>
               <p className='text-base mb-2 text-slate-500 dark:text-slate-400'>July 18, 2024</p>
               <p className='mb-2'>
                  The platform is very user-friendly and
                  easy to navigate. Highly recommended!
               </p>
               <p className='flex items-center gap-2'>
                  <span className='bg-slate-400 rounded-full p-2'><IoPersonOutline /></span> 
                  <span className='font-bold'>Emily Johnson</span>
               </p>
            </div>
         </section>

         <section className='pt-8'>
            <img 
               src={ QuizPhoto4 }
               alt="A quiz enthusiast taking a quiz" 
               className='h-[500px] w-full object-cover'
            />
         </section>

         <section className='mt-10 px-2 sm:px-4 sm:pb-8'>
            <h2 className='text-3xl font-bold tracking-wider mb-4'>Join QuizMaster Today!</h2>
            <p className='mb-4 text-lg'>
               Sign up now and start exploring our vast
               colection of quizzes. Challenge yourself
               and have fun!
            </p>

            <div className=''>
               <p className='space-x-2 text-lg'>
                  <span>✔</span>
                  <span>Free to Join</span>
               </p>
               <p className='space-x-2 text-lg'>
                  <span>✔</span>
                  <span>Wide Variety of Quizzes</span>
               </p>
            </div>
            <div>
               <p className='space-x-2 text-lg'>
                  <span>✔</span>
                  <span>Track Your Progress</span>
               </p>
               <p className='space-x-2 text-lg'>
                  <span>✔</span>
                  <span>Interactive and fun</span>
               </p>
            </div>
            <button
               onClick={ () => dispatch({ type: 'start' }) }
               className='mt-8 mx-auto block bg-blue-500 w-4/6 h-12 text-sm rounded-full text-slate-50 md:w-2/6 md:mt-12 hover:bg-blue-700 hover:tracking-wider transition-all ease-in-out'
            >
               Start Quiz &rarr;
            </button>
         </section>

         <section className='mt-8'>
            <img 
               src={ QuizPhoto3 } 
               alt="A quiz enthusiast taking a quiz" 
               className='h-[500px] w-full object-cover'
            />
         </section>

         <Footer />
      </main>
   )
}

export default StartScreen