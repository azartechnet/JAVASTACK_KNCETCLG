import { useNavigate } from "react-router-dom";
function Contact()
{
    const navigate=useNavigate();
    return(
        <div>
            <h1>This is Contact Us</h1>
            <button onClick={()=>navigate("/")}>GoToHomePage</button>
        </div>
    )
}
export default Contact;