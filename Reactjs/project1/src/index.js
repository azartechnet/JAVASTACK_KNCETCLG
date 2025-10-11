import React from "react";
import ReactDOM from "react-dom/client";

function Sample()
{
  return(
    <h1>This is Heading</h1>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)

