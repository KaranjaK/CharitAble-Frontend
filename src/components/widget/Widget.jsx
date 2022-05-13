import React from 'react'
import './widget.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StarsIcon from '@mui/icons-material/Stars';

const Widget = ({type}) => {

  let data;
  // Test data
  const amount = 23;

  switch (type){

    case 'users':
      data = {
        title: 'USERS',
        donors: true,
        charity: true,
        link: 'See all users',
        tally: true,
        icon: <AccountCircleIcon className='icon'/>,
      };
      break;
      case 'requests':
      data = {
        title: 'REQUESTS',
        donors: false,
        charity: false,
        link: 'View all Requests',
        tally: true,
        icon: <RequestQuoteIcon className='icon'/>,
      };
      break;
      case 'amounts':
      data = {
        title: 'AMOUNTS',
        donors: false,
        charity: false,
        link: 'All amounts',
        tally: true,
        icon: <AccountBalanceIcon className='icon'/>,
      };
      break;
      case 'ratings':
      data = {
        title: 'RATINGS',
        donors: false,
        charity: false,
        link: 'Who rates what',
        tally: true,
        icon: <StarsIcon className='icon'/>,
      };
      break;
      default:
        break;
  }

  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="donors">{data.donors && 'Donors: '}</span>
        <span className="charity">{data.charity && 'NGOs:'}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <span className="tally">{data.tally && 'Totals:' } {amount}</span>
        {data.icon}
      </div>
    </div>    
  )
};
export default Widget;
