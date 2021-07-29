import React from 'react';
import Navbar from "../Navbar/Navbar";

export const ContactForm = (props) => {
    return(
        <div className="container">
            <div className="search-bar my-3">
                <Navbar />
            </div>
            <div className="cards-index row justify-content-around py-5">
                <form className="p-4" onSubmit={props.handleSubmit}>
                    <div className="form-row row p-3">
                        <div className="col-6">
                            <label>First name</label>
                            <input type="text"
                                   className="form-control"
                                   name="first_name"
                                   placeholder={props.placeholder.first_name}
                                   defaultValue={props.attributes.first_name}
                                   onChange={props.inputChange}
                            />
                        </div>
                        <div className="col-6">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text"
                                   className="form-control"
                                   name="last_name"
                                   placeholder={props.placeholder.last_name}
                                   defaultValue={props.attributes.last_name}
                                   onChange={props.inputChange}
                            />
                        </div>
                    </div>
                    <div className="form-row p-3">
                        <div className="col">
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                   className="form-control"
                                   name="email"
                                   placeholder={props.placeholder.email}
                                   defaultValue={props.attributes.email}
                                   onChange={props.inputChange}
                            />
                        </div>
                    </div>
                    <div className="form-row p-3">
                        <div className="col">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text"
                                   className="form-control"
                                   name="phone_number"
                                   placeholder={props.placeholder.phone_number}
                                   defaultValue={props.attributes.phone_number}
                                   onChange={props.inputChange}
                            />
                        </div>
                    </div>
                    <div className="p-3">
                        <button className="btn btn-primary" type="submit">Submit!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
