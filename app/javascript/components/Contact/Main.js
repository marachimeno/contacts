import {Navbar} from "../Navbar/Navbar";
import React from "react";
import {History} from "./History";

export const Main = (props) => {
    return (
        <div className="container">
            <div className="search-bar my-3">
                <Navbar />
            </div>
            <div className="row p-4">
                <div className="col-8 p-3">
                    <div className="mb-5 mt-4 mx-4">
                        <h4>❝Name❞</h4>
                        <p>{props.name}</p>
                    </div>
                    <div className="mb-5 mt-4 mx-4">
                        <h4>Email 📧</h4>
                        <p>{props.contact.email}</p>
                    </div>
                    <div className="mb-5 mt-4 mx-4">
                        <h4>Phone number 📱</h4>
                        <p>{props.contact.phone_number}</p>
                    </div>
                </div>
                <div className="col-4 p-3 mt-4">
                    <h3>Changes History 📑</h3>
                    <div className="py-3 px-1">
                        <History history={props.history}/>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <button className="col-3 btn btn-danger text-center" onClick={props.deleteContact}>DELETE CONTACT</button>
            </div>
        </div>
    )
}
