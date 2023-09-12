import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar1 from '../components/SideBar1'
import Sidebar2 from '../components/SideBar2'
import ImageUpload from '../components/ImageUpload'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Sidebar1 />
      <ImageUpload />
      <Sidebar2 />
    </div>
  )
}

export default HomePage
