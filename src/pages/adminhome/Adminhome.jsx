import React from 'react'
import './adminhome.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'

const Adminhome = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Navbar />
    </div>
  )
}
export default Adminhome