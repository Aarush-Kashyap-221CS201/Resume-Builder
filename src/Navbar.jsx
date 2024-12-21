import React, { useState } from "react";

function Navbar({handleItemClick}){

    return (
        <div id="navbar">
            <div onClick={()=>handleItemClick(1)}>Personal details</div>
            <div onClick={()=>handleItemClick(2)}>Education</div>
            <div onClick={()=>handleItemClick(3)}>Experience</div>
        </div>
    );
}

export default Navbar;