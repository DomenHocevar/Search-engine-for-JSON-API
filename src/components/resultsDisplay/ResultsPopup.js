import React from "react";
import ResultBlock from "./ResultBlock";
import "./ResultsPopup.css";

export default function ResultsPopup(props) {

    const resultBlocks = [];
    for (let i = props.resultStartIndex; i < Math.min(props.resultStartIndex + 20, props.resultObjects.length); i++) {
        resultBlocks.push(<ResultBlock key={i} 
            resultObject={props.resultObjects[i]} 
            onResultBlockClick={() => props.onResultBlockClick(props.resultObjects[i])}
            mainProperty={props.mainProperty}/>);
    }
    



    return (
        <div id="resultsPopup">
            {
                props.resultStartIndex - 20 >= 0 && <button type="button" className="positionButton" onClick={props.onPreviousButtonClick}>Previous</button>
            }
            {resultBlocks}
            {
                props.resultStartIndex + 20 < props.resultObjects.length && <button type="button" className="positionButton" onClick={props.onNextButtonClick}>Next</button>
            }
        </div>
    );
    
}

