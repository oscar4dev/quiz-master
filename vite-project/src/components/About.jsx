import React from 'react'
import Image from '/quiz-photo1.jpg'
import Image2 from '/photo-four.jpg'
import Footer from './Footer'
import { IoPersonOutline } from "react-icons/io5";
import Accordion from './Accordion';

function About() {
   return (
      <main>
         <section className='relative bg-red-100 h-[500px] '>
            <img 
               src={ Image } 
               alt="" 
               className='h-full w-full object-cover'
            />
            <div className='absolute top-0 p-4 sm:px-36'>
               <h1 className='text-slate-50 font-bold tracking-wider text-5xl mb-8'>About QuizMaster</h1>
               <p className='max-w-[600px] sm:text-lg'>
                  Discover the mission and values that drive 
                  QuizMaster to create fun and educational 
                  quizzes for everyone.
               </p>
            </div>
         </section>

         <section className='py-8 px-2 sm:px-4 max-w-3xl mx-auto'>
            <p className='font-bold tracking-wider mb-4'>Our Journey</p>
            <h2 className='text-3xl text-cyan-500 font-bold tracking-wider mb-8'>
               The Story Behind QuizMaster
            </h2>
            <p className='mb-8'>
               QuizMaster was born out of a passion for 
               learning and entertainment. Our goal is to 
               make education fun and accessible through 
               engaging quizzes.
            </p>

            <div className='bg-slate-100 shadow-md p-4 rounded-xl dark:bg-slate-600'>
               <p className='mb-8'>
                  QuizMaster has transformed the way I learn 
                  new things. It&apos;s fun, interactive, and 
                  incredibly educational!
               </p>
               <div className='flex items-center'>
                  <span className='mr-4 bg-slate-400 p-2 rounded-full'>
                     <IoPersonOutline />
                  </span>
                  <div className='flex flex-col'>
                     <span className='font-bold'>Jane Doe</span>
                     <span className='text-slate-600 dark:text-slate-400'>@janedoe</span>
                  </div>
               </div>
            </div>

            <div className='my-8 flex items-center gap-4 px-2'>
               <div className='border-l-4 border-cyan-500 h-20'></div>
               <div>
                  <span className='font-bold block mb-4'>Educational</span>
                  <p>
                     Quizzes designed to educate and challenge users of all
                     ages.
                  </p>
               </div>
            </div>

            <div className='mb-8 flex items-center gap-4 px-2'>
               <div className='border-l-4 border-cyan-500 h-20'></div>
               <div>
                  <span className='font-bold block mb-4'>Entertaining</span>
                  <p>
                     Fun and engaging quizzes to keep you entertained.
                  </p>
               </div>
            </div>

            <div className='mb- flex items-center gap-4 px-2'>
               <div className='border-l-4 border-cyan-500 h-20'></div>
               <div>
                  <span className='font-bold block mb-4'>Community</span>
                  <p>
                     Join a community of quiz enthusiasts and share your scores.
                  </p>
               </div>
            </div>
         </section>

         <section className='mb-8 px-2 sm:px-4 max-w-3xl mx-auto sm:mt-10'>
            <h2 className='text-3xl text-cyan-500 font-bold tracking-wider mb-8'>Frequently Asked Questions</h2>
            <Accordion />
         </section>

         <section className='px-2 pb-8 sm:px-4 max-w-3xl mx-auto sm:mt-16'>
            <p className='font-bold tracking-wider mb-4'>Our Achievements</p>
            <h2 className='text-3xl text-cyan-500 font-bold tracking-wider mb-8'>QuizMaster in Numbers</h2>
            <p className='mb-8'>
               Since our launch, we&apos;ve made significant 
               strides in making learning fun. Our community 
               continues to grow, and we&apos;re proud of the 
               impact we&apos;ve made.
            </p>

            <div className='h-[500px]'>
               <img
                  src={ Image2 }
                  alt="White question mark on blue background"
                  className='h-full w-full object-cover'
               />
            </div>

            <div className='mt-8'>
               <div className='bg-slate-100 shadow-md p-4 rounded-xl flex flex-col dark:bg-slate-600 sm:w-1/2'>
                  <span className='font-bold text-3xl mb-4'>2024</span>
                  <span>Founded</span>
               </div>

               <div className='mt-8 bg-slate-100 shadow-md p-4 rounded-xl flex flex-col dark:bg-slate-600 sm:w-1/2'>
                  <span className='font-bold text-3xl mb-4'>10,000+</span>
                  <span>Quizzes Taken</span>
               </div>
            </div>

            <div className='mt-8'>
               <div className='bg-slate-100 shadow-md p-4 rounded-xl flex flex-col dark:bg-slate-600 sm:w-1/2'>
                  <span className='font-bold text-3xl mb-4'>1,000+</span>
                  <span>Active Users</span>
               </div>

               <div className='mt-8 bg-slate-100 shadow-md p-4 rounded-xl flex flex-col dark:bg-slate-600 sm:w-1/2'>
                  <span className='font-bold text-3xl mb-4'>50+</span>
                  <span>Topics Covered</span>
               </div>
            </div>

            <span className='mt-8 block'>⭐⭐⭐⭐⭐</span>
            <p className='mt-8'>
               QuizMaster has been an incredible tool for 
               both learning and fun. The variety of quizzes 
               keeps me coming back for more.
            </p>

            <div className='flex items-center gap-4 mt-8'>
               <span className='bg-slate-400 p-2 rounded-full'>
                  <IoPersonOutline />
               </span>
               <div className='flex flex-col'>
                  <span className='font-bold'>Alex Doe</span>
                  <span className='text-slate-600 dark:text-slate-400'>Quiz Enthusiast</span>
               </div>
            </div>
         </section>

         <section className='bg-red-500'>
            <Footer />
         </section>
      </main>
   )
}

export default About