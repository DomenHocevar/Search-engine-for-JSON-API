import React from "react";
import ResultBlock from "./ResultBlock";
import "./ResultsPopup.css";

export default class ResultsPopup extends React.Component {

    render() {
        const resultBlocks = [];
        for (let i = this.props.resultStartIndex; i < Math.min(this.props.resultStartIndex + 20, this.props.resultObjects.length); i++) {
            resultBlocks.push(<ResultBlock key={i} resultObject={this.props.resultObjects[i]}/>);
        }
        



        return (
            <div id="resultsPopup">
                {
                    this.props.resultStartIndex - 20 >= 0 && <button type="button" className="positionButton" onClick={this.props.onPreviousButtonClick}>Previous</button>
                }
                {resultBlocks}
                {
                    this.props.resultStartIndex + 20 < this.props.resultObjects.length && <button type="button" className="positionButton" onClick={this.props.onNextButtonClick}>Next</button>
                }
            </div>
        );
    }
}

