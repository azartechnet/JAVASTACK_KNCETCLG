import React from "react";
import { useNavigate } from "react-router-dom";

function Home()
{
    const navigate=useNavigate();

    const goToAbout=()=>{
        navigate("/about")
    }
    const goToContact=()=>{
        navigate("/contact")
    }
    return(
        <div>
            <h1>Welcome to the Home Page</h1>
            <button onClick={goToAbout}>GoToAbout</button>
            <button onClick={goToContact}>GoToContact</button>
        </div>
    )
}
export default Home;