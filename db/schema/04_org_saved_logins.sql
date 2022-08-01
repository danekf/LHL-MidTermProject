DROP TABLE IF EXISTS org_saved_logins CASCADE;
CREATE TABLE org_saved_logins (
  id SERIAL PRIMARY KEY NOT NULL,
  org_id INTEGER REFERENCES organisations(id) NOT NULL,
  saved_username VARCHAR(255) NOT NULL,
  saved_password VARCHAR(255) NOT NULL

);
