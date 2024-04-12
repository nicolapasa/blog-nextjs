import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import style from './sidebarposts.module.css'
import axios from 'axios'

type Props={
  isWithImage: boolean
}


const SidebarPosts= ({isWithImage}:Props) => {

    const [posts, setPosts] = useState<any[]>([])

    const [styleCat, setStyleCat] = useState("")

  const getPosts=async ()=>{

    const response=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`)
    setPosts(response.data)
    
  }
  useEffect(() => {
    
    getPosts()
  }, [])
  
  return (
     <div className={style.items}>

     {posts && posts.map(post=>{

        return (
            <>
            
            <Link href={'/'} className={style.item}>
     {isWithImage && 
     (  <div className={style.imageContainer}>
        <Image src={post.image} alt='' fill  className={style.image}/>
                  </div>)
     }
      <div className={style.textContainer}>
        <span className={`${style.category} ${style[post.category.toLowerCase()]}`}>{post.category}</span>
        <h3 className={style.postTitle}>{post.title}</h3>
        <div className={style.detail}>
          <span className={style.username}>John Doe</span>
          <span className={style.date}> - 10.03.2024</span>
        </div>
      </div>
    </Link>
            </>
        )
     })}

    
   
  </div>
  )
}

export default SidebarPosts