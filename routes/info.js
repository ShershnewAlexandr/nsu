const express = require('express');
const controller = require('../controllers/info');
const passport = require('passport');
const router = express.Router();

router.get('/get', passport.authenticate('jwt', {session: false}), controller.get);
router.post('/create', controller.create);
router.patch('/update', controller.update);
router.delete('/delete', controller.delete);

module.exports = router;