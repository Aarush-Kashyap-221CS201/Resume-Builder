import React from "react";
import ResumeHeading from "./ResumeHeading.jsx";
import EducationSection from "./EducationSection.jsx";
import ExperienceSection from "./ExperienceSection.jsx";

function Display({personalInfo,educationInfo,experienceInfo,deleteEducation,deleteExperience}){
    return (
        <div id="display_box">
            <div id="resume_box">
                <ResumeHeading details={personalInfo}/>
                <EducationSection details={educationInfo} deleteEducation={deleteEducation}/>
                <ExperienceSection details={experienceInfo} deleteExperience={deleteExperience}/>
            </div>
        </div>
    );
}

export default Display;