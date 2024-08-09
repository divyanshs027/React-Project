import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Laylot() {
  return (
    <>
       <Header />
        <Outlet />
       <Footer />
    </>
  )
}

export default Laylot