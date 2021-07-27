import React, {useEffect, useState} from 'react';
import UpdateContact from './UpdateContact'
import axios from "axios";

export default class Test extends React.Component {
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
        const {data} = this.state.contact;

        return(
            <div>
                <UpdateContact contact={this.state.contact}/>
                {/*{console.log(typeof this.state.contact)}*/}
            </div>
        )
    }
}
