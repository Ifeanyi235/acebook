import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import NavBar from "../../reusables/nav-bar";
import Body from "../../reusables/body";

function Message () {

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
    
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
 
    useEffect(() => {
        async function handleAuthorization() {
          try {
            const response = await axios.get('http://localhost:5000/authorize', {
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
        return setDrop(dp === false ? dp : !drop)
    }

    return (
        <div id="message" onClick={() => logoutDrop && setlogoutDrop(false)} className="flx flx-drc">
            <NavBar 
                setDrop={handleDrop} 
                drop={drop} 
                setSingle={(state) => setSingle(state)} 
                single={single} 
                showNotification={showNotification} 
                setNotification={(state) => setShowNotification(state)}
                logoutDrop={logoutDrop} 
                setlogoutDrop={(state) => setlogoutDrop(state)}
            />

            <Body 
                setDrop={handleDrop} 
                drop={drop} 
                single={single} 
                setSingle={() => setSingle(false)} 
                showNotification={showNotification} 
                setNotification={(state) => setShowNotification(state)}
                logoutDrop={logoutDrop} 
                setlogoutDrop={(state) => setlogoutDrop(state)}
            />
        </div>
    )
}

export default Message;