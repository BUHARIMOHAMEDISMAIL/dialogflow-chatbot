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
let orderdata = {
    assignment_name: 'Testing',
    location: 'Los vegas',
    role: 'catering Staff',
    role_count: 2,
    date: '10-02-2018',
    start_time: '04:00 am',
    end_time: '09:00 pm',
    experience_needed: 'Rookie',
    pay_rate: 20,
    language_needed: 'english'
    };
router.post('/webhook', function (req, res) {
    let result = orderdata;
    res.json(result);
})
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
