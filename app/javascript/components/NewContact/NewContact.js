import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Form from "../Form/Form";
import Navbar from "../Navbar/Navbar";

const NewContact = () => {
    const [contact, setContact] = useState([])

    const person = {
        first_name: "Mara",
        last_name: "Chimeno",
        email: "marachimeno@gail.com",
        phone_number: "+447716614372"
    };

    useEffect(() => {
        axios.post('/api/v1/contacts.json', person)
            .then( resp => {
                setContact(resp.data.data.attributes)
            })
            .catch( data => {
                debugger
            })
    }, [])

    return (
        <div className="container">
            <div className="search-bar my-3">
                {/*<SearchBar search={this.search} />*/}
                <Navbar />
            </div>
            <div className="cards-index row justify-content-around py-5">
                <Form />
            </div>
        </div>
    )
}

export default NewContact
