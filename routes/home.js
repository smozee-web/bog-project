const express = require("express");
const { api_fetch } = require("./function");
const axios = require("axios");
const router = express.Router(); 


router.get('/user', function (req, res, next) {
  res.render('pages/home/user-mgt'); 
});
router.get('/user/create', function (req, res, next) {
  res.render('pages/home/user-creation'); 
});
router.get('/user/create-user', function (req, res, next) {
  res.render('pages/home/create-user'); 
});
router.get('/organization', function (req, res, next) {
  res.render('pages/home/organization'); 
});

router.get('/organizations/:orgID', function (req, res, next) {
  res.render('pages/home/organization-show', {orgID: req.params.orgID}); 
});
router.get('/organizations/:orgID', function (req, res, next) {
  res.render('pages/home/organization-show', {orgID: req.params.orgID}); 
});

router.get('/data', function (req, res) {
  res.render('pages/home/data-exc');
});
router.get('/diligence', function (req, res) {
  res.render('pages/home/due-diligence');
});
router.get('/monitoring', function (req, res) {
  res.render('pages/home/trans-monitoring');
});
router.get('/suspicious', function (req, res) {
  res.render('pages/home/suspicious-act');
});
router.get('/watchlist', function (req, res) {
  res.render('pages/home/watchlist-screening');
});
router.get('/tax', function (req, res) {
  res.render('pages/home/tax-compliance');
});
router.get('/cases', function (req, res) {
  res.render('pages/home/case-management');
});
router.get('/analytics', function (req, res) {
  res.render('pages/home/data-analytics');
});



module.exports = router;