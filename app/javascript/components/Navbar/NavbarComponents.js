import React from 'react';
import {Link} from "react-router-dom";

export const Anchor = (props) => {
    return (
        <Link to={props.path} className={props.linkClass}>
            {props.title}
        </Link>
    )
}
