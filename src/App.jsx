import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Scrolltriggered from './components/scrolltriggered'

import Hero from './components/hero'
import Content from './components/content'
import Skills from './components/skills'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Projects from './components/projects'


function App() {


  return (
    <>
    <Navbar/>
      <Hero />
      <Content/>
      <Projects/>
      <Skills/>
      <Footer/>
    </>
  )
}

export default App
