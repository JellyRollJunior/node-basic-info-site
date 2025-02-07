import http from "node:http";
import fs from "node:fs/promises";

const server = http.createServer((req, res) => {
    const filePath = `./${req.url === "/" ? "index" : req.url}.html`;
    const data = fs.readFile(filePath, { encoding: "utf8" });
    data.then((result) => {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(result);
        return res.end();
    }).catch((error) => {
        console.error(error);
        const data = fs.readFile("./404.html", { encoding: "utf8" });
        data.then((result) => {
            res.writeHead(404, { "content-type": "text/html" });
            res.write(result);
            return res.end();
        });
    });
});
server.listen(8080);
