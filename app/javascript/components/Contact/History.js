import React from 'react';

export default class History extends React.Component {
    renderCards = (logs) => {
        // return logs.forEach(log => {
        //     console.log(log);
        // })
        debugger
        if (logs[0] === undefined) return
        debugger
        logs.forEach(log => {
            const attrs = log.attributes
            debugger
            return <p>{`${attrs.created_at} -- Event: ${attrs.event}`}</p>
        })
        // for (const [key, value] of Object.entries(logs)) {
        //     console.log(`${key}: ${value}`);
        // }
    }

    render() {
        const logs = this.props.history
        return(
            this.renderCards(logs)
        )
    }
}
