'use strict'

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hello 小麦';
  }
}

module.exports = HomeController;