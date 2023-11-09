var express = require('express');
var router = express.Router();
const river_controllers= require('../controllers/river');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('river', { title: 'Water level search results' });
});

router.get('/', river_controllers.river_view_all_Page );

module.exports = router; 




