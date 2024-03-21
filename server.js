const express = require('express');
const cors = require('cors');
const customerRoutes = require('./Routes/CustomerRoutes');
const db = require('./config/db');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/', customerRoutes);

db.once('open', () => {
    app.listen(port, () => {
        console.log(`Express server listening at http://localhost:${port}`);
    });
});
