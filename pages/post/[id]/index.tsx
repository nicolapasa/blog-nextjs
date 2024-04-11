'use client'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import style from './index.module.css'
import Image from 'next/image'
const page = () => {
  const router=  useRouter()
  const id=router.query.id
  const [post, setPost] = useState({})
  const getSinglePost=async()=>{
    console.log(id)
     const response=await axios.get(`http://localhost:3000/api/post/${id}`)
      setPost(response.data.post[0])
      console.log(response.data.post)
 
   }
 
 useEffect(() => {
  if (typeof window !== "undefined") {
 getSinglePost()
  }

 }, [id])
 

  
  return (
    <div className={style.container}>
      <h1 className={style.title}> {post.title}</h1>
      <div className={style.imageContainer}> 
         <Image src={post.image} fill  alt='post image' className={style.image} />
      </div>
     
      <p className={style.desc}>
        {post.content}
      </p>
     </div>
  )
}

export default page