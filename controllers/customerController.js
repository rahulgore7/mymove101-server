const axios = require('axios');
require("dotenv").config();
const customerModel = require('../models/customerModel');

async function saveFormDataToMongoDB(formData) {
    try {
        const newFormData = new customerModel(formData);
        const savedFormData = await newFormData.save();
        return savedFormData;
    } catch (error) {
        console.error('Error saving form data to MongoDB:', error.message);
        throw new Error(error.message);
    }
}

async function sendFormDataToServer(formData) {
    try {
        const response = await axios.post(`https://mu2-staging.myutilities.com/api/referral/orders?token=${process.env.API_TOKEN}`, formData, {
            headers: {
                'Content-Type': 'application/json',
                'X-Version': '1.0'
            }//rkjn
        });
        console.log('Response from server:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error sending form data to server:', error.message);
        throw new Error(error.message);
    }
}

module.exports = {
    saveFormDataToMongoDB,
    sendFormDataToServer
};
