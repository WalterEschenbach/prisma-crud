const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skill.controller');

router.route('/').get(skillController.getSkills);
router.route('/new').post(skillController.postNewSkill);
router.route('/').delete(skillController.deleteSkill);



module.exports = router;