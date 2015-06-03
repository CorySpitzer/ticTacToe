describe('Player', function() {
  it("initializes a player", function() {
    var player1 = new Player("Clare", "x");
    expect(player1.userName).to.equal("Clare");
    expect(player1.piece).to.equal("x");
  });
});

describe('Space', function() {
  it("initializes a space", function() {
    var bottomLeft = new Space([0, 0], ' ');
    expect(bottomLeft.coordinates).to.eql([0,0]);
    expect(bottomLeft.contains).to.equal(' ');
  });
});

describe('Board', function() {
  it("initalizes a board", function() {
    var newBoard = new Board();
    var topLeft = new Space([0,2], ' ');
    expect(newBoard.spaces[0][0]).to.eql(topLeft);
  });
});

describe('Game', function() {
  it("initializes a game", function() {
    var clare = new Player("Clare", "x");
    var cory = new Player("Cory", "o");
    var newGame = new Game(clare, cory);
    expect(newGame.player1).to.equal(clare);
    expect(newGame.player2).to.equal(cory);
    var myBoard = new Board()
    expect(newGame.board).to.eql(myBoard);
  });
});
