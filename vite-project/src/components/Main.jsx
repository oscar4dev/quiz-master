import React from 'react'

function Main({ children }) {
   return (
      <main className='h-full overflow-auto'>
         { children }
      </main>
   )
}

export default Main