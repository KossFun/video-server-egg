'use strict';

class Body2json {
    constructor(code, msg, data='') {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
}

module.exports = Body2json;