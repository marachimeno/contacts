import React, { useState, useEffect } from 'react'
import History from "./History";
import { Link } from 'react-router-dom'

import axios from 'axios'
import Navbar from "../Navbar/Navbar";
import Card from "../Contacts/Card";

const Contact = (props) => {
    const [contact, setContact] = useState({})
    const [history, setHistory] = useState({})

    useEffect( () =>{
        const slug = props.match.params.slug
        const url = `api/v1/contacts/${slug}`

        const renderHistory = (history) => {
            return history.map(log => {
                return log.attributes
            })
        }

        axios.get(url)
            .then( (resp) => {
                setContact(resp.data.data.attributes)
                // setHistory(resp.data.included)
                // const logs = renderHistory(resp.data.included)
                setHistory(resp.data.included)
            })
            .catch( data => {
                debugger
            })
    }, [])

    const deleteContact = () => {
        const slug = props.match.params.slug
        const url = `api/v1/contacts/${slug}`

        axios.delete(url)
            .then(() => console.log("caching"));
    }

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
                        {/*<p>15/01/2020 -- Contact updated - changed first name</p>*/}
                        {/*<p>15/01/2020 -- Contact updated - changed email</p>*/}
                        {/*<p>12/01/2020 -- Contact created</p>*/}
                        {/*{console.log(history)}*/}
                        <History history={history}/>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <button className="col-3 btn btn-danger text-center" onClick={deleteContact}>DELETE CONTACT</button>
            </div>
        </div>
    )
}

export default Contact
