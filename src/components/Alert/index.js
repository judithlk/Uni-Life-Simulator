import React from "react";

export function Alert({body, onclick, button}) {
    var alert = {
        body: body,
        onclick: onclick,
        button: button
    }
    return (
        <div id="alert-box">
            <div className="alert-main">
                <span className="alert-text">{alert.body}</span>
            </div>
            <div className="alert-do">
                <button onClick={alert.onclick}>{alert.button}</button>
            </div>
        </div>
    )
}