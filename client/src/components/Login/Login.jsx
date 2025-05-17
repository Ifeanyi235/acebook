import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginText from "./login-text";
import Details from "./Details";

function Login () {
    const navigate = useNavigate();

    useEffect(() => {
        async function handleAuthorization() {
          try {
            const response = await axios.get('http://localhost:5000/authorize', {
              withCredentials: true
            });
            const message = response.data.message;
            console.log("Authorize check:", message);
            if (message === "Success") {
              navigate("/home");
            }
          } catch (err) {
            console.error("Authorization error:", err);
          }
        }
    
        handleAuthorization(); // Call only when component mounts
    }, []);

    return (
        <div className="pri-bg full-ratio flx">
            <div className="flx" id="login">
                <LoginText/>
                <Details />
            </div>

        </div>
    );
};

export default Login;