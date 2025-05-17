import React, {useState, useEffect} from "react";
import Dropdown from "./dropdown";
import Zoom from '@mui/material/Zoom';


function Body (props) {
     
    const [side, setSide] = useState(false);
    const [mProfile, setmProflie] = useState("group");
    const [hideProfile, sethideProfile] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
            window.innerWidth > 767 && setSide(false);
        }
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component unmounts
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    // setInterval (() => {
    //     const body = document.querySelector("body");
    //     const body_width = parseFloat(window.getComputedStyle(body).width);

    //     body_width > 767 && setSide(false);
    // }, 10);

    (windowWidth > 867 && !props.showNotification) && props.setDrop(false);

    const style1 = {
        alignSelf: "start",
        background: "rgba(242, 244, 247, 0.3)",
        border: "none",
        outline: "none",
    }

    const style2 = {
        alignSelf: "end",
        background: "var(--font-blue)"
    }

    const sideStyle = {
        display: side && "flex",
        marginRight: side && "1.5rem"
    }

    const textStyle = {
        display: side && "none"
    }

    return (
        <div id="mbody" className="grd">
            <div className={`flx flx-drc ${props.drop && "opacity"}`} style={sideStyle} >
                <div onClick={() => setSide(false)}>
                    <img src="./images/a-logo.png"/>
                    <section className="flx flx-drc">
                        <h4>Peter pepper</h4>
                        <p>How do we go about it nowf3ond2 3ddxyy ebcbicbkcbe oeuiceu?</p>
                    </section>
                </div>

                <div>
                    <img src="./images/a-logo.png"/>
                    <section className="flx flx-drc">
                        <h4>Peter pepper</h4>
                        <p>How do we go about it nowf3ond2 3ddxyy?</p>
                    </section>
                </div>

                <div>
                    <img src="./images/a-logo.png"/>
                    <section className="flx flx-drc">
                        <h4>Peter pepper</h4>
                        <p>How do we go about it nowf3ond2 3ddxyy?</p>
                    </section>
                </div>

                <div>
                    <img src="./images/a-logo.png"/>
                    <section className="flx flx-drc">
                        <h4>Peter pepper</h4>
                        <p>How do we go about it nowf3ond2 3ddxyy?</p>
                    </section>
                </div>

                <div>
                    <img src="./images/a-logo.png"/>
                    <section className="flx flx-drc">
                        <h4>Peter pepper</h4>
                        <p>How do we go about it nowf3ond2 3ddxyy?</p>
                    </section>
                </div>

                <div>
                    <img src="./images/a-logo.png"/>
                    <section className="flx flx-drc">
                        <h4>Peter pepper</h4>
                        <p>How do we go about it nowf3ond2 3ddxyy?</p>
                    </section>
                </div>
            </div>

            <div className={!props.Body ? "flx bdr-bx" : "hideDrop"} style={textStyle}>

                {hideProfile && <div className="flx bdr-bx" id="message-hd">
                    <div className="flx">
                        
                        <svg onClick={() => setSide(true)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-left hd" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"/>
                        </svg>
                        <h2>Peter Chuku</h2>
                    </div>

                    <Zoom in={hideProfile} timeout={1000}>
                        <svg onClick={() => sethideProfile(!hideProfile)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-down-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M7.364 12.5a.5.5 0 0 0 .5.5H14.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 14.5 0h-10A1.5 1.5 0 0 0 3 1.5v6.636a.5.5 0 1 0 1 0V1.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H7.864a.5.5 0 0 0-.5.5"/>
                            <path fill-rule="evenodd" d="M0 15.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H1.707l8.147-8.146a.5.5 0 0 0-.708-.708L1 14.293V10.5a.5.5 0 0 0-1 0z"/>
                        </svg>
                    </Zoom>

                </div>}
                
                {hideProfile && <div className="flx flx-drc bdr-bx">

                    <div className="flx bdr-bx" id="text">
                        <div className="flx bdr-bx" style={style1}>
                            <p > Whtasuopp rxgxexggex xgtrxtgxtr xrtgrtgrtxhyhyhhyhyx xyhyxhyyh ytyxythyh xyhyxhyyhxyh
                                xyhyhyrhryxhyyx yhxyhxryhry xhyhyujurhehx rynyrxyhrhcyrxh6e ryxyhchrynxrrtx hxhh6rhrhu6xh6h6hrh hhchthhxtrhtrhc
                                yjcyrju756y6y5ta 56sr7j7jcy6sy6y6y6s4y6y7u7u7juj7tgrfeeswswswzwwswdvdvfhthttjyj
                            </p>
                        </div>

                        <div className="flx bdr-bx" style={style2}>
                            <p > Whtasuopp Whtasuopp rxgxexggex xgtrxtgxtr xrtgrtgrtxhyhyhhyhyx xyhyxhyyh ytyxythyh xyhyxhyyhxyh
                            xyhyhyrhryxhyyx yhxyhxryhry xhyhyujurhehx rynyrxyhrhcyrxh6e ryxyhchrynxrrtx hxhh6rhrhu6xh6h6hrh hhchthhxtrhtrhc
                            yjcyrju756y6y5ta 56sr7j7jcy6sy6y6y6s4y6y7u7u7juj7tgrfeeswswswzwwswdvdvfhthttjyj</p>
                        </div>

                    </div>

                    <form className="flx ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z"/>
                        </svg>

                        <input name="message" type="text" placeholder="Write your message"/>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                        </svg>
                    </form>

                </div>}

                {!hideProfile && <div id="message-profile" className="flx flx-drc">
                    <div className="flx">
                        <img src="./images/a-logo.png" alt="logo-welcome"></img>
                        <section className="flx flx-drc">
                            <Zoom in={!hideProfile} timeout={1000}>
                                <svg onClick={() => sethideProfile(!hideProfile)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                                </svg>
                            </Zoom>

                            <h2>Peter Chuku</h2>
                            <h3>Ichuku235@gmail.com</h3>
                            <p>Friends since 2003</p>
                        </section>
                    </div>

                    <div className="grd">
                        <button className="rnd-edg" onClick={() => setmProflie("group")}>Groups</button>
                        <button className="rnd-edg" onClick={() => setmProflie("video")}>Videos</button>
                        <button className="rnd-edg" onClick={() => setmProflie("photo")}>Photos</button>
                    </div>

                    <div className={`flx ${mProfile === "group" ? "group" : "media"}`}>
                        <div id="grp_frds">
                            <div className="flx rnd-edg">
                                <div className="flx">
                                    <img src="./images/a-logo.png" alt="logo-welcome"></img>
                                    <section className="flx flx-drc">
                                        <h2>Question for the gods</h2>
                                        <h3>What is real or unreal? Who decides?</h3>
                                    </section>
                                </div>

                                <h3>Admin</h3>
                            </div>

                            <div className="flx rnd-edg">
                                <div className="flx">
                                    <img src="./images/a-logo.png" alt="logo-welcome"></img>
                                    <section className="flx flx-drc">
                                        <h2>Question for the gods</h2>
                                        <h3>What is real or unreal? Who decides?</h3>
                                    </section>
                                </div>

                                <h3>Member</h3>
                            </div>

                            <div className="flx rnd-edg">
                                <div className="flx">
                                    <img src="./images/a-logo.png" alt="logo-welcome"></img>
                                    <section className="flx flx-drc">
                                        <h2>Question for the gods</h2>
                                        <h3>What is real or unreal? Who decides?</h3>
                                    </section>
                                </div>

                                <h3>Admin</h3>
                            </div>

                            <div className="flx rnd-edg">
                                <div className="flx">
                                    <img src="./images/a-logo.png" alt="logo-welcome"></img>
                                    <section className="flx flx-drc">
                                        <h2>Question for the gods</h2>
                                        <h3>What is real or unreal? Who decides?</h3>
                                    </section>
                                </div>

                                <h3>Admin</h3>
                            </div>

                            <div className="flx rnd-edg">
                                <div className="flx">
                                    <img src="./images/a-logo.png" alt="logo-welcome"></img>
                                    <section className="flx flx-drc">
                                        <h2>Question for the gods</h2>
                                        <h3>What is real or unreal? Who decides?</h3>
                                    </section>
                                </div>

                                <h3>Admin</h3>
                            </div>
                        </div>

                        <div id="messageMedia">
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                            <img src="./images/a-logo.png" alt="logo-welcome"></img>
                        </div>
                    </div>


                </div>}

            </div>

            <Dropdown  
                drop={props.drop} 
                setDrop={props.setDrop} 
                single={props.single} 
                setSingle={props.setSingle}
                showNotification={props.showNotification} 
                setNotification={(state) => props.setNotification(state)}/>
        </div>
    )
}

export default Body;