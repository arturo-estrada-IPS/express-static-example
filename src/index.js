/* eslint-disable no-console */
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const routes = require("./routes");

const app = express();

// settings
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");

// static files
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static(path.join(__dirname, "./views")));

// middlewares

// routes
app.use(routes);

app.listen(app.get("port"), () => {
  console.log("Server Listening on port 3000");
  console.info("http://localhost:3000");
});
