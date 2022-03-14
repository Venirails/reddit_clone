var express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const knexConfig = require('../knexfile');
//initialize knex
//const knex = require('knex')(knexConfig[process.env.NODE_ENV])

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
