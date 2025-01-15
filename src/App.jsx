// import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'
import Header from './components/Header'
import SideBar from './components/SideBar'
import ServersList from './components/ServersList'
import SortBar from './components/SortBar'

function App() {
  
  return (
    <>
      <Modal/>
      <div className='Main'>
        <Header/>
        <SideBar/>
        <SortBar/>
        <ServersList/>
      </div>
    </>
  )
}

export default App
