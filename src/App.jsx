import React, {Component} from 'react';
import { Button, Statistic, Modal, Header, Icon} from 'semantic-ui-react';

function Square(props) {
  return (
    <button className={props.value ? "square on" : "square off"} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends Component {
  renderSquare(i, j) {
    return (
      <Square
        value={this.props.squares[i][j]}
        onClick={() => this.props.onClick(i, j)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0, 0)}
          {this.renderSquare(0, 1)}
          {this.renderSquare(0, 2)}
          {this.renderSquare(0, 3)}
          {this.renderSquare(0, 4)}
        </div>
        <div className="board-row">
          {this.renderSquare(1, 0)}
          {this.renderSquare(1, 1)}
          {this.renderSquare(1, 2)}
          {this.renderSquare(1, 3)}
          {this.renderSquare(1, 4)}
        </div>
        <div className="board-row">
          {this.renderSquare(2, 0)}
          {this.renderSquare(2, 1)}
          {this.renderSquare(2, 2)}
          {this.renderSquare(2, 3)}
          {this.renderSquare(2, 4)}
        </div>
        <div className="board-row">
          {this.renderSquare(3, 0)}
          {this.renderSquare(3, 1)}
          {this.renderSquare(3, 2)}
          {this.renderSquare(3, 3)}
          {this.renderSquare(3, 4)}
        </div>
        <div className="board-row">
          {this.renderSquare(4, 0)}
          {this.renderSquare(4, 1)}
          {this.renderSquare(4, 2)}
          {this.renderSquare(4, 3)}
          {this.renderSquare(4, 4)}
        </div>
      </div>
    );
  }
}

class RestartModal extends Component {

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

    //create NEW random 2D array
    const squares_init = new Array(5);
    for (var i = 0; i < squares_init.length; i++) {
      squares_init[i] = new Array(5);
      for (var j = 0; j < squares_init[i].length; j++) {
        squares_init[i][j] = Math.random() >= 0.5;
      }
    }

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
            <RestartModal onClick={() => this.handleGameOverRestart()}/>
          }
        </div>
        
      </div>
    );
  }
}

class App extends Component {
  render() {

    //create initial random 2D array
    const squares_init = new Array(5);
    for (var i = 0; i < squares_init.length; i++) {
      squares_init[i] = new Array(5);
      for (var j = 0; j < squares_init[i].length; j++) {
        squares_init[i][j] = Math.random() >= 0.5;
      }
    }

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
export default App;