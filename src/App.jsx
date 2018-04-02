import React, {Component} from 'react';
import { Button, Statistic, Modal} from 'semantic-ui-react';

function Square(props) {
  return (
    <button className={props.value ? "on square" : "off square"} onClick={props.onClick}>
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

class Game extends Component {

  constructor(props) {
    super(props);

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

    const gameOver_init = false;

    //manage state
    this.state = {
      squares: squares_init,
      moves: moves_init,
      gameOver: gameOver_init
    }
  } 

  handleSquareClick(i, j) {
    var squares_new =  this.state.squares
    //left
    squares_new[i][j] = !squares_new[i][j]
    if (j != 0) {
      squares_new[i][j-1] = !squares_new[i][j-1];
    }
    //right
    if (j != squares_new.length-1) {
      squares_new[i][j+1] = !squares_new[i][j+1];
    }
    //top
    if (i != 0) {
      squares_new[i-1][j] = !squares_new[i-1][j];
    }
    //bottom
    if (i != squares_new.length-1) {
      squares_new[i+1][j] = !squares_new[i+1][j]; 
    }

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
    
    this.setState({
      squares: squares_new,
      moves: this.state.moves + 1,
      gameOver: isGameOver(squares_new)
    });
  }

  handleRestart() {

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

    this.setState({
      squares: squares_init,
      moves: moves_init
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
        </div>
        
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Game/>
    );
  }
}
export default App;