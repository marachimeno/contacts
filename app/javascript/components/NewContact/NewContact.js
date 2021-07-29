import React from 'react';
import {ContactForm} from "../Form/ContactForm";
import {PostRequest} from "../../utils/requests";
import {handleInputChange} from "../../utils/forms_helper";

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
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
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone_number: this.state.phone_number,
            slug: this.state.slug
        };
        const params = 'contacts.json';

        const response = PostRequest(params, contact);

        this.setState({ slug: response.slug });

        this.props.history.push(`/${this.state.slug}`);
    }

    render() {
        return (
            <ContactForm attributes={this.state}
                         placeholder={this.state}
                         handleSubmit={this.handleSubmit}
                         inputChange={this.handleInputChange}
            />
        );
    }
}
