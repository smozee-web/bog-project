const express = require("express");
const router = express.Router();

router.get('/soa_val', function (req, res, next) {
  res.render('pages/stat_rpt/soa_val');
});

router.get('/rec_pay', function (req, res, next) {
  res.render('pages/stat_rpt/rec_pay');
});

module.exports = router;