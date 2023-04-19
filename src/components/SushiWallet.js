import React, { useState } from "react";

function SushiWallet({addMoney}) {
    const [amount, setAmount] = useState('')

    function updateAmount(e) {
        setAmount(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        addMoney(Number(amount))
        setAmount('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="number" min="0" step="5" onChange={updateAmount} value={amount}/>
            <button type="submit">add more money</button>
        </form>
    )
}

export default SushiWallet
