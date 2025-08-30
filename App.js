import React from "react";
import ReactDOM from "react-dom/client";


/**
 * <div id = "parent"
 *     <div id = "child"
 *          <h1>I'm h1 tag</div>
 *          <h2>I'm h1 tag</div>
 *     </div>
 *     <div id = "child2"
 *          <h1>I'm h1 tag</div>
 *          <h2>I'm h1 tag</div>
 *     </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser Understands) 
 *
 */

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I'm Leaning React! 🚀 "),
        React.createElement("h2", {}, "I'm an h2 tag"),

    ]),
        React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag"),

    ])
]);

//JSX


// const heading = React.createElement(
//     "h1", 
//     {id: "heading", xyz: "abc"}, 
//     "Hello World from React!"
// );

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);