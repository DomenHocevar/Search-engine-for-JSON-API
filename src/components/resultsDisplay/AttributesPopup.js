import React from "react";
import "./AttributesPopup.css";

export default function AttributesPopup(props){
    console.log(props.visible);
    if (props.object === null) return (null);

    function getTableRow(name1, name2) {
        return (
            <tr key={name1}>
                <td>
                    {name1}
                </td>
                <td className="seperatingCell">
                    :
                </td>
                <td>
                    {name2}
                </td>
            </tr>
        );
    }

    const keys = Object.keys(props.object);
    const content = [];
    keys.forEach(key => content.push(
        getTableRow(key, props.object[key])
    ));

    return (
        <div id="toCenter">
            <div id = "attributesPopup">
                <button id="exit" onClick={props.onExitClick}>X</button>
                <h2>Properties of <u>{props.object[props.mainProperty]}</u>:</h2>
                <table>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
        </div>
    );
    
}