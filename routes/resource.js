var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var river_controller = require('../controllers/river');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// river ROUTES ///
// POST request for creating a river.
router.post('/river', river_controller.river_create_post);
// DELETE request to delete river.
router.delete('/river/:id', river_controller.river_delete);
// PUT request to update river.
router.put('/river/:id', river_controller.river_update_put);
// GET request for one river.
router.get('/river/:id', river_controller.river_detail);
// GET request for list of all river items.
router.get('/river', river_controller.river_list);
module.exports = router;

