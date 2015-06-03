var Player = function(userName, piece) {
  this.userName = userName;
  this.piece = piece;
};

var Space = function(coordinates, contains) {
  this.coordinates = coordinates;
  this.contains = contains;
};

var Board = function() {
  this.spaces = [ [new Space([0,2], ' '), new Space([1,2], ' '), new Space([2,2], ' ')],
                  [new Space([0,1], ' '), new Space([1,1], ' '), new Space([2,1], ' ')],
                  [new Space([0,0], ' '), new Space([1,0], ' '), new Space([2,0], ' ')]]
};

var Game = function(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.board = new Board();
};
