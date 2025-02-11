const db = require("../db.js");

const getAuthorById = async (request, response) => {
    const { authorId } = request.params;

    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
        response.status(404).send("That author don't exist my friend!");
        return;
    }

    response.send(author.name);
};

module.exports = { getAuthorById };
