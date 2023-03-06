import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Slider from './components/slider/Slider'
import Productdetails from './components/productdetails/Productdetails'
import Trending from './components/trending/Trending'
import Service from './components/service/Service'
import Abovefooter from'./components/abovefooter/Abovefooter'
import Productlist from './components/productlist/Productlist'

export default function App() {
  return (
   
    <div>
      <Header />
      <Navbar />
      <Slider />
      <Productlist/>
      <Productdetails />
      <Trending/>
      <Abovefooter/>
      <Footer />
    </div>
  )
}
