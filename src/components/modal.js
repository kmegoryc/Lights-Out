import React, {Component} from 'react';
import {Modal} from 'semantic-ui-react';

export default class gameOverModal extends Component {
  render() {
    return (<Modal basic defaultOpen
      size='small'
      onClick={this.props.onClick}
      header="Congratulations!"
      content={`You solved Lights Out in ${this.props.moves} moves! Would you like to play again?`}
      actions={[{
        key: 'yes',
        content: "Yes",
        color: "green",
        inverted: true,
        icon: 'checkmark'
      }
    ]}/>);
  }
}