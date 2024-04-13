const express = require('express');
const router = express.Router();
const personalController = require('../controllers/personalController');

router.get('/personal/all', personalController.getAllPersonalInfo);
router.get('/personal/:id', personalController.getPersonalInfoById);
router.post('/personal', personalController.createPersonalInfo);

module.exports = router;