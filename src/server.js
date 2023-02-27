'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3002;
const start = (PORT) => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
}

module.exports = { app, start };