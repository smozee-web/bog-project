const express = require("express");
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('pages/trans_monitoring/index');
});

router.get('/mde', function (req, res, next) {
  res.render('pages/trans_monitoring/mutual_dealer_ext', {"from_date" :req.query["from-date"], "to_date" :req.query["to-date"]});
});

router.get('/mdi', function (req, res, next) {
  res.render('pages/trans_monitoring/mutual_dealer_int', {"from_date" :req.query["from-date"], "to_date" :req.query["to-date"]});
});

router.get('/cb_idf', function (req, res, next) {
  res.render('pages/trans_monitoring/cbs_comp_idf', {"from_date" :req.query["from-date"], "to_date" :req.query["to-date"]});
});

router.get('/cb_loc', function (req, res, next) {
  res.render('pages/trans_monitoring/cbs_comp_loc', {"from_date" :req.query["from-date"], "to_date" :req.query["to-date"]});
});

router.get('/blk_trans', function (req, res, next) {
  res.render('pages/trans_monitoring/black_trans', {"from_date" :req.query["from-date"], "to_date" :req.query["to-date"]});
});

router.get('/blk_rec', function (req, res, next) {
  res.render('pages/trans_monitoring/black_rec', {"from_date" :req.query["from-date"], "to_date" :req.query["to-date"]});
});







// a.	Mutual Dealers -external 
// b.	Mutual Dealer Internal
// c.	Commercial Banks (CBs) Compliance - IDF
// d.	Commercial Banks (CBs) Compliance - LOC
// e.	Black Transferers (NB: filter transactions for once whose names do not appear anywhere in our dataset)
// f.	Black receivers (NB: filter transactions for once whose names do not appear anywhere in our dataset)
module.exports = router;