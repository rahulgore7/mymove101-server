const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    //const jsonData = JSON.stringify(formData);
    // Make a POST request to the provided URL
    axios.post(`https://mu2-staging.myutilities.com/api/referral/orders?token=${process.env.API_TOKEN}`, formData, {
        headers: {
            'Content-Type': 'application/json',
            'X-Version': '1.0'
        }
    })
        .then(response => {
            console.log('Response from server:', response.data);
            res.json({ success: true, data: response.data });
        })
        .catch(error => {
            console.error('Error sending data:', error);
            res.status(500).json({ success: false, error: error.message });
        });
});

// Start the server
app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
});
