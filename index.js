const express = require("express");
const app = express();
const fs = require("fs/promises");

const getPath = (path) => {
    if (path == "/") return "./index.html";
    return `.${path}.html`;
};

app.get("/", async (req, res) => {
    try {
        const data = await fs.readFile(getPath(req.url), { encoding: "utf8" });
        res.send(data);
    } catch (error) {
        const data = await fs.readFile("./404.html", { encoding: "utf8" });
        res.send(data);
    }
});

app.get("/about", async (req, res) => {
    try {
        const data = await fs.readFile(getPath(req.url), { encoding: "utf8" });
        res.send(data);
    } catch (error) {
        const data = await fs.readFile("./404.html", { encoding: "utf8" });
        res.send(data);
    }
});

app.get("/contact-me", async (req, res) => {
    try {
        const data = await fs.readFile(getPath(req.url), { encoding: "utf8" });
        res.send(data);
    } catch (error) {
        const data = await fs.readFile("./404.html", { encoding: "utf8" });
        res.send(data);
    }
});

app.get("*", async (req, res) => {
    const data = await fs.readFile("./404.html", { encoding: "utf8" });
    res.send(data);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`My first express app listening on port: ${PORT}!`);
});
