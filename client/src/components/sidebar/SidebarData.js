import React from 'react'
import * as FaIcons  from "react-icons/fa"
import * as AiIcons  from "react-icons/ai"
import * as IoIcons  from "react-icons/io"

export const SidebarData = [
    
 
    {
        title: 'Home',
        path: '/home',
        icon: <IoIcons.IoMdHome/>,
        cName: 'nav-text'
    },
    
    {
        title: 'New Return',
        path: '/new',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    // {
    //     title: 'My Returns',  //this should be for a user to view their own returns
    //     path: '/MyReturns',   //we will need to update this path in the future as this is fake for now
    //     icon: <FaIcons.FaCartPlus />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'About Us',
    //     path: '/about',
    //     icon: <IoIcons.IoMdPeople/>,
    //     cName: 'nav-text'
    // },
    {
        title: 'Help',
        path: '/help',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'My Returns',
        path: '/returnSavers',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Admin/Users',
        path: '/profile',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    }

]