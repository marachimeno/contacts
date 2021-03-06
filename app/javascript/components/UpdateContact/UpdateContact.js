import React from 'react';
import {ContactForm} from "../Form/ContactForm";
import {PatchRequest} from "../../utils/requests";
import {cleanContactObject} from "../../utils/forms_helper";


export default class UpdateContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {
                first_name: '',
                last_name: '',
                email: '',
                phone_number: ''
            }
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

    async patchContact(contact) {
        const slug = window.location.pathname.replace('/', '')
                                             .replace('/edit', '')
        const params = `contacts/${slug}`

        return PatchRequest(params, contact)
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

        cleanContactObject(contact)

        this.patchContact(contact)
            .then(resp => {
                this.setState({slug: resp.slug});
            })
            .catch(error =>
                console.log(error)
            )

        this.props.history.push('/');
    }

    render() {
        return (
                <ContactForm attributes={this.state.contact}
                             placeholder={this.props.contact}
                             handleSubmit={this.handleSubmit}
                             inputChange={this.handleInputChange}
                />
        );
    }
}
