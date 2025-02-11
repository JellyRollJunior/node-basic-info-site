const authors = [
    { id: 1, name: "poggester" },
    { id: 2, name: "noggster" },
    { id: 3, name: "boggster" },
];

const getAuthorById = async (authorId) => {
    return authors.find((author) => author.id === authorId);
};

module.exports = { getAuthorById };
