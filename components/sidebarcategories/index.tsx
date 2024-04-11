import React from 'react'
import style from './sidebarcategories.module.css'
import Link from 'next/link'
import { categories } from '../../constant'

const SidebarCategories = () => {
  return (
    <>
    <h2 className={style.subTitle}>Discover by Topics</h2>
    <h1 className={style.title}>Categories</h1>
    <div className= {style.categoryList}>
      {categories.map(category=>{

        return(
          <Link href={`/blog?cat=${category.title}`} className={`${style.categoryItem} ${style[category.title.toLowerCase()]}`}>{category.title}</Link>
   
        )

      })}

    </div>
    </>
  )
}

export default SidebarCategories
