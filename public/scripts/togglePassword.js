$(document).ready(() => {

  $('.icon-info').click(
    (event) => {

    $(event.target).find('.password').toggleClass("open");

  });

});
