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

    getUrl() {
        const slug = this.props.match.params.slug
        return "http://localhost:3000/api/v1/contacts/" + slug + ".json"
    }

    async getContact() {
        const url = this.getUrl()

        return GetRequest(url)
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
        const url = this.getUrl()

        DeleteRequest(url)
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
