import React, {Component} from 'react';

export default class Square extends Component {
    render () {
        return (
            <button className = {'square ' +  [this.props.value ? 'on' : 'off']} onClick = {this.props.onClick}>
                {this.props.value}
            </button>
        )
    }
}