import React from 'react'
import Header from './Header'
import Main from './Main'
import { Outlet } from 'react-router-dom'

function AppLayout() {
   return (
      <div className=' h-dvh flex flex-col'>
         <Header />
         <Main>
            <Outlet />
         </Main>
         {/* <Footer /> */}
      </div>
   )
}

export default AppLayout