import React, { useState } from 'react'
import AccordionItem from './AccordionItem'

const faqs = [
   {
      id: 1,
      question: 'What is QuizMaster',
      answer: 'QuizMaster is an online platform offering engaging quizzes across various topics, designed to educate and entertain users of all ages.'
   },
   {
      id: 2,
      question: 'How can I start taking quizzes?',
      answer: 'Simply sign up on our platform and start exploring the wide range of quizzes available.',
   },
   {
      id: '3',
      question: 'Is QuizMaster free to use?',
      answer: 'Yes, QuizMaster is free to use. We do offer premium features for an enhanced experience.'
   },
]

function Accordion() {

   const [curOpen, setCurOpen] = useState(null)

   return (
      <ul className='flex flex-col gap-8'>
         { 
            faqs.map(
               (item) => 
                  <AccordionItem 
                     key={ item.id } 
                     id={ item.id }
                     question={ item.question }
                     answer={ item.answer }
                     curOpen={ curOpen }
                     setCurOpen={ setCurOpen }
                  />
            ) 
         }
      </ul>
   )
}

export default Accordion