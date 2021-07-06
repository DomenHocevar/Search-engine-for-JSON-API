import React from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
    return (
        <input type="text" onChange={event => props.onChange(event.target.value)}></input>
    );
}