import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'



// - Rotues 
import Views from './Routes/Views'

function App() {


  return (
    <section className='App'>
    
    <BrowserRouter>
      <Views/>
    </BrowserRouter>
    </section>
  )
}

export default App
