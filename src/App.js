import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Link,Route,Routes,useNavigate } from "react-router-dom";
import Home from './Home';
import NotFound from './NotFound';
import axios from 'axios';
import { useState,useLayoutEffect, useRef, useEffect } from 'react';
import UploadPage from './UploadImage';
import About from './About';
import Plants from './Plants';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

function App() {

  const [user,setUser] = useState('')




  return (
   <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path ='/image' element={<UploadPage />}></Route> 
      <Route path ='*' element={<NotFound />}></Route>
    </Routes>

   
   </BrowserRouter>
  );
  
}

export default App;
