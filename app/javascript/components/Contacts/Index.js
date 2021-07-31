import {Navbar} from "../Navbar/Navbar";
import React from "react";

export const Index = (props) => {
    return (
        <div className="container">
            <div className="search-bar my-3">
                <Navbar />
            </div>
            <div className="cards-index row justify-content-around py-5">
                {props.contactCards}
            </div>
        </div>
    )
}
