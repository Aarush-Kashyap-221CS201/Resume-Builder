import React,{useState} from "react";
import Navbar from "./Navbar.jsx";
import Personal from "./Personal.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

function Edit({personalFunc,educationFunc,experienceFunc}){
    const [item,setItem]=useState(1);

    function handleItemClick(newItem){
        setItem(newItem);
    }

    const components = {
        1: <Personal personalFunc={personalFunc}/>,
        2: <Education educationFunc={educationFunc}/>,
        3: <Experience experienceFunc={experienceFunc}/>,
    };

    return (
        <div id="edit_box">
            <Navbar handleItemClick={handleItemClick}/>
            <div id="form_box">
                {components[item]}
            </div>
        </div>
    );
}

export default Edit;