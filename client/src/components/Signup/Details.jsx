import React, {useState, useRef} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Details () {

    const months = ["January","Febuary", "March", "April", "May", "June", "July", "August","September", "October","November", "December"];
    const currentYear = new Date().getFullYear();

    const [emailUsed, setemailUsed] = useState(false);
    const [gndVisibility, setgndVisibility] = useState(false);

    const fnameRef = useRef ();
    const snameRef = useRef ();
    const dateRef = useRef ();
    const monthRef = useRef ();
    const yearRef = useRef ();
    const genderRef = useRef ([]);
    const emailRef = useRef ();
    const passwordRef = useRef ();
    const othersRef = useRef ();

    const navigate = useNavigate();

    function handleChangeEmail () {
        return setemailUsed(false);
    }

    // async function handleSubmit (event) {
    //     event.preventDefault();
    //     const selectedGender = genderRef.current.find((radio) => radio.checked)?.value;

    //     const formData = {
    //         "fname": fnameRef.current.value,
    //         "sname": snameRef.current.value,
    //         "day": dateRef.current.value,
    //         "month": monthRef.current.value,
    //         "year": yearRef.current.value,
    //         "gender": selectedGender === "Custom" ? othersRef.current.value : selectedGender,
    //         "email": emailRef.current.value,
    //         "password": passwordRef.current.value
    //     };


    //     try {
    //         const response =  await axios.post('https://acebookserver.onrender.com/api/submit-form', formData, { withCredentials: true });
    //         const message = response.data.message;
    //         console.log('Form submitted successfully:', message);
    //         message === "Success" && navigate('/home');
    //         message === "Account already exists" && setemailUsed(true);
            
    //     } catch (error) {
    //         console.error('Error submitting form:', error.data.message);
    //     };

    // };

    function handleSubmit (event) {
        navigate('/home');
    }

    

    return (
        <div id="signup" className="flx flx-drc rnd-shd rnd-edg bdr-bx aln-slf-cnt">
            <section>
                <h2>Create a new account</h2>
                <h3>It's quick and easy.</h3>
            </section>

            <form className="grd bdr-bx fl-inpt" onSubmit={handleSubmit}>
                <div className="grd bdr-bx fl-inpt">
                    <input className="rnd-edg rnd-bdr" name="fname" type="text" placeholder="First name" ref={fnameRef} required/>
                    <input className="rnd-edg rnd-bdr" name="Surname" type="text" placeholder="Surname" ref={snameRef} required/>
                </div>

                <label for="Date of birth" className="flx flx-drc">
                    Date of birth
                    <div className="grd">
                        <select className="rnd-edg rnd-bdr" name="date" ref={dateRef}>
                            <option value="" selected disabled>Day</option>
                            {Array.from({length: 31}).map((_, index) => 
                                (<option value={index}>{(index + 1).toLocaleString("en-US", {minimumIntegerDigits: 2})}</option>
                            ))}
                        </select> 
                        <select className="rnd-edg rnd-bdr" name="month" ref={monthRef}>
                            <option value="" selected disabled>Month</option>
                            {months.map((month, index) => (<option value={month}>{month}</option>))}
                        </select> 
                        <select className="rnd-edg rnd-bdr" name="date" ref={yearRef}>
                            <option value="year" selected disabled>Year</option>
                            {Array.from({length: 100}).map((_, index) =>
                                (<option value={(99 -index) + (currentYear - 99)}>{(99 - index) + (currentYear - 99)}</option>))}
                        </select> 
                    </div>
                </label>

                <label for="Gender">
                    Gender
                    <div className="grd">
                        <span className="rnd-bdr rnd-edg" >Female <input name="gender" type="radio" value="Female" ref={(el) => (genderRef.current[0] = el)} onClick={() => setgndVisibility(false)} required/></span>
                        <span className="rnd-bdr rnd-edg" >Male <input name="gender" type="radio" value="Male" ref={(el) => (genderRef.current[1] = el)} onClick={() => setgndVisibility(false)} required/></span>
                        <span className="rnd-bdr rnd-edg" >Custom <input name="gender" type="radio" value="Custom" ref={(el) => (genderRef.current[2] = el)} onClick={() => setgndVisibility(true)} required/></span>
                    </div>

                </label>
                {gndVisibility && <div className="flx flx-drc fl-inpt ">
                    <select name="pronoun" className="rnd-bdr rnd-edg" ref={othersRef}>
                        <option value="" selected disabled>Select your pronoun</option>
                        <option value="she">She: "Wish her a happy birthday"</option>
                        <option value="he">He: "Wish him a happy birthday"</option>
                        <option value="they">They: "Wish them a happy birthday"</option>
                    </select>
                    <p>Your pronoun is visible to everyone</p>
                </div>}
                <input className="rnd-edg rnd-bdr hd" name="gndr" type="text" placeholder="Gender (Optional)" />
                <input className="rnd-edg rnd-bdr" name="email" type="email" placeholder="Email" onChange={handleChangeEmail} ref={emailRef} required/>
                {emailUsed && <p style={{color: "red"}}>Email already in use</p>}
                <input className="rnd-edg rnd-bdr" name="password" type="password" placeholder="New password" ref={passwordRef} required/>
                {/* <Link to="/home"><button type="submit" className="rnd-edg rnd-bdr">Sign Up</button></Link> */}
                <button type="submit" className="rnd-edg rnd-bdr">Sign Up</button>
                <a href="/login">Already have an account?</a>
            </form>
        </div>
    );
};

export default Details;