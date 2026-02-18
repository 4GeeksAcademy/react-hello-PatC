import React, { useState } from "react";
import "./Semaforo.css";

function Semaforo() {
const [activeColor, setActiveColor] = useState(null);

function handleClick(color) {
setActiveColor(color);
}

return (
<div className="semaforoContainer">
<div
className={"luz roja " + (activeColor === "red" ? "brillo" : "")}
onClick={function () { handleClick("red"); }}
></div>

<div
className={"luz naranja " + (activeColor === "orange" ? "brillo" : "")}
onClick={function () { handleClick("orange"); }}
></div>

<div
className={"luz verde " + (activeColor === "green" ? "brillo" : "")}
onClick={function () { handleClick("green"); }}
></div>
</div>
);
}

export default Semaforo;