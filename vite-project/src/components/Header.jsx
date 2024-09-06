import React, { useState } from 'react'
import { FaTrophy } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import useTheme from '../hooks/useTheme';

function Header() {

   const [isOpen, setIsOpen] = useState(false)

   function toggleOpen () {
      setIsOpen((cur) => {
         return !cur
      })
   }

   const { toggleTheme, theme } = useTheme()

   return (
      <header className='relative bg-slate-100 m-4 shadow-lg border rounded-full h-20 px-4 flex items-center justify-between dark:bg-slate-500 dark:border-none'>
         <span className='text-3xl'>
            <Link to='/' className='text-amber-600'>
               <FaTrophy />
            </Link>
         </span>

         <nav className='hidden md:flex'>
            <ul className='flex items-center text-lg gap-4'>
               <li>
                  <NavLink 
                     to='/'
                     className={({ isActive }) => isActive ? 'underline' : '' }
                  >
                     Home
                  </NavLink>
               </li>
               <li>
                  <NavLink 
                     to='/about'
                     className={ ({ isActive }) => isActive ? 'underline' : '' }
                  >
                     About
                  </NavLink>
               </li>
            </ul>
         </nav>

         <nav className='flex'>
            <ul className='hidden text-lg gap-4 md:flex'>
               <li className='text-base'>
                  <NavLink 
                     to='/contact'
                     className={ `${'bg-slate-200 rounded-full flex w-36 h-12 items-center justify-center font-bold transition-all hover:bg-slate-400 hover:tracking-wider dark:text-slate-800'}`}
                  >
                     Contact us &rarr;
                  </NavLink>
               </li>
               <button
                  onClick={ toggleTheme }
                  title='Switch to dark mode'
                  className='bg-slate-400 rounded-full w-12 flex items-center justify-center'
               >
                  { theme === 'light' 
                     ? <MdDarkMode /> 
                     : '💡'
                  }
               </button>
            </ul>
            <button
               onClick={ toggleOpen }
               className='text-3xl text-slate-800 md:hidden dark:text-slate-200'
            >
               <MdMenu /> 
            </button>
         </nav>

         {
            isOpen && <nav className='absolute z-20 p-4 top-0 right-0 left-0 h-80 rounded-3xl bg-slate-100 text-lg shadow-lg dark:bg-slate-500'>
                  <ul className='flex justify-between'>
                     <li className='text-3xl'>
                        <Link 
                           to='/' 
                           className='text-amber-600'
                           onClick={ () => setIsOpen(false) }
                        >
                           <FaTrophy />
                        </Link>
                     </li>
                     <button
                        onClick={ toggleOpen }
                        className='text-3xl'
                     >
                        ✖
                     </button>
                  </ul>

                  <ul className='flex flex-col items-center justify-evenly h-full'>
                     <li className='w-3/6 h-10 rounded-full flex items-center justify-center'>
                        <Link 
                           to='/about'
                           onClick={ () => setIsOpen(false) }
                           className='h-full w-full flex items-center justify-center'
                        >
                           About
                        </Link>
                     </li>
                     <li className='w-3/6 h-10 rounded-full flex items-center justify-center'>
                        <Link 
                           to='/contact'
                           onClick={ () => setIsOpen(false) }
                        >
                           Contact
                        </Link>
                     </li>
                     <button
                        onClick={ toggleTheme }
                        title='Switch to light mode'
                        className='w-1/6 h-10 rounded-full flex items-center justify-center bg-blue-500'
                     >
                        { theme === 'light' 
                           ? <MdDarkMode /> 
                           : '💡'
                        }
                     </button>
                  </ul>
               </nav>
         }
      </header>
   )
}

export default Header