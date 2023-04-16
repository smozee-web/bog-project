const express = require("express");
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('pages/position/index');
});

router.get('/ghipss_soa', function (req, res, next) {
  res.render('pages/position/ghipss_soa');
});

module.exports = router;