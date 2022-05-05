import React from 'react'
import './sidebar.css'
import logo from '..//..//assets/images/logo.png'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <img src={logo} alt="The page logo" className="logo" />
      </div>
      <div className='body'>List</div>
      <div className='footer'>Theme</div>
    </div>
  )
}
