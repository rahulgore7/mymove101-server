const axios = require('axios');
require("dotenv").config();
const customerModel = require('../models/customerModel');

async function saveFormDataToMongoDB(formData) {
    try {
        const newFormData = new customerModel(formData);
        const savedFormData = await newFormData.save();
        console.log('Form data saved to MongoDB:', savedFormData);
        return savedFormData;
    } catch (error) {
        console.error('Error saving form data to MongoDB:', error.message);
        throw new Error(error.message);
    }
}

async function sendFormDataToServer(formData) {
    try {
<<<<<<< HEAD
        const response = await axios.post(`https://portal.myutilities.com/api/referral/orders?token=${process.env.API_TOKEN}`, formData, {
            headers: {
                'Content-Type': 'application/json',
                'X-Version': '1.0'
            }//rkjn
        });
        console.log('Response from server:', response.data);
        return response.data;
=======
        // const response = await axios.post(`https://mu2-staging.myutilities.com/api/referral/orders?token=${process.env.API_TOKEN}`, formData, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'X-Version': '1.0'
        //     }//rkjn
        // });
        //console.log('Response from server:', response.data);
        //return response.data;
        console.log(formData);
>>>>>>> 96d688e64187f51e88ddd9e03c5733e3aa92f0c1
    } catch (error) {
        console.error('Error sending form data to server:', error.message);
        throw new Error(error.message);
    }
}

module.exports = {
    saveFormDataToMongoDB,
    sendFormDataToServer
};
