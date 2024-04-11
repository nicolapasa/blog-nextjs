import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from './categorylist.module.css'
import { categories } from '../../constant'
const CategoryList = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Popular Categories</h1>
      <div className={style.categories}>
         {categories.map(category=>{

          return (
            <>
            
            <Link href={`/blog?cat=${category.title}`} className={`${style.category} ${style[category.title.toLowerCase()]}`}>
            <Image src={`/${category.title.toLowerCase()}.png`} alt='' width={32} height={32} className={style.image} />
            {category.title}
            </Link>
            </>
          )
         })}

           
      </div>
    </div>
  )
}

export default CategoryList
