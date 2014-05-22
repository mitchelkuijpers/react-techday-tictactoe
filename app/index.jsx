/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');
var TicTacToeValidator = require('./lib/TicTacToeValidator');

require('./index.less');

window.React = React;

var Game = React.createClass({

  getInitialState: function() {
    var board = _.times(9, function() {
      return undefined;
    });

    return { 
      board: board, // an array with a length of 9 containing all the cells can be X, O or undefined.
      player: 'X', // the current player: X or O.
      winningCells: [], // indexes of the winning cells.
      winner: undefined // will become X or O.
    };
  },

  // Use this method to check for a winner it will set a winner and the
  // winningCells on the state object.
  checkForWinner: function(board) {
    var validationResult = TicTacToeValidator.validateBoard(board);
    if(validationResult.winner) {
      this.setState(validationResult); 
    }
  },

  // This should become the endresult of your components to get free styling
  render: function() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <h2>Current player: X</h2>
        <div className="board">
          <div className="cell winningCell">X</div>
          <div className="cell">O</div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell winningCell">X</div>
          <div className="cell">O</div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell winningCell">X</div>
        </div>
      </div>
    );
  }

});

React.renderComponent(<Game />, document.getElementById("app"));
