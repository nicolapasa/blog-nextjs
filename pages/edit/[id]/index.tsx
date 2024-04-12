import React, { useEffect, useState } from 'react'
import style from './edit.module.css'
import { categories } from '../../../constant'
import { useRouter } from 'next/router'
import axios from 'axios'
interface Post {
  title: string;
  content: string;
  image: string;
  category: string;
  author: string;
}
const EditPage = () => {
    const router=useRouter()
    const [post, setPost] = useState<Post>({  title: '',
    content: '',
    image: '',
    category: '',
    author: ''})
    const [title, setTitle] = useState<String>(post.title)
    const [content, setContent] = useState<String>(post.content)
    const [image, setImage] = useState<String>(post.image)
    const [category, setCategory] = useState<String>(post.category)
    const [author, setAuthor] = useState<String>(post.author)
    const id=router.query.id
   
    const getSinglePost=async()=>{
    
       const response=await axios.get(`http://localhost:3000/api/post/${id}`)
       if(response.data.post[0]) setPost(response.data.post[0])
     
   
     }
  
  const handleSubmit=async(e:any)=>{
    e.preventDefault()
    try {
      const response=await axios.put('http://localhost:3000/api/posts', {
        id,
        title,
        content,
        image,
        category,
        author
    })
    router.push('/')
    } catch (error) {
       console.log(error)
    }
 
    
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
   getSinglePost()
    }
  
   }, [id])


  return (
    <div className={style.container}>
    <form onSubmit={handleSubmit} className={style.form}>
      
       <input value={post.title} type="text" placeholder='title' onChange={(e)=>setTitle(e.target.value)} className={style.input}/>
       <textarea placeholder='content' onChange={(e)=>setContent(e.target.value)} className={style.input} value={post.content} ></textarea>
       <input type="text" placeholder='image' onChange={(e)=>setImage(e.target.value)} value={post.image} className={style.input} />
       <select className={style.input} onChange={(e)=>setCategory(e.target.value)}>
        <option value={post.category} selected>{post.category}</option>
         {categories.map(category=>{

          return (
            <option value={category.title}>{category.title}</option>
          )
         })}
        </select> 
        <input type="text" placeholder='author' onChange={(e)=>setAuthor(e.target.value)} className={style.input} />
       
        <button className={style.button}>Save</button>

    </form>
      
    </div>
  )
}

export default EditPage