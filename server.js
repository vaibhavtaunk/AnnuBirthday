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

app.get("/photos", (req, res) => {
  res.render("photos", {});
});

app.get("/quotes", (req, res) => {
  res.render("quotes", {});
});

app.use(express.static("public"));

app.listen(process.env.PORT || 80, () =>
  console.log("Annu Birthday Web site started listening in port 80")
);
