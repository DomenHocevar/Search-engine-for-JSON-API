import React from "react";
import "./ResultBlock.css";

export default function ResultBlock(props) {
    return (
        <button type="button" className="resultBlock">{props.resultObject.name}</button>
    );
}