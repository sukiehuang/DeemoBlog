/**
 * Created by kpyu on 2015/1/2.
 */
var redis = require('redis');
var db    = redis.createClient();


exports.redis = db;