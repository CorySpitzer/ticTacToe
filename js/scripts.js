var Player = function(userName, mark) {
  this.userName = userName;
  this.mark = mark;
  this.game = 'no game';
};

Player.prototype.placeMark = function(x, y) {
  this.game.board.spaces[x][y].contains = this.mark;
};

var Space = function(coordinates, contains) {
  this.coordinates = coordinates;
  this.contains = contains;
};

var WinningCombo = function(space1, space2, space3) {
  this.spaces = [space1, space2, space3];
  var marks = ''
  this.spaces.forEach(function(space) {
    marks = marks + space.contains;
  });
  this.marks = marks;
};

WinningCombo.prototype.full = function() {
  // if at least one empty, then false, otherwise true
  if (this.marks.search(' ') >= 0) {
    return false;
  } else {
    return true;
  };
  // debugger;
  // var marks = this.spaces.join('');
  // if (marks[0].search(' ') >= 0) {
  //   return false;
  // } else if (marks[1].contains.search(' ') >= 0) {
  //   return false;
  // } else if (marks[2].contains.search(' ') >= 0) {
  //   return false;
  // } else {
  //   return true;
  // }
};

var Board = function() {
  this.spaces = [ [new Space([0,0], ' '), new Space([0,1], ' '), new Space([0,2], ' ')],
                  [new Space([1,0], ' '), new Space([1,1], ' '), new Space([1,2], ' ')],
                  [new Space([2,0], ' '), new Space([2,1], ' '), new Space([2,2], ' ')] ]
};

var Game = function(player1, player2) {
  this.player1 = player1;
  player1.game = this;
  this.player2 = player2;
  player2.game = this;
  this.board = new Board();
  this.winner = 'none';
};

Game.prototype.gameOverCheck = function() {
  this.winner = "person";
  var blah = "";
  this.board.spaces.forEach(function(column) {
    if (column[0].contains === 'x') {
      blah = "x";
    } else {
      blah = "y";
    };
  });
  this.winner = blah;
};

// &&
//      column[1].contains === 'x') &&
//      column[2].contains === 'x')
