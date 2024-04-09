import { useState } from 'react'

import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import Opener from './Opener'
import Background from './Background'
// import Page2 from './Page2'
import { Link } from '@inertiajs/react'
// import TopButton from './Topbtn'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Sidebar from './Sidebar'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
     
   
     
{/* <Link href="/">Home</Link> */}
<Routes>

          <Route path="/" element={<Opener/>}/>
          <Route path="/home" element={<Home/>}/>
           
          
         
        </Routes>

     
    </Router>
  )
}

export default App
