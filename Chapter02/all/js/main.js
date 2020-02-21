$(function () {
  $('#typo').on('click', function () {
    $('#typo .inner').animate({
      opacity: 0,
      fontSize: '0px'
    }, 1500, 'linear', function () {
      $(this).animate({
        opacity: 1,
        fontSize: '100px'
      }, 1500);
    });
  });
});
