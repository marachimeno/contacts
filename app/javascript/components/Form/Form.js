// import {Redirect} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

class Form extends React.Component {
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

    // handleSubmit(event) {
    //     event.preventDefault();
    //     const contact = this.state
    //     const [newContact, setContact] = useState([])
    //
    //     axios.post('api/v1/contacts', contact)
    //         .then(response => setContact(response.data.id));
    // }

    handleSubmit = (e) => {
        e.preventDefault();

        const contact = this.state
        const [newContact, setContact] = useState(0)

        axios.post('/api/v1/contacts', contact)
            .then((result) => {
                setContact(result.data.data)
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
                    <input
                        name="firstName"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        name="lastName"
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        name="email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    phone number:
                    <input
                        name="phoneNumber"
                        type="text"
                        value={this.state.phoneNumber}
                        onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form;
