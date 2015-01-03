/**
 * Created by kpyu on 2015/1/2.
 */
var db = require('./redis');


var user  ={
    account:'admin',
    pass:"admin",
    birthDay:new Date("")
};



var userDao =function(){};
module.exports = new userDao();
