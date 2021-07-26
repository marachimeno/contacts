import React from 'react';
// import './card.css';

class Card extends React.Component {
    render() {
        const name = `${this.props.person.firstName} ${this.props.person.lastName}`
        const email = this.props.person.email
        const phoneNumber = this.props.person.phoneNumber
        const imageUrl = this.props.person.imageUrl
        const alt = `${this.props.person.firstName}'s image`

        return (
            <div className="card card-width col-sm-12 col-md-6 col-lg-3 m-1 my-3">
                <img src={imageUrl} className="card-img-top user-img mx-auto py-3" alt={alt}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{phoneNumber}</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link text-decoration-none">+ Info</a>
                    <a href="#" className="card-link text-decoration-none">Edit</a>
                    <a href="#" className="card-link text-decoration-none">Delete</a>
                </div>
            </div>
        );
    }
}


export default Card;
