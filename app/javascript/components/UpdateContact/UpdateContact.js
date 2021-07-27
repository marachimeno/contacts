import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import { router } from 'react';
// import { router } from 'react-router-dom'
import { router } from "react-router";

export default class UpdateContact extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         firstName: this.props.person.first_name,
    //         lastName: this.props.person.last_name,
    //         email: this.props.person.email,
    //         phoneNumber: this.props.person.phone_number,
    //         slug: this.props.person.slug
    //     };
    //     debugger
    //     this.handleInputChange = this.handleInputChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    state = {
        firstName: this.props.person.first_name,
        lastName: this.props.person.last_name,
        email: this.props.person.email,
        phoneNumber: this.props.person.phone_number,
        slug: this.props.person.slug
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        debugger
        const contact = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            phone_number: this.state.phoneNumber,
            slug: this.state.slug
        };

        const slug = window.location.pathname.replace('/', '')
                                             .replace('/edit', '')
        const url = "http://localhost:3000/api/v1/contacts/" + slug + ".json"

        axios.patch(url, { contact })
            .then(response => {
                response.data.data
                this.setState({ slug: response.data.data.slug })
            })
            .catch( data => {
                debugger
            })
        // debugger
        // this.props.history.push(`/${this.state.slug}`)
    }

    render() {
        // this.props.history.location
        // this.props.history.push(`/${this.state.slug}`)
        return (
            <form className="p-4" onSubmit={this.handleSubmit}>
                <div className="form-row row p-3">
                    <div className="col-6">
                        <label>First name</label>
                        <input type="text"
                               className="form-control"
                               name="firstName"
                               value={this.state.firstName}
                               onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text"
                               className="form-control"
                               name="lastName"
                               value={this.state.lastName}
                               onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-row p-3">
                    <div className="col">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               className="form-control"
                               name="email"
                               value={this.state.email}
                               onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-row p-3">
                    <div className="col">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text"
                               className="form-control"
                               name="phoneNumber"
                               value={this.state.phoneNumber}
                               onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="p-3">
                    <button className="btn btn-primary" type="submit">Submit!</button>
                </div>
            </form>
        );
    }
}
