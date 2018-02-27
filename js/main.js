$("#toggle").click(function() {
  $(this).toggleClass('on');
  $('#resize').toggleClass('active');
});

$('.hero').waypoint(function(direction) {
  if (direction == "down") {
    $('.nazgul').addClass('sticky-menu');
    $('#toggle').addClass('tog-move')
  } else if (direction == "up") {
    $('.nazgul').removeClass('sticky-menu');
    $('#toggle').removeClass('tog-move')
  }
});

$('.container').waypoint(function(direction) {
  if (direction == "down") {
    $('.up-btn').addClass('sticky-up');
  } else if (direction == "up") {
    $('.up-btn').removeClass('sticky-up');
  }
});
