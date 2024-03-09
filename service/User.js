const { db } = require("../db");
const util = require("util");
const query = util.promisify(db.query).bind(db);
const axios = require("axios");

// Returns User With Id
const GetUserById = async (id) => {
  const queryString = "SELECT * FROM users WHERE user_id = ?";
  try {
    const results = await query(queryString, [id]);
    return results[0]; // Assuming the query returns only one user
  } catch (error) {
    throw error;
  }
};

// Returns List of Users
const GetListOfUsers = async () => {
  console.log("came");
  const queryString = "SELECT * FROM users";
  try {
    const results = await query(queryString);
    //console.log(results)
    return results;
  } catch (error) {
    throw error;
  }
};

const DeleteUserById = async (id) => {
  const queryString = "DELETE FROM users WHERE user_id = ?";
  try {
    const results = await query(queryString, [id]);
    return results.affectedRows > 0; // Check if any row was affected
  } catch (error) {
    throw error;
  }
};

const AddNewUser = async (user) => {
  const { name, email, company, Telephone, password, date } = user;
  const queryString =
    "INSERT INTO users (name, email, company, Telephone, password, date) VALUES (?, ?, ?, ?, ?, ?)";
  try {
    const results = await query(queryString, [
      name,
      email,
      company,
      Telephone,
      password,
      date,
    ]);
    return results.insertId; // Return the ID of the newly inserted user
  } catch (error) {
    throw error;
  }
};

const SalesCount = async (days,shoeModel) => {
  try {
    // Specify the URL where your Flask server is running
    const apiUrl = "http://127.0.0.1:5000/predict";

    // Make a GET request to the Flask API
    // const response = await axios.get(apiUrl);

    const response = await axios.get(apiUrl, {
      params: {
        shoeModel: shoeModel,
        days: days,
      },
    });

    // Extract the predicted sales from the response
    const predictedSales = response.data.predictedSales;

    // Do something with the predictedSales data
    console.log("Predicted Sales:", predictedSales);
    return predictedSales;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

module.exports = {
  GetUserById,
  GetListOfUsers,
  DeleteUserById,
  AddNewUser,
  SalesCount,
};
