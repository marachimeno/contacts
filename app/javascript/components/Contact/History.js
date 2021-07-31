import React from 'react';
import {Log} from "./Log";

export const History = (props) => {
    const renderLogs = (logs) => {
        if (logs[0] === undefined) return null
        const allLogs = []

        logs.map(log => {
            allLogs.push(<Log attributes={log} key={log.id}/>)
        })

        return allLogs
    }

    const logs = props.history
    return(
        <div>{renderLogs(logs)}</div>
    )
}
