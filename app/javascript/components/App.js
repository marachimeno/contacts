import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Contacts from './Contacts/Contacts'
import Contact from './Contact/Contact'
import NewContact from './NewContact/NewContact'
import GetUpdateContact from "./UpdateContact/GetUpdateContact";
import {Navbar} from "./Navbar/Navbar";


class App extends React.Component {
    render() {
        return (
            <Switch>
                <div className="container">
                    <div className="my-3">
                        <Navbar />
                    </div>
                    <Route exact path="/" component={Contacts} />
                    <Route exact path="/:slug" component={Contact} />
                    <Route exact path="/contacts/new" component={NewContact} />
                    <Route exact path="/:slug/edit" component={GetUpdateContact} />
                </div>
            </Switch>
        )
    }
}

export default App;
