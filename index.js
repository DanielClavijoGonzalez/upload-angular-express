require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT | 80;
const HOSTNAME = process.env.HOSTNAME | "localhost";

app.use(express.static("angular-app"));

app.get("*", (req, res) => res.sendFile(path.resolve("angular-app/index.html")));

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
