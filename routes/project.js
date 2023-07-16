const express = require('express');
const router = express.Router();

const {create , project , createIssue } = require('../controllers/ProjectController');

router.post('/create', create);//for creating a project
router.get('/:id', project);   //for getting a project
router.post('/:id', createIssue); //for creating an issue

module.exports = router;
