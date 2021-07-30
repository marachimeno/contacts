import React from 'react'
import {Main} from "./Main";
import {DeleteRequest, GetRequest} from "../../utils/requests";

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {},
            history: {}
        };
    }

    async getContact() {
        const slug = this.props.match.params.slug
        const url = "http://localhost:3000/api/v1/contacts/" + slug + ".json"

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

    async deleteContact() {
        const slug = this.props.match.params.slug
        const url = `api/v1/contacts/${slug}`

        DeleteRequest(url)
            .then(
                this.props.history.push('/')
            )
            .catch( error =>
                console.log(error)
            )

    }

    render() {
        const {contact} = this.state;
        const {history} = this.state;

        if (contact === undefined || Object.keys(contact).length === 0) {
            return null
        } else {
            const name = `${contact.first_name} ${contact.last_name}`
            return (
                <Main name={name} history={history} contact={contact} deleteContact={this.deleteContact}/>
            );
        }
    }
}
