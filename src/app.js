// const express = require("express");
// const routes = require("./routes");
// sintaxe antiga, instalando o sucrase, permite usar a nova sintaxe (abaixo)

import express from 'express';
import path from 'path';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '../tmp/uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

// module.exports = new App().server;
// sintaxe antiga, instalando o sucrase, permite usar a nova sintaxe (abaixo)
export default new App().server;
