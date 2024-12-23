import React from "react";

function ResumeHeading({details}){
    const name=((details)&&(details.name))?(details.name):("FULL NAME");
    const location=(details&&details.location)?(details.location):("Location");
    const email=(details&&details.email)?(details.email):("Email");
    const phoneno=(details&&details.phoneno)?(details.phoneno):("Phone Number");

    return (
        <div id="resume_heading_box">
            <div id="resume_name_box">
                <h1>{`${name}`}</h1>
            </div>
            <div id="resume_personal_box">
                <div><img src={"/assets/location.png"} /><h1>{`${location}`}</h1></div>
                <div><img src={"/assets/email.png"} /><h1>{`${email}`}</h1></div>
                <div><img src={"/assets/phone.png"} /><h1>{`${phoneno}`}</h1></div>
            </div>
        </div>
    );
}

export default ResumeHeading;