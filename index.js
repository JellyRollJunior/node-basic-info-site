const express = require("express");
const app = express();
const path = require("node:path");
const authorRouter = require("./routes/authorRouter.js");

app.use("/author", authorRouter);
const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.get('/about', (req, res) => {
  res.render('about');
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`My first Express app - listening on port ${PORT}!`);
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
