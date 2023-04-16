const express = require("express");
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('pages/swift_entry/index');
});

// router.get('/ghipss_soa', function (req, res, next) {
//   res.render('pages/swift_entry/ghipss_soa');
// });

module.exports = router;