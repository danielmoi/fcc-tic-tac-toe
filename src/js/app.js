function echo(obj) {
  console.log(obj);
}
window.echo = console.log.bind(console);

var arrBoard = [],
  turn,
    index,
    playerIcon,
    computerIcon,
    iconCross = '<i class="fa fa-times"></i>',
    iconCircle = '<i class="fa fa-circle-o"></i>';

$('.square').click(function () {
  var self = this;
  playerMove(self.id);

  computerMove();

});

var arrNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

function playerMove(id) {
  
  turn = 'playerTurn';
  
  // get index from arrNames
  index = arrNames.indexOf(id);
  
  // check square is occupied by player
  if (arrBoard[index] === 'player') {
    echo('you\'re already here');
    return;
  }
  
  // check if square is occupied by computer
  if (arrBoard[index] === 'computer') {
    echo('computer here');
    return;
  }
  
  // write to arrBoard
  arrBoard[index] = 'player';
  
  
  // draw to screen
  $('#'+id).append(iconCross);
  
  
  echo(arrBoard);
  
  // now allow computer to move
  turn = 'computerTurn';
  return;
}

       


function resetBoard() {
  arrBoard = [];
  $('.square').empty();
  echo(arrBoard);
}

function computerMove() {
  if (turn === 'computerTurn') {
    var random = Math.floor(Math.random() * 9);
    echo('computer move: ' + random);
    
    // convert move to word
    var index = arrNames[random];
    echo(index);
    
    $('#'+index).append(iconCircle);
    
    turn = 'playerTurn';
  }
  return;
}

$('.resetBoard').click(function () {
  resetBoard();
});

$('.computer').click(function () {
  computerMove();
});