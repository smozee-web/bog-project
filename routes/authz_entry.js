const express = require("express");
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('pages/authz_entry/index');
});

router.get('/new_authz', function (req, res, next) {
  res.render('pages/authz_entry/new_authz');
});

module.exports = router;