import React from 'react'
import "./rightbar.scss"
const RightBar = () => {
  return (
    <div className='rightBarContainer'>

      <div className='rightBarEachContainer'>
        <span>Suggestions for you</span>
        <div className='rightBarItem'>

          <div className="rightBarUserInfo">
            <img src="" alt="" />
            <span>Jane Doe</span>
          </div>

          <div className='rightBarButtonGroup'>
            <button className='rightBarButton'>follow</button>
            <button className='rightBarButton'>dismiss</button>
          </div>

        </div>
      </div>
      {/* middlecontainer */}
      <div className='rightBarEachContainer'>
        <span>Suggestions for you</span>
        <div className='rightBarItem'>

          <div className="rightBarUserInfo">
            <img src="" alt="" />
            <p>   
              <span>Jane Doe  changed their profile picture</span>
             
            </p>
          </div>

          <span className='rightBarTimeAgo'>1 min ago</span>

        </div>
      </div>
      {/* bottomContainer */}
      <div className='rightBarEachContainer'>
        <span>Online Friends</span>
        <div className='rightBarItem'>

          <div className="rightBarUserInfo">
            <img src="" alt="" />
            <div className='online'/>
            <span>Jane Doe</span>
          </div>

          {/* <div className='rightBarButtonGroup'>
            <button className='rightBarButton'>follow</button>
            <button className='rightBarButton'>dismiss</button>
          </div> */}

        </div>
      </div>


    </div>
  )
}

export default RightBar