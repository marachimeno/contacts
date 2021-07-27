import React, {useEffect, useState} from 'react';
import UpdateContact from './UpdateContact'

export default class Test extends React.Component {
    render() {
        const person = {
            firstName: "Mara",
            lastName: "Chimeno",
            email: "marachimeno@gail.com",
            phoneNumber: "+447716614372",
            slug: "marachimenogailcom"
        };

        return(
            <div><UpdateContact person={person}/></div>
        )
    }
}
