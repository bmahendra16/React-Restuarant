import React from 'react'
import Logo from '../assets/image/Logo.jpg'
import Home from '../Pages/Home'
import { Link, Route, Routes } from 'react-router-dom'
import Menu from '../Pages/Menu'
import Contact_us from '../Pages/Contact_us'
import About_Us from '../Pages/About_Us'

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary shadow">
  <div className="container">
    <Link className="navbar-brand" to="/">
          <h5>React Restaurant</h5>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 font-bold">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/menu">MENU</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>



    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/about' element={<About_Us/>}/>
      <Route path='/contact' element={<Contact_us/>}/>
    </Routes>
    </>
  )
}

export default Header
