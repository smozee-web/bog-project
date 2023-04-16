const express = require("express");
const router = express.Router();

const adminRouter = require('./admin');
const shopRouter = require('./shop');
const homeRouter = require('./home');
const pay_gwRouter = require('./pay_gw');
const retryRouter = require('./retry');
const paymentsRouter = require('./pay');
const bsRouter = require('./bs');
const authzsRouter = require('./authorizations');
const ghipssRouter = require('./ghipss');
const soaRouter = require('./soa');
const positionRouter = require('./position');
const stat_rptRouter = require('./stat_rpt');
const ai_queryRouter = require('./ai_query');
const swiftRouter = require('./swift_entry');
const authzRouter = require('./authz_entry');

router.use(adminRouter);
router.use('/shop', shopRouter);
router.use('/home', homeRouter);
router.use('/pay_gw', pay_gwRouter);
router.use('/retry', retryRouter);
router.use('/payments', paymentsRouter);
router.use('/bank_statement', bsRouter);
router.use('/authorizations', authzsRouter);
router.use('/ghipss', ghipssRouter);
router.use('/soa', soaRouter);
router.use('/position', positionRouter);
router.use('/statistical_report', stat_rptRouter);
router.use('/ai_query', ai_queryRouter);
router.use('/swift_entry', swiftRouter);
router.use('/authz_entry', authzRouter);

module.exports = router;

