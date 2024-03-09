const express = require("express");
const router = express.Router();

const { GetAllUsers, GetUser, DeleteUser, AddUser, predictSales } = require("../controllers/User");

router.get("/allUsers", GetAllUsers);
router.get("/byId/:id", GetUser);
router.delete("/deleteUser/:id", DeleteUser);
router.post("/addUser", AddUser);
router.post("/predict", predictSales);

module.exports = router;
