var exports = module.exports = {}
var Request = require('../models');


exports.viewrequest = function (req, res) {
    res.render('requests/requests');

}

exports.addrequestpage = function (req, res) {
    res.render('requests/requests-form');

}

exports.addrequest = function (req, res) {
    console.log(req.body.requestNumber);
    console.log(req.body.bearingCost);
    console.log(req.body.objective);
    console.log(req.body.note);
    // res.json(req);
    // res.json({
    //     "bearingCost": req.body.bearingCost,
    //     "requestType": req.body.requestType,
    //     "objective": req.body.objective
    // });
    res.json({ "OK": "OK" });



    Request.requests.create({
        "requestNumber": req.body.requestNumber,
        "bearingCost": req.body.bearingCost,
        "objective": req.body.objective,
        "note": req.body.note

    }).then(res.json({ "OK": "OK created" }))
        .catch(err => console.log(err));

}