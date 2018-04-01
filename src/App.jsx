import React, {Component} from 'react';

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

    //manage state
    this.state = {
      squares: squares_init,
      moves: moves_init
    }
  } 

  handleClick(i, j) {
  
    var squares_new =  this.state.squares
    //left
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
    
    this.setState({
      squares: squares_new,
      moves: this.state.moves + 1
    });
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.state.squares}
            onClick={(i, j) => this.handleClick(i, j)}
          />
        </div>
        <div className="game-info">
          <h4>Number of Moves: {this.state.moves}</h4>
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