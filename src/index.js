import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Login2 from './pages/Login/Login2';
import Adminhome from './pages/adminhome/Adminhome';

import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  return (
<BrowserRouter>
<Routes>
 <Route path="/" element={<Home />} />
 <Route path="about" element={<About />} />
 <Route path="events" element={<Events />} />
 <Route path="contact" element={<Contact />} />
 <Route path="login" element={<Login />} />
 <Route path="login2" element={<Login2 />} />
 <Route path="admin" element={<Adminhome />}/>

</Routes>
</BrowserRouter>
 );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    );

