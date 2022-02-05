import React from "react";
import Login from "./Login";

let bejeletkezve = false;
let regisztralva = false;

function App() {
  return (
    <div className="container">
      {bejeletkezve ? <h1>Hello</h1> : <Login reg={regisztralva} />}
    </div>
  );
}

export default App;
