import React from 'react';
import UpdateContact from './UpdateContact'
import {GetRequest} from "../../utils/requests";

export default class GetUpdateContact extends React.Component {
    state = {
        contact: '',
        history: this.props.history
    };

    async getContact() {
        const slug = this.props.match.params.slug
        const url = "http://localhost:3000/api/v1/contacts/" + slug + ".json"

        return GetRequest(url)
    }

    componentDidMount() {
        this.getContact()
            .then(resp => {
                const contact = resp.data.data.attributes
                this.setState({contact})
            })
            .catch(error =>
                console.log(error)
            )
    }

    render() {
        return(
            <UpdateContact contact={this.state.contact} history={this.state.history}/>
        )
    }
}
