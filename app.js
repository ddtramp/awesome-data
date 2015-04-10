
/**
 * Module dependencies.
 */

var express = require('express');

var routes = require('./routes');
var user = require('./routes/user');

var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', 3001); // set port

// app.set('views', __dirname + '/views');  // no view to show 
// app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
// app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.get('/users/count', user.list);
app.post('/users/count', user.list);

app.get('/', routes.index);

app.get('*', function (req, res) {
	res.send(500, {message: 'Oops, you request uri is not avaliable, please see api...'});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
