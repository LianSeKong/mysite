var createError = require('http-errors');
const session = require('express-session');
const md5 = require('md5');

var express = require('express');
require('express-async-errors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { ForbiddenError, ServiceError } = require('./utils/errors');
require('dotenv').config(); // 默认读取项目根目录下的.env 环境变量文件
require('./dao/db')
const { expressjwt } = require('express-jwt');

const adminRouter = require('./routes/admin');
const captchaRouter = require('./routes/captcha');
const bannerRouter = require('./routes/banner');
const uploadRouter = require('./routes/upload');
const blogTypeRouter = require('./routes/blogType');
const blogRouter = require('./routes/blog');
const projectRouter = require('./routes/project');
const messageRouter = require('./routes/message');


var app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use(expressjwt({
  secret: md5(process.env.JWT_SIGN), // 秘钥
  algorithms: ['HS256'], // 算法
}).unless({ // 排除不需要token认证的路由
  path: [ { url: /^\/api\/blog.*$/, methods: ["GET"] }, { url: /^\/api\/project.*$/, methods: ["GET"] }, /^\/api\/admin/,/^\/banner/, { url: "/res/captcha", methods: ["GET", "PUT", 'POST'] }]
}))



app.use('/api/admin', adminRouter);
app.use('/res/captcha', captchaRouter);
app.use('/banner', bannerRouter)
app.use('/api/upload', uploadRouter)
app.use('/api/blogtype', blogTypeRouter);
app.use('/api/blog', blogRouter);
app.use('/api/project', projectRouter);
app.use('/api/message', messageRouter);
app.use('/api/comment', messageRouter);

// error handler
app.use(function(err, req, res, next) {

  if (err.name === 'UnauthorizedError') { 
    // No authorization token was found
    res.send(new ForbiddenError('未登录，或登录已经过期！').toResponseJSON())
  } else if(err instanceof ServiceError) {
    res.send(err.toResponseJSON())
  } else {
    console.log(err);
    res.render('error: ', err);
  }
});







// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



module.exports = app;
