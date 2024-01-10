const express = require('express')

const users = [
  {
    name:"Arthurito",
    b_day:"28/02/2007"
  },
  {
    name:"Arthurzinhi",
    b_day:"28/02/2007"
  },
  {
    name:"Artie",
    b_day:"28/02/2007"
  },
]

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get('/users', (req, res) => {
  res.send({users})
});
