const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/curriculumController');

router.get('/curriculum/all', resumeController.getAllCurriculum);

module.exports = router;
