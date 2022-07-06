import {Link} from "react-router-dom"

import  './Navbar.css'

export const Navbar=()=>{


    return (
       <div id='nav'>
         <h3 id='navh1'>Job Searching Portal</h3>
          <Link to={"/"} id='navlink'>Home</Link>
         
       </div>
    )
}