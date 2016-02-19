function echo(obj) {
  console.log(obj);
}
window.echo = console.log.bind(console);

var arrBoard = [],
  turn;

$('.square').click(function () {
  var self = this;
  var obj = {};
  obj.index = '';
  $(self).append('<i class="fa fa-times"></i>');
  checkSquare(self.id);
  echo('line 14: obj.index: ' + obj.index);
  playerMove(index);
  computerMove();

});

var arrNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

function checkSquare(id) {
  index = arrNames.indexOf(id);
  obj.index = index;
  echo('line 23: index: ' + index);
}
       
       
       
function playerMove(index) {
  arrBoard[index] = 'player';
  echo('line 30: '+ arrBoard);
}

function resetBoard() {
  arrBoard = [];
  $('.square').empty();
  echo(arrBoard);
}

function computerMove() {
  var random = Math.floor(Math.random() * 9);
  echo(random);
}

$('.resetBoard').click(function () {
  resetBoard();
});

$('.computer').click(function () {
  computerMove();
});