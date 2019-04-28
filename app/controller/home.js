'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let data = await this.service.home.echo();
    this.ctx.body = data;
  }
}

module.exports = HomeController;
