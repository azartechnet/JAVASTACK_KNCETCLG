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

/*const Login=()=>{
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
r1.render(<Login/>)*/

//React List

/*const MyElem=()=>{
  return(
    <div>
      <h1>MyList</h1>
      <ul>
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
      </ul>
      <ol>
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
      </ol>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)*/

//Conditional Rendering

/*const x=20;
let text="";
if(x>10)
{
  text="x is greater than 10"
}
else
{
  text="x is less than 10"
}
const MyElem=()=>{
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)*/

/*const x=10;
let text="";
if(x>10)
{
  text="x is greater than 10"
}
else if(x==10)
{
  text="Equal to 10"
}
else
{
  text="x is less than 10"
}
const MyElem=()=>{
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)*/

/*import './index.css';
const App=()=>{
  return(
    <>
      <h1>Welcome</h1>
      <p className="f1">This is paragraph..</p>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Function Component

/*function Sample()
{
  return(
    <div>
      <form>
        <label>Enter the UserName</label>
        <input type="text" name=""/>
        <input type="submit" value="Login"/>
      </form>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Sample/>)*/

//class component

/*class Sample extends React.Component
{
  render()
  {
    return(
       <div>
        <h1>Hello</h1>
        <p>Welcome</p>
       </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React component in component

/*function Component1()
{
  return(
    <>
     <div>Component1</div>
    <Component2/>
    </>
   
  )
}
function Component2()
{
  return(
    <>
    <div>Component2</div>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>)*/

//props argument passing

/*function Sample(props)
{
  return(
    <div>
      <h1>Hello{props.name}{props.age}</h1>
      <p>Welcome</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="Rahul" age="89"/>)*/

//Function Component-1
/*function Greeting()
{
  const name="azar";
  return(
    <div style={{textAlign:'center',backgroundColor:'green'}}>
      <h1>Hello,{name}</h1>
      <p>Welcome to React</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Greeting/>)*/

//OnClick

/*function SimpleButton()
{
  function showMessage()
  {
    alert("Button was clicked")
  }
  return(
    <div style={{textAlign:'center'}}>
       <button onClick={showMessage}>ClickHere</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<SimpleButton/>)*/

//Constructor using super

/*class Sample extends React.Component
{
   constructor()
   {
    super();
    this.state={name:"azar",age:25};
   }
   render()
   {
    return(
      <div>
        <h1>Hello{this.state.name}{this.state.age}</h1>
      </div>
    )
   }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

/*class Counter extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={count:0}

  }
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  decrement=()=>{
    this.setState({count:this.state.count-1})
  }
  render()
  {
    return(
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

/*class ToggleMessage extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={visible:false}
  }
  toggle=()=>{
    this.setState({visible:!this.state.visible})
  }
  render()
  {
    return(
      <>
         <h1>ToggleMessage</h1>
         <button onClick={this.toggle}>{this.state.visible?'Hide':'Show'}</button>
         {this.state.visible&&<p>Hello I am visible</p>}
      </>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<ToggleMessage/>)*/

//Changing the State object

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={name:"azar",age:25}
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick()
  {
    this.setState({age:40})
  }
  render()
  {
    return(
      <>
        <h1>Hello{this.state.name}{this.state.age}</h1>
        <button onClick={this.handleClick}>ClickHere</button>
      </>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React Event

/*function Football()
{
  const shoot=()=>{
    alert("Goal")
  }
  return(
    <>
    <button onClick={shoot}>Shoot</button>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//React Arguments passing

/*function Football()
{
  const shoot=(year)=>{
    alert(`Goal in ${year}`)
  }
  return(
    <>
      <button onClick={()=>shoot(2002)}>Shoot</button>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

/*function MissedGoal()
{
  return<h1>Missed</h1>
}
function MadeGoal()
{
  return<h1>MadeFoal</h1>
}
function Football(props)
{
  const isGoal=props.isGoal;
  if(isGoal)
  {
    return<MadeGoal/>
  }
  else
  {
    return<MissedGoal/>
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Football isGoal={true}/>)
r1.render(<Football isGoal={Math.random()>0.5}/>)*/

//React List Using Map

/*function Car(props)
{
  return<li>I am {props.b1}</li>
}
function Garage()
{
  const cars=["BMW","Audi","Toyota"]
  return(
    <div>
      <h1>Garage</h1>
      <ul>
        {cars.map((car)=><Car b1={car}/>)}
      </ul>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//React using Key

/*function Car(props)
{
  return<li>{props.id}{props.name}</li>
}
function Garage()
{
  const cars=[
    {id:1,name:"azar"},
    {id:2,name:"mohamed"}
  ]
  return(
    <div>
      <ul>
             {cars.map((car)=><Car id={car.id} name={car.name}/>)}
      </ul>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//Destructuring

/*function Welcome({name,age})
{
  return(
    <div>
      <h1>Welcome{name}</h1>
      <p>Age is::{age}</p>
    </div>
  )
}
export default function App()
{
  return<Welcome name="azar" age={30}/>
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Destructring state in class component

/*class Profile extends React.Component
{
  constructor()
  {
    super();
    this.state={
      name:"azar",
      age:30
    }
  }
  render()
  {
    const {name,age}=this.state;
    return(
      <div>
        <h2>Name:{name}</h2>
        <h3>Age:{age}</h3>
      </div>
    )
  }
}
export default Profile;
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Profile/>)*/

//Destructuring in Arrays

/*function Skills()
{
  const skills=["java","python","c++"]
  const [first,second,third]=skills;
  return(
    <div>
      <h3>MySkills</h3>
      <ul>
        <li>{first}</li>
        <li>{second}</li>
        <li>{third}</li>
      </ul>
    </div>
  )
}
export default Skills;

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Skills/>)*/

//React getDerivedStateFromProps

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={count:0}
  }
  static getDerivedStateFromProps(props,state)
  {
      console.log("GetDerivedFromProps")
  }
  render()
  {
    return(
      <div>
        <h1>Header</h1>
        <p>Count:{this.state.count}</p>
        <button onClick={()=>this.setState({count:this.state.count+1})}>increment</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Header/>)*/

//ComponentDidMount

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={favcolor:"red"}
  }
  componentDidMount()
  {
    console.log("ComponentDidMount")
    setTimeout(()=>{
      this.setState({favcolor:"blue"})
    },3000)
  }
  render()
  {
    return(
      <div>
        <h1>Header</h1>
        <p>My Favour color is::{this.state.favcolor}</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Header/>)*/

//ShouldComponentUpdate

class Header extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={favcolor:"red"}
  }
  shouldComponentUpdate(nextProps,nextState)
  {
    console.log("shouldComponentUpdate")
    return true;
  }
  changeColor=()=>{
    this.setState({favcolor:"blue"})
  }
  render()
  {
    return(
      <div>
        <p>{this.state.favcolor}</p>
        <button onClick={this.changeColor}>ChangeColor</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Header/>)