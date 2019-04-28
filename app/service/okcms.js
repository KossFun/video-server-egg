'use strict';

const Service = require('egg').Service;
const parseString = require('xml2js').parseString;
const JsonResult = require('../body2json');


class OkcmsService extends Service {
    async getVideoType() {
        let url = this.config.morecmsApi;
        let res = await this.ctx.curl(url);
        let data = res.data;
        parseString(data, { explicitArray : false, ignoreAttrs : true }, function(err, result) {
            data = result;
        });
        this.logger.info(JSON.stringify(data));
        let json = new JsonResult(1, 'success', data['rss']['class']['ty']);
        return json;
    }
    

    async getVideoList(type, pg) {
        let url = this.config.morecmsApi + '?ac=videolist&t=' + type + '&pg=' + pg +'&limit=20';
        let res = await this.ctx.curl(url);
        let data = res.data;
        
        parseString(data, { explicitArray : false, ignoreAttrs : true }, function(err, result) {
            data = result;
        });
        //this.logger.info(data['rss']['list']);
        if(data['rss']['list'] === '') return new JsonResult(0, 'error', []);
        
        let json = new JsonResult(1, 'success', data['rss']['list']['video']);
        return json;
    }
}

module.exports = OkcmsService;