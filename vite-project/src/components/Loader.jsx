import React from 'react'
import Spinner from '/Spinner.gif'

function Loader() {
   return (
      <div className=' flex items-center justify-center h-full'>
         <img 
            src={ Spinner } 
            alt="blue loading spinner on a white background" 
            className=''
         />
      </div>
   )
}

export default Loader