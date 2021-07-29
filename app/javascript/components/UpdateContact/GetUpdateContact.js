import React from 'react';
import axios from "axios";
import UpdateContact from './UpdateContact'

export default class GetUpdateContact extends React.Component {
    state = {
        contact: '',
        history: this.props.history
    };

    componentDidMount() {
        const slug = this.props.match.params.slug
        const url = "http://localhost:3000/api/v1/contacts/" + slug + ".json"

        axios.get(url)
            .then( (resp) => {
                const contact = resp.data.data.attributes
                this.setState({ contact })
            })
            .catch( error => {
                debugger
                console.log(error)
            })
    }

    render() {
        return(
            <UpdateContact contact={this.state.contact} history={this.state.history}/>
        )
    }
}
