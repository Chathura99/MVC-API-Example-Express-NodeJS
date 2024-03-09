const {
  GetListOfUsers,
  GetUserById,
  DeleteUserById,
  AddNewUser,
  SalesCount
} = require("../service/User");

const  GetAllUsers = async (req, res) => {
  const userList = await GetListOfUsers();

  // DO SOMETHING WITH THE USER LIST OR JUST RETURN IT
  return res.json(userList);
};

const GetUser = async (req, res) => {
  const userId = req.params.id;
  const user = await GetUserById(userId);

  // DO SOMETHING WITH THE USER OR JUST RETURN IT
  return res.json(user);
};

const DeleteUser = async (req, res) => {
  const userId = req.params.id;
  const user = await DeleteUserById(userId);

  // DO SOMETHING WITH THE USER OR JUST RETURN IT
  return res.json(user);
};

const AddUser = async (req, res) => {
  const user = req.body;
  console.log(user)
  const newUser = await AddNewUser(user);

  // DO SOMETHING WITH THE USER OR JUST RETURN IT
  return res.json(newUser);
};

const predictSales =  async (req, res) => {
  console.log(req.body)
  const days= req.body.days;
  const shoeModel = req.body.shoe_model;
  try {
    const predictedSales = await SalesCount(days,shoeModel);
    res.json({ predictedSales }); // Send the results in the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

};

module.exports = {
  GetAllUsers,
  GetUser,
  DeleteUser,
  AddUser,
  predictSales
};
