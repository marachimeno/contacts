import React from 'react';
import {ContactForm} from "../Form/ContactForm";
import {PostRequest} from "../../utils/requests";

export default class NewContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            slug: '',
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

    async postContact(contact) {
        const url = "http://localhost:3000/api/v1/contacts.json";

        return PostRequest(url, contact)
    }

    handleSubmit = event => {
        event.preventDefault();

        const contact = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone_number: this.state.phone_number,
            slug: this.state.slug
        };

        this.postContact(contact)
            .then(resp => {
                this.setState({ slug: resp.slug });
            })
            .catch(error =>
                console.log(error)
            )

        this.props.history.push(`/${this.state.slug}`);
    }

    render() {

        return (
            <ContactForm attributes={this.state}
                         placeholder=''
                         handleSubmit={this.handleSubmit}
                         inputChange={this.handleInputChange}
            />
        )
    }
}
