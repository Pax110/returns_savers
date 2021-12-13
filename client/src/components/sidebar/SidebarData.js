import React from 'react'
import * as FaIcons  from "react-icons/fa"
import * as AiIcons  from "react-icons/ai"
import * as IoIcons  from "react-icons/io"

export const SidebarData = [
    
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About Us',
        path: '/about',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'All Products',
        path: '/returnSavers',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'New Product ',
        path: '/new',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Register',
        path: '/register',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Log In',
        path: '/login',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Help',
        path: '/help',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
]