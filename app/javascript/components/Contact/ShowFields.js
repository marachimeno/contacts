import React from "react";

export const Field = (props) => {
    return (
        <div className="mb-5 mt-4 mx-4">
            <h4>{props.title}</h4>
            <p>{props.name}</p>
        </div>
    )
}
