import React from 'react'
import logoSpotfy from '/src/assets/logo/spotify-logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to='/' className='header__link' >
        <img src={logoSpotfy} alt="Logo do Spotfy" />
      </Link>
      <Link to='/' className='header__link' >
        <h1>Spotfy</h1>
      </Link>
    </div>
  )
}

export default Header