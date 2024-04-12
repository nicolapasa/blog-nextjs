import axios from 'axios'
import React, { useState } from 'react'
import style from './write.module.css'
import { useRouter } from 'next/router'
import { categories } from '../../constant'
import { toast } from 'react-toastify';
const create = () => {
    const router=useRouter()
    const [title, setTitle] = useState<String>('')
    const [content, setContent] = useState<String>('')
    const [image, setImage] = useState<String>('')
    const [category, setCategory] = useState<String>('')
    const [author, setAuthor] = useState<String>('')

  const handleSubmit=async(e:any)=>{
    e.preventDefault()
    try {
      const response=await axios.post('http://localhost:3000/api/posts', {
        title,
        content,
        image,
        category,
        author
    })
  
      router.push('/')
    
   
    } catch (error
      :any
    ) {
       console.log(error.response.data.message)
       toast.error(error.response.data.message)
    }
 
    
  }
  return (
    <div className={style.container}>
    <form onSubmit={handleSubmit} className={style.form}>
      
       <input type="text" placeholder='title' onChange={(e)=>setTitle(e.target.value)} className={style.input}/>
       <textarea placeholder='content' onChange={(e)=>setContent(e.target.value)} className={style.input} ></textarea>
       <input type="text" placeholder='image' onChange={(e)=>setImage(e.target.value)} className={style.input} />
       <select className={style.input} onChange={(e)=>setCategory(e.target.value)} placeholder='category'>
        <option value="">select a category</option>
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

export default create