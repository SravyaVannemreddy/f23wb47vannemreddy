var River = require('../models/river');
// List of all rivers
// exports.river_list = function(req, res) {
// res.send('NOT IMPLEMENTED: river list');
// };
// List of all river
exports.river_list = async function(req, res) {
try{
theriver = await River.find();
res.send(theriver);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

exports.river_view_all_Page = async function(req, res) {
    try{
    therivers = await river.find();
    res.render('river', { title: 'River Search Results', results: therivers });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    var express = require('express');
    const river_controlers= require('../controllers/river');
    var router = express.Router();
    /* GET rivers */
    router.get('/', river_controlers.river_view_all_Page );
    module.exports = router;
    

// for a specific river.
exports.river_detail = function(req, res) {
res.send('NOT IMPLEMENTED: river detail: ' + req.params.id);
};
// Handle river create on POST.
exports.river_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: river create POST');
};
// Handle river delete form on DELETE.
exports.river_delete = function(req, res) {
res.send('NOT IMPLEMENTED: river delete DELETE ' + req.params.id);
};
// Handle river update form on PUT.
exports.river_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: river update PUT' + req.params.id);
};
