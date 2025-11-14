import { useNavigate } from "react-router-dom";
function About()
{
    const navigate=useNavigate();
    return(
        <div>
            <h1>This is About Us</h1>
            <button onClick={()=>navigate("/")}>GoToHomePage</button>
        </div>
    )
}
export default About;