import React from "react";
import {GetRequest} from '../../utils/requests'
import Contact from "./Contact";
import {Main} from "./Main";

export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        };
    }

    async getContacts() {
        return GetRequest('/api/v1/contacts.json')
    }

    componentDidMount() {
        this.getContacts()
            .then(data =>
                this.setState(
                    { contacts: data.data.data }
                )
            )
            .catch( error =>
                console.log(error)
            )
    }

    contactsCards() {
        return this.state.contacts.map((contact, index) => {
            return (
                <Contact
                    key={index}
                    attributes={contact.attributes}
                />
            )
        })
    }

    render() {
        const {contacts} = this.state;

        if (contacts.length === 0) {
            return null;
        } else {
            return(<Main contactCards={this.contactsCards()} />)
        }
    }
}
