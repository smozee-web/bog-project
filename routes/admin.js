const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get('/login', function (req, res, next) {
  res.render('pages/login');
});

router.get('/home', function (req, res, next) {
  res.render('pages/home');
});

// Login page
router.get('/', function (req, res, next) {
  res.render('pages/login');
});

// router.get('/dashboard', async (req, res) => {
//   axios.get(`${process.env.API_BASEURL}/dash`).then(response => {
//     res.render('pages/index', response.data);
//   }).catch(error => {
//     console.error(error);
//   });
// });

router.get('/dashboard', function (req, res, next) {
  let data = {
    termination_count: 15,
    termination_sent_total: "xx.xx",
    termination_payout_total: "xx.xx",
    payment_count: 4,
    payment_debit_total: "xx.xx",
    payment_credit_total: "xx.xx",
    treasury_count: 17,
    treasury_debit_total: "xx.xx",
    treasury_credit_total: "xx.xx",
    authorizations_count: 09,
    authorizations_amount: "xx.xx",
    retry_count: 31,
    retry_amount: "xx.xx",
    consolidated_count: 12,
    consolidated_debit_total: "xx.xx",
    consolidated_credit_total: "xx.xx",
    ghipss_count: 07,
    ghipss_outbound_total: "xx.xx",
    ghipss_inbound_total: "xx.xx",
    soa_count: 28,
    soa_debit_total: "xx.xx",
    soa_credit_total: "xx.xx",
  };
  res.render('pages/index', data);
});

module.exports = router;