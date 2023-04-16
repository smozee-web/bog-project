const express = require("express");
const { api_fetch } = require("./function");
const axios = require("axios");
const router = express.Router();

router.get('/load', function (req, res, next) {
  res.render('pages/payment/load', {category : req.query.category});
 
});

router.get('/files', function (req, res) {
  res.render('pages/payment/files', {category : req.query.category});
});

router.get('/file/:id', async function (req, res) {
  axios.get(`${process.env.API_BASEURL}/payment/file/${req.params.id}`).then(response => {
    res.render('pages/payment/data', response.data);
  }).catch(error => {
    console.error(error);
  });
});

module.exports = router;