import React from 'react';
import CardsList from "./CardsList";
import Navbar from "../Navbar/Navbar";

class Contacts extends React.Component {
    // search = (keyword) => {
    //    let cards = []
    //    if (keyword === '' || keyword === null)
    //       // show all
    //    else
    //       allDbPersons.map(person => {
    //           let fullName = `${person.firstName} ${person.lastName}`
    //           if (fullName.includes(keyword)) cards.push(person)
    //       })
    //    this.setState({cards})
    // }

    constructor(props) {
        super(props);

        const person = {
            firstName: "Mara",
            lastName: "Chimeno",
            email: "marachimeno@gail.com",
            phoneNumber: "+447716614372",
            imageUrl: "/user.png"
        };

        const person2 = {
            firstName: "Eva",
            lastName: "Chimeno",
            email: "maracimeno@gmail.com",
            phoneNumber: "+447716614372",
            imageUrl: "/user.png"
        };

        const person3 = {
            firstName: "Aelio",
            lastName: "Amaral",
            email: "marachimeno@gmai.com",
            phoneNumber: "+447716614372",
            imageUrl: "/user.png"
        };

        const cards = [
            {person: person},
            {person: person2},
            {person: person3}
        ];

        this.state = {
            cards: cards,
            selectedPerson: person
        }

    }

    render() {
        return (
            <div className="container">
                <div className="search-bar my-3">
                    {/*<SearchBar search={this.search} />*/}
                    <Navbar />
                </div>
                <div className="cards-index row justify-content-around py-5">
                    <CardsList cards={this.state.cards}/>
                </div>
            </div>
        )
    }
}

export default Contacts;
