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

module.exports = { nodes }

const Client = require("pg").Client;
const client = new Client({
    host: 'db.rdkrpnvpmuggbxgwylzd.supabase.co',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: '_#X_RQ46h3NdqRu',
})
client.connect()

module.exports = { client }

