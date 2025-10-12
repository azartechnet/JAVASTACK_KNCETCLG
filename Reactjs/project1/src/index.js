import React from "react";
import ReactDOM from "react-dom/client";

/*function Sample()
{
  return(
    <h1>This is Heading</h1>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

/*const App=()=>{
  return(
    <>
     <h1>Welcome</h1>
    <h2>Welcome</h2>
    </>
   
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Dynamic Rendering

/*const Sample=()=>{
  const name="azar";
  const age=30;
  return(
    <div>
      <h1>Hello:{name}</h1>
      <p>Your age is:{age}</p>
      <p>Todays date is::{new Date().toLocaleDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Without JSX

// const myelem1=React.createElement("h1",null,"welcome")

// const myelem2=React.createElement("p",null,"This is Paragraph")

// const r1=ReactDOM.createRoot(document.getElementById("root"))
// r1.render(React.createElement("div",null,myelem1,myelem2))

// React.createElement("h1", { className: "title", id: "main" }, "welcome")

// <h1 className="title" id="main">welcome</h1>

//LoginForm

const Login=()=>{
  return(
    <>
    <form>
    <label>UserName</label>
    <input type="text"/>
    <label>Password</label>
    <input type="password"/>
    <input type="submit" value="Login"/>
    </form>
   
    </>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Login/>)