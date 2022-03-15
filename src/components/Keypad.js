// import React, { useState} from "react";

function handleChange(){
    console.log("Entering password...")
}

function Keyboard(){
    return (
        <input onChange={() => handleChange()} type="password" />
    )
}

export default Keyboard
