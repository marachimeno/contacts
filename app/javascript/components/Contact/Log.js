import React from 'react';

export default class Log extends React.Component {
    render() {
        let log = this.props.attributes.attributes
        let timestamp = log.created_at.split('T')
        let date = timestamp[0]
        let time = timestamp[1].split('.')

        return(
            <p>{`${date} | ${time} -- Event: ${log.event}`}</p>
        )
    }
}
