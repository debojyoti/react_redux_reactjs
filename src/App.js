import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display/Display";
import Controller from "./components/Controller/Controller";

function App() {
  return (
    <React.Fragment>
      <Display />
      <Controller />
    </React.Fragment>
  );
}

export default App;
