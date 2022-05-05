import React from 'react'
import './adminhome.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'

export const Adminhome = () => {
  return (
    <div className='navbar'>
      <Navbar />
      <Sidebar />
    </div>
  )
}
