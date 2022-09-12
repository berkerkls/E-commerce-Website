import React from 'react'
import Announcement from '../components/Announcement'
import Category from '../components/Category'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar />
        <Slider />
        <Category />
        <Products />
    </div>
  )
}

export default Home