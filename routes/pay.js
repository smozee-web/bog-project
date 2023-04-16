const express = require("express");
const router = express.Router();

router.get('/all_gateway', function (req, res, next) {
  res.render('pages/pay/all_gateway');
});

router.get('/all_gateway_dt', function (req, res, next) {
  res.render('pages/pay/all_gateway_dt');
});

router.get('/all_gw_content', function (req, res, next) {
  const fileName = req.query.fileName;
  const rowId = req.query.rowId;
  res.render('pages/pay/file_content/all_gateway_dt', { fileName: fileName, rowId: rowId });
});

module.exports = router;