import React from 'react';
import {Button, FormComponents} from "./FormComponents";

export const Mainn = (props) => {
    return(
        <form className="p-4" onSubmit={props.props.handleSubmit}>
            <div className="form-row row p-3">
                <FormComponents label='First Name'
                                col='col-6'
                                type='text'
                                placeholder={props.props.placeholder}
                                attributes={props.props.attributes}
                                onChange={props.props.inputChange}
                />
                <FormComponents label='Last Name'
                                col='col-6'
                                type='text'
                                placeholder={props.props.placeholder}
                                attributes={props.props.attributes}
                                onChange={props.props.inputChange}
                />
            </div>
            <div className="form-row p-3">
                <FormComponents label='Email'
                                col='col'
                                type='email'
                                placeholder={props.placeholder}
                                attributes={props.attributes}
                                onChange={props.inputChange}
                />
            </div>
            <div className="form-row p-3">
                <FormComponents label='Phone Number'
                                col='col'
                                type='text'
                                placeholder={props.placeholder}
                                attributes={props.attributes}
                                onChange={props.inputChange}
                />
            </div>
            <Button />
        </form>
    )
}
