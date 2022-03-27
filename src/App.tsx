import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SiteLayout from './layouts/SiteLayout'
import AdminLayout from './layouts/AdminLayout'
import Admin from './pages/Admin'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SiteLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Admin />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
