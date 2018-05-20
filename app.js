var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');    //使用这个引擎

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res, next) {
  //res.send('wukong 欢迎你');
  // res.render(模板, 数据); //render  渲染  画
  res.render('firstBlood.ejs', {name: 'bajie'}); //render  渲染  画
});


app.get('/tiyu', function (req, res, next) {
  //res.send('wukong 欢迎你');
  // res.render(模板, 数据); //render  渲染  画
  res.render('tiyu.ejs', {name: '刘翔', actions:['训练', '比赛', '八卦', '九卦']}); //render  渲染  画
});

app.get('/yule', function (req, res, next) {
  //res.send('wukong 欢迎你');
  // res.render(模板, 数据); //render  渲染  画
  res.render('yule.ejs', {name: '文章', actions:['拍戏', '拍戏', '拍戏', '其他']});
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
