const express = require('express');
const router = express.Router();
const apiai = require('apiai');

var app = apiai("747582eae2a04c5fbcf4f3f273ee6cf7");   

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/test', function (req, res) {
    console.log('test is working');
    let message = req.body.message
        var sessid = "875968459080";
        var postvalue = message;
        var request = app.textRequest(postvalue, {
            sessionId: sessid
        });
        //request for api
        request.on('response', function (response) {
            res.json(response.result.fulfillment.messages[0].speech);
        });

        request.on('error', function (error) {
            res.json(error);
        });

        request.end();
});

module.exports = router;
