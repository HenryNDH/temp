const express = require('express');
const { createSuccessResponse } = require('../../src/response');
const { version, author } = require('../../package.json');
const { authenticate } = require('../auth');

const router = express.Router();

router.use('/v1', authenticate(), require('./api'));

router.get('/', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache');
  res.status(200).json({
    status: 'ok',
    author,
    githubUrl: 'https://github.com/HenryNDH/fragments',
    version,
  });
});

router.get('/health', (req, res) => {
  res.json(createSuccessResponse());
});

module.exports = router;
