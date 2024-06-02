import React from 'react'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from "react-router-dom";
import "./navbar.scss"
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="navbar">
      <div className="leftNav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social Club</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className='searchIcon'>
          <SearchOutlinedIcon />
          <input type="text" placeholder='Search' />
        </div>
      </div>

      <div className="rightNav">

        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />

        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar