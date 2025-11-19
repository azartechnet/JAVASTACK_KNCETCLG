import { Outlet,Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Layout=()=>{
    return(
        <>
           <nav className="navbar navbar-expand-lg bg bg-info">
               <div className="container-fluid">
                  <Link className="navbar-brand" to="/">MySite</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav"> 
                      <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                           <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/nopage">NoPage</Link>
                        </li>
                      </ul>
                  </div>
               </div>
           </nav>
           <Outlet/>
        </>
    )
}
export default Layout;