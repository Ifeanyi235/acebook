import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../../reusables/nav-bar";
import Body from "./body";

function Home () {

    const [drop, setDrop] = useState(false);
    const [single, setSingle] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [logoutDrop, setlogoutDrop] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 869) {
                setSingle(false);
                setlogoutDrop(false);
            }  
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
 
    useEffect(() => {
        async function handleAuthorization() {
          try {
            const response = await axios.get('https://acebookserver.onrender.com/authorize', {
              withCredentials: true
            });
            const message = response.data.message;
            console.log("Authorize check:", message);
            if (message !== "Success") {
              navigate("/login");
            }
          } catch (err) {
            console.error("Authorization error:", err);
          }
        }
    
        handleAuthorization(); // Call only when component mounts
    }, []);

    function handleDrop (dp) {
        return setDrop(dp === (false || true) ? dp : !drop)
    }

    return (
        <div onClick={() => logoutDrop && setlogoutDrop(false)} id="home" className="flx flx-drc">
            <NavBar logoutDrop={logoutDrop} setlogoutDrop={(state) => setlogoutDrop(state)} setDrop={handleDrop} drop={drop} setSingle={(state) => setSingle(state)} single={single} showNotification={showNotification} setNotification={(state) => setShowNotification(state)}/>
            <Body drop={drop} setDrop={handleDrop} single={single} setSingle={() => setSingle(false)} showNotification={showNotification} setNotification={(state) => setShowNotification(state)}/>
        </div>
    );
};

export default Home;