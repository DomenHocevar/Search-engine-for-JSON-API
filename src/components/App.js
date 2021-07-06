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
        }

        this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    }

    handleSearchBarChange(searchString) {
       this.setState({resultObjects : this.state.dataSearch.getResultObjects(searchString)});
    }

    render() {
        return (
            <div id="app">
                <h1>Search: {this.props.url}</h1>
                <div id="SearchBarAndResultsPopupContainer">
                    <SearchBar onChange={this.handleSearchBarChange}/>
                    <ResultsPopup resultObjects={this.state.resultObjects}/>
                </div>
            </div>
        )
    }
}