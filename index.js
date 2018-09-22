import config from "./config";
var express = require("express");
var sassMiddleware = require("node-sass-middleware");
var path = require("path");

const app = express();

app.use(
  sassMiddleware({
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "public")
  })
);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {});
});

app.use(express.static("public"));

app.listen(config.port, () =>
  console.log("Fame Booster Web site started listening in port 80")
);
