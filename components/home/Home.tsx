import React from 'react'
import style from './home.module.css'
import Image from 'next/image'
import Link from 'next/link'
type postType={
    post:{
    title: string,
    content: string, 
    image: string,
    _id: string,
    category:string,
    created: string
    }
}
const Home = ({post}:postType) => {
  return (
    <div className={style.container}>

          <h1 className={style.title}>I'm Nicola Pasa, Full Stack Developer</h1>   
          <div className={style.post}>
            {post && 
            <>
               <div className={style.imageContainer}>
                  <Image src={post.image} fill alt='' className={style.image} />
               </div>
               <div className={style.textContainer}>
                <div className={style.details}>
                 <span>{ post.created} - </span> <span className={style.category}>{post.category}</span>
                </div>
                 <h1 className={style.postTitle}>
                    {post.title}
                 </h1>
                 <p className={style.postDesc}>
                 {post.content &&  post.content.substring(0, 600)}
                 </p>
                 <Link href={`/post/${post._id}`} className={style.button}>Read More</Link>
               </div>
               </>
               }   
            </div>   
    </div>
  )
}

export default Home
