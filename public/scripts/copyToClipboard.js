
$(document).ready(() => {
  $('#copyPasswordToClipboard').on('click',
  (event) => {
    let password = $("#password-field");
    $(password).select();
    document.execCommand("copy");


  })
});
