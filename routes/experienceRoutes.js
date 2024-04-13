const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experienceController');

router.get('/experience/:id', experienceController.getExperienceById);
router.post('/experience', experienceController.createExperience);

module.exports = router;