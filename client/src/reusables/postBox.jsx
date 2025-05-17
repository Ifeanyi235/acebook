import React from "react";
import PostImage from "../components/home/postImage";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function postBox () {
    return (
        <div id="postBox" className="flx flx-drc rnd-edg rnd-bdr">
            <div className="flx flx-drc">
                <div className="flx">
                    <img src="./images/a-logo.png" alt="profile"/>
                    <section className="flx flx-drc">
                        <p>ambrose</p>
                        <p>March 12</p>
                    </section>
                </div>
                
                <p>
                    Random thoughts!
                    I've always been an advocate of Christians knowing the scriptures for themselves and having a personal relationship with God, whom they can always go to in times of need, confusion or conflicts.
                </p>
            </div>

            <PostImage image="./images/a-logo.png"/>

            
            <div className="flx flx-drc">
                <div className="flx">
                    <section className="flx">
                        😊😂❤️ 31
                    </section>

                    <section className="flx">
                        102 💬 95 <ShareOutlinedIcon />
                    </section>
                </div>


                <div className="grd">
                    <a className="flx">
                        <ThumbUpOutlinedIcon />
                        Like
                    </a>

                    <a className="flx">
                        <ChatBubbleOutlineOutlinedIcon />
                        Comment
                    </a>

                    <a className="flx">
                        <ShareOutlinedIcon />
                        Share
                    </a>

                </div>
            </div>

        </div>
    )
}

export default postBox;