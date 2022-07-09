console.log('hello');


// Require
const request = require('request');

// Request
request('https://appointmentthing.com/api/v1/appointments/list/?token=api1657322026ENuhMImlrwAv3oXf7xDO169472&type=TYPE', function(err, res, dat){

    // Parse
    var data = JSON.parse(dat);

    // Request OK?
    if(data.meta.code == '200'){

        // Log
        console.log(data);

    }
});
