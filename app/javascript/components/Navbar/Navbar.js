import React from 'react';
import {Link} from "react-router-dom";

class Navbar extends React.Component {

    handleUpdate = (event) => {
        this.props.search(event.target.value)
    }

    render() {
        return (
            <nav className="navbar navbar-light">
                <a className="navbar-brand text-info font-weight-light title">
                    <Link to={"/"} className="card-link text-decoration-none text-info">
                        <h3 className="font-weight-light"> Agenda 📒</h3>
                    </Link>
                </a>
                <form className="form-inline">
                    <Link to={"/contacts/new"} className="btn btn-outline-light text-info my-2 my-sm-0">New contact</Link>
                </form>
            </nav>
        );
    }
}

export default Navbar;
