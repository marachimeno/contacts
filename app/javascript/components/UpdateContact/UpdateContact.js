import React from 'react';
import UpdateForm from './UpdateForm'
import {GetRequest} from "../../utils/requests";

export default class UpdateContact extends React.Component {
    // state = {
    //     contact: ''
    // };
    constructor(props) {
        super(props);

        const slug = this.props.match.params.slug
        const url = "contacts/" + slug + ".json"

        const response = GetRequest(url)
        this.setState({ response })
    }

    // componentDidMount() {
    //     const slug = this.props.match.params.slug
    //     const url = "contacts/" + slug + ".json"
    //
    //     const response = GetRequest(url)
    //     this.setState({ contact: response })
    // }

    render() {
        return(
            <UpdateForm contact={this.state}/>
        )
    }
}
