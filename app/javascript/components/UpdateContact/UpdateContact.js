import React from 'react';
import axios from 'axios';

export default class UpdateContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {
                first_name: '',
                last_name: '',
                email: '',
                phone_number: ''
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProp) {
        if (this.props.contact !== prevProp.contact) {
            this.setState({ contact: this.props.contact });
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log(target.name)
        console.log(this.state.first_name)
    }

    handleSubmit = event => {
        event.preventDefault();

        const contact = {
            first_name: this.state.contact.first_name,
            last_name: this.state.contact.last_name,
            email: this.state.contact.email,
            phone_number: this.state.contact.phone_number,
            slug: this.state.contact.slug
        };

        const slug = window.location.pathname.replace('/', '')
                                             .replace('/edit', '')
        const url = "http://localhost:3000/api/v1/contacts/" + slug + ".json"

        axios.patch(url, { contact })
            .then(response => {
                response.data.data
                this.setState({ slug: response.data.data.slug })
            })
            .catch( data => {
                debugger
            })
    }

    render() {
        // this.props.history.location
        // this.props.history.push(`/${this.state.slug}`)
        return (
            <form className="p-4" onSubmit={this.handleSubmit}>
                <div className="form-row row p-3">
                    <div className="col-6">
                        <label>First name</label>
                        <input type="text"
                               className="form-control"
                               name="first_name"
                               defaultValue={this.state.contact.first_name}
                               onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="last_name">Last name</label>
                        <input type="text"
                               className="form-control"
                               name="last_name"
                               onChange={this.handleInputChange}
                               defaultValue={this.state.contact.last_name}
                        />
                    </div>
                </div>
                <div className="form-row p-3">
                    <div className="col">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               className="form-control"
                               name="email"
                               defaultValue={this.state.contact.email}
                               onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-row p-3">
                    <div className="col">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input type="text"
                               className="form-control"
                               name="phone_number"
                               defaultValue={this.state.contact.phone_number}
                               onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="p-3">
                    <button className="btn btn-primary" type="submit">Submit!</button>
                </div>
            </form>
        );
    }
}
// export default class UpdateContact extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             data: ''
//         }
//     }
//
//     componentDidUpdate(prevProp) {
//         if (this.props.contact !== prevProp.contact) {
//             this.setState({ data: this.props.contact });
//         }
//     }
//
//     render(){
//         // const {data} = this.state;
//         return(
//             <div>
//                 {console.log(this.state.data)}
//             </div>
//         )
//     }
// }
