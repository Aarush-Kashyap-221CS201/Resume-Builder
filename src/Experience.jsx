import React, { useState } from "react";

function Experience({ experienceFunc }) {
    const [companyName, setCompanyName] = useState("");
    const [positionTitle, setPositionTitle] = useState("");
    const [responsibilities, setResponsibilities] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateUntil, setDateUntil] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if (
            !companyName ||
            !positionTitle ||
            !responsibilities ||
            !dateFrom ||
            !dateUntil
        ) {
            alert("Incomplete Form!");
            return;
        }
        experienceFunc({
            companyName,
            positionTitle,
            responsibilities,
            dateFrom,
            dateUntil,
        });
    }

    return (
        <div className="actual_form_box">
            <div className="heading_box">
                <h1>Enter your Work Experience Details</h1>
            </div>
            <form className="user_form" onSubmit={handleSubmit}>
                <input
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    name="companyName"
                    type="text"
                    placeholder="Enter Company Name"
                />
                <input
                    value={positionTitle}
                    onChange={(e) => setPositionTitle(e.target.value)}
                    name="positionTitle"
                    type="text"
                    placeholder="Enter Position Title"
                />
                <input
                    value={responsibilities}
                    onChange={(e) => setResponsibilities(e.target.value)}
                    name="responsibilities"
                    placeholder="Enter Main Responsibilities"
                    type="text"
                />
                <div id="date_box">
                    <input
                        value={dateFrom}
                        onChange={(e) => setDateFrom(e.target.value)}
                        name="dateFrom"
                        type="date"
                        placeholder="Start Date"
                    />
                    <input
                        value={dateUntil}
                        onChange={(e) => setDateUntil(e.target.value)}
                        name="dateUntil"
                        type="date"
                        placeholder="End Date"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Experience;
