import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {

   const date = new Date().getFullYear()

   return (
      <footer className='mt-auto bg-slate-200 px-2 py-8 space-y-4 dark:bg-slate-600'>
         <div className='text-lg flex items-center justify-center gap-8 text-blue-600 underline py-8 dark:text-blue-300'>
            <Link 
               to='/about'
               className='hover:text-slate-800 dark:hover:text-slate-200'
            >About Us</Link>
            <Link 
               to='/contact'
               className='hover:text-slate-800 dark:hover:text-slate-200'
            >Contact</Link>
         </div>

         <div className='text-lg'>
            <div className='flex items-center justify-center gap-4 mb-8'>
               <span
                  title='facebook'
                  className='bg-slate-400 rounded-full p-2 hover:bg-slate-600 transition-all dark:hover:bg-slate-500'
               ><FaFacebookF /></span>
               <span
                  title='GitHub'
                  className='bg-slate-400 rounded-full p-2 hover:bg-slate-600 transition-all dark:hover:bg-slate-500'
               ><FaGithub /></span>
               <span
                  title='X'
                  className='bg-slate-400 rounded-full p-2 hover:bg-slate-600 transition-all dark:hover:bg-slate-500'
               ><FaXTwitter /></span>
            </div>

            <p className='text-center text-base'>
               &copy; { date } QuizMaster &#183; Built by
               <a 
                  href="https://github.com/oscar4dev"
                  rel='noreferrer'
                  target='_blank'
               ><span className='ml-1 text-blue-600 underline hover:text-slate-800 dark:text-blue-300 dark:hover:text-slate-200'>Oscar4dev</span></a>
            </p>
         </div>
      </footer>
   )
}

export default Footer