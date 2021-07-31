import React from "react";

export const Index = (props) => {
    return (
        <div>
            <div className="cards-index row justify-content-around py-5">
                {props.contactCards}
            </div>
        </div>
    )
}
