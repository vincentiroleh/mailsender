const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const mailer = require("./src/helper/nodemailer");

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/success", (req, res) => {
  res.send(`
    <b> Mail sent successfully</b> <br> 
    <a href="/">Home</a>
    `);
});

app.post("/send-mail", (req, res) => {
  const Users = [];

  const user = { email: req.body.email };
  const message = req.body.message;
  const subject = req.body.subject;

  Users.push(user);

  Users.forEach((user) => {
    mailer(user.email, subject, message)
      .then(() => {
        res.redirect("/success");
      })
      .catch((err) => res.send(err));
  });
});

// local server port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Server up on port 4000"));
