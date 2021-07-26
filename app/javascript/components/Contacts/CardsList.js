import React from 'react';
import Card from "./Card";

class CardsList extends React.Component {
    renderCards = () => {
        return this.props.cards.map(card => {
            return <Card person={card.person} key={card.person.email}/>
        })
    }

    render() {
        return(
            this.renderCards()
        )
    }
}

export default CardsList;
