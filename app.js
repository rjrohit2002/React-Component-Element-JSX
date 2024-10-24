import React from "react";
import ReactDOM from "react-dom";
// React.createElement=> Js Object=> HTMLElement(render)

const heading= React.createElement("h1",{id:"heading"},"This is React Old Heading");
console.log(heading);

//JSX => Transpiled into Js Object (React.createElement) by babel => Js Object => HTMLElement(render)

// React Element
const jsxHeading=<h1 id="heading">This is JSX heading</h1>;

console.log(jsxHeading);

// React Element
const jsxHeading1=(
<div>
    <h1> This is JSX heading</h1>
</div>
)

console.log(jsxHeading1);

const Title= ()=>(
      <h2>This is tile Component</h2>
)
// React Component
const HeadingComponent1 = ()=>(
    <div id="heading">
        <Title/>
        <Title></Title>
        {Title()}
        {jsxHeading}
        <h1>This is h1</h1>
    </div>
    
)

const HeadingComponent2 =()=>{
    return <h1>This is HeadingComponent2</h1>
}
const HeadingComponent3=()=> <h1>This is heading component 3</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1/>);
