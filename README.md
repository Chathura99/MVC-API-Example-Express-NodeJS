# MVC-API-Example-Express-NodeJS

A brief description of your project.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-project.git
## Install dependencies:

cd your-project
npm install
Set up your MySQL database:

Update the db.js configuration with your database details.
Start the server:

npm start
Usage
Describe how to use your API. Include information about setting up the database, starting the server, and any other relevant details.

## Routes
GET /allUsers: Retrieve a list of all users.
GET /byId/:id: Retrieve user details by ID.
DELETE /deleteUser/:id: Delete a user by ID.
POST /addUser: Add a new user.
Examples
Here are some examples of how to interact with your API using various tools:

## cURL:

curl -X POST http://your-api-url/addUser -H "Content-Type: application/json" -d '{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "company": "XYZ Corp",
  "Telephone": "123456789",
  "password": "securePassword",
  "date": "2022-02-10"
}'
## HTTPie:

http POST http://your-api-url/addUser name="Alice" email="alice@example.com" company="ABC Ltd" Telephone="987654321" password="strongPassword" date="2022-02-10"
Postman or API Testing Tool:

Set the request URL to http://your-api-url/addUser and the request method to POST. In the request body, use the raw JSON format:

{
  "name": "Bob",
  "email": "bob@example.com",
  "company": "XYZ Ltd",
  "Telephone": "5551234567",
  "password": "password123",
  "date": "2022-02-10"
}
## Axios in Node.js:

const axios = require('axios');

const data = {
  name: 'Eva',
  email: 'eva@example.com',
  company: 'EFG Corp',
  Telephone: '9876543210',
  password: 'securePassword123',
  date: '2022-02-10'
};

axios.post('http://your-api-url/addUser', data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
