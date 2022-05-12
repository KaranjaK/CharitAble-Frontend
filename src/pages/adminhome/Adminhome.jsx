import React from 'react'
import './adminhome.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Widget } from '../../components/widget/Widget'

const Adminhome = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <div className="body">
        <Navbar />
        <div className="widgets">
          <Widget type='users'/>
          <Widget type='requests'/>
          <Widget type='amounts'/>
          <Widget type='ratings'/>
        </div>
      </div>
    </div>
  )
}
export default Adminhome