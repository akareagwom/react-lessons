import React, { useState } from 'react'

const Button = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1)
        console.log("I've been clicked")
    }

    return (
        <div onClick={handleClick} className="w-[140px] bg-[#1C1D22] flex justify-between cursor-pointer rounded-[19px] p-2">
            <p>Click Me</p>
            <p>{count}</p>
        </div>
    )
}

export default Button