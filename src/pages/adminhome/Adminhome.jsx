import React from 'react'
import './adminhome.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Widget } from '../../components/widget/Widget'
import { Featured } from '../../components/featured/Featured'
import { Charts } from '../../components/charts/Charts'

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
        <div className="charts">
          <Featured />
          <Charts />
        </div>
      </div>
    </div>
  )
}
export default Adminhome