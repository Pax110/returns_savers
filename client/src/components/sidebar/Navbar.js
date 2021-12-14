//rafc and enter -  Extension ES7 React/Redux/Graphic
import React, {useState, useEffect } from 'react'
import * as FaIcons  from "react-icons/fa"
import * as AiIcons  from "react-icons/ai"
import { Link } from 'react-router-dom'
//import { IoMdRadio } from 'react-icons/io'
import { SidebarData} from './SidebarData'
import './Navbar.css'
import { IconContext} from 'react-icons'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const [userName, setUserName] = useState('')
    const showSidebar = () => setSidebar(!sidebar)
    const isLogin = true
    useEffect(()=>{
      const getUser = async () => {
        if(isLogin){
          console.log('Login successful in navbar')
          let userName = await fetch('/auth/loggedInUser')
          //let userName1 = await userName.json()
          console.log(userName)
          //setUserName(userName)
        }
      }
      getUser()
    },[])

  return (
      <>     
    <IconContext.Provider value={{color: '#fff'}}>
    <div className="navbar sticky-top">
      {/* <h1 className="navbar">Test</h1> */}
      <Link to="#" className="menu-bars"> 
        <FaIcons.FaBars onClick={showSidebar}/>
      </Link>
      {/* <label> Hello {userName}</label> */}
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
