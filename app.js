const express = require('express')
const nodes = require('./db.js').nodes

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get('/la', (req, res) => {
  res.send({nodes})
});
