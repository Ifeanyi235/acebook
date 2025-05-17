import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setpageState } from "../page";
import { setpageSelection } from "../pageSelection";
import axios from "axios";
import Notification from "./notification";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Dropdown (props) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function handleclickLogout () {
      try {
          const response = await axios.get('https://acebook-ct46.onrender.com/logout', {
          withCredentials: true
          });
          const message = response.data.message;
          console.log("Authorize check:", response.data.message);
          if (message === "Logout") {
              navigate("/login");
          }
      } catch (err) {
          console.error("Authorization error:", err);
      }
    };

    function handleClick (action, text) {
        dispatch(setpageState(text));
        dispatch(setpageSelection(action));
        navigate("/home");
    }

    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


    return (
        <div id="dropdown" className={(!props.showNotification && windowWidth > 867) ? "hideDrop" : (props.drop ? "showDrop" : "hideDrop")}>
            {props.showNotification && <Notification setNotification={() => props.setNotification(!props.showNotification)} setSingle={props.setSingle} setDrop={props.setDrop} windowWidth={windowWidth}/>}
            
            {(!(windowWidth < 581  && props.showNotification) && !props.single) && <div id="menu" className="dropdown">
                <a onClick={() => handleClick("hide", "user")}><AccountCircleIcon />User</a>
                <a onClick={() => handleClick("all", "home")}><HomeOutlinedIcon />Home</a>
                <a onClick={() => props.setNotification(!props.showNotification)}><NotificationsIcon />Notifications</a>
                <a onClick={() => handleClick("photos", "photos")} ><BookmarkIcon />Photos</a>
                <a onClick={() => handleClick("videos", "videos")}><OndemandVideoIcon />Videos</a>
                <a onClick={() => handleClick("hide", "friends")}><GroupIcon />Friends</a>
                <a onClick={() => handleClick("hide", "friends")}>
                  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                      <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                  </svg>Add friends
                </a>
                <a onClick={() => handleClick("saved", "saved")}><BookmarkIcon />Saved</a>
                <a onClick={handleclickLogout}>                
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
                    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"/>
                    <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"/>
                  </svg>Sign Out
                </a>     
            </div>}
        </div>
    )
};

export default Dropdown;


