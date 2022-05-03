import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
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

</Routes>
</BrowserRouter>
 );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    );

