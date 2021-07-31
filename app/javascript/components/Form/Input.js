import React from 'react';

export const Input = (props) => {
    return (
        <div className={props.col}>
            <label>{props.label}</label>
            <input type={props.type}
                   className="form-control"
                   name={props.name}
                   placeholder={props.placeholder}
                   defaultValue={props.attribute}
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
