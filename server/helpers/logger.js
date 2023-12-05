const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;
const moment = require('moment');

const loggerFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const Logger = createLogger({
    level: 'debug',
    format: combine(
        colorize(),
        timestamp({ format: () => moment().format('ddd, DD MMM YYYY HH:mm:ss') }),
        loggerFormat
    ),
    transports: [new transports.Console()],
});

module.exports = Logger;
