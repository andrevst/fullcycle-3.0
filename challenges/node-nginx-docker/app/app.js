const express = require('express');
const mysql = require('mysql2/promise'); // Note the /promise for the promise-based version
const app = express();
const port = process.env.PORT || 3000;

// Create a pool of connections
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST || 'mysql',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoints
// Endpoint to get root page with heading and list of users
app.get('/', async (req, res) => {
    try {
        const [users] = await pool.query('SELECT * FROM people');
        let html = '<h1>Full Cycle Rocks!</h1><ul>';
        users.forEach(user => {
            html += `<li>${user.name}</li>`;
        });
        html += '</ul>';
        res.send(html);
    } catch (err) {
        console.error('Database query failed: ', err);
        res.status(500).send('Error retrieving users');
    }
});

// Endpoint to add a user
app.post('/add-user', async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).send('Name is required');
        }
        const [result] = await pool.query('INSERT INTO people (name) VALUES (?)', [name]);
        res.send(`User added with ID: ${result.insertId}`);
    } catch (err) {
        console.error('Database query failed: ', err);
        res.status(500).send('Error while adding user');
    }
});

// Endpoint to get all users
app.get('/users', async (req, res) => {
    try {
        const [users] = await pool.query('SELECT * FROM people');
        res.json(users);
    } catch (err) {
        console.error('Database query failed: ', err);
        res.status(500).send('Error retrieving users');
    }
});

app.listen(port, () => {
    console.log(`Node.js app listening at http://localhost:${port}`);
});

module.exports = app;
