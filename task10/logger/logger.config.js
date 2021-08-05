const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
const { combine, timestamp, printf } = format;
 
const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

var transport = new transports.DailyRotateFile({
  filename: './log',
  datePattern: 'YYYY-MM-DD',
  prepend: true,
  level: 'debug'
});
 
const logger = createLogger({
level: 'debug',
format: combine(
    timestamp( {format: 'YYYY-MM-DD HH:mm:ss'}),
    format.errors({stack: true}),
    logFormat
    ),
transports: [
    new transports.Console({ level: 'info' }),
    transport],

    exceptionHandlers: [
      new transports.File({ filename: 'exceptions.log' })
    ]
  });



module.exports = logger;