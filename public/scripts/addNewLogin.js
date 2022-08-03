$(document).ready(function () {
  //user submits login
  $('#saveLogin').submit(
    (event) => {
      let login = $("#login").val();
      let loginName = $("#loginName").val();
      let password = $("#password-field").val();
      console.log(login);


      //check that the user actually input data, interupt ONLY if there is an issue
      if (login.length === 0){
        event.preventDefault();
        let alert ='Please input a username or email before hitting log in.'
        $("#alert").html(alert);
      }
      else if(password.length === 0){
        event.preventDefault();
        let alert ='Please input a password before hitting log in.';
        $("#alert").html(alert);
      }
      else if(loginName.length === 0){
        event.preventDefault();
        let alert ='Please name this login.';
        $("#alert").html(alert);
      }
    });
});
