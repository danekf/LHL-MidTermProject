DROP TABLE IF EXISTS user_saved_logins CASCADE;
CREATE TABLE user_saved_logins (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  saved_username VARCHAR(255) NOT NULL,
  saved_password VARCHAR(255) NOT NULL,
  login_URL VARCHAR(255),
  service_name VARCHAR(255) NOT NULL,
  favourite BOOLEAN DEFAULT FALSE
);


