import React from "react";

function ExperienceSection({ details, deleteExperience }) {
    return (
        <div id="resume_experience_box">
            <h2>Experience Details</h2>
            {(!details || details.length === 0) ? (
                <p>No experience details provided yet.</p>
            ) : (
                details.map((entry, index) => (
                    <div key={index} className="experience_entry">
                        <h3>{entry.companyName}</h3>
                        <p>Position: {entry.positionTitle}</p>
                        <p>Responsibilities: {entry.responsibilities}</p>
                        <p>From: {entry.dateFrom} To: {entry.dateUntil}</p>
                        <img 
                            src={"/assets/delete.png"}
                            className="delete_icon"
                            onClick={() => deleteExperience(index)} 
                        />
                    </div>
                ))
            )}
        </div>
    );
}

export default ExperienceSection;
