function echo(obj) {
  console.log(obj);
}
window.echo = console.log.bind(console);

var arrBoard = ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
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
  echo('player move: ' + index);
  echo('arrBoard[index]: ' + arrBoard[index]);

  $('#' + id).append(iconCross);

  echo(arrBoard);

  // now allow computer to move
  turn = 'computerTurn';
  return;
}




function resetBoard() {
  arrBoard = ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'];
  $('.square').empty();
  echo(arrBoard);
}

function checkBoard() {
  if (arrBoard.indexOf('empty') === -1) {
    echo(arrBoard.length);
    echo('game over');
    return false;
  }
  return true;
}

function computerMove() {
  if (turn === 'computerTurn') {
    if (checkBoard()) {
      do {
        var random = Math.floor(Math.random() * 9);
        echo('random: ' + random);

        // convert move to word
        echo('computer index: ' + random);
        echo('arrBoard[index]: ' + arrBoard[random]);

      }
      while (arrBoard[random] === 'player' || arrBoard[random] === 'computer');


      arrBoard[random] = 'computer';
      echo('computer move: ' + random);

      var indexWord = arrNames[random];
      $('#' + indexWord).append(iconCircle);

      turn = 'playerTurn';
    }
  }
  return;
}

$('.resetBoard').click(function () {
  resetBoard();
});

$('.computer').click(function () {
  computerMove();
});