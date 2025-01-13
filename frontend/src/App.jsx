import { useState } from 'react'
import{BrowserRouter ,Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import ProductCard from './components/ProductCard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
function App() {

  return (
    <BrowserRouter>
      <div> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
       

       </div>
    </BrowserRouter>
  )
}

export default App
