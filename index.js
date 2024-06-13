const db = require("./config/db")
require('dotenv').config()
const express = require("express");
const app = express();
const path = require("path")
const cookieParser = require("cookie-parser");
const router = require("./routers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())




app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")
app.get("/", (req, res) => {
    res.send("app is running")
})

app.use("/api", router);



app.listen("7000", (error) => {
    console.log("app is running on 7000");
})