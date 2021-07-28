import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Navbar from "../Navbar/Navbar";
import Contact from './Contact'

const Contacts = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        axios.get('/api/v1/contacts.json')
            .then( resp => {
                setContacts(resp.data.data)
            })
            .catch( data => {
                debugger
            })
    }, [])

    const contactCards = contacts.map((contact, index) => {
        return (
            <Contact
                key={index}
                attributes={contact.attributes}
            />
        )
    })

    return (
        <div className="container">
            <div className="search-bar my-3">
                <Navbar />
            </div>
            <div className="cards-index row justify-content-around py-5">
                {contactCards}
            </div>
        </div>
    )
}

export default Contacts
