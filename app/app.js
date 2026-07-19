const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("DevOps CI/CD Project Version 1");
});

app.listen(3000, () => {
    console.log("Application Running on Port 3000");
});
