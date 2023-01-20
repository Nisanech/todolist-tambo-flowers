const express = require("express");

const cors = require("cors");

const connectDB = require("./mongodb")
const todoRoute = require("./routes/todoRoutes")
const app = express();

app.use(express.json());

app.use(cors());

connectDB();
app.use("/api", todoRoute); 

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
