import React, { useState } from 'react'
import style from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
const Navbar = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  return (
    <div className={style.container}>
        <div className={style.socials}>
            <Image src={'/instagram.png'} width={32} height={32} alt='instagram' />
            <Image src={'/facebook.png'} width={32} height={32} alt='facebook' />
            <Image src={'/youtube.png'} width={32} height={32} alt='youtube' />
            <Image src={'/tiktok.png'} width={32} height={32} alt='tiktok' />
        </div>
        <div className={style.logo}><Image src={'/logo.png'} width={164} height={164} alt='logo'/> </div>
        <ul className={style.links}>
            <li> <Link className={style.link} href={'/'}>Home</Link>  </li>
            <li> <Link className={style.link} href={'/about'}>About</Link>  </li>
            <li> <Link className={style.link} href={'/contact'}>Contact</Link>  </li>
            { !userId &&  
            <>
            <li>   <Link className={style.link} href={'/sign-in'}>Sign In</Link>        </li>  
            <li>   <Link className={style.link} href={'/sign-up'}>Sign Up</Link>        </li>  
            </>
             }
           
      
            {userId && 
            <Link className={style.link} href={'/dashboard'} >Dashboard</Link>
           }
             
            <UserButton />
            
        </ul>
      
    </div>
  )
}

export default Navbar
