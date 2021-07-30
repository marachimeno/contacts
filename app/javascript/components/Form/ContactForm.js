import React from 'react';
import {Navbar} from "../Navbar/Navbar";
import {Dashboard} from "../Main/Dashboard";
import {FormComponents, Button} from "./FormComponents";

export const ContactForm = (props) => {
    return(
        <div className="container">
            <div className="search-bar my-3">
                <Navbar />
            </div>
            <div className="cards-index row justify-content-around py-5">
                <form className="p-4" onSubmit={props.handleSubmit}>
                    <div className="form-row row p-3">
                        <FormComponents label='First Name'
                                        col='col-6'
                                        type='text'
                                        placeholder={props.placeholder}
                                        attributes={props.attributes}
                                        onChange={props.inputChange}
                        />
                        <FormComponents label='Last Name'
                                        col='col-6'
                                        type='text'
                                        placeholder={props.placeholder}
                                        attributes={props.attributes}
                                        onChange={props.inputChange}
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
            </div>
        </div>
    )
}
