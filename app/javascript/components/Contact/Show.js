import React from "react";
import {History} from "./History";
import {Field} from "./ShowFields";

export const Show = (props) => {
    return (
        <div>
            <div className="row p-4">
                <div className="col-8 p-3">
                    <Field title='❝Name❞' name={props.name}/>
                    <Field title='Email 📧' name={props.contact.email}/>
                    <Field title='Phone number 📱' name={props.contact.phone_number}/>
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
