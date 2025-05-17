import React from "react";
import LoginInput  from "./login-input";

function Details () {
    return (
        <form class="sec-bg grd rnd-edg rnd-shd">
            <LoginInput link="/home" />
            <div class="grd">
                <a href="/forgot-password">Forgotten Password?</a>
                <a href="/SignUp" className="rnd-edg">Create New Account</a>
            </div>
        </form>
    );
};

export default Details;