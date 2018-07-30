var winston = require('winston');
const logDir = 'd:/mongoDb/MongoDbPOC/Logs';
const tsFormat = () => (new Date()).toLocaleTimeString();
var logger = new(winston.Logger)({
    transports: [
        // colorize the output to the console
        new(winston.transports.Console)({timestamp: tsFormat, colorize: true, level: 'debug'}),
        new(require('winston-daily-rotate-file'))({
            filename: logDir + '/' + '-' + 'account-service.log',
            timestamp: tsFormat,
            datePattern: 'yyyy-MM-dd',
            prepend: true,
            json: false,
            level: 'debug',
            handleExceptions: true
        })
    ],
    exitOnError: false
});
module.exports = logger;