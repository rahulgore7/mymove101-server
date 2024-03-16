// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/customerController');

// Route to handle form submission
router.post('/submit-form', async (req, res) => {
    try {
        const formData = req.body;
        console.log(formData);
        const response = await CustomerController.submitForm(formData);
        res.json(response);
    } catch (error) {
        console.error('Error handling form submission:', error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
