import React, {useState, useRef, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function LoginInput (props) {

    const navigate = useNavigate();
    const username = useRef ();
    const password = useRef ();

    const [incorrect, setIncorrect] = useState(false);
    const [emailUsed, setemailUsed] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component unmounts
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    async function handleClick (event) {
        event.preventDefault();

        const formData = {
            "email": username.current.value,
            "password": password.current.value,
        }

        if (!(windowWidth < 680 && props.link === "/login")) {
            try {
                const response =  await axios.post('http://localhost:5000/api/login-form', formData, { withCredentials: true });
                const message = response.data.message;
                const data = response.data;
                console.log('Form submitted successfully:', message);
                message === "Success" && navigate('/home');
                message === "Incorrect Password" && setIncorrect(true);
                message === "Not User" && setemailUsed(false);
            
            } catch (error) {
                console.error('Error submitting form:', error);
            };
        } else {
            navigate('/login')
        }
    }

    return (
        <div className="grd">
            <div className="flx flx-drc gap">
                <input name="username" type="text" placeholder="Username or Email" onChange={() => setemailUsed(true)} ref={username}/>
                {!emailUsed && <p style={{color: "red"}}>Email does not exist</p>}
            </div>

            <div className="flx flx-drc gap">
                <input name="password" type="password" placeholder="Password" onChange={() => setIncorrect(false)} ref={password}/>
                {incorrect && <p style={{color: "red"}}>Incorrect Password</p>}
            </div>

            <button onClick={handleClick} type="submit">Login</button>
        </div>
    );
};

export default LoginInput;