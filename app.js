/**
 * 模块依赖
 * @type {exports}
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');


var app = express();
var server = http.createServer(app);

// view engine setup
//设置模板引擎
app.set('views', path.join(__dirname, 'app'));
app.set('view engine', 'html');
//app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/app/favicon.ico'));

///环境变量配置
app.set('port',process.env.PORT||3000);
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
console.log(express.static(path.join(__dirname, 'app')));
app.use(express.static(path.join(__dirname, 'app')));

//开发模式
if('development' === app.get('env')){
    //app.use(express.erroHandler());
}




//路由解析
app.use(function(req, res) {
  debugger;
  console.log(req.path);
  var isApi = req.path.indexOf('/api')+1;
  if(isApi){
    req.send("server text");
  }else{
    //angular启动页
    res.sendfile('app/index.html')
  }
});





// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(3000,function() {
    console.log('Express server listening on port 3000' );
  }
);

module.exports = app;
