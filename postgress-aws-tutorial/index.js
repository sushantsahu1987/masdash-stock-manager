const { Pool, Client } = require('pg');

const connectionString = 
'aws_db';

const client = new Client({
    connectionString: connectionString,
})

client.connect()
client.query('SELECT * FROM dogs_table', (err, res) => {
    console.log(res.rows);
    client.end()
});