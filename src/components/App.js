import React from "react";
import SearchBar from "./SearchBar";
import "./App.css";
import ServerDataSearch from "../logic/ServerDataSearch";
import ResultsPopup from "./resultsDisplay/ResultsPopup";
import AttributesPopup from "./resultsDisplay/AttributesPopup";



export default class App extends React.Component {
    constructor(props) {
        super(props);
    
        
        this.state = {
            dataSearch: new ServerDataSearch(this.props.url),
            resultObjects: [],
            resultStartIndex: 0,

            attributesPopupObject: null,
        }

        this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
        this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this);
        this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
        this.handleResultBlockClick = this.handleResultBlockClick.bind(this);
        this.handleAtrributesPopupExitClick = this.handleAtrributesPopupExitClick.bind(this);
    }

    handleSearchBarChange(searchString) {
       this.setState({resultObjects : this.state.dataSearch.getResultObjects(searchString), 
        resultStartIndex: 0,
    });
    }

    handlePreviousButtonClick() {
        const newIndex = this.state.resultStartIndex - 20;
        this.setState({
            resultStartIndex: newIndex
        });
    }

    handleNextButtonClick() {
        const newIndex = this.state.resultStartIndex + 20;
        this.setState({
            resultStartIndex: newIndex
        });
    }

    handleResultBlockClick(object) {
        this.setState({
            attributesPopupObject: object,
        });
    }

    handleAtrributesPopupExitClick() {
        this.setState({
            attributesPopupObject: null,
        });
    }

    render() {
        return (
            <div id="app">
                <h1>Search: {this.props.url}</h1>
                <div id="SearchBarAndResultsPopupContainer">
                    <SearchBar onChange={this.handleSearchBarChange}/>
                    <ResultsPopup resultObjects={this.state.resultObjects} 
                    resultStartIndex={this.state.resultStartIndex}
                    onPreviousButtonClick={this.handlePreviousButtonClick}
                    onNextButtonClick={this.handleNextButtonClick}
                    onResultBlockClick={this.handleResultBlockClick}/>
                </div>
                <AttributesPopup object={this.state.attributesPopupObject}
                onExitClick={this.handleAtrributesPopupExitClick}/>
            </div>
        )
    }
}