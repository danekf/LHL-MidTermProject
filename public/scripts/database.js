const users = require('/Users/mardin/lighthouse/LHL-MidtermProject/db/seeds/01_users.sql');

const getUserWithEmail = (email) => {
  return pool
    .query(`SELECT * FROM users WHERE email = $1;`, [email])
    .then((result) => {
      console.log(result.rows);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getUserWithEmail = getUserWithEmail;

const getUserByUsername = (username) => {
  return pool
    .query(`SELECT * FROM users WHERE username = $1;`, [username])
    .then((result) => {
      console.log(result.rows);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getUserByUsername = getUserByUsername;

const addUser =  (user) => {
  return pool.query(`
  INSERT INTO users(email, username, password, first_name, last_name)
  VALUES($1, $2, $3, $4, $5)
  RETURNING *;
`, [user.name, user.email, user.password])
    .then(res => {
      return res.rows[0];
    })
};
exports.addUser = addUser;

