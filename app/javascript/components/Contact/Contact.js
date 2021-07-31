import React from 'react'
import {Show} from "./Show";
import {DeleteRequest, GetRequest} from "../../utils/requests";
import {WarningAlert} from "../Alerts/Alerts";

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {},
            history: {},
            searchHistory: this.props.history
        };
        this.deleteContact = this.deleteContact.bind(this);
    }

    getParams() {
        return this.props.match.params.slug
    }

    async getContact() {
        const params = `contacts/${this.getParams()}`

        return GetRequest(params)
    }

    componentDidMount() {
        this.getContact()
            .then(resp => {
                this.setState(
                    { contact: resp.data.data.attributes }
                );
                this.setState(
                    { history: resp.data.included }
                );
            })
            .catch(error =>
                console.log(error)
            )
    }

    deleteContact() {
        const params = `contacts/${this.getParams()}`

        DeleteRequest(params)
            .then(
                this.state.searchHistory.push('/')
            )
            .catch( error =>
                console.log(error)
            )

    }

    render() {
        const {contact} = this.state;
        const {history} = this.state;

        if (contact === undefined || Object.keys(contact).length === 0) {
            return(<WarningAlert message="Ups, we couldn't load this contact"/>)
        } else {
            const name = `${contact.first_name} ${contact.last_name}`
            return (
                <div>
                    <Show name={name} history={history} contact={contact} deleteContact={this.deleteContact}/>
                </div>
            );
        }
    }
}
