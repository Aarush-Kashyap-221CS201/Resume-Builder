import React, { useState } from "react";

function Education({ educationFunc }) {
    const [schoolName, setSchoolName] = useState("");
    const [degree, setDegree] = useState("");
    const [fieldOfStudy, setFieldOfStudy] = useState("");
    const [graduationYear, setGraduationYear] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if ((!schoolName||!degree)||(!fieldOfStudy||!graduationYear)){ alert("Incomplete Form!"); return; }
        educationFunc({ schoolName, degree, fieldOfStudy, graduationYear });
    }

    return (
        <div className="actual_form_box">
            <div className="heading_box">
                <h1>Enter your Education Details</h1>
            </div>
            <form className="user_form" onSubmit={handleSubmit}>
                <input
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    name="schoolName"
                    type="text"
                    placeholder="Enter School/University Name"
                />
                <input
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    name="degree"
                    type="text"
                    placeholder="Enter Degree (e.g., B.Tech, M.Sc)"
                />
                <input
                    value={fieldOfStudy}
                    onChange={(e) => setFieldOfStudy(e.target.value)}
                    name="fieldOfStudy"
                    type="text"
                    placeholder="Enter Field of Study"
                />
                <input
                    value={graduationYear}
                    onChange={(e) => setGraduationYear(e.target.value)}
                    name="graduationYear"
                    type="number"
                    placeholder="Enter Graduation Year"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Education;
