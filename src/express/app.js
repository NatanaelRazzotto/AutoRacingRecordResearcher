const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    //res.send("Introdução a API");
    return res.json({ titulo: "Como criar API" })
})

app.listen(8080, () => {
    console.log("servidor iniciado na porta 8080: http://localhost:8080/");
})