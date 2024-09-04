import React from 'react'
import { useQuiz } from '../contexts/QuizContext'
import { Link } from 'react-router-dom'
import { IoPersonOutline } from "react-icons/io5";
import Photo from '/photo-one.jpg'
import PhotoTwo from '/photo-two.jpg'
import PhotoThree from '/photo-three.jpg'
import Footer from './Footer';

function StartScreen() {

   const { dispatch } = useQuiz()
   
   return (
      <div className='px-4'>
         <section className='gap-4 my-8 h-[400px] flex flex-col justify-evenly'>
            <h1 className='text-center text-4xl tracking-wider font-bold mb-8 md:text-3xl'>
               Welcome to <br /> QuizMaster!
            </h1>
            <p className='text-center text-xl mx-auto mb-8 max-w-[550px]'>
               Dive into a world of fun and educational quizzes.
               Challenge yourself and learn something new everyday!
            </p>

            <div className='flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:w-3/6 sm:mx-auto sm:gap-8'>
               <button
                  onClick={ () => dispatch({ type: 'start' }) }
                  className='bg-blue-500 text-slate-200 rounded-full text-sm h-12 w-4/6 mx-auto tracking-wide hover:tracking-wider hover:bg-blue-800 transition-all ease-in-out'
               >
                  Start Quiz
               </button>
               <Link
                  to='/about'
                  className='bg-slate-200 text-sm w-4/6 h-12 mx-auto rounded-full flex items-center justify-center capitalize font-bold tracking-wide hover:tracking-wider hover:bg-slate-400 transition-all ease-in-out dark:text-slate-800'
               >
                  learn more &rarr;
               </Link>
            </div>
         </section>

         <section className='my-10 h-60 w-full md:h-[450px] md:w-5/6 md:mx-auto'>
            <img 
               src={ Photo } 
               alt="human head shape with lots of question mark on sticker" 
               className='h-full w-full object-cover rounded-2xl'
            />
         </section>

         <section className='my-10 md:p-8'>
            <p className='text-blue-500 text-lg font-bold mb-4'>Engage and Learn</p>
            <h2 className='capitalize text-2xl font-bold mb-4'>discover unique features</h2>
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
            <p className='ml-8 mb-4 text-lg'>
               Keep an eye on your scores and see how you
               improve over time.
            </p>
         </section>

         <section className='border-3 h-60 w-full my-10 md:h-[450px] md:w-5/6 md:mx-auto'>
            <img 
               src={ PhotoTwo } 
               alt="colored question mark background" 
               className='h-full w-full object-cover rounded-2xl'
            />
         </section>

         <section className='my-10 md:my-16 md:p-8'>
            <h2 className='capitalize text-center text-2xl font-bold'>what our users say</h2>
            <span className='text-center block text-slate-500 mb-4 dark:text-slate-400'>3 reviews</span>

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

            <div className='bg-slate-100 text-lg shadow-lg border rounded-2xl px-2 py-4 md:px-4 md:py-8 dark:bg-slate-700 dark:border-none'>
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

         <section className='my-10 md:px-8 md:pb-8'>
            <h2 className='text-2xl font-bold mb-4'>Join QuizMaster Today!</h2>
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
               className='my-8 mx-auto block bg-blue-500 w-4/6 h-12 text-sm rounded-full text-slate-50 md:w-2/6 md:mt-12 hover:bg-blue-700 hover:tracking-wider transition-all ease-in-out'
            >
               Start Quiz &rarr;
            </button>
         </section>

         <section className='h-60 w-full my-10 md:h-[450px] md:w-5/6 md:mx-auto'>
            <img 
               src={ PhotoThree } 
               alt="man holding yellow paper note with question mark in his hand" 
               className='h-full w-full object-cover rounded-2xl'
            />
         </section>

         <Footer />
      </div>
   )
}

export default StartScreen