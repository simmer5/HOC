import React from "react";

import "./App.css";
import ButtonCounter from "./Components/ButtonCounter";
import HoverCounter from "./Components/HoverCounter";

function App() {
  return (
    <div className="App">
      <br />
      <ButtonCounter name="Text from component as a ...this.props" />
      <br />
      <HoverCounter />
    </div>
  );
}

export default App;
