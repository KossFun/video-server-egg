"use strict";

const Controller = require("egg").Controller;

class OkcmsController extends Controller {
  async index() {
    let query = this.ctx.query;

    let data = await this.service.okcms.getVideoList(query["t"], query["p"]);
    this.ctx.body = data;
  }

  async video() {
    let date = await this.service.okcms.getVideoType();
    this.ctx.body = date;
  }
}

module.exports = OkcmsController;
