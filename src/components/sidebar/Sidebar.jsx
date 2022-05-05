import React from 'react'
import './sidebar.css'
import logo from '..//..//assets/images/logo.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <img src={logo} alt="The page logo" className="logo" />
      </div>
      <hr />
      <div className='body'>
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <li>
            <GroupIcon className='icon'/>
            <span>Users</span>
          </li>
          <li>
            <RequestPageIcon className='icon'/>
            <span>Requests</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <BubbleChartIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className='icon'/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <DirectionsRunIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className="title">ADMIN</p>
          <li>
            <AssignmentIndIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon'/>
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      <div className='footer'>
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  )
}
