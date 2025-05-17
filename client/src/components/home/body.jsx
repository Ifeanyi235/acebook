import React, {useState, useEffect} from "react";
import SideBar from "./sidebar";
import Post from "./posts";
import GroupBar from "./groupbar";
import Dropdown from "../../reusables/dropdown";
import Notification from "../../reusables/notification";

function Body (props) {

    // const [postSelection, setpostSelection ] = useState("All");
    // const [pageState, setpageState] = useState("home");
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

    // function handlePost (postState) {
    //     return setpostSelection(postState);
    // }

    // function handlePage (page) {
    //     return setpageState(page);
    // }

    props.drop && ((windowWidth === 867 && !props.showNotification) && props.setDrop(false));
    
    return (
        <div className="grd">
            <SideBar 
                // postState={handlePost} 
                // setPage={handlePage} 
                drop={props.drop} 
                showNotification={props.showNotification} 
                single={props.single}
            />
            <Post 
                // postState={postSelection} 
                // page={pageState}
            />
            <GroupBar 
                // postState={postSelection} 
                // page={pageState}
            />
            <Dropdown 
                // postState={handlePost} 
                // setPage={handlePage} 
                drop={props.drop} 
                setDrop={props.setDrop} 
                single={props.single} 
                setSingle={props.setSingle}
                showNotification={props.showNotification} 
                setNotification={(state) => props.setNotification(state)}
            />
        </div>
    );
};

export default Body;