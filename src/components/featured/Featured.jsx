import './featured.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'

export const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h2 className='title'>Total Donor Funds: </h2>
        <MoreVertIcon />
      </div>
      <div className="bottom">
        <div className="statusbar">
          <CircularProgressbar value = {70} text={'70%'} />
        </div>
      </div>
    </div>
  )
}
