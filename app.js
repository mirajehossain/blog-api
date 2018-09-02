const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
// let options = {
//     explorer : true
// };


/*const options = {
    explorer : true,
    swaggerDefinition: {
        info: {
            title: 'REST - Swagger',
            version: '1.0.0',
            description: 'REST API with Swagger doc',
            contact: {
                email: 'contact@danielpecos.com'
            }
        },
        tags: [
            {
                name: 'stocks',
                description: 'Stocks API'
            }
        ],
        schemes: ['http'],
        host: 'localhost:3000',
        basePath: '/'
    },
    apis: ['./routes/index.js']
}*/


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


/**

// Routers
const auth = require('./app/auth/endpoints/auth');
app.use('/api/auth', require('./app/auth/router'));
app.all('/api/v1/*', auth.authenticate, auth.getCurrentUser);

const user = require('./app/user/router');
app.use('/api/v1/user',auth.isUser, user);

*/
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

});

module.exports = app;
