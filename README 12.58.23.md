## Coding :

- Set up all the `tools in your laptop`
  - `VS Code`
  - `Chrome`
  - `Extensions of Chrome`
- Create a `new Git repo`
- Build your `first Hello World` program using,
  - Using `just HTML`
  - Using `JS to manipulate the DOM`
  - Using `React`
    - `use CDN Links`
    - `Create an Element`
    - `Create nested React Elements`
    - `Use root.render`

What is making your app fast ? - It is react and bundler(Parcel)

# Parcel https://parceljs.org/

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in c++
- Cahing - Faster builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing 
- Code Spliting
- Diffrential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unsed code 
- Diffrent dev and prod bundles

https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z

- React Element => Object => HTML Element (render)
- JSX => React.createElement => Object => HTML Element (render)

- JSX - JavaScript XML
- JSX is not HTML, it is similar to HTML
- JSX is type of syntactic sugar over React.createElement() function

- Babel is a JS compiler which converts JSX to React.createElement() function

- Babel CDN - https://unpkg.com/@babel/standalone/babel.min.js

- Babel REPL - https://babeljs.io/repl

- JSX Rules
 1. Top level element must be single
 2. Use className instead of class
 3. Use htmlFor instead of for
 4. Camel case for attribute names - onClick, tabIndex, contentEditable
 5. Close every element properly - <input />
 6. JS expression in JSX using {}
 7. Comments in JSX - {/* */}

- React Functional Component
- It is a JS function which returns JSX
- Component name must start with capital letter
- Component must be pure function - It should not have any side effects, it should return same output for same input
- Component must follow composition - A component can return another component

- React createElement => ReactELEMENT Object => HTMLElEMENT (render)

-  JSX - HTML-like syntax or XML-like syntax
- Babel converts JSX to React.createElement => Object => HTMLElEMENT (render)

- JSX(Transpiled code before it reaches the JS engine) - Pracel - Babel - JS engine
- Babel is a JS compiler which converts JSX to JS
- JSX =>  => ReactELEMENT Object => HTMLElEMENT (render)

- React Component - Functional Component
- Component name always starts with Capital letter
- Component is a function which returns JSX
- If you have to give attribute in JSX - you have to use camel case

- React Component
 1. Class based component - old way
 2. Functional component - new way

- React Functional component - Return some JSX code
- Component Composition


- props = When you have to dynamiclly passin some data to a componets you pass in propr 

- confi-driven UI

* What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

* Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

* Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer

/** Food Ordering App Structure Driven app
 * Header
 * - Logo
 * - Nav Items
 * - Cart
 * Body
 * - Search bar
 * - Restaurant list
 * - Restaurant Card
 *    - Image
 *    - Name
 *    - Rating
 *    - Cusines
 * Footer
 * - Copyright
 * - Contact us
 * - Address    
 * - Links
 */

- Image cloudinary Image
- Resuseable components
- CDN
- Whenever you are .map, Whenever you are looping anything we have to always give key
- not using keys (not acceptable) <<<< index as key <<<<<<<< unique id (best part)

<RestaurantCard resData={resList[0]} />

- React HOOKS


Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Nmaed Export/Import

export const Component;
import {Component} from "path";

Can we use defalt export along with a name export?

React is fast in DOM manupulation
React is efficient in DOM manupulation

State variable - super powerful variable


# React hooks 

* React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions

(Normal JS utility function)
- usestate() - superpowerful State 
- useeffects()

Utility function - 
1. useState - Super Powerful variable
Whenever state variable updates raect render its components

React use reconsitional algo (React Fiber)

Virtual DOM

Dis Algo - UI layer and Data layer in sync

Separation of consern, single responsiblity principle

Load -> Render -> API -> Render

What is Parameter and Arguments ?

CORS