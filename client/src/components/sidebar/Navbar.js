//rafc and enter -  Extension ES7 React/Redux/Graphic
import React, {useState} from 'react'
import * as FaIcons  from "react-icons/fa"
import * as AiIcons  from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
import {Button} from 'react-bootstrap'

//import { IoMdRadio } from 'react-icons/io'
import { SidebarData} from './SidebarData'
import './Navbar.css'
import { IconContext} from 'react-icons'

const Navbar = ({username,setUser}) => {
 const navigate = useNavigate()
 
    const [sidebar, setSidebar] = useState(false)
    
    const showSidebar = () => setSidebar(!sidebar)   
 
    function tryLogout () {
        async function logout(){
            let logout = await fetch('/auth/logout')
            console.log("inside trylogout",logout)
            setUser(null)
            navigate('/')
        }
        
        logout()
    }
    
  return (
      <>     
    <IconContext.Provider value={{color: '#fff'}}>
    <div className="navbar sticky-top">
      <Link to="#" className="menu-bars"> 
        <FaIcons.FaBars onClick={showSidebar}/>
      </Link>
       <label>{username && ' Hello ' + username }</label> 
       {username && <button onClick={tryLogout} type="button" class="btn btn-info">Logout</button>
}
    </div>
    
   
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className="navbar-toggle">
                <Link to="#" className='menu-bars'>
                <AiIcons.AiOutlineClose/>
                </Link>
            </li>
            {SidebarData.map((item, index) => {
                return(
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
