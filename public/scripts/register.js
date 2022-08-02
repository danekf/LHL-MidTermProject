$(() => {

  $("#error-message-empty").hide();
  $("#error-message-username-unavailable").hide();
  $("#error-message-email-exists").hide();

  $(".registeration-form").on("submit", function() {
    event.preventDefault();
      const email = $(".email").val();
      const username = $(".username").val();
      const password = $(".password").val();
      const firstName = $(".firstName").val();
      const lastName = $(".lastName").val();

    if (!email || !username || !password) {
      $("#error-message-empty").slideDown(500, function() {
        $("#error-message-empty").delay(3000).slideUp(500);
      });
      $("#error-message-username-unavailable").hide();
      $("#error-message-email-exists").hide();
    }
    if (username) {
      $("#error-message-username-unavailable").slideDown(500, function() {
        $("#error-message-username-unavailable").delay(3000).slideUp(500);
      });
      $("#error-message-empty").hide();
      $("#error-message-email-exists").hide();
    }
    if (email) {
      $("#error-message-email-exists").slideDown(500, function() {
        $("#error-message-email-exists").delay(3000).slideUp(500);
      });
      $("#error-message-empty").hide();
      $("#error-message-username-unavailable").hide();
    }
  })
});
