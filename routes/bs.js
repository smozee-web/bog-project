const express = require("express");
const router = express.Router();

router.get('/load', function (req, res, next) {
  res.render('pages/bank_statement/load'); 
});

router.get('/', function (req, res, next) {
  res.render('pages/bs/bank_stat');
});

router.get('/bank_stat_dt', function (req, res, next) {
  res.render('pages/bs/bank_stat_dt');
});

router.get('/bs_content', function (req, res, next) {
  const fileName = req.query.fileName;
  const rowId = req.query.rowId;
  res.render('pages/bs/file_content/bank_stat_dt', { fileName: fileName, rowId: rowId });
});

module.exports = router;