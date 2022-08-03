
$(() => {
  $("#error-message-empty").hide();
  $("#error-message-username-unavailable").hide();
  $("#error-message-email-exists").hide();

  const getUserWithEmail = (email) => {
    return pool
      .query(`
      SELECT *
      FROM users
      WHERE email = $1;`, [email])
      .then((result) => {
        console.log(result.rows);
        return result.rows[0];
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

   const getUserByUsername = (username) => {
    return pool
      .query(`
      SELECT *
      FROM users
      WHERE username = $1;`, [username])
      .then((result) => {
        console.log(result.rows);
        return result.rows[0];
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

   const addUser =  (user) => {
    return pool.query(`
    INSERT INTO
    users(email, username, password, first_name, last_name)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *;
  `, [user.name, user.email, user.password])
      .then(res => {
        return res.rows[0];
      })
  };

  $(".registration-form").on("submit", function(event) {
      const email = $(".email").val();
      const username = $(".username").val();
      const password = $(".password").val();
      const firstName = $(".firstName").val();
      const lastName = $(".lastName").val();

      // If the email, username and password fields are empty:
    if (!email || !username || !password) {
      event.preventDefault();
      $("#error-message-empty").slideDown(500, function() {
        $("#error-message-empty").delay(3000).slideUp(500);
      });
      $("#error-message-username-unavailable").hide();
      $("#error-message-email-exists").hide();
    }
    if (getUserByUsername(username)) {
  event.preventDefault();

      $("#error-message-username-unavailable").slideDown(500, function() {
        $("#error-message-username-unavailable").delay(3000).slideUp(500);
      });
      $("#error-message-empty").hide();
      $("#error-message-email-exists").hide();
    }
    if (getUserWithEmail(email)) {
  event.preventDefault();

      $("#error-message-email-exists").slideDown(500, function() {
        $("#error-message-email-exists").delay(3000).slideUp(500);
      });
      $("#error-message-empty").hide();
      $("#error-message-username-unavailable").hide();
    }
  })
});
