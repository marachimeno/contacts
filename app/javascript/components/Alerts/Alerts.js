import React from 'react';

export const WarningAlert = (props) => {
    return (
        <div className="alert alert-warning" role="alert">
            {props.message}
        </div>
    )
}
