import React from 'react'
import './adminhome.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Widget } from '../../components/widget/Widget'

const Adminhome = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Navbar />
      <div className="body">
        <Widget />
      </div>
    </div>
  )
}
export default Adminhome