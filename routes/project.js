const express = require('express');
const router = express.Router();

const {create , project , createIssue } = require('../controllers/ProjectController');

router.post('/create', create);
router.get('/:id', project);
router.post('/:id', createIssue);

module.exports = router;
