const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const passport = require('passport');
const { createErrorResponse } = require('./response');
const logger = require('./logger');
const pino = require('pino-http')({
  logger,
});

const authenticate = require('./auth');

const app = express();

app.use(pino);
app.use(helmet());
app.use(cors());
app.use(compression());

passport.use(authenticate.strategy());
app.use(passport.initialize());

app.use('/', require('./routes'));

app.use((req, res) => {
  const message = `Route not found: ${req.method} ${req.originalUrl}`;
  logger.warn(message);
  res.status(404).json(createErrorResponse(404, message));
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'unable to process request';

  if (status > 499) {
    logger.error({ err }, `Error processing request`);
  }

  res.status(status).json(createErrorResponse(status, message));
});

module.exports = app;
