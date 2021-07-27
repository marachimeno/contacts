import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Contacts from './Contacts/Contacts'
import Contact from './Contact/Contact'
import NewContact from './NewContact/NewContact'
import UpdateContact from './UpdateContact/UpdateContact'
import Form from './Form/Form'
import Test from "./UpdateContact/Test";

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/:slug" component={Contact} />
                <Route exact path="/contacts/new" component={NewContact} />
                <Route exact path="/:slug/edit" component={Test} />
            </Switch>
        )
    }
}

export default App;
