import React from "react";

function postImage (props) {
    return (
        <div id="postimage" className="">
            <img src={props.image} alt="post"/>
        </div>
    );
};

export default postImage;