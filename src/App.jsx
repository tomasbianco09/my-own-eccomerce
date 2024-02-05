import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/navbar/NavBar'


const App = () => {


  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          
        </Routes>

        <ToastContainer />

      </BrowserRouter>
    </>
  )
}

export default App