import React from "react";
import {GetRequest} from '../../utils/requests'
import {Contact} from "./Contact";
import {Index} from "./Index";

export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

    async getContacts() {
        const params = 'contacts'

        return GetRequest(params)
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
            return (
                <Index contactCards="You don't have any contacts yet" />
            )
        } else {
            return(
                <Index contactCards={this.contactsCards()} />
            )
        }
    }
}
