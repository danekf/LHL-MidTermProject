
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/danekf/Signum-App/blob/feature/readme/images/Signum%20S.png">
    <img src="images/Signum S.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">SIGNUM</h3>

  <p align="center">
    A password saver built by LHL students for their midterm Project
    <br />
    <a href="https://github.com/danekf/Signum-App"><strong>Explore the project »</strong></a>
    <br />
    <br />
    <a href="https://github.com/danekf/https://github.com/danekf/Signum-App/issues">Report Bug</a>
    ·
    <a href="https://github.com/danekf/https://github.com/danekf/Signum-App/issues">Request Feature</a>
  </p>
</div>
<a name ="readme-top"></a>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
   <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#database-setup">Database Setup</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#database-setup">Database Setup</a></li>
        <li><a href="#repo-setup">Repo Setup</a></li>
        <li><a href="#warnings-tips">Warnings & Tips</a></li>
    </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#app-images">App Images</a></li>

  </ol>
</details>

<!-- ABOUT -->
## About The Project

[![SignumScreenshot][product-screenshot]](https://github.com/danekf/LHL-MidtermProject)

Signum is a web app that serves as a password manager for its end users.

### Built With
<ul>
  <li>express, for server setup</li>
  <li>bcrypt, for encryption</li>
  <li>chalk, for a user pleasing server console</li>
  <li>cookie session, for storing session cookies</li>
  <li>ejs, as a view engine</li>
  <li>bootstrap, for styling</li>
  <li>jquery, for dynamic events </li>
  <li>postgres, for database </li>
  <li>nodemon, for automatic server resets on save</li>
  <li>morgan, for logging of server requests<li>
and many more...
</ul>
<br>

This project aims to have its developpers hone their frontend, and backend skills, including PSQL to build a cohesive end product.

A user is able to register, create new saved logins and set them as favourites for easy access. It has dynamic viewport elements, so that mobile and desktop have optimized views of data.

Passwords are hidden by default but the login area can be clicked to view it.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Getting Started

## Database Setup
To setup your database for the project, follow these instructions prior to forking and cloning the repo.

<br>
<br>

## Repo Setup

1. Fork this repo
2. Clone your forked repo
```sh
   git clone https://github.com/your_username_/Signum-App
   ```
3. Create a new `.env` in the root folder by using `.env.example` as a reference.

4. Update the .env file with your correct local information (You can change this if youd like but ensure all references are updated)
  ```sh
    - username: `labber` 
    - password: `labber` 
    - database: `midterm`
```
5. Install dependencies
```sh
  npm i
  ```
6. Fix binaries for sass
```sh
  npm rebuild node-sass
```

7. Build/reset the database with value from seeds <br>
    -This step can be performed at any point to reset the database to its original seeded value.
```sh
  npm run db:reset
```

8. Run the server!
```sh
  npm run local
```

9. Checkout your server by visiting :
```sh
http://localhost:8080/
```
<br>
<br>

## Warnings & Tips
- Do not edit the `layout.css` file directly, it is auto-generated by `layout.scss`
- Split routes into their own resource-based file names, as demonstrated with `users.js` and `widgets.js`
- Split database schema (table definitions) and seeds (inserts) into separate files, one per table. See `db` folder for pre-populated examples. 
- Use the `npm run db:reset` command each time there is a change to the database schema or seeds. 
  - It runs through each of the files, in order, and executes them against the database. 
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.

## Roadmap

- [ ] Add organisations logic (Org can pass login info to user groups)
- [ ] Add 2FA 
- [ ] Add Dynamic elements when selecting a login

See the [open issues](https://github.com/danekf/Signum-App/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## App images



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/badge/Contributors-3-sucess
[contributors-url]: https://github.com/danekf/LHL-MidtermProject/graphs/contributors

[forks-shield]: https://img.shields.io/badge/All-Forks-yellow
[forks-url]: https://github.com/danekf/LHL-MidtermProject/network/members

[issues-shield]:https://img.shields.io/badge/All-Issues-red
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues

[product-screenshot]: images/Favourites.png
