'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async echo() {
    return 'home service'
  }
}

module.exports = HomeService;
