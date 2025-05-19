import React, {useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AcebookLogo from "../../reusables/FacebookLogo";
import Details from "./Details";

function Signup () {
    const navigate = useNavigate();
 
    useEffect(() => {
        async function handleAuthorization() {
          try {
            const response = await axios.get('https://acebookserver.onrender.com/authorize', {
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
        <div className="pri-bg flx flx-drc bg-pad">
            <AcebookLogo />
            <Details />
        </div>

    );
};

export default Signup;