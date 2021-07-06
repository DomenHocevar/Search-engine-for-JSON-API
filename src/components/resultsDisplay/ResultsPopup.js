import React from "react";
import ResultBlock from "./ResultBlock";
import "./ResultsPopup.css";

export default class ResultsPopup extends React.Component {

    render() {
        const resultBlocks = [];
        for (let i = 0; i < Math.min(20, this.props.resultObjects.length); i++) {
            resultBlocks.push(<ResultBlock key={i} resultObject={this.props.resultObjects[i]}/>);
        }
        

        return (
            <div id="resultsPopup">
                {resultBlocks}
            </div>
        );
    }
}