// Styles
require("../styles/application.scss");

// React
import React, {Component} from 'react';
import {connect} from "react-redux";

// External Libraries
import {Button} from 'semantic-ui-react';

// Internal Components
import {Header} from '../components/header.js'
import Modal from '../components/modal.js';
import Board from '../components/board.js';
import Statistic from '../components/statistic.js';

import {squareClicked, restartGame, handleGameCompleted} from "../actions/actions.js"

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="game">
          <Header/>
          <div className="game-board">
            <Board
              squares={this.props.game.lights}
              onClick={(i, j) => this.props.squareClicked(i, j)}/>
          </div>
          <div className="game-info">
            <Statistic moves={this.props.game.moves}/>
            <Button inverted onClick={(e) => this.props.restartGame()}>
              RESTART
            </Button>
            {this.props.game.gameCompleted && <Modal
              onClick={(e) => this.props.handleGameCompleted()}
              moves={this.props.game.moves}/>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {game: state.game}
};

const mapDispatchToProps = (dispatch) => {
  return {
    squareClicked: (i, j) => {
      dispatch(squareClicked(i, j));
    },
    restartGame: () => {
      dispatch(restartGame());
    },
    handleGameCompleted: () => {
      dispatch(handleGameCompleted());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);