"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<h1>Home</h1>');
        res.end();
        return;
    }
    if (req.url === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<h1>About</h1>');
        res.end();
        return;
    }
    if (req.url === '/my-account') {
        res.writeHead(403, { "Content-Type": "text/plain" });
        res.write('You have no access to this page');
        res.end();
        return;
    }
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write('Page not found');
    res.end();
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
