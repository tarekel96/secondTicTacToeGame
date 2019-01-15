//server.js
const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
// const App = require("./src/App");
// require("babel-core").transform(App, {
//   presets: ["react"]
// });
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function(req, res) {
  return res.send("pong");
});
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });
app.get("*", function(req, res) {
  const index = path.join(__dirname, "build", "index.html");
  res.sendFile(index);
});
app.listen(port);
