import React, {Component} from 'react';
import {Statistic} from 'semantic-ui-react';

export default class movesStatistic extends Component {
    render() {
        return (
            <Statistic inverted>
                <Statistic.Value>{this.props.moves}</Statistic.Value>
                <Statistic.Label>Total Moves</Statistic.Label>
            </Statistic>
        )
    }
}