# A School Database REST API
A REST API built with express and NodeJS for a school database. This API will provide a way to administer a school database containing information about users and courses. Users can interact with the database to create new courses, retrieve information on existing courses, and update or delete existing courses. To make changes to the database, users will be required to log in so the API will also allow users to create a new account or retrieve information on an existing account.

## Usage
* Clone the repo
* Install Dependencies
  ```sh
  npm install
  ```
* Create the Database
  ```sh
  npm run seed
  ```
* Start the Express Server with Nodemon
  ```sh
  npm start
  ```

* Use a Browser to View the App Locally `http://localhost:5000/`

* Import Predefined Paths into PostmanAPI from `RESTAPI.postman_collection.json` file

### Technologies Used

Technologies used to build this API

* [Express](https://expressjs.com/)
* [SQLite](https://www.sqlite.org/)
* [NodeJS](https://nodejs.org/)
* [SequelizeORM](https://sequelize.org/)


