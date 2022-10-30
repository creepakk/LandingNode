const express = require('express');
const controller = require('../controller/controller.js');
const router = express.Router();
const urlEncoded = express.urlencoded({ extended: false });

router.get('/', controller.index);
router.get('/guides', controller.guides);
router.get('/flights', controller.flights);
router.get('/about', controller.about);
router.get('/contact', controller.contact);
router.post('/success',urlEncoded , controller.success);

module.exports = router;