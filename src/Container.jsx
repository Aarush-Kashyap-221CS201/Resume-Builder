import React, { useState } from "react";
import Edit from "./Edit.jsx";
import Display from "./Display.jsx";

function Container(){
    const [personalInfo,setPersonalInfo]=useState(null);
    const [educationInfo,setEducationInfo]=useState(null);
    const [experienceInfo,setExperienceInfo]=useState(null);

    function personalFunc(newDetails){
        setPersonalInfo(newDetails);
    }

    function educationFunc(newDetails){
        if (educationInfo==null) setEducationInfo([newDetails]);
        else if (educationInfo.length==2){ alert("Only 2 Educations allowed at a time!"); return; }
        else setEducationInfo((educationInfo) => [...educationInfo, newDetails]);
    }

    function deleteEducation(index){
        const updatedDetails = educationInfo.filter((_, i) => i !== index);
        setEducationInfo(updatedDetails);
    }

    function experienceFunc(newDetails){
        if (experienceInfo==null) setExperienceInfo([newDetails]);
        else if (experienceInfo.length==2){ alert("Only 2 Educations allowed at a time!"); return; }
        else setExperienceInfo((experienceInfo) => [...experienceInfo, newDetails]);
    }

    function deleteExperience(index){
        const updatedDetails = experienceInfo.filter((_, i) => i !== index);
        setExperienceInfo(updatedDetails);
    }

    return (
        <div id="container">
            <Edit personalFunc={personalFunc} educationFunc={educationFunc} experienceFunc={experienceFunc}/>
            <Display personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo} deleteEducation={deleteEducation} deleteExperience={deleteExperience} />
        </div>
    );
}

export default Container;