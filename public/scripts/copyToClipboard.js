
$(document).ready(() => {

  $('#copyPasswordToClipboard').on('click',
    (event) => {
      let password = $("#password-field");
      $(password).select();
      document.execCommand("copy");
    });

  $('.username').on('click',
    (event) => {
      let username = $(event.target).text().slice(10);

      username = username.replace(/\s+/g, ''); //remove whitespace

      let temp = document.createElement("textarea");

      //create temp body element to hold value
      document.body.appendChild(temp);
      temp.value = username;
      temp.select();
      document.execCommand("copy");
      //remove temp body element
      document.body.removeChild(temp);

      alert("Username copied to clipboard.");

    });

  $('.password').on('click',
    (event) => {
      let password = $(event.target).text().slice(10);
      password = password.replace(/\s+/g, ''); //remove whitespace

      let temp = document.createElement("textarea");

      //create temp body element to hold value
      document.body.appendChild(temp);
      temp.value = password;
      temp.select();
      document.execCommand("copy");
      //remove temp body element
      document.body.removeChild(temp);

      alert("Password copied to clipboard.");
    });


});


