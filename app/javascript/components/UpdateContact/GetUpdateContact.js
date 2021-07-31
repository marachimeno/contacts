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
        const params = `contacts/${slug}`

        return GetRequest(params)
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
