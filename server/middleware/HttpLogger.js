const Logger = require('../helpers/logger');

const LogRequest = (req, res, next) => {
    const start = process.hrtime();

    Logger.http({
        message: `Request | Method: ${req.method} | URL: ${req.originalUrl}`,
        metadata: {
            method: req.method,
            url: req.originalUrl,
            headers: req.headers,
            body: req.body,
        },
    });

    res.on('finish', () => {
        const duration = process.hrtime(start);
        const durationInMs = duration[0] * 1000 + duration[1] / 1e6;

        Logger.http({
            message: `Response | Method: ${req.method} | URL: ${req.originalUrl} | Status: ${res.statusCode} | Duration: ${durationInMs.toFixed(2)} ms`,
            metadata: {
                status: res.statusCode,
                headers: res.getHeaders(),
            },
        });
    });

    next();
};

module.exports = { LogRequest };
