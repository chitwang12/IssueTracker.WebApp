const express = require('express');

const router = express.Router();
const {home} = require('../controllers/HomeController');

console.log('router loaded'.cyan.bold);

router.get('/',home);
router.use('/project', require('./project'));

module.exports = router;
