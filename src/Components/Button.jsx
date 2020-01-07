import React from "react";
import "./Button.css";

const isOperator = val =>{
    return !isNaN(val) || val === "." || val === "="; // returns true 
}
export const Button = props =>(

    <div className = {`buttons ${
        isOperator(props.children) ? null : "operators"}`}
        onClick = {() =>props.handleClick(props.children)}
        > {/*assigns class of "operator" if isOperator is false */}
        {props.children} {/*children acceses the inner html of the button components */}
    </div>

);

