
$(() => {
//   const username_state = false;
//   const email_state = false;
//   $('.username').on('blur', function(){
//    const username = $('.username').val();
//    if (username == '') {
//      username_state = false;
//      return;
//    }
//    $.ajax({
//      url: 'register.js',
//      type: 'post',
//      data: {
//        'username_check' : 1,
//        'username' : username,
//      },
//      success: function(response){
//        if (response === 'taken' ) {
//          username_state = false;
//          $('.username').parent().removeClass();
//          $('.username').parent().addClass("form_error");
//          $('.username').siblings("span").text('Sorry... Username unavailable');
//        }else if (response !== 'taken') {
//          username_state = true;
//          $('.username').parent().removeClass();
//          $('.username').parent().addClass("form_success");
//          $('username').siblings("span").text('Username available');
//        }
//      }
//    });
//   });
//    $('.email').on('blur', function(){
//     const email = $('.email').val();
//     if (email === '') {
//       email_state = false;
//       return;
//     }
//     $.ajax({
//        url: 'register.js',
//        type: 'post',
//        data: {
//          'email_check' : 1,
//          'email' : email,
//        },
//        success: function(response){
//          if (response == 'taken' ) {
//            email_state = false;
//            $('.email').parent().removeClass();
//            $('.email').parent().addClass("form_error");
//            $('.email').siblings("span").text('Sorry... Email already registered');
//          }else if (response == 'not_taken') {
//            email_state = true;
//            $('.email').parent().removeClass();
//            $('.email').parent().addClass("form_success");
//            $('.email').siblings("span").text('Email available');
//          }
//        }
//     });
//   });

//   $('.signup').on('click', function(){
//     const username = $('.username').val();
//     const email = $('.email').val();
//     const password = $('.password').val();
//     if (username_state === false || email_state === false) {
//      $('#error_msg').text('Please complete all of the required fields in the form');
//    }else{
//        // proceed with form submission
//        $.ajax({
//          url: 'register.js',
//          type: 'post',
//          data: {
//            'save' : 1,
//            'email' : email,
//            'username' : username,
//            'password' : password,
//          },
//          success: function(response){
//            alert('You are now registered!');
//            $('.username').val('');
//            $('.email').val('');
//            $('.password').val('');
//          }
//        });
//     }
//   });
// });
//   $("#error-message-empty").hide();
//   $("#error-message-username-unavailable").hide();
//   $("#error-message-email-exists").hide();

//   // const getUserWithEmail = (email) => {
//   //   return pool
//   //     .query(`
//   //     SELECT *
//   //     FROM users
//   //     WHERE email = $1;`, [email])
//   //     .then((result) => {
//   //       console.log(result.rows);
//   //       return result.rows[0];
//   //     })
//   //     .catch((err) => {
//   //       console.log(err.message);
//   //     });
//   // };

//   //  const getUserByUsername = (username) => {
//   //   return pool
//   //     .query(`
//   //     SELECT *
//   //     FROM users
//   //     WHERE username = $1;`, [username])
//   //     .then((result) => {
//   //       console.log(result.rows);
//   //       return result.rows[0];
//   //     })
//   //     .catch((err) => {
//   //       console.log(err.message);
//   //     });
//   // };

//   //  const addUser =  (user) => {
//   //   return pool.query(`
//   //   INSERT INTO
//   //   users(email, username, password, first_name, last_name)
//   //   VALUES($1, $2, $3, $4, $5)
//   //   RETURNING *;
//   // `, [user.name, user.email, user.password])
//   //     .then(res => {
//   //       return res.rows[0];
//   //     })
//   // };

//   $(".registration-form").on("submit", function(event) {
//       const email = $(".email").val();
//       const username = $(".username").val();
//       const password = $(".password").val();
//       const firstName = $(".firstName").val();
//       const lastName = $(".lastName").val();

//       // If the email, username and password fields are empty:
//     if (!email || !username || !password) {
//       event.preventDefault();
//       $("#error-message-empty").slideDown(500, function() {
//         $("#error-message-empty").delay(3000).slideUp(500);
//       });
//       $("#error-message-username-unavailable").hide();
//       $("#error-message-email-exists").hide();
//     }
//     $.ajax({
//       url: '../routes/register.js',
//       type: 'post',
//       data: {
//         'username-check': 1,
//         'username': username,
//       },
//       function (response) {
//         if (response === 'taken') {
//           event.preventDefault();
//           $("#error-message-username-unavailable").slideDown(500, function() {
//             $("#error-message-username-unavailable").delay(3000).slideUp(500);
//           });
//           $("#error-message-empty").hide();
//           $("#error-message-email-exists").hide();
//       }
//       $.ajax
//     })
//   }
//   //   if (getUserByUsername(username)) {
//   //   if (getUserWithEmail(email)) {
//   // event.preventDefault();

//   //     $("#error-message-email-exists").slideDown(500, function() {
//   //       $("#error-message-email-exists").delay(3000).slideUp(500);
//   //     });
//   //     $("#error-message-empty").hide();
//   //     $("#error-message-username-unavailable").hide();
  //   }
})
