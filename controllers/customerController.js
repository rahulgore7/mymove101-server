const axios = require('axios');
require("dotenv").config({ path: "./config/config.env" });
const customerModel = require('../models/customerModel');

async function submitForm(formData) {
    try {
        const newFormData = new customerModel(formData);
        const savedFormData = await newFormData.save();
        console.log('Form data saved to MongoDB:', savedFormData);

        const response = await axios.post(`https://mu2-staging.myutilities.com/api/referral/orders?token=${process.env.API_TOKEN}`, formData, {
            headers: {
                'Content-Type': 'application/json',
                'X-Version': '1.0'
            }
        });

        console.log('Response from server:', response.data);
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Error submitting form:', error.message);
        throw new Error(error.message);
    }
}

module.exports = {
    submitForm
};
