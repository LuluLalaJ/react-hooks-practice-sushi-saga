import Reac, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [money, setMoney] = useState(50)
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
    if (money >= eatenSushi.price) {
      const updatedSushis = sushis.map(sushi => {
        if (sushi.id === eatenSushi.id) {
          return { ...sushi, eaten: true }
        } return sushi
      })
      setSushis(updatedSushis)
      setMoney(money => money - eatenSushi.price)
    } else {
      alert('Need more money')
    }
  }

  const eatenSushis = sushis.filter(sushi => sushi.eaten)

  function addMoney(amount) {
    setMoney(money => money + amount)
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatSushi={eatSushi}/>
      <Table plates={eatenSushis} money={money} addMoney={addMoney}/>
    </div>
  );
}

export default App;
