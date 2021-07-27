import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default class UpdateContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            slug: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        const contact = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            phone_number: this.state.phoneNumber,
            slug: this.state.slug
        };

        const slug = this.props.match.params.slug
        const url = `api/v1/contacts/${slug}.json`

        axios.patch(url, { contact })
            .then(response => {
                response.data.data
                this.setState({ slug: response.data.data.slug })
            })
            .catch( data => {
                debugger
            })

        this.props.history.push(`/${this.state.slug}`)
    }

    render() {
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
