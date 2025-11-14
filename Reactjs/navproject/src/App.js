import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
function App()
{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  )
}
export default App;