import React from 'react';
import Log from "./Log";

export default class History extends React.Component {
    renderLogs = (logs) => {
        if (logs[0] === undefined) return null
        const allLogs = []

        logs.map(log => {
            allLogs.push(<Log attributes={log} key={log.id}/>)
        })

        return allLogs
    }

    render() {
        const logs = this.props.history
        return(
            <div>{this.renderLogs(logs)}</div>
        )
    }
}
