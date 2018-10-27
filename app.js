var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');

var app = express();

//app.use(morgan('combined'));
app.use(morgan('tiny'));

app.get('/', function(req, res){
    res.send('Hello');
})

app.listen(3000, function(){
    debug(`listening to port ${chalk.green('3000')}`);
})

