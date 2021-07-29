import axios from 'axios';
import React from 'react';
import {PatchRequest} from "../../utils/requests";
import {handleInputChange} from "../../utils/forms_helper";
import {ContactForm} from "../Form/ContactForm";

export default class TestUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            phone_number: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    cleanContactObject(object) {
        Object.keys(object).forEach(key =>
            object[key] === "" ? delete object[key] : {}
        );
    }

    handleSubmit = event => {
        event.preventDefault();

        let contact = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone_number: this.state.phone_number,
            slug: this.state.slug
        };
        this.cleanContactObject(contact)

        const slug = window.location.pathname.replace('/', '')
            .replace('/edit', '')
        const params = "contacts/" + slug + ".json"

        const response = PatchRequest(params, contact)
        this.setState({slug: response.slug})
    }

    render() {
        return (
            <ContactForm attributes={this.state}
                         placeholder={this.props.contact}
                         handleSubmit={this.handleSubmit}
                         inputChange={handleInputChange.bind(this)}
            />
        );
    }
}
