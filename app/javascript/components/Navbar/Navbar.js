import React from 'react';

class Navbar extends React.Component {

    handleUpdate = (event) => {
        this.props.search(event.target.value)
    }

    render() {
        return (
            <nav className="navbar navbar-light">
                <a className="navbar-brand text-info font-weight-light title">
                    <h3 className="font-weight-light"> Agenda 📒</h3>
                </a>
                {/*<form className="form-inline">*/}
                {/*    <input className="form-control search-box-width px-4" type="search" placeholder="Find contact by name"*/}
                {/*           aria-label="Search"*/}
                {/*           onChange={this.handleUpdate}*/}
                {/*    />*/}
                {/*</form>*/}
                <form className="form-inline">
                    <button className="btn btn-outline-light text-info my-2 my-sm-0" type="submit">New contact</button>
                </form>
            </nav>
        );
    }
}

export default Navbar;
