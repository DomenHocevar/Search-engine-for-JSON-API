import React, { useEffect, useState } from "react";
import ResultBlock from "./ResultBlock";
import "./ResultsPopup.css";

export default function ResultsPopup(props) {
    const [resultStartIndex, setResultStartIndex] = React.useState(0);
    const numberOfResultsOnPage = 20;

    useEffect(() => {
        setResultStartIndex(0);
    }, [props.resultObjects]);
    
    const resultBlocks = [];
    for (let i = resultStartIndex; i < Math.min(resultStartIndex + numberOfResultsOnPage, props.resultObjects.length); i++) {
        resultBlocks.push(<ResultBlock key={i} 
            resultObject={props.resultObjects[i]} 
            onResultBlockClick={() => props.onResultBlockClick(props.resultObjects[i])}
            mainProperty={props.mainProperty}/>);
    }
    
    function handlePreviousButtonClick() {
        const newIndex = resultStartIndex - numberOfResultsOnPage;
        setResultStartIndex(newIndex);
    }

    function handleNextButtonClick() {
        const newIndex = resultStartIndex + numberOfResultsOnPage;
        console.log(newIndex);
        setResultStartIndex(newIndex);
    }

    



    return (
        <div id="resultsPopup">
            {
                resultStartIndex - numberOfResultsOnPage >= 0 && <button type="button" className="positionButton" onClick={handlePreviousButtonClick}>Previous</button>
            }
            {resultBlocks}
            {
                resultStartIndex + numberOfResultsOnPage < props.resultObjects.length && <button type="button" className="positionButton" onClick={handleNextButtonClick}>Next</button>
            }
        </div>
    );
    
}

