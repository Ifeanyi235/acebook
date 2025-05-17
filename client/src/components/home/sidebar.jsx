import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { setpageState } from "../../page";
import { setpageSelection } from "../../pageSelection";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import TheatersIcon from '@mui/icons-material/Theaters';

function SideBar (props) {

    const dispatch = useDispatch();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

    function handleClick (action, text) {
        dispatch(setpageState(text));
        dispatch(setpageSelection(action));
    }

    

    return (
        <div className={`flx flx-drc ${props.drop && "opacity"}`} >
            <a onClick={() => handleClick("hide", "user")} className={props.drop && "unclickable"}><AccountCircleIcon /> User</a>
            <a onClick={() => handleClick("all", "home")} className={props.drop && "unclickable"} ><AccountCircleIcon /> Home</a>
            <a onClick={() => handleClick("hide", "friends")} className={props.drop && "unclickable"}><GroupIcon /> Friends</a>
            <a onClick={() => handleClick("videos", "videos")} className={props.drop && "unclickable"}><OndemandVideoIcon /> Videos</a>
            <a onClick={() => handleClick("photos", "photos")} className={props.drop && "unclickable"}><BookmarkIcon /> Photos</a>
            <a onClick={() => handleClick("saved", "saved")} className={props.drop && "unclickable"}><BookmarkIcon /> Saved</a>
            <a onClick={() => handleClick("hide", "welcome")} className={props.drop && "unclickable"}><img src="./images/a-logo.png"/> Welcome</a>
        </div>
    );
};

export default SideBar