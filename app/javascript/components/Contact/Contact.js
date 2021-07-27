import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import Navbar from "../Navbar/Navbar";

const Contact = (props) => {
    const [contact, setContact] = useState({})

    useEffect( () =>{
        const slug = props.match.params.slug
        const url = `api/v1/contacts/${slug}`

        axios.get(url)
            .then( (resp) => {
                setContact(resp.data.data.attributes)
            })
            .catch( data => {
                debugger
            })
    }, [])

    const name = `${contact.first_name} ${contact.last_name}`

    return(
        <div className="container">
            <div className="search-bar my-3">
                {/*<SearchBar search={this.search} />*/}
                <Navbar />
            </div>
            <div className="row p-4">
                <div className="col-8 p-3">
                    <div className="mb-5 mt-4 mx-4">
                        <h4>❝Name❞</h4>
                        <p>{name}</p>
                    </div>
                    <div className="mb-5 mt-4 mx-4">
                        <h4>Email 📧</h4>
                        <p>{contact.email}</p>
                    </div>
                    <div className="mb-5 mt-4 mx-4">
                        <h4>Phone number 📱</h4>
                        <p>{contact.phone_number}</p>
                    </div>
                </div>
                <div className="col-4 p-3 mt-4">
                    <h3>Changes History 📑</h3>
                    <div className="py-3 px-1">
                        <p>15/01/2020 -- Contact updated - changed first name</p>
                        <p>15/01/2020 -- Contact updated - changed email</p>
                        <p>12/01/2020 -- Contact created</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
