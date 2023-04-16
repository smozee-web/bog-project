const express = require("express");
const router = express.Router();

router.get('/new_case', function (req, res, next) {
  res.render('pages/case_mng/new_case');
});

router.get('/blacklist', function (req, res, next) {
  res.render('pages/case_mng/blacklist');
});

router.get('/case_thread', function (req, res, next) {
  res.render('pages/case_mng/thread', {"case_id" :req.query["case_id"]});
});

module.exports = router;