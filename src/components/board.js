import React, {Component} from 'react';
import Square from './square.js';

export default class Board extends Component {

    renderSquare(i, j) {
      return (
        <Square
          value={this.props.squares[i][j]}
          onClick={() => this.props.onClick(i, j)}
        />
      );
    }
  
    render() {
      const Grid = this.props.squares.map((row, i) => 
        <div className="board-row" key={i}>
          {row.map((column, j) =>
            <div key={j}>
              {this.renderSquare(i, j)}
            </div>
          )}
        </div>
      );
      return (
        <div>
          {Grid}
        </div>
      );
    }
}