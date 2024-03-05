import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-w.png'
import logo_dark from '../../assets/logo-b.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toogle_light from '../../assets/toogle-w.png'
import toogle_dark from '../../assets/toogle-b.png'

const navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <div className='navbar'>
      <img src={theme == 'light' ? logo_dark : logo_light} alt='' className='logo' />
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">PRODUCTS</a></li>
        <li><a href="#">FEATURES</a></li>
        <li><a href="#">ABOUT</a></li>
      </ul>
      <div className="search-box">
        <input type='text' placeholder='Search' />
        <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt='' />
      </div>
      <img onClick={() => { toggle_mode() }} src={theme == 'light' ? toogle_dark : toogle_light} alt='' className='toogle-icon' />
    </div>
  )
}

export default navbar