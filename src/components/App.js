import React from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const addSomthing = 'add something'
  return (
    <div className="app">
      <SushiContainer />
      <Table />
    </div>
  );
}

export default App;
