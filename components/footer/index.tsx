import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from './footer.module.css'
const Footer = () => {
  return (
    <div className={style.container}>
    <div className={style.info}>
      <div className={style.logo}>
        <Image src={'/logo.png'} width={50} height={50} alt='blog' />
        <h1 className={style.logoText}>NicolasBlog</h1>
      </div>
      <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reprehenderit soluta aliquid harum pariatur dolor qui nemo 
        deleniti excepturi beatae perspiciatis quia officia fugiat labore, explicabo minus quisquam, in velit.
        </p>
        <div className={style.icons}>
          <Image src={'/facebook.png'} width={18} height={18} alt=''/>
          <Image src={'/instagram.png'} width={18} height={18} alt=''/>
          <Image src={'/tiktok.png'} width={18} height={18} alt=''/>
          <Image src={'/youtube.png'} width={18} height={18} alt=''/>
        </div>
    </div>
    <div className={style.links}>
         <div className={style.list}>
            <span className={style.listTitle}>Links</span>
            <Link href={'/'} >Home</Link>
            <Link href={'/'} >Blog</Link>
            <Link href={'/'} >About</Link>
            <Link href={'/'} >Contact</Link>
         </div>
         <div className={style.list}>
            <span className={style.listTitle}>Tags</span>
            <Link href={'/'} >Style</Link>
            <Link href={'/'} >Fashion</Link>
            <Link href={'/'} >Culture</Link>
            <Link href={'/'} >Food</Link>
         </div>
         <div className={style.list}>
            <span className={style.listTitle}>Social</span>
            <Link href={'/'} >Facebook</Link>
            <Link href={'/'} >Instagram</Link>
            <Link href={'/'} >TikTok</Link>
            <Link href={'/'} >Youtube</Link>
         </div>
    </div>
  </div>
  )
}

export default Footer