import React from 'react'
import style from './sidebar.module.css'
import SidebarPosts from '../sidebarposts'
import SidebarCategories from '../sidebarcategories'


const Sidebare = () => {
  return (
    <div className={style.container}>
          <h2 className={style.subTitle}>What's hot</h2>
      <h1 className={style.title}>Most Popular</h1>
       <SidebarPosts isWithImage={false} />
       <SidebarCategories />
       <h2 className={style.subTitle}>Chosen by editors</h2>
      <h1 className={style.title}>Editors Pick</h1>
       <SidebarPosts isWithImage={true} />

    </div>
  )
}

export default Sidebare