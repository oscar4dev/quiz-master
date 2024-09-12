import React from 'react'
import Footer from './Footer'
import { useQuiz } from '../contexts/QuizContext'
import QuizPhoto1 from '/quiz-photo1.png'
import QuizPhoto2 from '/quiz-photo2.png'
import QuizPhoto3 from '/quiz-photo3.png'
import QuizPhoto4 from '/quiz-photo44.png'

function Contact() {

  const { dispatch } = useQuiz()

  return (
    <main>
      <section className='relative'>
        <img 
          src={ QuizPhoto4 } 
          alt="A quiz enthusiast taking a quiz" 
          className='h-[650px] w-full object-cover sm:h-[500px]'
        />

        <div className='absolute top-0 text-slate-200 p-4'>
          <h1 className='text-5xl font-bold tracking-wider mb-8 sm:mt-8'>Get In Touch With QuizMaster</h1>
          <p className='mb-8'>
            Have questions or feedback? We&apos;re here to
            help and would love to hear from you!
          </p>
          <div className=''>
            <div className='flex gap-4 bg-transparent border p-2 rounded-xl mb-8 sm:w-[450px]'>
              <span>💼</span>
              <div>
                <p className='font-bold tracking-wider'>General Inquiries</p>
                <p>Reach out for any general questions or comments.</p>
              </div>
            </div>

            <div className='flex gap-4 bg-transparent border p-2 rounded-xl mb-8 sm:w-[450px]'>
              <span>🌐</span>
              <div>
                <p className='font-bold tracking-wider'>Support</p>
                <p>Need assistance? Our support team is ready to help.</p>
              </div>
            </div>

            <div className='flex gap-4 bg-transparent border p-2 rounded-xl mb-8 sm:w-[450px]'>
              <span>🤝</span>
              <div>
                <p className='font-bold tracking-wider'>Partnership</p>
                <p>Interested in partnering with us? Let&apos;s collaborate!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-8 px-2 sm:px-4 w-[1000px] mx-auto '>
        <div className=''>
          <h2 className='text-3xl font-bold tracking-wider mb-8'>Stay Connected</h2>
          <p className='mb-8'>
            We value your input and are eager to assist you
            with any inquiries.
          </p>
        </div>

        <div>
          <div className='sm:flex gap-8'>
            <div className='bg-slate-100 shadow-md rounded-xl p-4 mb-8 dark:bg-slate-600 sm:w-[350px]'>
              <p className='font-bold tracking-wider mb-2'>General Inquiry</p>
              <p className='mb-2 text-blue-500'>hello@quizmaster.com</p>
              <p>+1 (555) 123-4567</p>
            </div>

            <div className='bg-slate-100 shadow-md rounded-xl p-4 mb-8 dark:bg-slate-600 sm:w-[350px]'>
              <p className='font-bold tracking-wider mb-2'>Support</p>
              <p className='mb-2 text-blue-500'>support@quizmaster.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className='sm:flex gap-8'>
            <div className='bg-slate-100 shadow-md rounded-xl p-4 mb-8 dark:bg-slate-600 sm:w-[350px]'>
              <p className='font-bold tracking-wider mb-2'>Partnerships</p>
              <p className='mb-2 text-blue-500'>partners@quizmaster.com</p>
              <p>+1 (555) 345-6789</p>
            </div>

            <div className='bg-slate-100 shadow-md rounded-xl p-4 mb-8 dark:bg-slate-600 sm:w-[350px]'>
              <p className='font-bold tracking-wider mb-2'>Feedback</p>
              <p className='mb-2 text-blue-500'>feedback@quizmaster.com</p>
              <p>+1 (555) 345-6789</p>
            </div>
          </div>
        </div>
      </section>

      <section className='px-2 sm:px-4 w-[1000px] mx-auto'>
        <div>
          <h2 className='text-3xl font-bold tracking-wider mb-8'>Our Locations</h2>
          <p className='mb-8'>
            Find us at these locations around the world.
          </p>
        </div>

        <div>
          <div className='sm:flex gap-8'>
            <div className='bg-slate-100 shadow-md rounded-xl p-4 mb-8 dark:bg-slate-600 sm:w-[350px]'>
              <p className='font-bold tracking-wider mb-2'>New York</p>
              <p>123 Quiz Lane, New York, NY 10001</p>
            </div>

            <div className='bg-slate-100 shadow-md rounded-xl p-4 mb-8 dark:bg-slate-600 sm:w-[350px]'>
              <p className='font-bold tracking-wider mb-2'>San Francisco</p>
              <p>456 Quiz Blvd, San Francisco, CA 94105</p>
            </div>
          </div>

          <div className='sm:flex gap-8'>
          <div className='bg-slate-100 shadow-md rounded-xl p-4 mb-8 dark:bg-slate-600 sm:w-[350px]'>
              <p className='font-bold tracking-wider mb-2'>London</p>
              <p>789 Quiz Street, London, UK EC1A 1AA</p>
            </div>

            <div className='bg-slate-100 shadow-md rounded-xl p-4 mb-8 dark:bg-slate-600 sm:w-[350px]'>
              <p className='font-bold tracking-wider mb-2'>Sydney</p>
              <p>101 Quiz Ave, Sydney, NSW 2000</p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-slate-100 h-[500px] flex flex-col justify-evenly items-center px-2 dark:bg-slate-500'>
        <div className='flex items-center justify-center'>
          <img 
            src={ QuizPhoto1 } 
            alt="A quiz enthusiast taking a quiz" 
            className='h-20 w-20 object-cover rounded-full'
          />

          <img 
            src={ QuizPhoto2 } 
            alt="A quiz enthusiast taking a quiz" 
            className='h-28 w-28 object-cover rounded-full'
          />

          <img 
            src={ QuizPhoto3 } 
            alt="A quiz enthusiast taking a quiz" 
            className='h-20 w-20 object-cover rounded-full'
          />
        </div>

        <h2 className='text-3xl font-bold tracking-wider'>Join Thousands of Quiz Enthusiasts</h2>
        <p className='text-center'>
          Become a part of our vibrant community and 
          enhance your knowledge with fun quizzes.
        </p>
        <button
            onClick={ () => dispatch({ type: 'start' }) }
            className='my-8 mx-auto block bg-blue-500 w-4/6 h-12 text-sm rounded-full text-slate-50 md:w-2/6 md:mt-12 hover:bg-blue-700 hover:tracking-wider transition-all ease-in-out'
        >
            Start Quiz &rarr;
        </button>
      </section>

      <Footer />
    </main>
  )
}

export default Contact