import React from "react";

function Details () {
    return (
        <form className="flx flx-drc rnd-edg rnd-bdr rnd-shd">
            <section> 
                <h2>Find Your Account</h2>
            </section>
            <div className="flx flx-drc">
                <p>Please enter your email address or mobile number to search for your account.</p>
                <input className="rnd-edg rnd-bdr bdr-bx" name="email" type="email" placeholder="Email address"/>
            </div>
            <div className="flx">
                <a href="">Cancel</a>
                <button type="submit">Search</button>
            </div>
        </form>
    );
};

export default Details;