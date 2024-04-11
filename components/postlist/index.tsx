import React, { useEffect, useState } from 'react'
import style from './postlist.module.css'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'

const PostList = () => {

  const [posts, setPosts] = useState([])

  const getPosts=async ()=>{

    const response=await axios.get('http://localhost:3000/api/posts')
    setPosts(response.data)
  }
  useEffect(() => {
    
    getPosts()
  }, [])
  

  return (
    <div className={style.container}>
     
             
           {
            posts && posts.map(post=>{
                return (
                    <>
                       <div className={style.post}>
                       <div className={style.imageContainer}>
                <Image src={post.image} fill alt='' className={style.image} />
             </div>  
             <div className={style.textContainer}>
             <div className={style.details}>
                 <span>{ post.created} - </span> <span className={style.category}>{post.category}</span>
                </div>
                <h1 className={style.postTitle}>{post.title && post.title.substring(0,20)}</h1>
                <p className={style.postDesc}> {post.content && post.content.substring(0, 300)} </p>
                <Link className={style.button} href={`/post/${post._id}`}>Read More</Link>
             </div> 

                       </div>
                    
                    </>
                )
            })

           }   
           

        </div>

  )
}

export default PostList
