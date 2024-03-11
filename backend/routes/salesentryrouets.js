/* define sales routes through which client can use backend  */
const express = require('express');
const router = express.Router();
const {authenticateUser} = require('../middlewares/authmiddleware')
const {addSale , Topfive , getUserSales , getUserTotalRevenue , TotalRevenue} = require('../controllers/saleentrycontroller');

/* use middleware before sending response */

router.post('/addsaleentry',authenticateUser , addSale);
router.get('/topfivesales',Topfive);
router.get('/usersales/:userId', authenticateUser , getUserSales);
router.get('/userrevenue/:userId', authenticateUser , getUserTotalRevenue);
router.get('/revenue',TotalRevenue);



module.exports = router