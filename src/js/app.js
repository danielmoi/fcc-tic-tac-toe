var positions = [];

$('.square').click(function() {
  console.dir(this);
  $(this).append('<i class="fa fa-times"></i>');
  positions.push(this.id);
  console.log(positions);
});

var track = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];