import React from 'react';
import Card from "./Card";

class CardsList extends React.Component {
    renderCards = () => {
        return this.props.cards.map(card => {
            return <Card person={card.attributes} key={card.attributes.email}/>
        })
    }

    render() {
        return(
            this.renderCards()
        )
    }
}

export default CardsList;
