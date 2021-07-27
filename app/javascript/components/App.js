import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Contacts from './Contacts/Contacts'
import Contact from './Contact/Contact'
import NewContact from './NewContact/NewContact'
import Form from './Form/Form'

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/:slug" component={Contact} />
                <Route exact path="/contacts/new" component={Form} />
            </Switch>
        )
    }
}

export default App;
