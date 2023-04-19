import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({sushis, eatSushi}) {
  const [sushiIndex, setSushiIndex] = useState(0)
  //slice is used here to control display 4 pieces of sushi & non-destructible method

  const renderSushis = sushis
  .slice(sushiIndex, sushiIndex + 4)
  .map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi}/>)

  function addMoreSushi(){
    //this is how you do full rotation when it comes to array
    setSushiIndex(sushiIndex => (sushiIndex + 4) % sushis.length)
  }
  return (
    <div className="belt">
      {renderSushis}
      <MoreButton addMoreSushi={addMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
