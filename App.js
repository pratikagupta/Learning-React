import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>

//  React Element
    const title = () => (
    <h1 className="head" tabIndex="5">
        Hello World from JSX!
        </h1>
    );

// React Functional component - Return some JSX code
//Component Composition
const HeadingComponent = () => (
    <div id="container">
        {title()}
        <h1>Hello World from Functional Component!</h1>
    </div>
);


    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<HeadingComponent />);

