$(document).ready(() => {
  //when user attempts to submit a log in info, check to ensure stuff is filled out
  $('#user_login').submit(
    (event) => {
      let login = $("#login").val();
      let password = $("#password-field").val();

      //check that the user actually input data, interupt ONLY if there is an issue
      if (login.length === 0) {
        event.preventDefault();
        let alert = 'Please input a username or email before hitting log in.';
        $("#alert").html(alert);
      } else if (password.length === 0) {
        event.preventDefault();
        let alert = 'Please input a password before hitting log in.';
        $("#alert").html(alert);

      }
    }
  );

});
