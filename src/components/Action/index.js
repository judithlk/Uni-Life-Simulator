import React from "react";

export function Action({buttonName, buttonId, buttonCol, action, children}) {
    var button = {
        name: buttonName,
        id: buttonId,
        style: {
            width: "15vw",
            height: "6vh",
            backgroundColor: "#003262",
            color: "white",
            border: "1px solid grey",
            margin: "5%",
            display: "inline-block",
        },
        onclick: action
    }

    return (
        <div className="button-container" style={button.style} onClick={button.onclick}>
            <span className="button-tag">{children}</span>
        </div>
    )
}