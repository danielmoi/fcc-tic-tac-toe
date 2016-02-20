function echo(obj) {
  console.log(obj);
}
window.echo = console.log.bind(console);

/*
 TO DO
 
 1. [  ] Change colour upon hover
 2. [ * ] Highlight tiles along winning line – 160220
 3. [  ] Player to choose icon
 4. [  ] 1 or 2 player
 5. [  ] Who goes first
 6. [  ] Add AI
 7. [  ] Disable pointer if tile is played already
 
 */

var arrBoard = ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
  arrNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],

  turn,
  gameStatus = 'stop',

  index,
  winner,

  playerMarker,
  computerMarker,
  markerCross = '<span class="icon">X</span>',
  markerCircle = '<span class="icon">O</span>';

$('.x').click(function () {
  playerMarker = markerCross;
  computerMarker = markerCircle;
  $('.choose').hide();
  gameStatus = 'go';
  $('#message').html('Game on!' + '<br>' + 'player marker: <span class="highlight">X</span>');
});

$('.o').click(function () {
  playerMarker = markerCircle;
  computerMarker = markerCross;
  $('.choose').hide();
  gameStatus = 'go';
  $('#message').html('Game on!' + '<br>' + 'player marker: <span class="highlight">O</span>');




});

$('.square').click(function () {
  if (gameStatus === 'go') {
    var self = this;
    playerMove(self.id);
    computerMove();
  }
});

function playerMove(id) {
  if (gameStatus === 'go') {

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

    $('#' + id).append(playerMarker);

    echo(arrBoard);
    checkBoard();

    // now allow computer to move
    turn = 'computerTurn';
    return;
  }
  return;
}

function resetBoard() {
  arrBoard = ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'];
  $('.square').empty();
  $('#message').empty();
  $('.square').removeClass('highlight');
  turn = '';
  gameStatus = 'stop';
  winner = ''
  echo(arrBoard);
  playerMarker = '';
  computerMarker = '';
  $('.choose').show();
}

function displayWinner(arg) {
  winner = arg;
  gameStatus = 'stop';
  echo(winner);
  $('#message').html('The winner is: <span id="winner" class="winner">' + winner + '</span> !!!');
}

function checkBoard() {
  if (arrBoard.indexOf('empty') === -1) {
    echo(arrBoard.length);
    echo('game over');
    $('#message').html('It\'s a <span class="winner">tie</span> !!!');
    return false;
  }
  // rows
  if (arrBoard[0] === arrBoard[1] && arrBoard[1] === arrBoard[2] && arrBoard[0] !== 'empty') {
    displayWinner(arrBoard[0]);
    $('#zero,#one, #two').addClass('highlight');
    echo('game over');
    return false;
  }
  if (arrBoard[3] === arrBoard[4] && arrBoard[4] === arrBoard[5] && arrBoard[3] !== 'empty') {
    $('#three,#four, #five').addClass('highlight');
    displayWinner(arrBoard[3]);
    echo('game over');
    return false;
  }
  if (arrBoard[6] === arrBoard[7] && arrBoard[7] === arrBoard[8] && arrBoard[6] !== 'empty') {
    $('#six,#seven, #eight').addClass('highlight');
    displayWinner(arrBoard[6]);
    echo('game over');
    return false;
  }

  // columns
  if (arrBoard[0] === arrBoard[3] && arrBoard[3] === arrBoard[6] && arrBoard[0] !== 'empty') {
    $('#zero,#three, #six').addClass('highlight');
    displayWinner(arrBoard[0]);
    echo('game over');
    return false;
  }
  if (arrBoard[1] === arrBoard[4] && arrBoard[4] === arrBoard[7] && arrBoard[1] !== 'empty') {
    $('#one,#four, #seven').addClass('highlight');
    displayWinner(arrBoard[1]);
    echo('game over');
    return false;
  }
  if (arrBoard[2] === arrBoard[5] && arrBoard[5] === arrBoard[8] && arrBoard[2] !== 'empty') {
    $('#two,#five, #eight').addClass('highlight');
    displayWinner(arrBoard[2]);
    echo('game over');
    return false;
  }

  // diagonals
  if (arrBoard[0] === arrBoard[4] && arrBoard[4] === arrBoard[8] && arrBoard[4] !== 'empty') {
    $('#zero,#four, #eight').addClass('highlight');
    displayWinner(arrBoard[0]);
    echo('game over');
    return false;
  }
  if (arrBoard[6] === arrBoard[4] && arrBoard[4] === arrBoard[2] && arrBoard[4] !== 'empty') {
    $('#six,#four, #two').addClass('highlight');
    displayWinner(arrBoard[6]);
    echo('game over');
    return false;
  }


  return true;
}

function computerMove() {
  if (gameStatus === 'go') {
    if (turn === 'computerTurn') {

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
      $('#' + indexWord).append(computerMarker);

      checkBoard();

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