const req = require('request');

const forecast = (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/forecast?access_key=49a3b8ae154b18f45e2b7d0c2089db66&query='+latitude+','+longitude+'';
    req({url: url,json: true},(error, response)=>{
        if(error){
            callback('Unable to connect to weather service',undefined);
        }else if(response.body.current.precip === null)
        {
            callback('Unable to find location',undefined);
        }else{
       // const data = response.body.features[0].center;
     //  callback(`longitude- ${data[1]} and latitude- ${data[0]}`)
       callback(undefined,`It is currently ${response.body.current.temperature} degrees out. There isa ${response.body.current.precip} chance of rain.`)

        }
    })
}

module.exports = forecast;