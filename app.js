const express = require('express');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const mongodb = require('./db/connect');

// const professionalRoutes = require('./routes/professional');
// const port : string | 8080 = process.env.PORT || 8080;
const port = process.env.PORT || 8080;
const app = express();

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));
app.use(bodyParser.json());
// https://cse341-contacts-frontend.netlify.app/
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
  'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
  );
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
})

.use('/', require( './routes'));

mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });

// app.listen(8080);
