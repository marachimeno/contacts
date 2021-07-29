import React from 'react';
import axios from "axios";
import UpdateForm from './UpdateForm'
import {GetRequest} from "../../utils/requests";

export default class UpdateContact extends React.Component {
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
            <UpdateForm contact={this.state.contact}/>
        )
    }
}
