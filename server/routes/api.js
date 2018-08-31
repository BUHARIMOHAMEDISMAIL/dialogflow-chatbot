const express = require('express');
const router = express.Router();
const apiai = require('apiai');

var app = apiai("d9fc0931b95f45a7ac3ee78c97196618");   

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/test', function (req, res) {
    console.log('test is working');
        var sessid = "875968459080";
        var postvalue = "hi";
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