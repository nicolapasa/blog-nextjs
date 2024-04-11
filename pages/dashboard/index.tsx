import React, { useEffect, useState } from 'react'
import style from './dashboard.module.css'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'

const Dashboard = () => {
    const router=useRouter()

    const [posts, setPosts] = useState([])

    const getPosts=async ()=>{
  
      const response=await axios.get('http://localhost:3000/api/posts')
      setPosts(response.data)
    }
    useEffect(() => {
      
      getPosts()
    }, [])

 //handle delete
 const handleDelete=async(id)=>{
       
    try {
        const response =await axios.delete(`http://localhost:3000/api/post/${id}`)
        router.push('/')
    } catch (error) {
        console.log(error)
    }
   
 }


  return (
    <div className={style.container}>
        <h1 className={style.title}>Dashboard</h1>

        <Link href={'/write'} className={style.button} >Write a post</Link>
      
      <table className={style.table}>
        <thead>
            <tr>
                <th className={style.cell}>Title</th>
                <th className={style.cell}>Category</th>
                <th className={style.cell}>Author</th>
                <th className={style.cell} colSpan={2}>Actions</th>
            </tr>
        </thead>
        <tbody>
           {posts && posts.map(post=>{

            return (
                <>
                <tr>
                    <td className={style.cell}>{post.title}</td>
                    <td className={style.cell}>{post.category}</td>
                    <td className={style.cell}>{post.author}</td>
                    <td className={style.cell}><Link href={`/edit/${post._id}`} className={style.button} >edit</Link></td>
                    <td className={style.cell}><button onClick={()=>handleDelete(post._id)} className={style.buttonDelete} >delete</button></td>
                </tr>
                </>
            ) 
           })
        }
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
