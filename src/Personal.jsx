import React,{useState} from "react"

function Personal({personalFunc}){
    const [name,setName]=useState("");
    const [location,setLocation]=useState("");
    const [phoneno,setPhoneno]=useState("");
    const [email,setEmail]=useState("");

    function handleSubmit(event){
        event.preventDefault();
        if (((!name)||(!location))||((!phoneno)||(!email))){ alert("Incomplete Form!"); return; }
        personalFunc({name,location,phoneno,email});
    }

    return (
        <div className="actual_form_box" onSubmit={handleSubmit}>
            <div className="heading_box"><h1>Enter your Personal Details</h1></div>
            <form className="user_form">
                <input value={name} onChange={(e)=>setName(e.target.value)} name="name" type="text" placeholder="Enter your Full Name"/>
                <input value={location} onChange={(e)=>setLocation(e.target.value)} name="location" type="text" placeholder="Enter your location"/>
                <input value={phoneno} onChange={(e)=>setPhoneno(e.target.value)} name="phoneno" type="tel" placeholder="Enter your Phone Number"/>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} name="email" type="email" placeholder="Enter your Email"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Personal;