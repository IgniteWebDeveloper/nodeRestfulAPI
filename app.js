require("dotenv").config({ path: "./config/.env" });

const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/userRoutes");

require("./config/database").connectDatabse();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/api", userRoutes);

// use error middleware
// app.use(require("./middleware/Error"));

app.listen(process.env.PORT, console.log(`Listening on port ${process.env.PORT}`));

