const express = require('express')
const nodes = require('./db.js').nodes
const client = require('./db.js').client

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get('/', async (req, res) => { // Request: O pedido do usuario; Response: O resultado enviado segundo o pedido;
  const data = (await client.query("SELECT * FROM node")).rows;
  res.send("<h1> a</h1>")
});
