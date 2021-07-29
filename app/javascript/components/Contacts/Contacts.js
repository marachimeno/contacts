import React, {useEffect, useState} from 'react';
import Navbar from "../Navbar/Navbar";
import Contact from './Contact'
import {GetContacts} from '../../utils/requests'

const Contacts = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        GetContacts()
            .then( resp => {
                setContacts(resp.data.data)
            })
            .catch(error => {
                console.log(error)
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
