import React from 'react';
import {Input, Button} from "./Input";

export const ContactForm = (props) => {
    return(
        <div>
            <div className="cards-index row justify-content-around py-5">
                <form className="p-4" onSubmit={props.handleSubmit}>
                    <div className="form-row row p-3">
                        <Input label='First Name'
                               col='col-6'
                               type='text'
                               name='first_name'
                               placeholder={props.placeholder.first_name}
                               attribute={props.attributes.first_name}
                               inputChange={props.inputChange}
                        />
                        <Input label='Last Name'
                               col='col-6'
                               type='text'
                               name='last_name'
                               placeholder={props.placeholder.last_name}
                               attribute={props.attributes.last_name}
                               inputChange={props.inputChange}
                        />
                    </div>
                    <div className="form-row p-3">
                        <Input label='Email'
                               col='col'
                               type='email'
                               name='email'
                               placeholder={props.placeholder.email}
                               attribute={props.attributes.email}
                               inputChange={props.inputChange}
                        />
                    </div>
                    <div className="form-row p-3">
                        <Input label='Phone Number'
                               col='col'
                               type='text'
                               name='phone_number'
                               placeholder={props.placeholder.phone_number}
                               attribute={props.attributes.phone_number}
                               inputChange={props.inputChange}
                        />
                    </div>
                    <Button />
                </form>
            </div>
        </div>
    )
}
