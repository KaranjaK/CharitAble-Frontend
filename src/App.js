import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { Adminhome } from './pages/adminhome/Adminhome';

function App() {

  return(
      <div className='App'>
        <Adminhome />
        <BrowserRouter>
          <Routes>

          </Routes>
        </BrowserRouter>
      </div>

 )
}

export default App;
