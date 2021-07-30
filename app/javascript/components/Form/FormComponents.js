import React from 'react';

export const FormComponents = (props) => {
    return (
        <div className={props.col}>
            <label>{props.label}</label>
            <input type={props.type}
                   className="form-control"
                   placeholder={props.placeholder.first_name}
                   defaultValue={props.attributes.first_name}
                   onChange={props.inputChange}
            />
        </div>
    )
}

export const Button = () => {
    return (
        <div className="p-3">
            <button className="btn btn-primary" type="submit">Submit!</button>
        </div>
    )
}
