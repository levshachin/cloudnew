// import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'
import Header from './components/Header'
import FalseComponent from './components/FalseComponent'

function App() {
  
  return (
    <>
      <Modal/>
      <div className='Main'>
        <Header/>
        <div className='mainservers'>
          <FalseComponent/>
        </div>
      </div>
    </>
  )
}

export default App
