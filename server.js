const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.end('<html><body><h1>This is the express server..! </h1></body></html>');
})

app.listen(port, hostname, ()=>{
    console.log(`Server is runnig at http://${hostname}:${port}`);
})