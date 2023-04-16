const express = require("express");
const { api_fetch } = require("./function");
const axios = require("axios");
const router = express.Router();


router.get('/load', function (req, res, next) {
  res.render('pages/shop/load', {category : req.query.category}); 
});

router.get('/files', function (req, res) {
  res.render('pages/shop/files', {category : req.query.category});
});

// router.get('/file/:id', async function (req, res) {
//   axios.get(`${process.env.API_BASEURL}/shop/file/${req.params.id}`).then(response => {
//     res.render('pages/shop/data', response.data);
//   }).catch(error => {
//     console.error(error);
//   });    
// });

router.get('/file/:id', async function (req, res) {
  axios.get(`${process.env.API_BASEURL}/shop/file/${req.params.id}`).then(response => {
    res.send(response.data);
  }).catch(error => {
    console.error(error);
  });    
}); 



router.get('/bin', function (req, res, next) {
  res.render('pages/shop_files/bin');
  
});


module.exports = router;