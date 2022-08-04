
$(document).ready(() => {

  $('.username').on('click',
  (event) => {
    let password = $(event.target).dosomething;
    $(password).select();
    document.execCommand("copy");
  })

  $('.password').on('click',
  (event) => {
    let password = $(event.target).dosomething;
    $(password).select();
    document.execCommand("copy");
  })


});


