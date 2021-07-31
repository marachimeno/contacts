import React from 'react';
import {Navbar} from "../Navbar/Navbar";

export const Dashboard = (props) => {
    return(
        <div className="container">
            <div className="search-bar my-3">
                <Navbar />
            </div>
            <div className={props.class}>
                {props.element}
            </div>
        </div>
    )
}
