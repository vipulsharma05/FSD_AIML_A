import React from 'react'
import {Routes,BrowserRouter,Route} from "react-router-dom"
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<h1>Sign Up</h1>}/>
        <Route path="/login" element={<h1>Login Page</h1>}/>
        <Route path="/viewproduct" element={<h1>View Product</h1>}/>
        <Route path="/addproduct" element={<h1>Add product</h1>}/>
        </Routes></BrowserRouter>
    </div>
  )
}

export default App
