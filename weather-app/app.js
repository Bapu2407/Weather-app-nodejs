const req = require('request');
const forecast = require('./utilits/forecast');
const location = require('./utilits/location');


const address = process.argv[2];
if(!address)
{
    console.log('Please Provide an Address');
}else{
    location(address[2],(error, data) =>{
        if(error){
            return console.log(error);
        }
        forecast(data.latitude,data.longitude,(error,forecastdata)=>{
            if(error){
                return console.log(error);   
            }
            console.log(data.location);
            console.log(forecastdata);
        })
    })
}

