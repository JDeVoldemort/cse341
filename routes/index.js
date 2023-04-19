const routes = require('express').Router();
const names = require('../controllers');

routes.get('/', names.displayName);

module.exports = routes;