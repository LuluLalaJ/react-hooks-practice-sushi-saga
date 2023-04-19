import React from "react";

function SushiWallet() {
    return(
        <form>
            <input type="number" min="0" step="5" onChange={null} value={null}/>
            <button type="submit">add more money</button>
        </form>
    )
}

export default SushiWallet
