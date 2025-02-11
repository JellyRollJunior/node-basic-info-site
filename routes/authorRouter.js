const { Router } = require("express");
const { getAuthorById } = require('../controllers/authorController.js');

const authorRouter = Router();

authorRouter.get("/", (req, res) => res.send("hello world!"));
authorRouter.get("/:authorId", getAuthorById);

module.exports = authorRouter;
