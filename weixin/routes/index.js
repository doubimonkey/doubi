var express = require('express');

var checkSignature=require('./checkSignature');
var parsexml=require('./parsexml');
var replydata=require('./replydata');
var config=require('../config');
var url = require('url');
var router = express.Router();

/* check signature. */
router.get('/', function(req, res) {
	var _get = url.parse(req.url, true).query; 
    var signature = _get.signature;
    console.log("signature:"+signature);
    var timestamp = _get.timestamp;
    console.log("timestamp:"+timestamp);
    var nonce = _get.nonce;
    console.log("nonce:"+nonce);
    var echostr = _get.echostr;
    console.log("echostr:"+echostr);
  

    if(checkSignature(signature,timestamp,nonce,token)){

        res.send(echostr);

    }else{
        //  res.render('index', { title: 'Express' });
        res.send("error");
    }


});

/* process message from weixin. */
router.post('/',function(req,res){

    var str="";

    req.on("data", function(data){
        str = str + data.toString();
    });

    req.on("end",function(){
        parsexml(str,function(data){

            res.send(replydata(data));

        });
    });

});

module.exports = router;
