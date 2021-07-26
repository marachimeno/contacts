import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

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
        <div className="row p-4">
            <div className="col-8 p-3">
                <h1>{name}</h1>
                <h3>{contact.email}</h3>
                <h4>{contact.phone_number}</h4>
            </div>
            <div className="col-4 p-3">
                <h2>Changes History</h2>
                <div className="py-3 px-1">
                    <p>15/01/2020 -- Contact updated - changed first name</p>
                    <p>15/01/2020 -- Contact updated - changed email</p>
                    <p>12/01/2020 -- Contact created</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
