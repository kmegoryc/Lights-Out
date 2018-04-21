import React, {Component} from 'react';

export const Square = (props) => {
    return (
        <button
            className={'square ' + [props.value
                ? 'on'
                : 'off']}
            onClick={props.onClick}>
            {props.value}
        </button>
    )

}