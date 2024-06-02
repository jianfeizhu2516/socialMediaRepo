import React from 'react'
import "./leftBar.scss"
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
const LeftBar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='leftBar'>
      <div className='leftBarContainer'>
        <div className='leftBarMenu'>
          <div className="leftBarUser">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>

          <div className="leftBarItem">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>

          <div className="leftBarItem">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>

          <div className="leftBarItem">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>

          <div className="leftBarItem">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>

          <div className="leftBarItem">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>

        </div>
        <hr />
        {/* Your shortcuts */}
        <div className='leftBarMenu'>
          <span className='leftBarThemeSpan'>Your shortcuts</span>

          <div className="leftBarItem">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>

          <div className="leftBarItem">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>

          <div className="leftBarItem">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>

          <div className="leftBarItem">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>

          <div className="leftBarItem">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>

        </div>
        <hr />
        {/* others */}

        <div className='leftBarMenu'>
          <span className='leftBarThemeSpan'>Others</span>

          <div className="leftBarItem">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>

          <div className="leftBarItem">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>

          <div className="leftBarItem">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LeftBar