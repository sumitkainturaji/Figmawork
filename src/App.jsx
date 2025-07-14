import React from 'react'

import Navbar from './components/Navbar'
import Partners from './components/Partners'
import Footer from './components/Footer'
import Services from './components/Services'
import Hero from './Components/Hero'
import Destination from './components/Destination'
import NewsLatter from './components/NewsLatter'
import Testimonials from './components/Testimonials'
import Trip from './components/Trip'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Destination />
      <Trip />
      <Testimonials />
      <NewsLatter />
      <Partners />
      <Footer />
    </>
  )
}

export default App
