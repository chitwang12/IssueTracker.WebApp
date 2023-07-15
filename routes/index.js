const express = require('express');

const router = express.Router();
const homeController = require('../controllers/HomeController');

console.log('router loaded'.cyan.bold);

router.get('/',homeController.home);
router.use('/project', require('./project'));

module.exports = router;
