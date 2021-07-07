
import App from "components/App";
import React from "react";
import ReactDOM from 'react-dom';
import './index.css';


//Insert url of an json file of your choice
//Insert main property of the objects to search on
ReactDOM.render(<App url="https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json" 
mainProperty="name"/>, document.getElementById("root"));



