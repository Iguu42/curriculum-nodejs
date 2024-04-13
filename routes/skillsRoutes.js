const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skillsController');

router.get('/skills/:id', skillsController.getSkillById);
router.post('/skills', skillsController.createSkill);

module.exports = router;