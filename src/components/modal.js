import React, {Component} from 'react';

export default class gameOverModal extends Component {
    render() {
      return (
        <Modal basic open size='small'
          header = "Congratulations!"
          content = "You solved Lights Out! Would you like to play again?"
          actions = {[{key: 'yes', content: "Yes", color: "green", inverted: true, icon: 'checkmark'}]}
          onClick = {this.props.onClick}
        />
      );
    }
  }