import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./App.css";
import ServerDataSearch from "../logic/ServerDataSearch";
import ResultsPopup from "./resultsDisplay/ResultsPopup";
import AttributesPopup from "./resultsDisplay/AttributesPopup";



export default function App (props) {

    const [dataSearch, setDataSearch] = useState(new ServerDataSearch(props.url, props.mainProperty));
    const [resultObjects, setResultObjects] = useState([]);
    const [resultStartIndex, setResultStartIndex] = useState(0);
    const [attributesPopupObject, setAttributesPopupObject] = useState(null);

    

    function handleSearchBarChange(searchString) {
        setResultObjects(dataSearch.getResultObjects(searchString));
        setResultStartIndex(0);
    }
    



    function handleResultBlockClick(object) {
        setAttributesPopupObject(object);
    }

    function handleAtrributesPopupExitClick() {
        setAttributesPopupObject(null);
    }

    
    return (
        <div id="app">
            <h1>Search: {props.url}</h1>
            <div id="SearchBarAndResultsPopupContainer">
                <SearchBar onChange={handleSearchBarChange}/>
                <ResultsPopup resultObjects={resultObjects} 
                resultStartIndex={resultStartIndex}
                onResultBlockClick={handleResultBlockClick}
                mainProperty={props.mainProperty}/>
            </div>
            <AttributesPopup object={attributesPopupObject}
            onExitClick={handleAtrributesPopupExitClick}
            mainProperty={props.mainProperty}/>
        </div>
    )
}