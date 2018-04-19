// Load up the application styles
require("./styles/application.scss");

// Render the top-level React component
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button, Statistic, Modal, Header, Icon} from 'semantic-ui-react';
import gameOverModal from './components/modal.js';
import Board from './components/board.js'
import {generateRandomArray} from './actions/array.js'

const reducer = (state = {
    lights: generateRandomArray(),
    moves: 0,
    gameIsOver: false
}, action) => {
    switch (action.type) {
        case "CLICKED":
            console.log("light clicked");
            state = {
                ...state,
                lights: generateRandomArray(),
                moves: state.moves + 1,
            }
            break;
        case "RESTART":
            console.log("restart");
            break;
        case "GAMEOVER":
            console.log("game over");
            break;
    }
}

class Game extends Component {

    constructor(props) {
      super();
  
      //manage state with initial values
      this.state = {
        squares: props.squares_init,
        moves: props.moves_init,
        gameIsOver: props.gameIsOver_init
      }
    } 
  
    handleSquareClick(i, j) {
  
      var squares_new = this.state.squares;
  
      //toggle current
      squares_new[i][j] = !squares_new[i][j];
      //toggle left
      if (j != 0) {
        squares_new[i][j-1] = !squares_new[i][j-1];
      }
      //toggle right
      if (j != squares_new.length-1) {
        squares_new[i][j+1] = !squares_new[i][j+1];
      }
      //toggle top
      if (i != 0) {
        squares_new[i-1][j] = !squares_new[i-1][j];
      }
      //toggle bottom
      if (i != squares_new.length-1) {
        squares_new[i+1][j] = !squares_new[i+1][j]; 
      }
  
      //check if all the squares are off/if the game is over
      function isGameOver(rows) {
  
        
  
        for(var i = 0; i < squares_new.length; i++) {
          for(var j = 0; j < squares_new.length; j++) {
            if (squares_new[i][j] == true) {
              return false;
            }
          }
        }
  
        return true;
      }
      
      //update squares, add to move count, and check if game is over
      this.setState({
        squares: squares_new,
        moves: this.state.moves + 1,
        gameIsOver: isGameOver(squares_new)
      });
  
    }
  
    handleGameOverRestart() {
  
      //new game - game status is now true
      this.setState({
        gameIsOver: this.props.gameIsOver_init
      });
  
      //reset game squares and move count
      this.handleRestart();
    }
  
    handleRestart() {
  
    let squares_init = generateRandomArray();
  
      //reset game squares and move count in state
      this.setState({
        squares: squares_init,
        moves: this.props.moves_init
      });
    }
  
    render() {
      return (
        <div className="game">
          <h1> !LIGHTS </h1>
          <h1 className='bold'> OUT </h1>
          <div className="game-board">
            <Board
              squares={this.state.squares}
              onClick={(i, j) => this.handleSquareClick(i, j)}
            />
          </div>
          <div className="game-info">
            <Statistic inverted>
              <Statistic.Value>{this.state.moves}</Statistic.Value>
              <Statistic.Label>Total Moves</Statistic.Label>
            </Statistic>
            <Button inverted
              onClick={(e) => this.handleRestart(e)}>
              RESTART
            </Button>
            {this.state.gameIsOver == true &&
              <gameOverModal onClick={() => this.handleGameOverRestart()}/>
            }
          </div>
          
        </div>
      );
    }
  }
  
  class App extends Component {
    render() {

    let squares_init = generateRandomArray();
  
      //start with 0 moves
      const moves_init = 0;
  
      //game is not over
      const gameIsOver_init = false;
  
      return (
        <div className="app">
          <Game squares_init={squares_init} 
                moves_init={moves_init} 
                gameIsOver_init={gameIsOver_init}/>
        </div>
      );
    }
  }

ReactDOM.render(<App/>, document.getElementById('react-root'));