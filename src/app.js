// const express = require("express");
// const routes = require("./routes");
// sintaxe antiga, instalando o sucrase, permite usar a nova sintaxe (abaixo)

import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

// module.exports = new App().server;
// sintaxe antiga, instalando o sucrase, permite usar a nova sintaxe (abaixo)
export default new App().server;
