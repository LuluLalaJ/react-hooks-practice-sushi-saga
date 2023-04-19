import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({sushis}) {
  const [sushiIndex, setSushiIndex] = useState(0)
  //slice is used here to control display 4 pieces of sushi & non-destructible method

  const renderSushis = sushis
  .slice(sushiIndex, sushiIndex + 4)
  .map(sushi => <Sushi key={sushi.id} sushi={sushi}/>)

  return (
    <div className="belt">
      {renderSushis}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
