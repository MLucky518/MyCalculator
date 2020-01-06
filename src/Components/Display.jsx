import React from "react";
import "./Display.css";

export const Display = (props) =>( // with parenthesis you do not need to add a return as it is treated like a single line expression

<div className = "display">{props.input}</div>

);