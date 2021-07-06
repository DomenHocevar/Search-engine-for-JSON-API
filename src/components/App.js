import React from "react";
import SearchBar from "./SearchBar";
import "./App.css";
import ServerDataSearch from "../logic/ServerDataSearch";



export default class App extends React.Component {
    constructor(props) {
        super(props);
    
        
        this.state = {
            dataSearch: new ServerDataSearch(this.props.url),
        }

        this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    }

    handleSearchBarChange(searchString) {
       console.log(this.state.dataSearch.getResultObjects(searchString));
    }

    render() {
        return (
            <div id="app">
                <h1>Search: {this.props.url}</h1>
                <SearchBar onChange={this.handleSearchBarChange}/>
            </div>
        )
    }
}