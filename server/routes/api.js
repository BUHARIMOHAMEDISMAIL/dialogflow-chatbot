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
//             if(response.result.fulfillment.messages[0].speech) {
//               res.json(response.result.fulfillment.messages[0].speech);
//             } else {
//               res.json(response.queryResult.fulfillmentMessages[0].text.text[0]);
//             }
        });

        request.on('error', function (error) {
            res.json(error);
        });

        request.end();
});

router.post('/webhook', function (req, res) {
//     req.result.contexts[7].parameters.any.original
//     let orderdata = {
//       assignment_name: req.body.result.contexts[7].parameters.any.original,
//       location: req.body.result.contexts[7].parameters.location.original,
//       role: req.body.result.contexts[7].parameters.assignment-role.original,
//       role_count: req.body.result.contexts[7].parameters.number-integer.original,
//       date: req.body.result.contexts[7].parameters.date5.original,
//       start_time: req.body.result.contexts[7].parameters.time.original,
//       end_time: req.body.result.contexts[7].parameters.time1.original,
//       experience_needed: req.body.result.contexts[7].parameters.candidate-experience.original,
//       pay_rate: req.body.result.contexts[7].parameters.number-integer2.original,
//       language_needed: req.body.result.contexts[7].parameters.language.original
//     };
//     let result = JSON.stringify(orderdata);
  
//     res.status(200).json({
//       source: 'webhook',
//       speech: req.body.lang,
//       displayText: req.body.lang
//     })
     res.send(JSON.stringify({
        "speech" : req.body.lang,
        "displayText" : req.body.lang
     }));
});
// router.post('/webhook', function (req, res) {
//     let result = req;
//     res.json(result);
//     let const = {
//         assignment_name: response.queryResult.outputContexts[7].parameters.any.original
//         location: response.queryResult.outputContexts[7].parameters.location.original
//         role: response.queryResult.outputContexts[7].parameters.assignment-role.original
//         arole_count: response.queryResult.outputContexts[7].parameters.number-integer.original
//         date: response.queryResult.outputContexts[7].parameters.date5.original
//         start_time: response.queryResult.outputContexts[7].parameters.time.original
//         end_time: response.queryResult.outputContexts[7].parameters.time1.original
//         experience_needed: response.queryResult.outputContexts[7].parameters.candidate-experience.original
//         pay_rate: response.queryResult.outputContexts[7].parameters.number-integer2.original
//         language_needed: response.queryResult.outputContexts[7].parameters.language.original
//         }
// })

module.exports = router;
