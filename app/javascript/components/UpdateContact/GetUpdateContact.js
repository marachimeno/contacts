import React from 'react';
import axios from "axios";
import UpdateContact from './UpdateContact'
import {GetRequest} from "../../utils/requests";

export default class GetUpdateContact extends React.Component {
    state = {
        contact: ''
    };

    componentDidMount() {
        const slug = this.props.match.params.slug
        const url = "http://localhost:3000/api/v1/contacts/" + slug + ".json"

        axios.get(url)
            .then( (resp) => {
                const contact = resp.data.data.attributes
                this.setState({ contact })
            })
            .catch( data => {
                debugger
            })
    }

    render() {
        return(
            <UpdateContact contact={this.state.contact}/>
        )
    }
}
