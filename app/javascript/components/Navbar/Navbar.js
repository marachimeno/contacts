import React from 'react';
import {Anchor} from "./NavbarComponents";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light">
            <div className="navbar-brand text-info font-weight-light title">
                <Anchor path='/'
                      linkClass='card-link text-decoration-none text-info'
                      titleClass='font-weight-light'
                      title={<h3 className='font-weight-light'>Agenda 📒</h3>}
                />
            </div>
            <form className="form-inline">
                <Anchor path='/contacts/new'
                        linkClass='btn btn-outline-light text-info my-2 my-sm-0'
                        titleClass=''
                        title='New contact'
                />
            </form>
        </nav>
    );
}
