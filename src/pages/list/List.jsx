import React from 'react'
import './list.css'
import Sidebar from '..//..//components/sidebar/Sidebar'
import Navbar from '..//..//components/navbar/Navbar'


const List = () => {
  return (
    <div className='list'>
        <Sidebar />
        <div className="listcontainer">
            <Navbar />
        </div>
    </div>
  )
};
export default List