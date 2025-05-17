import React from "react";
import LoginInput from "../Login/login-input";
import Details from "./Details";
import FacebookLogo from "../../reusables/FacebookLogo"

function ForgotPassword () {
    return (
        <div id="frg-pss" class="flx flx-drc">
            <FacebookLogo />
            <form class="flx">
                <LoginInput link="/login" />
            </form>

            <div class="flx flx-drc">
                <Details />
            </div>

        </div>
    );
};

export default ForgotPassword;