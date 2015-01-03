/**
 * Created by kpyu on 2015/1/2.
 */
var redis = require('redis');
var db    = redis.createClient();

db.on('error',function(err){
  console.log("ERROR:"+err)
});
db.on('connect',function(){
    db.set("userKey","admin",function(err,reply){
      console.log(reply.toString());
    });
    db.get('userKey',function(err,reply){
      console.log(reply);
    });
  db.get('passKey',function(err,reply){
    if(!reply){
      db.set("passKey","admin",function(err,reply){
        console.log(reply.toString());
      });
    }
    console.log(reply);
  })
});
module.exports = db;
