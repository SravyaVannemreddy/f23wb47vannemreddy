var express = require('express');
const river_controlers= require('../controllers/river');
var router = express.Router();
/* GET rivers */
router.get('/', river_controlers.river_view_all_Page );
module.exports = router;
