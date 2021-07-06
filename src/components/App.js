import React from "react";
import SearchBar from "./SearchBar";
import "./App.css";
import ServerDataSearch from "../logic/ServerDataSearch";
import ResultsPopup from "./resultsDisplay/ResultsPopup";



export default class App extends React.Component {
    constructor(props) {
        super(props);
    
        
        this.state = {
            dataSearch: new ServerDataSearch(this.props.url),
            resultObjects: [],
            resultStartIndex: 0,
        }

        this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
        this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this);
        this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
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
        console.log("oj");
        const newIndex = this.state.resultStartIndex + 20;
        this.setState({
            resultStartIndex: newIndex
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
                    onNextButtonClick={this.handleNextButtonClick}/>
                </div>
            </div>
        )
    }
}