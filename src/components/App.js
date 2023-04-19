import Reac, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  useEffect(()=>{
    fetch(API)
    .then(r => r.json())
    .then(data => {
      //adding eaten as a property to the sushi is crucial for tracking
      const updatedSushis = data.map(sushi => {return {...sushi, eaten: false}})
      setSushis(updatedSushis)
    })
  },[])

  function eatSushi(eatenSushi) {
    const updatedSushis = sushis.map(sushi => {
      if (sushi.id === eatenSushi.id) {
        return {...sushi, eaten: true}
      } return sushi
    })
    setSushis(updatedSushis)
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatSushi={eatSushi}/>
      <Table />
    </div>
  );
}

export default App;
