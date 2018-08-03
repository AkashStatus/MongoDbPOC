var express = require('express')
var app = express();
var port = (process.env.VCAP_APP_PORT || 8080)
var bodyParser= require('body-parser')
app.use(bodyParser.json())
var mongoose= require('mongoose')
var db = mongoose.connection;
var connectionString = "mongodb://akash:akash1234@ds143511.mlab.com:43511/testpoc"

mongoose.connect(connectionString,{ useNewUrlParser:true },function(err,response){
    if(response){
    console.log("connected")
    }
    else{
        console.log(err)
        process.exit(1);
    }
})   

app.use(require('./routes/register'))
var listener = app.listen(port,function(){
    console.log("Service started at port",listener.address().port)
})