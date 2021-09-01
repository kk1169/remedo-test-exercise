const express = require('express');
const app = express();
const mysql = require('mysql');

const PORT = process.env.PORT || 3000;

// MYSQL DB CONNECTION
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'remedo-database'
})

dbConn.connect((error)=>{
    if(error) throw error;
    console.log("Database Connected!");
})

// ROUTES
app.get('/transaction', (req, res)=>{
    dbConn.query('SELECT u.id, u.address, t.total_invoice_amount, t.invoice_amount_paid, t.remedo_commission FROM users as u INNER JOIN transactions as t ON u.id=t.user_id WHERE u.id=1', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    });
})

app.listen(PORT, (req, res)=>{
    console.log(`Server started on port ${PORT}`);
})