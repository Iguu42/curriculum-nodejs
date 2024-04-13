const express = require('express');
const router = express.Router();
const educationController = require('../controllers/educationController');

router.get('/education/:id', educationController.getEducationById);
router.post('/education', educationController.createEducation);

module.exports = router;