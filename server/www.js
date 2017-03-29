#!/usr/bin/env node
"use strict";
/**
 * Module dependencies.
 */

var app = require('./app');
var debug = require('debug')('schoolserver002:server');
var http = require('http');
const assert = require ('assert');

const MongoClient = require ('mongodb').MongoClient

console.log('reading environment var : ', process.env.NODE_HOSTED);

var config = {};

if (process.env.NODE_HOSTED) {
  config = require("../config").hosted
  config.isHosted = true;
} else {
  config = require("../config").local
  config.isHosted = false;
}

console.log(`Loading Config ${config.name}`);


/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '8082');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
var db;


var mongoURL = (config.isHosted) ? process.env.MONGODB_URI : config.mongoDbUrl;

MongoClient.connect(mongoURL,
    (err, database) => {
 
      if (err) {
        console.log('Can not connect to DB')
        process.exit();
      }

      assert (database != null, "Error Connecting to MongoDB")
      console.log("Connected to MongoDB");

      app.set('db', database);

      server.listen(port);
      server.on('error', onError);
      server.on('listening', onListening);
    });

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}
