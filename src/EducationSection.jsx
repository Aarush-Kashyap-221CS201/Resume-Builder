import React from "react";

function EducationSection({details,deleteEducation}){
    return (
        <div id="resume_education_box">
            <h2>Education Details</h2>
            {(!details||details.length==0) ? (
                <p>No education details provided yet.</p>
            ) : (
                details.map((entry, index) => (
                    <div key={index} className="education_entry">
                        <h3>{entry.schoolName}</h3>
                        <p>{entry.degree} in {entry.fieldOfStudy}</p>
                        <p>Graduation Year: {entry.graduationYear}</p>
                        <img src={"/assets/delete.png"} className="delete_icon" onClick={()=>deleteEducation(index)}/>
                    </div>)
                )
            )}
        </div>
    );
}

export default EducationSection;