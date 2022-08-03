
$(document).ready(() => {
  $('#copyToClipboard').on('click',
  (event) => {
    let password = $("#password-field");
    $(password).select();
    document.execCommand("copy");


  })
});
