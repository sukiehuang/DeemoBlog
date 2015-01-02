var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(function(req, res) {
  debugger;
  console.log(req.path);
  if(req.path.indexOf('/api')>=0){
    req.send("server text");
  }else{
    //angular启动页
    res.sendfile('../app/index.html')
  }
});

module.exports = router;
