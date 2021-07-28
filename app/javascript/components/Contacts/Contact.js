import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Contact = (props) => {
    const {first_name, last_name, email, phone_number, slug} = props.attributes
    const name = `${first_name} ${last_name}`

    return (
        <div className="card card-width col-sm-12 col-md-6 col-lg-3 m-1 my-3">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{phone_number}</li>
            </ul>
            <div className="card-body">
                <Link to={"/" + slug} className="card-link text-decoration-none">+ Info</Link>
                <Link to={slug + "/edit"} className="card-link text-decoration-none">Edit</Link>
            </div>
        </div>
    )
}

export default Contact
