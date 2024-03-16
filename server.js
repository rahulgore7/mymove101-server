const express = require('express');
const cors = require('cors');
const customerRoutes = require('./routes/customerRoutes');
const db = require('./config/db');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/', customerRoutes)

// Route to handle form submission
// app.post('/submit-form', (req, res) => {
//     const formData = req.body; // This will now be parsed as JSON
//     console.log(formData);
//     const newFormData = new customerModel(formData);

//     // Make a POST request to the provided URL
//     // axios.post(`https://mu2-staging.myutilities.com/api/referral/orders?token=eb3c0d97cde0485bb2d7c05eed7343b1`, formData, {
//     //     headers: {
//     //         'Content-Type': 'application/json',
//     //         'X-Version': '1.0'
//     //     }
//     // })
//     //     .then(response => {
//     //         console.log('Response from server:', response.data);
//     //         res.json({ success: true, data: response.data });
//     //     })
//     //     .catch(error => {
//     //         console.error('Error sending data:', error.message);
//     //         res.status(500).json({ success: false, error: error.message });
//     //     });

//     newFormData.save()
//         .then(savedFormData => {
//             console.log('Form data saved to MongoDB:', savedFormData);

//             // Make a POST request to the provided URL
//             return axios.post(`https://mu2-staging.myutilities.com/api/referral/orders?token=eb3c0d97cde0485bb2d7c05eed7343b1`, formData, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'X-Version': '1.0'
//                 }
//             });
//         })
//         .then(response => {
//             console.log('Response from server:', response.data);
//             res.json({ success: true, data: response.data });
//         })
//         .catch(error => {
//             console.error('Error sending data:', error.message);
//             res.status(500).json({ success: false, error: error.message });
//         });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Express server listening at http://localhost:${port}`);
// });

db.once('open', () => {
    app.listen(port, () => {
        console.log(`Express server listening at http://localhost:${port}`);
    });
});
