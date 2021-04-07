import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as HiIcons from "react-icons/hi";
import CompanyLogo from "./CompanyLogo";
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';


function Navbar() {
    const [sidebar, setSidebar]=useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <IconContext.Provider value={{color:'black'}}>
            <div className="navbar">
                <div className="main-navbar">
                    <span className="company-logo">
                        <CompanyLogo/>
                    </span>
                    <ul className="full-nav">
                        {/* <li>Home</li>
                        <li>Product</li> */}
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
                    <ul className="full-nav icon-items">
                        <li className="nav-text">
                            <Link>
                                <span><AiIcons.AiOutlineHome/></span>
                                <span><AiIcons.AiOutlineMail/></span>
                                <span><HiIcons.HiOutlineArrowCircleUp/></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <span className="menu-logo">
                <Link to="#" className="menu-bars">
                    {/* <FaIcons.FaBars onClick={showSidebar}/> */}
                    <BiIcons.BiAlignRight onClick={showSidebar}/>
                </Link>
                </span>
            </div>
            <nav className={sidebar? 'nav-menu active': 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bar">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                    <hr/>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar
