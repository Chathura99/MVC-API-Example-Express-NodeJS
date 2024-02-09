// Make express server
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());


const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
