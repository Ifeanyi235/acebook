import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setpageState } from "../../page";
import { setpageSelection } from "../../pageSelection";
import PostBox from "../../reusables/postBox";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmergencyRecordingIcon from '@mui/icons-material/EmergencyRecording';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MoodIcon from '@mui/icons-material/Mood';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Posts (props) {

    const pageState = useSelector((state) => state.pageState.ispageState);
    const pageSelection = useSelector((state) => state.pageSelection.ispageSelection);

    return(
        pageSelection != "hide" && <div id="posts" className="flx flx-drc">
        
            <div className="grd bdr-bx rnd-bdr rnd-edg rnd-shd">
                <div className="flx">
                    <AccountCircleOutlinedIcon/>
                    {/* <a href=""><img src="" alt="profile picture"/></a> */}
                    <a href="">What's on your mind, User?</a>
                </div>

                <div className="grd">
                    <a className="flx"><EmergencyRecordingIcon /> <span>Live Video</span></a>
                    <a className="flx"><PhotoLibraryIcon /><span>Photo/Video</span></a>
                    <a className="flx"><MoodIcon /><span>Feeling/Activity</span></a>
                </div>
            </div>

            <div className="flx rnd-edg rnd-shd rnd-bdr">
                <a className="flx">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                    <section className="flx flx-drc">
                        <h1>{pageSelection}</h1>
                        <p>Share a photo or write something.</p>
                    </section>
                </a>
            </div>

            <PostBox />
            <PostBox />
            <PostBox />
            <PostBox />

        </div>
    )

};

export default Posts;