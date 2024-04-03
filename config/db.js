require("dotenv").config({ path: "./config/config.env" });
const mongoose = require('mongoose');
const dbUrl = process.env.DB_URI;

mongoose.connect(dbUrl, {
    dbName: 'Customers',
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB on cloud');
});

module.exports = db;
