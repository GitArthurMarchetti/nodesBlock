const nodes = [
  {
    id: 0,
    text: "hygvytttyytty"
  },
  {
    id: 1,
    text: "hygvytttyytty"
  },
  {
    id: 2,
    text: "hygvytttyytty"
  }
]

  module.exports = {nodes}

  import { Client } from 'pg'
  const client = new Client({
    host: 'my.database-server.com',
    port: 5334,
    database: 'database-name',
    user: 'database-user',
    password: 'secretpassword!!',
  })
  await client.connect()
   
  const res = await client.query('SELECT $1::text as message', ['Hello world!'])
  console.log(res.rows[0].message) // Hello world!
  await client.end()