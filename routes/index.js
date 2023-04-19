const routes = require('express').Router();
const names = require('../controllers');

routes.get('/', names.displayName); //localhost:3000

module.exports = routes;