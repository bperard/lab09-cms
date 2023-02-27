'use strict';

function handleNotFound(req, res, next) {
  const error = {
    status: 404,
    message: 'Route not found',
  };
  res.status(404).json(error);
}

module.exports = handleNotFound;