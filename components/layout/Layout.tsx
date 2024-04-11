import React, { ReactNode } from "react";
import Navbar from '../navbar/Navbar'
import style from './layout.module.css'
import Footer from '../footer'

import 'react-toastify/dist/ReactToastify.css';

type Props= {
  children?: ReactNode
  // any props that come into the component
}

const layout = ({children}:Props) => {
  
  return (
        <div className={style.container}>
          
        <Navbar />
       
        {children}
        <Footer />
        </div>
  )
}

export default layout