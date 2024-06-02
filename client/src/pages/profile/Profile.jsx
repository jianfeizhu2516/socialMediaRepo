import "./profile.scss"
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
const Profile = () => {
  return (
    <div className="profileContainer">
      <div className="images">
        <img src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="" className="cover" />
        <img src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt="" className="profileImg" />
      </div>

      <div className="profileInnerContainer">
        <div className="uInfo">
          <div className="uLeft">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>

          <div className="uCenter">
            <span>Jane Doe</span>
            <div className="uCenterInfo">

              <div className="uCenterInfoItem">
                <PlaceIcon />
                <span>Canada</span>
              </div>

              <div className="uCenterInfoItem">
                <LanguageIcon />
                <span>Jianfei.dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>

          <div className="uRight">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}
export default Profile;