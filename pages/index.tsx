import React, { useEffect, useState } from 'react'
import Home from '../components/home/Home'
import axios from 'axios'
import style from './index.module.css'
import PostList from '../components/postlist'
import Sidebare from '../components/sidebar'
import CategoryList from '../components/categorylist'

interface Post {
  _id: string;
  title: string;
  content: string;
  image: string;
  category: string;
  author: string;
  created: string;
}
const index = () => {

  const [post, setPost] = useState<Post>({
  _id: '',  
  title: '',
  content: '',
  image: '',
  category: '',
  author: '',
  created:''
})

  
  const getOnePost=async()=>{

     const response =await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/featured`)
     console.log(response.data.post)
     setPost(response.data.post[0])

  }
  useEffect(() => {
    
      getOnePost()
  }, [])
  
  return (
    <>
    <Home post={post} />

    <CategoryList />
     <div className={style.content}>
      <div className={style.postList}>
          <PostList />
      </div>
      <div className={style.sidebar}>
          <Sidebare />
      </div>
     </div>
     </>
  )
}

export default index