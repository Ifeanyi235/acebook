import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import AppsIcon from '@mui/icons-material/Apps';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function NavBar (props) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    useEffect(() => {
        function handleResize() {
        setWindowWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
  

    function handleclickNoti () {
        (windowWidth > 867 && props.showNotification) ? props.setSingle(false) : props.setSingle(true);
        // When we go from below 868px to above it the dropdown disappears for menu, but the state drop still remains
        // set to true. This causes an issue with synchronizing showNotification and drop.
        // hence with the notification button is clicked both setDrop and showNotification are set to the same thing "!showNotification"
        props.setDrop(!props.showNotification);
        props.setNotification(!props.showNotification);
    }

    function handleclickNoti2 () {
        props.setNotification(!props.setDrop);
        props.setDrop();
    }

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
    }

    return (
        <div id="nav-bar" className={`grd bdr-bx rnd-shd`}>
            <form className="flx">
                <img src="./images/a-logo.png" alt="logo-welcome"></img>
                <div className="flx">
                    <SearchOutlinedIcon />
                   <input name="search" type="text" placeholder="Search Acebook"/> 
                </div>

                <div className="hd">
                    <SearchOutlinedIcon />
                </div>
                
            </form>

            <div className="grd">
                <a style={icon1} href="/home"><HomeOutlinedIcon className="home"/></a>
                <a  style={icon1} href="/message"><EmailIcon className="message"/></a>
                <a style={icon1} href="/group"><Groups2OutlinedIcon className="group" /></a>
            </div>

            <div className="flx ">
                {/* <a >Find Friends</a> */}
                <svg style={icon2} xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                </svg>
                {/* <AppsIcon style={icon2}/> */}
                <PeopleAltOutlinedIcon style={icon2} />
                <NotificationsIcon onClick={handleclickNoti} style={icon2}/>
                <AccountCircleOutlinedIcon onClick={() => props.setlogoutDrop(!props.logoutDrop)} style={profile}/>
            </div>

            <div className="hd">
                <AppsIcon onClick={handleclickNoti2} style={icon2} />
            </div>

            <div id="logoutDrop"  onClick={handleclickLogout} className={`rnd-shd rnd-edg ${props.logoutDrop ? "flx" : "hd"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
                    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"/>
                    <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"/>
                </svg>
                <button type="button">Sign Out</button>
            </div>
        </div>
    );
};

const icon1 = {
    height: "70%",
    width: "auto",
    color: "black"
}

const icon2 = {
    height: "100%",
    width: "auto",
    background: "#f2f4f7",
    borderRadius: "9999px",
    padding: "0.5rem",
    boxSizing: "border-box",
}

const profile = {
    height: "100%",
    width: "auto",
    background: "#f2f4f7",
    borderRadius: "9999px",
    
}

const findFriends = {
    height: "100%",
    width: "auto",
    alignContent: "center",
    fontSize: "100%",
    background: "#f2f4f7",
    boxSizing: "border-box",
    padding: "0.5rem 1rem",
    borderRadius: "2rem"

}

export default NavBar;