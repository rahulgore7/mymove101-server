const express = require('express');
const cors = require('cors');
const customerRoutes = require('../Routes/CustomerRoutes');
const db = require('../config/db');
const corsConif = {
    origin: '*',
    credential: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
const app = express();
const port = 3000;

app.use(express.json());
app.options('', cors(corsConif));
app.use(cors(corsConif));

app.use('/', customerRoutes);

db.once('open', () => {
    app.listen(port, () => {
        console.log(`Express server listening at http://localhost:${port}`);
    });
});
