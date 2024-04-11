import React from 'react'
import Navbar from '../navbar/Navbar'
import style from './layout.module.css'
import Footer from '../footer'

import 'react-toastify/dist/ReactToastify.css';
const layout = ({children}) => {
  
  return (
        <div className={style.container}>
          
        <Navbar />
       
        {children}
        <Footer />
        </div>
  )
}

export default layout