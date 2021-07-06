
import App from "components/App";
import React from "react";
import ReactDOM from 'react-dom';
import './index.css';


//Insert url of an json file of your choice
ReactDOM.render(<App url="https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json" />, document.getElementById("root"));



