var express = require('express');
var User = require('../app/schemas/userSchema');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function (err, users) {
      res.send(users);
  });
});

module.exports = router;
